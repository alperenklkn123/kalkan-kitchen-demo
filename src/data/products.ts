import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    "id": "filter-coffee",
    "name": "Filter Coffee",
    "category": "Coffee",
    "categoryId": "coffee",
    "sceneWord": "COFFEE",
    "headline": [
      "Filter Coffee",
      "Fuel your day."
    ],
    "description": "Kahve molanı SHAPE'te ver.",
    "price": 120,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/filter-coffee.webp`,
    "imageAlt": "Filter Coffee ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#57432b",
      "accent": "#ffda28"
    }
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "category": "Coffee",
    "categoryId": "coffee",
    "sceneWord": "COFFEE",
    "headline": [
      "Espresso",
      "Fuel your day."
    ],
    "description": "Kahve molanı SHAPE'te ver.",
    "price": 90,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/espresso.webp`,
    "imageAlt": "Espresso ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#57432b",
      "accent": "#ffda28"
    }
  },
  {
    "id": "double-espresso",
    "name": "Double Espresso",
    "category": "Coffee",
    "categoryId": "coffee",
    "sceneWord": "COFFEE",
    "headline": [
      "Double Espresso",
      "Fuel your day."
    ],
    "description": "Kahve molanı SHAPE'te ver.",
    "price": 140,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/double-espresso.webp`,
    "imageAlt": "Double Espresso ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#57432b",
      "accent": "#ffda28"
    }
  },
  {
    "id": "americano",
    "name": "Americano",
    "category": "Coffee",
    "categoryId": "coffee",
    "sceneWord": "COFFEE",
    "headline": [
      "Americano",
      "Fuel your day."
    ],
    "description": "Kahve molanı SHAPE'te ver.",
    "price": 150,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/americano.webp`,
    "imageAlt": "Americano ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#57432b",
      "accent": "#ffda28"
    }
  },
  {
    "id": "iced-americano",
    "name": "Iced Americano",
    "category": "Coffee",
    "categoryId": "coffee",
    "sceneWord": "COFFEE",
    "headline": [
      "Iced Americano",
      "Fuel your day."
    ],
    "description": "Kahve molanı SHAPE'te ver.",
    "price": 200,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/iced-americano.webp`,
    "imageAlt": "Iced Americano ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#57432b",
      "accent": "#ffda28"
    }
  },
  {
    "id": "protein-shake",
    "name": "Protein Shake",
    "category": "Protein Shakes",
    "categoryId": "shakes",
    "sceneWord": "PROTEIN",
    "headline": [
      "Protein Shake",
      "Fuel your day."
    ],
    "description": "Gerçek meyveler, whey, buz ve su. Aroma ve ilaveler için ekibimize danış.",
    "price": 350,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/protein-shake.webp`,
    "imageAlt": "Protein Shake ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#75612c",
      "accent": "#ffda28"
    }
  },
  {
    "id": "iced-protein-coffee",
    "name": "Iced Protein Coffee",
    "category": "Protein Shakes",
    "categoryId": "shakes",
    "sceneWord": "PROTEIN",
    "headline": [
      "Iced Protein Coffee",
      "Fuel your day."
    ],
    "description": "Gerçek meyveler, whey, buz ve su ile hazırlanan protein shake seçenekleri.",
    "price": 350,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/iced-protein-coffee.webp`,
    "imageAlt": "Iced Protein Coffee ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#75612c",
      "accent": "#ffda28"
    }
  },
  {
    "id": "isolated-whey",
    "name": "Isolated Pure Whey Shake",
    "category": "Protein Shakes",
    "categoryId": "shakes",
    "sceneWord": "PROTEIN",
    "headline": [
      "Isolated Pure Whey Shake",
      "Fuel your day."
    ],
    "description": "Gerçek meyveler, whey, buz ve su ile hazırlanan protein shake seçenekleri.",
    "price": 400,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/isolated-whey.webp`,
    "imageAlt": "Isolated Pure Whey Shake ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#75612c",
      "accent": "#ffda28"
    }
  },
  {
    "id": "creatine",
    "name": "Creatine (Add-on)",
    "category": "Protein Shakes",
    "categoryId": "shakes",
    "sceneWord": "PROTEIN",
    "headline": [
      "Creatine (Add-on)",
      "Shake'ine ekle."
    ],
    "description": "Protein shake için ek seçenek.",
    "price": 50,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/creatine.webp`,
    "imageAlt": "Creatine (Add-on) ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "Shake ilavesi",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#75612c",
      "accent": "#ffda28"
    }
  },
  {
    "id": "collagen",
    "name": "Collagen (Add-on)",
    "category": "Protein Shakes",
    "categoryId": "shakes",
    "sceneWord": "PROTEIN",
    "headline": [
      "Collagen (Add-on)",
      "Shake'ine ekle."
    ],
    "description": "Protein shake için ek seçenek.",
    "price": 50,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/collagen.webp`,
    "imageAlt": "Collagen (Add-on) ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "Shake ilavesi",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#75612c",
      "accent": "#ffda28"
    }
  },
  {
    "id": "pre-workout",
    "name": "Pre-Workout Shot",
    "category": "Energy / Pre-Workout",
    "categoryId": "energy",
    "sceneWord": "ENERGY",
    "headline": [
      "Pre-Workout Shot",
      "Fuel your day."
    ],
    "description": "Antrenman öncesi içecek seçenekleri.",
    "price": 150,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/pre-workout.webp`,
    "imageAlt": "Pre-Workout Shot ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#174e94",
      "accent": "#ffda28"
    }
  },
  {
    "id": "redbull",
    "name": "Redbull",
    "category": "Energy / Pre-Workout",
    "categoryId": "energy",
    "sceneWord": "ENERGY",
    "headline": [
      "Redbull",
      "Fuel your day."
    ],
    "description": "Antrenman öncesi içecek seçenekleri.",
    "price": 150,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/redbull.webp`,
    "imageAlt": "Redbull ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#174e94",
      "accent": "#ffda28"
    }
  },
  {
    "id": "l-carnitine",
    "name": "L-Carnitine Shot",
    "category": "Energy / Pre-Workout",
    "categoryId": "energy",
    "sceneWord": "ENERGY",
    "headline": [
      "L-Carnitine Shot",
      "Fuel your day."
    ],
    "description": "Antrenman öncesi içecek seçenekleri.",
    "price": 150,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/l-carnitine.webp`,
    "imageAlt": "L-Carnitine Shot ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#174e94",
      "accent": "#ffda28"
    }
  },
  {
    "id": "shape-booster",
    "name": "Shape Special Booster",
    "category": "Energy / Pre-Workout",
    "categoryId": "energy",
    "sceneWord": "ENERGY",
    "headline": [
      "Shape Special Booster",
      "Fuel your day."
    ],
    "description": "Antrenman öncesi içecek seçenekleri.",
    "price": 250,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/shape-booster.webp`,
    "imageAlt": "Shape Special Booster ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#174e94",
      "accent": "#ffda28"
    }
  },
  {
    "id": "small-water",
    "name": "S. Water",
    "category": "Water",
    "categoryId": "water",
    "sceneWord": "HYDRATE",
    "headline": [
      "S. Water",
      "Fuel your day."
    ],
    "description": "Antrenman boyunca su molası.",
    "price": 30,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/small-water.webp`,
    "imageAlt": "S. Water ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#245676",
      "accent": "#ffda28"
    }
  },
  {
    "id": "large-water",
    "name": "L. Water",
    "category": "Water",
    "categoryId": "water",
    "sceneWord": "HYDRATE",
    "headline": [
      "L. Water",
      "Fuel your day."
    ],
    "description": "Antrenman boyunca su molası.",
    "price": 50,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/large-water.webp`,
    "imageAlt": "L. Water ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#245676",
      "accent": "#ffda28"
    }
  },
  {
    "id": "mineral-water",
    "name": "Soda / Mineral Water",
    "category": "Water",
    "categoryId": "water",
    "sceneWord": "HYDRATE",
    "headline": [
      "Soda / Mineral Water",
      "Fuel your day."
    ],
    "description": "Antrenman boyunca su molası.",
    "price": 50,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/mineral-water.webp`,
    "imageAlt": "Soda / Mineral Water ürün görseli",
    "note": "SHAPE TRAINING CLUB · KALKAN",
    "detail": "SHAPE Bar",
    "ingredients": [],
    "allergens": "İçerik ve alerjen bilgisi için ekibimize danışın.",
    "theme": {
      "base": "#071426",
      "glow": "#245676",
      "accent": "#ffda28"
    }
  },
  {
    "id": "banana-protein-bowl",
    "name": "Banana Protein Bowl",
    "category": "Protein Bowls",
    "categoryId": "bowls",
    "sceneWord": "BOWLS",
    "headline": [
      "Banana Protein Bowl",
      "Fuel your recovery."
    ],
    "description": "Muz, Yulaf, Whey protein, Fıstık ezmesi. Önerilen menü ürünü.",
    "price": 0,
    "comingSoon": true,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/banana-protein-bowl.webp`,
    "imageAlt": "Banana Protein Bowl fotoğraf gerçekçiliğinde ürün görseli",
    "note": "SHAPE BAR · COMING SOON",
    "detail": "Yakında · Fiyat belirlenecek",
    "ingredients": [
      "Muz",
      "Yulaf",
      "Whey protein",
      "Fıstık ezmesi"
    ],
    "allergens": "Taslak reçete. Alerjenler servis öncesi doğrulanacaktır.",
    "theme": {
      "base": "#071426",
      "glow": "#647b35",
      "accent": "#ffda28"
    }
  },
  {
    "id": "berry-protein-bowl",
    "name": "Berry Protein Bowl",
    "category": "Protein Bowls",
    "categoryId": "bowls",
    "sceneWord": "BOWLS",
    "headline": [
      "Berry Protein Bowl",
      "Fuel your recovery."
    ],
    "description": "Orman meyveleri, Yoğurt, Whey protein, Granola. Önerilen menü ürünü.",
    "price": 0,
    "comingSoon": true,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/berry-protein-bowl.webp`,
    "imageAlt": "Berry Protein Bowl fotoğraf gerçekçiliğinde ürün görseli",
    "note": "SHAPE BAR · COMING SOON",
    "detail": "Yakında · Fiyat belirlenecek",
    "ingredients": [
      "Orman meyveleri",
      "Yoğurt",
      "Whey protein",
      "Granola"
    ],
    "allergens": "Taslak reçete. Alerjenler servis öncesi doğrulanacaktır.",
    "theme": {
      "base": "#071426",
      "glow": "#647b35",
      "accent": "#ffda28"
    }
  },
  {
    "id": "chocolate-protein-bowl",
    "name": "Chocolate Protein Bowl",
    "category": "Protein Bowls",
    "categoryId": "bowls",
    "sceneWord": "BOWLS",
    "headline": [
      "Chocolate Protein Bowl",
      "Fuel your recovery."
    ],
    "description": "Kakao, Muz, Whey protein, Granola. Önerilen menü ürünü.",
    "price": 0,
    "comingSoon": true,
    "image": `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/bar/chocolate-protein-bowl.webp`,
    "imageAlt": "Chocolate Protein Bowl fotoğraf gerçekçiliğinde ürün görseli",
    "note": "SHAPE BAR · COMING SOON",
    "detail": "Yakında · Fiyat belirlenecek",
    "ingredients": [
      "Kakao",
      "Muz",
      "Whey protein",
      "Granola"
    ],
    "allergens": "Taslak reçete. Alerjenler servis öncesi doğrulanacaktır.",
    "theme": {
      "base": "#071426",
      "glow": "#647b35",
      "accent": "#ffda28"
    }
  }

];
