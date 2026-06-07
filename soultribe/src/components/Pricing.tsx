'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkle, Crown, Heart } from '@phosphor-icons/react';

const tiers = [
  {
    id: 'free',
    name: 'Free',
    icon: Heart,
    price: 0,
    description: 'Begin your spiritual journey',
    features: [
      'Basic profile with 5 photos',
      'Direct text messaging',
      'Join public groups & forums',
      'Attend free events',
      'Photo & video uploads',
      'Search by country, language, age',
      'Spiritual interests matching',
      'Basic meditation partner search',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Sparkle,
    price: 12,
    description: 'Deepen your connections',
    features: [
      'Everything in Free',
      'Unlimited media uploads',
      'HD voice & video calls',
      'Group video rooms',
      'Advanced matching algorithm',
      'Incognito mode',
      'Read receipt control',
      'Personal cloud vault',
      'Priority visibility',
      'Smart Spirit DNA matching',
    ],
    cta: 'Begin Premium',
    highlight: true,
  },
  {
    id: 'vip',
    name: 'VIP',
    icon: Crown,
    price: 35,
    description: 'Unlock your full potential',
    features: [
      'Everything in Premium',
      'AI compatibility reports',
      'Relationship readiness assessment',
      'Guided conversation starters',
      'Retreat companion finder',
      'Exclusive live workshops',
      'Virtual retreat access',
      'Spiritual teacher Q&A',
      'Personal growth coaching',
      'Early access to new features',
    ],
    cta: 'Go VIP',
    highlight: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 sacred-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-handwritten text-xl text-[#C4A55A]">Invest in Your Growth</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#2D2A3E] mt-2 mb-4">
            Choose Your Path
          </h2>
          <p className="text-[#6B6580] text-lg max-w-2xl mx-auto mb-8">
            Every journey begins with a single step. Start free, upgrade when you're ready.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-[#FAF8F5] rounded-full p-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-white text-[#4A3F6B] shadow-md' : 'text-[#6B6580]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual ? 'bg-white text-[#4A3F6B] shadow-md' : 'text-[#6B6580]'
              }`}
            >
              Annual
              <span className="text-xs bg-[#7FB3A4] text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#4A3F6B] to-[#3d3463] text-white shadow-2xl scale-105'
                  : 'bg-[#FAF8F5] border border-[#4A3F6B]/10'
              }`}
            >
              {/* Popular Badge */}
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C4A55A] text-[#1A1625] text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    tier.highlight ? 'bg-white/20' : 'bg-[#4A3F6B]/10'
                  }`}
                >
                  <tier.icon
                    size={32}
                    weight="fill"
                    className={tier.highlight ? 'text-[#C4A55A]' : 'text-[#4A3F6B]'}
                  />
                </div>
                <h3 className={`font-display text-2xl font-semibold mb-2 ${tier.highlight ? '' : 'text-[#2D2A3E]'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlight ? 'text-white/80' : 'text-[#6B6580]'}`}>
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-[#2D2A3E]'}`}>
                    ${isAnnual ? Math.round(tier.price * 0.8) : tier.price}
                  </span>
                  <span className={`text-sm ${tier.highlight ? 'text-white/70' : 'text-[#6B6580]'}`}>
                    {tier.price === 0 ? '' : '/month'}
                  </span>
                </div>
                {isAnnual && tier.price > 0 && (
                  <p className={`text-xs mt-1 ${tier.highlight ? 'text-[#C4A55A]' : 'text-[#7FB3A4]'}`}>
                    ${Math.round(tier.price * 0.8 * 12)} billed annually
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={20}
                      weight="bold"
                      className={tier.highlight ? 'text-[#C4A55A] flex-shrink-0 mt-0.5' : 'text-[#7FB3A4] flex-shrink-0 mt-0.5'}
                    />
                    <span className={`text-sm ${tier.highlight ? 'text-white/90' : 'text-[#6B6580]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-[#C4A55A] text-[#1A1625] hover:bg-[#d4b56a] shadow-lg'
                    : 'bg-[#4A3F6B] text-white hover:bg-[#3d3463]'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#6B6580] text-sm">
            <span className="font-semibold text-[#4A3F6B]">30-day money-back guarantee</span> on all paid plans.
            No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}