import React, { useState, useRef, useEffect } from 'react';
import './CSS/shortcourses.css';

interface Course {
  mode: string;
  title: string;
  trustTagline: string;
  courseBrief: string;
  learnTime: string;
  numberOfLessons: string;
}

const ShortCoursesSection: React.FC = () => {
  const courses: Course[] = [
    {
      mode: "ONLINE",
      title: "FIGMA BASICS",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to Figma Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
    {
      mode: "ONLINE",
      title: "MAYA BASICS",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to Maya Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
    {
      mode: "ONLINE",
      title: "UX AUDIT",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to UX Audit Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
    {
      mode: "ONLINE",
      title: "BLENDER BASICS",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to Blender Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
    {
      mode: "ONLINE",
      title: "PHOTOSHOP BASICS",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to Photoshop Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Start with index 1 (second card)
  const hasScrolledToCenter = useRef(false);

  // Scroll to index 1 only when section comes into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasScrolledToCenter.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolledToCenter.current) {
            hasScrolledToCenter.current = true;
            setTimeout(() => {
              scrollToCard(1);
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Detect center card on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const cards = container.querySelectorAll('.short-course-card');
      
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        e.preventDefault();
        scrollToCard(activeIndex - 1);
      } else if (e.key === 'ArrowRight' && activeIndex < courses.length - 1) {
        e.preventDefault();
        scrollToCard(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, courses.length]);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.short-course-card');
    const targetCard = cards[index] as HTMLElement;
    
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <section className="short-courses-section">
      <div className="short-courses-header">
        <h2 className="short-courses-title">Short Courses We Offer</h2>
        <p className="short-courses-subtitle">
          Start your learning journey with our comprehensive mini course
        </p>
      </div>
      
      <div className="carousel-wrapper">
        <div ref={containerRef} className="carousel-track">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`short-course-card ${index === activeIndex ? 'active-card' : ''}`}
              onClick={() => scrollToCard(index)}
            >
              <div className="short-course-card-content">
                <div className="mode-badge">
                  <span className="mode-text">{course.mode}</span>
                </div>
                
                <h3 className="short-course-title">{course.title}</h3>
                
                <p className="trust-tagline">{course.trustTagline}</p>
                
                <p className="course-brief">{course.courseBrief}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 7V14L18 16" stroke="#EEEFF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="14" cy="14" r="9" stroke="#EEEFF2" strokeWidth="2"/>
                    </svg>
                    <span className="meta-text">{course.learnTime}</span>
                  </div>
                  
                  <div className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8L14 3L24 8L14 13L4 8Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 14L14 19L24 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 20L14 25L24 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="meta-text">{course.numberOfLessons}</span>
                  </div>
                </div>
                
                <button 
                  className="start-button"
                  disabled={index !== activeIndex}
                >
                  <div className="button-content">
                    <span className="button-text">Start</span>
                    <img 
                      src="/src/assets/ShortCoursesIcon/ArrowRight.png" 
                      alt="Arrow Right" 
                      className="button-icon"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortCoursesSection;