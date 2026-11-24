import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SHAPE Bar — Training Club Kalkan",
  description:
    "Coffee, Protein Shakes, Energy & Pre-Workout, Water. SHAPE Bar Kalkan menüsü.",
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
