import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/FreeCourseSection.css';
import figmaLogo from '../assets/toolslogo/Figma.png';
import lookIcon from '../assets/look.png';

const FreeCourseSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'ux' | 'vfx'>('ux');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, track: selectedTrack });
  };

  // Animation variants - smooth like ToolsSection
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3
      }
    }
  };

  return (
    <section className="free-course-section" ref={sectionRef}>
      <div className="free-course-container">
        {/* Header */}
        <div className="free-course-header">
          <motion.h2 
            className="free-course-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Get the course- Its Free
          </motion.h2>
          <motion.p 
            className="free-course-description"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Start your learning journey with our comprehensive mini course
          </motion.p>
        </div>

        {/* Card Area */}
        <motion.div 
          className="free-course-card-area"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <form className="free-course-card" onSubmit={handleSubmit}>
            {/* Choose Your Track Section */}
            <div className="track-selection-section">
              <label className="track-label">Choose Your Track</label>
              <div className="track-buttons">
                <button
                  type="button"
                  className={`track-button ${selectedTrack === 'ux' ? 'active' : ''}`}
                  onClick={() => setSelectedTrack('ux')}
                >
                  <img src={figmaLogo} alt="Figma" className="track-icon" />
                  <span>UX /UI Design</span>
                </button>
                <button
                  type="button"
                  className={`track-button ${selectedTrack === 'vfx' ? 'active' : ''}`}
                  onClick={() => setSelectedTrack('vfx')}
                >
                  <img src={figmaLogo} alt="VFX" className="track-icon" />
                  <span>VFX Animation</span>
                </button>
              </div>
            </div>

            {/* Full Name Input */}
            <div className="input-field">
              <label className="input-label">Full Name</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#6F677E"/>
                  <path d="M22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="input-field">
              <label className="input-label">Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#6F677E"/>
                  <path d="M22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Mobile Input */}
            <div className="input-field">
              <label className="input-label">Mobile</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#6F677E"/>
                  <path d="M22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Claim your free mini course
            </button>

            {/* Security Info */}
            <div className="security-info">
              <img src={lookIcon} alt="Secure" width="20" height="20" />
              <span>Your information is secure</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeCourseSection;
