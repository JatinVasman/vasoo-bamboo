'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import AnimatedButton from '../../components/AnimatedButton';

export default function AboutPage() {
  const timelineEvents = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started with a vision to create sustainable bamboo products in Chandrapur, Maharashtra.',
      icon: '🌱',
    },
    {
      year: '2019',
      title: 'First Workshop',
      description: 'Established our first workshop and began training local artisans in bamboo crafting techniques.',
      icon: '🏗️',
    },
    {
      year: '2020',
      title: 'Eco Mission',
      description: 'Launched our mission to replace plastic products with sustainable bamboo alternatives.',
      icon: '♻️',
    },
    {
      year: '2021',
      title: 'Product Expansion',
      description: 'Expanded our product line to include home décor, office accessories, and lighting solutions.',
      icon: '📈',
    },
    {
      year: '2022',
      title: 'Community Impact',
      description: 'Partnered with local farmers and created employment for over 50 artisan families.',
      icon: '🤝',
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Today we serve customers nationwide with 100+ eco-friendly bamboo products.',
      icon: '🎯',
    },
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'Every product we create contributes to a healthier planet by reducing plastic waste.',
      icon: '🌍',
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in craftsmanship and material selection.',
      icon: '⭐',
    },
    {
      title: 'Community',
      description: 'Supporting local artisans and farmers while preserving traditional crafting techniques.',
      icon: '👥',
    },
    {
      title: 'Innovation',
      description: 'Continuously developing new designs that blend traditional craft with modern needs.',
      icon: '💡',
    },
  ];

  const stats = [
    { number: '50+', label: 'Artisan Families Employed' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '100+', label: 'Unique Products' },
    { number: '6+', label: 'Years of Excellence' },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="Bamboo workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About Vasoo Bamboo Arts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Crafting sustainable futures through traditional artistry and modern innovation
          </motion.p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bamboo-brown mb-6">
                Our Story
              </h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                In a world where convenience often overshadows care for the earth, Vasoo Bamboo Arts was born out of a promise – to protect nature while preserving our rich craftsmanship. What began in a modest workshop in Chandrapur wasn&apos;t just a business idea; it was a heartfelt mission to prove that beauty can be sustainable.
              </p>
              <p className="text-black text-lg leading-relaxed mb-6">
                Every curve of bamboo we shape carries a piece of tradition, every product we craft holds a story – of artisans whose hands have turned humble grass into timeless treasures, of customers who choose earth over excess, of a planet slowly breathing easier because of choices like yours.
              </p>
              <p className="text-black text-lg leading-relaxed mb-8">
                When you hold one of our creations, you&apos;re not just buying an object – you&apos;re embracing a legacy of love for the environment, for art, and for a future where nature thrives alongside us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/artisan-1.jpg"
                    alt="Bamboo artisan at work"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/workshop-2.jpg"
                    alt="Bamboo workshop"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/products-making.jpg"
                    alt="Bamboo products being made"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/artisan-2.jpg"
                    alt="Skilled craftsperson"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute -top-8 -right-8 bg-eco-green text-black p-6 rounded-xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">6+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Timeline"
            subtitle="Journey through the milestones that shaped Vasoo Bamboo Arts"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bamboo-brown hidden lg:block" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-5/12 mb-8 lg:mb-0">
                    <div className={`bg-beige border border-bamboo-accent/20 p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}>
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{event.icon}</span>
                        <span className="text-eco-green font-bold text-lg">{event.year}</span>
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-bamboo-brown mb-2">
                        {event.title}
                      </h3>
                      <p className="text-black">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-eco-green rounded-full border-4 border-white shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-gradient-to-br from-eco-green to-bamboo-brown rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4 shadow-lg"
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-playfair text-xl font-semibold text-bamboo-brown mb-3 group-hover:text-charcoal transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-bamboo-brown to-eco-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Our Impact
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to sustainability and community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-black text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
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
              Join Our Sustainable Journey
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Ready to make a positive impact? Explore our products or get in touch 
              to learn more about custom solutions for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
              href="/products"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto npr"
              >
              View Our Products
              </AnimatedButton>
              <AnimatedButton
              href="mailto:vasoo.bamboo@gmail.com?subject=Inquiry from About Page&body=Hello Vasoo Bamboo Arts,%0A%0AI would like to know more about your products and custom solutions.%0A%0APlease contact me.%0A%0AThank you!"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto npr"
              >
              Send Email
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
