'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BeaverGame from '../components/BeaverGame';

export default function GamesPage() {
  const [isPlayingBeaver, setIsPlayingBeaver] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto h-full px-8 py-12 gap-24">
      {/* Introduction */}
      <div className="text-center w-full max-w-3xl pt-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white uppercase tracking-tighter break-words">
          Games
        </h1>
      </div>

      {/* Beaver Delivery Section */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 font-mono tracking-tighter text-center uppercase break-words">
          <span className="text-[#64ffda]/40">[</span> Beaver Delivery <span className="text-[#64ffda]/40">]</span>
        </h2>
        <BeaverGame />
      </div>

      {/* Web Them All Section */}
      <div className="w-full max-w-4xl flex flex-col items-center pb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-mono tracking-tighter uppercase text-center break-words">
          <span className="text-[#64ffda]/40">[</span> Web Them All <span className="text-[#64ffda]/40">]</span>
        </h2>
        <div className="w-full h-64 border border-dashed border-[#64ffda]/20 rounded-2xl flex items-center justify-center bg-[#0d0f16]/50 mb-8">
          <p className="text-[#64ffda] font-mono animate-pulse tracking-widest uppercase">Coming Soon</p>
        </div>
        <p className="text-slate-400 text-[15px] font-light leading-relaxed max-w-xl text-center">
          An upcoming web-based challenge that will push your systems knowledge to the limit. 
          Stay tuned for the official release.
        </p>
        
        <motion.div 
          whileHover={{ scale: 1.05, textShadow: '0 0 15px rgba(100, 255, 218, 0.7), 0 0 30px rgba(100, 255, 218, 0.4)' }}
          className="mt-6 text-[#64ffda] text-sm font-mono transition-all duration-300 flex items-center justify-center gap-2 cursor-not-allowed opacity-70"
        >
          Coming Soon! ↗
        </motion.div>
      </div>
    </div>
  );
}
