import type { Product } from "../types/product";

/** Compatible with the existing @kalkan/core Product, without a workspace dependency. */
export interface KalkanCatalogProduct {
  id: string;
  name: string;
  description: string;
  price: number; // @kalkan/core stores integer kuruş, not TRY.
  active: boolean;
  stock: number;
}

/** Explicit ID mapping prevents accidentally showing a different dish's photograph. */
export function adaptKalkanCatalog(
  catalog: KalkanCatalogProduct[],
  visualsById: Record<string, Product>,
): Product[] {
  return catalog.flatMap((item) => {
    const visual = visualsById[item.id];
    if (
      !visual ||
      !item.active ||
      item.stock < 1 ||
      !Number.isSafeInteger(item.price) ||
      item.price < 0
    )
      return [];
    return [
      {
        ...visual,
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price / 100,
      },
    ];
  });
}
