'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProductList } from '../contexts/ProductListContext';

const ProductListCart: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearList,
    getTotalItems,
    getTotalValue,
    sendToWhatsApp,
  } = useProductList();

  const [isOpen, setIsOpen] = useState(false);

  if (getTotalItems() === 0) {
    return null;
  }

  return (
    <>
      {/* Floating Cart Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-eco-green text-black p-4 rounded-full shadow-lg hover:bg-charcoal transition-colors duration-200 flex items-center space-x-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M17 13l1.5 6M9 19.5h.01M20 19.5h.01" />
          </svg>
          <span className="font-semibold">{getTotalItems()}</span>
        </button>
      </motion.div>

      {/* Cart Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-2xl md:w-full bg-green-100 rounded-xl shadow-2xl z-50 flex flex-col max-h-full"
            >
              {/* Header */}
              <div className="p-6 border-b border-black-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-playfair text-2xl font-bold text-bamboo-brown">
                    Product Inquiry List
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black hover:text-charcoal transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-black mt-2">
                  {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} selected for inquiry
                </p>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center justify-between bg-beige rounded-lg p-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-black">{item.name}</h3>
                        <p className="text-sm text-black">Category: {item.category}</p>
                        <p className="text-sm text-bamboo-brown font-medium">
                          ₹{item.price} × {item.quantity} = ₹{(parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity).toFixed(0)}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-charcoal text-black border border-charcoal flex items-center justify-center hover:bg-white hover:border-black transition-colors"
                          >
                            <span className="text-sm font-bold text-black">-</span>
                          </button>
                          <span className="w-8 text-center font-semibold text-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-charcoal text-black border border-charcoal flex items-center justify-center hover:bg-white hover:border-black transition-colors"
                          >
                            <span className="text-sm font-bold text-black">+</span>
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                {/* Total Value Display */}
                <div className="mb-4 p-4 bg-eco-green/10 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-black">Total Items:</span>
                    <span className="font-bold text-black">{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold text-black">Total Value:</span>
                    <span className="font-bold text-eco-green text-lg">₹{getTotalValue().toFixed(0)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={clearList}
                    className="flex-1 bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold hover:bg-charcoal hover:text-black transition-colors duration-200 border border-black"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => {
                      sendToWhatsApp();
                      setIsOpen(false);
                    }}
                    className="flex-1 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1DA851] transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Send to WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductListCart;
