import './CSS/home.css';
import { Palette, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Home() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, // Changed to true - animates only once
    amount: 0.4, // Increased - need 40% visible
    margin: "0px 0px -50px 0px"
  });

  // Animation variants - ULTRA SMOOTH with overlapping animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slightly more delay between elements
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const // Smoother easing
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1, // Slightly longer for smooth feel
        ease: [0.22, 1, 0.36, 1] as const,
        opacity: {
          duration: 0.8, // Fade in faster
          ease: "easeOut"
        }
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
            onClick={() => {
              const event = new CustomEvent('navigate', { detail: { page: 'ux-design' } });
              window.dispatchEvent(event);
            }}
            style={{ cursor: 'pointer' }}
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
                <div className="course-arrow-icon">
                  <svg viewBox="0 0 30 30" className="arrow-circle-svg">
                    <path className="arrow-circle" d="M21 6.5C19.3 5.5 17.2 5 15 5C9.477 5 5 9.477 5 15s4.477 10 10 10 10-4.477 10-10c0-1.5-.3-2.9-.8-4.2" />
                    <line className="arrow-line" x1="16" y1="14" x2="28" y2="2" />
                    <polyline className="arrow-head" points="21,2 28,2 28,9" />
                  </svg>
                </div>
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
                <div className="course-arrow-icon">
                  <svg viewBox="0 0 30 30" className="arrow-circle-svg">
                    <path className="arrow-circle" d="M21 6.5C19.3 5.5 17.2 5 15 5C9.477 5 5 9.477 5 15s4.477 10 10 10 10-4.477 10-10c0-1.5-.3-2.9-.8-4.2" />
                    <line className="arrow-line" x1="16" y1="14" x2="28" y2="2" />
                    <polyline className="arrow-head" points="21,2 28,2 28,9" />
                  </svg>
                </div>
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
