import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Kalkan Kitchen — Dört farklı dünya, aynı sofrada",
  description:
    "Burgerler, Asia Kitchen, pizza ve içecekler. Kalkan Kitchen’ın premium menü deneyimini keşfet.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
