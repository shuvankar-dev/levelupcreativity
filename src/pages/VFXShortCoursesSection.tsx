import React from 'react';
import './CSS/VFXShortCoursesSection.css';
import { AlarmClock, Layers, ArrowRight } from 'lucide-react';
import sealCheck from '../assets/SealCheck.png';

const VFXShortCoursesSection: React.FC = () => {
  return (
    <section className="vfx-short-courses-section">
      <div className="vfx-short-courses-container">
        {/* Header */}
        <div className="vfx-short-courses-header">
          <h2 className="vfx-short-courses-title">Short Courses Based On AI & 3D Softwares</h2>
          <p className="vfx-short-courses-subtitle">Start your learning journey with our comprehensive mini course</p>
        </div>

        {/* Cards Grid */}
        <div className="vfx-short-courses-grid">
          {/* Card 1 - AI Animation Course */}
          <div className="vfx-short-course-card">
            <div className="vfx-short-course-content">
              <div className="vfx-short-course-badge">ONLINE/OFFLINE</div>
              
              <div className="vfx-short-course-info">
                <h3 className="vfx-short-course-title">AI ANIMATION COURSE</h3>
                <p className="vfx-short-course-desc">Get Expert Guidance In Portfolios</p>
              </div>

              <ul className="vfx-short-course-points">
                <li><img src={sealCheck} alt="Check" />Generate base model</li>
                <li><img src={sealCheck} alt="Check" />Auto-rig</li>
                <li><img src={sealCheck} alt="Check" />Add Facial Animation</li>
                <li><img src={sealCheck} alt="Check" />Animated from video</li>
                <li><img src={sealCheck} alt="Check" />Import & Render</li>
              </ul>

              <div className="vfx-short-course-meta">
                <span className="vfx-short-course-duration">
                  <AlarmClock size={28} />
                  2 hours
                </span>
                <span className="vfx-short-course-timeline">
                  <Layers size={28} />
                  3 Months
                </span>
              </div>
            </div>

            <button className="vfx-short-course-btn">
              <span className="vfx-short-course-btn-text">View Details</span>
              <ArrowRight size={28} className="vfx-short-course-btn-arrow" />
            </button>
          </div>

          {/* Card 2 - Unreal Engine Course */}
          <div className="vfx-short-course-card">
            <div className="vfx-short-course-content">
              <div className="vfx-short-course-badge">ONLINE/OFFLINE</div>
              
              <div className="vfx-short-course-info">
                <h3 className="vfx-short-course-title">UNREAL ENGINE COURSE</h3>
                <p className="vfx-short-course-desc">Get Expert Guidance In Portfolios</p>
              </div>

              <ul className="vfx-short-course-points">
                <li><img src={sealCheck} alt="Check" />Fundamental & Asset Workflow</li>
                <li><img src={sealCheck} alt="Check" />Blue Print & Gameplay Logic</li>
                <li><img src={sealCheck} alt="Check" />Environment & Material</li>
                <li><img src={sealCheck} alt="Check" />Animation & VFX</li>
                <li><img src={sealCheck} alt="Check" />Advance System</li>
              </ul>

              <div className="vfx-short-course-meta">
                <span className="vfx-short-course-duration">
                  <AlarmClock size={28} />
                  2 hours
                </span>
                <span className="vfx-short-course-timeline">
                  <Layers size={28} />
                  3 Months
                </span>
              </div>
            </div>

            <button className="vfx-short-course-btn">
              <span className="vfx-short-course-btn-text">View Details</span>
              <ArrowRight size={28} className="vfx-short-course-btn-arrow" />
            </button>
          </div>

          {/* Card 3 - Blender Learning Course */}
          <div className="vfx-short-course-card">
            <div className="vfx-short-course-content">
              <div className="vfx-short-course-badge">ONLINE/OFFLINE</div>
              
              <div className="vfx-short-course-info">
                <h3 className="vfx-short-course-title">BLENDER LEARNING COURSE</h3>
                <p className="vfx-short-course-desc">Get Expert Guidance In Portfolios</p>
              </div>

              <ul className="vfx-short-course-points">
                <li><img src={sealCheck} alt="Check" />Interface, basic modeling, sculpting</li>
                <li><img src={sealCheck} alt="Check" />Rigging & Skinning</li>
                <li><img src={sealCheck} alt="Check" />UV Mapping Texturing</li>
                <li><img src={sealCheck} alt="Check" />Animation & Motion Principle</li>
                <li><img src={sealCheck} alt="Check" />Lighting, Rendering & Camera Work</li>
              </ul>

              <div className="vfx-short-course-meta">
                <span className="vfx-short-course-duration">
                  <AlarmClock size={28} />
                  2 hours
                </span>
                <span className="vfx-short-course-timeline">
                  <Layers size={28} />
                  3 Months
                </span>
              </div>
            </div>

            <button className="vfx-short-course-btn">
              <span className="vfx-short-course-btn-text">View Details</span>
              <ArrowRight size={28} className="vfx-short-course-btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFXShortCoursesSection;
