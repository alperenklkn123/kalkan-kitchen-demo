"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { productsInCategory } from "@/lib/catalog";
import { CategoryTabs } from "./category-tabs";
import {
  CART_KEY,
  MAX_QUANTITY,
  changeQuantity,
  normalizeCart,
  type CartLine,
} from "@/lib/cart";
import type { Product } from "@/types/product";
import { ProductCarousel } from "./product-carousel";
import { CartDrawer } from "./cart-drawer";
import { MenuSection } from "./menu-section";
import { BrandMark, Icon } from "./icons";

export function RestaurantDemo() {
  const [categoryId, setCategoryId] = useState("pizza");
  const category = categories.find((item) => item.id === categoryId)!;
  const categoryProducts = productsInCategory(products, categoryId);
  const [active, setActive] = useState(products[0]);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [motion, setMotion] = useState(true);
  const [toast, setToast] = useState("");
  const cartButton = useRef<HTMLButtonElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  function selectCategory(id: string) {
    const first = productsInCategory(products, id)[0];
    if (!first || id === categoryId) return;
    setCategoryId(id);
    setActive(first);
    if (window.matchMedia("(max-width: 760px)").matches) {
      requestAnimationFrame(() => {
        document.getElementById("main")?.scrollIntoView({
          behavior:
            motion &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "smooth"
              : "instant",
          block: "start",
        });
      });
    }
  }
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      setCart(
        normalizeCart(
          saved ? JSON.parse(saved) : [],
          products.map((p) => p.id),
        ),
      );
    } catch {}
    setReady(true);
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
      } catch {}
    }
  }, [cart, ready]);
  function add(product: Product, source?: HTMLElement) {
    const atLimit =
      (cart.find((l) => l.id === product.id)?.quantity ?? 0) >= MAX_QUANTITY;
    setCart((lines) => changeQuantity(lines, product.id, 1));
    setToast(
      atLimit
        ? `Bir üründen en fazla ${MAX_QUANTITY} adet ekleyebilirsin.`
        : `${product.name} sepetine eklendi.`,
    );
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
    if (
      !atLimit &&
      source &&
      cartButton.current &&
      motion &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const start = source.getBoundingClientRect(),
        end = cartButton.current.getBoundingClientRect();
      const dot = document.createElement("img");
      dot.src = product.image;
      dot.alt = "";
      dot.className = "kalkan-cart-flight";
      dot.style.left = `${start.left + start.width / 2 - 30}px`;
      dot.style.top = `${start.top - 35}px`;
      document.body.appendChild(dot);
      const animation = dot.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          {
            transform: `translate(${end.left - start.left - start.width / 2 + 25}px,${end.top - start.top + 35}px) scale(.2)`,
            opacity: 0.3,
          },
        ],
        { duration: 650, easing: "cubic-bezier(.3,.1,.5,1)" },
      );
      animation.onfinish = () => dot.remove();
      animation.oncancel = () => dot.remove();
    }
  }
  return (
    <div className={`restaurant ${motion ? "" : "motion-paused"}`}>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <div
        className="dark-experience"
        style={{ "--accent": active.theme.accent } as CSSProperties}
      >
        <div className="scene-backgrounds" aria-hidden="true">
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                opacity: active.id === p.id ? 1 : 0,
                background: `radial-gradient(ellipse at 73% 48%, ${p.theme.glow}90 0%, ${p.theme.base} 65%)`,
              }}
            />
          ))}
        </div>
        <header className="site-header">
          <a className="brand" href="#" aria-label="Kalkan Kitchen ana sayfa">
            <BrandMark />
            <span>
              KALKAN<small>KITCHEN</small>
            </span>
          </a>
          <nav aria-label="Ana menü">
            <a href="#menu">Menü</a>
            <a href="#hikayemiz">Hikâyemiz</a>
          </nav>
          <div className="header-right">
            <span className="location-label">KALKAN, AKDENİZ RUHU</span>
            <button
              ref={cartButton}
              className="cart-button"
              onClick={() => setOpen(true)}
              aria-label={`Sepetim, ${count} ürün`}
              aria-haspopup="dialog"
            >
              <Icon name="bag" />
              <span>Sepetim</span>
              <b key={count}>{count}</b>
            </button>
          </div>
        </header>
        <main id="main">
          <ProductCarousel
            key={categoryId}
            products={categoryProducts}
            onAddToCart={add}
            onProductChange={setActive}
            motionEnabled={motion}
          />
          <CategoryTabs
            categories={categories}
            products={products}
            activeId={categoryId}
            onSelect={selectCategory}
          />
        </main>
        <div className="experience-footer">
          <span>İYİ YEMEK, GÜZEL BİR GÜNÜN BAŞLANGICI.</span>
          <button onClick={() => setMotion((v) => !v)} aria-pressed={!motion}>
            <Icon name={motion ? "pause" : "play"} width={14} height={14} />
            {motion ? "Hareketi durdur" : "Hareketi başlat"}
          </button>
          <a href="#menu">
            Menüyü keşfet <span>↓</span>
          </a>
        </div>
      </div>
      <MenuSection
        products={categoryProducts}
        category={category}
        onAddToCart={add}
      />
      <section id="hikayemiz" className="story-section section-shell">
        <div className="story-emblem">
          <BrandMark />
          <span>KALKAN KITCHEN</span>
        </div>
        <div>
          <p className="eyebrow">SOFRAMIZDA YERİN VAR.</p>
          <h2>
            Uzaklardan ilham.
            <br />
            <em>İçten gelen lezzet.</em>
          </h2>
          <p>
            Napoli’nin sokağından bir dilim, Japon mutfağından bir kase. Farklı
            yerlerden sevdiğimiz tatları Kalkan’ın rahatlığıyla aynı sofrada
            buluşturuyoruz.
          </p>
          <a className="story-link" href="#menu">
            Sofraya buyur <Icon name="arrow" />
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <a className="brand" href="#">
          <BrandMark />
          <span>
            KALKAN<small>KITCHEN</small>
          </span>
        </a>
        <p>Biraz güneş. Biraz sohbet. Bolca lezzet.</p>
        <small>Konsept menü · Demo deneyimi</small>
      </footer>
      <div
        className={`toast ${toast ? "visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        <Icon name="check" />
        {toast}
      </div>
      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
        lines={cart}
        products={products}
        onChangeQuantity={(id, delta) =>
          setCart((lines) => changeQuantity(lines, id, delta))
        }
      />
    </div>
  );
}
