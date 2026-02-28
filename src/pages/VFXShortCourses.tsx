import React, { useState } from 'react';
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

const VFXShortCourses: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>(['ai-animation']);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { id: 1, question: 'Do I need prior animation experience?', answer: 'No prior experience is required. Our course is designed for beginners and will guide you through all the fundamentals.' },
    { id: 2, question: 'What software and system requirements are needed?', answer: 'You will need a computer with at least 8GB RAM, and we will guide you through installing the necessary free and paid software.' },
    { id: 3, question: 'Will I create a full AI animated short film?', answer: 'Yes! By the end of the course, you will have created your own AI-powered animated short film from start to finish.' },
    { id: 4, question: 'How is AI animation different from traditional animation?', answer: 'AI animation uses machine learning tools to automate and enhance the animation process, making it faster and more accessible than traditional frame-by-frame animation.' },
    { id: 5, question: 'What career opportunities will I get?', answer: 'You will be prepared for roles in animation studios, game development, VFX companies, and freelance opportunities in the growing AI animation industry.' }
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

  return (
    <div className="vfx-short-courses-page">
      <Navbar />
      
      <main className="vfx-short-courses-main">
        {/* Hero Section */}
        <section className="vfx-sc-hero">
          <div className="vfx-sc-hero-card">
            {/* Left Content */}
            <div className="vfx-sc-hero-content">
              {/* Title and Description */}
              <div className="vfx-sc-hero-text">
                <h1 className="vfx-sc-hero-title">AI Animation Course</h1>
                <p className="vfx-sc-hero-description">
                  Your career in AI-powered 3D animation starts here. Fast-track learning with real-world projects and industry-ready skills. Grow at your own pace.
                </p>
              </div>

              {/* Info Cards */}
              <div className="vfx-sc-hero-info">
                <div className="vfx-sc-info-item">
                  <IndianRupee size={56} className="vfx-sc-info-icon" />
                  <span className="vfx-sc-info-text">₹10000</span>
                </div>
                <div className="vfx-sc-info-item">
                  <img src={clockIcon} alt="Duration" className="vfx-sc-info-icon" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
                  <span className="vfx-sc-info-text">2 hrs</span>
                </div>
                <div className="vfx-sc-info-item">
                  <img src={calendarIcon} alt="Timeline" className="vfx-sc-info-icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                  <span className="vfx-sc-info-text">3 months</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="vfx-sc-hero-buttons">
                <button className="vfx-sc-btn-primary">Pay Now</button>
                <button className="vfx-sc-btn-secondary">
                  <Phone size={24} />
                  Know More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="vfx-sc-hero-image">
              <img src={characterImage} alt="AI Animation Course Instructor" />
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="vfx-sc-learn-section">
          <div className="vfx-sc-learn-container">
            {/* Header */}
            <div className="vfx-sc-learn-header">
              <h2 className="vfx-sc-learn-title">What You'll learn</h2>
              <p className="vfx-sc-learn-subtitle">
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </p>
            </div>

            {/* Learning Grid */}
            <div className="vfx-sc-learn-grid">
              {/* Row 1 */}
              <div>
                <div className="vfx-sc-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Generate Base Model</h3>
                </div>
                <div className="vfx-sc-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Animate from render</h3>
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <div className="vfx-sc-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Auto-rig</h3>
                </div>
                <div className="vfx-sc-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Import from video</h3>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <div className="vfx-sc-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Add facial-animation</h3>
                </div>
                <div className="vfx-sc-learn-item">
                  <img src={sealCheckIcon} alt="Check" className="vfx-sc-learn-icon" />
                  <h3 className="vfx-sc-learn-item-title">Add facial-animation</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools You'll Learn Section */}
        <section className="vfx-sc-tools-section">
          <div className="vfx-sc-tools-container">
            {/* Header */}
            <div className="vfx-sc-tools-header">
              <h2 className="vfx-sc-tools-title">Tools You'll Learn</h2>
              <p className="vfx-sc-tools-subtitle">
                Learn in-demand VFX skills through practical, mentor-led training
              </p>
            </div>

            {/* Tools Grid */}
            <div className="vfx-sc-tools-grid">
              <div className="vfx-sc-tool-item">
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={moveAiIcon} alt="Move.ai" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">Move.ai</span>
              </div>

              <div className="vfx-sc-tool-item">
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={mixamoIcon} alt="Mixamo" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">Mixamo</span>
              </div>

              <div className="vfx-sc-tool-item">
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={lummaAiIcon} alt="Lumma AI" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">Lumma AI</span>
              </div>

              <div className="vfx-sc-tool-item">
                <div className="vfx-sc-tool-icon-wrapper">
                  <img src={nvidiaIcon} alt="NVIDIA Audio2Face" className="vfx-sc-tool-icon" />
                </div>
                <span className="vfx-sc-tool-name">NVIDIA Audio2Face</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Short Courses Section */}
        <section className="vfx-sc-recommended-section">
          <div className="vfx-sc-recommended-container">
            {/* Header */}
            <div className="vfx-sc-recommended-header">
              <h2 className="vfx-sc-recommended-title">Add Recommended Short Courses</h2>
              <p className="vfx-sc-recommended-subtitle">
                Learn in-demand UI/UX and VFX skills through practical, mentor-led training
              </p>
            </div>

            {/* Content Grid */}
            <div className="vfx-sc-recommended-content">
              {/* Left Side - Course Cards */}
              <div className="vfx-sc-courses-grid">
                {/* AI Animation Course */}
                <div className="vfx-sc-course-card">
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
                </div>

                {/* Full VFX Course */}
                <div className="vfx-sc-course-card">
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
                </div>

                {/* Unreal Engine Course */}
                <div className="vfx-sc-course-card">
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
                </div>

                {/* Blender Learning Course */}
                <div className="vfx-sc-course-card">
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
                </div>
              </div>

              {/* Right Side - Pricing Panel */}
              <div className="vfx-sc-pricing-panel">
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
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="vfx-sc-faq-section">
          <div className="vfx-sc-faq-container">
            {/* Header */}
            <div className="vfx-sc-faq-header">
              <h2 className="vfx-sc-faq-title">Your Questions Answered</h2>
              <p className="vfx-sc-faq-subtitle">
                Learn in-demand VFX skills through practical, mentor-led training
              </p>
            </div>

            {/* FAQ List */}
            <div className="vfx-sc-faq-list">
              {faqs.map((faq) => (
                <div key={faq.id} className="vfx-sc-faq-item">
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

export default VFXShortCourses;
