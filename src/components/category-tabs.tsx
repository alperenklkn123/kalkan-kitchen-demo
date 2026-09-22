import Image from "next/image";
import type { MenuCategory, Product } from "@/types/product";
import { Icon } from "./icons";

export function CategoryTabs({
  categories,
  products,
  activeId,
  onSelect,
}: {
  categories: MenuCategory[];
  products: Product[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="product-tabs category-tabs" aria-label="Menü kategorileri">
      {categories.map((category, index) => {
        const count = products.filter(
          (product) => product.categoryId === category.id,
        ).length;
        return (
          <button
            type="button"
            key={category.id}
            className={`product-tab ${category.id === activeId ? "is-active" : ""}`}
            aria-pressed={category.id === activeId}
            aria-controls="featured-carousel"
            onClick={() => onSelect(category.id)}
          >
            <span className="tab-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Image
              src={category.image}
              alt=""
              width={90}
              height={90}
              sizes="80px"
            />
            <span className="tab-copy">
              <span>{category.name}</span>
              <small>{count} ürün · Keşfet</small>
            </span>
            <Icon name="arrow" />
          </button>
        );
      })}
    </nav>
  );
}
