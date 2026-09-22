import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { products } from "../src/data/products.ts";
import { categories } from "../src/data/categories.ts";
import { productsInCategory } from "../src/lib/catalog.ts";

test("requested categories have the correct order and distinct IDs", () => {
  assert.deepEqual(
    categories.map((c) => c.name),
    ["Burgerler", "Asia Kitchen", "Pizza", "İçecekler"],
  );
  assert.equal(new Set(categories.map((c) => c.id)).size, 4);
});

test("each carousel only receives its category's products, and IDs are unique", () => {
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  const grouped = categories.flatMap((category) => {
    const list = productsInCategory(products, category.id);
    assert.equal(list.length, 2);
    assert.ok(list.every((p) => p.categoryId === category.id));
    return list;
  });
  assert.equal(grouped.length, products.length);
  assert.deepEqual(productsInCategory(products, "unknown"), []);
});

test("every product and category image is included in the deliverable", () => {
  for (const item of [...products, ...categories]) {
    assert.ok(
      existsSync(new URL(`../public${item.image}`, import.meta.url)),
      item.image,
    );
  }
});
