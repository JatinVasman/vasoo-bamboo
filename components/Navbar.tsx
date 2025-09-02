'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-beige backdrop-blur-md shadow-lg fixed top-0 w-full z-50 border-b border-bamboo-accent/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center p-1 rounded-lg hover:bg-bamboo-light/10 transition-colors duration-300">
            <Image 
              src="/images/Logo/logo.png" 
              alt="Vasoo Bamboo Arts Logo" 
              width={200}
              height={80}
              className="h-10 sm:h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-300"
              priority
            />
            <span className="ml-3 text-lg sm:text-xl md:text-2xl font-bold text-bamboo-brown hidden sm:block">
              Vasoo Bamboo Art&apos;s
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black font-medium pb-1 px-3 py-2 rounded-lg relative overflow-hidden transition-all duration-300 group-hover:text-bamboo-accent group-hover:bg-bamboo-light/20 group-hover:shadow-lg group-hover:shadow-bamboo-accent/20"
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-bamboo-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  />
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-bamboo-accent/0 via-bamboo-accent/10 to-bamboo-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.div>
              </Link>
            ))}
            <motion.a
              href="/Catalog/VASOO_CATALOG_1.pdf"
              download="Vasoo_Bamboo_Arts_Catalog.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-beige text-black border border-bamboo-accent px-4 py-2 rounded-lg hover:bg-bamboo-accent hover:text-black hover:shadow-xl hover:shadow-bamboo-accent/30 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Download Catalog</span>
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-bamboo-accent to-bamboo-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-charcoal transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-beige border-t border-bamboo-accent">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="block px-3 py-2 text-black hover:text-bamboo-accent hover:bg-bamboo-light/20 rounded-lg transition-all duration-300 relative overflow-hidden group-hover:shadow-md group-hover:shadow-bamboo-accent/20"
                  >
                    {item.name}
                    {/* Mobile glow effect */}
                    <motion.div
                      className="absolute left-0 top-0 h-full w-1 bg-bamboo-accent origin-top"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              ))}
              <motion.a
                href="/Catalog/VASOO_CATALOG_1.pdf"
                download="Vasoo_Bamboo_Arts_Catalog.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left bg-beige text-black border border-bamboo-accent px-3 py-2 rounded-lg hover:bg-bamboo-accent hover:text-white hover:shadow-lg hover:shadow-bamboo-accent/30 transition-all duration-300 mt-2 block relative overflow-hidden group"
              >
                <span className="relative z-10">Download Catalog</span>
                {/* Mobile button background animation */}
                <motion.div
                  className="absolute inset-0 bg-bamboo-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
