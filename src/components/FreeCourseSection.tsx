import React, { useState } from 'react';
import './CSS/FreeCourseSection.css';
import figmaLogo from '../assets/toolslogo/Figma.png';

const FreeCourseSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'ux' | 'vfx'>('ux');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, track: selectedTrack });
  };

  return (
    <section className="free-course-section">
      <div className="free-course-container">
        {/* Header */}
        <div className="free-course-header">
          <h2 className="free-course-title">Get the course- Its Free</h2>
          <p className="free-course-description">
            Start your learning journey with our comprehensive mini course
          </p>
        </div>

        {/* Card Area */}
        <div className="free-course-card-area">
          <form className="free-course-card" onSubmit={handleSubmit}>
            {/* Choose Your Track Section */}
            <div className="track-selection-section">
              <label className="track-label">Choose Your Track</label>
              <div className="track-buttons">
                <button
                  type="button"
                  className={`track-button ${selectedTrack === 'ux' ? 'active' : ''}`}
                  onClick={() => setSelectedTrack('ux')}
                >
                  <img src={figmaLogo} alt="Figma" className="track-icon" />
                  <span>UX /UI Design</span>
                </button>
                <button
                  type="button"
                  className={`track-button ${selectedTrack === 'vfx' ? 'active' : ''}`}
                  onClick={() => setSelectedTrack('vfx')}
                >
                  <img src={figmaLogo} alt="VFX" className="track-icon" />
                  <span>VFX Animation</span>
                </button>
              </div>
            </div>

            {/* Full Name Input */}
            <div className="input-field">
              <label className="input-label">Full Name</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#6F677E"/>
                  <path d="M22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="input-field">
              <label className="input-label">Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#6F677E"/>
                  <path d="M22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Mobile Input */}
            <div className="input-field">
              <label className="input-label">Mobile</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#6F677E"/>
                  <path d="M22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Claim your free mini course
            </button>

            {/* Security Info */}
            <div className="security-info">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L4 5V9C4 13.5 7 17 10 18C13 17 16 13.5 16 9V5L10 2Z" fill="#545B68"/>
              </svg>
              <span>Your information is secure</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeCourseSection;
