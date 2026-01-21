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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  const uxTools = [
    { name: 'Figma', logo: figmaLogo },
    { name: 'Photopea', logo: photopeaLogo },
    { name: 'Freepik AI', logo: freepikLogo },
    { name: 'Zeplin', logo: zeplinLogo },
    { name: 'Jitter', logo: jitterLogo },
    { name: 'Lottie files', logo: lottieLogo },
  ];

  const vfxTools = [
    { name: 'Maya', logo: mayaLogo },
    { name: 'Mocha', logo: mochaLogo },
    { name: 'Blender', logo: blenderLogo },
    { name: 'Unreal Engine', logo: unrealLogo },
    { name: 'Nuke', logo: nukeLogo },
    { name: 'ZBrush', logo: zbrushLogo },
    { name: 'Substance 3D Painter', logo: substanceLogo },
    { name: 'Adobe Photoshop', logo: photoshopLogo },
  ];

  const displayTools = activeTab === 'ux' ? uxTools : vfxTools;

  // Animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: index * 0.1
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

        {/* Toggle Buttons - Always visible, no animation */}
        <div className="tools-toggle">
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
        </div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
