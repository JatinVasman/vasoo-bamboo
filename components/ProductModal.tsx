'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  category?: string;
  description?: string;
  multiImage?: boolean;
  images?: string[]; // 👈 images come from product.ts
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMultiImageProduct, setIsMultiImageProduct] = useState(false);

  useEffect(() => {
    if (!isOpen || !product) {
      setImages([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setCurrentImageIndex(0);

    let finalImages: string[] = [product.image].filter(Boolean);

    if (product.multiImage && product.images && product.images.length > 0) {
      // merge main image + product.images, remove duplicates
      finalImages = Array.from(new Set([product.image, ...product.images]));
    }

    if (!finalImages || finalImages.length === 0) finalImages = [product.image];

    setImages(finalImages);
    setIsMultiImageProduct(finalImages.length > 1);
    setIsLoading(false);
  }, [isOpen, product]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  const nextImage = () => {
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    if (index < 0 || index >= images.length) return;
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-2xl font-bold text-eco-green">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="relative p-6">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-green"></div>
              </div>
            ) : (
              <>
                <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <Image
                    src={images[currentImageIndex] || product.image}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />

                  {isMultiImageProduct && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                      </button>
                    </>
                  )}
                </div>

                {isMultiImageProduct && (
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'border-eco-green scale-110'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Description */}
          <div className="p-6 border-t border-gray-200">
            {product.description && <p className="text-gray-600 mb-4">{product.description}</p>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
