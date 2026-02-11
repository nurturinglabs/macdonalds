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
    "Veg Burgers": "வெஜ் பர்கர்கள்",
    "Non-Veg Burgers": "நான்-வெஜ் பர்கர்கள்",
    "Wraps": "ராப்கள்",
    "Sides": "சைட்ச்",
    "Drinks": "பானங்கள்",
    "Desserts": "டெசர்ட்கள்",
    "Happy Meals": "ஹாப்பி மீல்ஸ்",
    "Value Meals": "வால்யூ மீல்ஸ்",
    "Your Order": "உங்கள் ஆர்டர்",
    "Tap to order": "ஆர்டர் செய்ய டேப் செய்யுங்கள்",
    "Confirm Order": "ஆர்டர் உறுதிப்படுத்துங்கள்",
    "Add more items": "மேலும் சேர்க்குங்கள்",
    "Popular": "பிரபலமான",
    "Today's Specials": "இன்றைய ஸ்பெஷல்",
    "Spicy potato and pea patty with special sauce": "ஸ்பெஷல் சாஸுடன் காரமான உருளைக்கிழங்கு மற்றும் பட்டாணி பேட்டி",
    "Patty made of potatoes, peas, carrots and Indian spices": "உருளைக்கிழங்கு, பட்டாணி, கேரட் மற்றும் இந்திய மசாலாக்களால் செய்யப்பட்ட பேட்டி",
    "Crispy paneer patty with tandoori sauce and lettuce": "தந்தூரி சாஸ் மற்றும் லெட்யூஸுடன் கிரிஸ்பி பன்னீர் பேட்டி",
    "Two veg patties, special sauce, lettuce, cheese": "இரண்டு வெஜ் பேட்டிகள், ஸ்பெஷல் சாஸ், லெட்யூஸ், சீஸ்",
    "Vegetables and cheese in a crispy pastry shell": "கிரிஸ்பி பேஸ்ட்ரியில் காய்கறிகள் மற்றும் சீஸ்",
    "Breaded chicken patty with mayo and lettuce": "மேயோ மற்றும் லெட்யூஸுடன் பிரெட்டட் சிக்கன் பேட்டி",
    "Spicy crispy chicken with lettuce in a sesame bun": "எள் பன்னில் லெட்யூஸுடன் காரமான கிரிஸ்பி சிக்கன்",
    "Two chicken patties, special sauce, lettuce, cheese": "இரண்டு சிக்கன் பேட்டிகள், ஸ்பெஷல் சாஸ், லெட்யூஸ், சீஸ்",
    "Fish fillet with tartar sauce and cheese on a steamed bun": "ஸ்டீம்ட் பன்னில் டார்டார் சாஸ் மற்றும் சீஸுடன் மீன் ஃபிலே",
    "Egg patty with mayo on a toasted bun": "டோஸ்ட் செய்த பன்னில் மேயோவுடன் முட்டை பேட்டி",
    "Crispy paneer in a tortilla with veggies and sauce": "டார்ட்டிலாவில் காய்கறிகள் மற்றும் சாஸுடன் கிரிஸ்பி பன்னீர்",
    "Crispy chicken in a tortilla with veggies and sauce": "டார்ட்டிலாவில் காய்கறிகள் மற்றும் சாஸுடன் கிரிஸ்பி சிக்கன்",
    "Crispy golden fries": "கிரிஸ்பி கோல்டன் ஃப்ரைஸ்",
    "Tender chicken nuggets with dipping sauce": "டிப்பிங் சாஸுடன் மென்மையான சிக்கன் நக்கெட்ஸ்",
    "Soft serve ice cream with toppings": "டாப்பிங்ஸுடன் சாஃப்ட் சர்வ் ஐஸ்கிரீம்",
    "Vanilla soft serve cone": "வெனிலா சாஃப்ட் சர்வ் கோன்",
    "Vanilla ice cream with hot fudge": "ஹாட் ஃபட்ஜுடன் வெனிலா ஐஸ்கிரீம்",
    "McAloo Tikki + Fries + Drink + Toy": "McAloo Tikki + ஃப்ரைஸ் + பானம் + பொம்மை",
    "McChicken + Fries + Drink + Toy": "McChicken + ஃப்ரைஸ் + பானம் + பொம்மை",
    "McAloo Tikki + Fries (S) + Coke (S)": "McAloo Tikki + ஃப்ரைஸ் (S) + கோக் (S)",
    "McChicken + Fries (M) + Coke (M)": "McChicken + ஃப்ரைஸ் (M) + கோக் (M)",
    "Chicken Maharaja Mac + Fries (M) + Coke (M)": "Chicken Maharaja Mac + ஃப்ரைஸ் (M) + கோக் (M)",
    "Crispy paneer with tandoori sauce": "தந்தூரி சாஸுடன் கிரிஸ்பி பன்னீர்",
    "India's Big Mac with two chicken patties": "இரண்டு சிக்கன் பேட்டிகளுடன் இந்தியாவின் பிக் மேக்",
    "McAloo Tikki": "மெக்ஆலு டிக்கி",
    "McVeggie": "மெக்வெஜ்ஜி",
    "McSpicy Paneer": "மெக்ஸ்பைசி பன்னீர்",
    "Veg Maharaja Mac": "வெஜ் மஹாராஜா மேக்",
    "Veg Pizza McPuff": "வெஜ் பிஸ்ஸா மெக்பஃப்",
    "McChicken": "மெக்சிக்கன்",
    "McSpicy Chicken": "மெக்ஸ்பைசி சிக்கன்",
    "Chicken Maharaja Mac": "சிக்கன் மஹாராஜா மேக்",
    "Fillet-O-Fish": "ஃபிலே-ஓ-ஃபிஷ்",
    "McEgg": "மெக்எக்",
    "Spicy Paneer Wrap": "ஸ்பைசி பன்னீர் ராப்",
    "Spicy Chicken Wrap": "ஸ்பைசி சிக்கன் ராப்",
    "French Fries": "ஃப்ரெஞ்ச் ஃப்ரைஸ்",
    "Chicken McNuggets": "சிக்கன் மெக்நக்கெட்ஸ்",
    "Coca-Cola": "கோகா-கோலா",
    "Sprite": "ஸ்ப்ரைட்",
    "Fanta": "ஃபாண்டா",
    "McCaf\u00e9 Latte": "மெக்காஃபே லாட்டே",
    "McCaf\u00e9 Cappuccino": "மெக்காஃபே கப்புச்சினோ",
    "McFlurry": "மெக்ஃப்ளரி",
    "Soft Serve": "சாஃப்ட் சர்வ்",
    "Hot Fudge Sundae": "ஹாட் ஃபட்ஜ் சண்டே",
    "Veg Happy Meal": "வெஜ் ஹாப்பி மீல்",
    "Chicken Happy Meal": "சிக்கன் ஹாப்பி மீல்",
    "McAloo Tikki Meal": "மெக்ஆலு டிக்கி மீல்",
    "McChicken Meal": "மெக்சிக்கன் மீல்",
    "Maharaja Mac Meal": "மஹாராஜா மேக் மீல்"
  },
  "te-IN": {
    "Veg Burgers": "వెజ్ బర్గర్లు",
    "Non-Veg Burgers": "నాన్-వెజ్ బర్గర్లు",
    "Wraps": "రాప్‌లు",
    "Sides": "సైడ్స్",
    "Drinks": "పానీయాలు",
    "Desserts": "డెజర్ట్‌లు",
    "Happy Meals": "హ్యాపీ మీల్స్",
    "Value Meals": "వ్యాల్యూ మీల్స్",
    "Your Order": "మీ ఆర్డర్",
    "Tap to order": "ఆర్డర్ చేయడానికి ట్యాప్ చేయండి",
    "Confirm Order": "ఆర్డర్ నిర్ధారించండి",
    "Add more items": "మరిన్ని ఐటెమ్‌లు జోడించండి",
    "Popular": "జనప్రియ",
    "Today's Specials": "ఈరోజు స్పెషల్",
    "Spicy potato and pea patty with special sauce": "స్పెషల్ సాస్‌తో స్పైసీ బంగాళదుంప మరియు బఠానీ పేటీ",
    "Patty made of potatoes, peas, carrots and Indian spices": "బంగాళదుంపలు, బఠానీలు, క్యారెట్లు మరియు భారతీయ మసాలాలతో చేసిన పేటీ",
    "Crispy paneer patty with tandoori sauce and lettuce": "తందూరీ సాస్ మరియు లెట్యూస్‌తో క్రిస్పీ పన్నీర్ పేటీ",
    "Two veg patties, special sauce, lettuce, cheese": "రెండు వెజ్ పేటీలు, స్పెషల్ సాస్, లెట్యూస్, చీజ్",
    "Vegetables and cheese in a crispy pastry shell": "క్రిస్పీ పేస్ట్రీలో కూరగాయలు మరియు చీజ్",
    "Breaded chicken patty with mayo and lettuce": "మేయో మరియు లెట్యూస్‌తో బ్రెడ్డెడ్ చికెన్ పేటీ",
    "Spicy crispy chicken with lettuce in a sesame bun": "నువ్వుల బన్‌లో లెట్యూస్‌తో స్పైసీ క్రిస్పీ చికెన్",
    "Two chicken patties, special sauce, lettuce, cheese": "రెండు చికెన్ పేటీలు, స్పెషల్ సాస్, లెట్యూస్, చీజ్",
    "Fish fillet with tartar sauce and cheese on a steamed bun": "స్టీమ్డ్ బన్‌పై టార్టార్ సాస్ మరియు చీజ్‌తో ఫిష్ ఫిలే",
    "Egg patty with mayo on a toasted bun": "టోస్ట్ బన్‌పై మేయోతో ఎగ్ పేటీ",
    "Crispy paneer in a tortilla with veggies and sauce": "టార్టిల్లాలో కూరగాయలు మరియు సాస్‌తో క్రిస్పీ పన్నీర్",
    "Crispy chicken in a tortilla with veggies and sauce": "టార్టిల్లాలో కూరగాయలు మరియు సాస్‌తో క్రిస్పీ చికెన్",
    "Crispy golden fries": "క్రిస్పీ గోల్డెన్ ఫ్రైస్",
    "Tender chicken nuggets with dipping sauce": "డిప్పింగ్ సాస్‌తో మృదువైన చికెన్ నగ్గెట్స్",
    "Soft serve ice cream with toppings": "టాపింగ్స్‌తో సాఫ్ట్ సర్వ్ ఐస్‌క్రీమ్",
    "Vanilla soft serve cone": "వెనిలా సాఫ్ట్ సర్వ్ కోన్",
    "Vanilla ice cream with hot fudge": "హాట్ ఫడ్జ్‌తో వెనిలా ఐస్‌క్రీమ్",
    "McAloo Tikki + Fries + Drink + Toy": "McAloo Tikki + ఫ్రైస్ + డ్రింక్ + టాయ్",
    "McChicken + Fries + Drink + Toy": "McChicken + ఫ్రైస్ + డ్రింక్ + టాయ్",
    "McAloo Tikki + Fries (S) + Coke (S)": "McAloo Tikki + ఫ్రైస్ (S) + కోక్ (S)",
    "McChicken + Fries (M) + Coke (M)": "McChicken + ఫ్రైస్ (M) + కోక్ (M)",
    "Chicken Maharaja Mac + Fries (M) + Coke (M)": "Chicken Maharaja Mac + ఫ్రైస్ (M) + కోక్ (M)",
    "Crispy paneer with tandoori sauce": "తందూరీ సాస్‌తో క్రిస్పీ పన్నీర్",
    "India's Big Mac with two chicken patties": "రెండు చికెన్ పేటీలతో ఇండియా బిగ్ మేక్",
    "McAloo Tikki": "మెక్‌ఆలూ టిక్కీ",
    "McVeggie": "మెక్‌వెజ్జీ",
    "McSpicy Paneer": "మెక్‌స్పైసీ పన్నీర్",
    "Veg Maharaja Mac": "వెజ్ మహారాజా మేక్",
    "Veg Pizza McPuff": "వెజ్ పిజ్జా మెక్‌పఫ్",
    "McChicken": "మెక్‌చికెన్",
    "McSpicy Chicken": "మెక్‌స్పైసీ చికెన్",
    "Chicken Maharaja Mac": "చికెన్ మహారాజా మేక్",
    "Fillet-O-Fish": "ఫిలే-ఓ-ఫిష్",
    "McEgg": "మెక్‌ఎగ్",
    "Spicy Paneer Wrap": "స్పైసీ పన్నీర్ రాప్",
    "Spicy Chicken Wrap": "స్పైసీ చికెన్ రాప్",
    "French Fries": "ఫ్రెంచ్ ఫ్రైస్",
    "Chicken McNuggets": "చికెన్ మెక్‌నగ్గెట్స్",
    "Coca-Cola": "కోకా-కోలా",
    "Sprite": "స్ప్రైట్",
    "Fanta": "ఫాంటా",
    "McCaf\u00e9 Latte": "మెక్‌కాఫే లాట్టే",
    "McCaf\u00e9 Cappuccino": "మెక్‌కాఫే కాపుచినో",
    "McFlurry": "మెక్‌ఫ్లరీ",
    "Soft Serve": "సాఫ్ట్ సర్వ్",
    "Hot Fudge Sundae": "హాట్ ఫడ్జ్ సండే",
    "Veg Happy Meal": "వెజ్ హ్యాపీ మీల్",
    "Chicken Happy Meal": "చికెన్ హ్యాపీ మీల్",
    "McAloo Tikki Meal": "మెక్‌ఆలూ టిక్కీ మీల్",
    "McChicken Meal": "మెక్‌చికెన్ మీల్",
    "Maharaja Mac Meal": "మహారాజా మేక్ మీల్"
  },
  "bn-IN": {
    "Veg Burgers": "ভেজ বার্গার",
    "Non-Veg Burgers": "নন-ভেজ বার্গার",
    "Wraps": "র‍্যাপস",
    "Sides": "সাইডস",
    "Drinks": "পানীয়",
    "Desserts": "ডেজার্ট",
    "Happy Meals": "হ্যাপি মিলস",
    "Value Meals": "ভ্যালু মিলস",
    "Your Order": "আপনার অর্ডার",
    "Tap to order": "অর্ডার করতে ট্যাপ করুন",
    "Confirm Order": "অর্ডার নিশ্চিত করুন",
    "Add more items": "আরও যোগ করুন",
    "Popular": "জনপ্রিয়",
    "Today's Specials": "আজকের স্পেশাল",
    "Spicy potato and pea patty with special sauce": "স্পেশাল সসের সাথে ঝাল আলু ও মটর প্যাটি",
    "Patty made of potatoes, peas, carrots and Indian spices": "আলু, মটর, গাজর ও ভারতীয় মশলা দিয়ে তৈরি প্যাটি",
    "Crispy paneer patty with tandoori sauce and lettuce": "তন্দুরি সস ও লেটুসের সাথে ক্রিস্পি পনির প্যাটি",
    "Two veg patties, special sauce, lettuce, cheese": "দুটি ভেজ প্যাটি, স্পেশাল সস, লেটুস, চিজ",
    "Vegetables and cheese in a crispy pastry shell": "ক্রিস্পি পেস্ট্রিতে সবজি ও চিজ",
    "Breaded chicken patty with mayo and lettuce": "মেয়ো ও লেটুসের সাথে ব্রেডেড চিকেন প্যাটি",
    "Spicy crispy chicken with lettuce in a sesame bun": "তিলের বানে লেটুসের সাথে ঝাল ক্রিস্পি চিকেন",
    "Two chicken patties, special sauce, lettuce, cheese": "দুটি চিকেন প্যাটি, স্পেশাল সস, লেটুস, চিজ",
    "Fish fillet with tartar sauce and cheese on a steamed bun": "স্টিমড বানে টার্টার সস ও চিজের সাথে ফিশ ফিলে",
    "Egg patty with mayo on a toasted bun": "টোস্ট করা বানে মেয়োর সাথে ডিম প্যাটি",
    "Crispy paneer in a tortilla with veggies and sauce": "টর্টিলায় সবজি ও সসের সাথে ক্রিস্পি পনির",
    "Crispy chicken in a tortilla with veggies and sauce": "টর্টিলায় সবজি ও সসের সাথে ক্রিস্পি চিকেন",
    "Crispy golden fries": "ক্রিস্পি গোল্ডেন ফ্রাইস",
    "Tender chicken nuggets with dipping sauce": "ডিপিং সসের সাথে নরম চিকেন নাগেটস",
    "Soft serve ice cream with toppings": "টপিংস সহ সফট সার্ভ আইসক্রিম",
    "Vanilla soft serve cone": "ভ্যানিলা সফট সার্ভ কোন",
    "Vanilla ice cream with hot fudge": "হট ফাজের সাথে ভ্যানিলা আইসক্রিম",
    "McAloo Tikki + Fries + Drink + Toy": "McAloo Tikki + ফ্রাইস + পানীয় + খেলনা",
    "McChicken + Fries + Drink + Toy": "McChicken + ফ্রাইস + পানীয় + খেলনা",
    "McAloo Tikki + Fries (S) + Coke (S)": "McAloo Tikki + ফ্রাইস (S) + কোক (S)",
    "McChicken + Fries (M) + Coke (M)": "McChicken + ফ্রাইস (M) + কোক (M)",
    "Chicken Maharaja Mac + Fries (M) + Coke (M)": "Chicken Maharaja Mac + ফ্রাইস (M) + কোক (M)",
    "Crispy paneer with tandoori sauce": "তন্দুরি সসের সাথে ক্রিস্পি পনির",
    "India's Big Mac with two chicken patties": "দুটি চিকেন প্যাটি সহ ইন্ডিয়ার বিগ ম্যাক",
    "McAloo Tikki": "ম্যাকআলু টিক্কি",
    "McVeggie": "ম্যাকভেজি",
    "McSpicy Paneer": "ম্যাকস্পাইসি পনির",
    "Veg Maharaja Mac": "ভেজ মহারাজা ম্যাক",
    "Veg Pizza McPuff": "ভেজ পিজা ম্যাকপাফ",
    "McChicken": "ম্যাকচিকেন",
    "McSpicy Chicken": "ম্যাকস্পাইসি চিকেন",
    "Chicken Maharaja Mac": "চিকেন মহারাজা ম্যাক",
    "Fillet-O-Fish": "ফিলে-ও-ফিশ",
    "McEgg": "ম্যাকএগ",
    "Spicy Paneer Wrap": "স্পাইসি পনির র‍্যাপ",
    "Spicy Chicken Wrap": "স্পাইসি চিকেন র‍্যাপ",
    "French Fries": "ফ্রেঞ্চ ফ্রাইস",
    "Chicken McNuggets": "চিকেন ম্যাকনাগেটস",
    "Coca-Cola": "কোকা-কোলা",
    "Sprite": "স্প্রাইট",
    "Fanta": "ফান্টা",
    "McCaf\u00e9 Latte": "ম্যাককাফে ল্যাটে",
    "McCaf\u00e9 Cappuccino": "ম্যাককাফে ক্যাপুচিনো",
    "McFlurry": "ম্যাকফ্লারি",
    "Soft Serve": "সফট সার্ভ",
    "Hot Fudge Sundae": "হট ফাজ সানডে",
    "Veg Happy Meal": "ভেজ হ্যাপি মিল",
    "Chicken Happy Meal": "চিকেন হ্যাপি মিল",
    "McAloo Tikki Meal": "ম্যাকআলু টিক্কি মিল",
    "McChicken Meal": "ম্যাকচিকেন মিল",
    "Maharaja Mac Meal": "মহারাজা ম্যাক মিল"
  },
  "mr-IN": {
    "Veg Burgers": "वेज बर्गर",
    "Non-Veg Burgers": "नॉन-वेज बर्गर",
    "Wraps": "रॅप्स",
    "Sides": "साइड्स",
    "Drinks": "पेये",
    "Desserts": "डेझर्ट",
    "Happy Meals": "हॅपी मिल्स",
    "Value Meals": "व्हॅल्यू मिल्स",
    "Your Order": "तुमची ऑर्डर",
    "Tap to order": "ऑर्डर करण्यासाठी टॅप करा",
    "Confirm Order": "ऑर्डर कन्फर्म करा",
    "Add more items": "आणखी जोडा",
    "Popular": "लोकप्रिय",
    "Today's Specials": "आजचे स्पेशल",
    "Spicy potato and pea patty with special sauce": "स्पेशल सॉससह तिखट बटाटा आणि मटर पॅटी",
    "Patty made of potatoes, peas, carrots and Indian spices": "बटाटा, मटर, गाजर आणि भारतीय मसाल्यांपासून बनवलेली पॅटी",
    "Crispy paneer patty with tandoori sauce and lettuce": "तंदुरी सॉस आणि लेट्यूससह क्रिस्पी पनीर पॅटी",
    "Two veg patties, special sauce, lettuce, cheese": "दोन वेज पॅटी, स्पेशल सॉस, लेट्यूस, चीझ",
    "Vegetables and cheese in a crispy pastry shell": "क्रिस्पी पेस्ट्रीमध्ये भाज्या आणि चीझ",
    "Breaded chicken patty with mayo and lettuce": "मेयो आणि लेट्यूससह ब्रेडेड चिकन पॅटी",
    "Spicy crispy chicken with lettuce in a sesame bun": "तीळ बनमध्ये लेट्यूससह तिखट क्रिस्पी चिकन",
    "Two chicken patties, special sauce, lettuce, cheese": "दोन चिकन पॅटी, स्पेशल सॉस, लेट्यूस, चीझ",
    "Fish fillet with tartar sauce and cheese on a steamed bun": "स्टीम्ड बनवर टार्टर सॉस आणि चीझसह फिश फिले",
    "Egg patty with mayo on a toasted bun": "टोस्ट केलेल्या बनवर मेयोसह अंड्याची पॅटी",
    "Crispy paneer in a tortilla with veggies and sauce": "टॉर्टिलामध्ये भाज्या आणि सॉससह क्रिस्पी पनीर",
    "Crispy chicken in a tortilla with veggies and sauce": "टॉर्टिलामध्ये भाज्या आणि सॉससह क्रिस्पी चिकन",
    "Crispy golden fries": "क्रिस्पी गोल्डन फ्राईज",
    "Tender chicken nuggets with dipping sauce": "डिपिंग सॉससह मऊ चिकन नगेट्स",
    "Soft serve ice cream with toppings": "टॉपिंग्ससह सॉफ्ट सर्व्ह आईस्क्रीम",
    "Vanilla soft serve cone": "व्हॅनिला सॉफ्ट सर्व्ह कोन",
    "Vanilla ice cream with hot fudge": "हॉट फज सह व्हॅनिला आईस्क्रीम",
    "McAloo Tikki + Fries + Drink + Toy": "McAloo Tikki + फ्राईज + पेय + खेळणे",
    "McChicken + Fries + Drink + Toy": "McChicken + फ्राईज + पेय + खेळणे",
    "McAloo Tikki + Fries (S) + Coke (S)": "McAloo Tikki + फ्राईज (S) + कोक (S)",
    "McChicken + Fries (M) + Coke (M)": "McChicken + फ्राईज (M) + कोक (M)",
    "Chicken Maharaja Mac + Fries (M) + Coke (M)": "Chicken Maharaja Mac + फ्राईज (M) + कोक (M)",
    "Crispy paneer with tandoori sauce": "तंदुरी सॉससह क्रिस्पी पनीर",
    "India's Big Mac with two chicken patties": "दोन चिकन पॅटीसह भारताचा बिग मॅक",
    "McAloo Tikki": "मॅकआलू टिक्की",
    "McVeggie": "मॅकवेजी",
    "McSpicy Paneer": "मॅकस्पायसी पनीर",
    "Veg Maharaja Mac": "वेज महाराजा मॅक",
    "Veg Pizza McPuff": "वेज पिझ्झा मॅकपफ",
    "McChicken": "मॅकचिकन",
    "McSpicy Chicken": "मॅकस्पायसी चिकन",
    "Chicken Maharaja Mac": "चिकन महाराजा मॅक",
    "Fillet-O-Fish": "फिले-ओ-फिश",
    "McEgg": "मॅकएग",
    "Spicy Paneer Wrap": "स्पायसी पनीर रॅप",
    "Spicy Chicken Wrap": "स्पायसी चिकन रॅप",
    "French Fries": "फ्रेंच फ्राईज",
    "Chicken McNuggets": "चिकन मॅकनगेट्स",
    "Coca-Cola": "कोका-कोला",
    "Sprite": "स्प्राईट",
    "Fanta": "फॅन्टा",
    "McCaf\u00e9 Latte": "मॅककॅफे लॅटे",
    "McCaf\u00e9 Cappuccino": "मॅककॅफे कॅपुचिनो",
    "McFlurry": "मॅकफ्लरी",
    "Soft Serve": "सॉफ्ट सर्व्ह",
    "Hot Fudge Sundae": "हॉट फज सनडे",
    "Veg Happy Meal": "वेज हॅपी मिल",
    "Chicken Happy Meal": "चिकन हॅपी मिल",
    "McAloo Tikki Meal": "मॅकआलू टिक्की मिल",
    "McChicken Meal": "मॅकचिकन मिल",
    "Maharaja Mac Meal": "महाराजा मॅक मिल"
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
