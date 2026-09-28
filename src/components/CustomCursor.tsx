import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const checkPointer = () => {
      const match = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setIsDesktop(match);
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        setIsPointer(!!interactive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', checkPointer);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isDesktop || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 border border-blue-400/50 bg-blue-500/10 ${
            isPointer ? 'w-10 h-10 scale-125 bg-blue-500/20 border-cyan-400' : 'w-7 h-7'
          }`}
        />
      </div>

      {/* Center sharp dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
      </div>
    </>
  );
};
