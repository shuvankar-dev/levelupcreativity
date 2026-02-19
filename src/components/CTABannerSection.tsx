import React, { useRef, useEffect } from 'react';
import './CSS/CTABannerSection.css';

const CTABannerSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset video to start when component mounts
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, []);

  return (
    <section className="cta-banner-section">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="cta-banner-video-bg"
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
      <div className="cta-banner-video-overlay"></div>
      
      <div className="cta-banner-container">
        <div className="cta-banner-glow-bg"></div>
        <div className="cta-banner-content">
            <div className="cta-banner-tagline">
                <span className="cta-banner-tagline-text">Don't just design, build your site without code</span>
            </div>
            <h2 className="cta-banner-title">
                Build your own portfolio website without code
            </h2>
            <p className="cta-banner-subtitle">Get job ready, fast.</p>
            <button className="cta-banner-button">
                Talk to Career Counsellor
            </button>
            </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
