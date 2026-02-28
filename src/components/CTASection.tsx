import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/CTASection.css';

const CTASection: React.FC = () => {
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
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2
      }
    }
  };

  return (
    <section className="cta-section" ref={sectionRef}>
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="cta-video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onError={(e) => console.error('CTASection Video failed to load:', e)}
        onLoadedData={() => {
          console.log('CTASection Video loaded successfully');
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
      >
        <source src="https://cdn.pixabay.com/video/2015/08/03/514-135736246_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="cta-video-overlay"></div>
      
      {/* Animated Grid Background */}
      <div className="grid-background">
        {/* Left Grid Box */}
        <div className="grid-box grid-left">
          {/* Row 6 (bottom) */}
          <div className="grid-cell" style={{ left: '332px', top: '220px', opacity: 0.41 }}></div>
          <div className="grid-cell" style={{ left: '288px', top: '220px', opacity: 0.01 }}></div>
          <div className="grid-cell" style={{ left: '244px', top: '220px', opacity: 0.87 }}></div>
          <div className="grid-cell" style={{ left: '200px', top: '220px', opacity: 0.55 }}></div>
          <div className="grid-cell" style={{ left: '156px', top: '220px', opacity: 0.6 }}></div>
          <div className="grid-cell" style={{ left: '68px', top: '220px', opacity: 0.71 }}></div>
          
          {/* Row 5 */}
          <div className="grid-cell" style={{ left: '332px', top: '176px', opacity: 0.63 }}></div>
          <div className="grid-cell" style={{ left: '288px', top: '176px', opacity: 0.43 }}></div>
          <div className="grid-cell" style={{ left: '156px', top: '176px', opacity: 0.34 }}></div>
          <div className="grid-cell" style={{ left: '112px', top: '176px', opacity: 0.03 }}></div>
          <div className="grid-cell" style={{ left: '68px', top: '176px', opacity: 0.12 }}></div>
          <div className="grid-cell" style={{ left: '24px', top: '176px', opacity: 0.75 }}></div>
          
          {/* Row 4 */}
          <div className="grid-cell" style={{ left: '200px', top: '132px', opacity: 0.97 }}></div>
          <div className="grid-cell" style={{ left: '156px', top: '132px', opacity: 0.8 }}></div>
          <div className="grid-cell" style={{ left: '112px', top: '132px', opacity: 0.38 }}></div>
          <div className="grid-cell" style={{ left: '68px', top: '132px', opacity: 0.01 }}></div>
          <div className="grid-cell" style={{ left: '24px', top: '132px', opacity: 0.92 }}></div>
          
          {/* Row 3 */}
          <div className="grid-cell" style={{ left: '200px', top: '88px', opacity: 0.18 }}></div>
          <div className="grid-cell" style={{ left: '156px', top: '88px', opacity: 0.16 }}></div>
          <div className="grid-cell" style={{ left: '112px', top: '88px', opacity: 0.13 }}></div>
          <div className="grid-cell" style={{ left: '68px', top: '88px', opacity: 0.11 }}></div>
          <div className="grid-cell" style={{ left: '24px', top: '88px', opacity: 0.61 }}></div>
          
          {/* Row 2 */}
          <div className="grid-cell" style={{ left: '244px', top: '44px', opacity: 0.12 }}></div>
          <div className="grid-cell" style={{ left: '200px', top: '44px', opacity: 0.03 }}></div>
          <div className="grid-cell" style={{ left: '156px', top: '44px', opacity: 0.28 }}></div>
          <div className="grid-cell" style={{ left: '112px', top: '44px', opacity: 0.61 }}></div>
          <div className="grid-cell" style={{ left: '68px', top: '44px', opacity: 0.54 }}></div>
          <div className="grid-cell" style={{ left: '24px', top: '44px', opacity: 0.63 }}></div>
          
          {/* Row 1 (top) */}
          <div className="grid-cell" style={{ left: '332px', top: '0px', opacity: 0.42 }}></div>
          <div className="grid-cell" style={{ left: '288px', top: '0px', opacity: 0.06 }}></div>
          <div className="grid-cell" style={{ left: '244px', top: '0px', opacity: 0.93 }}></div>
          <div className="grid-cell" style={{ left: '200px', top: '0px', opacity: 0.15 }}></div>
          <div className="grid-cell" style={{ left: '156px', top: '0px', opacity: 0.73 }}></div>
          <div className="grid-cell" style={{ left: '68px', top: '0px', opacity: 0.28 }}></div>
        </div>
        
        {/* Right Grid Box */}
        <div className="grid-box grid-right">
          {/* Row 6 (bottom) */}
          <div className="grid-cell" style={{ left: '273px', top: '220px', opacity: 0.41 }}></div>
          <div className="grid-cell" style={{ left: '229px', top: '220px', opacity: 0.01 }}></div>
          <div className="grid-cell" style={{ left: '185px', top: '220px', opacity: 0.87 }}></div>
          <div className="grid-cell" style={{ left: '141px', top: '220px', opacity: 0.55 }}></div>
          <div className="grid-cell" style={{ left: '97px', top: '220px', opacity: 0.6 }}></div>
          <div className="grid-cell" style={{ left: '9px', top: '220px', opacity: 0.71 }}></div>
          
          {/* Row 5 */}
          <div className="grid-cell" style={{ left: '273px', top: '176px', opacity: 0.63 }}></div>
          <div className="grid-cell" style={{ left: '229px', top: '176px', opacity: 0.43 }}></div>
          <div className="grid-cell" style={{ left: '97px', top: '176px', opacity: 0.34 }}></div>
          <div className="grid-cell" style={{ left: '53px', top: '176px', opacity: 0.03 }}></div>
          <div className="grid-cell" style={{ left: '9px', top: '176px', opacity: 0.12 }}></div>
          <div className="grid-cell" style={{ left: '-35px', top: '176px', opacity: 0.75 }}></div>
          
          {/* Row 4 */}
          <div className="grid-cell" style={{ left: '141px', top: '132px', opacity: 0.97 }}></div>
          <div className="grid-cell" style={{ left: '97px', top: '132px', opacity: 0.8 }}></div>
          <div className="grid-cell" style={{ left: '53px', top: '132px', opacity: 0.38 }}></div>
          <div className="grid-cell" style={{ left: '9px', top: '132px', opacity: 0.01 }}></div>
          <div className="grid-cell" style={{ left: '-35px', top: '132px', opacity: 0.92 }}></div>
          
          {/* Row 3 */}
          <div className="grid-cell" style={{ left: '141px', top: '88px', opacity: 0.18 }}></div>
          <div className="grid-cell" style={{ left: '97px', top: '88px', opacity: 0.16 }}></div>
          <div className="grid-cell" style={{ left: '53px', top: '88px', opacity: 0.13 }}></div>
          <div className="grid-cell" style={{ left: '9px', top: '88px', opacity: 0.11 }}></div>
          <div className="grid-cell" style={{ left: '-35px', top: '88px', opacity: 0.61 }}></div>
          
          {/* Row 2 */}
          <div className="grid-cell" style={{ left: '185px', top: '44px', opacity: 0.12 }}></div>
          <div className="grid-cell" style={{ left: '141px', top: '44px', opacity: 0.03 }}></div>
          <div className="grid-cell" style={{ left: '97px', top: '44px', opacity: 0.28 }}></div>
          <div className="grid-cell" style={{ left: '53px', top: '44px', opacity: 0.61 }}></div>
          <div className="grid-cell" style={{ left: '9px', top: '44px', opacity: 0.54 }}></div>
          <div className="grid-cell" style={{ left: '-35px', top: '44px', opacity: 0.63 }}></div>
          
          {/* Row 1 (top) */}
          <div className="grid-cell" style={{ left: '273px', top: '0px', opacity: 0.42 }}></div>
          <div className="grid-cell" style={{ left: '229px', top: '0px', opacity: 0.06 }}></div>
          <div className="grid-cell" style={{ left: '185px', top: '0px', opacity: 0.93 }}></div>
          <div className="grid-cell" style={{ left: '141px', top: '0px', opacity: 0.15 }}></div>
          <div className="grid-cell" style={{ left: '97px', top: '0px', opacity: 0.73 }}></div>
          <div className="grid-cell" style={{ left: '9px', top: '0px', opacity: 0.28 }}></div>
        </div>
      </div>
      
      <div className="cta-container">
        {/* Text Content */}
        <div className="cta-content">
          <div className="cta-text-container">
            <motion.h2 
              className="cta-title cta-text-animate"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              Not sure which course fits your goals?
            </motion.h2>
            <motion.button 
              className="cta-button cta-button-animate"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={buttonVariants}
              onClick={() => window.open('https://wa.me/919836841945?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20UI%2FUX%20and%20VFX%20courses.%20Can%20you%20provide%20more%20details%3F', '_blank')}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
