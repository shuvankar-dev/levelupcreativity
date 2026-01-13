import React from 'react';
import './CSS/CTABannerSection.css';

const CTABannerSection: React.FC = () => {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        <div className="cta-banner-glow-bg"></div>
        <div className="cta-banner-content">
            <div className="cta-banner-tagline">
                <span className="cta-banner-tagline-text">Build Solutions that change world</span>
            </div>
            <h2 className="cta-banner-title">
                Ready to Levelup Your Design
            </h2>
            <p className="cta-banner-subtitle">Get job ready, fast.</p>
            <button className="cta-banner-button">
                Register Now
            </button>
            </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
