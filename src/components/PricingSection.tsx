import React from 'react';
import './CSS/PricingSection.css';
import IconPng from '../assets/Icon.png';
import FigmaLogo from '../assets/FigmaLogo.png';
import CubeLogo from '../assets/Cube.png';
import SealCheck from '../assets/SealCheck.png';

const PricingSection: React.FC = () => {
  const pricingData = [
    {
      icon: FigmaLogo,
      title: 'UI/UX Design with AI',
      duration: '20 Weeks',
      price: '₹55,000',
      originalPrice: '₹65,000',
      description: 'Start your UI/UX career with a powerful training at a affordable price.',
      features: [
        'Online & offline classes',
        'Real-world projects',
        'Design system creation',
        'Portfolio development',
        '1-on-1 mentorship',
        'Career support',
        'Certificate of completion',
        'Real-world project after course completion'
      ],
      isLimitedOffer: true
    },
    {
      icon: CubeLogo,
      title: 'VFX Animation',
      duration: '37 Weeks',
      price: '₹80,000',
      originalPrice: '₹90,000',
      description: 'Build stunning VFX skills through high-value learning at an affordable price.',
      features: [
        'Online & offline classes',
        'Advanced VFX skills',
        'Expert Mentorship',
        'Animation fundamentals',
        '1-on-1 mentorship',
        'Career support',
        'Certificate of completion',
        'Real-world project after course completion'
      ],
      isLimitedOffer: true
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">Our Pricing Plans</h2>
          <p className="pricing-subtitle">
            Invest in your future with flexible learning options
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {pricingData.map((plan, index) => (
            <div key={index} className="pricing-card">
              {plan.isLimitedOffer && (
                <div className="limited-offer-badge">
                  <img src={IconPng} alt="Limited Offer Icon" width="16" height="16" />
                  <span>Limited Time Offer</span>
                </div>
              )}

              <div className="pricing-card-header">
                <div className="course-icon">
                  <img src={plan.icon} alt={plan.title} />
                </div>
                <div className="course-duration">{plan.duration}</div>
              </div>

              <h3 className="course-title">{plan.title}</h3>

              <div className="pricing-info">
                <span className="current-price">{plan.price}</span>
                <span className="original-price">{plan.originalPrice}</span>
              </div>

              <p className="course-description">{plan.description}</p>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <img src={SealCheck} alt="check" width="24" height="24" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="card-buttons">
                <button className="btn-learn-more">Learn More</button>
                <button className="btn-enroll">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
