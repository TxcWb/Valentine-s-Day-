import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Letter() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4 flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 fill-rose-500" />
          A Letter From My Heart
          <Heart className="w-10 h-10 fill-rose-500" />
        </h2>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        {/* Floating hearts decoration */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-8 -right-8 z-10"
        >
          <Heart className="w-16 h-16 text-pink-400 fill-pink-400 opacity-60" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -top-4 -left-8 z-10"
        >
          <Sparkles className="w-12 h-12 text-rose-400 opacity-60" />
        </motion.div>

        <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-rose-200/50 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/50 to-transparent rounded-tl-full" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-right"
            >
              <p className="text-rose-600 italic font-serif text-lg">To my one and only...</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6 text-rose-800 font-serif text-lg md:text-xl leading-relaxed"
            >
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-rose-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                My Dearest Viea,
              </p>

              <p>
                I still cant believe na you've decided to date someone like me. I feel as if it was
                just yesterday when ga sulyap sulyap pako nimo sa cultural center. And now here we are, celebrating our love on this special day. I want you to know that every moment with you is a treasure, and I am so grateful to have you in my life.
              </p>

              <p>
                I love the way you laugh at my silly jokes (even if its so brainrotted), how you make ordinary days
                extraordinary, and how you see the best in me even when I can't see it myself.
                You are my sun and moon (sun and moon!?!??!?!), my calm in the storm, and my biggest adventure.
              </p>

              <p>
                Thank you for being patient with me even if bugal bugalon ko usahay,for loving
                me unconditionally. Thank you for the little things – the morning texts,
                the random hugs, our sponti trip together, I love every single one of it.
              </p>

              <p>
                This Valentine's Day, I want you to know that my love for you grows stronger
                with each passing day. You are not just my partner; you are my best friend,my real g
                my day one, and the lab of my life.
              </p>

              <p className="text-center font-bold text-2xl text-rose-600 py-4">
                ♥
                I love you more than words can express. ♥

              </p>

              <p>
                Here's to us, to our memories, to our dreams, and to our future together.
                Happy Valentine's Day, my beautiful viea!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-right"
            >
              <p className="text-2xl font-serif text-rose-600 mb-2">
                Forever Yours,
              </p>
              <div className="flex items-center justify-end gap-2">
                <p className="text-3xl font-bold text-rose-700 italic">
                  Jay
                </p>
                <Heart className="w-8 h-8 fill-rose-500 text-rose-500" />
              </div>
            </motion.div>

            {/* Decorative hearts at bottom */}
            <div className="flex justify-center gap-3 mt-8 pt-8 border-t-2 border-rose-200">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1 + i * 0.1,
                    type: "spring",
                  }}
                >
                  <Heart
                    className={`${i === 3 ? 'w-6 h-6' : 'w-4 h-4'
                      } fill-rose-400 text-rose-400`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 text-center"
      >
        <p className="text-xl text-rose-600 italic">
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
        </p>
      </motion.div>
    </div>
  );
}
