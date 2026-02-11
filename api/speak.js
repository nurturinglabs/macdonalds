const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, language_code } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'No text provided.' });
    }

    const targetLang = language_code || 'en-IN';

    console.log('[SPEAK] TTS text:', text.substring(0, 100), '| Lang:', targetLang);

    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      body: JSON.stringify({
        text,
        model: 'bulbul:v3',
        target_language_code: targetLang,
        speaker: 'shubh',
        pace: 1.0
      })
    });

    const data = await ttsResponse.json();
    const audio = (data.audios && data.audios[0]) || null;

    return res.status(200).json({ audio });

  } catch (error) {
    console.error('Speak TTS error:', error);
    return res.status(500).json({ error: 'Failed to generate speech.' });
  }
};
