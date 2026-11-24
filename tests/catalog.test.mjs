import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { products } from "../src/data/products.ts";
import { categories } from "../src/data/categories.ts";
import { productsInCategory } from "../src/lib/catalog.ts";

test("requested categories have the correct order and distinct IDs", () => {
  assert.deepEqual(
    categories.map((c) => c.name),
    ["Coffee", "Protein Shakes", "Energy / Pre-Workout", "Water"],
  );
  assert.equal(new Set(categories.map((c) => c.id)).size, 4);
});

test("each carousel only receives its category's products, and IDs are unique", () => {
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  const grouped = categories.flatMap((category) => {
    const list = productsInCategory(products, category.id);
    assert.equal(list.length, ({ coffee: 5, shakes: 5, energy: 4, water: 3 })[category.id]);
    assert.ok(list.every((p) => p.categoryId === category.id));
    return list;
  });
  assert.equal(grouped.length, products.length);
  assert.deepEqual(productsInCategory(products, "unknown"), []);
});

test("every product and category image is included in the deliverable", () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  for (const item of [...products, ...categories]) {
    assert.ok(item.image.startsWith(`${basePath}/bar/`), item.image);
    assert.ok(
      existsSync(new URL(`../public${item.image.slice(basePath.length)}`, import.meta.url)),
      item.image,
    );
  }
});
