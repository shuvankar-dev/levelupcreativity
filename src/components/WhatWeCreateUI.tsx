import React, { useEffect, useState, useRef } from 'react';
import './CSS/WhatWeCreateUI.css';
import create1 from '../assets/WhatYou\'llCreate/1.png';
import create2 from '../assets/WhatYou\'llCreate/2.png';
import create3 from '../assets/WhatYou\'llCreate/3.png';
import create4 from '../assets/WhatYou\'llCreate/4.png';
import create5 from '../assets/WhatYou\'llCreate/5.png';

const WhatWeCreateUI: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [headerTranslateY, setHeaderTranslateY] = useState(50);
  const [cardsOpacity, setCardsOpacity] = useState(0);
  const [cardsTranslateY, setCardsTranslateY] = useState(100);
  const [containerZIndex, setContainerZIndex] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrolledInto = Math.abs(sectionTop);

      // Calculate animation phases
      const phase1Duration = windowHeight * 0.3; // Header fade in
      const phase2Duration = windowHeight * 0.3; // Cards entry
      const phase2Start = phase1Duration;
      const scrollAnimationStart = phase2Start + phase2Duration;
      // Reserve last 1.5 viewports for card animation + exit
      const scrollAnimationEnd = sectionHeight - windowHeight - (windowHeight * 0.5);
      const scrollAnimationRange = Math.max(scrollAnimationEnd - scrollAnimationStart, windowHeight);
      const exitDuration = windowHeight * 0.3;

      // Calculate section visibility
      const hasExited = sectionTop < -(sectionHeight - windowHeight);
      const sectionInView = sectionTop <= 0 && !hasExited;
      setIsInView(sectionInView);

      if (sectionTop > 0) {
        // Section hasn't reached top - hide everything
        setHeaderOpacity(0);
        setHeaderTranslateY(50);
        setCardsOpacity(0);
        setCardsTranslateY(100);
        setScrollProgress(0);
        setContainerZIndex(1);
        return;
      }

      // Phase 1: Header fades in and moves up
      if (scrolledInto <= phase1Duration) {
        const progress = scrolledInto / phase1Duration;
        setHeaderOpacity(progress);
        setHeaderTranslateY(50 * (1 - progress));
        setCardsOpacity(0);
        setCardsTranslateY(100);
        setContainerZIndex(1);
      } 
      // Phase 2: Cards slide up and fade in
      else if (scrolledInto <= phase2Start + phase2Duration) {
        setHeaderOpacity(1);
        setHeaderTranslateY(0);
        const progress = (scrolledInto - phase2Start) / phase2Duration;
        setCardsOpacity(progress);
        setCardsTranslateY(100 * (1 - progress));
        setContainerZIndex(1);
      }
      // Phase 3: Everything visible, cards scroll animation
      else {
        setHeaderOpacity(1);
        setHeaderTranslateY(0);
        setCardsOpacity(1);
        setCardsTranslateY(0);
        setContainerZIndex(1);
      }

      // Calculate card scroll progress (after entry animations)
      let currentScrollProgress = 0;
      if (scrolledInto > scrollAnimationStart) {
        currentScrollProgress = (scrolledInto - scrollAnimationStart) / scrollAnimationRange;
        setScrollProgress(Math.min(Math.max(currentScrollProgress, 0), 1));
      } else {
        setScrollProgress(0);
      }

      // Fade out after all cards are done (when progress reaches 1)
      if (currentScrollProgress >= 1) {
        const exitStart = scrollAnimationStart + scrollAnimationRange;
        const exitProgress = (scrolledInto - exitStart) / exitDuration;
        const fadeOut = Math.max(0, 1 - exitProgress);
        setHeaderOpacity(fadeOut);
        setCardsOpacity(fadeOut);
        // Push container behind when fading out
        setContainerZIndex(fadeOut > 0.3 ? 1 : -1);
        
        // Hide completely when fully faded
        if (fadeOut <= 0) {
          setIsInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    { id: 1, image: create1, alt: 'Project 1' },
    { id: 2, image: create2, alt: 'Project 2' },
    { id: 3, image: create3, alt: 'Project 3' },
    { id: 4, image: create4, alt: 'Project 4' },
    { id: 5, image: create5, alt: 'Project 5' },
  ];

  const getCardStyle = (index: number): React.CSSProperties => {
    const totalCards = cards.length;
    const cardProgress = scrollProgress * (totalCards - 1);
    const activeCardIndex = Math.floor(cardProgress);
    const cardTransition = cardProgress - activeCardIndex;

    // Card has already passed - hidden
    if (index < activeCardIndex) {
      return {
        opacity: 0,
        transform: `scale(0.9)`,
        zIndex: index,
        pointerEvents: 'none',
      };
    }
    
    // Currently active card (shrinking and fading like hero section) - LOWER z-index
    if (index === activeCardIndex) {
      const opacity = 1 - cardTransition;
      const scale = 1 - cardTransition * 0.1; // Shrink by 10%
      
      return {
        opacity: opacity,
        transform: `scale(${scale})`,
        zIndex: 50, // Behind the next card
        pointerEvents: cardTransition > 0.8 ? 'none' : 'auto',
      };
    }
    
    // Next card (coming from below and scaling up) - HIGHEST z-index (on top/front)
    if (index === activeCardIndex + 1) {
      const translateY = (1 - cardTransition) * 100; // Start 100% below
      const scale = 0.85 + cardTransition * 0.15; // Scale from 0.85 to 1
      const borderRadius = (1 - cardTransition) * 30; // Reduce border radius
      
      return {
        opacity: 1, // Always fully visible
        transform: `translateY(${translateY}%) scale(${scale})`,
        borderRadius: `${64 + borderRadius}px`,
        zIndex: 100, // On top - comes from front
      };
    }
    
    // Last card - keep it visible and fully scaled
    if (index === totalCards - 1 && scrollProgress >= 0.8) {
      return {
        opacity: 1,
        transform: `translateY(0%) scale(1)`,
        zIndex: 100,
        pointerEvents: 'auto',
      };
    }
    
    // Cards further back in stack (waiting below) - Even lower z-index
    const stackPosition = index - activeCardIndex - 1;
    const translateY = 100 + stackPosition * 20;
    const scale = 0.85 - stackPosition * 0.02;
    
    return {
      opacity: 1, // Fully visible, not transparent
      transform: `translateY(${translateY}%) scale(${scale})`,
      zIndex: 100 + stackPosition, // Higher z-index for cards waiting
      pointerEvents: 'none',
    };
  };

  return (
    <section className="what-create-section" id="what-youll-create" ref={sectionRef}>
      <div 
        className="what-create-container"
        style={{
          display: isInView ? 'flex' : 'none',
          visibility: isInView ? 'visible' : 'hidden',
          pointerEvents: isInView ? 'auto' : 'none',
          zIndex: containerZIndex,
          opacity: Math.max(headerOpacity, cardsOpacity),
        }}
      >
        {/* Header */}
        <div 
          className="what-create-header"
          style={{
            opacity: headerOpacity,
            transform: `translateY(${headerTranslateY}px)`,
          }}
        >
          <h2 className="what-create-title">What You'll Create</h2>
          <p className="what-create-subtitle">Everything you need to start your creative journey</p>
        </div>

        {/* Stacked Cards Container */}
        <div 
          className="what-create-stack-wrapper"
          style={{
            opacity: cardsOpacity,
            transform: `translateY(${cardsTranslateY}px)`,
          }}
        >
          <div className="what-create-cards-stack">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="what-create-frame"
                style={getCardStyle(index)}
              >
                <div className="what-frame-inner">
                  <img src={card.image} alt={card.alt} className="what-frame-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreateUI;
