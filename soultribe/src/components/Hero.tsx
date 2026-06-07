'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkle, Heart, Users } from '@phosphor-icons/react';

export default function Hero() {
  const handleScrollToJourney = () => {
    const target = document.querySelector('#journey');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5F0E8] to-[#EDE8E0]" />
      
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 sacred-pattern opacity-50" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A3F6B]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C4A55A]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#7FB3A4]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Floating Sacred Geometry */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#4A3F6B" strokeWidth="1" />
          <circle cx="60" cy="60" r="35" fill="none" stroke="#4A3F6B" strokeWidth="1" />
          <polygon points="60,20 90,75 30,75" fill="none" stroke="#C4A55A" strokeWidth="1.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#7FB3A4" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#7FB3A4" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#4A3F6B" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#4A3F6B" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 opacity-15"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <polygon points="40,5 75,65 5,65" fill="none" stroke="#C4A55A" strokeWidth="1" />
          <polygon points="40,20 60,55 20,55" fill="none" stroke="#4A3F6B" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A3F6B]/10 mb-8"
        >
          <Sparkle size={16} className="text-[#C4A55A]" weight="fill" />
          <span className="text-sm font-medium text-[#4A3F6B]">A New Way to Connect</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2D2A3E] mb-6 leading-tight"
        >
          Where Souls Connect
          <span className="block gradient-text">Beyond the Surface</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#6B6580] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Find your people. Find your purpose. 
          A sacred space for spiritual seekers to connect with authentic friends, conscious partners, and meditation buddies who walk the path with you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#pricing" className="btn-primary flex items-center gap-2">
            <Heart size={20} weight="fill" />
            Begin Your Journey
          </a>
          <a href="#journey" className="btn-secondary flex items-center gap-2">
            <Users size={20} />
            Explore the Path
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#6B6580]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7FB3A4]" />
            <span>Verified Members</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C4A55A]" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4A3F6B]" />
            <span>Zero Adult Content</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToJourney}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B6580] hover:text-[#4A3F6B] transition-colors cursor-pointer"
        aria-label="Scroll to learn more"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}