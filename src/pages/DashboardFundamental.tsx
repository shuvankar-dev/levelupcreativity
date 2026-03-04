import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Phone, Check, Square, Plus, Minus } from 'lucide-react';
import sealCheckIcon from '../assets/SealCheckVfx.png';
import alaramIcon from '../assets/VFXShortCources/alaram.png';
import rsIcon from '../assets/VFXShortCources/rs.png';
import dateIcon from '../assets/VFXShortCources/date.png';
import dashboardImage from '../assets/VFXShortCources/dashbord_fundamental.png';
import figmaIcon from '../assets/toolslogo/Figma.png';
import clockIcon from '../assets/whylevelupicon/Vector.png';
import calendarIcon from '../assets/whylevelupicon/Hands-on Project.png';
import arrowRightIcon from '../assets/whylevelupicon/ArrowRight.png';
import './CSS/DashboardFundamental.css';

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

const staggerContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
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

const DashboardFundamental: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    { 
      id: 1, 
      question: 'Do I need design experience to take this course?', 
      answer: 'Basic understanding of Figma is required. If you\'re familiar with design tools, you\'re ready to start.' 
    },
    { 
      id: 2, 
      question: 'What tools will I learn in this course?', 
      answer: 'You\'ll master Figma, Excalidraw, and Base44 for creating professional dashboard designs.' 
    },
    { 
      id: 3, 
      question: 'Will I create a real dashboard project?', 
      answer: 'Yes. You will complete a portfolio-ready dashboard design project with real-world data visualizations.' 
    },
    { 
      id: 4, 
      question: 'How long does it take to complete the course?', 
      answer: 'The course is 2 hours of content spread over 2 months, allowing you to learn at your own pace.' 
    },
    { 
      id: 5, 
      question: 'What career opportunities will this open up?', 
      answer: 'You can work as a UI/UX Designer, Dashboard Designer, Data Visualization Specialist, or Product Designer.' 
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleCourse = (courseId: string) => {
    setSelectedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  // Refs and inView hooks for each section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const learnRef = useRef(null);
  const learnInView = useInView(learnRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });

  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });

  const recommendedRef = useRef(null);
  const recommendedInView = useInView(recommendedRef, { once: true, amount: 0.15, margin: "0px 0px -50px 0px" });

  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });

  return (
    <div className="dashboard-fundamental-page">
      <Navbar />
      
      <main className="dashboard-fundamental-main">
        {/* Hero Section */}
        <section className="dashboard-hero" ref={heroRef}>
          <div className="dashboard-hero-card">
            {/* Left Content */}
            <div className="dashboard-hero-content">
              {/* Title and Description */}
              <div className="dashboard-hero-header">
                <div className="dashboard-hero-text">
                  <motion.h1 
                    className="dashboard-hero-title"
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    variants={titleVariants}
                  >Dashboard UI/UX Design</motion.h1>
                  <motion.p 
                    className="dashboard-hero-description"
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    variants={descriptionVariants}
                  >
                    Design professional dashboards with real-world practice in Figma
                  </motion.p>
                </div>

                {/* Requirement Badge */}
                <motion.div 
                  className="dashboard-requirement"
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={descriptionVariants}
                >
                  <img src={sealCheckIcon} alt="Check" className="dashboard-req-icon" />
                  <span>Basic understanding of Figma is required</span>
                </motion.div>
              </div>

              {/* Info Cards */}
              <motion.div 
                className="dashboard-hero-info"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={staggerContainerVariants}
              >
                <motion.div className="dashboard-info-item" variants={staggerItemVariants}>
                  <img src={rsIcon} alt="Price" className="dashboard-info-icon" />
                  <span className="dashboard-info-text">₹8000</span>
                </motion.div>
                <motion.div className="dashboard-info-item" variants={staggerItemVariants}>
                  <img src={alaramIcon} alt="Duration" className="dashboard-info-icon" />
                  <span className="dashboard-info-text">2 hrs</span>
                </motion.div>
                <motion.div className="dashboard-info-item" variants={staggerItemVariants}>
                  <img src={dateIcon} alt="Timeline" className="dashboard-info-icon-date" />
                  <span className="dashboard-info-text">2 months</span>
                </motion.div>
              </motion.div>

              {/* Buttons */}
              <motion.div 
                className="dashboard-hero-buttons"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={buttonVariants}
              >
                <button className="dashboard-btn-primary">Enroll Now</button>
                <button className="dashboard-btn-secondary">
                  <Phone size={24} />
                  Know More
                </button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              className="dashboard-hero-image"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
            >
              <img src={dashboardImage} alt="Dashboard UI/UX Design" />
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="dashboard-learn-section" ref={learnRef}>
          <div className="dashboard-learn-container">
            {/* Header */}
            <div className="dashboard-learn-header">
              <motion.h2 
                className="dashboard-learn-title"
                initial="hidden"
                animate={learnInView ? "visible" : "hidden"}
                variants={titleVariants}
              >What You'll learn</motion.h2>
              <motion.p 
                className="dashboard-learn-subtitle"
                initial="hidden"
                animate={learnInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* Learning Grid */}
            <motion.div 
              className="dashboard-learn-grid"
              initial="hidden"
              animate={learnInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {/* Row 1 */}
              <div>
                <motion.div className="dashboard-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Anatomy Of Dashboard</h3>
                </motion.div>
                <motion.div className="dashboard-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Dive into KPI's and Business Metrics</h3>
                </motion.div>
              </div>

              {/* Row 2 */}
              <div>
                <motion.div className="dashboard-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">User Research for Dashboard</h3>
                </motion.div>
                <motion.div className="dashboard-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Decoding Data Visualizations</h3>
                </motion.div>
              </div>

              {/* Row 3 */}
              <div>
                <motion.div className="dashboard-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Grid systems in Dashboards</h3>
                </motion.div>
                <motion.div className="dashboard-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Designing Dashboard in Figma</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools You'll Learn Section */}
        <section className="dashboard-tools-section" ref={toolsRef}>
          <div className="dashboard-tools-container">
            {/* Header */}
            <div className="dashboard-tools-header">
              <motion.h2 
                className="dashboard-tools-title"
                initial="hidden"
                animate={toolsInView ? "visible" : "hidden"}
                variants={titleVariants}
              >Tools You'll Learn</motion.h2>
              <motion.p 
                className="dashboard-tools-subtitle"
                initial="hidden"
                animate={toolsInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand UI/UX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* Tools Grid */}
            <motion.div 
              className="dashboard-tools-grid"
              initial="hidden"
              animate={toolsInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {/* Figma */}
              <motion.div className="dashboard-tool-card" variants={staggerItemVariants}>
                <div className="dashboard-tool-content">
                  <div className="dashboard-tool-icon-wrapper">
                    <img src={figmaIcon} alt="Figma" className="dashboard-tool-icon" />
                  </div>
                  <span className="dashboard-tool-name">Figma</span>
                </div>
              </motion.div>

              {/* Excalidraw */}
              <motion.div className="dashboard-tool-card" variants={staggerItemVariants}>
                <div className="dashboard-tool-content">
                  <div className="dashboard-tool-icon-wrapper">
                    <svg className="dashboard-tool-icon-svg" viewBox="0 0 56 56" fill="none">
                      <path d="M28 0L52 14V42L28 56L4 42V14L28 0Z" fill="#FEFEFE"/>
                    </svg>
                  </div>
                  <span className="dashboard-tool-name">Excalidraw</span>
                </div>
              </motion.div>

              {/* Base44 */}
              <motion.div className="dashboard-tool-card" variants={staggerItemVariants}>
                <div className="dashboard-tool-content">
                  <div className="dashboard-tool-icon-wrapper">
                    <div className="dashboard-tool-base44">
                      <div className="base44-circle"></div>
                      <div className="base44-circle"></div>
                      <div className="base44-circle"></div>
                    </div>
                  </div>
                  <span className="dashboard-tool-name">Base44</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Recommended Short Courses Section */}
        <section className="dashboard-recommended-section" ref={recommendedRef}>
          <div className="dashboard-recommended-container">
            {/* Header */}
            <div className="dashboard-recommended-header">
              <motion.h2 
                className="dashboard-recommended-title"
                initial="hidden"
                animate={recommendedInView ? "visible" : "hidden"}
                variants={titleVariants}
              >Add Recommended Short Courses</motion.h2>
              <motion.p 
                className="dashboard-recommended-subtitle"
                initial="hidden"
                animate={recommendedInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* Content Grid */}
            <motion.div 
              className="dashboard-recommended-content"
              initial="hidden"
              animate={recommendedInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {/* Left Side - Course Cards */}
              <div className="dashboard-courses-grid">
                {/* Dashboard Fundamentals */}
                <motion.div className="dashboard-course-card" variants={staggerItemVariants}>
                  <div className="dashboard-course-info">
                    <div className="dashboard-course-header">
                      <span className="dashboard-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="dashboard-course-title">DASHBOARD FUNDAMENTALS</h3>
                    </div>
                    <div className="dashboard-course-meta">
                      <div className="dashboard-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="dashboard-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="dashboard-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`dashboard-course-select ${selectedCourses.includes('dashboard-fundamentals') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('dashboard-fundamentals')}
                  >
                    {selectedCourses.includes('dashboard-fundamentals') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>

                {/* Full UI/UX Course */}
                <motion.div className="dashboard-course-card" variants={staggerItemVariants}>
                  <div className="dashboard-course-info">
                    <div className="dashboard-course-header">
                      <span className="dashboard-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="dashboard-course-title">Full UI/UX COURSE</h3>
                    </div>
                    <div className="dashboard-course-meta">
                      <div className="dashboard-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="dashboard-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="dashboard-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`dashboard-course-select ${selectedCourses.includes('full-uiux') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('full-uiux')}
                  >
                    {selectedCourses.includes('full-uiux') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>

                {/* Design System Course */}
                <motion.div className="dashboard-course-card" variants={staggerItemVariants}>
                  <div className="dashboard-course-info">
                    <div className="dashboard-course-header">
                      <span className="dashboard-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="dashboard-course-title">DESIGN SYSTEM COURSE</h3>
                    </div>
                    <div className="dashboard-course-meta">
                      <div className="dashboard-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="dashboard-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="dashboard-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`dashboard-course-select ${selectedCourses.includes('design-system') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('design-system')}
                  >
                    {selectedCourses.includes('design-system') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>

                {/* UI/UX Design with AI */}
                <motion.div className="dashboard-course-card" variants={staggerItemVariants}>
                  <div className="dashboard-course-info">
                    <div className="dashboard-course-header">
                      <span className="dashboard-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="dashboard-course-title">UI/UX DESIGN WITH AI</h3>
                    </div>
                    <div className="dashboard-course-meta">
                      <div className="dashboard-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="dashboard-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="dashboard-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`dashboard-course-select ${selectedCourses.includes('uiux-ai') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('uiux-ai')}
                  >
                    {selectedCourses.includes('uiux-ai') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>
              </div>

              {/* Right Side - Pricing Panel */}
              <motion.div className="dashboard-pricing-panel" variants={staggerItemVariants}>
                <div className="dashboard-pricing-badge">Total Price</div>
                
                <h3 className="dashboard-pricing-package">
                  DASHBOARD FUNDAMENTALS + FULL UI/UX COURSE + DESIGN SYSTEM COURSE+ UI/UX DESIGN WITH AI
                </h3>

                <div className="dashboard-pricing-details">
                  <div className="dashboard-pricing-item">
                    <span>Course Fees</span>
                    <span>₹90000</span>
                  </div>
                  <div className="dashboard-pricing-item">
                    <span>GST</span>
                    <span>₹00000</span>
                  </div>
                  <div className="dashboard-pricing-item">
                    <span>Discount</span>
                    <span>₹10000</span>
                  </div>
                  <div className="dashboard-pricing-item dashboard-pricing-total">
                    <span>Total</span>
                    <span>₹80000</span>
                  </div>
                  <div className="dashboard-pricing-item dashboard-pricing-monthly">
                    <span>Monthly</span>
                    <span>₹27000</span>
                  </div>
                </div>

                <button className="dashboard-pricing-btn">Make Payment</button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="dashboard-faq-section" ref={faqRef}>
          <div className="dashboard-faq-container">
            {/* Header */}
            <div className="dashboard-faq-header">
              <motion.h2 
                className="dashboard-faq-title"
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={titleVariants}
              >Your Questions Answered</motion.h2>
              <motion.p 
                className="dashboard-faq-subtitle"
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand UI/UX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* FAQ List */}
            <motion.div 
              className="dashboard-faq-list"
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {faqs.map((faq) => (
                <motion.div key={faq.id} className="dashboard-faq-item" variants={staggerItemVariants}>
                  <button 
                    className="dashboard-faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    {openFAQ === faq.id ? <Minus size={40} /> : <Plus size={40} />}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="dashboard-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardFundamental;
