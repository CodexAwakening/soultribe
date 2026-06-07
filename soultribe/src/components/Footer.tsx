'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, InstagramLogo, TwitterLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react';

const footerLinks = {
  platform: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Connection Journey', href: '#journey' },
    { label: 'Community', href: '#community' },
    { label: 'Safety', href: '#safety' },
  ],
  resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Spiritual Resources', href: '#' },
    { label: 'Meditation Guides', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Mission', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Community Guidelines', href: '#' },
  ],
};

const socialLinks = [
  { icon: InstagramLogo, href: '#', label: 'Instagram' },
  { icon: TwitterLogo, href: '#', label: 'Twitter' },
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: YoutubeLogo, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#FAF8F5] pt-20 pb-8 relative overflow-hidden">
      {/* Decorative mandala */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#4A3F6B" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#4A3F6B" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#4A3F6B" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="#C4A55A" strokeWidth="1" />
          <polygon points="200,40 340,280 60,280" fill="none" stroke="#4A3F6B" strokeWidth="0.5" />
          <polygon points="200,360 60,120 340,120" fill="none" stroke="#4A3F6B" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#4A3F6B] to-[#3d3463] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4A55A]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-2">
                Join the SoulCircle
              </h3>
              <p className="text-white/70">
                Receive weekly inspiration, spiritual insights, and exclusive community updates.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C4A55A] transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#C4A55A] text-[#1A1625] rounded-full font-semibold hover:bg-[#d4b56a] transition-colors flex items-center gap-2"
              >
                {isSubmitted ? (
                  <span>Welcome ✨</span>
                ) : (
                  <>
                    Join <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="#4A3F6B" />
                  <circle cx="20" cy="20" r="8" fill="none" stroke="#C4A55A" strokeWidth="2" />
                  <circle cx="20" cy="14" r="3" fill="#C4A55A" />
                </svg>
              </div>
              <span className="font-display text-xl font-semibold text-[#4A3F6B]">
Soul Tribe
              </span>
            </a>
            <p className="text-[#6B6580] text-sm leading-relaxed mb-6">
              A sacred space for spiritual seekers to find authentic connection, 
              conscious relationships, and meaningful growth.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#4A3F6B]/10 flex items-center justify-center text-[#4A3F6B] hover:bg-[#4A3F6B] hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-[#2D2A3E] mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#6B6580] hover:text-[#4A3F6B] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#2D2A3E] mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#6B6580] hover:text-[#4A3F6B] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#2D2A3E] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#6B6580] hover:text-[#4A3F6B] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#2D2A3E] mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#6B6580] hover:text-[#4A3F6B] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A3F6B]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B6580] text-sm flex items-center gap-2">
            © 2025 SoulConnect. Made with 
            <Heart size={16} weight="fill" className="text-[#C4A55A]" />
            for spiritual seekers worldwide.
          </p>
          
          <p className="font-handwritten text-[#4A3F6B] text-lg">
            "We are all connected by the thread of consciousness"
          </p>
        </div>
      </div>
    </footer>
  );
}