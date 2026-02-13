import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';


const memories = [
  {
    image: "https://i.imgur.com/Nu1eKhI.jpeg",
    caption: "Viea 20th Birthday Celebration!",
    memory: "Early celeb kay ni attend man ako og field trip"
  },
  {
    image: "https://i.imgur.com/ob61EK0.jpeg",
    caption: "First LDR",
    memory: "Distance won't stop us from making beautiful memories type shi"
  },
  {
    image: "https://i.imgur.com/rlAx7ob.jpeg",
    caption: "First hike together!",
    memory: "(wala ako pic sa hike nato ginate keep mo kasi jk) "
  },
  {
    image: "https://i.imgur.com/PX3Nscl.jpeg",
    caption: "Our Buda Trip!",
    memory: "E2 Favorite Pic natin sa Buda!"
  },
  {
    image: "https://i.imgur.com/Tq4MF7m.jpeg",
    caption: "Philippine Eagle Center Date!",
    memory: "Our first date together!"
  }
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4 flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 fill-rose-500" />
          Our Beautiful Moments
          <Heart className="w-10 h-10 fill-rose-500" />
        </h2>
        <p className="text-xl text-rose-700">Memories that make my heart smile</p>
      </motion.div>

      <div className="relative bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Main Carousel */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl mb-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={memories[currentIndex].image}
                alt={memories[currentIndex].caption}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {memories[currentIndex].caption}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl"
                >
                  {memories[currentIndex].memory}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-rose-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-rose-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${index === currentIndex
                ? 'w-12 bg-rose-500'
                : 'w-3 bg-rose-300 hover:bg-rose-400'
                } h-3 rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
