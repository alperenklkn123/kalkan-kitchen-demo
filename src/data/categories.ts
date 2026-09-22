import type { MenuCategory } from "@/types/product";

export const categories: MenuCategory[] = [
  {
    id: "burgers",
    name: "Burgerler",
    image: "/food/burger.webp",
    description: "Smash ya da çıtır tavuk. Favori burgerini keşfet.",
  },
  {
    id: "asia",
    name: "Asia Kitchen",
    image: "/food/ramen.webp",
    description: "Sıcak bir kase ramen, wok'tan taze noodle.",
  },
  {
    id: "pizza",
    name: "Pizza",
    image: "/food/pizza.webp",
    description: "Napolitan hamur, kabarık kenarlar, sevdiğin malzemeler.",
  },
  {
    id: "drinks",
    name: "İçecekler",
    image: "/food/lemonade.webp",
    description: "Yemeğin yanına serin ve ferah bir eşlikçi.",
  },
];
