import React from 'react';
import './CSS/CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      {/* Video Background */}
      <video 
        className="cta-video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src="https://www.videobacks.net/static/preview/stock-video-free-3d-animation-stock-footage--4k-motion-graphics-stock-footage-visuals-digital-loop-download-royalty-free-hd-102044.mp4" 
          type="video/mp4" 
        />
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
