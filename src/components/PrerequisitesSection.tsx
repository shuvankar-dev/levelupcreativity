import React from 'react';
import './CSS/PrerequisitesSection.css';
import CheckCircle from '../assets/PrerequisitesLogo/CheckCircle.png';
import Laptop from '../assets/PrerequisitesLogo/Laptop.png';
import WifiHigh from '../assets/PrerequisitesLogo/WifiHigh.png';
import Sparkle from '../assets/PrerequisitesLogo/Sparkle.png';
import Clock from '../assets/PrerequisitesLogo/Clock.png';
import LightbulbFilament from '../assets/PrerequisitesLogo/LightbulbFilament.png';

const PrerequisitesSection: React.FC = () => {
  const prerequisites = [
    {
      id: 1,
      title: 'No Prior Experience Required',
      description: 'Fully beginner-friendly courses designed to take you from zero to hero',
      icon: CheckCircle
    },
    {
      id: 2,
      title: 'Just Need a Laptop',
      description: 'Any modern laptop or desktop computer will work perfectly',
      icon: Laptop
    },
    {
      id: 3,
      title: 'Stable Internet Connection',
      description: 'Access course materials, live sessions, and community support online',
      icon: WifiHigh
    },
    {
      id: 4,
      title: 'Curiosity & Passion',
      description: 'Bring your enthusiasm to learn and explore creative possibilities',
      icon: Sparkle
    },
    {
      id: 5,
      title: 'Time Commitment',
      description: 'Dedicate 5-10 hours per week to practice and complete assignments',
      icon: Clock
    },
    {
      id: 6,
      title: 'Creative Mindset',
      description: 'Willingness to experiment, make mistakes, and grow through iteration',
      icon: LightbulbFilament
    }
  ];

  return (
    <section className="prerequisites-section">
      <div className="prerequisites-container">
        {/* Header */}
        <div className="prerequisites-header">
          <h2 className="prerequisites-title">Prerequisites For Students</h2>
          <p className="prerequisites-subtitle">
            Everything you need to start your creative journey with us
          </p>
        </div>

        {/* Prerequisites Grid */}
        <div className="prerequisites-grid">
          {prerequisites.map((item) => (
            <div key={item.id} className="prerequisite-card">
              <div className="prerequisite-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="prerequisite-title">{item.title}</h3>
              <p className="prerequisite-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrerequisitesSection;
