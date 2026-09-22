export interface CartLine {
  id: string;
  quantity: number;
}
export const CART_KEY = "kalkan-premium-cart-v1";
export const MAX_QUANTITY = 20;

export function normalizeCart(
  value: unknown,
  validIds: readonly string[],
): CartLine[] {
  if (!Array.isArray(value)) return [];
  const quantities = new Map<string, number>();
  for (const item of value) {
    if (
      !item ||
      typeof item !== "object" ||
      typeof item.id !== "string" ||
      !validIds.includes(item.id) ||
      !Number.isSafeInteger(item.quantity) ||
      item.quantity <= 0
    )
      continue;
    quantities.set(
      item.id,
      Math.min(MAX_QUANTITY, (quantities.get(item.id) ?? 0) + item.quantity),
    );
  }
  return [...quantities].map(([id, quantity]) => ({ id, quantity }));
}

export function changeQuantity(
  lines: CartLine[],
  id: string,
  delta: number,
): CartLine[] {
  const quantity = Math.min(
    MAX_QUANTITY,
    Math.max(0, (lines.find((l) => l.id === id)?.quantity ?? 0) + delta),
  );
  if (!quantity) return lines.filter((l) => l.id !== id);
  return lines.some((l) => l.id === id)
    ? lines.map((l) => (l.id === id ? { ...l, quantity } : l))
    : [...lines, { id, quantity }];
}
