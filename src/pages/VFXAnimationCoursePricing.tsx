import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/VFXAnimationCoursePricing.css';
import FigmaLogo from '../assets/FigmaLogo.png';
import EnrollModal from '../components/EnrollModal';

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

const VFXAnimationCoursePricing: React.FC = () => {
  const [rightPaymentType, setRightPaymentType] = useState<'3-months' | '6-months'>('3-months');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: '0px 0px -50px 0px'
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919836841945', '_blank');
  };

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
  };

  return (
    <section className="vfx-pricing-section" ref={sectionRef}>
      <div className="vfx-pricing-container">
        {/* Header */}
        <div className="vfx-pricing-header">
          <motion.h2
            className="vfx-pricing-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Our Pricing Plans
          </motion.h2>
          <motion.p
            className="vfx-pricing-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Invest in your future with flexible learning options
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="vfx-pricing-cards">
          {/* Card 1 - One-Time Pay */}
          <motion.div
            className="vfx-pricing-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={0}
          >
            <div className="vfx-limited-offer-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" fill="white"/>
              </svg>
              <span>Limited Time Offer</span>
            </div>

            <div className="vfx-pricing-card-header">
              <div className="vfx-course-icon">
                <img src={FigmaLogo} alt="VFX Animation" />
              </div>
              <div className="vfx-course-duration">37 Weeks</div>
            </div>

            <h3 className="vfx-course-title">VFX Animation with Specialization + Portfolio</h3>

            <div className="vfx-payment-type">
              <span className="vfx-payment-label">One-Time Pay</span>
            </div>

            <div className="vfx-pricing-breakdown">
              <div className="vfx-price-row">
                <span className="vfx-price-label">Course Fees</span>
                <span className="vfx-price-value">₹67800</span>
              </div>
              <div className="vfx-price-row">
                <span className="vfx-price-label">GST</span>
                <span className="vfx-price-value">₹12200</span>
              </div>
              <div className="vfx-price-row">
                <span className="vfx-price-label">Discount</span>
                <span className="vfx-price-value vfx-discount">-₹3000</span>
              </div>
              <div className="vfx-price-row vfx-total-row">
                <span className="vfx-price-label">Total</span>
                <span className="vfx-price-value">₹77000</span>
              </div>
            </div>

            <div className="vfx-monthly-payment">
              <span className="vfx-monthly-label">Monthly</span>
              <span className="vfx-monthly-value">₹77000</span>
            </div>

            <div className="vfx-card-buttons">
              <button className="vfx-btn-contact" onClick={handleWhatsAppClick}>Contact Us</button>
              <button className="vfx-btn-enroll" onClick={handleEnrollClick}>
                <span className="vfx-btn-text">Enroll Now</span>
              </button>
            </div>
            </motion.div>

          {/* Card 2 - Installment Options */}
          <motion.div
            className="vfx-pricing-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={1}
          >
            <div className="vfx-pricing-card-header">
              <div className="vfx-course-icon">
                <img src={FigmaLogo} alt="VFX Animation" />
              </div>
              <div className="vfx-course-duration">37 Weeks</div>
            </div>

            <h3 className="vfx-course-title">VFX Animation with Specialization + Portfolio</h3>

            <div className="vfx-payment-options">
              <button 
                className={`vfx-payment-option ${rightPaymentType === '3-months' ? 'active' : ''}`}
                onClick={() => setRightPaymentType('3-months')}
              >
                3 Months
              </button>
              <button 
                className={`vfx-payment-option ${rightPaymentType === '6-months' ? 'active' : ''}`}
                onClick={() => setRightPaymentType('6-months')}
              >
                6 Months
              </button>
            </div>

            <div className="vfx-pricing-breakdown">
              <div className="vfx-price-row">
                <span className="vfx-price-label">Course Fees</span>
                <span className="vfx-price-value">₹67800</span>
              </div>
              <div className="vfx-price-row">
                <span className="vfx-price-label">GST</span>
                <span className="vfx-price-value">₹12200</span>
              </div>
              <div className="vfx-price-row">
                <span className="vfx-price-label">Discount</span>
                <span className="vfx-price-value">000</span>
              </div>
              <div className="vfx-price-row vfx-total-row">
                <span className="vfx-price-label">Total</span>
                <span className="vfx-price-value">₹80000</span>
              </div>
            </div>

            <div className="vfx-monthly-payment">
              <span className="vfx-monthly-label">Monthly</span>
              <span className="vfx-monthly-value">
                {rightPaymentType === '3-months' ? '₹26667' : '₹13334'}
              </span>
            </div>

            <div className="vfx-card-buttons">
              <button className="vfx-btn-contact" onClick={handleWhatsAppClick}>Contact Us</button>
              <button className="vfx-btn-enroll" onClick={handleEnrollClick}>
                <span className="vfx-btn-text">Enroll Now</span>
              </button>
            </div>
            </motion.div>
        </div>
      </div>

      <EnrollModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
      />
    </section>
  );
};

export default VFXAnimationCoursePricing;
