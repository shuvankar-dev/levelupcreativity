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
            <button className="cta-button cta-button-animate">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
