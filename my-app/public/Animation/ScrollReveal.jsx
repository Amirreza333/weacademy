// @/public/Animation/ScrollReveal.jsx
'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  baseOpacity = 0,
  enableBlur = false,
  baseRotation = 0,
  blurStrength = 5,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) rotate(0deg)';
          element.style.filter = 'blur(0px)';
          element.style.transition = 'all 1s ease-out';
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    element.style.opacity = String(baseOpacity);
    element.style.transform = `translateY(20px) rotate(${baseRotation}deg)`;
    element.style.filter = enableBlur ? `blur(${blurStrength}px)` : 'none';
    element.style.transition = 'none';

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [baseOpacity, enableBlur, baseRotation, blurStrength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}