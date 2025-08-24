'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} ${className} mb-12`}
    >
      <motion.h2
        className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-bamboo-brown mb-4 relative inline-block"
      >
        {title}
        
        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-eco-green to-bamboo-accent rounded-full"
        />
        
        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute -top-2 -right-6 w-4 h-4 border-2 border-eco-green rounded-full hidden sm:block"
        />
        
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: -360 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -bottom-2 -left-4 w-3 h-3 bg-bamboo-accent rounded-full hidden sm:block"
        />
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Floating Leaves Animation */}
      <div className="relative">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-8 left-1/4 text-eco-green text-2xl opacity-30 hidden lg:block"
        >
          🌿
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -top-6 right-1/4 text-bamboo-accent text-xl opacity-30 hidden lg:block"
        >
          🍃
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
