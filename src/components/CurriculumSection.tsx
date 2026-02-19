import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/CurriculumSection.css';
import BookOpen from '../assets/BookOpen.png';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  weeks?: Array<{
    week: string;
    topic: string;
    tasks: string;
  }>;
}

const CurriculumSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'ux' | 'vfx'>('ux');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

  const uxModules = [
    {
      id: 1,
      title: 'Product Foundations and Research Setup',
      description: 'Become a UX thinker who solves real-world problems • 5 modules',
      icon: '1',
      weeks: [
        { week: 'Week 1', topic: 'Introduction to Product Design + Figma Basics', tasks: '2 Tasks' },
        { week: 'Week 2', topic: 'Stakeholders & Business Thinking for Designers', tasks: '3 Tasks' },
        { week: 'Week 3', topic: 'Problem Framing', tasks: '2 Tasks' },
        { week: 'Week 4', topic: 'Research Fundamentals', tasks: '3 Tasks' },
        { week: 'Week 5', topic: 'User Interviews- Deep Dive', tasks: '2 Tasks' }
      ]
    },
    {
      id: 2,
      title: 'Research Execution & UX Strategy',
      description: 'Learn visual design principles for real apps and websites • 4 modules',
      icon: '2',
      weeks: [
        { week: 'Week 6', topic: 'Stakeholder Interviews', tasks: '2 Tasks' },
        { week: 'Week 7', topic: 'Insight Synthesis', tasks: '3 Tasks' },
        { week: 'Week 8', topic: 'Decoding User Journey & Taskflow', tasks: '2 Tasks' },
        { week: 'Week 9', topic: 'Userflow and Information Architecture', tasks: '3 Tasks' }
      ]
    },
    {
      id: 3,
      title: 'UX Structure to UI system Thinking',
      description: 'Learn scalable design and cross-platform thinking • 4 modules',
      icon: '3',
      weeks: [
        { week: 'Week 10', topic: 'Wireframing with logic', tasks: '2 Tasks' },
        { week: 'Week 11', topic: 'UI Foundations', tasks: '3 Tasks' },
        { week: 'Week 12', topic: 'Typography & Color Systems', tasks: '2 Tasks' },
        { week: 'Week 13', topic: 'Design systems in figma', tasks: '3 Tasks' }
      ]
    },
    {
      id: 4,
      title: 'Interface Master & AI acceleration',
      description: 'Validate, refine & prepare for real-world teamwork • 3 modules',
      icon: '4',
      weeks: [
        { week: 'Week 14', topic: 'iOS App design & AI Acceleration', tasks: '2 Tasks' },
        { week: 'Week 15', topic: 'Learning Guidelines for android', tasks: '3 Tasks' },
        { week: 'Week 16', topic: 'Responsive Website Design', tasks: '2 Tasks' }
      ]
    },
    {
      id: 5,
      title: 'Portfolio Launch & Career Readiness',
      description: 'Build your professional portfolio with real projects • 4 modules',
      icon: '5',
      weeks: [
        { week: 'Week 17', topic: 'Case Study Writing', tasks: '2 Tasks' },
        { week: 'Week 18', topic: 'Portfolio Website Planning', tasks: '3 Tasks' },
        { week: 'Week 19', topic: 'Portfolio Build & Publish', tasks: '2 Tasks' },
        { week: 'Week 20', topic: 'Career Preparation', tasks: '3 Tasks' }
      ]
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

  // Animation variants - smooth like ToolsSection
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.15
      }
    }
  };

  const headerCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3
      }
    }
  };

  const moduleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.45 + (index * 0.1)
      }
    })
  };

  return (
    <section className="curriculum-section" ref={sectionRef}>
      <div className="curriculum-container">
        {/* Header */}
        <div className="curriculum-header">
          <motion.h2 
            className="curriculum-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Curriculum We Offer
          </motion.h2>
          <motion.p 
            className="curriculum-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Comprehensive learning paths designed by industry experts
          </motion.p>
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
          <motion.div 
            className="modules-header-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerCardVariants}
          >
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
          </motion.div>

          {/* Module Accordion Items */}
          <div className="modules-list">
            {currentModules.map((module, index) => (
              <motion.div
                key={module.id}
                className={`module-item ${expandedModule === module.id ? 'expanded' : ''}`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={moduleVariants}
                custom={index}
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
                {expandedModule === module.id && module.weeks && (
                  <div className="module-content">
                    <div className="module-weeks">
                      {module.weeks.map((weekData, idx) => (
                        <div key={idx} className="week-row">
                          <span className="week-label">{weekData.week}</span>
                          <div className="week-details">
                            <span className="week-topic">{weekData.topic}</span>
                            <span className="week-tasks">{weekData.tasks}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
