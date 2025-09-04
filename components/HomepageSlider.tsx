'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomepageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Sacred Bamboo Ganapati",
      subtitle: "Handcrafted bamboo Ganapati idol with intricate engravings",
      image: "/images/products/BAMBOO GANAPATI .jpg",
      description: "Beautiful 7\" height bamboo Ganapati with traditional craftsmanship"
    },
    {
      id: 2,
      title: "National Flag Display",
      subtitle: "Elegant single national flag holder in bamboo",
      image: "/images/products/SINGLE NATIONAL FLAG.jpg",
      description: "16\" height bamboo national flag holder for patriotic display"
    },
    {
      id: 3,
      title: "Premium Pen Set",
      subtitle: "Two pen set with ink and ball pen in bamboo",
      image: "/slideimage/Two pen set one ink one ball @1199/IMG-20241230-WA0002.jpg",
      description: "Luxurious two pen set featuring both ink and ball pen designs"
    },
    {
      id: 4,
      title: "Table Photo Frame",
      subtitle: "Beautiful bamboo table photo frame for memories",
      image: "/images/products/_ TABLE PHOTO FRAME.jpg",
      description: "10\"X10\" bamboo table photo frame with elegant design"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };



  return (
  <section className="relative py-12 md:py-20 overflow-hidden bg-eco-green/10">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bamboo-brown mb-4">
            Engraved Bamboo Excellence
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Discover our collection of beautifully engraved bamboo products, 
            each piece crafted with precision and personalized for you.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-eco-green/10 flex flex-col md:flex-row">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col md:flex-row w-full h-full"
              >
                {/* Image Section - Top on mobile, left on desktop */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center bg-white/10">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 600px"
                    priority
                  />
                </div>
                {/* Content Section - Bottom on mobile, right on desktop */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-8">
                  <div className="max-w-lg w-full">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-bamboo-brown"
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-base md:text-2xl mb-2 md:mb-4 text-black/80"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm md:text-lg text-black/70 mb-4 md:mb-6"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <a
                        href="/products"
                        className="inline-block bg-eco-green text-black font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-eco-green/80 transition-all duration-200 hover:scale-105"
                      >
                        Explore Products
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - hide on mobile, show on md+ */}
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-bamboo-brown" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-bamboo-brown" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex flex-wrap justify-center mt-6 md:mt-8 gap-3 md:space-x-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentSlide
                    ? 'border-eco-green scale-110 shadow-lg'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default HomepageSlider;

