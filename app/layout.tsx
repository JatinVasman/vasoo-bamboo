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
  title: "Vasoo Bamboo Arts - Eco-Friendly Handcrafted Bamboo Products | Chandrapur",
  description: "Vasoo Bamboo Arts in Chandrapur offers premium handcrafted bamboo products. Eco-friendly home décor, office accessories, bamboo bottles, lamps and more. Sustainable craftsmanship since generations.",
  keywords: "Vasoo Bamboo Arts, bamboo products Chandrapur, eco-friendly handicrafts, sustainable bamboo crafts, handmade bamboo items, bamboo home décor, bamboo bottles, bamboo lamps, office accessories bamboo, traditional bamboo crafts India",
  authors: [{ name: "Vasoo Bamboo Arts" }],
  creator: "Vasoo Bamboo Arts",
  publisher: "Vasoo Bamboo Arts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code-here',
  },
  icons: {
    icon: [
      { url: '/images/Logo/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Logo/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/Logo/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/Logo/logo.png',
  },
  openGraph: {
    title: "Vasoo Bamboo Arts - Premium Handcrafted Bamboo Products from Chandrapur",
    description: "Discover authentic bamboo crafts from Vasoo Bamboo Arts. Eco-friendly home décor, office accessories, and sustainable bamboo products handcrafted with traditional techniques.",
    type: "website",
    locale: "en_US",
    url: "https://www.vasoobambooarts.com",
    siteName: "Vasoo Bamboo Arts",
    images: [
      {
        url: '/images/Logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Vasoo Bamboo Arts - Eco-friendly Bamboo Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasoo Bamboo Arts - Handcrafted Bamboo Products',
    description: 'Sustainable bamboo crafts from Chandrapur. Eco-friendly home décor and office accessories.',
    images: ['/images/Logo/logo.png'],
  },
  alternates: {
    canonical: "https://www.vasoobambooarts.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vasoo Bamboo Arts",
              "description": "Handcrafted eco-friendly bamboo products from Chandrapur. Sustainable home décor, office accessories, and traditional bamboo crafts.",
              "url": "https://www.vasoobambooarts.com",
              "logo": "https://www.vasoobambooarts.com/images/Logo/logo.png",
              "image": "https://www.vasoobambooarts.com/images/Logo/logo.png",
              "telephone": "+91-90279-18860",
              "email": "vasoo.bamboo@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chandrapur",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://wa.me/+918484988228"
              ]
            })
          }}
        />
      </head>
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
