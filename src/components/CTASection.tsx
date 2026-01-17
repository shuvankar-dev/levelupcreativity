import React from 'react';
import './CSS/CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Animated Grid Background - Character and Mobile Shapes */}
        <div className="grid-background">
          {/* Left Side - Person/Character Shape */}
          <div className="grid-box grid-left character-shape">
            {/* Head */}
            <div className="grid-cell" style={{ left: '60px', top: '0px', opacity: 0.8 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '0px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '0px', opacity: 0.8 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '30px', opacity: 0.7 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '30px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '30px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '30px', opacity: 0.7 }}></div>
            
            <div className="grid-cell" style={{ left: '60px', top: '60px', opacity: 0.75 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '60px', opacity: 0.8 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '60px', opacity: 0.75 }}></div>
            
            {/* Shoulders/Upper Body */}
            <div className="grid-cell" style={{ left: '20px', top: '90px', opacity: 0.6 }}></div>
            <div className="grid-cell" style={{ left: '60px', top: '90px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '90px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '90px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '180px', top: '90px', opacity: 0.6 }}></div>
            
            {/* Arms and Torso */}
            <div className="grid-cell" style={{ left: '0px', top: '120px', opacity: 0.5 }}></div>
            <div className="grid-cell" style={{ left: '40px', top: '120px', opacity: 0.7 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '120px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '120px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '120px', opacity: 0.7 }}></div>
            <div className="grid-cell" style={{ left: '200px', top: '120px', opacity: 0.5 }}></div>
            
            <div className="grid-cell" style={{ left: '0px', top: '150px', opacity: 0.45 }}></div>
            <div className="grid-cell" style={{ left: '60px', top: '150px', opacity: 0.75 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '150px', opacity: 0.8 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '150px', opacity: 0.75 }}></div>
            <div className="grid-cell" style={{ left: '200px', top: '150px', opacity: 0.45 }}></div>
            
            {/* Lower Body */}
            <div className="grid-cell" style={{ left: '60px', top: '180px', opacity: 0.7 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '180px', opacity: 0.75 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '180px', opacity: 0.7 }}></div>
            
            <div className="grid-cell" style={{ left: '60px', top: '210px', opacity: 0.65 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '210px', opacity: 0.7 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '210px', opacity: 0.65 }}></div>
            
            {/* Legs */}
            <div className="grid-cell" style={{ left: '60px', top: '240px', opacity: 0.6 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '240px', opacity: 0.6 }}></div>
            
            <div className="grid-cell" style={{ left: '60px', top: '270px', opacity: 0.55 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '270px', opacity: 0.55 }}></div>
            
            <div className="grid-cell" style={{ left: '60px', top: '300px', opacity: 0.5 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '300px', opacity: 0.5 }}></div>
          </div>

          {/* Right Side - Mobile Phone Shape */}
          <div className="grid-box grid-right mobile-shape">
            {/* Top of phone */}
            <div className="grid-cell" style={{ left: '60px', top: '0px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '0px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '0px', opacity: 0.9 }}></div>
            
            {/* Phone body - vertical rectangle */}
            <div className="grid-cell" style={{ left: '40px', top: '30px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '30px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '30px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '30px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '60px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '60px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '60px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '60px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '90px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '90px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '90px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '90px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '120px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '120px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '120px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '120px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '150px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '150px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '150px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '150px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '180px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '180px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '180px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '180px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '210px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '210px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '210px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '210px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '240px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '240px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '240px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '240px', opacity: 0.85 }}></div>
            
            <div className="grid-cell" style={{ left: '40px', top: '270px', opacity: 0.85 }}></div>
            <div className="grid-cell" style={{ left: '80px', top: '270px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '120px', top: '270px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '160px', top: '270px', opacity: 0.85 }}></div>
            
            {/* Bottom of phone */}
            <div className="grid-cell" style={{ left: '60px', top: '300px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '100px', top: '300px', opacity: 0.9 }}></div>
            <div className="grid-cell" style={{ left: '140px', top: '300px', opacity: 0.9 }}></div>
          </div>
        </div>

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
