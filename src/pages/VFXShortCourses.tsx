import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { IndianRupee, Phone, Check, Square, Plus, Minus } from 'lucide-react';
import characterImage from '../assets/VFXShortCources/1.png';
import sealCheckIcon from '../assets/SealCheckVfx.png';
import moveAiIcon from '../assets/Aianimationcourse/1.png';
import mixamoIcon from '../assets/Aianimationcourse/2.png';
import lummaAiIcon from '../assets/Aianimationcourse/3.png';
import nvidiaIcon from '../assets/Aianimationcourse/4.png';
import clockIcon from '../assets/whylevelupicon/Vector.png';
import calendarIcon from '../assets/whylevelupicon/Hands-on Project.png';
import arrowRightIcon from '../assets/whylevelupicon/ArrowRight.png';
import './CSS/VFXShortCourses.css';

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

const VFXShortCourses: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>(['ai-animation']);
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const faqs = [
    { 
      id: 1, 
      question: 'Do I need prior animation experience?', 
      answer: 'No. Beginners can join. Basic computer knowledge is enough.' 
    },
    { 
      id: 2, 
      question: 'What software and system requirements are needed?', 
      answer: 'You\'ll learn Luma AI, Mixamo, Move.AI, and Audio2Face. A mid-range PC with a GPU is recommended. Guidance will be provided.' 
    },
    { 
      id: 3, 
      question: 'Will I create a full AI animated short film?', 
      answer: 'Yes. You will complete one portfolio-ready AI animated short film.' 
    },
    { 
      id: 4, 
      question: 'How is AI animation different from traditional animation?', 
      answer: 'AI animation is faster, automated, and production-ready while still creative.' 
    },
    { 
      id: 5, 
      question: 'What career opportunities will I get?', 
      answer: 'You can work as an AI Animator, Mocap Artist, Content Creator, or Freelancer.' 
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const courses = [
    { id: 'ai-animation', title: 'AI ANIMATION COURSE', hours: '2 hours', duration: '3 Months', mode: 'ONLINE/OFFLINE' },
    { id: 'full-vfx', title: 'Full VFX Course', hours: '2 hours', duration: '3 Months', mode: 'ONLINE/OFFLINE' },
    { id: 'unreal-engine', title: 'UNREAL ENGINE COURSE', hours: '2 hours', duration: '3 Months', mode: 'ONLINE/OFFLINE' },
    { id: 'blender', title: 'BLENDER LEARNING COURSE', hours: '2 hours', duration: '3 Months', mode: 'ONLINE/OFFLINE' }
  ];

  const toggleCourse = (courseId: string) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const learningItems = [
    { id: 1, title: 'Generate Base Model' },
    { id: 2, title: 'Animate from render' },
    { id: 3, title: 'Auto-rig' },
    { id: 4, title: 'Import from video' },
    { id: 5, title: 'Add facial-animation' },
    { id: 6, title: 'Add facial-animation' }
  ];

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
    <div className="vfx-short-courses-page">
      <Navbar />
      
      <main className="vfx-short-courses-main">
        {/* Hero Section */}
        <section className="vfx-sc-hero" ref={heroRef}>
          <div className="vfx-sc-hero-card">
            {/* Left Content */}
            <div className="vfx-sc-hero-content">
              {/* Title and Description */}
              <div className="vfx-sc-hero-text">
                <motion.h1 
                  className="vfx-sc-hero-title"
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={titleVariants}
                >AI Animation Course</motion.h1>
                <motion.p 
                  className="vfx-sc-hero-description"
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={descriptionVariants}
                >
                  Your career in AI-powered 3D animation starts here. Fast-track learning with real-world projects and industry-ready skills. Grow at your own pace.
                </motion.p>
              </div>

              {/* Info Cards */}
              <motion.div 
                className="vfx-sc-hero-info"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={staggerContainerVariants}
              >
                <motion.div className="vfx-sc-info-item" variants={staggerItemVariants}>
                  <IndianRupee size={56} className="vfx-sc-info-icon" />
                  <span className="vfx-sc-info-text">₹10000</span>
                </motion.div>
                <motion.div className="vfx-sc-info-item" variants={staggerItemVariants}>
                  <img src={clockIcon} alt="Duration" className="vfx-sc-info-icon" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
                  <span className="vfx-sc-info-text">2 hrs</span>
                </motion.div>
                <motion.div className="vfx-sc-info-item" variants={staggerItemVariants}>
                  <img src={calendarIcon} alt="Timeline" className="vfx-sc-info-icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                  <span className="vfx-sc-info-text">3 months</span>
                </motion.div>
              </motion.div>

              {/* Buttons */}
              <motion.div 
                className="vfx-sc-hero-buttons"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={buttonVariants}
              >
                <button className="vfx-sc-btn-primary">Pay Now</button>
                <button className="vfx-sc-btn-secondary">
                  <Phone size={24} />
                  Know More
                </button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              className="vfx-sc-hero-image"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
            >
              <img src={characterImage} alt="AI Animation Course Instructor" />
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="vfx-sc-learn-section" ref={learnRef}>
          <div className="vfx-sc-learn-container">
            {/* Header */}
            <div className="vfx-sc-learn-header">
              <motion.h2 
                className="vfx-sc-learn-title"
                initial="hidden"
                animate={learnInView ? "visible" : "hidden"}
                variants={titleVariants}
              >What You'll learn</motion.h2>
              <motion.p 
                className="vfx-sc-learn-subtitle"
                initial="hidden"
                animate={learnInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* Learning Grid */}
            <motion.div 
              className="vfx-sc-learn-grid"
              initial="hidden"
              animate={learnInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {/* Row 1 */}
              <div>
                <motion.div className="vfx-sc-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Generate Base Model</h3>
                </motion.div>
                <motion.div className="vfx-sc-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Animate from render</h3>
                </motion.div>
              </div>

              {/* Row 2 */}
              <div>
                <motion.div className="vfx-sc-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Auto-rig</h3>
                </motion.div>
                <motion.div className="vfx-sc-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Import from video</h3>
                </motion.div>
              </div>

              {/* Row 3 */}
              <div>
                <motion.div className="vfx-sc-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Add facial-animation</h3>
                </motion.div>
                <motion.div className="vfx-sc-learn-item" variants={staggerItemVariants}>
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Add facial-animation</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools You'll Learn Section */}
        <section className="vfx-sc-tools-section" ref={toolsRef}>
          <div className="vfx-sc-tools-container">
            {/* Header */}
            <div className="vfx-sc-tools-header">
              <motion.h2 
                className="vfx-sc-tools-title"
                initial="hidden"
                animate={toolsInView ? "visible" : "hidden"}
                variants={titleVariants}
              >Tools You'll Learn</motion.h2>
              <motion.p 
                className="vfx-sc-tools-subtitle"
                initial="hidden"
                animate={toolsInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand VFX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* Tools Grid */}
            <motion.div 
              className="vfx-sc-tools-grid"
              initial="hidden"
              animate={toolsInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              <motion.div className="vfx-sc-tool-item" variants={staggerItemVariants}>
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={moveAiIcon} alt="Move.ai" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">Move.ai</span>
              </motion.div>

              <motion.div className="vfx-sc-tool-item" variants={staggerItemVariants}>
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={mixamoIcon} alt="Mixamo" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">Mixamo</span>
              </motion.div>

              <motion.div className="vfx-sc-tool-item" variants={staggerItemVariants}>
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={lummaAiIcon} alt="Lumma AI" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">Lumma AI</span>
              </motion.div>

              <motion.div className="vfx-sc-tool-item" variants={staggerItemVariants}>
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={nvidiaIcon} alt="NVIDIA Audio2Face" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">NVIDIA Audio2Face</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Recommended Short Courses Section */}
        <section className="vfx-sc-recommended-section" ref={recommendedRef}>
          <div className="vfx-sc-recommended-container">
            {/* Header */}
            <div className="vfx-sc-recommended-header">
              <motion.h2 
                className="vfx-sc-recommended-title"
                initial="hidden"
                animate={recommendedInView ? "visible" : "hidden"}
                variants={titleVariants}
              >Add Recommended Short Courses</motion.h2>
              <motion.p 
                className="vfx-sc-recommended-subtitle"
                initial="hidden"
                animate={recommendedInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* Content Grid */}
            <motion.div 
              className="vfx-sc-recommended-content"
              initial="hidden"
              animate={recommendedInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {/* Left Side - Course Cards */}
              <div className="vfx-sc-courses-grid">
                {/* AI Animation Course */}
                <motion.div className="vfx-sc-course-card" variants={staggerItemVariants}>
                  <div className="vfx-sc-course-info">
                    <div className="vfx-sc-course-header">
                      <span className="vfx-sc-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="vfx-sc-course-title">AI ANIMATION COURSE</h3>
                    </div>
                    <div className="vfx-sc-course-meta">
                      <div className="vfx-sc-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="vfx-sc-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="vfx-sc-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`vfx-sc-course-select ${selectedCourses.includes('ai-animation') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('ai-animation')}
                  >
                    {selectedCourses.includes('ai-animation') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>

                {/* Full VFX Course */}
                <motion.div className="vfx-sc-course-card" variants={staggerItemVariants}>
                  <div className="vfx-sc-course-info">
                    <div className="vfx-sc-course-header">
                      <span className="vfx-sc-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="vfx-sc-course-title">Full VFX Course</h3>
                    </div>
                    <div className="vfx-sc-course-meta">
                      <div className="vfx-sc-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="vfx-sc-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="vfx-sc-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`vfx-sc-course-select ${selectedCourses.includes('full-vfx') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('full-vfx')}
                  >
                    {selectedCourses.includes('full-vfx') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>

                {/* Unreal Engine Course */}
                <motion.div className="vfx-sc-course-card" variants={staggerItemVariants}>
                  <div className="vfx-sc-course-info">
                    <div className="vfx-sc-course-header">
                      <span className="vfx-sc-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="vfx-sc-course-title">UNREAL ENGINE COURSE</h3>
                    </div>
                    <div className="vfx-sc-course-meta">
                      <div className="vfx-sc-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="vfx-sc-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="vfx-sc-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`vfx-sc-course-select ${selectedCourses.includes('unreal-engine') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('unreal-engine')}
                  >
                    {selectedCourses.includes('unreal-engine') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>

                {/* Blender Learning Course */}
                <motion.div className="vfx-sc-course-card" variants={staggerItemVariants}>
                  <div className="vfx-sc-course-info">
                    <div className="vfx-sc-course-header">
                      <span className="vfx-sc-course-mode">ONLINE/OFFLINE</span>
                      <h3 className="vfx-sc-course-title">BLENDER LEARNING COURSE</h3>
                    </div>
                    <div className="vfx-sc-course-meta">
                      <div className="vfx-sc-course-meta-item">
                        <img src={clockIcon} alt="Duration" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>2 hours</span>
                      </div>
                      <div className="vfx-sc-course-meta-item">
                        <img src={calendarIcon} alt="Timeline" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        <span>3 Months</span>
                      </div>
                    </div>
                  </div>
                  <button className="vfx-sc-course-btn">
                    <span>View Details</span>
                    <img src={arrowRightIcon} alt="Arrow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </button>
                  <button 
                    className={`vfx-sc-course-select ${selectedCourses.includes('blender') ? 'selected' : ''}`}
                    onClick={() => toggleCourse('blender')}
                  >
                    {selectedCourses.includes('blender') ? <Check size={40} /> : <Square size={32} />}
                  </button>
                </motion.div>
              </div>

              {/* Right Side - Pricing Panel */}
              <motion.div className="vfx-sc-pricing-panel" variants={staggerItemVariants}>
                <div className="vfx-sc-pricing-badge">Total Price</div>
                
                <h3 className="vfx-sc-pricing-package">
                  VFX ANIMATION COURSE + LIVE PORTFOLIO WEBSITE + UNREAL ENGINE+ BLENDER LEARNING COURSE
                </h3>

                <div className="vfx-sc-pricing-details">
                  <div className="vfx-sc-pricing-item">
                    <span>Course Fees</span>
                    <span>₹90000</span>
                  </div>
                  <div className="vfx-sc-pricing-item">
                    <span>GST</span>
                    <span>₹00000</span>
                  </div>
                  <div className="vfx-sc-pricing-item">
                    <span>Discount</span>
                    <span>₹10000</span>
                  </div>
                  <div className="vfx-sc-pricing-item vfx-sc-pricing-total">
                    <span>Total</span>
                    <span>₹80000</span>
                  </div>
                  <div className="vfx-sc-pricing-item vfx-sc-pricing-monthly">
                    <span>Monthly</span>
                    <span>₹27000</span>
                  </div>
                </div>

                <button className="vfx-sc-pricing-btn">Make Payment</button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="vfx-sc-faq-section" ref={faqRef}>
          <div className="vfx-sc-faq-container">
            {/* Header */}
            <div className="vfx-sc-faq-header">
              <motion.h2 
                className="vfx-sc-faq-title"
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={titleVariants}
              >Your Questions Answered</motion.h2>
              <motion.p 
                className="vfx-sc-faq-subtitle"
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={descriptionVariants}
              >
                Learn in-demand VFX skills through practical, mentor-led training
              </motion.p>
            </div>

            {/* FAQ List */}
            <motion.div 
              className="vfx-sc-faq-list"
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
            >
              {faqs.map((faq) => (
                <motion.div key={faq.id} className="vfx-sc-faq-item" variants={staggerItemVariants}>
                  <button 
                    className="vfx-sc-faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    {openFAQ === faq.id ? <Minus size={40} /> : <Plus size={40} />}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="vfx-sc-faq-answer">
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

export default VFXShortCourses;
