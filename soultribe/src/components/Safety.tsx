'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, UserCircleCheck, EyeSlash, Flag, Scan, Lock, HandPalm } from '@phosphor-icons/react';

const safetyFeatures = [
  {
    icon: Scan,
    title: 'AI Content Moderation',
    description: 'Real-time detection of inappropriate content, nudity, harassment, and spam. Immediate removal with zero tolerance.',
    color: '#4A3F6B',
  },
  {
    icon: UserCircleCheck,
    title: 'Photo Verification',
    description: 'Selfie verification ensures members are genuine. Earn Verified and Trusted Member badges through validation.',
    color: '#7FB3A4',
  },
  {
    icon: HandPalm,
    title: 'Consent-Based Messaging',
    description: 'You choose who can message you: everyone, friends only, or premium members. Your boundaries are respected.',
    color: '#C4A55A',
  },
  {
    icon: EyeSlash,
    title: 'Screenshot Protection',
    description: 'Mobile screenshot warnings and optional blocking. Your private conversations stay private.',
    color: '#4A3F6B',
  },
  {
    icon: Flag,
    title: 'One-Click Reporting',
    description: 'Report users, block contacts, or mute conversations instantly. Our trust & safety team responds within hours.',
    color: '#7FB3A4',
  },
  {
    icon: Lock,
    title: 'Profile Visibility Control',
    description: 'Incognito mode, read receipt control, and customizable privacy settings. You control your digital presence.',
    color: '#C4A55A',
  },
];

export default function Safety() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="safety" className="py-24 lg:py-32 bg-[#1A1625] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 sacred-pattern opacity-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1625] via-[#2D2A3E] to-[#1A1625]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7FB3A4]/20 mb-6">
            <ShieldCheck size={20} className="text-[#7FB3A4]" weight="fill" />
            <span className="text-sm font-medium text-[#7FB3A4]">Your Safety is Sacred</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-2 mb-4">
            A Space Free From Noise
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We maintain a zero-tolerance policy for adult content, harassment, and superficiality. 
            This is a sanctuary — not a marketplace.
          </p>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}30` }}
              >
                <feature.icon size={24} style={{ color: feature.color }} weight="fill" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-white/10 rounded-full px-6 py-3">
            <ShieldCheck size={24} className="text-[#C4A55A]" weight="fill" />
            <span className="text-white font-medium">Community Guidelines & Trust Principles</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}