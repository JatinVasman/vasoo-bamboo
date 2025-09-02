'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useProductList } from '../contexts/ProductListContext';
import ProductModal from './ProductModal';

interface ProductCardProps {
  id?: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  category?: string;
  isNew?: boolean;
  isEcoFriendly?: boolean;
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
}) => {
  const { addItem, removeItem, items } = useProductList();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productId = id || name.toLowerCase().replace(/\s+/g, '-');
  const isInList = items.some(item => item.id === productId);

  const handleAddToList = () => {
    addItem({
      id: productId,
      name,
      category: category || 'General',
      price,
      originalPrice,
    });
  };

  const handleRemoveFromList = () => {
    removeItem(productId);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const product = {
    id: productId,
    name,
    image,
    price,
    originalPrice,
    category,
    description: category,
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        className="group bg-beige rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-bamboo-accent/10 transition-all duration-300 cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center p-2"
            sizes="(max-width: 750px) 80vw, (max-width: 1000px) 40vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {isNew && (
              <span className="bg-eco-green text-white text-xs font-semibold px-2 py-1 rounded-full">
                
              </span>
            )}
            {isEcoFriendly && (
              <span className="bg-bamboo-brown text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                🌱
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
            <button 
              className="bg-beige/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-charcoal/20 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
            >
              <svg className="w-5 h-5 text-bamboo-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
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
            {isInList ? (
              // Product is in cart - show remove button
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFromList();
                }}
                className="flex-1 p-3 border border-red-500/50 bg-red-500/10 text-red-600 rounded-lg hover:bg-red-500/20 hover:border-red-500 transition-all duration-200 flex items-center justify-center space-x-2"
                title="Remove from inquiry list"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <span>Remove</span>
              </motion.button>
            ) : (
              // Product not in cart - show add button
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToList();
                }}
                className="flex-1 p-3 border border-bamboo-accent/50 bg-bamboo-accent/10 text-bamboo-brown rounded-lg hover:bg-bamboo-accent/20 hover:border-bamboo-accent transition-all duration-200 flex items-center justify-center space-x-2"
                title="Add to inquiry list"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add to List</span>
              </motion.button>
            )}
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

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
