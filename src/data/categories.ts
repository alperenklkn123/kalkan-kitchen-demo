import type { MenuCategory } from "@/types/product";

export const categories: MenuCategory[] = [
  {
    "id": "coffee",
    "name": "Coffee",
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/filter-coffee.svg`,
    "description": "Kahve molanı SHAPE'te ver."
  },
  {
    "id": "shakes",
    "name": "Protein Shakes",
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/protein-shake.svg`,
    "description": "Gerçek meyveler, whey, buz ve su ile hazırlanan protein shake seçenekleri."
  },
  {
    "id": "energy",
    "name": "Energy / Pre-Workout",
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/pre-workout.svg`,
    "description": "Antrenman öncesi içecek seçenekleri."
  },
  {
    "id": "water",
    "name": "Water",
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/small-water.svg`,
    "description": "Antrenman boyunca su molası."
  }
];
