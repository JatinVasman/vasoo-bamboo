'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import AnimatedButton from '../components/AnimatedButton';

export default function Home() {
  const categories = [
    {
      title: 'Bamboo Bottles',
      image: '/images/bottles.jpg',
      description: 'Eco-friendly water bottles crafted from sustainable bamboo',
      href: '/products?category=bottles',
    },
    {
      title: 'Home Décor',
      image: '/images/decor.jpg',
      description: 'Beautiful handcrafted bamboo decorative items for your home',
      href: '/products?category=decor',
    },
    {
      title: 'Lamps & Lighting',
      image: '/images/lamps.jpg',
      description: 'Stunning bamboo lamps that bring warmth to any space',
      href: '/products?category=lamps',
    },
  ];

  const features = [
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'Made from 100% sustainable bamboo',
    },
    {
      icon: '🤲',
      title: 'Handcrafted',
      description: 'Carefully crafted by skilled artisans',
    },
    {
      icon: '♻️',
      title: 'Sustainable',
      description: 'Biodegradable and environmentally conscious',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="Crafted from Bamboo. Inspired by Nature."
        subtitle="Discover our collection of eco-friendly bamboo products that blend sustainability with style. Each piece is handcrafted with love for nature and passion for quality."
        buttonText="Explore Products"
        buttonHref="/products"
        backgroundImage="/images/bamboo-hero.jpg"
      />

      {/* Featured Categories Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Categories"
            subtitle="Explore our handpicked collection of bamboo products designed for modern living"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                image={category.image}
                description={category.description}
                href={category.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bamboo-brown mb-6">
                Our Story
              </h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                At Vasoo Bamboo Arts, we believe in the power of sustainable living. 
                Our journey began with a simple vision: to create beautiful, functional 
                products that honor nature while serving modern needs.
              </p>
              <p className="text-black text-lg leading-relaxed mb-8">
                Every piece in our collection is handcrafted with precision and care, 
                ensuring that you receive not just a product, but a work of art that 
                tells a story of sustainability and craftsmanship.
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
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/workshop.jpg"
                  alt="Bamboo crafting workshop"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-beige border border-bamboo-accent/20 p-6 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-eco-green p-3 rounded-full">
                    <span className="text-black text-xl">🎋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bamboo-brown">100% Natural</h4>
                    <p className="text-sm text-dark-text">Sustainable bamboo materials</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-20 bg-eco-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Bamboo?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Bamboo is one of the most sustainable materials on Earth. Here&apos;s why it makes a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-beige transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bamboo-brown mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have made the switch to sustainable bamboo products. 
              Download our catalog or get in touch with us today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                href="/Catalog/VASOO_CATALOG_1.pdf"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                download="VASOO_CATALOG.pdf"
              >
                📄 Download Catalog
              </AnimatedButton>
              
              <AnimatedButton
                href="https://wa.me/918484988228"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
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
