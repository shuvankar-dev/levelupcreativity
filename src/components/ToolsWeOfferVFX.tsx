import { useCallback, useEffect, useRef, useState } from "react";
import './CSS/ToolsWeOfferVFX.css';

// Import tool images
import mayaLogo from '../assets/ToolWeOfferVfx/maya.png';
import nukeLogo from '../assets/ToolWeOfferVfx/nuke.png';
import blenderLogo from '../assets/ToolWeOfferVfx/Blender.png';
import mochaLogo from '../assets/ToolWeOfferVfx/Mocha.png';
import substanceLogo from '../assets/ToolWeOfferVfx/Substance 3D Painter.png';
import unrealLogo from '../assets/ToolWeOfferVfx/Unreal Engine.png';
import zbrushLogo from '../assets/ToolWeOfferVfx/ZBrush.png';

interface ToolItem {
  name: string;
  icon: string;
  color: string;
}

const tools: ToolItem[] = [
  { name: "Maya", icon: mayaLogo, color: "hsl(180, 70%, 50%)" },
  { name: "Nuke", icon: nukeLogo, color: "hsl(45, 80%, 55%)" },
  { name: "Blender", icon: blenderLogo, color: "hsl(25, 90%, 55%)" },
  { name: "Mocha", icon: mochaLogo, color: "hsl(200, 70%, 55%)" },
  { name: "Substance 3D Painter", icon: substanceLogo, color: "hsl(120, 60%, 50%)" },
  { name: "ZBrush", icon: zbrushLogo, color: "hsl(200, 70%, 55%)" },
  { name: "Unreal Engine", icon: unrealLogo, color: "hsl(0, 0%, 70%)" },
];

const VISIBLE_COUNT = 7;
const ARC_SPAN = Math.PI;
const INACTIVE_SIZE = 152;
const ACTIVE_SIZE = 300; // Reduced from 360 to make center tool smaller
const RADIUS = 420; // Increased to prevent overlap with center tool

export default function ToolsWeOfferVFX() {
  const [displayRotation, setDisplayRotation] = useState(0);
  const animFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const scrollCooldown = useRef(false);
  const activeIndexRef = useRef(0);
  const stepAngle = ARC_SPAN / (VISIBLE_COUNT - 1);
  const targetRotation = useRef(0);

  const animate = useCallback(() => {
    setDisplayRotation((prev) => {
      const diff = targetRotation.current - prev;
      if (Math.abs(diff) < 0.002) {
        isAnimating.current = false;
        return targetRotation.current;
      }
      isAnimating.current = true;
      animFrameRef.current = requestAnimationFrame(animate);
      return prev + diff * 0.1;
    });
  }, []);

  const goToNext = useCallback(
    (direction: 1 | -1) => {
      if (scrollCooldown.current) return;
      
      scrollCooldown.current = true;
      activeIndexRef.current += direction;
      targetRotation.current = activeIndexRef.current * stepAngle;
      if (!isAnimating.current) {
        isAnimating.current = true;
        animFrameRef.current = requestAnimationFrame(animate);
      }
      setTimeout(() => {
        scrollCooldown.current = false;
      }, 400);
    },
    [stepAngle, animate]
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Prevent wheel scrolling to avoid scrolling to components below
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleWheel]);

  // Touch support - disabled to prevent scrolling to components below
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
    },
    []
  );

  const getItemsToRender = () => {
    const items: { tool: ToolItem; angle: number; key: number }[] = [];
    const totalTools = tools.length;
    
    // Create infinite loop by rendering multiple cycles of tools
    // This ensures there's always tools visible in the arc
    const cycles = 10; // Number of complete tool cycles to render
    const startIndex = Math.floor(activeIndexRef.current / totalTools) - cycles;
    const endIndex = Math.floor(activeIndexRef.current / totalTools) + cycles;
    
    for (let cycle = startIndex; cycle <= endIndex; cycle++) {
      for (let toolIdx = 0; toolIdx < totalTools; toolIdx++) {
        const i = cycle * totalTools + toolIdx;
        const angle = i * stepAngle - displayRotation;
        
        // Only render if within visible arc
        if (angle >= -0.5 && angle <= ARC_SPAN + 0.5) {
          items.push({ 
            tool: tools[toolIdx], 
            angle, 
            key: i 
          });
        }
      }
    }
    
    return items;
  };

  const centerAngle = ARC_SPAN / 2;

  return (
    <div
      ref={containerRef}
      className="tools-vfx-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <h2 className="tools-vfx-title">Tools We Offer</h2>
      <p className="tools-vfx-subtitle">
        Upgrade your skills with professional tools used across VFX industries.
      </p>

      <div
        className="tools-vfx-carousel"
        style={{
          width: RADIUS * 2 + ACTIVE_SIZE + 40,
          height: RADIUS + ACTIVE_SIZE + 20,
        }}
      >
        {getItemsToRender().map(({ tool, angle, key }) => {
          const x = Math.cos(Math.PI - angle) * RADIUS;
          const y = -Math.sin(Math.PI - angle) * RADIUS;
          const distFromCenter = Math.abs(angle - centerAngle);
          const isActive = distFromCenter < stepAngle * 0.35;
          const proximity = Math.max(0, 1 - distFromCenter / (ARC_SPAN / 2));
          const scale = isActive ? 1 : 0.7 + proximity * 0.2;
          const opacity = 0.4 + proximity * 0.6;
          const size = isActive ? ACTIVE_SIZE : INACTIVE_SIZE;
          
          // Calculate rotation based on position from center
          // Left side: positive rotation, Right side: negative rotation
          const rotationDeg = ((angle - centerAngle) / (ARC_SPAN / 2)) * 80; // Max 80deg at edges
          const tiltDeg = ((angle - centerAngle) / (ARC_SPAN / 2)) * 20;

          // Inner icon container sizes - reduced for smaller center tool
          const innerSize = isActive ? 200 : 120; // Reduced from 243.55
          const innerRadius = isActive ? 32 : 16; // Reduced from 40
          const outerRadius = isActive ? 40 : 24; // Reduced from 48

          return (
            <div
              key={key}
              className="tools-vfx-item"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(100% + ${y}px)`,
                transform: `translate(-50%, -50%) scale(${scale}) perspective(600px) rotateY(${tiltDeg}deg)`,
                opacity,
                zIndex: isActive ? 20 : Math.round(proximity * 10),
              }}
            >
              {/* Glow behind active card - Tighter glow to match Figma */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    width: 250,
                    height: 320,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'linear-gradient(180.06deg, rgba(108, 64, 238, 0.8) 0.05%, rgba(153, 118, 255, 0.8) 99.95%)',
                    mixBlendMode: 'screen',
                    filter: 'blur(20px)',
                    zIndex: -1,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Outer frosted card with rotation */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isActive ? 230 : size, // Reduced from 277
                  height: isActive ? 360 : size,
                  background: 'rgba(253, 253, 253, 0.2)',
                  borderRadius: outerRadius,
                  transform: isActive ? 'rotate(0deg)' : `rotate(${rotationDeg}deg)`,
                }}
              >
                {/* Inner dark icon container */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: innerSize,
                    height: innerSize,
                    background: 'linear-gradient(92.88deg, #27272A 1.31%, #18181B 95.65%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: innerRadius,
                  }}
                >
                  <img 
                    src={tool.icon} 
                    alt={tool.name}
                    style={{
                      width: isActive ? 130 : 80, // Reduced from 162.01
                      height: isActive ? 130 : 80,
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {isActive && (
                  <span
                    style={{
                      marginTop: 12,
                      fontSize: 36,
                      lineHeight: '24px',
                      color: '#FFFFFF',
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: 'center',
                      fontWeight: 400,
                    }}
                  >
                    {tool.name}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="tools-vfx-hint">Use arrow buttons to explore tools</p>
      
      {/* Navigation Buttons */}
      <div className="tools-vfx-nav-buttons">
        <button 
          className="tools-vfx-nav-btn tools-vfx-nav-left"
          onClick={() => goToNext(-1)}
          aria-label="Previous tool"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="tools-vfx-nav-btn tools-vfx-nav-right"
          onClick={() => goToNext(1)}
          aria-label="Next tool"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
