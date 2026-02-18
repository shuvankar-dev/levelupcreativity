import React, { useState } from 'react';
import './CSS/UXDesignCoursePricing.css';
import FigmaLogo from '../assets/FigmaLogo.png';

const UXDesignCoursePricing: React.FC = () => {
  const [leftPaymentType, setLeftPaymentType] = useState<'one-time' | '3-months' | '6-months'>('one-time');
  const [rightPaymentType, setRightPaymentType] = useState<'one-time' | '3-months' | '6-months'>('3-months');

  return (
    <section className="ux-pricing-section">
      <div className="ux-pricing-container">
        {/* Header */}
        <div className="ux-pricing-header">
          <h2 className="ux-pricing-title">Our Pricing Plans</h2>
          <p className="ux-pricing-subtitle">Invest in your future with flexible learning options</p>
        </div>

        {/* Pricing Cards */}
        <div className="ux-pricing-cards">
          {/* Card 1 - One-Time Pay */}
          <div className="ux-pricing-card">
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
              <button className="ux-btn-contact">Contact Us</button>
              <button className="ux-btn-enroll">Enroll Now</button>
            </div>
          </div>

          {/* Card 2 - Installment Options */}
          <div className="ux-pricing-card">
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
              <button className="ux-btn-contact">Contact Us</button>
              <button className="ux-btn-enroll">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXDesignCoursePricing;
