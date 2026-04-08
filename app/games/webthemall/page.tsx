'use client';

export default function WebThemAllPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-full px-8 text-center min-h-full">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tighter uppercase">
        <span className="text-[#64ffda]/40">[</span> Web Them All <span className="text-[#64ffda]/40">]</span>
      </h1>
      <div className="w-full h-64 border border-dashed border-[#64ffda]/20 rounded-2xl flex items-center justify-center bg-[#0d0f16]/50 mb-8">
        <p className="text-[#64ffda] font-mono animate-pulse tracking-widest uppercase">Coming Soon</p>
      </div>
      <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">
        An upcoming web-based challenge that will push your systems knowledge to the limit. 
        Stay tuned for the official release.
      </p>
    </div>
  );
}
