'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FloatingDualIcons() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const rotateLeft = Math.sin(scrollY * 0.006) * 1.2;
  const rotateRight = Math.sin(scrollY * 0.006 + Math.PI) * 1.2;

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
    
      <div
        className="
          absolute top-1/2 
          left-2 sm:left-3 md:left-6 lg:left-12
          w-14 h-16 sm:w-16 sm:h-18 md:w-20 md:h-24 lg:w-24 lg:h-28
          -translate-y-1/2
        "
        style={{
          transform: `translateY(-50%) rotate(${rotateLeft}deg)`, 
        }}
      >
        <div
          className="w-full h-full rounded-full shadow-lg border-2 border-white/30 overflow-hidden"
          style={{ clipPath: 'circle(50% at 50% 50%)' }}
        >
          <Image
            src="/images/illustrationgirl2.png"
            alt=""
            width={120}
            height={120}
            className="w-full h-full object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

    
      <div
        className="
          absolute top-1/2 
          right-2 sm:right-3 md:right-6 lg:right-12
          w-14 h-16 sm:w-16 sm:h-18 md:w-20 md:h-24 lg:w-24 lg:h-28
          -translate-y-1/2
        "
        style={{
          transform: `translateY(-50%) rotate(${rotateRight}deg)`, 
        }}
      >
        <div
          className="w-full h-full rounded-full shadow-lg border-2 /30 overflow-hidden"
          style={{ clipPath: 'circle(50% at 50% 50%)' }}
        >
          <Image
            src="/images/illustration-man2.png"
            alt=""
            width={120}
            height={120}
            className="w-full h-full object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}