import React from 'react';
import './CSS/UXDesignCourseMentor.css';

const UXDesignCourseMentor: React.FC = () => {
  return (
    <section className="ux-mentor-section">
      <div className="ux-mentor-container">
        {/* Header */}
        <div className="ux-mentor-header">
          <h2 className="ux-mentor-title">Learn From an Industry Designer & Mentor</h2>
          <p className="ux-mentor-subtitle">7+ years of industry & teaching experience</p>
        </div>

        {/* Experience Cards Grid */}
        <div className="ux-mentor-grid">
          <div className="ux-mentor-card">
            <p className="ux-mentor-card-text">Design & CMS Manager at BCCI & IPL</p>
          </div>
          
          <div className="ux-mentor-card">
            <p className="ux-mentor-card-text">Visual Designer at Cricbuzz</p>
          </div>
          
          <div className="ux-mentor-card">
            <p className="ux-mentor-card-text">Mentored 500+ students in UI/UX design over the last 3 years</p>
          </div>
          
          <div className="ux-mentor-card">
            <p className="ux-mentor-card-text">Focused on making students job-ready</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXDesignCourseMentor;
