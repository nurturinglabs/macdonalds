const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      body: JSON.stringify({
        text: "Welcome to McDonald's! Which language would you like to order in?",
        model: 'bulbul:v3',
        target_language_code: 'en-IN',
        speaker: 'shubh',
        pace: 1.0
      })
    });

    const data = await ttsResponse.json();

    return res.status(200).json({ audio: (data.audios && data.audios[0]) || null });
  } catch (error) {
    console.error('Welcome TTS error:', error);
    return res.status(500).json({ error: 'Failed to generate welcome audio.' });
  }
};
