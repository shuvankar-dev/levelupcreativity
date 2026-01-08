import React from 'react';
import './CSS/CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Animated Grid Background - Left Side */}
        <div className="grid-background">
          <div className="grid-box grid-left">
            {/* Grid cells with different opacities */}
            <div className="grid-cell" style={{ left: '332px', top: '220px', opacity: 0.41 }}></div>
            <div className="grid-cell" style={{ left: '288px', top: '220px', opacity: 0.01 }}></div>
            <div className="grid-cell" style={{ left: '244px', top: '220px', opacity: 0.87 }}></div>
            <div className="grid-cell" style={{ left: '200px', top: '220px', opacity: 0.55 }}></div>
            <div className="grid-cell" style={{ left: '156px', top: '220px', opacity: 0.6 }}></div>
            <div className="grid-cell" style={{ left: '68px', top: '220px', opacity: 0.71 }}></div>
            
            <div className="grid-cell" style={{ left: '332px', top: '176px', opacity: 0.63 }}></div>
            <div className="grid-cell" style={{ left: '288px', top: '176px', opacity: 0.43 }}></div>
            <div className="grid-cell" style={{ left: '156px', top: '176px', opacity: 0.34 }}></div>
            <div className="grid-cell" style={{ left: '112px', top: '176px', opacity: 0.03 }}></div>
            <div className="grid-cell" style={{ left: '68px', top: '176px', opacity: 0.12 }}></div>
            <div className="grid-cell" style={{ left: '24px', top: '176px', opacity: 0.75 }}></div>
            
            <div className="grid-cell" style={{ left: '200px', top: '132px', opacity: 0.97 }}></div>
            <div className="grid-cell" style={{ left: '156px', top: '132px', opacity: 0.8 }}></div>
            <div className="grid-cell" style={{ left: '112px', top: '132px', opacity: 0.38 }}></div>
            <div className="grid-cell" style={{ left: '68px', top: '132px', opacity: 0.01 }}></div>
            <div className="grid-cell" style={{ left: '24px', top: '132px', opacity: 0.92 }}></div>
            
            <div className="grid-cell" style={{ left: '200px', top: '88px', opacity: 0.18 }}></div>
            <div className="grid-cell" style={{ left: '156px', top: '88px', opacity: 0.16 }}></div>
            <div className="grid-cell" style={{ left: '112px', top: '88px', opacity: 0.13 }}></div>
            <div className="grid-cell" style={{ left: '68px', top: '88px', opacity: 0.11 }}></div>
            <div className="grid-cell" style={{ left: '24px', top: '88px', opacity: 0.61 }}></div>
            
            <div className="grid-cell" style={{ left: '244px', top: '44px', opacity: 0.12 }}></div>
            <div className="grid-cell" style={{ left: '200px', top: '44px', opacity: 0.03 }}></div>
            <div className="grid-cell" style={{ left: '156px', top: '44px', opacity: 0.28 }}></div>
            <div className="grid-cell" style={{ left: '112px', top: '44px', opacity: 0.61 }}></div>
            <div className="grid-cell" style={{ left: '68px', top: '44px', opacity: 0.54 }}></div>
            <div className="grid-cell" style={{ left: '24px', top: '44px', opacity: 0.63 }}></div>
            
            <div className="grid-cell" style={{ left: '332px', top: '0px', opacity: 0.42 }}></div>
            <div className="grid-cell" style={{ left: '288px', top: '0px', opacity: 0.06 }}></div>
            <div className="grid-cell" style={{ left: '244px', top: '0px', opacity: 0.93 }}></div>
            <div className="grid-cell" style={{ left: '200px', top: '0px', opacity: 0.15 }}></div>
            <div className="grid-cell" style={{ left: '156px', top: '0px', opacity: 0.73 }}></div>
            <div className="grid-cell" style={{ left: '68px', top: '0px', opacity: 0.28 }}></div>
          </div>

          {/* Grid cells - Right Side */}
          <div className="grid-box grid-right">
            <div className="grid-cell" style={{ left: '273px', top: '220px', opacity: 0.41 }}></div>
            <div className="grid-cell" style={{ left: '229px', top: '220px', opacity: 0.01 }}></div>
            <div className="grid-cell" style={{ left: '185px', top: '220px', opacity: 0.87 }}></div>
            <div className="grid-cell" style={{ left: '141px', top: '220px', opacity: 0.55 }}></div>
            <div className="grid-cell" style={{ left: '97px', top: '220px', opacity: 0.6 }}></div>
            <div className="grid-cell" style={{ left: '9px', top: '220px', opacity: 0.71 }}></div>
            
            <div className="grid-cell" style={{ left: '273px', top: '176px', opacity: 0.63 }}></div>
            <div className="grid-cell" style={{ left: '229px', top: '176px', opacity: 0.43 }}></div>
            <div className="grid-cell" style={{ left: '97px', top: '176px', opacity: 0.34 }}></div>
            <div className="grid-cell" style={{ left: '53px', top: '176px', opacity: 0.03 }}></div>
            <div className="grid-cell" style={{ left: '9px', top: '176px', opacity: 0.12 }}></div>
            
            <div className="grid-cell" style={{ left: '141px', top: '132px', opacity: 0.97 }}></div>
            <div className="grid-cell" style={{ left: '97px', top: '132px', opacity: 0.8 }}></div>
            <div className="grid-cell" style={{ left: '53px', top: '132px', opacity: 0.38 }}></div>
            <div className="grid-cell" style={{ left: '9px', top: '132px', opacity: 0.01 }}></div>
            
            <div className="grid-cell" style={{ left: '141px', top: '88px', opacity: 0.18 }}></div>
            <div className="grid-cell" style={{ left: '97px', top: '88px', opacity: 0.16 }}></div>
            <div className="grid-cell" style={{ left: '53px', top: '88px', opacity: 0.13 }}></div>
            <div className="grid-cell" style={{ left: '9px', top: '88px', opacity: 0.11 }}></div>
            
            <div className="grid-cell" style={{ left: '185px', top: '44px', opacity: 0.12 }}></div>
            <div className="grid-cell" style={{ left: '141px', top: '44px', opacity: 0.03 }}></div>
            <div className="grid-cell" style={{ left: '97px', top: '44px', opacity: 0.28 }}></div>
            <div className="grid-cell" style={{ left: '53px', top: '44px', opacity: 0.61 }}></div>
            <div className="grid-cell" style={{ left: '9px', top: '44px', opacity: 0.54 }}></div>
            
            <div className="grid-cell" style={{ left: '273px', top: '0px', opacity: 0.42 }}></div>
            <div className="grid-cell" style={{ left: '229px', top: '0px', opacity: 0.06 }}></div>
            <div className="grid-cell" style={{ left: '185px', top: '0px', opacity: 0.93 }}></div>
            <div className="grid-cell" style={{ left: '141px', top: '0px', opacity: 0.15 }}></div>
            <div className="grid-cell" style={{ left: '97px', top: '0px', opacity: 0.73 }}></div>
            <div className="grid-cell" style={{ left: '9px', top: '0px', opacity: 0.28 }}></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="cta-content">
          <div className="cta-text-container">
            <h2 className="cta-title">
              Not sure which course fits your goals?
            </h2>
            <button className="cta-button">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
