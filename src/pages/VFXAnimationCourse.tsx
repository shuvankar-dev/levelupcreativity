import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import EnrollModal from '../components/EnrollModal';
import CTABannerForCourses from '../components/CTABannerForCourses';
import CurriculumSection from '../components/CurriculumSection';
import VFXAnimationCoursePricing from './VFXAnimationCoursePricing';
import VFXAnimationCourseMentor from './VFXAnimationCourseMentor';
import VFXShortCoursesSection from './VFXShortCoursesSection';
import WhatWeCreateUI from '../components/WhatWeCreateUI';
import './CSS/VFXAnimationCourse.css';
import heroImage from '../assets/VFX Design/hero.png';
import maskBox from '../assets/UIUX Design/Why Choose/Mask box.png';
import maskGroup from '../assets/UIUX Design/Why Choose/Mask Group.png';
import dome from '../assets/UIUX Design/Why Choose/Dome.png';
import frame587 from '../assets/UIUX Design/Why Choose/Frame 587.png';
import frameImage from '../assets/UIUX Design/Why Choose/Frame.png';
import paperPlane from '../assets/UIUX Design/Why Choose/PaperPlane.png';
import firstLayer from '../assets/UIUX Design/Why Choose/First_layer.png';
import secondLayer from '../assets/UIUX Design/Why Choose/Second_layer.png';
import theirdLayer from '../assets/UIUX Design/Why Choose/Theird_layer.png';
import vfxCreate1 from '../assets/WhatYou\'llCreateVfx/1.png';
import vfxCreate2 from '../assets/WhatYou\'llCreateVfx/2.png';
import vfxCreate3 from '../assets/WhatYou\'llCreateVfx/3.png';
import vfxCreate4 from '../assets/WhatYou\'llCreateVfx/4.png';
import vfxCreate5 from '../assets/WhatYou\'llCreateVfx/5.png';

const vfxImages = [vfxCreate1, vfxCreate2, vfxCreate3, vfxCreate4, vfxCreate5];

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

function VFXAnimationCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs and inView hooks for each section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 });

  const whyChooseRef = useRef(null);
  const whyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vfx-animation-course-page">
      <Navbar variant="course-page" courseName="VFX Animation" />
      
      <main className="vfx-course-content">
        {/* Hero Section */}
        <section className="vfx-hero-section" ref={heroRef}>
          <motion.div
            className="vfx-hero-background"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <img src={heroImage} alt="VFX Animation" className="vfx-hero-image" />
          </motion.div>
          
          <div className="vfx-hero-container">
            <div className="vfx-hero-text-container">
              <motion.h1
                className="vfx-hero-title"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={titleVariants}
              >
                Levelup Your VFX Career
              </motion.h1>
              <motion.p
                className="vfx-hero-subtitle"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Industry-focused vfx training with job-ready portfolio
              </motion.p>
            </div>
            
            <motion.div
              className="vfx-hero-button-container"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={buttonVariants}
            >
              <button className="vfx-enroll-button" onClick={() => setIsModalOpen(true)}>
                <span className="vfx-button-text">
                  <span className="vfx-button-text-inner">Enroll Now</span>
                  <span className="vfx-button-text-inner">Enroll Now</span>
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="vfx-info-section" ref={infoRef}>
          <div className="vfx-info-cards">
            {/* Card 1 - Course Duration */}
            <motion.div
              className="vfx-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={0}
            >
              <div className="vfx-info-card">
                <div className="vfx-card-content">
                  <div className="vfx-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="vfx-card-info">
                    <p className="vfx-card-label">Course Duration</p>
                    <h3 className="vfx-card-value">11 months</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Price */}
            <motion.div
              className="vfx-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={1}
            >
              <div className="vfx-info-card">
                <div className="vfx-card-content">
                  <div className="vfx-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="vfx-card-info">
                    <p className="vfx-card-label">Price starting from</p>
                    <h3 className="vfx-card-value">₹80000</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Class Mode */}
            <motion.div
              className="vfx-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={2}
            >
              <div className="vfx-info-card">
                <div className="vfx-card-content">
                  <div className="vfx-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="vfx-card-info">
                    <p className="vfx-card-label">Class Mode</p>
                    <h3 className="vfx-card-value">Online/Offline</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Eligibility */}
            <motion.div
              className="vfx-info-card-wrapper"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={3}
            >
              <div className="vfx-info-card">
                <div className="vfx-card-content">
                  <div className="vfx-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="vfx-card-info">
                    <p className="vfx-card-label">Eligibility</p>
                    <h3 className="vfx-card-value">10+/12+/ Graduation</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Levelup Section */}
        <section className="vfx-why-choose-section" ref={whyChooseRef}>
          <div className="vfx-why-choose-container">
            {/* Header */}
            <div className="vfx-why-choose-header">
              <motion.h2
                className="vfx-why-choose-title"
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={titleVariants}
              >
                Why Choose Levelup
              </motion.h2>
              <motion.p
                className="vfx-why-choose-subtitle"
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Comprehensive learning paths designed by industry
              </motion.p>
            </div>

            {/* Bento Grid */}
            <div className="vfx-bento-grid">
              {/* First Row */}
              <motion.div
                className="vfx-bento-row"
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={cardVariants}
                custom={0}
              >
                {/* Card 1 - Team-based activities */}
                <div className="vfx-bento-card">
                  <div className="vfx-bento-content">
                    <div className="vfx-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="vfx-bento-text">
                      <h3 className="vfx-bento-heading">Team-based VFX activities just like Industry Workflow</h3>
                      <p className="vfx-bento-description">Learn as a professional in an friendly environment through mentor-guidance with your batchmates</p>
                    </div>
                  </div>
                  <img src={maskGroup} alt="3D Shape" className="vfx-bento-shape vfx-shape-mobius" />
                </div>

                {/* Card 2 - Weekly assignments */}
                <div className="vfx-bento-card">
                  <div className="vfx-bento-content">
                    <div className="vfx-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="vfx-bento-text">
                      <h3 className="vfx-bento-heading">Weekly VFX assignments with practical demo classes</h3>
                      <p className="vfx-bento-description">Become job-ready by learning practically through demo classes guided by mentors</p>
                    </div>
                  </div>
                  <img src={maskBox} alt="3D Shape" className="vfx-bento-shape vfx-shape-cube" />
                </div>

                {/* Card 3 - Placement Assistance */}
                <div className="vfx-bento-card">
                  <div className="vfx-bento-content">
                    <div className="vfx-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="vfx-bento-text">
                      <h3 className="vfx-bento-heading">Lifetime Placement Assistance and Internships</h3>
                      <p className="vfx-bento-description">Get 100% placement assistance after creating your own portfolio website guided by industry experts</p>
                    </div>
                  </div>
                  <img src={dome} alt="3D Shape" className="vfx-bento-shape vfx-shape-dome" />
                </div>
              </motion.div>

              {/* Second Row */}
              <motion.div
                className="vfx-bento-row"
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={cardVariants}
                custom={1}
              >
                {/* Card 4 - Live sessions */}
                <div className="vfx-bento-card vfx-bento-card-small">
                  <div className="vfx-bento-content">
                    <div className="vfx-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="vfx-bento-text">
                      <h3 className="vfx-bento-heading">Live, interactive offline and online sessions</h3>
                      <p className="vfx-bento-description">Practical training designed to match hiring needs.</p>
                    </div>
                  </div>
                  <img src={frame587} alt="Student Avatars" className="vfx-bento-avatars-img" />
                </div>

                {/* Card 5 - Image card */}
                <div className="vfx-bento-card vfx-bento-card-image">
                  <img src={frameImage} alt="Mentor Session" className="vfx-bento-image" />
                </div>

                {/* Card 6 - Mentor feedback */}
                <div className="vfx-bento-card vfx-bento-card-small">
                  <div className="vfx-bento-content">
                    <div className="vfx-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="vfx-bento-text">
                      <h3 className="vfx-bento-heading">Regular 1:1 mentor feedback on Project</h3>
                      <p className="vfx-bento-description">Build real portfolios, not just theory.</p>
                    </div>
                  </div>
                  
                  {/* Feedback box layers */}
                  <img src={firstLayer} alt="Layer 1" className="vfx-feedback-layer vfx-layer-1" />
                  <img src={secondLayer} alt="Layer 2" className="vfx-feedback-layer vfx-layer-2" />
                  <img src={theirdLayer} alt="Layer 3" className="vfx-feedback-layer vfx-layer-3" />
                  
                  <div className="vfx-feedback-box">
                    <span className="vfx-feedback-text">Feedback time</span>
                    <img src={paperPlane} alt="Send" className="vfx-feedback-icon" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You'll Create Section */}
        <WhatWeCreateUI images={vfxImages} />

        {/* Curriculum Section */}
        <CurriculumSection />

        {/* Pricing Section */}
        <VFXAnimationCoursePricing />

        {/* Mentor Section */}
        <VFXAnimationCourseMentor />

        {/* Short Courses Section */}
        <VFXShortCoursesSection />

        {/* CTA Banner Section */}
        <CTABannerForCourses courseName="VFX" />
      </main>

      <Footer />
      
      {/* Enroll Modal */}
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default VFXAnimationCourse;
