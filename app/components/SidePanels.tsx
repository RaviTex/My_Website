'use client';

import { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useNavigation, NavDirection } from '../context/NavigationContext';

const MAX_SKEW = 7;
const calcSkewLeft  = (i: number, n: number, max: number) => -((i - (n-1)/2) * (max / (n/2 || 1)));
const calcSkewRight = (i: number, n: number, max: number) =>  ((i - (n-1)/2) * (max / (n/2 || 1)));

interface NavLinkDef {
  label: string;
  href: string;
  dir: NavDirection;
  isBack?: boolean;
}

function LeftNavItem({ item, index, total }: { item: NavLinkDef; index: number; total: number }) {
  const { navigate } = useNavigation();
  const skew = calcSkewLeft(index, total, MAX_SKEW);
  
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 15, mass: 0.1 });
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current) return;
    const { left, top, width, height } = innerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    pointerX.set((e.clientX - centerX) * 0.3);
    pointerY.set((e.clientY - centerY) * 0.3);
  };

  return (
    <motion.div
      onClick={() => navigate(item.href, item.dir)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0, skewY: skew, transition: { delay: 0.2 + index * 0.1, duration: 0.55, ease: 'easeOut' } }}
      exit={{ opacity: 0, x: -20, transition: { duration: 0.15 } }}
      whileHover={{ scale: 1.05, skewY: skew, textShadow: '0 0 15px rgba(100, 255, 218, 0.7), 0 0 30px rgba(100, 255, 218, 0.4)', transition: { duration: 0.3 } }}
      className="group flex items-center justify-start gap-4 w-full text-[17px] font-light tracking-wide py-5 px-8 mb-2 text-slate-300 transition-colors duration-300 cursor-pointer hover:text-white"
    >
      <motion.div style={{ x: springX, y: springY, z: 1 }} className="flex items-center gap-4" ref={innerRef}>
        {item.isBack ? (
          <motion.span
            className="text-slate-500 group-hover:text-[#64ffda] text-lg leading-none inline-flex items-center transform -translate-y-[2px]"
            variants={{ hover: { x: -4, transition: { duration: 0.3 } } }}
          >‹</motion.span>
        ) : (
          <span className="text-[#64ffda]/80 font-mono text-[14px] tracking-normal leading-none inline-flex items-center transform -translate-y-[1px]">
            0{index + 1}.
          </span>
        )}
        <span className="relative z-10 leading-none">{item.label}</span>
      </motion.div>
    </motion.div>
  );
}

function RightNavItem({ item, index, total }: { item: NavLinkDef; index: number; total: number }) {
  const { navigate } = useNavigation();
  const skew = calcSkewRight(index, total, MAX_SKEW * 0.6);
  
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 15, mass: 0.1 });
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current) return;
    const { left, top, width, height } = innerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    pointerX.set((e.clientX - centerX) * 0.3);
    pointerY.set((e.clientY - centerY) * 0.3);
  };

  return (
    <motion.div
      onClick={() => navigate(item.href, item.dir)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, skewY: skew, transition: { delay: 0.8 + index * 0.15, duration: 0.6, ease: 'easeOut' } }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.15 } }}
      whileHover={{ scale: 1.05, skewY: skew, textShadow: '0 0 15px rgba(100, 255, 218, 0.7), 0 0 30px rgba(100, 255, 218, 0.4)', transition: { duration: 0.3 } }}
      className="group flex items-center justify-start gap-4 w-full text-[17px] font-light tracking-wide py-5 px-8 mb-2 text-slate-300 transition-colors duration-300 cursor-pointer hover:text-white"
    >
      <motion.div style={{ x: springX, y: springY, z: 1 }} className="flex items-center gap-4" ref={innerRef}>
        <span className="relative z-10 leading-none">{item.label}</span>
        <motion.span
          className="text-slate-500 group-hover:text-[#64ffda] text-lg leading-none inline-flex items-center transform -translate-y-[2px]"
          variants={{ hover: { x: 4, transition: { duration: 0.3 } } }}
        >›</motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function SidePanels() {
  const pathname = usePathname();

  const leftItems: NavLinkDef[] = [
    { label: 'About',      href: '/about', dir: 'left' },
    { label: 'Experience', href: '/experience', dir: 'left' },
    { label: 'Games',      href: '/games', dir: 'left' },
    { label: 'Contact',    href: '/contact', dir: 'left' },
  ];
  
  const rightItems: NavLinkDef[] = [
    { label: 'Play Beaver Delivery', href: '/games/beaver',     dir: 'right' },
    { label: 'Play Web Them All',    href: '/games/webthemall', dir: 'right' },
  ];

  return (
    <>
      {/* Left glass panel background */}
      <div
        className="hidden lg:block absolute left-0 z-[5] pointer-events-none rounded-r-[36px] opacity-100"
        style={{
          top: '15%', bottom: '15%', width: '360px',
          background: 'linear-gradient(to right, rgba(28, 35, 50, 0.45), rgba(40, 50, 75, 0.10))',
          borderRight: '1px solid rgba(100, 255, 218, 0.04)',
          transform: 'perspective(1000px) rotateY(25deg)',
          transformOrigin: 'left center',
        }}
      />

      {/* Right glass panel background */}
      <div
        className="hidden xl:block absolute right-0 z-[5] pointer-events-none rounded-l-[36px] opacity-100"
        style={{
          top: '15%', bottom: '15%', width: '460px',
          background: 'linear-gradient(to left, rgba(28, 35, 50, 0.45), rgba(40, 50, 75, 0.10))',
          borderLeft: '1px solid rgba(100, 255, 218, 0.04)',
          transform: 'perspective(1000px) rotateY(-25deg)',
          transformOrigin: 'right center',
        }}
      />

      {/* Left nav items */}
      <div
        className="hidden lg:flex flex-col justify-center px-10 xl:px-16 absolute left-0 top-0 bottom-0 z-30 pointer-events-auto"
        style={{ width: '400px' }}
      >
        <div className="flex flex-col">
          {leftItems.map((item, i) => (
            <LeftNavItem key={item.label} item={item} index={i} total={leftItems.length} />
          ))}
        </div>
      </div>

      {/* Right nav items */}
      <div
        className="hidden xl:flex flex-col justify-center px-10 xl:px-16 absolute right-0 top-0 bottom-0 z-30 pointer-events-auto"
        style={{ width: '400px' }}
      >
        <div className="flex flex-col">
          {rightItems.map((item, i) => (
            <RightNavItem key={item.label} item={item} index={i} total={rightItems.length} />
          ))}
        </div>
      </div>
    </>
  );
}
