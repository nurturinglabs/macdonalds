/* ═══════════════════════════════════════════
   menu.js — Menu Data + Rendering + Translation
   ═══════════════════════════════════════════ */

const MENU_DATA = {
  categories: [
    {
      id: "veg-burgers",
      name: "Veg Burgers",
      type: "veg",
      items: [
        { id: "mcaloo-tikki", name: "McAloo Tikki", name_keep: true, description: "Spicy potato and pea patty with special sauce", price: 59, veg: true, popular: true },
        { id: "mcveggie", name: "McVeggie", name_keep: true, description: "Patty made of potatoes, peas, carrots and Indian spices", price: 135, veg: true },
        { id: "mcspicy-paneer", name: "McSpicy Paneer", name_keep: true, description: "Crispy paneer patty with tandoori sauce and lettuce", price: 219, veg: true, popular: true },
        { id: "veg-maharaja", name: "Veg Maharaja Mac", name_keep: true, description: "Two veg patties, special sauce, lettuce, cheese", price: 229, veg: true },
        { id: "mcpuff-veg", name: "Veg Pizza McPuff", name_keep: true, description: "Vegetables and cheese in a crispy pastry shell", price: 40, veg: true }
      ]
    },
    {
      id: "nonveg-burgers",
      name: "Non-Veg Burgers",
      type: "nonveg",
      items: [
        { id: "mcchicken", name: "McChicken", name_keep: true, description: "Breaded chicken patty with mayo and lettuce", price: 175, veg: false },
        { id: "mcspicy-chicken", name: "McSpicy Chicken", name_keep: true, description: "Spicy crispy chicken with lettuce in a sesame bun", price: 219, veg: false, popular: true },
        { id: "chicken-maharaja", name: "Chicken Maharaja Mac", name_keep: true, description: "Two chicken patties, special sauce, lettuce, cheese", price: 249, veg: false, popular: true },
        { id: "fillet-o-fish", name: "Fillet-O-Fish", name_keep: true, description: "Fish fillet with tartar sauce and cheese on a steamed bun", price: 179, veg: false },
        { id: "mcegg", name: "McEgg", name_keep: true, description: "Egg patty with mayo on a toasted bun", price: 59, veg: false }
      ]
    },
    {
      id: "wraps",
      name: "Wraps",
      type: "mixed",
      items: [
        { id: "paneer-wrap", name: "Spicy Paneer Wrap", name_keep: true, description: "Crispy paneer in a tortilla with veggies and sauce", price: 199, veg: true },
        { id: "chicken-wrap", name: "Spicy Chicken Wrap", name_keep: true, description: "Crispy chicken in a tortilla with veggies and sauce", price: 209, veg: false }
      ]
    },
    {
      id: "sides",
      name: "Sides",
      type: "mixed",
      items: [
        { id: "fries-small", name: "French Fries", size: "Small", description: "Crispy golden fries", price: 79, veg: true },
        { id: "fries-medium", name: "French Fries", size: "Medium", description: "Crispy golden fries", price: 99, veg: true },
        { id: "fries-large", name: "French Fries", size: "Large", description: "Crispy golden fries", price: 119, veg: true },
        { id: "nuggets-6", name: "Chicken McNuggets", name_keep: true, size: "6 pcs", description: "Tender chicken nuggets with dipping sauce", price: 169, veg: false },
        { id: "nuggets-9", name: "Chicken McNuggets", name_keep: true, size: "9 pcs", description: "Tender chicken nuggets with dipping sauce", price: 229, veg: false }
      ]
    },
    {
      id: "drinks",
      name: "Drinks",
      type: "veg",
      items: [
        { id: "coke-small", name: "Coca-Cola", size: "Small", price: 59, veg: true },
        { id: "coke-medium", name: "Coca-Cola", size: "Medium", price: 89, veg: true },
        { id: "coke-large", name: "Coca-Cola", size: "Large", price: 119, veg: true },
        { id: "sprite-medium", name: "Sprite", size: "Medium", price: 89, veg: true },
        { id: "fanta-medium", name: "Fanta", size: "Medium", price: 89, veg: true },
        { id: "mccafe-latte", name: "McCaf\u00e9 Latte", name_keep: true, price: 149, veg: true },
        { id: "mccafe-cappuccino", name: "McCaf\u00e9 Cappuccino", name_keep: true, price: 149, veg: true }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      type: "veg",
      items: [
        { id: "mcflurry", name: "McFlurry", name_keep: true, description: "Soft serve ice cream with toppings", price: 129, veg: true },
        { id: "soft-serve", name: "Soft Serve", description: "Vanilla soft serve cone", price: 25, veg: true },
        { id: "sundae", name: "Hot Fudge Sundae", description: "Vanilla ice cream with hot fudge", price: 69, veg: true }
      ]
    },
    {
      id: "happy-meals",
      name: "Happy Meals",
      type: "mixed",
      items: [
        { id: "happy-veg", name: "Veg Happy Meal", description: "McAloo Tikki + Fries + Drink + Toy", price: 199, veg: true },
        { id: "happy-chicken", name: "Chicken Happy Meal", description: "McChicken + Fries + Drink + Toy", price: 229, veg: false }
      ]
    },
    {
      id: "combos",
      name: "Value Meals",
      type: "mixed",
      items: [
        { id: "combo-mcaloo", name: "McAloo Tikki Meal", description: "McAloo Tikki + Fries (S) + Coke (S)", price: 149, veg: true, popular: true },
        { id: "combo-mcchicken", name: "McChicken Meal", description: "McChicken + Fries (M) + Coke (M)", price: 299, veg: false },
        { id: "combo-maharaja", name: "Maharaja Mac Meal", description: "Chicken Maharaja Mac + Fries (M) + Coke (M)", price: 399, veg: false }
      ]
    }
  ]
};

// Pre-translated data for instant menu switching
const PRE_TRANSLATED = {
  "kn-IN": {
    "Veg Burgers": "\u0CB5\u0CC6\u0C9C\u0CCD \u0CAC\u0CB0\u0CCD\u0C97\u0CB0\u0CCD\u200C\u0C97\u0CB3\u0CC1",
    "Non-Veg Burgers": "\u0CA8\u0CBE\u0CA8\u0CCD-\u0CB5\u0CC6\u0C9C\u0CCD \u0CAC\u0CB0\u0CCD\u0C97\u0CB0\u0CCD\u200C\u0C97\u0CB3\u0CC1",
    "Wraps": "\u0CB0\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD\u200C\u0C97\u0CB3\u0CC1",
    "Sides": "\u0CB8\u0CC8\u0CA1\u0CCD\u0CB8\u0CCD",
    "Drinks": "\u0CAA\u0CBE\u0CA8\u0CC0\u0CAF\u0C97\u0CB3\u0CC1",
    "Desserts": "\u0CA1\u0CC6\u0CB8\u0CB0\u0CCD\u0C9F\u0CCD\u200C\u0C97\u0CB3\u0CC1",
    "Happy Meals": "\u0CB9\u0CCD\u0CAF\u0CBE\u0CAA\u0CBF \u0CAE\u0CC0\u0CB2\u0CCD\u0CB8\u0CCD",
    "Value Meals": "\u0CB5\u0CCD\u0CAF\u0CBE\u0CB2\u0CCD\u0CAF\u0CC2 \u0CAE\u0CC0\u0CB2\u0CCD\u0CB8\u0CCD",
    "Your Order": "\u0CA8\u0CBF\u0CAE\u0CCD\u0CAE \u0C86\u0CB0\u0CCD\u0CA1\u0CB0\u0CCD",
    "Tap to order": "\u0C86\u0CB0\u0CCD\u0CA1\u0CB0\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CC1 \u0C9F\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
    "Confirm Order": "\u0C86\u0CB0\u0CCD\u0CA1\u0CB0\u0CCD \u0C96\u0C9A\u0CBF\u0CA4\u0CAA\u0CA1\u0CBF\u0CB8\u0CBF",
    "Add more items": "\u0C87\u0CA8\u0CCD\u0CA8\u0CB7\u0CCD\u0C9F\u0CC1 \u0CB8\u0CC7\u0CB0\u0CBF\u0CB8\u0CBF",
    "Popular": "\u0C9C\u0CA8\u0CAA\u0CCD\u0CB0\u0CBF\u0CAF",
    "Today's Specials": "\u0C87\u0C82\u0CA6\u0CBF\u0CA8 \u0CB5\u0CBF\u0CB6\u0CC7\u0CB7",
    "Spicy potato and pea patty with special sauce": "\u0CAE\u0CB8\u0CBE\u0CB2\u0CC6\u0CA6\u0CBE\u0CB0 \u0C86\u0CB2\u0CC2\u0C97\u0CA1\u0CCD\u0CA1\u0CC6 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CAC\u0C9F\u0CBE\u0CA3\u0CBF \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF \u0CB5\u0CBF\u0CB6\u0CC7\u0CB7 \u0CB8\u0CBE\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    "Patty made of potatoes, peas, carrots and Indian spices": "\u0C86\u0CB2\u0CC2\u0C97\u0CA1\u0CCD\u0CA1\u0CC6, \u0CAC\u0C9F\u0CBE\u0CA3\u0CBF, \u0C95\u0CCD\u0CAF\u0CBE\u0CB0\u0CC6\u0C9F\u0CCD \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CAD\u0CBE\u0CB0\u0CA4\u0CC0\u0CAF \u0CAE\u0CB8\u0CBE\u0CB2\u0CC6\u0C97\u0CB3\u0CBF\u0C82\u0CA6 \u0CAE\u0CBE\u0CA1\u0CBF\u0CA6 \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF",
    "Crispy paneer patty with tandoori sauce and lettuce": "\u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF\u0CAF\u0CBE\u0CA6 \u0CAA\u0CA8\u0CC0\u0CB0\u0CCD \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF \u0CA4\u0C82\u0CA6\u0CC2\u0CB0\u0CBF \u0CB8\u0CBE\u0CB8\u0CCD \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB2\u0CC6\u0C9F\u0CCD\u0CAF\u0CC2\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    "Two veg patties, special sauce, lettuce, cheese": "\u0C8E\u0CB0\u0CA1\u0CC1 \u0CB5\u0CC6\u0C9C\u0CCD \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF\u0C97\u0CB3\u0CC1, \u0CB5\u0CBF\u0CB6\u0CC7\u0CB7 \u0CB8\u0CBE\u0CB8\u0CCD, \u0CB2\u0CC6\u0C9F\u0CCD\u0CAF\u0CC2\u0CB8\u0CCD, \u0C9A\u0CC0\u0CB8\u0CCD",
    "Vegetables and cheese in a crispy pastry shell": "\u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF\u0CAF\u0CBE\u0CA6 \u0CAA\u0CC7\u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0CAF\u0CB2\u0CCD\u0CB2\u0CBF \u0CA4\u0CB0\u0C95\u0CBE\u0CB0\u0CBF\u0C97\u0CB3\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C9A\u0CC0\u0CB8\u0CCD",
    "Breaded chicken patty with mayo and lettuce": "\u0CAC\u0CCD\u0CB0\u0CC6\u0CA1\u0CCD \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF \u0CAE\u0CC7\u0CAF\u0CCB \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB2\u0CC6\u0C9F\u0CCD\u0CAF\u0CC2\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    "Spicy crispy chicken with lettuce in a sesame bun": "\u0CAE\u0CB8\u0CBE\u0CB2\u0CC6\u0CA6\u0CBE\u0CB0 \u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CB2\u0CC6\u0C9F\u0CCD\u0CAF\u0CC2\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0C8E\u0CB3\u0CCD\u0CB3\u0CC1 \u0CAC\u0CA8\u0CCD\u200C\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF",
    "Two chicken patties, special sauce, lettuce, cheese": "\u0C8E\u0CB0\u0CA1\u0CC1 \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF\u0C97\u0CB3\u0CC1, \u0CB5\u0CBF\u0CB6\u0CC7\u0CB7 \u0CB8\u0CBE\u0CB8\u0CCD, \u0CB2\u0CC6\u0C9F\u0CCD\u0CAF\u0CC2\u0CB8\u0CCD, \u0C9A\u0CC0\u0CB8\u0CCD",
    "Fish fillet with tartar sauce and cheese on a steamed bun": "\u0CAE\u0CC0\u0CA8\u0CC1 \u0CAB\u0CBF\u0CB2\u0CCD\u0CB2\u0CC6 \u0C9F\u0CBE\u0CB0\u0CCD\u0C9F\u0CB0\u0CCD \u0CB8\u0CBE\u0CB8\u0CCD \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C9A\u0CC0\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB8\u0CCD\u0C9F\u0CC0\u0CAE\u0CCD\u0CA1\u0CCD \u0CAC\u0CA8\u0CCD\u200C\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF",
    "Egg patty with mayo on a toasted bun": "\u0CAE\u0CCA\u0C9F\u0CCD\u0C9F\u0CC6 \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF \u0CAE\u0CC7\u0CAF\u0CCB\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0C9F\u0CCB\u0CB8\u0CCD\u0C9F\u0CCD \u0CAC\u0CA8\u0CCD\u200C\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF",
    "Crispy paneer in a tortilla with veggies and sauce": "\u0C9F\u0CCB\u0CB0\u0CCD\u0C9F\u0CBF\u0CB2\u0CCD\u0CB2\u0CBE\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF \u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF \u0CAA\u0CA8\u0CC0\u0CB0\u0CCD \u0CA4\u0CB0\u0C95\u0CBE\u0CB0\u0CBF\u0C97\u0CB3\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB8\u0CBE\u0CB8\u0CCD",
    "Crispy chicken in a tortilla with veggies and sauce": "\u0C9F\u0CCB\u0CB0\u0CCD\u0C9F\u0CBF\u0CB2\u0CCD\u0CB2\u0CBE\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF \u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CA4\u0CB0\u0C95\u0CBE\u0CB0\u0CBF\u0C97\u0CB3\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB8\u0CBE\u0CB8\u0CCD",
    "Crispy golden fries": "\u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF \u0C97\u0CCB\u0CB2\u0CCD\u0CA1\u0CA8\u0CCD \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD",
    "Tender chicken nuggets with dipping sauce": "\u0CAE\u0CC3\u0CA6\u0CC1\u0CB5\u0CBE\u0CA6 \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CA8\u0C97\u0CC6\u0C9F\u0CCD\u0CB8\u0CCD \u0CA1\u0CBF\u0CAA\u0CCD\u0CAA\u0CBF\u0C82\u0C97\u0CCD \u0CB8\u0CBE\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    "Soft serve ice cream with toppings": "\u0C9F\u0CBE\u0CAA\u0CBF\u0C82\u0C97\u0CCD\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB8\u0CBE\u0CAB\u0CCD\u0C9F\u0CCD \u0CB8\u0CB0\u0CCD\u0CB5\u0CCD \u0C90\u0CB8\u0CCD \u0C95\u0CCD\u0CB0\u0CC0\u0CAE\u0CCD",
    "Vanilla soft serve cone": "\u0CB5\u0CCD\u0CAF\u0CBE\u0CA8\u0CBF\u0CB2\u0CCD\u0CB2\u0CBE \u0CB8\u0CBE\u0CAB\u0CCD\u0C9F\u0CCD \u0CB8\u0CB0\u0CCD\u0CB5\u0CCD \u0C95\u0CCB\u0CA8\u0CCD",
    "Vanilla ice cream with hot fudge": "\u0CB9\u0CBE\u0C9F\u0CCD \u0CAB\u0CA1\u0CCD\u0C9C\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB5\u0CCD\u0CAF\u0CBE\u0CA8\u0CBF\u0CB2\u0CCD\u0CB2\u0CBE \u0C90\u0CB8\u0CCD \u0C95\u0CCD\u0CB0\u0CC0\u0CAE\u0CCD",
    "McAloo Tikki + Fries + Drink + Toy": "McAloo Tikki + \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD + \u0CAA\u0CBE\u0CA8\u0CC0\u0CAF + \u0C86\u0C9F\u0CBF\u0C95\u0CC6",
    "McChicken + Fries + Drink + Toy": "McChicken + \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD + \u0CAA\u0CBE\u0CA8\u0CC0\u0CAF + \u0C86\u0C9F\u0CBF\u0C95\u0CC6",
    "McAloo Tikki + Fries (S) + Coke (S)": "McAloo Tikki + \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD (S) + \u0C95\u0CCB\u0C95\u0CCD (S)",
    "McChicken + Fries (M) + Coke (M)": "McChicken + \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD (M) + \u0C95\u0CCB\u0C95\u0CCD (M)",
    "Chicken Maharaja Mac + Fries (M) + Coke (M)": "Chicken Maharaja Mac + \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD (M) + \u0C95\u0CCB\u0C95\u0CCD (M)",
    "Crispy paneer with tandoori sauce": "\u0CA4\u0C82\u0CA6\u0CC2\u0CB0\u0CBF \u0CB8\u0CBE\u0CB8\u0CCD\u200C\u0CA8\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0C97\u0CB0\u0CBF\u0C97\u0CB0\u0CBF \u0CAA\u0CA8\u0CC0\u0CB0\u0CCD",
    "India's Big Mac with two chicken patties": "\u0C8E\u0CB0\u0CA1\u0CC1 \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CAA\u0CCD\u0CAF\u0CBE\u0C9F\u0CBF\u0C97\u0CB3\u0CC6\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CAD\u0CBE\u0CB0\u0CA4\u0CA6 \u0CAC\u0CBF\u0C97\u0CCD \u0CAE\u0CCD\u0CAF\u0CBE\u0C95\u0CCD",
    "McAloo Tikki": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C86\u0CB2\u0CC2 \u0C9F\u0CBF\u0C95\u0CCD\u0C95\u0CBF",
    "McVeggie": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0CB5\u0CC6\u0C9C\u0CCD\u0C9C\u0CBF",
    "McSpicy Paneer": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0CB8\u0CCD\u0CAA\u0CC8\u0CB8\u0CBF \u0CAA\u0CA8\u0CC0\u0CB0\u0CCD",
    "Veg Maharaja Mac": "\u0CB5\u0CC6\u0C9C\u0CCD \u0CAE\u0CB9\u0CBE\u0CB0\u0CBE\u0C9C \u0CAE\u0CCD\u0CAF\u0CBE\u0C95\u0CCD",
    "Veg Pizza McPuff": "\u0CB5\u0CC6\u0C9C\u0CCD \u0CAA\u0CBF\u0C9C\u0CCD\u0C9C\u0CBE \u0CAE\u0CC6\u0C95\u0CCD\u200C\u0CAA\u0CAB\u0CCD",
    "McChicken": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C9A\u0CBF\u0C95\u0CA8\u0CCD",
    "McSpicy Chicken": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0CB8\u0CCD\u0CAA\u0CC8\u0CB8\u0CBF \u0C9A\u0CBF\u0C95\u0CA8\u0CCD",
    "Chicken Maharaja Mac": "\u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CAE\u0CB9\u0CBE\u0CB0\u0CBE\u0C9C \u0CAE\u0CCD\u0CAF\u0CBE\u0C95\u0CCD",
    "Fillet-O-Fish": "\u0CAB\u0CBF\u0CB2\u0CC6\u0C9F\u0CCD-\u0C93-\u0CAB\u0CBF\u0CB6\u0CCD",
    "McEgg": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C8E\u0C97\u0CCD",
    "Spicy Paneer Wrap": "\u0CB8\u0CCD\u0CAA\u0CC8\u0CB8\u0CBF \u0CAA\u0CA8\u0CC0\u0CB0\u0CCD \u0CB0\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD",
    "Spicy Chicken Wrap": "\u0CB8\u0CCD\u0CAA\u0CC8\u0CB8\u0CBF \u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CB0\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD",
    "French Fries": "\u0CAB\u0CCD\u0CB0\u0CC6\u0C82\u0C9A\u0CCD \u0CAB\u0CCD\u0CB0\u0CC8\u0CB8\u0CCD",
    "Chicken McNuggets": "\u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CAE\u0CC6\u0C95\u0CCD\u200C\u0CA8\u0C97\u0CC6\u0C9F\u0CCD\u0CB8\u0CCD",
    "Coca-Cola": "\u0C95\u0CCB\u0C95\u0CBE-\u0C95\u0CCB\u0CB2\u0CBE",
    "Sprite": "\u0CB8\u0CCD\u0CAA\u0CCD\u0CB0\u0CC8\u0C9F\u0CCD",
    "Fanta": "\u0CAB\u0CCD\u0CAF\u0CBE\u0C82\u0C9F\u0CBE",
    "McCaf\u00e9 Latte": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C95\u0CC6\u0CAB\u0CC6 \u0CB2\u0CCD\u0CAF\u0CBE\u0C9F\u0CC6",
    "McCaf\u00e9 Cappuccino": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C95\u0CC6\u0CAB\u0CC6 \u0C95\u0CCD\u0CAF\u0CBE\u0CAA\u0CC1\u0C9A\u0CBF\u0CA8\u0CCA",
    "McFlurry": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0CAB\u0CCD\u0CB2\u0CB0\u0CBF",
    "Soft Serve": "\u0CB8\u0CBE\u0CAB\u0CCD\u0C9F\u0CCD \u0CB8\u0CB0\u0CCD\u0CB5\u0CCD",
    "Hot Fudge Sundae": "\u0CB9\u0CBE\u0C9F\u0CCD \u0CAB\u0C9C\u0CCD \u0CB8\u0C82\u0CA1\u0CC7",
    "Veg Happy Meal": "\u0CB5\u0CC6\u0C9C\u0CCD \u0CB9\u0CCD\u0CAF\u0CBE\u0CAA\u0CBF \u0CAE\u0CC0\u0CB2\u0CCD",
    "Chicken Happy Meal": "\u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CB9\u0CCD\u0CAF\u0CBE\u0CAA\u0CBF \u0CAE\u0CC0\u0CB2\u0CCD",
    "McAloo Tikki Meal": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C86\u0CB2\u0CC2 \u0C9F\u0CBF\u0C95\u0CCD\u0C95\u0CBF \u0CAE\u0CC0\u0CB2\u0CCD",
    "McChicken Meal": "\u0CAE\u0CC6\u0C95\u0CCD\u200C\u0C9A\u0CBF\u0C95\u0CA8\u0CCD \u0CAE\u0CC0\u0CB2\u0CCD",
    "Maharaja Mac Meal": "\u0CAE\u0CB9\u0CBE\u0CB0\u0CBE\u0C9C \u0CAE\u0CCD\u0CAF\u0CBE\u0C95\u0CCD \u0CAE\u0CC0\u0CB2\u0CCD"
  },
  "hi-IN": {
    "Veg Burgers": "\u0935\u0947\u091C \u092C\u0930\u094D\u0917\u0930",
    "Non-Veg Burgers": "\u0928\u0949\u0928-\u0935\u0947\u091C \u092C\u0930\u094D\u0917\u0930",
    "Wraps": "\u0930\u0948\u092A\u094D\u0938",
    "Sides": "\u0938\u093E\u0907\u0921\u094D\u0938",
    "Drinks": "\u0921\u094D\u0930\u093F\u0902\u0915\u094D\u0938",
    "Desserts": "\u0921\u0947\u091C\u093C\u0930\u094D\u091F",
    "Happy Meals": "\u0939\u0948\u092A\u094D\u092A\u0940 \u092E\u0940\u0932\u094D\u0938",
    "Value Meals": "\u0935\u0948\u0932\u094D\u092F\u0942 \u092E\u0940\u0932\u094D\u0938",
    "Your Order": "\u0906\u092A\u0915\u093E \u0911\u0930\u094D\u0921\u0930",
    "Tap to order": "\u0911\u0930\u094D\u0921\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902",
    "Confirm Order": "\u0911\u0930\u094D\u0921\u0930 \u0915\u0928\u094D\u092B\u0930\u094D\u092E \u0915\u0930\u0947\u0902",
    "Add more items": "\u0914\u0930 \u0906\u0907\u091F\u092E \u091C\u094B\u0921\u093C\u0947\u0902",
    "Popular": "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F",
    "Today's Specials": "\u0906\u091C \u0915\u093E \u0938\u094D\u092A\u0947\u0936\u0932",
    "Spicy potato and pea patty with special sauce": "\u0938\u094D\u092A\u0947\u0936\u0932 \u0938\u0949\u0938 \u0915\u0947 \u0938\u093E\u0925 \u092E\u0938\u093E\u0932\u0947\u0926\u093E\u0930 \u0906\u0932\u0942 \u0914\u0930 \u092E\u091F\u0930 \u092A\u0948\u091F\u0940",
    "Patty made of potatoes, peas, carrots and Indian spices": "\u0906\u0932\u0942, \u092E\u091F\u0930, \u0917\u093E\u091C\u0930 \u0914\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u092E\u0938\u093E\u0932\u094B\u0902 \u0938\u0947 \u092C\u0928\u0940 \u092A\u0948\u091F\u0940",
    "Crispy paneer patty with tandoori sauce and lettuce": "\u0924\u0902\u0926\u0942\u0930\u0940 \u0938\u0949\u0938 \u0914\u0930 \u0932\u0947\u091F\u094D\u092F\u0942\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u092A\u0928\u0940\u0930 \u092A\u0948\u091F\u0940",
    "Two veg patties, special sauce, lettuce, cheese": "\u0926\u094B \u0935\u0947\u091C \u092A\u0948\u091F\u0940, \u0938\u094D\u092A\u0947\u0936\u0932 \u0938\u0949\u0938, \u0932\u0947\u091F\u094D\u092F\u0942\u0938, \u091A\u0940\u091C\u093C",
    "Vegetables and cheese in a crispy pastry shell": "\u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u092A\u0947\u0938\u094D\u091F\u094D\u0930\u0940 \u092E\u0947\u0902 \u0938\u092C\u094D\u091C\u093C\u093F\u092F\u093E\u0902 \u0914\u0930 \u091A\u0940\u091C\u093C",
    "Breaded chicken patty with mayo and lettuce": "\u092E\u0947\u092F\u094B \u0914\u0930 \u0932\u0947\u091F\u094D\u092F\u0942\u0938 \u0915\u0947 \u0938\u093E\u0925 \u092C\u094D\u0930\u0947\u0921\u0947\u0921 \u091A\u093F\u0915\u0928 \u092A\u0948\u091F\u0940",
    "Spicy crispy chicken with lettuce in a sesame bun": "\u0924\u093F\u0932 \u0915\u0947 \u092C\u0928 \u092E\u0947\u0902 \u0932\u0947\u091F\u094D\u092F\u0942\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0938\u094D\u092A\u093E\u0907\u0938\u0940 \u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u091A\u093F\u0915\u0928",
    "Two chicken patties, special sauce, lettuce, cheese": "\u0926\u094B \u091A\u093F\u0915\u0928 \u092A\u0948\u091F\u0940, \u0938\u094D\u092A\u0947\u0936\u0932 \u0938\u0949\u0938, \u0932\u0947\u091F\u094D\u092F\u0942\u0938, \u091A\u0940\u091C\u093C",
    "Fish fillet with tartar sauce and cheese on a steamed bun": "\u0938\u094D\u091F\u0940\u092E\u094D\u0921 \u092C\u0928 \u092A\u0930 \u091F\u093E\u0930\u094D\u091F\u0930 \u0938\u0949\u0938 \u0914\u0930 \u091A\u0940\u091C\u093C \u0915\u0947 \u0938\u093E\u0925 \u092E\u091B\u0932\u0940 \u092B\u093F\u0932\u0947",
    "Egg patty with mayo on a toasted bun": "\u091F\u094B\u0938\u094D\u091F\u0947\u0921 \u092C\u0928 \u092A\u0930 \u092E\u0947\u092F\u094B \u0915\u0947 \u0938\u093E\u0925 \u0905\u0902\u0921\u0947 \u0915\u0940 \u092A\u0948\u091F\u0940",
    "Crispy paneer in a tortilla with veggies and sauce": "\u091F\u0949\u0930\u094D\u091F\u093F\u0932\u093E \u092E\u0947\u0902 \u0938\u092C\u094D\u091C\u093C\u093F\u092F\u094B\u0902 \u0914\u0930 \u0938\u0949\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u092A\u0928\u0940\u0930",
    "Crispy chicken in a tortilla with veggies and sauce": "\u091F\u0949\u0930\u094D\u091F\u093F\u0932\u093E \u092E\u0947\u0902 \u0938\u092C\u094D\u091C\u093C\u093F\u092F\u094B\u0902 \u0914\u0930 \u0938\u0949\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u091A\u093F\u0915\u0928",
    "Crispy golden fries": "\u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u0917\u094B\u0932\u094D\u0921\u0928 \u092B\u094D\u0930\u093E\u0907\u091C\u093C",
    "Tender chicken nuggets with dipping sauce": "\u0921\u093F\u092A\u093F\u0902\u0917 \u0938\u0949\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0928\u0930\u094D\u092E \u091A\u093F\u0915\u0928 \u0928\u0917\u0947\u091F\u094D\u0938",
    "Soft serve ice cream with toppings": "\u091F\u0949\u092A\u093F\u0902\u0917\u094D\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0938\u0949\u092B\u094D\u091F \u0938\u0930\u094D\u0935 \u0906\u0907\u0938 \u0915\u094D\u0930\u0940\u092E",
    "Vanilla soft serve cone": "\u0935\u0947\u0928\u093F\u0932\u093E \u0938\u0949\u092B\u094D\u091F \u0938\u0930\u094D\u0935 \u0915\u094B\u0928",
    "Vanilla ice cream with hot fudge": "\u0939\u0949\u091F \u092B\u091C \u0915\u0947 \u0938\u093E\u0925 \u0935\u0947\u0928\u093F\u0932\u093E \u0906\u0907\u0938 \u0915\u094D\u0930\u0940\u092E",
    "McAloo Tikki + Fries + Drink + Toy": "McAloo Tikki + \u092B\u094D\u0930\u093E\u0907\u091C\u093C + \u0921\u094D\u0930\u093F\u0902\u0915 + \u091F\u0949\u092F",
    "McChicken + Fries + Drink + Toy": "McChicken + \u092B\u094D\u0930\u093E\u0907\u091C\u093C + \u0921\u094D\u0930\u093F\u0902\u0915 + \u091F\u0949\u092F",
    "McAloo Tikki + Fries (S) + Coke (S)": "McAloo Tikki + \u092B\u094D\u0930\u093E\u0907\u091C\u093C (S) + \u0915\u094B\u0915 (S)",
    "McChicken + Fries (M) + Coke (M)": "McChicken + \u092B\u094D\u0930\u093E\u0907\u091C\u093C (M) + \u0915\u094B\u0915 (M)",
    "Chicken Maharaja Mac + Fries (M) + Coke (M)": "Chicken Maharaja Mac + \u092B\u094D\u0930\u093E\u0907\u091C\u093C (M) + \u0915\u094B\u0915 (M)",
    "Crispy paneer with tandoori sauce": "\u0924\u0902\u0926\u0942\u0930\u0940 \u0938\u0949\u0938 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u0930\u093F\u0938\u094D\u092A\u0940 \u092A\u0928\u0940\u0930",
    "India's Big Mac with two chicken patties": "\u0926\u094B \u091A\u093F\u0915\u0928 \u092A\u0948\u091F\u0940 \u0915\u0947 \u0938\u093E\u0925 \u092D\u093E\u0930\u0924 \u0915\u093E \u092C\u093F\u0917 \u092E\u0948\u0915",
    "McAloo Tikki": "\u092E\u0948\u0915\u0906\u0932\u0942 \u091F\u093F\u0915\u094D\u0915\u0940",
    "McVeggie": "\u092E\u0948\u0915\u0935\u0947\u091C\u0940",
    "McSpicy Paneer": "\u092E\u0948\u0915\u0938\u094D\u092A\u093E\u0907\u0938\u0940 \u092A\u0928\u0940\u0930",
    "Veg Maharaja Mac": "\u0935\u0947\u091C \u092E\u0939\u093E\u0930\u093E\u091C\u093E \u092E\u0948\u0915",
    "Veg Pizza McPuff": "\u0935\u0947\u091C \u092A\u093F\u091C\u093C\u094D\u091C\u093C\u093E \u092E\u0948\u0915\u092A\u092B\u093C",
    "McChicken": "\u092E\u0948\u0915\u091A\u093F\u0915\u0928",
    "McSpicy Chicken": "\u092E\u0948\u0915\u0938\u094D\u092A\u093E\u0907\u0938\u0940 \u091A\u093F\u0915\u0928",
    "Chicken Maharaja Mac": "\u091A\u093F\u0915\u0928 \u092E\u0939\u093E\u0930\u093E\u091C\u093E \u092E\u0948\u0915",
    "Fillet-O-Fish": "\u092B\u093C\u093F\u0932\u0947-\u0913-\u092B\u093C\u093F\u0936",
    "McEgg": "\u092E\u0948\u0915\u090F\u0917",
    "Spicy Paneer Wrap": "\u092E\u0938\u093E\u0932\u0947\u0926\u093E\u0930 \u092A\u0928\u0940\u0930 \u0930\u0948\u092A",
    "Spicy Chicken Wrap": "\u091A\u091F\u092A\u091F\u0947 \u091A\u093F\u0915\u0928 \u0930\u0948\u092A",
    "French Fries": "\u092B\u094D\u0930\u0947\u0902\u091A \u092B\u094D\u0930\u093E\u0907\u091C\u093C",
    "Chicken McNuggets": "\u091A\u093F\u0915\u0928 \u092E\u0948\u0915\u0928\u0917\u0947\u091F\u094D\u0938",
    "Coca-Cola": "\u0915\u094B\u0915\u093E-\u0915\u094B\u0932\u093E",
    "Sprite": "\u0938\u094D\u092A\u094D\u0930\u093E\u0907\u091F",
    "Fanta": "\u092B\u0948\u0902\u091F\u093E",
    "McCaf\u00e9 Latte": "\u092E\u0948\u0915\u0915\u0948\u092B\u093C\u0947 \u0932\u0948\u091F\u0947",
    "McCaf\u00e9 Cappuccino": "\u092E\u0948\u0915\u0915\u0948\u092B\u093C\u0947 \u0915\u0948\u092A\u0941\u091A\u093F\u0928\u094B",
    "McFlurry": "\u092E\u0948\u0915\u092B\u093C\u094D\u0932\u0930\u0940",
    "Soft Serve": "\u0938\u0949\u092B\u094D\u091F \u0938\u0930\u094D\u0935",
    "Hot Fudge Sundae": "\u0939\u0949\u091F \u092B\u093C\u091C \u0938\u0928\u094D\u0921\u0947",
    "Veg Happy Meal": "\u0935\u0947\u091C \u0939\u0948\u092A\u094D\u092A\u0940 \u092E\u0940\u0932",
    "Chicken Happy Meal": "\u091A\u093F\u0915\u0928 \u0939\u0948\u092A\u094D\u092A\u0940 \u092E\u0940\u0932",
    "McAloo Tikki Meal": "\u092E\u0948\u0915\u0906\u0932\u0942 \u091F\u093F\u0915\u094D\u0915\u0940 \u092E\u0940\u0932",
    "McChicken Meal": "\u092E\u0948\u0915\u091A\u093F\u0915\u0928 \u092E\u0940\u0932",
    "Maharaja Mac Meal": "\u092E\u0939\u093E\u0930\u093E\u091C\u093E \u092E\u0948\u0915 \u092E\u0940\u0932"
  },
  "ta-IN": {
    "Veg Burgers": "\u0BB5\u0BC6\u0B9C\u0BCD \u0BAA\u0BB0\u0BCD\u0B95\u0BB0\u0BCD\u0B95\u0BB3\u0BCD",
    "Non-Veg Burgers": "\u0BA8\u0BBE\u0BA9\u0BCD-\u0BB5\u0BC6\u0B9C\u0BCD \u0BAA\u0BB0\u0BCD\u0B95\u0BB0\u0BCD\u0B95\u0BB3\u0BCD",
    "Wraps": "\u0BB0\u0BBE\u0BAA\u0BCD\u0B95\u0BB3\u0BCD",
    "Sides": "\u0B9A\u0BC8\u0B9F\u0BCD\u0B9A\u0BCD",
    "Drinks": "\u0BAA\u0BBE\u0BA9\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "Desserts": "\u0B9F\u0BC6\u0B9A\u0BB0\u0BCD\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
    "Happy Meals": "\u0BB9\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF \u0BAE\u0BC0\u0BB2\u0BCD\u0BB8\u0BCD",
    "Value Meals": "\u0BB5\u0BBE\u0BB2\u0BCD\u0BAF\u0BC2 \u0BAE\u0BC0\u0BB2\u0BCD\u0BB8\u0BCD",
    "Your Order": "\u0BA9\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B86\u0BB0\u0BCD\u0B9F\u0BB0\u0BCD",
    "Tap to order": "\u0B86\u0BB0\u0BCD\u0B9F\u0BB0\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0B9F\u0BC7\u0BAA\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "Confirm Order": "\u0B86\u0BB0\u0BCD\u0B9F\u0BB0\u0BCD \u0BA9\u0BBF\u0B9A\u0BCD\u0B9A\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "Add more items": "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "Popular": "\u0BAA\u0BBF\u0BB0\u0BAA\u0BB2\u0BAE\u0BBE\u0BA9",
    "Today's Specials": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC8\u0BAF \u0B9A\u0BCD\u0BAA\u0BC6\u0BB7\u0BB2\u0BCD"
  },
  "te-IN": {
    "Veg Burgers": "\u0C35\u0C46\u0C1C\u0C4D \u0C2C\u0C30\u0C4D\u0C17\u0C30\u0C4D\u0C32\u0C41",
    "Non-Veg Burgers": "\u0C28\u0C3E\u0C28\u0C4D-\u0C35\u0C46\u0C1C\u0C4D \u0C2C\u0C30\u0C4D\u0C17\u0C30\u0C4D\u0C32\u0C41",
    "Wraps": "\u0C30\u0C3E\u0C2A\u0C4D\u200C\u0C32\u0C41",
    "Sides": "\u0C38\u0C48\u0C21\u0C4D\u0C38\u0C4D",
    "Drinks": "\u0C2A\u0C3E\u0C28\u0C40\u0C2F\u0C3E\u0C32\u0C41",
    "Desserts": "\u0C21\u0C46\u0C1C\u0C30\u0C4D\u0C1F\u0C4D\u200C\u0C32\u0C41",
    "Happy Meals": "\u0C39\u0C4D\u0C2F\u0C3E\u0C2A\u0C40 \u0C2E\u0C40\u0C32\u0C4D\u0C38\u0C4D",
    "Value Meals": "\u0C35\u0C4D\u0C2F\u0C3E\u0C32\u0C4D\u0C2F\u0C42 \u0C2E\u0C40\u0C32\u0C4D\u0C38\u0C4D",
    "Your Order": "\u0C2E\u0C40 \u0C06\u0C30\u0C4D\u0C21\u0C30\u0C4D",
    "Tap to order": "\u0C06\u0C30\u0C4D\u0C21\u0C30\u0C4D \u0C1A\u0C47\u0C2F\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C1F\u0C4D\u0C2F\u0C3E\u0C2A\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "Confirm Order": "\u0C06\u0C30\u0C4D\u0C21\u0C30\u0C4D \u0C28\u0C3F\u0C30\u0C4D\u0C27\u0C3E\u0C30\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    "Popular": "\u0C1C\u0C28\u0C2A\u0C4D\u0C30\u0C3F\u0C2F",
    "Today's Specials": "\u0C08\u0C30\u0C4B\u0C1C\u0C41 \u0C38\u0C4D\u0C2A\u0C46\u0C37\u0C32\u0C4D"
  },
  "bn-IN": {
    "Veg Burgers": "\u09AD\u09C7\u099C \u09AC\u09BE\u09B0\u09CD\u0997\u09BE\u09B0",
    "Non-Veg Burgers": "\u09A8\u09A8-\u09AD\u09C7\u099C \u09AC\u09BE\u09B0\u09CD\u0997\u09BE\u09B0",
    "Sides": "\u09B8\u09BE\u0987\u09A1\u09B8",
    "Drinks": "\u09AA\u09BE\u09A8\u09C0\u09DF",
    "Desserts": "\u09A1\u09C7\u099C\u09BE\u09B0\u09CD\u099F",
    "Your Order": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0",
    "Tap to order": "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u099F\u09CD\u09AF\u09BE\u09AA \u0995\u09B0\u09C1\u09A8",
    "Confirm Order": "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8",
    "Popular": "\u099C\u09A8\u09AA\u09CD\u09B0\u09BF\u09DF",
    "Today's Specials": "\u0986\u099C\u0995\u09C7\u09B0 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2"
  },
  "mr-IN": {
    "Veg Burgers": "\u0935\u0947\u091C \u092C\u0930\u094D\u0917\u0930",
    "Non-Veg Burgers": "\u0928\u0949\u0928-\u0935\u0947\u091C \u092C\u0930\u094D\u0917\u0930",
    "Sides": "\u0938\u093E\u0907\u0921\u094D\u0938",
    "Drinks": "\u092A\u0947\u092F\u0947",
    "Desserts": "\u0921\u0947\u091D\u0930\u094D\u091F",
    "Your Order": "\u0924\u0941\u092E\u091A\u0940 \u0911\u0930\u094D\u0921\u0930",
    "Tap to order": "\u0911\u0930\u094D\u0921\u0930 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u091F\u0945\u092A \u0915\u0930\u093E",
    "Confirm Order": "\u0911\u0930\u094D\u0921\u0930 \u0915\u0928\u094D\u092B\u0930\u094D\u092E \u0915\u0930\u093E",
    "Popular": "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F",
    "Today's Specials": "\u0906\u091C\u091A\u0947 \u0938\u094D\u092A\u0947\u0936\u0932"
  }
};

let currentMenuLanguage = 'en-IN';

// Render the full menu grid
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  MENU_DATA.categories.forEach(cat => {
    const catEl = document.createElement('div');
    catEl.className = 'menu-category';
    catEl.id = `cat-${cat.id}`;

    // Category header
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <span class="category-dot ${cat.type}"></span>
      <span class="category-name">${cat.name}</span>
      <span class="category-count">${cat.items.length} items</span>
    `;
    catEl.appendChild(header);

    // Items
    cat.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item';
      itemEl.id = `item-${item.id}`;

      let html = `<div class="item-row">
        <div class="item-left">
          <span class="item-veg-dot ${item.veg ? 'veg' : 'nonveg'}"></span>
          <div class="item-name-wrap">
            <span class="item-name" data-original="${item.name}">${item.name}</span>
            <span class="item-name-english">${item.name}${item.size ? ' (' + item.size + ')' : ''}</span>
          </div>`;

      if (item.size) {
        html += `<span class="item-size">(${item.size})</span>`;
      }
      if (item.popular) {
        html += `<span class="popular-badge">Popular</span>`;
      }

      html += `</div>
        <span class="item-price">\u20B9${item.price}</span>
      </div>`;

      if (item.description) {
        html += `<div class="item-description" data-original="${item.description}">${item.description}</div>`;
      }

      itemEl.innerHTML = html;
      catEl.appendChild(itemEl);
    });

    grid.appendChild(catEl);
  });
}

// Translate the entire menu to detected language
async function translateMenu(languageCode) {
  if (languageCode === 'en-IN' || currentMenuLanguage === languageCode) return;

  const preTranslated = PRE_TRANSLATED[languageCode];

  // Animate: fade out
  document.querySelectorAll('.menu-item').forEach(el => el.classList.add('translating'));
  document.querySelectorAll('.category-header').forEach(el => el.classList.add('translating'));

  await new Promise(r => setTimeout(r, 300));

  if (preTranslated) {
    // Use pre-translated data (instant)
    applyTranslations(preTranslated, languageCode);
  } else {
    // Fall back to API translation
    try {
      const textsToTranslate = [];
      const textKeys = [];

      MENU_DATA.categories.forEach(cat => {
        textsToTranslate.push(cat.name);
        textKeys.push({ type: 'category', id: cat.id });
        cat.items.forEach(item => {
          // Item name
          if (!textsToTranslate.includes(item.name)) {
            textsToTranslate.push(item.name);
            textKeys.push({ type: 'name', id: item.id });
          }
          // Item description
          if (item.description && !textsToTranslate.includes(item.description)) {
            textsToTranslate.push(item.description);
            textKeys.push({ type: 'description', id: item.id });
          }
        });
      });

      // UI strings
      const uiStrings = ["Your Order", "Tap to order", "Confirm Order", "Add more items", "Popular", "Today's Specials"];
      uiStrings.forEach(s => {
        textsToTranslate.push(s);
        textKeys.push({ type: 'ui', key: s });
      });

      const response = await fetch('/api/translate-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          texts: textsToTranslate,
          target_language: languageCode,
          source_language: 'en-IN'
        })
      });

      const data = await response.json();
      if (data.translations) {
        const translationMap = {};
        data.translations.forEach((t, i) => {
          const original = textsToTranslate[i];
          translationMap[original] = t;
        });
        applyTranslations(translationMap, languageCode);
      }
    } catch (err) {
      console.error('Translation API failed:', err);
    }
  }

  // Animate: fade in
  document.querySelectorAll('.menu-item').forEach(el => {
    el.classList.remove('translating');
    el.classList.add('translated');
  });
  document.querySelectorAll('.category-header').forEach(el => {
    el.classList.remove('translating');
    el.classList.add('translated');
  });

  currentMenuLanguage = languageCode;
}

// Apply a translation map to the DOM
function applyTranslations(translationMap, languageCode) {
  // Category names
  MENU_DATA.categories.forEach(cat => {
    const el = document.querySelector(`#cat-${cat.id} .category-name`);
    if (el && translationMap[cat.name]) {
      el.textContent = translationMap[cat.name];
    }
  });

  // Item names + descriptions
  MENU_DATA.categories.forEach(cat => {
    cat.items.forEach(item => {
      const itemEl = document.querySelector(`#item-${item.id}`);
      if (!itemEl) return;

      // Translate item name
      const nameEl = itemEl.querySelector('.item-name');
      const englishEl = itemEl.querySelector('.item-name-english');
      if (nameEl && translationMap[item.name]) {
        nameEl.textContent = translationMap[item.name];
        if (englishEl) englishEl.classList.add('visible');
      }

      // Translate description
      if (item.description) {
        const descEl = itemEl.querySelector('.item-description');
        if (descEl && translationMap[item.description]) {
          descEl.textContent = translationMap[item.description];
        }
      }
    });
  });

  // Popular badges
  const popularBadges = document.querySelectorAll('.popular-badge');
  if (translationMap["Popular"]) {
    popularBadges.forEach(el => el.textContent = translationMap["Popular"]);
  }

  // UI strings
  const cartTitle = document.getElementById('cart-title');
  if (cartTitle && translationMap["Your Order"]) {
    cartTitle.textContent = '\uD83D\uDED2 ' + translationMap["Your Order"];
  }

  const micLabel = document.getElementById('mic-label');
  if (micLabel && translationMap["Tap to order"]) {
    micLabel.textContent = translationMap["Tap to order"];
  }

  const confirmBtn = document.getElementById('confirm-btn');
  if (confirmBtn && translationMap["Confirm Order"]) {
    confirmBtn.textContent = '\u2705 ' + translationMap["Confirm Order"];
  }

  const addMoreBtn = document.getElementById('add-more-btn');
  if (addMoreBtn && translationMap["Add more items"]) {
    addMoreBtn.textContent = '\uD83C\uDFA4 ' + translationMap["Add more items"];
  }

  // Specials bar
  const specialsTitle = document.querySelector('.specials-title');
  if (specialsTitle && translationMap["Today's Specials"]) {
    specialsTitle.textContent = translationMap["Today's Specials"];
  }

  // Special descriptions
  document.querySelectorAll('.special-desc').forEach(el => {
    const original = el.getAttribute('data-original');
    if (original && translationMap[original]) {
      el.textContent = '\u2014 ' + translationMap[original];
    }
  });
}

// Reset menu to English
function resetMenuLanguage() {
  if (currentMenuLanguage === 'en-IN') return;

  MENU_DATA.categories.forEach(cat => {
    const el = document.querySelector(`#cat-${cat.id} .category-name`);
    if (el) el.textContent = cat.name;

    cat.items.forEach(item => {
      const itemEl = document.querySelector(`#item-${item.id}`);
      if (!itemEl) return;

      // Reset item name
      const nameEl = itemEl.querySelector('.item-name');
      if (nameEl) nameEl.textContent = item.name;
      const englishEl = itemEl.querySelector('.item-name-english');
      if (englishEl) englishEl.classList.remove('visible');

      // Reset description
      if (item.description) {
        const descEl = itemEl.querySelector('.item-description');
        if (descEl) descEl.textContent = item.description;
      }
    });
  });

  document.querySelectorAll('.popular-badge').forEach(el => el.textContent = 'Popular');
  document.getElementById('cart-title').textContent = '\uD83D\uDED2 Your Order';
  document.getElementById('mic-label').textContent = 'Tap to order';
  document.getElementById('confirm-btn').textContent = '\u2705 Confirm Order';
  document.getElementById('add-more-btn').textContent = '\uD83C\uDFA4 Add more items';
  document.querySelector('.specials-title').textContent = "Today's Specials";

  document.querySelectorAll('.special-desc').forEach(el => {
    const original = el.getAttribute('data-original');
    if (original) el.textContent = '\u2014 ' + original;
  });

  currentMenuLanguage = 'en-IN';
}

// Initialize menu on load
document.addEventListener('DOMContentLoaded', renderMenu);
