import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProductListProvider } from "../contexts/ProductListContext";
import ProductListCart from "../components/ProductListCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vasoo Bamboo Arts - Eco-Friendly Bamboo Products",
  description: "Discover handcrafted, sustainable bamboo products. From bottles to home décor, office accessories to lamps - all crafted from bamboo with love for nature.",
  keywords: "bamboo products, eco-friendly, sustainable, handcrafted, home décor, bamboo bottles, lamps, office accessories",
  authors: [{ name: "Vasoo Bamboo Arts" }],
  openGraph: {
    title: "Vasoo Bamboo Arts - Eco-Friendly Bamboo Products",
    description: "Discover handcrafted, sustainable bamboo products. Crafted from Bamboo. Inspired by Nature.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProductListProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ProductListCart />
        </ProductListProvider>
      </body>
    </html>
  );
}
