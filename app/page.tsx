'use client';

import { motion } from "framer-motion";
import { useNavigation } from "./context/NavigationContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start px-8 lg:px-16 py-16 max-w-2xl mx-auto w-full text-left justify-center min-h-full"
    >
      <motion.p variants={itemVariants} className="text-[#64ffda] font-mono text-[15px] mb-5 tracking-wide">
        Hi, my name is
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-3 leading-none"
        style={{ textShadow: '0 0 30px rgba(255,255,255,0.15), 0 2px 10px rgba(0,0,0,0.8)' }}
      >
        Raphael Platzer.
      </motion.h1>

      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-400 mb-7 tracking-tight leading-tight">
        I build interactive systems.
      </motion.h2>

      <motion.p variants={itemVariants} className="text-slate-400 max-w-[500px] text-[16px] leading-relaxed mb-10 font-light">
        Game developer and systems engineer focused on real-time interaction, ML systems, and technical architecture.
      </motion.p>

      <motion.div variants={itemVariants}>
        <button
          onClick={() => navigate('/games', 'right')}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#64ffda]/30 bg-[#64ffda]/5 hover:bg-[#64ffda]/10 hover:border-[#64ffda] text-[#64ffda] font-mono text-[14px] transition-all duration-300 group tracking-wide shadow-[0_0_15px_rgba(100,255,218,0.1)] hover:shadow-[0_0_25px_rgba(100,255,218,0.2)]"
        >
          View My Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
