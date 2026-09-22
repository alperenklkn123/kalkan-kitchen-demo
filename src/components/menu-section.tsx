import Image from "next/image";
import type { AddToCart, Product, MenuCategory } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { Icon } from "./icons";

export function MenuSection({
  products,
  category,
  onAddToCart,
}: {
  products: Product[];
  category: MenuCategory;
  onAddToCart: AddToCart;
}) {
  return (
    <section id="menu" className="menu-section section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CANIN NE ÇEKİYOR?</p>
          <h2>
            {category.name}
            <br />
            <em>Favorini keşfet.</em>
          </h2>
        </div>
        <p>{category.description}</p>
      </div>
      <div className="menu-grid">
        {products.map((product, index) => (
          <article key={product.id} className="menu-card">
            <div
              className="menu-image"
              style={{
                background: `radial-gradient(ellipse at 50% 65%, ${product.theme.glow}45, #e8e6da)`,
              }}
            >
              <span className="menu-index">
                0{index + 1} / {product.category}
              </span>
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={500}
                height={500}
                sizes="(max-width: 540px) 90vw, (max-width: 900px) 45vw, 23vw"
                loading="lazy"
              />
            </div>
            <div className="menu-card-title">
              <h3>{product.name}</h3>
              <span>{formatPrice(product.price)}</span>
            </div>
            <p>{product.detail}</p>
            <div className="menu-card-bottom">
              <details>
                <summary>İçindekiler</summary>
                <p>
                  {product.ingredients.join(", ")}
                  <br />
                  <strong>Alerjenler:</strong> {product.allergens}
                  <br />
                  Demo içeriktir; gerçek reçete ile doğrulayın.
                </p>
              </details>
              <button
                className="menu-add"
                onClick={(e) => onAddToCart(product, e.currentTarget)}
                aria-label={`${product.name} sepete ekle`}
              >
                <Icon name="plus" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
