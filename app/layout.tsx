import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fonder Atelier — Modern Furniture for Curated Spaces",
  description:
    "Fonder Atelier curates sustainable, design-forward furniture collections for interiors that feel collected over time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
