


import { Plan, MarketItem, FAQItem, Testimonial, ResourceItem, BlogPost, GalleryItem, PainPointItem, ComparisonRow, Recipe, MenuCategory, Addon } from './types';

export const LOCATIONS = ['Agarpara', 'Sodepur', 'Belgharia'];

export const SUBSCRIPTION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd9DcmzwhkLPB989NtGE1SouGTwESEfHpl4kGrZbae8TquuYg/viewform';
export const FREE_RESOURCES_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeOe-Qf2aUaeW7Rc0MB1e3m1qPpiUTYwQiprmuOzFGyCkS0og/viewform';
export const NO_MEAL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdqcl4jNWsBMzj6VF5rVJ2eks2CW86V5RuePucAYS6nUpc6nA/viewform?usp=header';
export const JOB_APPLICATION_FORM_URL = 'https://forms.gle/i2y69MGmSbypL6av7';
export const LIVE_PRICING_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgX6koRtAME3B3OwxJnSCwhLwjpsQ2MjA84xoH4mey2lS0p0J4Ob9SlKVm8W8hJdSh3xEtZVKwKYF3/pubhtml';

export const POLICY_URLS = {
  terms: '/terms',
  refund: '/refund',
  privacy: '/privacy'
};

export const MARKET_DATA: MarketItem[] = [
  { id: '1', name: 'Chicken (Dressed)', nameBn: 'চিকেন (ড্রেসড)', price: 220, unit: 'kg', unitBn: 'কেজি', trend: 'up' },
  { id: '2', name: 'Katla Fish', nameBn: 'কাতলা মাছ', price: 350, unit: 'kg', unitBn: 'কেজি', trend: 'stable' },
  { id: '3', name: 'Miniket Rice', nameBn: 'মিনিকেট চাল', price: 58, unit: 'kg', unitBn: 'কেজি', trend: 'up' },
  { id: '4', name: 'Seasonal Veg', nameBn: 'মরশুমি সবজি', price: 40, unit: 'avg/kg', unitBn: 'গড়/কেজি', trend: 'down' },
];

export const PLANS: Plan[] = [
  {
    id: 'guest',
    type: 'onetime',
    name: 'Guest Meal (One-Time)',
    nameBn: 'গেস্ট মিল (একবার)',
    price: 75,
    perMeal: 75,
    features: ['Lunch or Dinner Choice', 'Fine Rice / Roti', 'Seasonal Sabji + Dal', 'Fish / Chicken / Egg', 'Premium Foil Packing'],
    featuresBn: ['দুপুর বা রাতের খাবার', 'সরু চালের ভাত / রুটি', 'সবজি + ডাল', 'মাছ / মাংস / ডিম', 'প্রিমিয়াম ফয়েল প্যাকিং'],
    bestFor: 'Trial / Guests',
    bestForBn: 'ট্রায়াল / অতিথি',
    image: 'https://images.unsplash.com/photo-1630409351235-9ae2869502a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'student',
    type: 'subscription',
    name: 'Student Saver',
    nameBn: 'স্টুডেন্ট সেভার',
    price: 2800,
    perMeal: 30,
    features: ['3 Meals (Bfast+Lunch+Dinner)', 'Rice/Roti', 'Seasonal Sabji', 'Dal', 'Egg (2x week)'],
    featuresBn: ['৩ বেলা খাবার (সকাল+দুপুর+রাত)', 'ভাত/রুটি', 'সবজি', 'ডাল', 'ডিম (সপ্তাহে ২ দিন)'],
    bestFor: 'Students',
    bestForBn: 'ছাত্রছাত্রীদের জন্য',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'professional',
    type: 'subscription',
    name: 'Office Ready',
    nameBn: 'অফিস রেডি',
    price: 3500,
    perMeal: 40,
    features: ['3 Meals (Bfast+Lunch+Dinner)', 'Rice/Roti', 'Chicken/Fish (Alt days)', 'Special Sabji', 'Salad'],
    featuresBn: ['৩ বেলা খাবার (সকাল+দুপুর+রাত)', 'ভাত/রুটি', 'মাছ/মাংস (একদিন অন্তর)', 'স্পেশাল সবজি', 'স্যালাড'],
    bestFor: 'Professionals',
    bestForBn: 'অফিস যাত্রীদের জন্য',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'senior',
    type: 'subscription',
    name: 'Senior Lite',
    nameBn: 'সিনিয়র লাইট',
    price: 3000,
    perMeal: 35,
    features: ['3 Meals (Bfast+Lunch+Dinner)', 'Soft Rice/Roti', 'Chicken/Fish (Light Stew)', 'Less Oil/Spice', 'Digestible Sabji'],
    featuresBn: ['৩ বেলা খাবার (সকাল+দুপুর+রাত)', 'নরম ভাত/রুটি', 'মাছ/মাংস (হালকা ঝোল)', 'কম তেল-মসলা', 'সহজপাচ্য সবজি'],
    bestFor: 'Seniors',
    bestForBn: 'বয়স্কদের জন্য',
    image: 'https://images.unsplash.com/photo-1593560708920-63984dc77432?q=80&w=1000&auto=format&fit=crop'
  }
];

export const SAMPLE_MENU: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Breakfast Cum Tiffin',
    titleBn: 'ব্রেকফাস্ট / টিফিন',
    items: 'Chowmin, Lemon Rice, Upma, Poha, Idli etc.',
    itemsBn: 'চাউমিন, লেমন রাইস, উপমা, পোহা, ইডলি ইত্যাদি।',
    icon: '🍳'
  },
  {
    id: 'lunch',
    title: 'Lunch',
    titleBn: 'লাঞ্চ',
    items: 'Veg only meals like Rice, Dal, Sabji, Bhaji, Salad, Pickle etc.',
    itemsBn: 'নিরামিষ মিল: ভাত, ডাল, সবজি, ভাজা, স্যালাড, আচার ইত্যাদি।',
    icon: '🍱'
  },
  {
    id: 'dinner',
    title: 'Dinner',
    titleBn: 'ডিনার',
    items: 'Rice/Roti, Dal, Sabji, Bhaji/Chop/Cutlet, Paneer, Chicken, Fish, Soyabean items, Salad, Pickle etc.',
    itemsBn: 'ভাত/রুটি, ডাল, সবজি, ভাজা/চপ/কাটলেট, পনির, চিকেন, মাছ, সয়াবিন, স্যালাড, আচার ইত্যাদি।',
    icon: '🍛'
  }
];

export const ADDONS: Addon[] = [
  { id: '1', name: 'Rice Plate (~400ml)', nameBn: 'ভাত (৪০০ মিলি)', price: 20, unit: 'plate', unitBn: 'প্লেট' },
  { id: '2', name: 'Roti (Medium)', nameBn: 'রুটি (মাঝারি)', price: 5, unit: 'pc', unitBn: 'পিস' },
  { id: '3', name: 'Seasonal Sabji (~250ml)', nameBn: 'সবজি (২৫০ মিলি)', price: 30, unit: 'bowl', unitBn: 'বাটি' },
  { id: '4', name: 'Bhaja / Bada / Cutlet', nameBn: 'ভাজা / চপ / কাটলেট', price: 15, unit: 'pc', unitBn: 'পিস' },
  { id: '5', name: 'Dal (~200ml)', nameBn: 'ডাল (২০০ মিলি)', price: 20, unit: 'bowl', unitBn: 'বাটি' },
  { id: '6', name: 'Egg Curry (1pc)', nameBn: 'ডিমের ঝোল (১ পিস)', price: 30, unit: 'serving', unitBn: 'সার্ভিং' },
  { id: '7', name: 'Egg Omelette', nameBn: 'ডিম ভাজা / ওমলেট', price: 15, unit: 'pc', unitBn: 'পিস' },
  { id: '8', name: 'Chicken Curry (1pc)', nameBn: 'চিকেন কারি (১ পিস)', price: 60, unit: 'pc', unitBn: 'পিস' },
  { id: '9', name: 'Fish Curry (1pc)', nameBn: 'মাছ (১ পিস)', price: 60, unit: 'pc', unitBn: 'পিস' },
  { id: '10', name: 'Paneer Gravy', nameBn: 'পনির গ্রেভি', price: 50, unit: 'serving', unitBn: 'সার্ভিং' },
  { id: '11', name: 'Tiffin / Breakfast', nameBn: 'টিফিন / ব্রেকফাস্ট', price: 40, unit: 'meal', unitBn: 'মিল' },
  { id: '12', name: 'Maggi / Waiwai (Veg)', nameBn: 'ম্যাগি / ওয়াইওয়াই (ভেজি)', price: 25, unit: 'bowl', unitBn: 'বাটি' },
  { id: '13', name: 'Maggi / Waiwai (Egg)', nameBn: 'ম্যাগি / ওয়াইওয়াই (ডিম)', price: 35, unit: 'bowl', unitBn: 'বাটি' },
  { id: '14', name: 'Milk (200ml)', nameBn: 'দুধ (২০০ মিলি)', price: 25, unit: 'glass', unitBn: 'গ্লাস' },
  { id: '15', name: 'Tea (Large)', nameBn: 'চা (বড়)', price: 10, unit: 'cup', unitBn: 'কাপ' },
  { id: '16', name: 'Tea (Small)', nameBn: 'চা (ছোট)', price: 7, unit: 'cup', unitBn: 'কাপ' },
  { id: '17', name: 'Coffee', nameBn: 'কফি', price: 20, unit: 'cup', unitBn: 'কাপ' },
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    parameter: 'Monthly Spend',
    parameterBn: 'মাসিক খরচ',
    bhuk: '₹2,800 - ₹3,500',
    bhukBn: '₹২,৮০০ - ₹৩,৫০০',
    street: '₹3,500+',
    streetBn: '₹৩,৫০০+',
    apps: '₹8,000+',
    appsBn: '₹৮,০০০+',
    self: '₹4,000+',
    selfBn: '₹৪,০০০+',
    maid: '₹5,000+',
    maidBn: '₹৫,০০০+'
  },
  {
    parameter: 'Time Spent Daily',
    parameterBn: 'দৈনিক সময় ব্যয়',
    bhuk: '0 Mins',
    bhukBn: '০ মিনিট',
    street: '30 Mins',
    streetBn: '৩০ মিনিট',
    apps: '20 Mins',
    appsBn: '২০ মিনিট',
    self: '90 Mins',
    selfBn: '৯০ মিনিট',
    maid: 'Maid Management',
    maidBn: 'মনিটরিং প্রয়োজন'
  },
  {
    parameter: 'Oil & Spices',
    parameterBn: 'তেল ও মশলা',
    bhuk: 'High Quality (Control)',
    bhukBn: 'উন্নত মান (নিয়ন্ত্রিত)',
    street: 'Reused Oil ⚠️',
    streetBn: 'পোড়া তেল ⚠️',
    apps: 'Heavy/Rich',
    appsBn: 'অতিরিক্ত তেল/মশলা',
    self: 'Good',
    selfBn: 'ভালো',
    maid: 'Variable',
    maidBn: 'নির্ভরশীল'
  },
  {
    parameter: 'Hygiene / FSSAI',
    parameterBn: 'হাইজিন / FSSAI',
    bhuk: 'Certified ✅',
    bhukBn: 'সার্টিফাইড ✅',
    street: 'Uncertain ❓',
    streetBn: 'অনিশ্চিত ❓',
    apps: 'Varies',
    appsBn: 'ভিন্ন ভিন্ন',
    self: 'Good',
    selfBn: 'ভালো',
    maid: 'Varies',
    maidBn: 'ভিন্ন ভিন্ন'
  },
  {
    parameter: 'Hidden Costs',
    parameterBn: 'লুকানো খরচ',
    bhuk: 'None',
    bhukBn: 'নেই',
    street: 'Health Issues',
    streetBn: 'শারীরিক সমস্যা',
    apps: 'Delivery Fees',
    appsBn: 'ডেলিভারি চার্জ',
    self: 'Gas + Waste',
    selfBn: 'গ্যাস + অপচয়',
    maid: 'Bonuses/Leaves',
    maidBn: 'বোনাস/ছুটি'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'dada-boudi-biryani',
    title: 'Dada Boudir Mutton Biryani',
    titleBn: 'দাদা বৌদির মটন বিরিয়ানি',
    description: 'The legendary Barrackpore style biryani known for its massive mutton pieces and subtle aroma.',
    descriptionBn: ' ব্যারাকপুরের বিখ্যাত বিরিয়ানি, যা তার বিশাল মটন পিস এবং সুন্দর গন্ধের জন্য পরিচিত।',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000',
    prepTime: '2 hrs',
    servings: '4',
    ingredients: ['1kg Mutton (Large Cuts)', '750g Basmati Rice', '4 Potatoes (Large)', 'Yogurt, Ginger-Garlic Paste', 'Secret Biryani Masala', 'Rose Water & Keora Water'],
    ingredientsBn: ['১ কেজি মটন (বড় টুকরো)', '৭৫০ গ্রাম বাসমতি চাল', '৪টি বড় আলু', 'টক দই, আদা-রসুন বাটা', 'সিক্রেট বিরিয়ানি মশলা', 'গোলাপ জল ও কেওড়া জল'],
    instructions: [
      'Marinate mutton with yogurt, raw papaya paste, and spices for 4 hours.',
      'Cook the mutton in ghee until 80% done. Keep the gravy (yakhni).',
      'Boil rice with whole spices until 70% cooked.',
      'Layering: Put mutton and potatoes at the bottom, add rice on top.',
      'Pour saffron milk and ghee. Seal with dough (Dum) and cook on slow fire for 45 mins.'
    ],
    instructionsBn: [
      'মটন টক দই, কাঁচা পেঁপে বাটা এবং মশলা দিয়ে ৪ ঘণ্টা ম্যারিনেট করুন।',
      'ঘিয়ে মটন ৮০% রান্না করুন। ঝোল (আখনি) আলাদা রাখুন।',
      'গোটা মশলা দিয়ে চাল ৭০% সেদ্ধ করুন।',
      'লেয়ারিং: নিচে মটন এবং আলু দিন, উপরে চাল দিন।',
      'জাফরান দুধ এবং ঘি ছড়িয়ে দিন। আটা দিয়ে সিল করে ৪৫ মিনিট দমে রাখুন।'
    ],
    tags: ['Kolkata Special', 'Non-Veg', 'Biryani']
  },
  {
    id: 'rajasthani-rogan-josh',
    title: 'Rajasthani Laal Maas (Rogan Josh)',
    titleBn: 'রাজস্থানি লাল মাস (রোগান জোশ)',
    description: 'A fiery red meat curry cooked in the traditional Rajasthani style with Mathania chilies.',
    descriptionBn: 'মাথানিয়া লঙ্কা দিয়ে রাজস্থানি স্টাইলে তৈরি ঝাল লাল মাংসের ঝোল।',
    image: 'https://images.unsplash.com/photo-1574653853027-5386a527c17f?q=80&w=1000',
    prepTime: '1.5 hrs',
    servings: '3',
    ingredients: ['500g Mutton', 'Mathania Red Chilies (Paste)', 'Ghee (Lots of it)', 'Yogurt', 'Whole Spices (Cloves, Cardamom)'],
    ingredientsBn: ['৫০০ গ্রাম মটন', 'মাথানিয়া শুকনো লঙ্কা (বাটা)', 'ঘি (প্রচুর পরিমাণে)', 'টক দই', 'গোটা গরম মশলা'],
    instructions: [
      'Heat abundant Ghee and crackle whole spices.',
      'Fry sliced onions until golden brown.',
      'Add mutton and sear on high heat to lock juices.',
      'Add the red chili paste and beaten yogurt. Cook till oil separates.',
      'Simmer on low heat until the meat is tender and the oil (Rogan) floats on top.'
    ],
    instructionsBn: [
      'প্রচুর ঘি গরম করে গোটা মশলা ফোড়ন দিন।',
      'পেঁয়াজ লাল করে ভেজে নিন।',
      'মটন দিন এবং উচ্চ তাপে ভাজুন।',
      'লঙ্কা বাটা এবং ফেটানো টক দই মেশান। তেল ছাড়া পর্যন্ত কষান।',
      'কম আঁচে কষান যতক্ষণ না মাংস নরম হয় এবং তেল (রোগান) উপরে ভেসে ওঠে।'
    ],
    tags: ['Spicy', 'Royal', 'Curry']
  },
  {
    id: 'kfc-chicken',
    title: 'KFC Style Crispy Chicken',
    titleBn: 'KFC স্টাইল ক্রিস্পি চিকেন',
    description: 'Homemade version of the world-famous fried chicken with the secret 11 herbs and spices.',
    descriptionBn: 'বিশ্ববিখ্যাত ফ্রায়েড চিকেনের ঘরোয়া সংস্করণ, সিক্রেট মশলা দিয়ে তৈরি।',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000',
    prepTime: '45 mins',
    servings: '2',
    ingredients: ['Chicken Drumsticks/Wings', 'Buttermilk', 'All-Purpose Flour (Maida)', 'White Pepper, Garlic Powder', 'Paprika, Oregano, Dried Basil'],
    ingredientsBn: ['চিকেন লেগ/উইংস', 'বাটারমিল্ক', 'ময়দা', 'সাদা গোলমরিচ, রসুন গুঁড়ো', 'পাপ্রিকা, ওরেগানো, তুলসি পাতা গুঁড়ো'],
    instructions: [
      'Soak chicken in buttermilk for 2 hours (makes it juicy).',
      'Mix flour with all dry herbs and spices.',
      'Coat chicken in flour -> dip in egg/milk wash -> coat in flour again.',
      'Deep fry at 170°C for 12-15 minutes until golden brown and crispy.'
    ],
    instructionsBn: [
      'চিকেন বাটারমিল্কে ২ ঘণ্টা ভিজিয়ে রাখুন (জুসি করার জন্য)।',
      'ময়দার সাথে সব শুকনো মশলা ও হার্বস মেশান।',
      'চিকেন কোট করুন: ময়দা -> ডিম/দুধ -> আবার ময়দা।',
      'সোনালী এবং মচমচে না হওয়া পর্যন্ত ছাঁকা তেলে ১২-১৫ মিনিট ভাজুন।'
    ],
    tags: ['Fast Food', 'Kids Favorite', 'Fried']
  },
  {
    id: 'mc-chicken-burger',
    title: 'McDonald\'s Chicken Burger',
    titleBn: 'ম্যাকডোনাল্ডস চিকেন বার্গার',
    description: 'The classic McChicken style burger with a peppery patty, mayonnaise, and iceberg lettuce.',
    descriptionBn: 'ক্লাসিক ম্যাকচিকেন স্টাইল বার্গার, সাথে মেয়োনিজ এবং লেটুস।',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000',
    prepTime: '30 mins',
    servings: '2',
    ingredients: ['Minced Chicken', 'Burger Buns (Sesame)', 'Mayonnaise', 'Iceberg Lettuce (Shredded)', 'Breadcrumbs', 'Black Pepper'],
    ingredientsBn: ['চিকেন কিমা', 'বার্গার বন', 'মেয়োনিজ', 'আইসবার্গ লেটুস (কুচানো)', 'ব্রেডক্রাম্বস', 'কালো গোলমরিচ'],
    instructions: [
      'Mix minced chicken with pepper and salt. Shape into round flat patties.',
      'Coat patties in breadcrumbs and deep fry.',
      'Toast the buns slightly on a tawa.',
      'Assemble: Bun bottom -> Fried Patty -> Lots of Mayo -> Lettuce -> Bun top.'
    ],
    instructionsBn: [
      'চিকেন কিমার সাথে গোলমরিচ ও নুন মিশিয়ে গোল প্যাটি গড়ুন।',
      'ব্রেডক্রাম্ব মাখিয়ে প্যাটি ছাঁকা তেলে ভাজুন।',
      'বনগুলো তাওয়ায় হালকা টোস্ট করুন।',
      'সাজান: বন -> প্যাটি -> প্রচুর মেয়োনিজ -> লেটুস -> বন।'
    ],
    tags: ['Fast Food', 'Burger', 'Snack']
  }
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'maid',
    emoji: '🧹',
    title: 'The "Maid" Drama',
    titleBn: 'কাজের মাসির সমস্যা',
    problem: '"Didi aj asbo na..." or sudden demands for bonuses and holidays.',
    problemBn: '"দিদি আজ আসবো না..." অথবা হঠাৎ বোনাস বা ছুটির দাবি।',
    solution: 'Reliable 365-day delivery. Plus, use our "No Meal Day" form to get refunds for days you skip.',
    solutionBn: '৩৬৫ দিন নিশ্চিত ডেলিভারি। আর যেদিন খাবেন না, "নো মিল ডে" ফর্ম ভরে টাকা ফেরত পান।'
  },
  {
    id: 'grocery',
    emoji: '🛒',
    title: 'Grocery Logistics',
    titleBn: 'বাজার করার ঝক্কি',
    problem: 'Running out of oil? Carrying heavy bags? Haggling in the heat?',
    problemBn: 'তেল শেষ? ভারী ব্যাগ বয়ে আনা? রোদে দাঁড়িয়ে দরদাম করা?',
    solution: 'We source fresh wholesale ingredients daily. You just eat.',
    solutionBn: 'আমরা রোজ টাটকা পাইকারি বাজার করি। আপনি শুধু খাওয়ার আনন্দ নিন।'
  },
  {
    id: 'breakfast',
    emoji: '🥟',
    title: 'The Kachori Trap',
    titleBn: 'রাস্তার ধারের ব্রেকফাস্ট',
    problem: 'Eating oily roadside Kachori or skipping breakfast in the morning rush?',
    problemBn: 'রোজ সকালে রাস্তার তেলচপচপে কচুরি খাচ্ছেন বা না খেয়েই বেরোচ্ছেন?',
    solution: 'Healthy, home-style breakfast delivered before you leave for work.',
    solutionBn: 'অফিসে বেরোনোর আগেই বাড়িতে পৌঁছে যাবে স্বাস্থ্যকর ব্রেকফাস্ট।'
  },
  {
    id: 'admin',
    emoji: '🤯',
    title: 'The "Kitchen Manager" Trap',
    titleBn: 'রান্নাঘর সামলানোর চাপ',
    problem: 'Gas booking, grocery runs, maid salary, washing dishes, equipment maintenance...',
    problemBn: 'গ্যাস বুকিং, বাজার করা, মাসির মাইনে, বাসন মাজা, রান্নাঘর পরিষ্কার...',
    solution: 'Fire yourself as the manager. One subscription covers everything.',
    solutionBn: 'ম্যানেজারের দায়িত্ব ছাড়ুন। এক সাবস্ক্রিপশনেই সব সমস্যার সমাধান।'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: '1',
    title: 'The Truth About "Hotel Food"',
    titleBn: '"হোটেল ফুড" এর আসল সত্যি',
    description: 'Why your stomach hurts after eating out, and the hidden dangers of Soda & Reused Oil.',
    descriptionBn: 'বাইরে খাওয়ার পর কেন পেট ব্যথা করে, এবং সোডা ও পোড়া তেলের গোপন বিপদ।',
    icon: '⚠️'
  },
  {
    id: '2',
    title: 'Brain Fuel: Exam Special',
    titleBn: 'ব্রেন ফুয়েল: এক্সাম স্পেশাল',
    description: 'What to eat (and avoid) to improve memory and focus during exam season.',
    descriptionBn: 'পরীক্ষার মরসুমে স্মৃতিশক্তি ও মনোযোগ বাড়াতে কী খাবেন (আর কী এড়াবেন)।',
    icon: '🧠'
  },
  {
    id: '3',
    title: 'The Rice Myth',
    titleBn: 'ভাত নিয়ে ভুল ধারণা',
    description: 'Can you lose weight eating rice? The science of the "Go-Slim" Bengali Diet.',
    descriptionBn: 'ভাত খেয়েও কি ওজন কমানো সম্ভব? "গো-স্লিম" বাঙালি ডায়েটের বিজ্ঞান।',
    icon: '⚖️'
  },
  {
    id: '4',
    title: "Bachelor's Survival Guide",
    titleBn: 'ব্যাচেলরদের সার্ভাইভাল গাইড',
    description: 'How to stay healthy in a PG without going broke or falling sick.',
    descriptionBn: 'পকেটে টান না ফেলে বা অসুস্থ না হয়ে পিজি-তে (PG) সুস্থ থাকার উপায়।',
    icon: '👛'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Where exactly do you deliver?',
    questionBn: 'আপনারা ঠিক কোথায় কোথায় ডেলিভারি করেন?',
    answer: 'We cover most of Agarpara, Sodepur, and Belgharia. Specifically, areas from Agarpara Station to Sodepur Traffic More, and up to Rathtala in Belgharia. If you live in the interior lanes, please call us to confirm.',
    answerBn: 'আমরা আগরপাড়া, সোদপুর এবং বেলঘড়িয়ার অধিকাংশ এলাকায় পরিষেবা দিই। বিশেষ করে আগরপাড়া স্টেশন থেকে সোদপুর ট্রাফিক মোড় এবং বেলঘড়িয়া রথতলা পর্যন্ত। ভেতরের রাস্তায় থাকলে ফোন করে নিশ্চিত করুন।'
  },
  {
    id: '2',
    question: 'Can I pause my subscription if I travel?',
    questionBn: 'আমি বাইরে গেলে কি সাবস্ক্রিপশন বন্ধ রাখতে পারি?',
    answer: 'Yes! Just fill our "No Meal Day Claim" form 24 hours in advance. We will pause your meal and you can claim a refund or carry forward the balance. No questions asked.',
    answerBn: 'হ্যাঁ! ২৪ ঘণ্টা আগে আমাদের "নো মিল ডে ক্লেইম" ফর্মটি পূরণ করুন। আমরা আপনার খাবার বন্ধ রাখব এবং আপনি রিফান্ড বা ব্যালেন্স অ্যাডজাস্ট করতে পারবেন। কোনো প্রশ্ন করা হবে না।'
  },
  {
    id: '3',
    question: 'What quality of oil and ingredients do you use?',
    questionBn: 'আপনারা কী মানের তেল ও মশলা ব্যবহার করেন?',
    answer: 'We strictly use Kachi Ghani Mustard Oil and premium Sunflower Oil. We grind our own spices in-house to ensure zero adulteration. Vegetables are sourced daily from the local wholesale market.',
    answerBn: 'আমরা শুধুমাত্র খাঁটি কাচ্চি ঘানি সর্ষের তেল এবং ভালো মানের সানফ্লাওয়ার অয়েল ব্যবহার করি। মশলা আমাদের নিজেদের তৈরি। সবজি রোজ সকালে পাইকারি বাজার থেকে আনা হয়।'
  },
  {
    id: '4',
    question: 'Is the food spicy?',
    questionBn: 'খাবার কি খুব ঝাল হয়?',
    answer: 'Our standard "Office Ready" meals are moderately spicy (home-style). However, the "Senior Lite" plan is designed with minimal oil and spice specifically for easy digestion.',
    answerBn: 'আমাদের "অফিস রেডি" মিল সাধারণ ঝাল হয় (ঘরোয়া স্টাইল)। তবে "সিনিয়র লাইট" প্ল্যানটি খুব কম তেল ও মশলা দিয়ে তৈরি করা হয় যা হজমের জন্য ভালো।'
  },
  {
    id: '5',
    question: 'How do I pay for the subscription?',
    questionBn: 'সাবস্ক্রিপশনের টাকা কীভাবে দেব?',
    answer: 'You can pay via UPI (GPay/PhonePe), Bank Transfer, or Cash on the first day of delivery. Subscriptions are prepaid.',
    answerBn: 'আপনি UPI (GPay/PhonePe), ব্যাঙ্ক ট্রান্সফার বা প্রথম দিন ক্যাশ দিতে পারেন। সাবস্ক্রিপশন প্রিপেইড।'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sayan D.',
    role: 'IT Professional',
    content: 'Finally found a service that doesn\'t taste like "hotel food". It is genuinely like my mother\'s cooking. The thermal bag keeps lunch hot till 1:30 PM.',
    contentBn: 'অবশেষে এমন একটা সার্ভিস পেলাম যার স্বাদ হোটেলের মতো নয়, একদম মায়ের হাতের রান্নার মতো। থার্মাল ব্যাগে খাবার দুপুর দেড়টা পর্যন্ত গরম থাকে।',
    source: 'Google',
    rating: 5
  },
  {
    id: '2',
    name: 'Anjali M.',
    role: 'Teacher',
    content: 'I have replaced my kitchen with Bhuk Foods. No more grocery shopping or chopping. The "Senior Lite" plan is perfect for my parents.',
    contentBn: 'আমি আমার রান্নাঘরের ঝামেলা পুরোপুরি ভুক ফুডসের ওপর ছেড়ে দিয়েছি। বাজার করা বা কুটনোর ঝামেলা নেই। আমার বাবা-মায়ের জন্য "সিনিয়র লাইট" প্ল্যানটা দারুণ।',
    source: 'Justdial',
    rating: 5
  },
  {
    id: '3',
    name: 'Rahul R.',
    role: 'Student',
    content: 'Best pocket-friendly option in Agarpara. The quantity is huge for the price. Highly recommended for students living alone.',
    contentBn: 'আগরপাড়ায় পকেট-ফ্রেন্ডলি অপশন। দাম অনুযায়ী পরিমাণ অনেক। যারা মেস-এ থাকো তাদের জন্য সেরা।',
    source: 'Google',
    rating: 4
  },
  {
    id: '4',
    name: 'Debanjan B.',
    role: 'Banker',
    content: 'I did the math. Bhuk is actually cheaper than maintaining a maid and buying groceries. Plus, zero headache.',
    contentBn: 'আমি হিসাব করে দেখেছি। মাসির খরচ আর বাজারের খরচের চেয়ে ভুক ফুডস সস্তা। আর কোনো মাথাব্যথা নেই।',
    source: 'Google',
    rating: 5
  },
  {
    id: '5',
    name: 'Mrs. Roy',
    role: 'Homemaker',
    content: 'My husband has high cholesterol, and Bhuk\'s "Senior Lite" plan is a blessing. Less oil, perfect taste. The delivery boy is also very polite.',
    contentBn: 'আমার স্বামীর হাই কোলেস্টেরল, তাই ভুকের "সিনিয়র লাইট" প্ল্যানটা আশীর্বাদের মতো। কম তেল, কিন্তু স্বাদে দারুণ। ডেলিভারি বয়ও খুব ভদ্র।',
    source: 'Google',
    rating: 5
  },
  {
    id: '6',
    name: 'Amit & Riya',
    role: 'Working Couple',
    content: 'We both work in Sector V and reach home late. Dinner delivery by Bhuk Foods saves us every night. The Sunday Mutton Thali is a must-try!',
    contentBn: 'আমরা দুজনেই সেক্টর ফাইভ-এ চাকরি করি, ফিরতে রাত হয়। ভুকের ডিনার ডেলিভারি আমাদের রোজ বাঁচিয়ে দেয়। রবিবার মটন থালি ট্রাই করতে ভুলবেন না!',
    source: 'Justdial',
    rating: 5
  },
  {
    id: '7',
    name: 'Souvik G.',
    role: 'Student (NIT)',
    content: 'Hostel food was terrible. Bhuk Foods is cheap and actually tastes like home. ₹30/meal for students is unbeatable in Agarpara.',
    contentBn: 'হস্টেলের খাবার জঘন্য ছিল। ভুক ফুডস সস্তা এবং একদম বাড়ির স্বাদ। আগরপাড়ায় ছাত্রছাত্রীদের জন্য ৩০ টাকায় এমন মিল পাওয়া অসম্ভব।',
    source: 'Google',
    rating: 4
  },
  {
    id: '8',
    name: 'Dr. Banerjee',
    role: 'Retired Doctor',
    content: 'Hygiene is my top priority. I visited their kitchen in Nilganj Road before subscribing. It is spotless. Very impressed with their standards.',
    contentBn: 'পরিচ্ছন্নতা আমার কাছে সবার আগে। সাবস্ক্রিপশন নেওয়ার আগে আমি নীলগঞ্জ রোডে ওদের কিচেন দেখতে গিয়েছিলাম। একদম ঝকঝকে। আমি খুব ইম্প্রেসড।',
    source: 'Justdial',
    rating: 5
  },
  {
    id: '9',
    name: 'Priya S.',
    role: 'New Mom',
    content: 'Recovering post-pregnancy was hard without help. Bhuk Foods was a lifesaver. The food is non-spicy and healthy, exactly what I needed.',
    contentBn: 'গর্ভাবস্থার পরে সাহায্য ছাড়া সামলানো খুব কঠিন ছিল। ভুক ফুডস আমাকে বাঁচিয়ে দিয়েছে। খাবার একদম ঝাল ছাড়া এবং স্বাস্থ্যকর।',
    source: 'Google',
    rating: 5
  },
  {
    id: '10',
    name: 'Vikram Singh',
    role: 'Fitness Trainer',
    content: 'I usually cook my own meals for macros, but Bhuk\'s chicken quality is surprisingly good. No greasy gravy, just good protein.',
    contentBn: 'ম্যাক্রোজের জন্য আমি সাধারণত নিজেই রান্না করি, কিন্তু ভুকের চিকেনের মান অবাক করার মতো ভালো। তেলতেলে ঝোল নয়, একদম ভালো প্রোটিন।',
    source: 'Justdial',
    rating: 4
  },
  {
    id: '11',
    name: 'Tapan Das',
    role: 'Shop Owner',
    content: 'I run a shop in Sodepur Station road. My lunch arrives exactly at 1:30 PM everyday. Very reliable service for business people.',
    contentBn: 'সোদপুর স্টেশন রোডে আমার দোকান আছে। আমার লাঞ্চ রোজ ঠিক দুপুর ১:৩০ টায় চলে আসে। ব্যবসায়ীদের জন্য খুব নির্ভরযোগ্য।',
    source: 'Google',
    rating: 5
  },
  {
    id: '12',
    name: 'Sneha G.',
    role: 'Nurse',
    content: 'My shifts are crazy. Sometimes I eat dinner at 10 PM. The food stays warm in their packaging. Really grateful.',
    contentBn: 'আমার শিফট খুব এলোমেলো। মাঝে মাঝে রাত ১০টায় ডিনার করি। ওদের প্যাকিংয়ে খাবার গরম থাকে। আমি সত্যিই কৃতজ্ঞ।',
    source: 'Google',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070',
    caption: 'Our Rooftop Kitchen in Agarpara',
    captionBn: 'আগরপাড়ায় আমাদের রুফটপ কিচেন',
    category: 'Kitchen'
  },
  {
    id: '3',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    caption: 'Sunday Special Chicken Thali',
    captionBn: 'রবিবারের স্পেশাল চিকেন থালি',
    category: 'Food'
  },
  {
    id: '4',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000',
    caption: 'Premium Packaging for Office',
    captionBn: 'অফিসের জন্য প্রিমিয়াম প্যাকেজিং',
    category: 'Food'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Reused Oil is a Slow Poison',
    titleBn: 'পোড়া তেল কেন স্বাস্থ্যের জন্য বিষ?',
    excerpt: 'Most cheap hotels reuse oil for 7 days. Learn how we maintain 100% oil purity at Bhuk Foods.',
    excerptBn: 'বেশিরভাগ সস্তা হোটেল ৭ দিন ধরে একই তেল ব্যবহার করে। জানুন আমরা কীভাবে তেলের বিশুদ্ধতা বজায় রাখি।',
    content: 'It is a common practice in roadside eateries and cheap hotels to reuse frying oil. When oil is heated repeatedly, it undergoes chemical changes, producing free radicals and trans fats that are harmful to the heart and can lead to long-term health issues like acidity, high cholesterol, and even cancer.\n\nAt Bhuk Foods, we follow a strict policy: we never reuse oil for deep frying. The oil used for frying fish or chicken is discarded immediately after one use. For our daily curries, we use fresh Kachi Ghani Mustard Oil or Sunflower Oil. This ensures that the food tastes fresh, is light on the stomach, and provides the nutrition you expect from a home-cooked meal.',
    contentBn: 'রাস্তার ধারের সস্তা হোটেলগুলোতে একই তেল বারবার ব্যবহার করা খুব সাধারণ ব্যাপার। তেল বারবার গরম করলে তাতে রাসায়নিক পরিবর্তন ঘটে এবং ফ্রি র‍্যাডিকাল ও ট্রান্স ফ্যাট তৈরি হয় যা হার্টের জন্য ক্ষতিকর। এর ফলে অম্বল, হাই কোলেস্টেরল এবং দীর্ঘমেয়াদে ক্যান্সারের ঝুঁকি বাড়ে।\n\nভুক ফুডস-এ আমরা কড়া নিয়ম মেনে চলি: আমরা ভাজার জন্য ব্যবহার করা তেল কখনোই দ্বিতীয়বার ব্যবহার করি না। মাছ বা মাংস ভাজার তেল একবার ব্যবহারের পরেই ফেলে দেওয়া হয়। আমাদের রোজকার রান্নার জন্য আমরা টাটকা কাচ্চি ঘানি সর্ষের তেল বা সানফ্লাওয়ার অয়েল ব্যবহার করি। এর ফলে খাবার থাকে তাজা, সহজপাচ্য এবং পুষ্টিকর - ঠিক যেমনটা আপনি বাড়িতে আশা করেন।',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1615485925763-867862f80a3a?q=80&w=1000', 
    readTime: '3 min'
  },
  {
    id: '2',
    title: 'The Secret Spice Mix of Agarpara',
    titleBn: 'আগরপাড়ার স্পেশাল মশলার গোপন রহস্য',
    excerpt: 'We don\'t buy packets. We buy raw spices from Burrabazar and grind them. Here is why it matters.',
    excerptBn: 'আমরা প্যাকেট মশলা কিনি না। আমরা বড়বাজার থেকে কাঁচা মশলা কিনে ভাঙাই। কেন এটা জরুরি?',
    content: 'Have you ever wondered why homemade food tastes different from packet masalas? Most commercial spice powders contain fillers, artificial colors, and sometimes even sawdust to increase weight. This not only ruins the taste but is also hazardous to health.\n\nWe take a different approach. Every week, our team visits the wholesale spice market in Burrabazar to handpick whole spices like cumin, coriander, cardamom, and cinnamon. These are then sun-dried and ground in our own kitchen in Agarpara. This process retains the essential oils and aroma of the spices, giving our dishes that distinct, authentic Bengali flavor that our customers love.',
    contentBn: 'কখনও ভেবেছেন কেন বাড়ির খাবারের স্বাদ কেনা মশলার চেয়ে আলাদা হয়? বেশিরভাগ বাণিজ্যিক গুঁড়ো মশলায় ফিলার, কৃত্রিম রং এবং কখনও কখনও ওজনের জন্য কাঠের গুঁড়ো মেশানো থাকে। এতে শুধু স্বাদই নষ্ট হয় না, স্বাস্থ্যেরও ক্ষতি হয়।\n\nআমরা সম্পূর্ণ অন্য পথে হাঁটি। প্রতি সপ্তাহে আমাদের টিম বড়বাজারের পাইকারি মশলা বাজারে গিয়ে জিরে, ধনে, এলাচ এবং দারুচিনির মতো গোটা মশলা বেছে আনে। এগুলো রোদে শুকিয়ে আগরপাড়ায় আমাদের নিজস্ব কিচেনে ভাঙানো হয়। এই পদ্ধতিতে মশলার এসেনশিয়াল অয়েল এবং সুগন্ধ বজায় থাকে, যা আমাদের রান্নায় সেই খাঁটি বাঙালি স্বাদ এনে দেয় যা আমাদের গ্রাহকরা এত পছন্দ করেন।',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000',
    readTime: '2 min'
  },
  {
    id: '3',
    title: '5 Tips to Pack a Healthy Tiffin',
    titleBn: 'স্বাস্থ্যকর টিফিন প্যাক করার ৫টি টিপস',
    excerpt: 'Even if you don\'t subscribe to us, follow these rules to keep your lunch fresh till 2 PM.',
    excerptBn: 'আমাদের সাবস্ক্রিপশন না নিলেও, দুপুর ২টো পর্যন্ত খাবার তাজা রাখতে এই নিয়মগুলো মেনে চলুন।',
    content: 'Packing lunch for office or college requires care to ensure the food stays fresh and safe to eat after 4-5 hours. Here are 5 tips from our kitchen experts:\n\n1. **Cool Before Packing:** Never pack steaming hot food immediately. Let it cool down to room temperature to prevent condensation, which can make rotis soggy and spoil vegetables.\n2. **Use Stainless Steel:** Plastic containers, even if labeled "microwave safe", can leach chemicals into hot food. Switch to stainless steel or glass containers.\n3. **Separate Wet and Dry:** Keep curries and dry items in separate compartments to avoid mixing flavors and textures.\n4. **Add a Napkin:** Place a small cloth napkin or tissue over rotis to absorb excess moisture.\n5. **Hygiene is Key:** Ensure your tiffin box is washed with hot water daily to prevent bacterial growth.',
    contentBn: 'অফিস বা কলেজের জন্য লাঞ্চ প্যাক করার সময় সতর্ক থাকা দরকার যাতে ৪-৫ ঘণ্টা পরেও খাবার টাটকা এবং নিরাপদ থাকে। আমাদের কিচেন এক্সপার্টদের ৫টি টিপস:\n\n১. **ঠান্ডা করে প্যাক করুন:** ধোঁয়া ওঠা গরম খাবার সাথে সাথে প্যাক করবেন না। ঘরের তাপমাত্রায় আসা পর্যন্ত অপেক্ষা করুন, নাহলে বাষ্প জমে রুটি ভিজে যাবে এবং সবজি নষ্ট হতে পারে।\n২. **স্টেইনলেস স্টিল ব্যবহার করুন:** প্লাস্টিকের টিফিন বক্স, এমনকি "মাইক্রোওয়েভ সেফ" হলেও, গরম খাবারের সাথে রাসায়নিক বিক্রিয়া করতে পারে। স্টিল বা কাঁচের পাত্র ব্যবহার করুন।\n৩. **শুকনো ও ঝোল আলাদা রাখুন:** তরকারি এবং শুকনো খাবার আলাদা বক্সে রাখুন যাতে স্বাদ ও টেক্সচার নষ্ট না হয়।\n৪. **ন্যাপকিন ব্যবহার করুন:** রুটির ওপর একটা ছোট কাপড়ের ন্যাপকিন বা টিস্যু রাখুন যাতে অতিরিক্ত আর্দ্রতা শুষে নিতে পারে।\n৫. **পরিচ্ছন্নতা জরুরি:** ব্যাকটেরিয়ার বৃদ্ধি রুখতে রোজ গরম জল দিয়ে টিফিন বক্স ধুয়ে নিন।',
    date: 'Sep 15, 2024',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070',
    readTime: '4 min'
  },
  {
    id: '4',
    title: 'The Sunday Mutton Legacy',
    titleBn: 'রবিবারের মটন: বাঙালির আবেগ',
    excerpt: 'Sunday afternoon, a nap, and Mutton Curry. Why this tradition defines a Bengali household.',
    excerptBn: 'রবিবার দুপুর, ভাত ঘুম, আর মটন কারি। কেন এই ঐতিহ্য প্রতিটি বাঙালি পরিবারকে সংজ্ঞায়িত করে।',
    content: 'For a Bengali, Sunday is not just a holiday; it is an emotion centered around "Lal Mutton er Jhol" (Red Mutton Curry) and Rice. The aroma of slow-cooked meat with big chunks of potato wafting through the house marks the peak of the weekend.\n\nAt Bhuk Foods, we respect this tradition. Every Sunday, our kitchen transforms. We procure the freshest Rewaji Khasi (Goat Meat) from the local market. The meat is marinated overnight with raw papaya, yogurt, and our special spice mix to ensure it melts in your mouth. We believe that no matter how busy life gets, you should never miss out on your Sunday Mutton bliss.',
    contentBn: 'বাঙালির কাছে রবিবার মানে শুধু ছুটি নয়, এটি একটি আবেগ যার কেন্দ্রবিন্দুতে থাকে "লাল মটনের ঝোল" আর ভাত। ধীর আঁচে রান্না করা মাংস আর বড় আলুর সুগন্ধ যখন বাড়ি জুড়ে ছড়িয়ে পড়ে, তখনই সপ্তাহান্তের সার্থকতা।\n\nভুক ফুডস-এ আমরা এই ঐতিহ্যকে শ্রদ্ধা করি। প্রতি রবিবার আমাদের কিচেন বদলে যায়। আমরা বাজার থেকে সেরা রেওয়াজি খাসির মাংস আনি। কাঁচা পেঁপে, টক দই এবং আমাদের স্পেশাল মশলা দিয়ে মাংস সারারাত ম্যারিনেট করা হয় যাতে তা মুখে দিলেই গলে যায়। আমরা বিশ্বাস করি, জীবন যত ব্যস্তই হোক না কেন, রবিবারের মটন থেকে আপনি যেন বঞ্চিত না হন।',
    date: 'Nov 05, 2024',
    image: 'https://images.unsplash.com/photo-1574653853027-5386a527c17f?q=80&w=1000',
    readTime: '3 min'
  },
  {
    id: '5',
    title: 'Winter Pithe Puli: A Sweet Symphony',
    titleBn: 'শীতের পিঠে পুলি: মিষ্টি সুর',
    excerpt: 'As the temperature drops, the craving for Nolen Gur rises. Celebrating the winter harvest.',
    excerptBn: 'তাপমাত্রা কমার সাথে সাথে নলেন গুড়ের চাহিদা বাড়ে। শীতের নবান্ন উৎসবের উদযাপন।',
    content: 'Winter in Bengal is incomplete without Pithe Puli. Made from rice flour, coconut, milk, and the star ingredient—Nolen Gur (Date Palm Jaggery)—these sweets are a labor of love.\n\nFrom Patishapta to Gokul Pithe, these delicacies are traditionally made during Poush Sankranti to celebrate the harvest. While modern life makes it hard to spend hours in the kitchen making them, Bhuk Foods brings these seasonal treats to your meal box during winter months. We source authentic Nolen Gur from the villages to ensure the flavor is uncompromised.',
    contentBn: 'পিঠে পুলি ছাড়া বাংলায় শীত অসম্পূর্ণ। চালের গুঁড়ো, নারকেল, দুধ এবং প্রধান উপকরণ—নলেন গুড় দিয়ে তৈরি এই মিষ্টিগুলো ভালোবাসার প্রতীক।\n\nপাটিসাপটা থেকে গোকুল পিঠে—পৌষ সংক্রান্তিতে নবান্ন উদযাপনের জন্য এই পদগুলো তৈরি হয়। আধুনিক জীবনে রান্নাঘরে ঘণ্টার পর ঘণ্টা সময় দেওয়া কঠিন হলেও, ভুক ফুডস শীতের মাসগুলোতে এই মরশুমি মিষ্টিগুলো আপনার মিল বক্সে পৌঁছে দেয়। খাঁটি স্বাদ বজায় রাখতে আমরা গ্রাম থেকে আসল নলেন গুড় সংগ্রহ করি।',
    date: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1605333396827-2c96937b243f?q=80&w=1000',
    readTime: '2 min'
  },
  {
    id: '6',
    title: 'Why We Don\'t Use Baking Soda',
    titleBn: 'কেন আমরা খাবারে সোডা দিই না?',
    excerpt: 'Soda makes cooking faster but digestion harder. We choose health over shortcuts.',
    excerptBn: 'সোডা রান্না দ্রুত করে কিন্তু হজম কঠিন করে। আমরা শর্টকাটের চেয়ে স্বাস্থ্যকে বেছে নিই।',
    content: 'Many commercial kitchens use Baking Soda (Sodium Bicarbonate) to cook pulses (dal) and vegetables faster or to make them look greener. While this saves time and gas, it destroys essential vitamins (especially Vitamin B and C) and can wreak havoc on your digestion, causing bloating and acidity.\n\nAt Bhuk Foods, we have a strict "No Soda" policy. We soak our pulses overnight and slow-cook them to ensure they are soft and digestible naturally. This might take longer and cost us more in fuel, but it ensures that the food you eat acts as medicine for your body, not a burden.',
    contentBn: 'অনেক বাণিজ্যিক রান্নাঘরে ডাল এবং সবজি দ্রুত সেদ্ধ করতে বা সবুজ দেখাতে বেকিং সোডা ব্যবহার করা হয়। এতে সময় এবং গ্যাস বাঁচলেও, এটি প্রয়োজনীয় ভিটামিন (বিশেষ করে ভিটামিন বি এবং সি) নষ্ট করে এবং হজমের বারোটা বাজিয়ে দেয়, যার ফলে গ্যাস এবং অম্বল হয়।\n\nভুক ফুডস-এ আমাদের কড়া "নো সোডা" নীতি আছে। আমরা ডাল সারারাত ভিজিয়ে রাখি এবং ধীর আঁচে রান্না করি যাতে তা প্রাকৃতিকভাবে নরম এবং সহজপাচ্য হয়। এতে হয়তো সময় বেশি লাগে এবং গ্যাসের খরচ বাড়ে, কিন্তু এটি নিশ্চিত করে যে খাবারটি আপনার শরীরের জন্য ওষুধের মতো কাজ করবে, বোঝা হবে না।',
    date: 'Aug 20, 2024',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',
    readTime: '3 min'
  }
];

export const TRANSLATIONS = {
  en: {
    nav_home: 'Home',
    nav_plans: 'Pricing',
    nav_calc: 'Savings Calculator',
    nav_resources: 'Free Guides',
    nav_stories: 'Stories & Gallery',
    nav_policies: 'Policies',
    nav_jobs: 'Jobs',
    hero_headline: 'India\'s First Kitchen Substitution Service.',
    hero_subhead: 'Delete your grocery apps. Sell your stove. We aren\'t just a tiffin service; we are your complete kitchen replacement in Agarpara, Sodepur & Belgharia.',
    hero_cta: 'Start Your Subscription',
    hero_pain: 'Grocery shopping, chopping, cooking, cleaning... it never ends.',
    hero_gain: 'Reclaim 40+ hours/month. We cook exactly like home, so you don\'t have to.',
    calc_title: 'Household Budget Calculator',
    calc_desc: 'See how much you really spend on food vs. a Bhuk subscription.',
    market_title: 'Kolkata Market Watch',
    market_subtitle: 'Kitchen substitution means wholesale efficiency. We pass the savings to you.',
    plans_title: 'Pricing',
    trust_fssai: 'FSSAI Registered Kitchen',
    trust_hygiene: '100% Hygiene SOPs',
    trust_local: 'Local Agarpara Kitchen',
    footer_contact: 'Contact Us',
    footer_copy: '© 2024 Bhuk Foods. All rights reserved.',
    label_household: 'Household Size',
    label_grocery: 'Monthly Grocery Bill (₹)',
    label_eating_out: 'Weekly Eating Out (₹)',
    label_cooking_time: 'Cooking Hours/Week',
    result_savings: 'Potential Monthly Savings',
    admin_title: 'Bhuk Admin',
    admin_login: 'Login to Manage',
    faq_title: 'Frequently Asked Questions',
    testimonials_title: 'Life After Quitting the Kitchen',
    cta_form: 'Fill Subscription Form',
    resources_title: 'Free Food & Market Guides',
    resources_subtitle: 'Download our exclusive guides to save money on groceries and eat healthier. Join 1000+ locals.',
    resources_cta: 'Download PDF',
    stories_title: 'Stories & Gallery',
    stories_subtitle: 'Behind the scenes, cooking tips, and stories from our kitchen to your table.',
    filter_all: 'All',
    filter_photos: 'Photos',
    filter_videos: 'Videos',
    filter_blogs: 'Blogs',
    read_more: 'Read More',
    watch_video: 'Watch Video',
    pain_title: 'Why You Need a Kitchen Substitution',
    pain_subtitle: 'Stop acting like a kitchen manager. Let us handle the groceries, cooking, and cleaning.',
    pain_problem: 'The Struggle',
    pain_solution: 'The Solution',
    policy_terms: 'Terms & Conditions',
    policy_refund: 'Return & Refund Policy',
    policy_privacy: 'Privacy Policy',
    comp_title: 'Monthly Food Cost & Lifestyle Comparison',
    comp_subtitle: 'Why smart families in Agarpara and surroundings are switching to Bhuk Foods.',
    col_bhuk: 'Bhuk Foods',
    col_street: 'Street Food',
    col_apps: 'Delivery Apps',
    col_self: 'Self Cooking',
    col_maid: 'Maid / Cook',
    tagline: 'Stop cooking, Enjoy Living',
    recipes_title: 'Famous Recipes & Secrets',
    recipes_subtitle: 'Learn how to make legendary dishes from our chefs.',
    prep_time: 'Prep Time',
    servings: 'Servings',
    ingredients: 'Ingredients',
    instructions: 'Instructions'
  },
  bn: {
    nav_home: 'হোম',
    nav_plans: 'মূল্য তালিকা',
    nav_calc: 'সেভিংস ক্যাল্কুলেটর',
    nav_resources: 'ফ্রি গাইড',
    nav_stories: 'গল্প ও গ্যালারি',
    nav_policies: 'পলিসি',
    nav_jobs: 'চাকরি',
    hero_headline: 'ভারতের প্রথম কিচেন সাবস্টিটিউশন সার্ভিস।',
    hero_subhead: 'বাজার করার অ্যাপ ডিলিট করুন। রান্নার ঝামেলা ভুলে যান। আমরা শুধু টিফিন দিই না, আমরা আপনার রান্নাঘরের সম্পূর্ণ বিকল্প।',
    hero_cta: 'সাবস্ক্রিপশন শুরু করুন',
    hero_pain: 'বাজার করা, কুটনো, রান্না, বাসন মাজা... এই ঝামেলার শেষ নেই?',
    hero_gain: 'মাসে ৪০+ ঘণ্টা সময় বাঁচান। আমরা ঠিক বাড়ির মতোই রাঁধি, তাই আপনাকে রাঁধতে হবে না।',
    calc_title: 'খরচের হিসাব করুন',
    calc_desc: 'আপনার বর্তমান খরচের সাথে ভুক সাবস্ক্রিপশনের তুলনা দেখুন।',
    market_title: 'কলকাতার বাজার দর',
    market_subtitle: 'কিচেন সাবস্টিটিউশন মানেই পাইকারি সাশ্রয়।',
    plans_title: 'মূল্য তালিকা',
    trust_fssai: 'FSSAI রেজিস্টার্ড কিচেন',
    trust_hygiene: '১০০% হাইজিন মেনে রান্না',
    trust_local: 'আগরপাড়ার নিজস্ব কিচেন',
    footer_contact: 'যোগাযোগ',
    footer_copy: '© ২০২৪ ভুক ফুডস। সর্বস্বত্ব সংরক্ষিত।',
    label_household: 'পরিবার সদস্য সংখ্যা',
    label_grocery: 'মাসিক বাজার খরচ (₹)',
    label_eating_out: 'সপ্তাহে রেস্তোরাঁ খরচ (₹)',
    label_cooking_time: 'সপ্তাহে রান্নার সময় (ঘণ্টা)',
    result_savings: 'সম্ভাব্য মাসিক সাশ্রয়',
    admin_title: 'ভুক অ্যাডমিন',
    admin_login: 'লগইন করুন',
    faq_title: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
    testimonials_title: 'রান্নাঘর ছাড়ার পর জীবন',
    cta_form: 'সাবস্ক্রিপশন ফর্ম পূরণ করুন',
    resources_title: 'ফ্রি ফুড এবং মার্কেট গাইড',
    resources_subtitle: 'বাজার খরচ বাঁচাতে এবং স্বাস্থ্যকর খেতে আমাদের এক্সক্লুসিভ গাইড ডাউনলোড করুন।',
    resources_cta: 'ডাউনলোড PDF',
    stories_title: 'গল্প ও গ্যালারি',
    stories_subtitle: 'রান্নাঘরের পেছনের দৃশ্য, রান্নার টিপস এবং আমাদের কিছু কথা।',
    filter_all: 'সব',
    filter_photos: 'ছবি',
    filter_videos: 'ভিডিও',
    filter_blogs: 'ব্লগ',
    read_more: 'আরও পড়ুন',
    watch_video: 'ভিডিও দেখুন',
    pain_title: 'কেন আপনার কিচেন সাবস্টিটিউশন প্রয়োজন?',
    pain_subtitle: 'রান্নাঘরের ম্যানেজার হওয়া বন্ধ করুন। বাজার, রান্না এবং পরিষ্কারের দায়িত্ব আমাদের দিন।',
    pain_problem: 'সমস্যা',
    pain_solution: 'সমাধান',
    policy_terms: 'শর্তাবলী',
    policy_refund: 'রিফান্ড পলিসি',
    policy_privacy: 'গোপনীয়তা নীতি',
    comp_title: 'খরচ এবং জীবনযাত্রার তুলনা',
    comp_subtitle: 'কেন আগরপাড়ার এবং আশেপাশের স্মার্ট পরিবারগুলো ভুক ফুডস বেছে নিচ্ছে?',
    col_bhuk: 'ভুক ফুডস',
    col_street: 'রাস্তার খাবার',
    col_apps: 'ডেলিভারি অ্যাপ',
    col_self: 'নিজের রান্না',
    col_maid: 'কাজের মাসি',
    tagline: 'রান্না থামান, জীবন উপভোগ করুন',
    recipes_title: 'বিখ্যাত রেসিপি ও সিক্রেট',
    recipes_subtitle: 'আমাদের শেফদের থেকে শিখুন লিজেন্ডারি সব রান্নার কায়দা।',
    prep_time: 'সময় লাগবে',
    servings: 'পরিবেশন',
    ingredients: 'উপকরণ',
    instructions: 'প্রণালী'
  }
};
