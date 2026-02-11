const FormData = require('form-data');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { audio_base64 } = req.body;

    if (!audio_base64) {
      return res.status(400).json({ error: 'No audio received.' });
    }

    const audioBuffer = Buffer.from(audio_base64, 'base64');

    const formData = new FormData();
    formData.append('file', audioBuffer, {
      filename: 'recording.webm',
      contentType: 'audio/webm'
    });
    formData.append('language_code', 'unknown');
    formData.append('model', 'saarika:v2.5');

    console.log('[DETECT-LANG] Calling Saarika STT...');
    const sttResponse = await fetch('https://api.sarvam.ai/speech-to-text', {
      method: 'POST',
      headers: {
        'api-subscription-key': process.env.SARVAM_API_KEY,
        ...formData.getHeaders()
      },
      body: formData
    });

    const sttData = await sttResponse.json();
    console.log('[DETECT-LANG] STT response:', JSON.stringify(sttData).substring(0, 200));

    const transcript = sttData.transcript || '';
    const detectedLang = sttData.language_code || 'en-IN';

    if (!transcript || transcript.trim() === '') {
      return res.status(400).json({ error: 'Could not hear clearly.' });
    }

    console.log('[DETECT-LANG] Transcript:', transcript, '| Language:', detectedLang);

    return res.status(200).json({
      transcript,
      detected_language: detectedLang
    });

  } catch (error) {
    console.error('Detect language error:', error);
    return res.status(500).json({ error: 'Error detecting language.' });
  }
};
