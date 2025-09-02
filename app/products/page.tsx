'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import AnimatedButton from '../../components/AnimatedButton';
import { products, productCategories } from '../../data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by both category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Logo/product-page.jpg"
            alt="Bamboo Products Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bamboo-brown/95 to-eco-green/95" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-6 drop-shadow-2xl"
          >
            Eco-Friendly Bamboo Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#F5F5DC] font-semibold max-w-3xl mx-auto drop-shadow-lg"
          >
            Discover our collection of {products.length} handmade bamboo crafts from Chandrapur. Each sustainable product is carefully 
            crafted using traditional craftsmanship to bring eco-friendly living to your home.
          </motion.p>
        </div>
      </section>

      {/* Search Box */}
      <section className="py-8 bg-beige/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-bamboo-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border-2 border-bamboo-brown/30 rounded-2xl text-lg placeholder-bamboo-brown/60 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-eco-green transition-all duration-300 shadow-lg hover:shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-bamboo-brown hover:text-eco-green transition-colors duration-200"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Search Results Summary */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-4"
              >
                <p className="text-bamboo-brown font-medium">
                  Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                </p>
              </motion.div>
            )}
          </motion.div>
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
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery(''); // Clear search when category changes
                  }}
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
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchQuery(''); // Clear search when category changes
                    }}
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
              {searchQuery 
                ? `Search Results for "${searchQuery}" (${filteredProducts.length})`
                : activeCategory === 'all' 
                  ? `All Products (${products.length})` 
                  : `${productCategories.find(c => c.id === activeCategory)?.name} (${filteredProducts.length})`
              }
            </h2>
            <p className="text-black/70">
              {searchQuery 
                ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} matching your search`
                : activeCategory === 'all' 
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
                {searchQuery ? 'No search results found' : 'No products found'}
              </h3>
              <p className="text-black">
                {searchQuery 
                  ? `No products found for "${searchQuery}". Try different keywords or browse by category.`
                  : 'Try selecting a different category or check back later for new arrivals.'
                }
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-6 py-2 bg-eco-green text-black font-semibold rounded-full hover:bg-eco-green/80 transition-colors duration-200"
                >
                  Clear Search
                </button>
              )}
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
              View Our Catalog
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
