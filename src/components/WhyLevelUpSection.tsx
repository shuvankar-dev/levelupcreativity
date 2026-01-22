import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

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

  // Animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.95
    },
    visible: (index: number) => ({ 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.8 + (index * 0.2)
      }
    })
  };

  return (
    <section className="whylevelup-section" ref={sectionRef}>
      <div className="whylevelup-container">
        {/* Header */}
        <div className="whylevelup-header">
          <motion.h2 
            className="whylevelup-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Why LevelUp
          </motion.h2>
          <motion.p 
            className="whylevelup-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            We are committed to helping you achieve your creative career goals and comprehensive courses
            and unparalleled support
          </motion.p>
        </div>

        {/* Content Area: Image + Feature Cards */}
        <div className="whylevelup-content">
          {/* Left Side: Image */}
          <motion.div 
            className="whylevelup-image-container"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img 
              src={whyLevelUpImage} 
              alt="Why LevelUp" 
              className="whylevelup-image"
            />
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="whylevelup-features">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="whylevelup-feature-card"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                custom={index}
              >
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLevelUpSection;
