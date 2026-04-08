'use client';

import BeaverGame from '../../components/BeaverGame';

export default function BeaverPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto h-full px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-mono tracking-tighter text-center uppercase">
        <span className="text-[#64ffda]/40">[</span> Beaver Delivery <span className="text-[#64ffda]/40">]</span>
      </h1>
      <BeaverGame />
    </div>
  );
}
