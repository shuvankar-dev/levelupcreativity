import React, { useState } from 'react';
import './CSS/VFXAnimationCoursePricing.css';
import FigmaLogo from '../assets/FigmaLogo.png';

const VFXAnimationCoursePricing: React.FC = () => {
  const [rightPaymentType, setRightPaymentType] = useState<'3-months' | '6-months'>('3-months');

  return (
    <section className="vfx-pricing-section">
      <div className="vfx-pricing-container">
        {/* Header */}
        <div className="vfx-pricing-header">
          <h2 className="vfx-pricing-title">Our Pricing Plans</h2>
          <p className="vfx-pricing-subtitle">Invest in your future with flexible learning options</p>
        </div>

        {/* Pricing Cards */}
        <div className="vfx-pricing-cards">
          {/* Card 1 - One-Time Pay */}
          <div className="vfx-pricing-card">
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
              <div className="vfx-course-duration">11 Months</div>
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
              <button className="vfx-btn-contact">Contact Us</button>
              <button className="vfx-btn-enroll">Enroll Now</button>
            </div>
          </div>

          {/* Card 2 - Installment Options */}
          <div className="vfx-pricing-card">
            <div className="vfx-pricing-card-header">
              <div className="vfx-course-icon">
                <img src={FigmaLogo} alt="VFX Animation" />
              </div>
              <div className="vfx-course-duration">11 Months</div>
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
              <button className="vfx-btn-contact">Contact Us</button>
              <button className="vfx-btn-enroll">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFXAnimationCoursePricing;
