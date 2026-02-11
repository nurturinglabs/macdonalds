const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { texts, target_language, source_language } = req.body;

    if (!texts || !target_language) {
      return res.status(400).json({ error: 'Missing texts or target_language' });
    }

    const translations = [];

    // Translate each text using Sarvam Translate API
    for (const text of texts) {
      try {
        const response = await fetch('https://api.sarvam.ai/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-subscription-key': process.env.SARVAM_API_KEY
          },
          body: JSON.stringify({
            input: text,
            source_language_code: source_language || 'en-IN',
            target_language_code: target_language,
            model: 'mayura:v1'
          })
        });

        const data = await response.json();
        translations.push(data.translated_text || text);
      } catch (err) {
        console.error(`Translation error for "${text}":`, err);
        translations.push(text); // fallback to original
      }
    }

    return res.status(200).json({ translations });

  } catch (error) {
    console.error('Translation error:', error);
    return res.status(500).json({ error: 'Translation failed.' });
  }
};
