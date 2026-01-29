import './CSS/home.css';
import { Palette, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Home() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, // Changed to true - animates only once
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  // Animation variants - SEQUENTIAL: Title → Description → Cards one by one
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const
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
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="courses-section" ref={sectionRef}>
      <motion.div 
        className="courses-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <div className="courses-header">
          <motion.h2 
            className="courses-title"
            variants={titleVariants}
          >
            Our Courses
          </motion.h2>
          
          <motion.p 
            className="courses-description"
            variants={descriptionVariants}
          >
            Learn in-demand UI/UX and VFX skills through practical, mentor-led training designed to build a standout portfolio and job-ready confidence.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <motion.div 
          className="courses-grid"
          variants={containerVariants}
        >
          {/* UI/UX Design Card */}
          <motion.div 
            className="course-card"
            variants={cardVariants}
          >
            <div className="course-image-wrapper">
              <img 
                src="/src/assets/mobile_image.png" 
                alt="UI/UX Design" 
                className="course-image"
              />
            </div>
            <div className="course-content">
              <div className="course-icon">
                <Palette size={24} />
              </div>
              <div className="course-name-wrapper">
                <h3 className="course-name">UI/UX Design</h3>
                <img 
                  src="/src/assets/circle-arrow-out-up-right.png" 
                  alt="arrow" 
                  className="course-arrow-icon"
                />
              </div>
              <p className="course-info">
                Build strong UI/UX skills with expert guidance and real-world practice
              </p>
            </div>
          </motion.div>

          {/* VFX Animation Card */}
          <motion.div 
            className="course-card"
            variants={cardVariants}
          >
            <div className="course-image-wrapper">
              <img 
                src="/src/assets/animated.png" 
                alt="VFX Animation" 
                className="course-image"
              />
            </div>
            <div className="course-content">
              <div className="course-icon">
                <Box size={24} />
              </div>
              <div className="course-name-wrapper">
                <h3 className="course-name">VFX Animation</h3>
                <img 
                  src="/src/assets/circle-arrow-out-up-right.png" 
                  alt="arrow" 
                  className="course-arrow-icon"
                />
              </div>
              <p className="course-info">
                Master cinematic VFX skills with real projects and expert mentorship.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
