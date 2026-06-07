'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Heart, TreeEvergreen, Brain, Notebook, VideoCamera, ShieldCheck, Cloud, Sparkle } from '@phosphor-icons/react';

const categories = [
  { id: 'friendship', label: 'For Friendship', icon: Users },
  { id: 'relationships', label: 'For Relationships', icon: Heart },
  { id: 'community', label: 'For Community', icon: TreeEvergreen },
];

const features = {
  friendship: [
    {
      icon: Brain,
      title: 'Spiritual DNA Profile',
      description: 'Answer 100+ questions about your meditation style, beliefs, values, and lifestyle. Get compatibility scores for friendship, dating, and spiritual partnership.',
      color: '#4A3F6B',
    },
    {
      icon: Notebook,
      title: 'Soul Journal',
      description: 'A private reflection space within your profile. Write reflections, save images and videos, and optionally share entries with trusted connections.',
      color: '#7FB3A4',
    },
    {
      icon: Users,
      title: 'Meditation Partner Matching',
      description: 'Find daily meditation partners, accountability buddies, and breathwork companions. Schedule sessions together and grow in practice.',
      color: '#C4A55A',
    },
    {
      icon: Sparkle,
      title: 'Accountability Partners',
      description: 'Connect with spiritual seekers who share your goals. Support each other\'s growth through structured check-ins and progress tracking.',
      color: '#4A3F6B',
    },
  ],
  relationships: [
    {
      icon: Heart,
      title: 'Conscious Dating',
      description: 'Find partners who share your spiritual values, life goals, and relationship intentions. Move beyond surface attraction to meaningful connection.',
      color: '#C4A55A',
    },
    {
      icon: Sparkle,
      title: 'AI Compatibility Reports',
      description: 'Get detailed insights about relationship readiness, value alignment, and growth potential with your matches.',
      color: '#4A3F6B',
    },
    {
      icon: Brain,
      title: 'Guided Conversation Starters',
      description: 'Thoughtful prompts like "What spiritual experience changed your life?" to help you connect on a deeper level.',
      color: '#7FB3A4',
    },
    {
      icon: VideoCamera,
      title: 'Virtual Retreat Rooms',
      description: 'Experience immersive video gatherings with multiple sessions: main hall, breakout rooms, and group discussions.',
      color: '#C4A55A',
    },
  ],
  community: [
    {
      icon: TreeEvergreen,
      title: 'Sacred Circles',
      description: 'Join small private groups focused on mindfulness, yoga, Buddhism, Vedanta, non-duality, or conscious dating.',
      color: '#7FB3A4',
    },
    {
      icon: Sparkle,
      title: 'Spiritual Timeline',
      description: 'Share your growth journey: completed challenges, finished books, attended retreats, gratitude posts, and spiritual milestones.',
      color: '#4A3F6B',
    },
    {
      icon: Cloud,
      title: 'Retreat Marketplace',
      description: 'Discover spiritual retreats worldwide. Find retreat companions and connect with certified teachers and facilitators.',
      color: '#C4A55A',
    },
    {
      icon: ShieldCheck,
      title: 'Live Events & Workshops',
      description: 'Attend virtual workshops, spiritual teacher Q&As, and live events hosted by coaches, therapists, and community leaders.',
      color: '#7FB3A4',
    },
  ],
};

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('friendship');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F5] to-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-handwritten text-xl text-[#C4A55A]">What Awaits You</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#2D2A3E] mt-2 mb-4">
            Features Designed for Growth
          </h2>
          <p className="text-[#6B6580] text-lg max-w-2xl mx-auto">
            Every feature is thoughtfully crafted to foster authentic connection, 
            spiritual growth, and meaningful relationships.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#4A3F6B] text-white shadow-lg'
                  : 'bg-white text-[#4A3F6B] hover:bg-[#4A3F6B]/10 border border-[#4A3F6B]/20'
              }`}
            >
              <category.icon size={20} weight={activeCategory === category.id ? 'fill' : 'regular'} />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features[activeCategory as keyof typeof features].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="card-hover bg-white rounded-2xl p-8 border border-[#4A3F6B]/10 group"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={28} style={{ color: feature.color }} weight="fill" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-[#2D2A3E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6B6580] leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}