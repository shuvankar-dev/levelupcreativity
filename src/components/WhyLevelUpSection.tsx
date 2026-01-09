import React from 'react';
import './CSS/WhyLevelUpSection.css';
import whyLevelUpImage from '../assets/whylevelup.png';

// Import icons
import jobReadyIcon from '../assets/whylevelupicon/Job-Ready.png';
import learnFromExpertsIcon from '../assets/whylevelupicon/Experts.png';
import handsOnProjectIcon from '../assets/whylevelupicon/Hands-on Project.png';
import careerSupportIcon from '../assets/whylevelupicon/Career.png';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const WhyLevelUpSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: jobReadyIcon,
      title: 'Job-ready Skills',
      description: 'Practical training designed to match hiring needs.'
    },
    {
      icon: learnFromExpertsIcon,
      title: 'Learn From Experts',
      description: 'Real-world from industry pros with real-world experience.'
    },
    {
      icon: handsOnProjectIcon,
      title: 'Hands-on Project',
      description: 'Build real portfolio, not just theory.'
    },
    {
      icon: careerSupportIcon,
      title: 'Career Support',
      description: 'Mentorship guidance to land your dream role.'
    }
  ];

  return (
    <section className="whylevelup-section">
      <div className="whylevelup-container">
        {/* Header */}
        <div className="whylevelup-header">
          <h2 className="whylevelup-title">Why LevelUp</h2>
          <p className="whylevelup-subtitle">
            We are committed to helping you achieve your creative career goals and comprehensive courses
            and unparalleled support
          </p>
        </div>

        {/* Content Area: Image + Feature Cards */}
        <div className="whylevelup-content">
          {/* Left Side: Image */}
          <div className="whylevelup-image-container">
            <img 
              src={whyLevelUpImage} 
              alt="Why LevelUp" 
              className="whylevelup-image"
            />
          </div>

          {/* Right Side: Feature Cards */}
          <div className="whylevelup-features">
            {features.map((feature, index) => (
              <div key={index} className="whylevelup-feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLevelUpSection;
