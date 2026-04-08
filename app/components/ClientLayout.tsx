'use client';

import { NavigationProvider } from '../context/NavigationContext';
import GalaxyCanvas from './GalaxyCanvas';
import SidePanels from './SidePanels';
import CenterContent from './CenterContent';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <main className="relative z-0 w-screen h-screen overflow-hidden bg-[#0A0B10] text-[#ccd6f6] font-sans">
        {/* Galaxy background — always visible, never animates away */}
        <div className="absolute inset-0 z-[-10]">
          <GalaxyCanvas />
        </div>

        {/* Side panels — always in DOM, update their content per route */}
        <SidePanels />

        {/* Three-column flex: spacer | animated center | spacer */}
        {/* Spacers reserve the panel widths so center content sits between panels */}
        <div className="absolute inset-0 flex">
          <div className="hidden lg:block w-[400px] shrink-0" />
          <CenterContent>{children}</CenterContent>
          <div className="hidden xl:block w-[400px] shrink-0" />
        </div>
      </main>
    </NavigationProvider>
  );
}
