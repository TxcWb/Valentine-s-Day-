import { useState, useRef } from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { Quiz } from './components/Quiz';
import { Letter } from './components/Letter';
import { FloatingHearts } from './components/FloatingHearts';

export default function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const refs = {
      carousel: carouselRef,
      quiz: quizRef,
      letter: letterRef
    };
    refs[section as keyof typeof refs]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      <FloatingHearts />

      <Hero onNavigate={scrollToSection} />

      <div ref={carouselRef} className="min-h-screen flex items-center justify-center py-20 px-4">
        <Carousel />
      </div>

      <div ref={quizRef} className="min-h-screen flex items-center justify-center py-20 px-4">
        <Quiz />
      </div>

      <div ref={letterRef} className="min-h-screen flex items-center justify-center py-20 px-4">
        <Letter />
      </div>
    </div>
  );
}
