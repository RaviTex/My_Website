'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BeaverGame() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative max-w-4xl max-h-[640px] aspect-[16/9] bg-[#0a0f16] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(100,255,218,0.08)] border border-[#64ffda]/20 flex items-center justify-center">
        {!isPlaying ? (
          <>
            {/* 
              TODO: Add a video named 'preview_video.webm' or 'preview_video.mp4' into your public folder.
              WebM is generally recommended for optimal looping size and quality on web.
            */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm pointer-events-none"
            >
              {/* <source src="/preview_video.webm" type="video/webm" /> */}
              {/* <source src="/preview_video.mp4" type="video/mp4" /> */}
            </video>
            
            <button
              onClick={() => setIsPlaying(true)}
              className="hidden lg:block px-10 py-5 rounded-2xl border border-[#64ffda]/40 bg-[#0a0f16]/60 backdrop-blur-md text-[#64ffda] uppercase font-mono text-lg tracking-widest hover:bg-[#64ffda]/15 hover:border-[#64ffda] hover:scale-105 transition-all duration-300 z-10 shadow-[0_0_30px_rgba(100,255,218,0.15)]"
            >
              Play
            </button>
          </>
        ) : (
          <iframe 
            frameBorder="0" 
            src="https://itch.io/embed-upload/16725175?color=0a0f16" 
            allowFullScreen
            className="absolute border-0 outline-none"
            style={{
              top: '-6px',
              left: '-6px',
              width: 'calc(100% + 12px)',
              height: 'calc(100% + 48px)'
            }}
          ></iframe>
        )}
      </div>
      
      <p className="mt-8 text-slate-400 text-center max-w-2xl text-[15px] leading-relaxed font-light">
        Navigate your log in this delivery simulation. Dodge rocks and deliver logs to prove you are the most efficient beaver in the forest.
      </p>
      
      <motion.a 
        href="https://shmaster.itch.io/beaver-delivery" 
        target="_blank" 
        rel="noreferrer" 
        whileHover={{ scale: 1.05, textShadow: '0 0 15px rgba(100, 255, 218, 0.7), 0 0 30px rgba(100, 255, 218, 0.4)' }}
        className="mt-6 text-[#64ffda] text-sm font-mono transition-all duration-300 flex items-center justify-center gap-2"
      >
        View Beaver Delivery on itch.io ↗
      </motion.a>
    </div>
  );
}
