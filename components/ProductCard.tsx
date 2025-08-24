'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';
import { useProductList } from '../contexts/ProductListContext';

interface ProductCardProps {
  id?: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  category?: string;
  isNew?: boolean;
  isEcoFriendly?: boolean;
  index?: number;
  onInquiry?: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  originalPrice,
  category,
  isNew = false,
  isEcoFriendly = true,
  index = 0,
  onInquiry,
}) => {
  const { addItem, items } = useProductList();
  const productId = id || name.toLowerCase().replace(/\s+/g, '-');
  const isInList = items.some(item => item.id === productId);

  const handleInquiry = () => {
    if (onInquiry) {
      onInquiry(name);
    } else {
      // Default action - redirect to contact page with product name
      window.location.href = `/contact?product=${encodeURIComponent(name)}`;
    }
  };

  const handleAddToList = () => {
    addItem({
      id: productId,
      name,
      category: category || 'General',
      price,
      originalPrice,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-beige rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-bamboo-accent/10 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {isNew && (
            <span className="bg-eco-green text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          )}
          {isEcoFriendly && (
            <span className="bg-bamboo-brown text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
              🌱 Eco
            </span>
          )}
        </div>

        {/* Quick Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
        >
          <button className="bg-beige/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-charcoal/20 transition-colors duration-200">
            <svg className="w-5 h-5 text-bamboo-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </motion.div>

        {/* Overlay with Quick View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-bamboo-brown/40 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-beige text-bamboo-brown px-4 py-2 rounded-lg font-semibold hover:bg-charcoal hover:text-black transition-colors duration-200"
          >
            Quick View
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        {category && (
          <span className="text-xs text-black uppercase tracking-wide font-medium">
            {category}
          </span>
        )}

        {/* Product Name */}
        <h3 className="font-semibold text-lg text-black mt-1 mb-2 group-hover:text-charcoal transition-colors duration-200">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-bold text-eco-green">
            ₹{price}
          </span>
          {originalPrice && (
            <span className="text-sm text-bamboo-accent line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <AnimatedButton
              onClick={handleInquiry}
              variant="primary"
              size="sm"
              className="w-full"
            >
              Inquire Now
            </AnimatedButton>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToList}
            className={`p-2 border rounded-lg transition-all duration-200 ${
              isInList 
                ? 'border-eco-green bg-eco-green text-black' 
                : 'border-bamboo-accent/50 hover:border-charcoal hover:text-charcoal hover:shadow-sm'
            }`}
            title={isInList ? 'Added to list' : 'Add to inquiry list'}
          >
            {isInList ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
        className="h-1 bg-gradient-to-r from-eco-green via-bamboo-accent to-bamboo-brown"
      />
    </motion.div>
  );
};

export default ProductCard;
