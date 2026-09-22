import type { Product } from "../types/product";

export function productsInCategory(
  products: Product[],
  categoryId: string,
): Product[] {
  return products.filter((product) => product.categoryId === categoryId);
}
