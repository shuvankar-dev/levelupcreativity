import React from 'react';
import './CSS/VFXAnimationCourseMentor.css';

const VFXAnimationCourseMentor: React.FC = () => {
  return (
    <section className="vfx-mentor-section">
      <div className="vfx-mentor-container">
        {/* Header */}
        <div className="vfx-mentor-header">
          <h2 className="vfx-mentor-title">Learn From an Industry Based VFX Mentor</h2>
          <p className="vfx-mentor-subtitle">10+ years of industry & teaching experience</p>
        </div>

        {/* Experience Cards Grid */}
        <div className="vfx-mentor-grid">
          <div className="vfx-mentor-card">
            <p className="vfx-mentor-card-text">Senior VFX Artist at leading studios</p>
          </div>
          
          <div className="vfx-mentor-card">
            <p className="vfx-mentor-card-text">Worked on major film and commercial projects</p>
          </div>
          
          <div className="vfx-mentor-card">
            <p className="vfx-mentor-card-text">Mentored 300+ students in VFX animation over the last 5 years</p>
          </div>
          
          <div className="vfx-mentor-card">
            <p className="vfx-mentor-card-text">Specialized in production-ready workflows and techniques</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFXAnimationCourseMentor;
