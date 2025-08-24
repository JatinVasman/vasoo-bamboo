'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ProductCard from '../../components/ProductCard';
import AnimatedButton from '../../components/AnimatedButton';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏬' },
    { id: 'bottles', name: 'Bottles', icon: '🍼' },
    { id: 'decor', name: 'Décor', icon: '🎍' },
    { id: 'lamps', name: 'Lamps', icon: '🏮' },
    { id: 'office', name: 'Office', icon: '🪑' },
    { id: 'utility', name: 'Utility', icon: '🧺' },
  ];

  const products = [
    {
      id: 'bamboo-water-bottle',
      name: 'Bamboo Water Bottle',
      image: '/images/products/bottle-1.jpg',
      price: '899',
      originalPrice: '1299',
      category: 'bottles',
      isNew: true,
    },
    {
      id: 'insulated-bamboo-tumbler',
      name: 'Insulated Bamboo Tumbler',
      image: '/images/products/bottle-2.jpg',
      price: '1299',
      category: 'bottles',
    },
    {
      id: 'bamboo-tea-set',
      name: 'Bamboo Tea Set',
      image: '/images/products/bottle-3.jpg',
      price: '2499',
      originalPrice: '3199',
      category: 'bottles',
    },
    {
      id: 'decorative-bamboo-vase',
      name: 'Decorative Bamboo Vase',
      image: '/images/products/decor-1.jpg',
      price: '1899',
      category: 'decor',
      isNew: true,
    },
    {
      id: 'bamboo-wall-art',
      name: 'Bamboo Wall Art',
      image: '/images/products/decor-2.jpg',
      price: '3499',
      category: 'decor',
    },
    {
      id: 'bamboo-photo-frame-set',
      name: 'Bamboo Photo Frame Set',
      image: '/images/products/decor-3.jpg',
      price: '1599',
      originalPrice: '1999',
      category: 'decor',
    },
    {
      id: 'bamboo-table-lamp',
      name: 'Bamboo Table Lamp',
      image: '/images/products/lamp-1.jpg',
      price: '2899',
      category: 'lamps',
    },
    {
      id: 'bamboo-floor-lamp',
      name: 'Bamboo Floor Lamp',
      image: '/images/products/lamp-2.jpg',
      price: '4999',
      category: 'lamps',
      isNew: true,
    },
    {
      id: 'bamboo-pendant-light',
      name: 'Bamboo Pendant Light',
      image: '/images/products/lamp-3.jpg',
      price: '3799',
      originalPrice: '4499',
      category: 'lamps',
    },
    {
      id: 'bamboo-desk-organizer',
      name: 'Bamboo Desk Organizer',
      image: '/images/products/office-1.jpg',
      price: '1299',
      category: 'office',
    },
    {
      id: 'bamboo-laptop-stand',
      name: 'Bamboo Laptop Stand',
      image: '/images/products/office-2.jpg',
      price: '2199',
      category: 'office',
      isNew: true,
    },
    {
      id: 'bamboo-pen-holder',
      name: 'Bamboo Pen Holder',
      image: '/images/products/office-3.jpg',
      price: '799',
      originalPrice: '999',
      category: 'office',
    },
    {
      id: 'bamboo-kitchen-utensil-set',
      name: 'Bamboo Kitchen Utensil Set',
      image: '/images/products/utility-1.jpg',
      price: '1799',
      category: 'utility',
    },
    {
      id: 'bamboo-cutting-board',
      name: 'Bamboo Cutting Board',
      image: '/images/products/utility-2.jpg',
      price: '1199',
      category: 'utility',
    },
    {
      id: 'bamboo-storage-baskets',
      name: 'Bamboo Storage Baskets',
      image: '/images/products/utility-3.jpg',
      price: '2499',
      originalPrice: '2999',
      category: 'utility',
      isNew: true,
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleInquiry = (productName: string) => {
    // Open email client with product inquiry
    const subject = `Product Inquiry: ${productName}`;
    const body = `Hello Vasoo Bamboo Arts,%0A%0AI am interested in the ${productName}.%0A%0APlease provide more details including:%0A- Pricing%0A- Availability%0A- Specifications%0A- Bulk orders%0A%0AThank you!`;
    window.location.href = `mailto:vasoo.bamboo@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bamboo-brown to-eco-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-black max-w-3xl mx-auto"
          >
            Discover our complete collection of eco-friendly bamboo products. 
            Each item is carefully crafted to bring sustainability and style to your everyday life.
          </motion.p>
        </div>
      </section>

      {/* Category Filter - Premium Bamboo Frosted Glass Design */}
      <section className="py-6 sticky top-16 z-40 backdrop-blur-md bg-beige/70 border-b border-[#3E2723]/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center space-x-4 relative">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? 'bg-eco-green text-black font-bold border-eco-green shadow-lg'
                      : 'bg-beige text-black border-[#3E2723] hover:bg-bamboo-brown hover:text-black hover:border-bamboo-brown'
                  }`}
                >
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  
                  {/* Glowing underline for active state */}
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-eco-green rounded-full shadow-lg shadow-eco-green/50"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '80%', opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Soft glow effect for active tab */}
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 bg-eco-green rounded-full opacity-20 blur-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.1, opacity: 0.25 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation - Premium Scrollable with Snap */}
            <div className="md:hidden relative">
              <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory px-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex-shrink-0 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 snap-center border flex items-center space-x-2 ${
                      activeCategory === category.id
                        ? 'bg-eco-green text-black font-bold border-eco-green shadow-lg shadow-eco-green/30'
                        : 'bg-beige text-black border-[#3E2723] hover:bg-bamboo-brown hover:text-black hover:border-bamboo-brown'
                    }`}
                  >
                    <span className="text-base">{category.icon}</span>
                    <span className="whitespace-nowrap">{category.name}</span>
                    
                    {/* Mobile glow effect for active tab */}
                    {activeCategory === category.id && (
                      <motion.div
                        className="absolute inset-0 bg-eco-green rounded-full opacity-15 blur-sm"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1.05, opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Mobile scroll hint gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-beige/70 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={`${product.id}-${activeCategory}`}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                category={product.category}
                isNew={product.isNew}
                index={index}
                onInquiry={handleInquiry}
              />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-bamboo-brown mb-2">
                No products found
              </h3>
              <p className="text-black">
                Try selecting a different category or check back later for new arrivals.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
   
    </div>
  );
}
