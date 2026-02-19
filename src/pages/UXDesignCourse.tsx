import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import EnrollModal from '../components/EnrollModal';
import CTABannerSection from '../components/CTABannerSection';
import ToolsSection from '../components/ToolsSection';
import CurriculumSection from '../components/CurriculumSection';
import UXDesignCoursePricing from './UXDesignCoursePricing';
import UXDesignCourseMentor from './UXDesignCourseMentor';
import WhatWeCreateUI from '../components/WhatWeCreateUI';
import './CSS/UXDesignCourse.css';
import './CSS/UXDesignCourse-why-choose.css';
import uxHeroImage from '../assets/UIUX Design/Frame 1056.png';
import maskBox from '../assets/UIUX Design/Why Choose/Mask box.png';
import maskGroup from '../assets/UIUX Design/Why Choose/Mask Group.png';
import dome from '../assets/UIUX Design/Why Choose/Dome.png';
import frame587 from '../assets/UIUX Design/Why Choose/Frame 587.png';
import frameImage from '../assets/UIUX Design/Why Choose/Frame.png';
import paperPlane from '../assets/UIUX Design/Why Choose/PaperPlane.png';
import firstLayer from '../assets/UIUX Design/Why Choose/First_layer.png';
import secondLayer from '../assets/UIUX Design/Why Choose/Second_layer.png';
import theirdLayer from '../assets/UIUX Design/Why Choose/Theird_layer.png';

function UXDesignCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ux-design-course-page">
      <Navbar variant="course-page" courseName="UI/UX Design" />
      
      <main className="ux-course-content">
        {/* Hero Image */}
        <section className="ux-hero-section">
          <div className="ux-hero-container">
            <div className="ux-hero-image">
              <img src={uxHeroImage} alt="UI/UX Design Course" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="ux-content-section">
          <div className="ux-content-container">
            {/* Frame 1053 - Text content */}
            <div className="ux-text-content">
              <h1 className="ux-main-title">Levelup-UI/UX Design Course</h1>
              <p className="ux-description">
                Master UI/UX Design and 3D Creation with industry-
              </p>
            </div>

            {/* Frame 1002 - Buttons */}
            <div className="ux-buttons-container">
              <div className="ux-buttons-wrapper">
                {/* Enroll Now Button */}
                <button 
                  className="ux-button ux-button-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Enroll Now</span>
                </button>

                {/* Download Brochure Button */}
                <button className="ux-button ux-button-secondary">
                  <span>View Curricullum</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards Section - Frame 1084 */}
        <section className="ux-info-section">
          <div className="ux-info-cards">
            {/* Card 1 - Course Duration */}
            <div className="ux-info-card-wrapper">
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Course Duration</p>
                    <h3 className="ux-card-value">6 months</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Price */}
            <div className="ux-info-card-wrapper">
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Price starting from</p>
                    <h3 className="ux-card-value">₹55000</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Class Mode */}
            <div className="ux-info-card-wrapper">
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Class Mode</p>
                    <h3 className="ux-card-value">Online/Offline</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Eligibility */}
            <div className="ux-info-card-wrapper">
              <div className="ux-info-card">
                <div className="ux-card-content">
                  <div className="ux-card-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="ux-card-info">
                    <p className="ux-card-label">Eligibility</p>
                    <h3 className="ux-card-value">10+/12+/ Graduation</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Levelup Section - Frame 592 */}
        <section className="ux-why-choose-section">
          <div className="ux-why-choose-container">
            {/* Header */}
            <div className="ux-why-choose-header">
              <h2 className="ux-why-choose-title">Why Choose Levelup</h2>
              <p className="ux-why-choose-subtitle">Comprehensive learning paths designed by industry</p>
            </div>

            {/* Bento Grid */}
            <div className="ux-bento-grid">
              {/* First Row */}
              <div className="ux-bento-row">
                {/* Card 1 - Team-based activities */}
                <div className="ux-bento-card">
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Team-based UI/UX activities just like Industry Workflow</h3>
                      <p className="ux-bento-description">Learn as a professional in an friendly environment through mentor -guidance with your batchmates</p>
                    </div>
                  </div>
                  <img src={maskGroup} alt="3D Shape" className="ux-bento-shape ux-shape-mobius" />
                </div>

                {/* Card 2 - Weekly assignments */}
                <div className="ux-bento-card">
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Weekly UX/UI assignments with practical demo classes</h3>
                      <p className="ux-bento-description">Become job-ready by learning practically through demo classes guided by mentors</p>
                    </div>
                  </div>
                  <img src={maskBox} alt="3D Shape" className="ux-bento-shape ux-shape-cube" />
                </div>

                {/* Card 3 - Placement Assistance */}
                <div className="ux-bento-card">
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Lifetime Placement Assistance and Internships</h3>
                      <p className="ux-bento-description">Get 100% placement assistance after creating your own portfolio website guided by industry experts</p>
                    </div>
                  </div>
                  <img src={dome} alt="3D Shape" className="ux-bento-shape ux-shape-dome" />
                </div>
              </div>

              {/* Second Row */}
              <div className="ux-bento-row">
                {/* Card 4 - Live sessions */}
                <div className="ux-bento-card ux-bento-card-small">
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Live, interactive offline and online sessions</h3>
                      <p className="ux-bento-description">Practical training designed to match hiring needs.</p>
                    </div>
                  </div>
                  <img src={frame587} alt="Student Avatars" className="ux-bento-avatars-img" />
                </div>

                {/* Card 5 - Image card */}
                <div className="ux-bento-card ux-bento-card-image">
                  <img src={frameImage} alt="Mentor Session" className="ux-bento-image" />
                </div>

                {/* Card 6 - Mentor feedback */}
                <div className="ux-bento-card ux-bento-card-small">
                  <div className="ux-bento-content">
                    <div className="ux-bento-icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19M9 3V7M19 3H23C24.1046 3 25 3.89543 25 5V9M19 3V7M3 9V19M3 9H7M25 9V19M25 9H21M3 19V23C3 24.1046 3.89543 25 5 25H9M3 19H7M25 19V23C25 24.1046 24.1046 25 23 25H19M25 19H21M9 25H19M9 25V21M19 25V21" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="ux-bento-text">
                      <h3 className="ux-bento-heading">Regular 1:1 mentor feedback on Project</h3>
                      <p className="ux-bento-description">Build real portfolios, not just theory.</p>
                    </div>
                  </div>
                  
                  {/* Feedback box layers */}
                  <img src={firstLayer} alt="Layer 1" className="ux-feedback-layer ux-layer-1" />
                  <img src={secondLayer} alt="Layer 2" className="ux-feedback-layer ux-layer-2" />
                  <img src={theirdLayer} alt="Layer 3" className="ux-feedback-layer ux-layer-3" />
                  
                  <div className="ux-feedback-box">
                    <span className="ux-feedback-text">Feedback time</span>
                    <img src={paperPlane} alt="Send" className="ux-feedback-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Create Section */}
        <WhatWeCreateUI />

        {/* CTA Banner Section */}
        <CTABannerSection />

        {/* Tools Section */}
        <ToolsSection />

        {/* Curriculum Section */}
        <CurriculumSection />

        {/* Pricing Section */}
        <UXDesignCoursePricing />

        {/* Mentor Section */}
        <UXDesignCourseMentor />
      </main>

      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default UXDesignCourse;
