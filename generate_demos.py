import requests, base64, os

SARVAM_API_KEY = os.environ.get('SARVAM_API_KEY')

demos = [
    {
        "id": "welcome",
        "text": "Welcome to McDonald's! Tap the mic and tell me what you'd like to eat. You can speak in any language!",
        "lang": "en-IN"
    },
    {
        "id": "order_kn",
        "text": "ಆಯ್ತು! ಒಂದು McAloo Tikki 59 ರೂಪಾಯಿ, Medium Fries 99 ರೂಪಾಯಿ, ಮತ್ತು Medium Coke 89 ರೂಪಾಯಿ. Total 247 ರೂಪಾಯಿ. ಇನ್ನೇನಾದ್ರೂ ಬೇಕಾ?",
        "lang": "kn-IN"
    },
    {
        "id": "order_hi",
        "text": "ज़रूर! एक McSpicy Paneer 219 रुपये, Medium Fries 99 रुपये, और एक Coke 89 रुपये. कुल 407 रुपये. और कुछ चाहिए?",
        "lang": "hi-IN"
    },
    {
        "id": "order_ta",
        "text": "சரி! ஒரு McChicken 175 ரூபாய், Large Fries 119 ரூபாய், மற்றும் ஒரு Sprite 89 ரூபாய். மொத்தம் 383 ரூபாய். வேறு ஏதாவது வேண்டுமா?",
        "lang": "ta-IN"
    }
]

os.makedirs('audio', exist_ok=True)

for demo in demos:
    print(f"Generating: {demo['id']}")
    response = requests.post(
        'https://api.sarvam.ai/text-to-speech',
        headers={
            'Content-Type': 'application/json',
            'api-subscription-key': SARVAM_API_KEY
        },
        json={
            'input': demo['text'],
            'model': 'bulbul:v3',
            'language_code': demo['lang'],
            'pace': 1.0,
            'loudness': 1.3
        }
    )
    data = response.json()
    audio_bytes = base64.b64decode(data['audio'])
    with open(f"audio/{demo['id']}.wav", 'wb') as f:
        f.write(audio_bytes)
    print(f"  Done: audio/{demo['id']}.wav")

print("\nAll demo audio generated!")
