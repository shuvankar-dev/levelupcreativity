import React, { useState, useEffect } from 'react';
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

  return (
    <div className="dashboard-fundamental-page">
      <Navbar />
      
      <main className="dashboard-fundamental-main">
        {/* Hero Section */}
        <section className="dashboard-hero">
          <div className="dashboard-hero-card">
            {/* Left Content */}
            <div className="dashboard-hero-content">
              {/* Title and Description */}
              <div className="dashboard-hero-header">
                <div className="dashboard-hero-text">
                  <h1 className="dashboard-hero-title">Dashboard UI/UX Design</h1>
                  <p className="dashboard-hero-description">
                    Design professional dashboards with real-world practice in Figma
                  </p>
                </div>

                {/* Requirement Badge */}
                <div className="dashboard-requirement">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-req-icon" />
                  <span>Basic understanding of Figma is required</span>
                </div>
              </div>

              {/* Info Cards */}
              <div className="dashboard-hero-info">
                <div className="dashboard-info-item">
                  <img src={rsIcon} alt="Price" className="dashboard-info-icon" />
                  <span className="dashboard-info-text">₹8000</span>
                </div>
                <div className="dashboard-info-item">
                  <img src={alaramIcon} alt="Duration" className="dashboard-info-icon" />
                  <span className="dashboard-info-text">2 hrs</span>
                </div>
                <div className="dashboard-info-item">
                  <img src={dateIcon} alt="Timeline" className="dashboard-info-icon-date" />
                  <span className="dashboard-info-text">2 months</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="dashboard-hero-buttons">
                <button className="dashboard-btn-primary">Enroll Now</button>
                <button className="dashboard-btn-secondary">
                  <Phone size={24} />
                  Know More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="dashboard-hero-image">
              <img src={dashboardImage} alt="Dashboard UI/UX Design" />
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="dashboard-learn-section">
          <div className="dashboard-learn-container">
            {/* Header */}
            <div className="dashboard-learn-header">
              <h2 className="dashboard-learn-title">What You'll learn</h2>
              <p className="dashboard-learn-subtitle">
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </p>
            </div>

            {/* Learning Grid */}
            <div className="dashboard-learn-grid">
              {/* Row 1 */}
              <div>
                <div className="dashboard-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Anatomy Of Dashboard</h3>
                </div>
                <div className="dashboard-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Dive into KPI's and Business Metrics</h3>
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <div className="dashboard-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">User Research for Dashboard</h3>
                </div>
                <div className="dashboard-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Decoding Data Visualizations</h3>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <div className="dashboard-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Grid systems in Dashboards</h3>
                </div>
                <div className="dashboard-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="dashboard-learn-icon" />
                  <h3 className="dashboard-learn-item-title">Designing Dashboard in Figma</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools You'll Learn Section */}
        <section className="dashboard-tools-section">
          <div className="dashboard-tools-container">
            {/* Header */}
            <div className="dashboard-tools-header">
              <h2 className="dashboard-tools-title">Tools You'll Learn</h2>
              <p className="dashboard-tools-subtitle">
                Learn in-demand UI/UX skills through practical, mentor-led training
              </p>
            </div>

            {/* Tools Grid */}
            <div className="dashboard-tools-grid">
              {/* Figma */}
              <div className="dashboard-tool-card">
                <div className="dashboard-tool-content">
                  <div className="dashboard-tool-icon-wrapper">
                    <img src={figmaIcon} alt="Figma" className="dashboard-tool-icon" />
                  </div>
                  <span className="dashboard-tool-name">Figma</span>
                </div>
              </div>

              {/* Excalidraw */}
              <div className="dashboard-tool-card">
                <div className="dashboard-tool-content">
                  <div className="dashboard-tool-icon-wrapper">
                    <svg className="dashboard-tool-icon-svg" viewBox="0 0 56 56" fill="none">
                      <path d="M28 0L52 14V42L28 56L4 42V14L28 0Z" fill="#FEFEFE"/>
                    </svg>
                  </div>
                  <span className="dashboard-tool-name">Excalidraw</span>
                </div>
              </div>

              {/* Base44 */}
              <div className="dashboard-tool-card">
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
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Short Courses Section */}
        <section className="dashboard-recommended-section">
          <div className="dashboard-recommended-container">
            {/* Header */}
            <div className="dashboard-recommended-header">
              <h2 className="dashboard-recommended-title">Add Recommended Short Courses</h2>
              <p className="dashboard-recommended-subtitle">
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </p>
            </div>

            {/* Content Grid */}
            <div className="dashboard-recommended-content">
              {/* Left Side - Course Cards */}
              <div className="dashboard-courses-grid">
                {/* Dashboard Fundamentals */}
                <div className="dashboard-course-card">
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
                </div>

                {/* Full UI/UX Course */}
                <div className="dashboard-course-card">
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
                </div>

                {/* Design System Course */}
                <div className="dashboard-course-card">
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
                </div>

                {/* UI/UX Design with AI */}
                <div className="dashboard-course-card">
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
                </div>
              </div>

              {/* Right Side - Pricing Panel */}
              <div className="dashboard-pricing-panel">
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
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="dashboard-faq-section">
          <div className="dashboard-faq-container">
            {/* Header */}
            <div className="dashboard-faq-header">
              <h2 className="dashboard-faq-title">Your Questions Answered</h2>
              <p className="dashboard-faq-subtitle">
                Learn in-demand UI/UX skills through practical, mentor-led training
              </p>
            </div>

            {/* FAQ List */}
            <div className="dashboard-faq-list">
              {faqs.map((faq) => (
                <div key={faq.id} className="dashboard-faq-item">
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardFundamental;
