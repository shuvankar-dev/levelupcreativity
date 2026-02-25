import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/CTABannerSection.css';

const CTABannerSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

  useEffect(() => {
    // Reset video to start when component mounts
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, []);

  // Animation variants
  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3
      }
    }
  };

  return (
    <section className="cta-banner-section" ref={sectionRef}>
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="cta-banner-video-bg"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onError={(e) => console.error('CTABanner Video failed to load:', e)}
        onLoadedData={() => {
          console.log('CTABanner Video loaded successfully');
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
      >
        <source src="https://cdn.pixabay.com/video/2015/08/03/514-135736246_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="cta-banner-video-overlay"></div>
      
      <div className="cta-banner-container">
        <div className="cta-banner-glow-bg"></div>
        <div className="cta-banner-content">
          <motion.div 
            className="cta-banner-tagline"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={taglineVariants}
          >
            <span className="cta-banner-tagline-text">Build Solutions that change world</span>
          </motion.div>
          <div className="cta-banner-text-wrapper">
            <motion.h2 
              className="cta-banner-title"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              Ready to Levelup Your Design
            </motion.h2>
            <motion.p 
              className="cta-banner-subtitle"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              Get job ready, fast.
            </motion.p>
          </div>
          <motion.button 
            className="cta-banner-button"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
