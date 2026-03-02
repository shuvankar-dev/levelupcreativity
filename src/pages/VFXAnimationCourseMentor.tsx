import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/VFXAnimationCourseMentor.css';

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
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 + (index * 0.1) }
  })
};

const VFXAnimationCourseMentor: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: '0px 0px -50px 0px'
  });

  return (
    <section className="vfx-mentor-section" ref={sectionRef}>
      <div className="vfx-mentor-container">
        {/* Header */}
        <div className="vfx-mentor-header">
          <motion.h2
            className="vfx-mentor-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Learn From an Industry Based VFX Mentor
          </motion.h2>
          <motion.p
            className="vfx-mentor-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            10+ years of industry & teaching experience
          </motion.p>
        </div>

        {/* Experience Cards Grid */}
        <div className="vfx-mentor-grid">
          <motion.div
            className="vfx-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={0}
          >
            <p className="vfx-mentor-card-text">Senior Animator at Assemblage Entertainment Pvt.Ltd</p>
          </motion.div>
          
          <motion.div
            className="vfx-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={1}
          >
            <p className="vfx-mentor-card-text">Senior Compositing Artist at Dneg</p>
          </motion.div>
          
          <motion.div
            className="vfx-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={2}
          >
            <p className="vfx-mentor-card-text">Worked on hollywood animated movies</p>
          </motion.div>
          
          <motion.div
            className="vfx-mentor-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={3}
          >
            <p className="vfx-mentor-card-text">Worked on gaming projects</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VFXAnimationCourseMentor;
