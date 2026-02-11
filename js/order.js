/* ═══════════════════════════════════════════
   order.js — Voice Ordering (3-Phase Flow)
   Phase 1: Welcome → detect language → switch menu
   Phase 2: "Ready to take your order" TTS → auto-listen
   Phase 3: Order loop → cart → order complete
   ONE click starts the entire session.
   ═══════════════════════════════════════════ */

let mediaRecorder;
let audioChunks = [];
let conversationHistory = [];
let currentLanguage = null;

// Session state
let isRecording = false;
let isProcessing = false;
let isSessionActive = false;
let sessionPhase = 'idle'; // idle | language | ordering

// Silence detection
let silenceContext = null;
let silenceCheckRAF = null;
const SILENCE_THRESHOLD = 0.015;
const SILENCE_DURATION = 2000;
const MIN_RECORD_TIME = 1200;

const micBtn = document.getElementById('mic-btn');
const micLabel = document.getElementById('mic-label');
const langBadge = document.getElementById('language-badge');

const LANG_NAMES = {
  'hi-IN': '\u0939\u093F\u0928\u094D\u0926\u0940',
  'kn-IN': '\u0C95\u0CA8\u0CCD\u0CA8\u0CA1',
  'ta-IN': '\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD',
  'te-IN': '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41',
  'ml-IN': '\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02',
  'bn-IN': '\u09AC\u09BE\u0982\u09B2\u09BE',
  'mr-IN': '\u092E\u0930\u093E\u0920\u0940',
  'gu-IN': '\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0',
  'od-IN': '\u0B13\u0B21\u0B3C\u0B3F\u0B06',
  'pa-IN': '\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40',
  'en-IN': 'English'
};

const READY_MESSAGES = {
  'hi-IN': "Namaste! Main aapka order lene ke liye taiyaar hoon. Aap kya lena chahenge?",
  'kn-IN': "Namaskara! Neevu yenu order maadalu ishtapadutteeraa? Naan tayaaraagiddene.",
  'ta-IN': "Vanakkam! Ungal order edukka naan thayaaraaga irukkiren. Enna vendum?",
  'te-IN': "Namaskaram! Mee order teesukovaadaaniki nenu siddhanga unnanu. Meeku emi kaavali?",
  'ml-IN': "Namaskaram! Ningalude order edukkan njan ready aanu. Entha venam?",
  'bn-IN': "Namaskar! Aami aapnar order nite prastut. Aapni ki neben?",
  'mr-IN': "Namaskar! Mi tumcha order ghyayla tayar aahe. Tumhala kay hava?",
  'gu-IN': "Namaskar! Hu tamaro order leva taiyar chhu. Tamne shu joiye?",
  'od-IN': "Namaskar! Mu aapanka order neba paain ready. Aapanka kana darkar?",
  'pa-IN': "Sat Sri Akaal! Main tuhaada order lain layi taiyaar haan. Tuhanu ki chaahida?",
  'en-IN': "Great! I'm ready to take your order. What would you like?"
};

// ═══ ROBUST AUDIO PLAYBACK ═══
// Plays base64 audio and resolves when done. Has a timeout
// fallback in case onended never fires (browser quirks with data URIs).
function playAudio(base64Audio) {
  return new Promise((resolve) => {
    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      stopSpeakingAnimation();
      resolve();
    };

    try {
      startSpeakingAnimation();
      micLabel.textContent = 'Speaking...';
      const audio = new Audio('data:audio/wav;base64,' + base64Audio);

      audio.onended = done;
      audio.onerror = done;

      // Safety timeout: if audio doesn't finish in 30s, force continue
      const maxDuration = 30000;
      const safetyTimer = setTimeout(done, maxDuration);
      audio.onended = () => { clearTimeout(safetyTimer); done(); };
      audio.onerror = () => { clearTimeout(safetyTimer); done(); };

      audio.play().then(() => {
        // Audio started playing — also set a tighter timeout based on duration
        if (audio.duration && isFinite(audio.duration)) {
          clearTimeout(safetyTimer);
          setTimeout(done, (audio.duration * 1000) + 500);
        }
      }).catch(() => {
        clearTimeout(safetyTimer);
        done();
      });
    } catch (e) {
      done();
    }
  });
}

// ═══ SINGLE TAP HANDLER ═══
micBtn.addEventListener('click', handleMicTap);

async function handleMicTap() {
  if (isProcessing) return;

  if (!isSessionActive) {
    await startSession();
  } else {
    endSession();
  }
}

// ═══ SESSION LIFECYCLE ═══
async function startSession() {
  isSessionActive = true;
  sessionPhase = 'language';
  conversationHistory = [];
  currentLanguage = null;
  micBtn.classList.add('active');
  micLabel.textContent = 'Loading...';

  // Clear previous conversation
  document.getElementById('conversation').innerHTML = '';

  // Phase 1: Play welcome asking for language, then auto-listen
  await playWelcomeMessage();
}

function endSession() {
  isSessionActive = false;
  sessionPhase = 'idle';
  if (isRecording) stopRecordingRaw();
  cleanupSilenceDetection();
  micBtn.classList.remove('active', 'recording');
  micLabel.textContent = 'Tap to start';
}

// ═══ PHASE 1: WELCOME → DETECT LANGUAGE ═══
async function playWelcomeMessage() {
  try {
    showAgentMessage("Welcome to McDonald's! Which language would you like to order in?");

    const response = await fetch('/api/welcome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}'
    });
    const data = await response.json();

    if (data.audio) {
      await playAudio(data.audio);
    }
  } catch (err) {
    console.error('Welcome error:', err);
  }

  // Auto-listen after welcome finishes (or fails)
  if (isSessionActive) {
    startRecording();
  }
}

// ═══ RECORDING WITH SILENCE DETECTION ═══
async function startRecording() {
  if (!isSessionActive) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        sampleRate: 16000,
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true
      }
    });

    mediaRecorder = new MediaRecorder(stream, {
      mimeType: MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm'
    });

    audioChunks = [];
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };
    mediaRecorder.start(100);

    isRecording = true;
    micBtn.classList.add('recording');
    micLabel.textContent = 'Listening...';
    startWaveformAnimation(stream);
    startSilenceDetection(stream);

    if (window.innerWidth <= 768) {
      document.getElementById('order-panel').classList.add('expanded');
      document.getElementById('mobile-overlay').classList.add('active');
    }
  } catch (err) {
    console.error('Mic error:', err);
    showAgentMessage("Couldn't access your microphone. Please allow mic access.");
    endSession();
  }
}

// ═══ SILENCE DETECTION ═══
function startSilenceDetection(stream) {
  cleanupSilenceDetection();

  silenceContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = silenceContext.createMediaStreamSource(stream);
  const analyser = silenceContext.createAnalyser();
  analyser.fftSize = 512;
  source.connect(analyser);

  const dataArray = new Float32Array(analyser.frequencyBinCount);
  let silenceStart = null;
  const recordStart = Date.now();

  function check() {
    if (!isRecording || !isSessionActive) return;

    analyser.getFloatTimeDomainData(dataArray);
    const rms = Math.sqrt(dataArray.reduce((sum, v) => sum + v * v, 0) / dataArray.length);

    if (Date.now() - recordStart > MIN_RECORD_TIME) {
      if (rms < SILENCE_THRESHOLD) {
        if (!silenceStart) silenceStart = Date.now();
        if (Date.now() - silenceStart >= SILENCE_DURATION) {
          stopRecordingAndProcess();
          return;
        }
      } else {
        silenceStart = null;
      }
    }

    silenceCheckRAF = requestAnimationFrame(check);
  }

  silenceCheckRAF = requestAnimationFrame(check);
}

function cleanupSilenceDetection() {
  if (silenceCheckRAF) {
    cancelAnimationFrame(silenceCheckRAF);
    silenceCheckRAF = null;
  }
  if (silenceContext) {
    silenceContext.close().catch(() => {});
    silenceContext = null;
  }
}

// Stop recording WITHOUT processing
function stopRecordingRaw() {
  if (!mediaRecorder || mediaRecorder.state !== 'recording') return;
  isRecording = false;
  cleanupSilenceDetection();
  stopWaveformAnimation();
  micBtn.classList.remove('recording');
  try {
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(t => t.stop());
  } catch (e) { /* ignore */ }
}

// Stop recording AND send for processing
async function stopRecordingAndProcess() {
  if (!mediaRecorder || mediaRecorder.state !== 'recording') return;

  isRecording = false;
  isProcessing = true;
  cleanupSilenceDetection();
  micBtn.classList.remove('recording');
  micLabel.textContent = 'Processing...';
  stopWaveformAnimation();

  const audioBase64 = await new Promise((resolve) => {
    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    };
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(t => t.stop());
  });

  // Route to the correct phase handler
  if (sessionPhase === 'language') {
    await handleLanguageDetection(audioBase64);
  } else if (sessionPhase === 'ordering') {
    await handleOrderProcessing(audioBase64);
  }
}

// ═══ PHASE 1 HANDLER: DETECT LANGUAGE ═══
async function handleLanguageDetection(audioBase64) {
  try {
    const response = await fetch('/api/detect-language', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ audio_base64: audioBase64 })
    });

    const data = await response.json();

    if (data.error) {
      showAgentMessage("Sorry, I couldn't hear that. Please say which language you'd like.");
      isProcessing = false;
      if (isSessionActive) startRecording();
      return;
    }

    // Set detected language (don't show transcript for Phase 1)
    currentLanguage = data.detected_language || 'en-IN';
    showLanguageBadge(currentLanguage);

    // Switch menu to detected language
    if (currentLanguage !== 'en-IN') {
      await translateMenu(currentLanguage);
    }

    // Transition to Phase 2: "Ready to take your order"
    await transitionToOrdering();

  } catch (err) {
    console.error('Language detection error:', err);
    showAgentMessage("Something went wrong. Please try again.");
    isProcessing = false;
    if (isSessionActive) startRecording();
  }
}

// ═══ PHASE 2: READY MESSAGE → START ORDERING ═══
async function transitionToOrdering() {
  sessionPhase = 'ordering';

  const readyText = READY_MESSAGES[currentLanguage] || READY_MESSAGES['en-IN'];
  showAgentMessage(readyText);

  try {
    const response = await fetch('/api/speak', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: readyText,
        language_code: currentLanguage
      })
    });

    const data = await response.json();
    isProcessing = false;

    if (data.audio) {
      await playAudio(data.audio);
    }
  } catch (err) {
    console.error('Ready TTS error:', err);
    isProcessing = false;
  }

  // Auto-listen after ready message
  if (isSessionActive) {
    startRecording();
  }
}

// ═══ PHASE 3 HANDLER: ORDER PROCESSING ═══
async function handleOrderProcessing(audioBase64) {
  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audio_base64: audioBase64,
        conversation_history: conversationHistory,
        cart: cart,
        language_code: currentLanguage
      })
    });

    const data = await response.json();

    if (data.error) {
      showAgentMessage("Sorry, I couldn't hear that. Please try again.");
      isProcessing = false;
      if (isSessionActive) startRecording();
      return;
    }

    // Show conversation
    if (data.transcript) showUserMessage(data.transcript);
    if (data.response_text) showAgentMessage(data.response_text);

    // Update cart
    if (data.cart_updates && data.cart_updates.length > 0) {
      applyCartUpdates(data.cart_updates);
    }

    // Update conversation history
    if (data.transcript && data.response_text) {
      conversationHistory.push(
        { role: 'user', content: data.transcript },
        { role: 'assistant', content: data.response_text }
      );
    }

    // Order complete?
    if (data.order_complete) {
      // End session FIRST so mic never auto-restarts
      isProcessing = false;
      endSession();
      if (data.response_audio) {
        await playAudio(data.response_audio);
      }
      showConfirmSection();
      return;
    }

    // Play audio response, then auto-listen again
    isProcessing = false;
    if (data.response_audio) {
      await playAudio(data.response_audio);
    }

    // Auto-listen for next item
    if (isSessionActive) {
      startRecording();
    }

  } catch (err) {
    console.error('Order error:', err);
    showAgentMessage("Something went wrong. Please try again.");
    isProcessing = false;
    if (isSessionActive) startRecording();
  }
}

// ═══ UI HELPERS ═══
function showLanguageBadge(langCode) {
  const name = LANG_NAMES[langCode] || langCode;
  langBadge.innerHTML = `\u25CF ${name}`;
  langBadge.style.display = 'inline-flex';
}

function showUserMessage(text) {
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user indic-text';
  bubble.innerHTML = `<span class="bubble-label">\uD83D\uDC64</span> ${escapeHtml(text)}`;
  document.getElementById('conversation').appendChild(bubble);
  scrollConversation();
}

function showAgentMessage(text) {
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble agent indic-text';
  bubble.innerHTML = `<span class="bubble-label">\uD83E\uDD16</span> ${escapeHtml(text)}`;
  document.getElementById('conversation').appendChild(bubble);
  scrollConversation();
}

function scrollConversation() {
  const conv = document.getElementById('conversation');
  conv.scrollTop = conv.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
