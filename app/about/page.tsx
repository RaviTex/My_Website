'use client';

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-full w-full p-4 py-24 sm:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="m-auto flex flex-col items-start p-8 sm:p-12 backdrop-blur bg-[#0A0B10]/50 border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] max-w-3xl w-full sm:w-auto text-left"
      >
      <motion.p variants={itemVariants} className="text-[#64ffda] font-mono text-[14px] mb-4 tracking-wider uppercase flex justify-center w-full">
        <motion.span 
          initial="hidden" 
          animate="visible" 
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } } }}
        >
          {"01. Hi, my name is".split("").map((c, i) => (
             <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
               {c === " " ? "\u00A0" : c}
             </motion.span>
          ))}
        </motion.span>
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-3 leading-none break-words"
        style={{ textShadow: '0 0 30px rgba(255,255,255,0.15), 0 2px 10px rgba(0,0,0,0.8)' }}
      >
        Raphael Platzer.
      </motion.h1>

      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 mb-7 tracking-tight leading-tight break-words">
        I build interactive systems.
      </motion.h2>

      <motion.div variants={itemVariants} className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 font-light max-w-2xl">
        <p className="mb-4">
          I am a passionate game developer who spends his free time following his fascination for software development across various fields.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full bg-slate-800/10 border border-slate-700/30 p-6 rounded-2xl mt-4">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center justify-center gap-3 border-b border-slate-700/50 pb-4 uppercase tracking-widest text-[#64ffda] font-mono">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center gap-4 p-5 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5 transition-colors group">
            <img src="/Logo_C_sharp.svg" alt="C#" className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-mono text-slate-400 group-hover:text-[#64ffda]">C#</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-5 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5 transition-colors group">
            <img src="/Python-logo-notext.svg" alt="Python" className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-mono text-slate-400 group-hover:text-[#64ffda]">Python</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-5 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5 transition-colors group">
            <img src="/Git-Icon-1788C.svg" alt="Git" className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-mono text-slate-400 group-hover:text-[#64ffda]">Git</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-5 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5 transition-colors group">
            <img src="/unity-game-engine-icon.svg" alt="Unity Engine" className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-mono text-slate-400 text-center group-hover:text-[#64ffda]">Unity<br/>Engine</span>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
}
