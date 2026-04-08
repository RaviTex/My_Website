'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export type NavDirection = 'left' | 'right' | 'none';

interface NavContextType {
  direction: NavDirection;
  navigate: (href: string, dir: NavDirection) => void;
}

const NavigationContext = createContext<NavContextType>({
  direction: 'none',
  navigate: () => {},
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<NavDirection>('none');
  const router = useRouter();

  const navigate = useCallback((href: string, dir: NavDirection) => {
    setDirection(dir);
    router.push(href);
  }, [router]);

  return (
    <NavigationContext.Provider value={{ direction, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
