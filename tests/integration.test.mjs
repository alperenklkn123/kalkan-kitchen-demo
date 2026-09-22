import test from "node:test";
import assert from "node:assert/strict";
import { adaptKalkanCatalog } from "../src/lib/kalkan-adapter.ts";
import { formatPrice } from "../src/lib/format.ts";

test("existing integer kuruş prices become TRY without losing fractional currency", () => {
  const visuals = {
    "real-id": { id: "demo-id", name: "Demo", image: "/food/pizza.webp" },
  };
  const [product] = adaptKalkanCatalog(
    [
      {
        id: "real-id",
        name: "Gerçek ürün",
        description: "Güncel",
        price: 42050,
        active: true,
        stock: 4,
      },
    ],
    visuals,
  );
  assert.equal(product.id, "real-id");
  assert.equal(product.name, "Gerçek ürün");
  assert.equal(product.price, 420.5);
  assert.equal(formatPrice(product.price), "420,5 ₺");
});
test("unmapped, inactive, out of stock and invalid-price products are excluded", () => {
  const visual = { name: "Demo" };
  const items = [
    { id: "unknown", price: 42000, active: true, stock: 4 },
    { id: "inactive", price: 42000, active: false, stock: 4 },
    { id: "sold", price: 42000, active: true, stock: 0 },
    { id: "invalid", price: -1, active: true, stock: 4 },
  ];
  assert.deepEqual(
    adaptKalkanCatalog(items, {
      inactive: visual,
      sold: visual,
      invalid: visual,
    }),
    [],
  );
});
