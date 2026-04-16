'use client';

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useNavigation, NavDirection } from '../context/NavigationContext';
import FrozenRoute from './FrozenRoute';

const variants = {
  enter: (dir: NavDirection) => ({
    x: dir === 'left' ? '-100%' : dir === 'right' ? '100%' : '0%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (dir: NavDirection) => ({
    x: dir === 'left' ? '100%' : dir === 'right' ? '-100%' : '0%',
    opacity: 0,
  }),
};

export default function CenterContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction } = useNavigation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 0.5 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]); 
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="flex-1 relative h-full flex items-center justify-center overflow-hidden" 
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.77, 0, 0.17, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full overflow-y-auto no-scrollbar"
          style={{ 
            transformStyle: 'preserve-3d', 
            transformOrigin: 'center center -500px',
            rotateX,
            rotateY 
          }}
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
