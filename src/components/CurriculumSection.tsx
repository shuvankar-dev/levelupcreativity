import React, { useState } from 'react';
import './CSS/CurriculumSection.css';
import BookOpen from '../assets/BookOpen.png';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const CurriculumSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'ux' | 'vfx'>('vfx');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const uxModules: Module[] = [
    {
      id: 1,
      title: 'UX Research & Strategy',
      description: 'Become a UX thinker who solves real-world problems • 5 modules',
      icon: '1'
    },
    {
      id: 2,
      title: 'UI Design Fundamentals',
      description: 'Learn visual design principles for real apps and websites • 4 modules',
      icon: '2'
    },
    {
      id: 3,
      title: 'Advance UI & Systems',
      description: 'Learn scalable design and cross-platform thinking • 4 modules',
      icon: '3'
    },
    {
      id: 4,
      title: 'Usability & Collaboration',
      description: 'Validate, refine & prepare for real-world teamwork • 3 modules',
      icon: '4'
    },
    {
      id: 5,
      title: 'SaaS Design & Portfolio',
      description: 'Build your professional portfolio with real projects • 4 modules',
      icon: '5'
    }
  ];

  const vfxModules: Module[] = [
    {
      id: 1,
      title: 'Introduction & Modelling',
      description: 'Core 3D principles, modeling tools, topology, workflows, fundamentals, industry-ready skills • 5 weeks',
      icon: '1'
    },
    {
      id: 2,
      title: 'Rigging and Skinning',
      description: 'Character rigging fundamentals, clean skinning, deformation control, animation-ready production workflows • 3 weeks',
      icon: '2'
    },
    {
      id: 3,
      title: 'Animation Fundamentals',
      description: 'Principles of motion, timing, spacing, performance, storytelling, strong animation foundations • 4 weeks',
      icon: '3'
    },
    {
      id: 4,
      title: 'Lighting, Rendering & Compositing',
      description: 'Cinematic lighting, realistic rendering, compositing workflows for polished, production-ready visuals • 4 weeks',
      icon: '4'
    },
    {
      id: 5,
      title: 'Theory and Practical Test For Choosing Specialization',
      description: 'Assess theory, practical skills to identify strengths, choose specialization path • 1 week',
      icon: '5'
    },
    {
      id: 6,
      title: 'Specialization Course',
      description: 'Choose your preferred specialization • 20 weeks',
      icon: '6'
    }
  ];

  const currentModules = selectedTrack === 'ux' ? uxModules : vfxModules;

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section className="curriculum-section">
      <div className="curriculum-container">
        {/* Header */}
        <div className="curriculum-header">
          <h2 className="curriculum-title">Curriculum We Offer</h2>
          <p className="curriculum-subtitle">
            Comprehensive learning paths designed by industry experts
          </p>
        </div>

        {/* Track Toggle Buttons */}
        <div className="track-toggle">
          <button
            className={`track-toggle-btn ${selectedTrack === 'ux' ? 'active' : ''}`}
            onClick={() => setSelectedTrack('ux')}
          >
            UX/UI Design
          </button>
          <button
            className={`track-toggle-btn ${selectedTrack === 'vfx' ? 'active' : ''}`}
            onClick={() => setSelectedTrack('vfx')}
          >
            VFX Animation
          </button>
        </div>

        {/* Modules Container */}
        <div className="modules-container">
          {/* Header Card */}
          <div className="modules-header-card">
            <div className="modules-header-left">
              <div className="modules-icon">
                <img src={BookOpen} alt="Book Open" />
              </div>
              <div className="modules-header-text">
                <h3 className="modules-count">
                  {currentModules.length === 5 ? '20' : '20'} Comprehensive Modules
                </h3>
                <p className="modules-phases">
                  Structured in {currentModules.length === 5 ? '4' : '6'} progressive phases
                </p>
              </div>
            </div>
            <button className="view-curriculum-btn">
              View Curriculum
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Module Accordion Items */}
          <div className="modules-list">
            {currentModules.map((module) => (
              <div
                key={module.id}
                className={`module-item ${expandedModule === module.id ? 'expanded' : ''}`}
              >
                <button
                  className="module-header"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="module-header-left">
                    <div className="module-number">{module.icon}</div>
                    <div className="module-info">
                      <h4 className="module-title">{module.title}</h4>
                      <p className="module-description">{module.description}</p>
                    </div>
                  </div>
                  <svg
                    className="module-chevron"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {expandedModule === module.id && (
                  <div className="module-content">
                    <p>Module content will be displayed here when expanded.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
