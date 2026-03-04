import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/UXDesignCoursePricing.css';
import FigmaLogo from '../assets/FigmaLogo.png';
import EnrollModal from '../components/EnrollModal';

const UXDesignCoursePricing: React.FC = () => {
  const [leftPaymentType, setLeftPaymentType] = useState<'one-time' | '3-months' | '6-months'>('one-time');
  const [rightPaymentType, setRightPaymentType] = useState<'one-time' | '3-months' | '6-months'>('3-months');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919836841945', '_blank');
  };

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.3,
    margin: "0px 0px -50px 0px"
  });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({ 
      opacity: 1, y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + (index * 0.2) }
    })
  };

  return (
    <section className="ux-pricing-section" ref={sectionRef}>
      <div className="ux-pricing-container">
        {/* Header */}
        <div className="ux-pricing-header">
          <motion.h2 
            className="ux-pricing-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Our Pricing Plans
          </motion.h2>
          <motion.p 
            className="ux-pricing-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Invest in your future with flexible learning options
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="ux-pricing-cards">
          {/* Card 1 - One-Time Pay */}
          <motion.div 
            className="ux-pricing-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={0}
          >
            <div className="ux-limited-offer-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" fill="white"/>
              </svg>
              <span>Limited Time Offer</span>
            </div>

            <div className="ux-pricing-card-header">
              <div className="ux-course-icon">
                <img src={FigmaLogo} alt="UI/UX Design" />
              </div>
              <div className="ux-course-duration">20 Weeks</div>
            </div>

            <h3 className="ux-course-title">UI/UX Design with AI + Live Portfolio Website</h3>

            <div className="ux-payment-type">
              <span className="ux-payment-label">One-Time Pay</span>
            </div>

            <div className="ux-pricing-breakdown">
              <div className="ux-price-row">
                <span className="ux-price-label">Course Fees</span>
                <span className="ux-price-value">₹45400</span>
              </div>
              <div className="ux-price-row">
                <span className="ux-price-label">GST</span>
                <span className="ux-price-value">₹12600</span>
              </div>
              <div className="ux-price-row">
                <span className="ux-price-label">Discount</span>
                <span className="ux-price-value ux-discount">-₹2000</span>
              </div>
              <div className="ux-price-row ux-total-row">
                <span className="ux-price-label">Total</span>
                <span className="ux-price-value">₹56000</span>
              </div>
            </div>

            <div className="ux-monthly-payment">
              <span className="ux-monthly-label">Monthly</span>
              <span className="ux-monthly-value">₹56000</span>
            </div>

            <div className="ux-card-buttons">
              <button className="ux-btn-contact" onClick={handleWhatsAppClick}>Contact Us</button>
              <button className="ux-btn-enroll" onClick={handleEnrollClick}>
                <span className="ux-btn-text">Enroll Now</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2 - Installment Options */}
          <motion.div 
            className="ux-pricing-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={1}
          >
            <div className="ux-pricing-card-header">
              <div className="ux-course-icon">
                <img src={FigmaLogo} alt="UI/UX Design" />
              </div>
              <div className="ux-course-duration">20 Weeks</div>
            </div>

            <h3 className="ux-course-title">UI/UX Design with AI + Live Portfolio Website</h3>

            <div className="ux-payment-options">
              <button 
                className={`ux-payment-option ${rightPaymentType === '3-months' ? 'active' : ''}`}
                onClick={() => setRightPaymentType('3-months')}
              >
                3 Months
              </button>
              <button 
                className={`ux-payment-option ${rightPaymentType === '6-months' ? 'active' : ''}`}
                onClick={() => setRightPaymentType('6-months')}
              >
                6 Months
              </button>
            </div>

            <div className="ux-pricing-breakdown">
              <div className="ux-price-row">
                <span className="ux-price-label">Course Fees</span>
                <span className="ux-price-value">₹45400</span>
              </div>
              <div className="ux-price-row">
                <span className="ux-price-label">GST</span>
                <span className="ux-price-value">₹12600</span>
              </div>
              <div className="ux-price-row">
                <span className="ux-price-label">Discount</span>
                <span className="ux-price-value">000</span>
              </div>
              <div className="ux-price-row ux-total-row">
                <span className="ux-price-label">Total</span>
                <span className="ux-price-value">₹58000</span>
              </div>
            </div>

            <div className="ux-monthly-payment">
              <span className="ux-monthly-label">Monthly</span>
              <span className="ux-monthly-value">
                {rightPaymentType === '3-months' ? '₹19000' : '₹9667'}
              </span>
            </div>

            <div className="ux-card-buttons">
              <button className="ux-btn-contact" onClick={handleWhatsAppClick}>Contact Us</button>
              <button className="ux-btn-enroll" onClick={handleEnrollClick}>
                <span className="ux-btn-text">Enroll Now</span>
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

export default UXDesignCoursePricing;
