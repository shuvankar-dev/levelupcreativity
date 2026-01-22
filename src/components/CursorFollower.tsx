import React, { useEffect, useRef } from 'react';
import './CSS/CursorFollower.css';

const CursorFollower: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    if (!cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation for dot with delay
    const animateDot = () => {
      // Smooth follow with delay (laggy effect)
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;

      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;

      requestAnimationFrame(animateDot);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    animateDot();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </>
  );
};

export default CursorFollower;
