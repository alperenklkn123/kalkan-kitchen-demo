"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CartLine } from "@/lib/cart";
import { MAX_QUANTITY } from "@/lib/cart";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { Icon } from "./icons";

interface Props {
  open: boolean;
  onClose: () => void;
  lines: CartLine[];
  products: Product[];
  onChangeQuantity: (id: string, delta: number) => void;
}
export function CartDrawer({
  open,
  onClose,
  lines,
  products,
  onChangeQuantity,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        dialog.close();
        document.body.style.overflow = previous;
      };
    } else dialog.close();
  }, [open]);
  const items = lines.flatMap((line) => {
    const product = products.find((p) => p.id === line.id);
    return product ? [{ ...line, product }] : [];
  });
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0,
  );
  return (
    <dialog
      ref={ref}
      className="cart-dialog"
      aria-labelledby="cart-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cart-panel">
        <header className="flex items-center justify-between">
          <div>
            <p className="eyebrow">GÜZEL BİR SEÇİM</p>
            <h2 id="cart-title">Sepetin</h2>
          </div>
          <button
            autoFocus
            className="circle-button"
            onClick={onClose}
            aria-label="Sepeti kapat"
          >
            <Icon name="close" />
          </button>
        </header>
        {items.length ? (
          <>
            <ul className="cart-list">
              {items.map(({ product, quantity }) => (
                <li key={product.id}>
                  <Image src={product.image} alt="" width={96} height={96} />
                  <div className="cart-item-info">
                    <h3>{product.name}</h3>
                    <span>{formatPrice(product.price)}</span>
                    <div className="quantity-controls">
                      <button
                        onClick={() => onChangeQuantity(product.id, -1)}
                        aria-label={`${product.name} adet azalt`}
                      >
                        <Icon name="minus" width={16} />
                      </button>
                      <output aria-label={`${product.name} adedi`}>
                        {quantity}
                      </output>
                      <button
                        disabled={quantity >= MAX_QUANTITY}
                        onClick={() => onChangeQuantity(product.id, 1)}
                        aria-label={`${product.name} adet artır`}
                      >
                        <Icon name="plus" width={16} />
                      </button>
                    </div>
                  </div>
                  <strong>{formatPrice(product.price * quantity)}</strong>
                </li>
              ))}
            </ul>
            <div className="cart-bottom">
              <div className="cart-total">
                <span>Ara toplam</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <p className="demo-note">
                Bu bir deneyim demosu. Sipariş oluşturulmaz, ödeme alınmaz.
                Ürünler ve fiyatlar örnektir.
              </p>
              <button className="add-button" onClick={onClose}>
                Keşfetmeye devam et <Icon name="arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <Icon name="bag" width={48} height={48} />
            <h3>İlk lezzetini seç.</h3>
            <p>Canının çektiği bir şey mutlaka vardır.</p>
            <button className="add-button" onClick={onClose}>
              Menüyü keşfet <Icon name="arrow" />
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
