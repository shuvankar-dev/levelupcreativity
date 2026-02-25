import React, { useRef, useEffect } from 'react';
import './CSS/CTABannerForCourses.css';

interface CTABannerForCoursesProps {
  variant?: 'career' | 'portfolio';
  courseName?: 'UI/UX' | 'VFX';
}

const CTABannerForCourses: React.FC<CTABannerForCoursesProps> = ({ 
  variant = 'career',
  courseName = 'UI/UX' 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset video to start when component mounts
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, []);

  const getContent = () => {
    if (variant === 'portfolio') {
      return {
        badge: "Don't just design, build your site without code",
        title: 'Build your own portfolio website without code',
        subtitle: 'Get job ready, fast.',
        buttonText: 'Talk to Career Counsellor'
      };
    }
    
    // Career variant
    if (courseName === 'VFX') {
      return {
        badge: 'Master VFX & Animation',
        title: 'Ready to Levelup Your VFX Career',
        subtitle: 'Get industry-ready, fast.',
        buttonText: 'Enroll Now'
      };
    }
    return {
      badge: 'Master UI/UX Design',
      title: 'Ready to Levelup Your Design Career',
      subtitle: 'Get job-ready, fast.',
      buttonText: 'Enroll Now'
    };
  };

  const content = getContent();

  return (
    <section className="cta-course-banner-section">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="cta-course-banner-video-bg"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onError={(e) => console.error('CTABanner Video failed to load:', e)}
        onLoadedData={() => {
          console.log('CTABanner Video loaded successfully');
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
      >
        <source src="https://cdn.pixabay.com/video/2015/08/03/514-135736246_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="cta-course-banner-video-overlay"></div>
      
      <div className="cta-course-banner-container">
        <div className="cta-course-banner-glow-bg"></div>
        <div className="cta-course-banner-content">
          <div className={`cta-course-banner-tagline ${variant === 'portfolio' ? 'wide' : ''}`}>
            <span className="cta-course-banner-tagline-text">{content.badge}</span>
          </div>
          <div className="cta-course-banner-text-wrapper">
            <h2 className="cta-course-banner-title">{content.title}</h2>
            <p className="cta-course-banner-subtitle">{content.subtitle}</p>
          </div>
          <button className={`cta-course-banner-button ${variant === 'portfolio' ? 'wide' : ''}`}>
            {content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABannerForCourses;
