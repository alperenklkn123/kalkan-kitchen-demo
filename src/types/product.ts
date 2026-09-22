export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  sceneWord: string;
  headline: [string, string];
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  note: string;
  detail: string;
  ingredients: string[];
  allergens: string;
  theme: { base: string; glow: string; accent: string };
}

export type AddToCart = (product: Product, source?: HTMLElement) => void;

export interface MenuCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}
