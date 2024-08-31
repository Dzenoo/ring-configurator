import type { Metadata } from "next";
import { Playfair_Display_SC } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display_SC({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ring Configurator",
  description: "WebGl Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
