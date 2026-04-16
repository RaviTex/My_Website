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

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full p-4 sm:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start p-8 sm:p-12 backdrop-blur-md bg-[#0A0B10]/60 border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] max-w-3xl w-full sm:w-auto text-left"
      >
      <motion.p variants={itemVariants} className="text-[#64ffda] font-mono text-[14px] mb-4 tracking-wider uppercase flex justify-center w-full">
        03. My Journey
      </motion.p>
      
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-12" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
        Experience & Education
      </motion.h1>

      <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-[#64ffda] font-mono text-lg">01.</span> Work Experience
      </motion.h2>

      <div className="w-full relative pl-6 border-l border-[#64ffda]/20 mb-12 ml-2">
        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute -left-[31px] top-1.5 h-[13px] w-[13px] rounded-full border-2 border-[#64ffda] bg-[#0a192f] shadow-[0_0_10px_rgba(100,255,218,0.5)] group-hover:bg-[#64ffda] transition-colors" />
          <h3 className="text-xl font-semibold text-slate-200 group-hover:text-[#64ffda] transition-colors">Internship <span className="text-[#64ffda]">@ Liebherr Hausgeräte</span></h3>
          <p className="text-slate-400 font-mono text-sm mb-3 mt-1">Lienz | Aug 2024</p>
          <p className="text-slate-400 font-light leading-relaxed bg-slate-800/20 p-4 rounded-xl border border-slate-700/30">
            Development of a web application including backend and a SQL Database.
          </p>
        </motion.div>
      </div>

      <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-[#64ffda] font-mono text-lg">02.</span> Education
      </motion.h2>

      <div className="w-full relative pl-6 border-l border-slate-700/50 ml-2">
        <motion.div variants={itemVariants} className="relative mb-10 group">
          <div className="absolute -left-[31px] top-1.5 h-[13px] w-[13px] rounded-full border-2 border-[#64ffda] bg-[#0a192f] group-hover:bg-[#64ffda] transition-colors" />
          <h3 className="text-xl font-semibold text-slate-200">Higher Technical College (HTL) – Matura & Diploma</h3>
          <p className="text-[#64ffda] font-mono text-sm mb-3 mt-1">HTL Spengergasse. Vienna | Sep 2022 - Present</p>
          <p className="text-slate-400 font-light bg-slate-800/10 inline-block px-3 py-1.5 rounded-lg border border-slate-700/30">
            Specialization: <span className="text-slate-200">Game Design</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative mb-10 group">
          <div className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-500 bg-[#0a192f] group-hover:border-[#64ffda] transition-colors" />
          <h3 className="text-lg font-semibold text-slate-300">AHS Neusiedl/See</h3>
          <p className="text-slate-500 font-mono text-sm mb-2 mt-1">Sep 2018 - Jun 2022</p>
          <p className="text-slate-400 font-light bg-slate-800/10 inline-block px-3 py-1.5 rounded-lg border border-slate-700/30">
            Focus: <span className="text-slate-300">Robotics and Computer Science</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-500 bg-[#0a192f] group-hover:border-[#64ffda] transition-colors" />
          <h3 className="text-lg font-semibold text-slate-300">VHS St. Andrä/Zicksee</h3>
          <p className="text-slate-500 font-mono text-sm mt-1">Okt 2014 - Jun 2018</p>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
}
