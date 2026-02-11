# McDonald's India — Voice Ordering Demo

**What if McDonald's let you order in your language?**

A voice-first ordering experience for McDonald's India that lets customers order food in 11 Indian languages using a single tap. Built for the **Sarvam AI Bulbul Challenge 2025**.

![Sarvam AI](https://img.shields.io/badge/Powered%20by-Sarvam%20AI-orange)
![Languages](https://img.shields.io/badge/Languages-11%20Indian%20Languages-green)

---

## How It Works

One tap. Speak your language. Order your meal.

```
┌─────────────────────────────────────────────────────┐
│  Phase 1: Language Detection                        │
│  "Welcome to McDonald's! Which language would       │
│   you like to order in?"                            │
│  → Customer speaks → Language detected              │
│  → Menu translates instantly                        │
├─────────────────────────────────────────────────────┤
│  Phase 2: Ready Message                             │
│  AI speaks "Ready to take your order"               │
│  in the customer's language                         │
├─────────────────────────────────────────────────────┤
│  Phase 3: Order Loop                                │
│  Customer speaks items → Cart updates live          │
│  AI asks "Anything else?" → Loop continues          │
│  Customer says "done" → Order confirmed             │
└─────────────────────────────────────────────────────┘
```

The entire flow runs on a **single mic tap** — no buttons, no typing, no manual language selection.

---

## Sarvam AI APIs Used

| API | Model | Purpose |
|-----|-------|---------|
| **Saarika STT** | `saarika:v2.5` | Speech-to-text with automatic language detection |
| **Sarvam-M** | `sarvam-m` | LLM for order understanding and multi-turn conversation |
| **Sarvam Translate** | `mayura:v1` | Real-time menu translation |
| **Bulbul TTS** | `bulbul:v3` | Text-to-speech in 11 Indian languages |

---

## Supported Languages

| Language | Code | Script |
|----------|------|--------|
| Hindi | hi-IN | हिन्दी |
| Kannada | kn-IN | ಕನ್ನಡ |
| Tamil | ta-IN | தமிழ் |
| Telugu | te-IN | తెలుగు |
| Malayalam | ml-IN | മലയാളം |
| Bengali | bn-IN | বাংলা |
| Marathi | mr-IN | मराठी |
| Gujarati | gu-IN | ગુજરાતી |
| Odia | od-IN | ଓଡ଼ିଆ |
| Punjabi | pa-IN | ਪੰਜਾਬੀ |
| English | en-IN | English |

---

## Features

- **Single-tap voice ordering** — one click starts the entire session
- **Automatic language detection** — speak in any supported language, no manual selection
- **Live menu translation** — menu switches to customer's language instantly (pre-translated for zero latency)
- **Multi-turn conversation** — add items incrementally, AI remembers context
- **Real-time cart updates** — items appear as you speak them
- **Silence detection** — auto-stops recording after 2 seconds of silence
- **Kitchen display** — separate screen shows incoming orders with status tracking
- **Full Indic script support** — Google Fonts for all 10 Indian scripts

---

## Project Structure

```
├── index.html              # Main ordering interface
├── kitchen.html            # Kitchen display system
├── server.js               # Local dev server (port 4000)
├── package.json            # Dependencies
├── vercel.json             # Vercel deployment config
├── css/
│   └── style.css           # McDonald's theme
├── js/
│   ├── order.js            # 3-phase voice flow + silence detection
│   ├── menu.js             # Menu data + pre-translated strings
│   ├── cart.js             # Cart management + order confirmation
│   └── animations.js       # Waveform & UI animations
├── api/
│   ├── order.js            # STT → LLM → TTS pipeline
│   ├── welcome.js          # Welcome message TTS
│   ├── detect-language.js  # Language detection (STT only)
│   ├── speak.js            # Text-to-speech endpoint
│   └── translate-menu.js   # Menu translation endpoint
└── img/
    └── logo.svg            # McDonald's golden arches
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/welcome` | POST | Generates welcome audio message |
| `/api/detect-language` | POST | Detects language from speech (Saarika STT) |
| `/api/order` | POST | Full pipeline: STT → Sarvam-M → TTS |
| `/api/speak` | POST | Text-to-speech in any supported language |
| `/api/translate-menu` | POST | Translates menu text via Sarvam Translate |

---

## Setup

### Prerequisites

- Node.js 18+
- A [Sarvam AI](https://www.sarvam.ai/) API key

### Install

```bash
git clone <repo-url>
cd mcdonalds-voice-order
npm install
```

### Environment Variables

Create a `.env` file in the root:

```
SARVAM_API_KEY=your_sarvam_api_key_here
```

### Run Locally

```bash
node server.js
```

Open [http://localhost:4000](http://localhost:4000)

### Deploy to Vercel

```bash
npm run deploy
```

Make sure `SARVAM_API_KEY` is added to your Vercel project's environment variables.

---

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS, Web Audio API, MediaRecorder API
- **Backend:** Vercel Serverless Functions (Node.js)
- **AI:** Sarvam AI (Saarika, Sarvam-M, Translate, Bulbul V3)
- **Fonts:** Google Fonts (Inter + Noto Sans for all Indian scripts)
- **Deployment:** Vercel

---

## The Menu

35+ items across 8 categories — the real McDonald's India menu:

- **Veg Burgers** — McAloo Tikki, McVeggie, McSpicy Paneer, Veg Maharaja Mac
- **Non-Veg Burgers** — McChicken, Chicken Maharaja Mac, McSpicy Chicken, Filet-O-Fish
- **Wraps** — Paneer Wrap, Chicken Wrap
- **Sides** — Fries, Chicken McNuggets, Hash Browns, Piri Piri Fries
- **Drinks** — Coca-Cola, Fanta, Sprite, McCafé Coffee, Mango Smoothie
- **Desserts** — McFlurry Oreo, Soft Serve, Hot Fudge Sundae
- **Happy Meals & Combos**

---

## How the AI Understands Orders

The Sarvam-M LLM receives:
- The full McDonald's India menu with prices
- Current cart contents
- Conversation history (multi-turn)
- Customer's detected language

It returns structured JSON with cart updates, a natural language response in the customer's language, and an `order_complete` flag.

**Example interaction (Kannada):**
> Customer: "ನನಗೆ ಒಂದು McAloo Tikki ಮತ್ತು medium fries ಕೊಡಿ"
>
> AI: "ಒಂದು McAloo Tikki ₹59 ಮತ್ತು Medium Fries ₹129 ನಿಮ್ಮ ಆರ್ಡರ್‌ಗೆ ಸೇರಿಸಿದ್ದೇನೆ. ಇನ್ನೇನಾದರೂ ಬೇಕಾ?"

---

## Credits

Built with [Sarvam AI](https://www.sarvam.ai/) for the **#TheMicIsYours Bulbul Challenge 2025**

🎙️ Saarika · Sarvam-M · Translate · Bulbul V3
