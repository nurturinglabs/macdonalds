const FormData = require('form-data');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { audio_base64, conversation_history, cart, language_code } = req.body;

    console.log('[ORDER] Received request, audio length:', audio_base64 ? audio_base64.length : 0, '| lang:', language_code);

    if (!audio_base64) {
      return res.status(400).json({ error: 'No audio received.' });
    }

    // ═══════════════════════════════════════════
    // STEP 1: SAARIKA v2.5 — Detect language + transcribe
    // ═══════════════════════════════════════════

    const audioBuffer = Buffer.from(audio_base64, 'base64');
    console.log('[ORDER] Audio buffer size:', audioBuffer.length, 'bytes');

    const formData = new FormData();
    formData.append('file', audioBuffer, {
      filename: 'recording.webm',
      contentType: 'audio/webm'
    });
    formData.append('language_code', language_code || 'unknown');
    formData.append('model', 'saarika:v2.5');

    console.log('[ORDER] Calling Saarika STT...');
    const sttResponse = await fetch('https://api.sarvam.ai/speech-to-text', {
      method: 'POST',
      headers: {
        'api-subscription-key': process.env.SARVAM_API_KEY,
        ...formData.getHeaders()
      },
      body: formData
    });

    const sttData = await sttResponse.json();
    console.log('[ORDER] STT response:', JSON.stringify(sttData).substring(0, 200));

    const customerText = sttData.transcript;
    const detectedLang = sttData.language_code;

    if (!customerText || customerText.trim() === '') {
      console.log('[ORDER] No transcript detected');
      return res.status(400).json({ error: 'Could not hear clearly.' });
    }

    console.log('[ORDER] Transcript:', customerText, '| Language:', detectedLang);

    // ═══════════════════════════════════════════
    // STEP 2: SARVAM-M — Understand order
    // ═══════════════════════════════════════════

    const menuContext = `
MCDONALD'S INDIA MENU:

VEG BURGERS:
- McAloo Tikki: ₹59
- McVeggie: ₹135
- McSpicy Paneer: ₹219
- Veg Maharaja Mac: ₹229
- Veg Pizza McPuff: ₹40

NON-VEG BURGERS:
- McChicken: ₹175
- McSpicy Chicken: ₹219
- Chicken Maharaja Mac: ₹249
- Fillet-O-Fish: ₹179
- McEgg: ₹59

WRAPS:
- Spicy Paneer Wrap: ₹199
- Spicy Chicken Wrap: ₹209

SIDES:
- French Fries: Small ₹79, Medium ₹99, Large ₹119
- Chicken McNuggets: 6pcs ₹169, 9pcs ₹229

DRINKS:
- Coca-Cola: Small ₹59, Medium ₹89, Large ₹119
- Sprite: Medium ₹89
- Fanta: Medium ₹89
- McCafé Latte: ₹149
- McCafé Cappuccino: ₹149

DESSERTS:
- McFlurry: ₹129
- Soft Serve: ₹25
- Hot Fudge Sundae: ₹69

HAPPY MEALS:
- Veg Happy Meal: ₹199
- Chicken Happy Meal: ₹229

VALUE MEALS (COMBOS):
- McAloo Tikki Meal: ₹149
- McChicken Meal: ₹299
- Maharaja Mac Meal: ₹399
`;

    const customerLang = language_code || detectedLang || 'en-IN';

    const systemPrompt = `You are a friendly McDonald's India ordering assistant. The customer's language is ${customerLang}. You MUST respond in that language.

${menuContext}

RULES:
1. Respond in ${customerLang}. Use that language for all responses.
2. Extract order items with exact menu names, quantities, sizes, and prices.
3. If customer says something vague like "burger", ask which one they want.
4. If customer says "meal" or "combo", suggest a value meal.
5. After adding items, ask "Anything else?" in their language.
6. When customer says "that's it", "done", "no", "bas", or similar → set order_complete to true and give a summary with total.
7. Be warm, quick, and helpful — like a real McDonald's counter person.
8. If size not specified for fries/drinks, default to Medium.
9. Use menu item names as-is (don't translate McAloo Tikki etc.)

CURRENT CART: ${JSON.stringify(cart || [])}

RESPONSE FORMAT — valid JSON:
{
  "response_text": "Your response to the customer in their language",
  "cart_updates": [
    {
      "action": "add",
      "item_id": "mcaloo-tikki",
      "item_name": "McAloo Tikki",
      "quantity": 1,
      "size": null,
      "price": 59
    }
  ],
  "order_complete": false,
  "needs_clarification": false,
  "clarification_question": null
}

ITEM IDS: mcaloo-tikki, mcveggie, mcspicy-paneer, veg-maharaja, mcpuff-veg, mcchicken, mcspicy-chicken, chicken-maharaja, fillet-o-fish, mcegg, paneer-wrap, chicken-wrap, fries-small, fries-medium, fries-large, nuggets-6, nuggets-9, coke-small, coke-medium, coke-large, sprite-medium, fanta-medium, mccafe-latte, mccafe-cappuccino, mcflurry, soft-serve, sundae, happy-veg, happy-chicken, combo-mcaloo, combo-mcchicken, combo-maharaja`;

    const messages = [
      { role: 'system', content: systemPrompt }
    ];

    if (conversation_history && conversation_history.length > 0) {
      conversation_history.forEach(msg => messages.push(msg));
    }

    messages.push({ role: 'user', content: customerText });

    console.log('[ORDER] Calling Sarvam-M LLM...');
    const llmResponse = await fetch('https://api.sarvam.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`
      },
      body: JSON.stringify({
        model: 'sarvam-m',
        messages,
        temperature: 0.3,
        max_tokens: 500
      })
    });

    const llmData = await llmResponse.json();
    console.log('[ORDER] LLM response status:', llmResponse.status);
    console.log('[ORDER] LLM raw:', JSON.stringify(llmData).substring(0, 300));

    const assistantMessage = llmData.choices[0].message.content;
    console.log('[ORDER] Assistant says:', assistantMessage.substring(0, 200));

    let orderResult;
    try {
      const cleaned = assistantMessage.replace(/```json|```/g, '').trim();
      orderResult = JSON.parse(cleaned);
    } catch (e) {
      orderResult = {
        response_text: assistantMessage,
        cart_updates: [],
        order_complete: false
      };
    }

    // ═══════════════════════════════════════════
    // STEP 3: BULBUL V3 — Speak response in customer's language
    // ═══════════════════════════════════════════

    let responseAudio = null;
    try {
      const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': process.env.SARVAM_API_KEY
        },
        body: JSON.stringify({
          text: orderResult.response_text,
          model: 'bulbul:v3',
          target_language_code: customerLang,
          speaker: 'shubh',
          pace: 1.0
        })
      });

      const ttsData = await ttsResponse.json();
      responseAudio = (ttsData.audios && ttsData.audios[0]) || null;
    } catch (ttsErr) {
      console.error('TTS error:', ttsErr);
    }

    // ═══════════════════════════════════════════
    // RETURN
    // ═══════════════════════════════════════════

    return res.status(200).json({
      transcript: customerText,
      detected_language: detectedLang,
      response_text: orderResult.response_text,
      cart_updates: orderResult.cart_updates || [],
      order_complete: orderResult.order_complete || false,
      needs_clarification: orderResult.needs_clarification || false,
      response_audio: responseAudio,
      conversation_entry: {
        user: customerText,
        assistant: orderResult.response_text
      }
    });

  } catch (error) {
    console.error('Order error:', error);
    return res.status(500).json({ error: 'Error processing order.' });
  }
};
