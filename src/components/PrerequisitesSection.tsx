import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/PrerequisitesSection.css';
import CheckCircle from '../assets/PrerequisitesLogo/CheckCircle.png';
import Laptop from '../assets/PrerequisitesLogo/Laptop.png';
import WifiHigh from '../assets/PrerequisitesLogo/WifiHigh.png';
import Sparkle from '../assets/PrerequisitesLogo/Sparkle.png';
import Clock from '../assets/PrerequisitesLogo/Clock.png';
import LightbulbFilament from '../assets/PrerequisitesLogo/LightbulbFilament.png';

const PrerequisitesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

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

  const cardVariants = {
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
        delay: 0.3 + (index * 0.1)
      }
    })
  };

  return (
    <section className="prerequisites-section" ref={sectionRef}>
      <div className="prerequisites-container">
        {/* Header */}
        <div className="prerequisites-header">
          <motion.h2 
            className="prerequisites-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Prerequisites For Students
          </motion.h2>
          <motion.p 
            className="prerequisites-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Everything you need to start your creative journey with us
          </motion.p>
        </div>

        {/* Prerequisites Grid */}
        <div className="prerequisites-grid">
          {prerequisites.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="prerequisite-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={index}
            >
              <div className="prerequisite-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="prerequisite-title">{item.title}</h3>
              <p className="prerequisite-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrerequisitesSection;
