import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/VFXShortCoursesSection.css';
import { AlarmClock, Layers, ArrowRight } from 'lucide-react';
import sealCheck from '../assets/SealCheck.png';

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
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 + (index * 0.15) }
  })
};

const VFXShortCoursesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: '0px 0px -50px 0px'
  });

  return (
    <section className="vfx-short-courses-section" ref={sectionRef}>
      <div className="vfx-short-courses-container">
        {/* Header */}
        <div className="vfx-short-courses-header">
          <motion.h2
            className="vfx-short-courses-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Short Courses Based On AI & 3D Softwares
          </motion.h2>
          <motion.p
            className="vfx-short-courses-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Start your learning journey with our comprehensive mini course
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="vfx-short-courses-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
        >
          {/* Card 1 - AI Animation Course */}
          <motion.div
            className="vfx-short-course-card"
            variants={cardVariants}
            custom={0}
          >
            <div className="vfx-short-course-content">
              <div className="vfx-short-course-badge">ONLINE/OFFLINE</div>
              
              <div className="vfx-short-course-info">
                <h3 className="vfx-short-course-title">AI ANIMATION COURSE</h3>
                <p className="vfx-short-course-desc">Get Expert Guidance In Portfolios</p>
              </div>

              <ul className="vfx-short-course-points">
                <li><img src={sealCheck} alt="Check" />Generate base model</li>
                <li><img src={sealCheck} alt="Check" />Auto-rig</li>
                <li><img src={sealCheck} alt="Check" />Add Facial Animation</li>
                <li><img src={sealCheck} alt="Check" />Animated from video</li>
                <li><img src={sealCheck} alt="Check" />Import & Render</li>
              </ul>

              <div className="vfx-short-course-meta">
                <span className="vfx-short-course-duration">
                  <AlarmClock size={28} />
                  2 hours
                </span>
                <span className="vfx-short-course-timeline">
                  <Layers size={28} />
                  3 Months
                </span>
              </div>
            </div>

            <button className="vfx-short-course-btn">
              <span className="vfx-short-course-btn-text">View Details</span>
              <ArrowRight size={28} className="vfx-short-course-btn-arrow" />
            </button>
          </motion.div>

          {/* Card 2 - Unreal Engine Course */}
          <motion.div
            className="vfx-short-course-card"
            variants={cardVariants}
            custom={1}
          >
            <div className="vfx-short-course-content">
              <div className="vfx-short-course-badge">ONLINE/OFFLINE</div>
              
              <div className="vfx-short-course-info">
                <h3 className="vfx-short-course-title">UNREAL ENGINE COURSE</h3>
                <p className="vfx-short-course-desc">Get Expert Guidance In Portfolios</p>
              </div>

              <ul className="vfx-short-course-points">
                <li><img src={sealCheck} alt="Check" />Fundamental & Asset Workflow</li>
                <li><img src={sealCheck} alt="Check" />Blue Print & Gameplay Logic</li>
                <li><img src={sealCheck} alt="Check" />Environment & Material</li>
                <li><img src={sealCheck} alt="Check" />Animation & VFX</li>
                <li><img src={sealCheck} alt="Check" />Advance System</li>
              </ul>

              <div className="vfx-short-course-meta">
                <span className="vfx-short-course-duration">
                  <AlarmClock size={28} />
                  2 hours
                </span>
                <span className="vfx-short-course-timeline">
                  <Layers size={28} />
                  3 Months
                </span>
              </div>
            </div>

            <button className="vfx-short-course-btn">
              <span className="vfx-short-course-btn-text">View Details</span>
              <ArrowRight size={28} className="vfx-short-course-btn-arrow" />
            </button>
          </motion.div>

          {/* Card 3 - Blender Learning Course */}
          <motion.div
            className="vfx-short-course-card"
            variants={cardVariants}
            custom={2}
          >
            <div className="vfx-short-course-content">
              <div className="vfx-short-course-badge">ONLINE/OFFLINE</div>
              
              <div className="vfx-short-course-info">
                <h3 className="vfx-short-course-title">BLENDER LEARNING COURSE</h3>
                <p className="vfx-short-course-desc">Get Expert Guidance In Portfolios</p>
              </div>

              <ul className="vfx-short-course-points">
                <li><img src={sealCheck} alt="Check" />Interface, basic modeling, sculpting</li>
                <li><img src={sealCheck} alt="Check" />Rigging & Skinning</li>
                <li><img src={sealCheck} alt="Check" />UV Mapping Texturing</li>
                <li><img src={sealCheck} alt="Check" />Animation & Motion Principle</li>
                <li><img src={sealCheck} alt="Check" />Lighting, Rendering & Camera Work</li>
              </ul>

              <div className="vfx-short-course-meta">
                <span className="vfx-short-course-duration">
                  <AlarmClock size={28} />
                  2 hours
                </span>
                <span className="vfx-short-course-timeline">
                  <Layers size={28} />
                  3 Months
                </span>
              </div>
            </div>

            <button className="vfx-short-course-btn">
              <span className="vfx-short-course-btn-text">View Details</span>
              <ArrowRight size={28} className="vfx-short-course-btn-arrow" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VFXShortCoursesSection;
