import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/UXDesignCourseMentor.css';

const UXDesignCourseMentor: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({ 
      opacity: 1, y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 + (index * 0.1) }
    })
  };

  return (
    <section className="ux-mentor-section" ref={sectionRef}>
      <div className="ux-mentor-container">
        {/* Header */}
        <div className="ux-mentor-header">
          <motion.h2 
            className="ux-mentor-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Learn From an Industry Designer & Mentor
          </motion.h2>
          <motion.p 
            className="ux-mentor-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            7+ years of industry & teaching experience
          </motion.p>
        </div>

        {/* Experience Cards Grid */}
        <div className="ux-mentor-grid">
          <motion.div 
            className="ux-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={0}
          >
            <p className="ux-mentor-card-text">Design & CMS Manager at BCCI & IPL</p>
          </motion.div>
          
          <motion.div 
            className="ux-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={1}
          >
            <p className="ux-mentor-card-text">Visual Designer at Cricbuzz</p>
          </motion.div>
          
          <motion.div 
            className="ux-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={2}
          >
            <p className="ux-mentor-card-text">Mentored 500+ students in UI/UX design over the last 3 years</p>
          </motion.div>
          
          <motion.div 
            className="ux-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={3}
          >
            <p className="ux-mentor-card-text">Focused on making students job-ready</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UXDesignCourseMentor;
