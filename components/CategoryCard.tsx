'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
  description?: string;
  href: string;
  index?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  description,
  href,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="relative overflow-hidden rounded-2xl shadow-lg bg-beige border border-bamboo-accent/20">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bamboo-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Hover Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <div className="bg-beige/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-bamboo-brown font-semibold">View Products</span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-playfair text-xl font-semibold text-bamboo-brown mb-2 group-hover:text-charcoal transition-colors duration-300">
              {title}
            </h3>
            
            {description && (
              <p className="text-black text-sm leading-relaxed">
                {description}
              </p>
            )}

            {/* Arrow Icon */}
            <motion.div
              className="mt-4 flex items-center text-eco-green group-hover:text-charcoal"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-medium mr-2">Explore</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 border-2 border-eco-green/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
