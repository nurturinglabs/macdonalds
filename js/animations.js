/* ═══════════════════════════════════════════
   animations.js — Waveform + Transitions
   ═══════════════════════════════════════════ */

// Waveform audio visualizer (real-time when recording)
let animationFrameId = null;
let audioContext = null;
let analyser = null;

function startWaveformAnimation(stream) {
  const waveform = document.getElementById('waveform');
  const bars = waveform.querySelectorAll('.bar');

  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 32;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function animate() {
      analyser.getByteFrequencyData(dataArray);

      bars.forEach((bar, i) => {
        const value = dataArray[i % bufferLength] || 0;
        const height = Math.max(6, (value / 255) * 32);
        bar.style.height = height + 'px';
        bar.style.background = '#FFC72C';
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();
  } catch (e) {
    // Fallback: CSS animation handles it
    waveform.classList.add('active');
  }
}

function stopWaveformAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  if (audioContext) {
    audioContext.close().catch(() => {});
    audioContext = null;
  }

  const waveform = document.getElementById('waveform');
  waveform.classList.remove('active');

  // Reset bars
  waveform.querySelectorAll('.bar').forEach(bar => {
    bar.style.height = '6px';
    bar.style.background = '';
  });
}

function startSpeakingAnimation() {
  const waveform = document.getElementById('waveform');
  waveform.classList.add('speaking');
}

function stopSpeakingAnimation() {
  const waveform = document.getElementById('waveform');
  waveform.classList.remove('speaking');
}

// Mobile panel expand/collapse
function initMobilePanel() {
  const panel = document.getElementById('order-panel');
  const overlay = document.getElementById('mobile-overlay');
  const micBtn = document.getElementById('mic-btn');

  if (window.innerWidth > 768) return;

  // Tap mic to expand panel on mobile
  panel.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !panel.classList.contains('expanded')) {
      panel.classList.add('expanded');
      overlay.classList.add('active');
    }
  });

  // Tap overlay to collapse
  overlay.addEventListener('click', () => {
    panel.classList.remove('expanded');
    overlay.classList.remove('active');
  });
}

// Smooth scroll for nav links
function initSmoothScroll() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').replace('#', '');
      const target = document.getElementById(`cat-${id}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobilePanel();
  initSmoothScroll();
});
