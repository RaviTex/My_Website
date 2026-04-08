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

export default function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center px-8 lg:px-16 py-16 max-w-2xl mx-auto w-full text-center justify-center min-h-full"
    >
      <motion.p variants={itemVariants} className="text-[#64ffda] font-mono text-[14px] mb-4 tracking-wider uppercase flex justify-center w-full">
        04. What&apos;s Next?
      </motion.p>
      
      <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
        Get In Touch
      </motion.h1>

      <motion.p variants={itemVariants} className="text-slate-400 text-base md:text-lg leading-relaxed mb-14 font-light text-center">
        I am currently looking for inspiring opportunities to explore novel creation and develop my skills further. Whether you have a question or just want to say hi, I&apos;ll get back to you!
      </motion.p>

      <motion.div variants={itemVariants} className="w-full flex flex-col gap-6 max-w-2xl">
        
        {/* Tier 1: Primary Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Email */}
          <a 
            href="mailto:raphi.platzer@outlook.com"
            className="flex items-center justify-between p-6 rounded-2xl border border-[#64ffda]/40 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300 group shadow-[0_0_15px_rgba(100,255,218,0.1)] hover:shadow-[0_0_25px_rgba(100,255,218,0.2)]"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-[#64ffda] font-mono uppercase tracking-widest flex items-center gap-2">
                 Email <span className="opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300">→</span>
              </span>
              <span className="text-white font-medium text-lg tracking-wide">raphi.platzer@outlook.com</span>
            </div>
            <svg className="w-8 h-8 text-[#64ffda]/80 group-hover:text-[#64ffda] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>

          {/* Download Resume */}
          <a 
            href="/Platzer_CV_English.pdf"
            download
            className="flex items-center justify-between p-6 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-slate-400 group-hover:text-white font-mono uppercase tracking-widest transition-colors">Resume</span>
              <span className="text-white font-medium text-lg tracking-wide">Download CV</span>
            </div>
            <svg className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </a>
        </div>

        {/* Tier 2: Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Phone */}
          <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Phone</span>
              <span className="text-slate-300">+43 664 754 858 24</span>
            </div>
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Location</span>
              <span className="text-slate-300 text-left">St. Andrä am Zicksee</span>
            </div>
            <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </div>

        {/* Tier 3: Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {/* Discord */}
          <a 
            href="https://discordapp.com/users/sup_shmaster"
            target="_blank" rel="noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 transition-colors group text-indigo-400 hover:border-indigo-400 gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
            <span className="font-mono text-sm tracking-wider">Discord</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/RaviTex"
            target="_blank" rel="noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 transition-colors group text-slate-300 hover:border-white gap-3"
          >
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span className="font-mono text-sm tracking-wider">GitHub</span>
          </a>

          {/* Itch.io */}
          <a 
            href="https://shmaster.itch.io/"
            target="_blank" rel="noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 transition-colors group text-[#fa5c5c] hover:border-[#fa5c5c] gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.242 2.503L2.247 9.878l.498 1.745c.873 0 1.62-.25 2.119-.873.374.5 1.121.873 1.994.873s1.62-.374 1.995-.873c.374.5 1.121.873 1.994.873s1.62-.374 1.994-.873c.374.5 1.122.873 1.995.873.872 0 1.496-.374 1.994-.873.499.623 1.246.873 2.12.873l.498-1.745L18.441 2.503H3.242zm0 11.218v5.858h15.199v-5.858H3.242z" transform="translate(1.08, 0.93) scale(0.9)"/>
            </svg>
            <span className="font-mono text-sm tracking-wider">Itch.io</span>
          </a>
        </div>

      </motion.div>
    </motion.div>
  );
}
