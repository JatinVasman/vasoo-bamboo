'use client';

import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

interface HeroProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage = '/images/bamboo-hero.jpg',
  title,
  subtitle,
  buttonText,
  buttonHref,
  onButtonClick,
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(141, 110, 99, 0.3), rgba(76, 175, 80, 0.2)), url(${backgroundImage})`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left text-black lg:pl-8"
          >
                         <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-bamboo-brown"
             >
               {title}
             </motion.h1>

             {subtitle && (
               <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="text-lg md:text-xl lg:text-2xl mb-8 text-black/80 max-w-lg leading-relaxed"
               >
                 {subtitle}
               </motion.p>
             )}

            {(buttonText && (buttonHref || onButtonClick)) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <AnimatedButton
                  href={buttonHref}
                  onClick={onButtonClick}
                  variant="primary"
                  size="lg"
                >
                  {buttonText}
                </AnimatedButton>
              </motion.div>
            )}
          </motion.div>

                     {/* Right Column - Images */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex justify-center lg:justify-end"
           >
                                                       <div className="grid grid-cols-1 gap-6 w-full max-w-lg">
                {/* First Image */}
                <motion.div 
                  className="relative w-full group"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 2
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full h-full"
                  >
                    <img
                      src="/images/Logo/bamboo-products.jpg"
                      alt="Bamboo Products Collection"
                      className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                    />
                  </motion.div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-eco-green/20 to-bamboo-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>

                {/* Second Image */}
                <motion.div 
                  className="relative w-full group"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: -5,
                      rotateX: -2
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full h-full"
                  >
                    <img
                      src="/images/Logo/bamboo-products2.jpg"
                      alt="Bamboo Products Collection 2"
                      className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                    />
                  </motion.div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-bamboo-brown/20 to-eco-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="w-1 h-3 bg-black rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-eco-green/20 rounded-full hidden lg:block"
      />
      
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-32 right-16 w-12 h-12 bg-bamboo-accent/30 rounded-full hidden lg:block"
      />
    </section>
  );
};

export default Hero;
