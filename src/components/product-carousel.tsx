"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { AddToCart, Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { BrandMark, Icon } from "./icons";

export interface ProductCarouselProps {
  products: Product[];
  onAddToCart: AddToCart;
  onProductChange?: (product: Product) => void;
  motionEnabled?: boolean;
}

export function ProductCarousel({
  products,
  onAddToCart,
  onProductChange,
  motionEnabled = true,
}: ProductCarouselProps) {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [direction, setDirection] = useState(1);
  const origin = useRef<{ x: number; y: number; id: number } | null>(null);
  const product = products[active] ?? products[0];
  if (!product)
    return <section className="empty-catalog">Menü yakında burada.</section>;

  function select(index: number) {
    const next = (index + products.length) % products.length;
    setDirection(index >= active ? 1 : -1);
    setActive(next);
    onProductChange?.(products[next]);
  }
  function start(e: PointerEvent<HTMLDivElement>) {
    if (!e.isPrimary || e.button !== 0) return;
    origin.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: PointerEvent<HTMLDivElement>) {
    if (!origin.current || e.pointerId !== origin.current.id) return;
    setDrag(Math.max(-130, Math.min(130, e.clientX - origin.current.x)));
  }
  function finish(e: PointerEvent<HTMLDivElement>) {
    if (origin.current) {
      const dx = e.clientX - origin.current.x;
      const dy = e.clientY - origin.current.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.25)
        select(active + (dx < 0 ? 1 : -1));
    }
    origin.current = null;
    setDrag(0);
  }

  return (
    <section
      id="featured-carousel"
      className={`showcase ${motionEnabled ? "" : "motion-paused"}`}
      aria-label="Öne çıkan lezzetler"
      aria-roledescription="ürün karuseli"
      style={{ "--direction": direction } as CSSProperties}
    >
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="little-star">✳</span> KALKAN’DAN, İŞTAHLA.
          </p>
          <div
            key={product.id}
            className="copy-transition"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="product-kicker">
              0{active + 1} / {product.category}
            </p>
            <h1>
              {product.headline[0]}
              <br />
              <em>{product.headline[1]}</em>
            </h1>
            <p className="hero-description">{product.description}</p>
            <div className="product-price">
              <h2>{product.name}</h2>
              <span>{formatPrice(product.price)}</span>
            </div>
            <div className="hero-actions">
              <button
                className="add-button"
                onClick={(e) => onAddToCart(product, e.currentTarget)}
              >
                Sepete Ekle <Icon name="plus" />
              </button>
              <span className="portion">{product.detail}</span>
            </div>
            <div className="ingredients">
              <Icon name="leaf" />
              {product.ingredients.join(" · ")}
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <span
            key={product.sceneWord}
            className="scene-word"
            aria-hidden="true"
          >
            {product.sceneWord}
          </span>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div
            className="food-stage"
            tabIndex={0}
            aria-label={`${product.name}. Yemek değiştirmek için sola veya sağa sürükleyin ya da yön tuşlarını kullanın.`}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                select(active + (e.key === "ArrowRight" ? 1 : -1));
              }
              if (e.key === "Home") {
                e.preventDefault();
                select(0);
              }
              if (e.key === "End") {
                e.preventDefault();
                select(products.length - 1);
              }
            }}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={finish}
            onPointerCancel={() => {
              origin.current = null;
              setDrag(0);
            }}
            onLostPointerCapture={() => {
              origin.current = null;
              setDrag(0);
            }}
          >
            <div
              className="drag-plane"
              style={{
                transform: `translateX(${drag * 0.5}px) rotateY(${drag * 0.05}deg) rotateZ(${drag * 0.025}deg)`,
                transition: drag ? "none" : undefined,
              }}
            >
              <div
                key={product.id}
                className={`food-entrance food-${product.id}`}
              >
                <div className="food-float">
                  <Image
                    className="hero-food"
                    src={product.image}
                    alt={product.imageAlt}
                    width={1000}
                    height={1000}
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 55vw, 650px"
                    loading="eager"
                    fetchPriority={active === 0 ? "high" : "auto"}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="chef-seal" aria-hidden="true">
            <span>İYİ MALZEME</span>
            <BrandMark />
            <span>İYİ YEMEK</span>
          </div>
          <p key={product.note} className="food-note">
            {product.note}
            <span aria-hidden="true">↗</span>
          </p>
          <div className="stage-controls">
            <span className="drag-hint">
              <span aria-hidden="true">⟷</span> Lezzeti keşfetmek için kaydır
            </span>
            <div className="flex items-center gap-3">
              <button
                className="circle-button previous"
                onClick={() => select(active - 1)}
                aria-label="Önceki yemek"
              >
                <Icon name="arrow" />
              </button>
              <span className="slide-count">
                0{active + 1}
                <span> / 0{products.length}</span>
              </span>
              <button
                className="circle-button"
                onClick={() => select(active + 1)}
                aria-label="Sonraki yemek"
              >
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
