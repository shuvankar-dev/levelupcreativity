import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/navbar';
import EnrollModal from '../components/EnrollModal';
import CTABannerForCourses from '../components/CTABannerForCourses';
import ToolsSection from '../components/ToolsSection';
import CurriculumSection from '../components/CurriculumSection';
import UXDesignCoursePricing from './UXDesignCoursePricing';
import UXDesignCourseMentor from './UXDesignCourseMentor';
import WhatWeCreateUI from '../components/WhatWeCreateUI';
import QASection from '../components/QASection';
import Footer from '../components/Footer';
import { AlarmClock, Layers, ArrowRight } from 'lucide-react';
import './CSS/UXDesignCourse.css';
import './CSS/UXDesignCourse-why-choose.css';
import uxHeroImage from '../assets/UIUX Design/Frame 1056.png';
import maskBox from '../assets/UIUX Design/Why Choose/Mask box.png';
import maskGroup from '../assets/UIUX Design/Why Choose/Mask Group.png';
import dome from '../assets/UIUX Design/Why Choose/Dome.png';
import frame587 from '../assets/UIUX Design/Why Choose/Frame 587.png';
import frameImage from '../assets/UIUX Design/Why Choose/Frame.png';
import paperPlane from '../assets/UIUX Design/Why Choose/PaperPlane.png';
import firstLayer from '../assets/UIUX Design/Why Choose/First_layer.png';
import secondLayer from '../assets/UIUX Design/Why Choose/Second_layer.png';
import theirdLayer from '../assets/UIUX Design/Why Choose/Theird_layer.png';
import sealCheck from '../assets/SealCheck.png';

// Shared animation variants
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }
  }
};

// Stagger variants for Why Choose bento grid - one by one animation
const staggerContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2
    }
  }
};

const staggerRowVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

function UXDesignCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs and inView hooks for each section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, amount: 0.4 });

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 });

  const whyChooseRef = useRef(null);
  const whyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });

  const shortCoursesRef = useRef(null);
  const shortCoursesInView = useInView(shortCoursesRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ux-design-course-page">
      <Navbar variant="course-page" courseName="UI/UX Design" />
      
      <main className="ux-course-content">
        {/* Hero Image */}
        <section className="ux-hero-section" ref={heroRef}>
          <motion.div 
            className="ux-hero-container"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <div className="ux-hero-image">
              <img src={uxHeroImage} alt="UI/UX Design Course" />
            </div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="ux-content-section" ref={contentRef}>
          <div className="ux-content-container">
            {/* Frame 1053 - Text content */}
            <div className="ux-text-content">
              <motion.h1 
                className="ux-main-title"
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={titleVariants}
              >
                Levelup-UI/UX Design Course
              </motion.h1>
              <motion.p 
                className="ux-description"
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Master UI/UX Design and 3D Creation with industry-
              </motion.p>
            </div>

            {/* Frame 1002 - Buttons */}
            <motion.div 
              className="ux-buttons-container"
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={buttonVariants}
            >
              <div className="ux-buttons-wrapper">
                {/* Enroll Now Button */}
                <button 
                  className="ux-button ux-button-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Enroll Now</span>
                </button>

                {/* Download Brochure Button */}
                <button className="ux-button ux-button-secondary">
                  <span>View Curricullum</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Cards Section - Frame 1084 */}
        <section className="ux-info-section" ref={infoRef}>
          <div className="ux-info-cards">
            {/* Card 1 - Course Duration */}
            <motion.div 
              className="ux-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={0}
            >
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Course Duration</p>
                    <h3 className="ux-card-value">6 months</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Price */}
            <motion.div 
              className="ux-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={1}
            >
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Price starting from</p>
                    <h3 className="ux-card-value">₹55000</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Class Mode */}
            <motion.div 
              className="ux-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={2}
            >
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Class Mode</p>
                    <h3 className="ux-card-value">Online/Offline</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Eligibility */}
            <motion.div 
              className="ux-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={3}
            >
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Eligibility</p>
                    <h3 className="ux-card-value">10+/12+/ Graduation</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Levelup Section - Frame 592 */}
        <section className="ux-why-choose-section" ref={whyChooseRef}>
          <div className="ux-why-choose-container">
            {/* Header */}
            <div className="ux-why-choose-header">
              <motion.h2 
                className="ux-why-choose-title"
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={titleVariants}
              >
                Why Choose Levelup
              </motion.h2>
              <motion.p 
                className="ux-why-choose-subtitle"
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Comprehensive learning paths designed by industry
              </motion.p>
            </div>

            {/* Bento Grid */}
            <motion.div 
              className="ux-bento-grid"
              initial="hidden"
              animate={whyChooseInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {/* First Row */}
              <motion.div 
                className="ux-bento-row"
                variants={staggerRowVariants}
              >
                {/* Card 1 - Team-based activities */}
                <motion.div className="ux-bento-card" variants={staggerItemVariants}>
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Team-based UI/UX activities just like Industry Workflow</h3>
                      <p className="ux-bento-description">Learn as a professional in an friendly environment through mentor -guidance with your batchmates</p>
                    </div>
                  </div>
                  <img src={maskGroup} alt="3D Shape" className="ux-bento-shape ux-shape-mobius" />
                </motion.div>

                {/* Card 2 - Weekly assignments */}
                <motion.div className="ux-bento-card" variants={staggerItemVariants}>
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Weekly UX/UI assignments with practical demo classes</h3>
                      <p className="ux-bento-description">Become job-ready by learning practically through demo classes guided by mentors</p>
                    </div>
                  </div>
                  <img src={maskBox} alt="3D Shape" className="ux-bento-shape ux-shape-cube" />
                </motion.div>

                {/* Card 3 - Placement Assistance */}
                <motion.div className="ux-bento-card" variants={staggerItemVariants}>
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Lifetime Placement Assistance and Internships</h3>
                      <p className="ux-bento-description">Get 100% placement assistance after creating your own portfolio website guided by industry experts</p>
                    </div>
                  </div>
                  <img src={dome} alt="3D Shape" className="ux-bento-shape ux-shape-dome" />
                </motion.div>
              </motion.div>

              {/* Second Row */}
              <motion.div 
                className="ux-bento-row"
                variants={staggerRowVariants}
              >
                {/* Card 4 - Live sessions */}
                <motion.div className="ux-bento-card ux-bento-card-small" variants={staggerItemVariants}>
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Live, interactive offline and online sessions</h3>
                      <p className="ux-bento-description">Practical training designed to match hiring needs.</p>
                    </div>
                  </div>
                  <img src={frame587} alt="Student Avatars" className="ux-bento-avatars-img" />
                </motion.div>

                {/* Card 5 - Image card */}
                <motion.div className="ux-bento-card ux-bento-card-image" variants={staggerItemVariants}>
                  <img src={frameImage} alt="Mentor Session" className="ux-bento-image" />
                </motion.div>

                {/* Card 6 - Mentor feedback */}
                <motion.div className="ux-bento-card ux-bento-card-small" variants={staggerItemVariants}>
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Regular 1:1 mentor feedback on Project</h3>
                      <p className="ux-bento-description">Build real portfolios, not just theory.</p>
                    </div>
                  </div>
                  
                  {/* Feedback box layers */}
                  <img src={firstLayer} alt="Layer 1" className="ux-feedback-layer ux-layer-1" />
                  <img src={secondLayer} alt="Layer 2" className="ux-feedback-layer ux-layer-2" />
                  <img src={theirdLayer} alt="Layer 3" className="ux-feedback-layer ux-layer-3" />
                  
                  <div className="ux-feedback-box">
                    <span className="ux-feedback-text">Feedback time</span>
                    <img src={paperPlane} alt="Send" className="ux-feedback-icon" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Create Section */}
        <WhatWeCreateUI />

        {/* CTA Banner Section */}
        <CTABannerForCourses variant="portfolio" />

        {/* Tools Section */}
        <ToolsSection />

        {/* Curriculum Section */}
        <CurriculumSection />

        {/* Pricing Section */}
        <UXDesignCoursePricing />

        {/* Mentor Section */}
        <UXDesignCourseMentor />

        {/* Short Courses Based On UI/UX Section */}
        <section className="ux-short-courses-section" ref={shortCoursesRef}>
          <div className="ux-short-courses-container">
            {/* Header */}
            <div className="ux-short-courses-header">
              <motion.h2 
                className="ux-short-courses-title"
                initial="hidden"
                animate={shortCoursesInView ? "visible" : "hidden"}
                variants={titleVariants}
              >
                Short Courses Based On UI/UX
              </motion.h2>
              <motion.p 
                className="ux-short-courses-subtitle"
                initial="hidden"
                animate={shortCoursesInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Start your learning journey with our comprehensive mini course
              </motion.p>
            </div>

            {/* Cards Grid */}
            <motion.div 
              className="ux-short-courses-grid"
              initial="hidden"
              animate={shortCoursesInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
              }}
            >
              {/* Card 1 - Dashboard UI/UX Design */}
              <motion.div 
                className="ux-short-course-card"
                variants={cardVariants}
                custom={0}
              >
                <div className="ux-short-course-content">
                  <div className="ux-short-course-badge">ONLINE/OFFLINE</div>
                  
                  <div className="ux-short-course-info">
                    <h3 className="ux-short-course-title">DASHBOARD UI/UX DESIGN</h3>
                    <p className="ux-short-course-desc">Get Expert Guidance In Portfolios</p>
                  </div>

                  <ul className="ux-short-course-points">
                    <li><img src={sealCheck} alt="Check" />Learn basics of Dashboards</li>
                    <li><img src={sealCheck} alt="Check" />Choose Dashboard Domains</li>
                    <li><img src={sealCheck} alt="Check" />Decode Fundamentals of KPI and Metrics</li>
                    <li><img src={sealCheck} alt="Check" />Learn about Guidelines and Grids</li>
                    <li><img src={sealCheck} alt="Check" />Create your final dashboard</li>
                  </ul>

                  <div className="ux-short-course-meta">
                    <span className="ux-short-course-duration">
                      <AlarmClock size={28} />
                      2 hours
                    </span>
                    <span className="ux-short-course-timeline">
                      <Layers size={28} />
                      3 Months
                    </span>
                  </div>
                </div>

                <button className="ux-short-course-btn">
                  <span className="ux-short-course-btn-text">View Details</span>
                  <ArrowRight size={28} className="ux-short-course-btn-arrow" />
                </button>
              </motion.div>

              {/* Card 2 - Build Design System */}
              <motion.div 
                className="ux-short-course-card"
                variants={cardVariants}
                custom={1}
              >
                <div className="ux-short-course-content">
                  <div className="ux-short-course-badge">ONLINE/OFFLINE</div>
                  
                  <div className="ux-short-course-info">
                    <h3 className="ux-short-course-title">BUILD DESIGN SYSTEM WITH VARIABLES</h3>
                    <p className="ux-short-course-desc">Get Expert Guidance In Portfolios</p>
                  </div>

                  <ul className="ux-short-course-points">
                    <li><img src={sealCheck} alt="Check" />Understand the basics of Design System</li>
                    <li><img src={sealCheck} alt="Check" />Learn Variable Types</li>
                    <li><img src={sealCheck} alt="Check" />Understanding components and Autolayout</li>
                    <li><img src={sealCheck} alt="Check" />Create Variables and apply them in designs</li>
                    <li><img src={sealCheck} alt="Check" />Create your final design system</li>
                  </ul>

                  <div className="ux-short-course-meta">
                    <span className="ux-short-course-duration">
                      <AlarmClock size={28} />
                      2 hours
                    </span>
                    <span className="ux-short-course-timeline">
                      <Layers size={28} />
                      3 Months
                    </span>
                  </div>
                </div>

                <button className="ux-short-course-btn">
                  <span className="ux-short-course-btn-text">View Details</span>
                  <ArrowRight size={28} className="ux-short-course-btn-arrow" />
                </button>
              </motion.div>

              {/* Card 3 - Blender Learning */}
              <motion.div 
                className="ux-short-course-card"
                variants={cardVariants}
                custom={2}
              >
                <div className="ux-short-course-content">
                  <div className="ux-short-course-badge">ONLINE/OFFLINE</div>
                  
                  <div className="ux-short-course-info">
                    <h3 className="ux-short-course-title">BLENDER LEARNING COURSE</h3>
                    <p className="ux-short-course-desc">Get Expert Guidance In Portfolios</p>
                  </div>

                  <ul className="ux-short-course-points">
                    <li><img src={sealCheck} alt="Check" />Interface, basic modeling, sculpting</li>
                    <li><img src={sealCheck} alt="Check" />Rigging & Skinning</li>
                    <li><img src={sealCheck} alt="Check" />UV Mapping Texturing</li>
                    <li><img src={sealCheck} alt="Check" />Animation & Motion Principle</li>
                    <li><img src={sealCheck} alt="Check" />Lighting, Rendering & Camera Work</li>
                  </ul>

                  <div className="ux-short-course-meta">
                    <span className="ux-short-course-duration">
                      <AlarmClock size={28} />
                      2 hours
                    </span>
                    <span className="ux-short-course-timeline">
                      <Layers size={28} />
                      3 Months
                    </span>
                  </div>
                </div>

                <button className="ux-short-course-btn">
                  <span className="ux-short-course-btn-text">View Details</span>
                  <ArrowRight size={28} className="ux-short-course-btn-arrow" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Your Questions Answered Section */}
        <QASection />

        {/* CTA Banner Section */}
        <CTABannerForCourses courseName="UI/UX" />

        {/* Footer */}
        <Footer />
      </main>

      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default UXDesignCourse;
