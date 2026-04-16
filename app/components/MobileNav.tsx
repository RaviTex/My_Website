'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation, NavDirection } from '../context/NavigationContext';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useNavigation();

  const handleNav = (href: string, dir: NavDirection) => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(href, dir);
    }, 200);
  };

  const navItems = [
    { label: 'About', href: '/about', dir: 'left' as NavDirection },
    { label: 'Experience', href: '/experience', dir: 'left' as NavDirection },
    { label: 'Games', href: '/games', dir: 'left' as NavDirection },
    { label: 'Contact', href: '/contact', dir: 'left' as NavDirection },
  ];

  return (
    <div className="lg:hidden absolute top-4 right-4 z-[200]">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-3 bg-[#0a0f16]/80 backdrop-blur-md rounded-xl border border-[#64ffda]/30 shadow-[0_0_15px_rgba(100,255,218,0.1)] text-[#64ffda] relative active:scale-95 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[250] flex flex-col items-center justify-center p-4"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 22, 0.98) 0%, rgba(10, 11, 16, 0.98) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Inner accent glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.05) 0%, transparent 70%)' }} />

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-white active:scale-95 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center gap-8 w-full max-w-sm relative"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.4, ease: 'easeOut' }}
                  onClick={() => handleNav(item.href, item.dir)}
                  className="w-full text-3xl md:text-4xl font-bold text-slate-300 relative py-4 active:scale-95 transition-transform flex justify-center items-center"
                >
                  <span className="absolute left-0 text-[#64ffda]/40 font-mono text-sm tracking-widest">{`0${index + 1}.`}</span>
                  <span className="tracking-wide">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
