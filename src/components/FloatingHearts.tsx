import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 20 + Math.random() * 30,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: '-50px',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            className="text-rose-300 fill-rose-300"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
