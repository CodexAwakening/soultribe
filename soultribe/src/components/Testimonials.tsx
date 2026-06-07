'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';

const testimonials = [
  {
    quote: "Finally an app where I can be myself. Found my meditation partner and closest friend here. The Connection Journey approach feels so much more authentic than swiping.",
    name: "Maya Chen",
    age: 34,
    path: "Mindfulness & Yoga",
    avatar: "MC",
    color: "#4A3F6B",
  },
  {
    quote: "The Connection Journey concept changed how I approach relationships. More intentional, more real. I've been on three spiritual retreats with people I met here.",
    name: "James Okonkwo",
    age: 41,
    path: "Vedic Philosophy",
    avatar: "JO",
    color: "#7FB3A4",
  },
  {
    quote: "As a yoga teacher, finding like-minded community felt impossible. SoulConnect changed that. I now have a study group exploring non-duality together.",
    name: "Priya Sharma",
    age: 28,
    path: "Yoga & Vedanta",
    avatar: "PS",
    color: "#C4A55A",
  },
  {
    quote: "I was skeptical of online connections, but the Spirit DNA Profile helped me find people who actually align with my values. Six months in, we've formed an accountability circle.",
    name: "Michael Torres",
    age: 38,
    path: "Buddhism",
    avatar: "MT",
    color: "#4A3F6B",
  },
  {
    quote: "The safety features and AI moderation make this space feel sacred. No harassment, no fake profiles. Just genuine souls on a journey together.",
    name: "Sarah Lindqvist",
    age: 32,
    path: "Sufism & Meditation",
    avatar: "SL",
    color: "#7FB3A4",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="community" className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F5] to-[#F5F0E8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#4A3F6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C4A55A]/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-handwritten text-xl text-[#C4A55A]">Voices from the Community</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#2D2A3E] mt-2 mb-4">
            Souls Who Found Their Path
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <Quotes size={48} className="text-[#4A3F6B]/20" weight="fill" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-10"
              style={{
                background: `radial-gradient(circle at top right, ${testimonials[current].color}, transparent 70%)`,
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg md:text-xl text-[#2D2A3E] leading-relaxed mb-8 text-center font-display italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: testimonials[current].color }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#2D2A3E]">{testimonials[current].name}</p>
                    <p className="text-sm text-[#6B6580]">
                      {testimonials[current].path} • Age {testimonials[current].age}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#4A3F6B] hover:bg-[#4A3F6B] hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'bg-[#4A3F6B] w-8'
                      : 'bg-[#4A3F6B]/30 hover:bg-[#4A3F6B]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#4A3F6B] hover:bg-[#4A3F6B] hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}