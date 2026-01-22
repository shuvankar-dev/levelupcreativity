import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Home from './components/home';
import CTASection from './components/CTASection';
import ToolsSection from './components/ToolsSection';
import FreeCourseSection from './components/FreeCourseSection';
import PricingSection from './components/PricingSection';
import CurriculumSection from './components/CurriculumSection';
import PrerequisitesSection from './components/PrerequisitesSection';
import WhyLevelUpSection from './components/WhyLevelUpSection';
import ShortCoursesSection from './components/ShortCoursesSection';
import QASection from './components/QASection';
import CTABannerSection from './components/CTABannerSection';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 0.8;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal effect - runs after component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -250px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add revealed class when scrolling into view
            entry.target.classList.add('revealed');
            
            // Also reveal all text elements inside
            const textElements = entry.target.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label');
            textElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('text-revealed');
              }, index * 50); // Stagger text animations
            });
          } else {
            // Remove revealed class when scrolling out of view (for re-animation)
            entry.target.classList.remove('revealed');
            
            // Remove text revealed class
            const textElements = entry.target.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label');
            textElements.forEach(el => {
              el.classList.remove('text-revealed');
            });
          }
        });
      }, observerOptions);

      // Observe all sections and elements
      const sections = document.querySelectorAll('.scroll-reveal, .scroll-reveal-title, .scroll-reveal-content, .scroll-reveal-item');
      sections.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CursorFollower />
      <Navbar />
      
      {/* Scroll Container */}
      <div className="scroll-transition-container">
        {/* Hero Section */}
        <div 
          className="scroll-hero-wrapper"
          style={{
            opacity: 1 - scrollProgress,
            transform: `scale(${1 - scrollProgress * 0.1})`,
            pointerEvents: scrollProgress > 0.8 ? 'none' : 'auto'
          }}
        >
          <Hero />
        </div>

        {/* Video Section */}
        <div 
          className="scroll-video-wrapper"
          style={{
            transform: `translateY(${(1 - scrollProgress) * 100}%)`
          }}
        >
          <video
            className="scroll-background-video"
            src="/src/assets/vedio/landingpage_video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: '100vh' }}></div>

      {/* Main Content with Scroll Reveal */}
      <div className="main-content">
        <Home />
        <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}><CTASection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0s' }}><ToolsSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}><FreeCourseSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0s' }}><PricingSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}><CurriculumSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0s' }}><PrerequisitesSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}><WhyLevelUpSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0s' }}><ShortCoursesSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}><QASection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0s' }}><CTABannerSection /></div>
        <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}><Footer /></div>
      </div>
    </>
  );
}

export default App;
