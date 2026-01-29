import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/PricingSection.css';
import IconPng from '../assets/Icon.png';
import FigmaLogo from '../assets/FigmaLogo.png';
import CubeLogo from '../assets/Cube.png';
import SealCheck from '../assets/SealCheck.png';

const PricingSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

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
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3 + (index * 0.2)
      }
    })
  };

  return (
    <section className="pricing-section" ref={sectionRef}>
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <motion.h2 
            className="pricing-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Our Pricing Plans
          </motion.h2>
          <motion.p 
            className="pricing-subtitle"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Invest in your future with flexible learning options
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {pricingData.map((plan, index) => (
            <motion.div 
              key={index} 
              className="pricing-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={index}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
