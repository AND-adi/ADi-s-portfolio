import { useRef, useEffect } from 'react';

export default function useTilt(maxTilt = 12) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);

      const tiltX = ((x / rect.width) - 0.5) * maxTilt;
      const tiltY = ((y / rect.height) - 0.5) * maxTilt;

      // Transform preserves 3D and applies subtle lift and tilt
      el.style.transform = `perspective(800px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg) translateY(-5px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt]);

  return elementRef;
}
