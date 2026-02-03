import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/ToolsSection.css';

// Import tool logos
import figmaLogo from '../assets/toolslogo/Figma.png';
import photopeaLogo from '../assets/toolslogo/Photopea.png';
import freepikLogo from '../assets/toolslogo/freepik ai.png';
import zeplinLogo from '../assets/toolslogo/zeplin.png';
import jitterLogo from '../assets/toolslogo/jitter.png';
import lottieLogo from '../assets/toolslogo/lottie files.png';
import mayaLogo from '../assets/toolslogo/maya.png';
import mochaLogo from '../assets/toolslogo/Mocha.png';
import blenderLogo from '../assets/toolslogo/Blender.png';
import unrealLogo from '../assets/toolslogo/Unreal Engine.png';
import nukeLogo from '../assets/toolslogo/nuke.png';
import zbrushLogo from '../assets/toolslogo/ZBrush.png';
import substanceLogo from '../assets/toolslogo/Substance 3D Painter.png';
import photoshopLogo from '../assets/toolslogo/Adobe Photoshop.png';

const ToolsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ux' | 'vfx'>('ux');
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.4,
    margin: "0px 0px -50px 0px"
  });

  // Track when initial animation completes
  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const uxTools = [
    { name: 'Figma', logo: figmaLogo, description: 'UI Design Tool' },
    { name: 'Photopea', logo: photopeaLogo, description: 'Online Photo Editor' },
    { name: 'Freepik AI', logo: freepikLogo, description: 'AI Design Generator' },
    { name: 'Zeplin', logo: zeplinLogo, description: 'Design Handoff Tool' },
    { name: 'Jitter', logo: jitterLogo, description: 'Motion Design Tool' },
    { name: 'Lottie files', logo: lottieLogo, description: 'Animation Platform' },
  ];

  const vfxTools = [
    { name: 'Maya', logo: mayaLogo, description: '3D Animation Software' },
    { name: 'Mocha', logo: mochaLogo, description: 'Motion Tracking Tool' },
    { name: 'Blender', logo: blenderLogo, description: '3D Creation Suite' },
    { name: 'Unreal Engine', logo: unrealLogo, description: 'Real-time 3D Engine' },
    { name: 'Nuke', logo: nukeLogo, description: 'Compositing Software' },
    { name: 'ZBrush', logo: zbrushLogo, description: 'Digital Sculpting Tool' },
    { name: 'Substance 3D Painter', logo: substanceLogo, description: '3D Texture Painting' },
    { name: 'Adobe Photoshop', logo: photoshopLogo, description: 'Image Editing Software' },
  ];

  const displayTools = activeTab === 'ux' ? uxTools : vfxTools;

  // Animation variants - SMOOTH AND SLOW
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3
      }
    }
  };

  const toggleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2, // Same as scroll animation
        ease: [0.16, 1, 0.3, 1] as const,
        delay: hasAnimated ? index * 0.15 : 0.8 + (index * 0.15) // Same delay as scroll
      }
    })
  };

  return (
    <section className="tools-section" ref={sectionRef}>
      <div className="tools-container">
        {/* Header */}
        <div className="tools-header">
          <motion.h2 
            className="tools-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            Tools We Offer
          </motion.h2>
          <motion.p 
            className="tools-description"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
          >
            Upgrade your skills with professional tools used across UI/UX and VFX industries.
          </motion.p>
        </div>

        {/* Toggle Buttons - Animated after description */}
        <motion.div 
          className="tools-toggle"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={toggleVariants}
        >
          <button
            className={`toggle-button ${activeTab === 'ux' ? 'active' : ''}`}
            onClick={() => setActiveTab('ux')}
          >
            UX/UI Design
          </button>
          <button
            className={`toggle-button ${activeTab === 'vfx' ? 'active' : ''}`}
            onClick={() => setActiveTab('vfx')}
          >
            VFX Animation
          </button>
        </motion.div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {displayTools.map((tool, index) => (
            <motion.div 
              key={`${activeTab}-${tool.name}`}
              className="tool-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={index}
            >
              <div className="tool-icon-wrapper">
                <div className="tool-icon">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <p className="tool-name">{tool.name}</p>
                <span className="tool-tooltip" data-tooltip={tool.description}></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
