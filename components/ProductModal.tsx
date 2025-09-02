'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    image: string;
    price: string;
    originalPrice?: string;
    category?: string;
    description?: string;
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMultiImageProduct, setIsMultiImageProduct] = useState(false);

  // Get product images from the slideimage folder
  useEffect(() => {
    if (isOpen && product) {
      const fetchProductImages = async () => {
        try {
          const isMultiImage = product.category === 'multi-image';
          setIsMultiImageProduct(isMultiImage);

          if (isMultiImage) {
            // Multi-image product mapping
            const multiImageMapping: { [key: string]: string[] } = {
              'Photo Frame (7"X9")': [
                '/slideimage/7x9 photo frame/IMG-20250725-WA0043.jpg',
                '/slideimage/7x9 photo frame/IMG-20250822-WA0034.jpg',
                '/slideimage/7x9 photo frame/Screenshot_20250828-152039.Maps.png'
              ],
              'Photo Frame (10"X12")': [
                '/slideimage/10X12 photo frame/IMG_20250813_132828615_HDR_AE.jpg',
                '/slideimage/10x12 photo frame/IMG_20250818_213310166_HDR.jpg'
              ],
              'Bamboo Tea Coaster Set of 6': [
                '/slideimage/Bamboo tea coaster set of 6/IMG-20250606-WA0031.jpg',
                '/slideimage/Bamboo tea coaster set of 6/IMG-20250606-WA0032.jpg'
              ],
              'Desk Organizer 5': [
                '/slideimage/Desk organizer 05/IMG_20250818_204742000_HDR.jpg',
                '/slideimage/Desk organizer 05/IMG_20250818_204755883_HDR.jpg'
              ],
              'Desk Organizer 6': [
                '/slideimage/Desk organizer 06/IMG_20250827_142949741_HDR_AE.jpg',
                '/slideimage/Desk organizer 06/IMG_20250827_143006890_AE.jpg',
                '/slideimage/Desk organizer 06/IMG_20250827_143012404_AE.jpg'
              ],

              'Diary with Bamboo Pages (6.1" X 8.5", 150 Pages)': [
                '/slideimage/Diary/IMG_20250710_200916431_HDR.jpg',
                '/slideimage/Diary/IMG_20250828_144858738_HDR_AE.jpg',
                '/slideimage/Diary/IMG_20250721_230820015_HDR_AE.jpg',
                '/slideimage/Diary/IMG_20250828_144703398_AE.jpg',
                '/slideimage/Diary/IMG_20250828_144714733_HDR_AE.jpg',
              ],
              'Bamboo Ganapati (7" Height)': [
                '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111007003_AE.jpg',
                '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111031079_AE.jpg',
                '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111040082_AE.jpg',
                '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111046657_AE.jpg',
                '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111056511_HDR_AE.jpg',
                '/slideimage/Bamboo Ganapati (7 Height)/IMG_20240729_111113892_HDR_AE.jpg',
              
              ],
              'Stylus Pen': [
                '/slideimage/Stylus pen/Bamboo-Pen-with-Stylus_2.jpg',
                '/slideimage/Stylus pen/IMG_20240723_233511570_AE.jpg',
                '/slideimage/Stylus pen/BambooPen5_1200x.jpg',
                '/slideimage/Stylus pen/IMG_20240723_233555264_HDR_AE.jpg',
                '/slideimage/Stylus pen/IMG_20240723_233615761_AE.jpg',
                '/slideimage/Stylus pen/IMG_20240723_233623637_AE.jpg',
                '/slideimage/Stylus pen/IMG_20240723_233634008_AE.jpg',
              ],
              'Single Pen with Standup Box':[
                '/slideimage/Single pen with standup box @699/IMG_20250828_154800293_HDR_AE.jpg',
                '/slideimage/Single pen with standup box @699/IMG_20250828_154806482_AE.jpg',
                '/slideimage/Single pen with standup box @699/IMG_20250828_154814967_AE.jpg'
              ],
              'Green Tea Bottle (500ML)': [
                '/slideimage/Green tea bottle/61mklfrPHkL._SX679_.jpg',
                '/slideimage/Green tea bottle/71iYjJZYcWL._SX679_.jpg',
                '/slideimage/Green tea bottle/b full.WEBP',
                '/slideimage/Green tea bottle/b st.jpg',
                '/slideimage/Green tea bottle/big main.jpg',
                '/slideimage/Green tea bottle/green tea.png'
              ],
              'Bamboo Sound Amplifier & Mobile Holder': [
                '/slideimage/Bamboo sound amplifier & mobile holder/IMG-20250828-WA0103.jpg',
                
              ],
              'BAMBOO BOTTLE WITH LACE (500ML)': [
                
                '/slideimage/Lace Bottle/61mklfrPHkL._SX679_.jpg',
                '/slideimage/Lace Bottle/71iYjJZYcWL._SX679_.jpg',
                '/slideimage/Lace Bottle/71JsXhMMmkL._SX679_.jpg',
                '/slideimage/Lace Bottle/615weOtGwuL._SX679_.jpg',
                '/slideimage/Lace Bottle/6115tHjQeuL._SX679_.jpg',
                '/slideimage/Lace Bottle/1699002520089.jpg',
                '/slideimage/Lace Bottle/1699002520112.jpg',
                '/slideimage/Lace Bottle/images.jpg',
              ],
              'Mobile Stand (7.5" X 3.5")': [
                '/slideimage/Mobile Stand (7.5 X 3.5)/IMG-20250615-WA0017.jpg',
              ],
              'Name Plate (2.25" X 12")': [
                '/slideimage/Name plate with nail/IMG_20250827_142846365_HDR_AE.jpg',
                '/slideimage/Name plate with nail/IMG_20250827_142850967_AE.jpg',
                '/slideimage/Name plate with nail/IMG_20250827_142902056_HDR_AE.jpg',
                '/slideimage/Name plate with nail/IMG_20250827_142918650_AE.jpg'
              ],
              'Panpuda (4" X 8" X 0.5")': [
                '/slideimage/Paanpuda/IMG_20250828_125800346_HDR_AE.jpg',
                '/slideimage/Paanpuda/IMG_20250828_125738963_HDR_AE.jpg',
                '/slideimage/Paanpuda/IMG_20250828_125817907_HDR_AE.jpg'
              ],
              'Small Elephant Tea Coaster (7" X 5")':[
                '/slideimage/Small elephant tea coaster/IMG_20250828_155336613_HDR_AE.jpg',
                '/slideimage/Small elephant tea coaster/IMG_20250828_155344064_HDR_AE.jpg',
                '/slideimage/Small elephant tea coaster/IMG_20250828_155351092_HDR_AE.jpg',
                '/slideimage/Small elephant tea coaster/IMG_20250828_155359973_HDR_AE.jpg'

              ],
              'Triangle Paanpuda': [
                '/slideimage/Trangle Paanpuda/IMG_20250828_130216180_HDR_AE.jpg',
                '/slideimage/Trangle Paanpuda/IMG_20250828_130229947_HDR_AE.jpg'
              ],
                'Two Pen Set (One Ink, One Ball)':[
                    '/slideimage/Two pen set one ink one ball @1199/IMG_20250828_154100714_HDR_AE.jpg',
                    '/slideimage/Two pen set one ink one ball @1199/IMG_20250828_154126788_HDR_AE.jpg'  
              ],
              'Bamboo Bottle Regular (500ML)': [
                '/slideimage/Regular bottle/61mklfrPHkL._SX679_.jpg',
                '/slideimage/Regular bottle/71iYjJZYcWL._SX679_.jpg',
                '/slideimage/Regular bottle/71JsXhMMmkL._SX679_.jpg',
                '/slideimage/Regular bottle/615weOtGwuL._SX679_.jpg',
                '/slideimage/Regular bottle/1699002520112.jpg',
                '/slideimage/Regular bottle/1699002520159.jpg',
                '/slideimage/Regular bottle/Image_Editor.png',
                '/slideimage/Regular bottle/Screenshot_2024_0607_102913.jpg',
              ],
              'Bamboo Bottle with Steel Handle (500ML)': [
                '/slideimage/Bamboo Bottle with Steel Handle (500ML)/IMG-20240723_234145178_HDR_AE.jpg',
                '/slideimage/Bamboo Bottle with Steel Handle (500ML)/IMG-20240723_234150166_AE.jpg'
              ],
              'Premium Bamboo Pen': [
                '/slideimage/Single pen with standup box @699/IMG-20240723_234145178_HDR_AE.jpg',
                '/slideimage/Single pen with standup box @699/IMG-20240723_234150166_AE.jpg'
              ],
              'Sports Bamboo Bottle (500ML)': [
                '/slideimage/Sports Bamboo Bottle (500ML)/61mklfrPHkL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/71iYjJZYcWL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/71JsXhMMmkL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/615weOtGwuL._SX679_.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/1000124726.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/1699002520112.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/black cap.WEBP',
                '/slideimage/Sports Bamboo Bottle (500ML)/black.WEBP',
                '/slideimage/Sports Bamboo Bottle (500ML)/IMG_20240729_102928992_HDR_AE.jpg',
                '/slideimage/Sports Bamboo Bottle (500ML)/IMG_20240729_102932525_HDR_AE.jpg',
              ],
              'Table Photo Frame (10"X8")': [
                '/slideimage/Table photo frame/IMG-20250819-WA0066.jpg',
                '/slideimage/Table photo frame/IMG-20250819-WA0075.jpg'
              ],
              'Tumbler (450ML)': [
                '/slideimage/tumblr/1699072435753.jpg',
                '/slideimage/tumblr/IMG_20240723_233934825_HDR_AE.jpg',
                '/slideimage/tumblr/IMG_20240723_233941679_HDR_AE.jpg',
                '/slideimage/tumblr/IMG_20240723_233958365_HDR_AE.jpg',
                '/slideimage/tumblr/IMG_20240723_234039605_HDR_AE.jpg'
              ]
            };

            const productImages = multiImageMapping[product.name];
            if (productImages && productImages.length > 0) {
              const validImages = productImages.filter(img =>
                img.toLowerCase().endsWith('.jpg') ||
                img.toLowerCase().endsWith('.jpeg') ||
                img.toLowerCase().endsWith('.png') ||
                img.toLowerCase().endsWith('.webp')
              );
              setImages([product.image, ...validImages]);
            } else {
              setImages([product.image]);
            }
          } else {
            // Regular product, just use the main image
            setImages([product.image]);
          }

          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching product images:', error);
          // Fallback to main product image
          setImages([product.image]);
          setIsLoading(false);
        }
      };

      fetchProductImages();
    }
  }, [isOpen, product]);



  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
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
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
                {/* Main Image */}
                <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                  
                  {/* Navigation Arrows - Only for multi-image products */}
                  {isMultiImageProduct && images.length > 1 && (
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

                {/* Thumbnail Navigation - Only for multi-image products */}
                {isMultiImageProduct && images.length > 1 && (
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
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </button>
                    ))}
                  </div>
                )}


              </>
            )}
          </div>

          {/* Product Details - Only for regular products */}
          {!isMultiImageProduct && (
            <div className="p-6 border-t border-gray-200">
              {product.description && (
                <p className="text-gray-600 mb-4">{product.description}</p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;

