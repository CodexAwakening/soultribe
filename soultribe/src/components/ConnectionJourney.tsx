'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagnifyingGlass, ChatCircle, Phone, VideoCamera, Handshake, ShieldCheck, Heart } from '@phosphor-icons/react';

const steps = [
  {
    icon: MagnifyingGlass,
    title: 'Discover',
    description: 'Explore spiritual profiles matched to your essence and values',
    color: '#4A3F6B',
  },
  {
    icon: ChatCircle,
    title: 'Chat',
    description: 'Begin conversations that matter with guided prompts',
    color: '#7FB3A4',
  },
  {
    icon: Phone,
    title: 'Voice Call',
    description: 'Hear each other\'s energy and intentions',
    color: '#C4A55A',
  },
  {
    icon: VideoCamera,
    title: 'Video Call',
    description: 'Meet face to face in a safe, secure environment',
    color: '#4A3F6B',
  },
  {
    icon: Handshake,
    title: 'Friend Connection',
    description: 'Nurture a genuine bond through shared practice',
    color: '#7FB3A4',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Connection',
    description: 'Deepen with mutual commitment and authenticity',
    color: '#C4A55A',
  },
  {
    icon: Heart,
    title: 'Relationship',
    description: 'Discover if your paths merge in conscious partnership',
    color: '#4A3F6B',
  },
];

export default function ConnectionJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 sacred-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-handwritten text-xl text-[#C4A55A]">The Path Forward</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#2D2A3E] mt-2 mb-4">
            The Connection Journey
          </h2>
          <p className="text-[#6B6580] text-lg max-w-2xl mx-auto">
            Unlike superficial swiping, we guide you through meaningful stages of connection. 
            Each step builds trust, authenticity, and deeper understanding.
          </p>
        </motion.div>

        {/* Journey Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <svg className="absolute top-24 left-0 w-full h-4" preserveAspectRatio="none">
            <motion.path
              d="M 100 2 Q 200 2, 300 2 T 500 2 T 700 2 T 900 2 T 1100 2"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A3F6B" />
                <stop offset="50%" stopColor="#7FB3A4" />
                <stop offset="100%" stopColor="#C4A55A" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-7 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                {/* Step Circle */}
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon size={28} color="white" weight="fill" />
                  </div>
                  
                  {/* Connector Dot */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-20"
                    style={{ backgroundColor: step.color, boxShadow: `0 0 20px ${step.color}` }}
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-6">
                  <h3 className="font-display text-lg font-semibold text-[#2D2A3E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B6580] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="flex items-start gap-6"
            >
              {/* Step Circle */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={24} color="white" weight="fill" />
                </div>
                <div
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-14 left-1/2 w-0.5 h-8 bg-gradient-to-b" style={{
                    backgroundImage: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`
                  }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-display text-lg font-semibold text-[#2D2A3E] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6580]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="font-handwritten text-2xl text-[#4A3F6B]">
            "Every meaningful relationship begins with a single conscious step"
          </p>
        </motion.div>
      </div>
    </section>
  );
}