import type { MenuCategory } from "@/types/product";

export const categories: MenuCategory[] = [
  {
    id: "burgers",
    name: "Burgerler",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/food/burger.webp`,
    description: "Smash ya da çıtır tavuk. Favori burgerini keşfet.",
  },
  {
    id: "asia",
    name: "Asia Kitchen",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/food/ramen.webp`,
    description: "Sıcak bir kase ramen, wok'tan taze noodle.",
  },
  {
    id: "pizza",
    name: "Pizza",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/food/pizza.webp`,
    description: "Napolitan hamur, kabarık kenarlar, sevdiğin malzemeler.",
  },
  {
    id: "drinks",
    name: "İçecekler",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/food/lemonade.webp`,
    description: "Yemeğin yanına serin ve ferah bir eşlikçi.",
  },
];
