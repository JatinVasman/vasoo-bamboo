'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import AnimatedButton from '../components/AnimatedButton';
import { products } from '../data/products';
import HomepageSlider from '../components/HomepageSlider';

export default function Home() {
  // Featured products - select 6 products to showcase in 3-3 format
  const featuredProducts = [
    products.find(p => p.id === 'bamboo-bottle-regular'),
    products.find(p => p.id === 'bamboo-peacock'),
    products.find(p => p.id === 'bamboo-silver-lamp'),
    products.find(p => p.id === 'premium-bamboo-pen'),
    products.find(p => p.id === 'bamboo-cutlery-set'),
    products.find(p => p.id === 'bamboo-tabala'),
  ].filter(Boolean).slice(0, 6);

  const handleInquiry = (productName: string) => {
    const subject = `Product Inquiry: ${productName}`;
    const body = `Hello Vasoo Bamboo Arts,%0A%0AI am interested in the ${productName}.%0A%0APlease provide more details including:%0A- Pricing%0A- Availability%0A- Specifications%0A- Bulk orders%0A%0AThank you!`;
    window.location.href = `mailto:vasoobambooarts@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="Welcome to Vasoo Bamboo Arts - Handmade Excellence"
        subtitle="Discover eco-friendly, sustainable bamboo crafts handmade by skilled artisans in Chandrapur, Maharashtra. Experience traditional craftsmanship that brings nature's beauty into your home while protecting our planet."
        buttonText="Explore Our Products"
        buttonHref="/products"
        backgroundImage="/images/bamboo-hero.jpg"
      />

      {/* Homepage Slider - Engraved Products */}
      <HomepageSlider />

      {/* Featured Products Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Products"
            subtitle="Handpicked from our collection of eco-friendly bamboo crafts"
          />
          
          {/* First row - 3 products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              product && (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  category={product.category}
                  isNew={product.isNew}
                  index={index}
                />
              )
            ))}
          </div>

          {/* Second row - 3 products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.slice(3, 6).map((product, index) => (
              product && (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  category={product.category}
                  isNew={product.isNew}
                  index={index + 3}
                />
              )
            ))}
          </div>

          <div className="text-center">
            <AnimatedButton
              href="/products"
              variant="primary"
              size="lg"
              className="!text-black hover:!text-black border border-eco-green/30"
            >
              🏬 View All {products.length}+ Products
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bamboo-brown mb-6">
                About Vasoo Bamboo Arts
              </h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                Based in Chandrapur, Maharashtra, Vasoo Bamboo Arts specializes in creating beautiful, 
                eco-friendly bamboo crafts using traditional craftsmanship techniques. Every handmade piece 
                is sustainably sourced and crafted by skilled artisans who care deeply about our environment.
              </p>
              <p className="text-black text-lg leading-relaxed mb-8">
                When you choose our handmade bamboo products, you&apos;re supporting sustainable living and 
                traditional craftsmanship. Our eco-friendly bamboo crafts bring natural beauty to your 
                home while helping preserve our planet for future generations.
              </p>
              <AnimatedButton href="/about" variant="outline" size="md">
                Learn More About Us
              </AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
                <Image
                  src="/images/Logo/bamboo-forest.jpg"
                  alt="Beautiful bamboo tree representing our sustainable bamboo crafts"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-2xl"
                  priority
                />
              
              {/* Card Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="inline-block bg-beige border border-bamboo-accent/20 px-4 py-3 rounded-lg shadow-md mx-auto"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-eco-green p-2 rounded-full">
                      <span className="text-black text-lg">🎋</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bamboo-brown text-base">100% Natural</h4>
                      <p className="text-sm text-black">Sustainable bamboo materials</p>
                    </div>
                  </div>
                </motion.div>
            </motion.div>
          </div>
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
              Start Your Eco-Friendly Journey Today
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have embraced sustainable living with our handmade bamboo crafts. 
              Explore our eco-friendly products from Vasoo Bamboo Arts in Chandrapur and make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                href="/Catalog/VASOO_CATALOG_1.pdf"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !text-black hover:!text-black border border-eco-green/30"
                download="VASOO_CATALOG.pdf"
              >
                📄 Download Catalog
              </AnimatedButton>
              
              <AnimatedButton
                href="https://wa.me/+918484988228"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto !text-black hover:!text-black border border-eco-green/30"
              >
                💬 WhatsApp Us
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
