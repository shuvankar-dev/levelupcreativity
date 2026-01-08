import React, { useState } from 'react';
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

  return (
    <section className="tools-section">
      <div className="tools-container">
        {/* Header */}
        <div className="tools-header">
          <h2 className="tools-title">Tools We Offer</h2>
          <p className="tools-description">
            Upgrade your skills with professional tools used across UI/UX and VFX industries.
          </p>
        </div>

        {/* Toggle Buttons */}
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
            <div key={index} className="tool-card">
              <div className="tool-icon-wrapper">
                <div className="tool-icon">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <p className="tool-name">{tool.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
