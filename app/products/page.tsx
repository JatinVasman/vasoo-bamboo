'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ProductCard from '../../components/ProductCard';
import AnimatedButton from '../../components/AnimatedButton';
import { products, productCategories } from '../../data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);



  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Logo/product-page.jpg"
            alt="Bamboo Products Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bamboo-brown/80 to-eco-green/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-black mb-6 drop-shadow-2xl"
          >
            Eco-Friendly Bamboo Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-black font-semibold max-w-3xl mx-auto drop-shadow-lg"
          >
            Discover our collection of {products.length} handmade bamboo crafts from Chandrapur. Each sustainable product is carefully 
            crafted using traditional craftsmanship to bring eco-friendly living to your home.
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
              {productCategories.map((category) => (
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
                {productCategories.map((category) => (
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
          {/* Category Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold text-bamboo-brown mb-2">
              {activeCategory === 'all' 
                ? `All Products (${products.length})` 
                : `${productCategories.find(c => c.id === activeCategory)?.name} (${filteredProducts.length})`
              }
            </h2>
            <p className="text-black/70">
              {activeCategory === 'all' 
                ? 'Browse our complete collection of eco-friendly bamboo products'
                : `Discover our ${filteredProducts.length} ${productCategories.find(c => c.id === activeCategory)?.name.toLowerCase()}`
              }
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={`${product.id}-${activeCategory}-${index}`}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                category={product.category}
                isNew={product.isNew}
                index={index}
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
      <section className="py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bamboo-brown mb-6">
              Shop Handmade Bamboo Products Today
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Experience the durability and sustainability of our eco-friendly bamboo crafts. 
              Each piece showcases unique traditional craftsmanship from Vasoo Bamboo Arts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                href="/Catalog/VASOO_CATALOG_1.pdf"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !text-black hover:!text-black border border-eco-green/30"
                download="VASOO_CATALOG.pdf"
              >
                📦 Shop Handmade Bamboo Products
              </AnimatedButton>
              
              <AnimatedButton
                href="https://wa.me/+918484988228"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto !text-black hover:!text-black border border-eco-green/30"
              >
                💬 WhatsApp for Custom Orders
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
   
    </div>
  );
}
