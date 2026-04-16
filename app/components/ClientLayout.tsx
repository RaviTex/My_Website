'use client';

import { NavigationProvider } from '../context/NavigationContext';
import GalaxyCanvas from './GalaxyCanvas';
import SidePanels from './SidePanels';
import CenterContent from './CenterContent';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function ClickRippleEffect() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <div key={ripple.id} className="absolute" style={{ left: ripple.x, top: ripple.y }}>
            {/* Outer expanding geometric ring */}
            <motion.div
              initial={{ opacity: 0.7, scale: 0, rotate: 0 }}
              animate={{ opacity: 0, scale: 3.5, rotate: 45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 border-2 border-[#64ffda] bg-transparent"
              style={{ width: 40, height: 40, boxShadow: "0 0 15px rgba(100, 255, 218, 0.4)" }}
            />
            {/* Inner quick flash ring */}
            <motion.div
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 1.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/20"
              style={{ width: 30, height: 30, boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
            />
            {/* Diamond target shape */}
            <motion.div
              initial={{ opacity: 0.5, scale: 0, rotate: 0 }}
              animate={{ opacity: 0, scale: 2.2, rotate: 90 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 border border-[#64ffda]/60"
              style={{ width: 60, height: 60 }}
            />
            {/* Subtle center dot */}
            <motion.div
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
              style={{ width: 6, height: 6, boxShadow: "0 0 10px #fff" }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <main className="relative z-0 w-screen h-screen overflow-hidden bg-[#0A0B10] text-[#ccd6f6] font-sans">
        <ClickRippleEffect />
        
        {/* Galaxy background — always visible, never animates away */}
        <div className="absolute inset-0 z-[-10]">
          <GalaxyCanvas />
        </div>

        {/* Side panels — always in DOM, update their content per route */}
        <SidePanels />

        {/* Three-column flex: spacer | animated center | spacer */}
        {/* Spacers reserve the panel widths so center content sits between panels */}
        <div className="absolute inset-0 flex">
          <div className="hidden lg:block w-[400px] shrink-0" />
          <CenterContent>{children}</CenterContent>
          <div className="hidden xl:block w-[400px] shrink-0" />
        </div>
      </main>
    </NavigationProvider>
  );
}
