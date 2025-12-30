

export type Language = 'en' | 'bn';

export interface Plan {
  id: string;
  type: 'subscription' | 'onetime';
  name: string;
  nameBn: string;
  price: number;
  perMeal: number;
  features: string[];
  featuresBn: string[];
  bestFor: string;
  bestForBn: string;
  image: string;
}

export interface MarketItem {
  id: string;
  name: string;
  nameBn: string;
  price: number;
  unit: string;
  unitBn: string;
  trend: 'up' | 'down' | 'stable';
}

export interface FAQItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  contentBn: string;
  source: 'Google' | 'Justdial';
  rating: number;
}

export interface ResourceItem {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleBn: string;
  excerpt: string;
  excerptBn: string;
  content: string;
  contentBn: string;
  date: string;
  image: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  type: 'photo' | 'video';
  src: string;
  link?: string;
  caption: string;
  captionBn: string;
  category: 'Kitchen' | 'Food' | 'Team' | 'Customer';
}

export interface PainPointItem {
  id: string;
  emoji: string;
  title: string;
  titleBn: string;
  problem: string;
  problemBn: string;
  solution: string;
  solutionBn: string;
}

export interface ComparisonRow {
  parameter: string;
  parameterBn: string;
  bhuk: string;
  bhukBn: string;
  street: string;
  streetBn: string;
  apps: string;
  appsBn: string;
  self: string;
  selfBn: string;
  maid: string;
  maidBn: string;
}

export interface Recipe {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  prepTime: string;
  servings: string;
  ingredients: string[];
  ingredientsBn: string[];
  instructions: string[];
  instructionsBn: string[];
  tags: string[];
}

export interface MenuCategory {
  id: string;
  title: string;
  titleBn: string;
  items: string;
  itemsBn: string;
  icon: string;
}

export interface Addon {
  id: string;
  name: string;
  nameBn: string;
  price: number;
  unit: string;
  unitBn: string;
}
