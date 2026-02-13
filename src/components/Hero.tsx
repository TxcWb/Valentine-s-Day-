import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 text-rose-500 fill-rose-500 mx-auto drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold text-rose-600 mb-6"
        >
          Happy Valentine's Day,
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-pink-500 mb-8"
        >
          ♥ Viea! ♥
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-rose-700 mb-12 max-w-2xl mx-auto"
        >
          For this valentine's day. I decided to create a website to show how much you mean to me! Mwah mwah
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => onNavigate('carousel')}
            className="group bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <Heart className="w-5 h-5 fill-white" />
            Our Pictures Together!!
          </button>

          <button
            onClick={() => onNavigate('quiz')}
            className="group bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Mini quiz about our relationship! (dili ni graded)
          </button>

          <button
            onClick={() => onNavigate('letter')}
            className="group bg-gradient-to-r from-red-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Love Letter
          </button>
        </motion.div>
      </div>
    </div>
  );
}
