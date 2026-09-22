export const formatPrice = (price: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(price) +
  " ₺";
