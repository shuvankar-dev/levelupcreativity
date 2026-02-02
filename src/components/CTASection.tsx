import React, { useRef, useEffect } from 'react';
import './CSS/CTASection.css';

const CTASection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset video to start when component mounts
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, []);

  return (
    <section className="cta-section">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="cta-video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onError={(e) => console.error('CTASection Video failed to load:', e)}
        onLoadedData={() => {
          console.log('CTASection Video loaded successfully');
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
      >
        <source src="https://cdn.pixabay.com/video/2015/08/03/514-135736246_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="cta-video-overlay"></div>
      
      <div className="cta-container">
        {/* Text Content */}
        <div className="cta-content">
          <div className="cta-text-container">
            <h2 className="cta-title cta-text-animate">
              Not sure which course fits your goals?
            </h2>
            <button 
              className="cta-button cta-button-animate"
              onClick={() => window.open('https://wa.me/919836841945?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20UI%2FUX%20and%20VFX%20courses.%20Can%20you%20provide%20more%20details%3F', '_blank')}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
