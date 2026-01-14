import './App.css';
import './components/CSS/hero.css';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
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
          } else {
            // Remove revealed class when scrolling out of view (for re-animation)
            entry.target.classList.remove('revealed');
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
      <Navbar />
      
      {/* Scroll Container */}
      <div className="scroll-transition-container">
        {/* Hero Section */}
        <div 
          className="scroll-hero-wrapper"
          style={{
            opacity: 1 - scrollProgress,
            transform: `scale(${1 - scrollProgress * 0.1})`,
            zIndex: scrollProgress < 0.5 ? 10 : 1,
            pointerEvents: scrollProgress > 0.8 ? 'none' : 'auto'
          }}
        >
          <section className="hero-section">
            <div className="hero-content">
              <div className="limited-spots-badge">
                <span>🔥</span>
                <span>Hurry, Limited Spots Left</span>
              </div>
              
              <h1 className="hero-title">
                Become a UI/UX and<br />
                VFX Animation Expert
              </h1>
              
              <p className="hero-subtitle">
                Become job-ready with real design projects, industry-standard processes.
              </p>
              
              <button className="enroll-button">
                Enroll Now
                <span>→</span>
              </button>
            </div>

            <div className="ellipse-animation">
              <div className="ellipse ellipse-27"></div>
              <div className="ellipse ellipse-23"></div>
              <div className="ellipse ellipse-24"></div>
              <div className="ellipse ellipse-25"></div>
              <div className="ellipse ellipse-26"></div>
              <div className="frame-582"></div>
            </div>
          </section>
        </div>

        {/* Video Section */}
        <div 
          className="scroll-video-wrapper"
          style={{
            transform: `translateY(${(1 - scrollProgress) * 100}%)`,
            zIndex: scrollProgress >= 0.5 ? 10 : 1
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
        <div className="scroll-reveal" style={{ transitionDelay: '0s' }}><Home /></div>
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
