import React, { useState } from 'react';
import './CSS/EnrollModal.css';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const trackOptions = [
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'vfx', label: 'VFX Animation' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTrackSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      track: value
    }));
    setIsDropdownOpen(false);
  };

  const getSelectedTrackLabel = () => {
    const selected = trackOptions.find(opt => opt.value === formData.track);
    return selected ? selected.label : '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment form submitted:', formData);
    // Backend integration will be added later
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="enroll-modal-overlay" onClick={onClose}>
      <div className="enroll-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">Enroll Now</h2>
          <p className="modal-subtitle">Start your journey to becoming a UI/UX and VFX expert</p>
        </div>

        {/* Enrollment Form */}
        <form onSubmit={handleSubmit} className="enroll-form">
          {/* Name Field */}
          <div className="enroll-form-field">
            <label className="enroll-form-label">
              Name <span className="required">*</span>
            </label>
            <div className="enroll-input-container">
              <input
                type="text"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleInputChange}
                className="enroll-form-input"
                required
              />
              {!formData.name && (
                <div className="enroll-input-placeholder">
                  <svg className="enroll-input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="#6F677E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.25 17.5C16.25 14.0482 13.4518 11.25 10 11.25C6.54822 11.25 3.75 14.0482 3.75 17.5" stroke="#6F677E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="placeholder-text">Enter your full name</span>
                </div>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="enroll-form-field">
            <label className="enroll-form-label">
              Email <span className="required">*</span>
            </label>
            <div className="enroll-input-container">
              <input
                type="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleInputChange}
                className="enroll-form-input"
                required
              />
              {!formData.email && (
                <div className="enroll-input-placeholder">
                  <svg className="enroll-input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 5.83333L10 10.8333L17.5 5.83333M3.33333 15.8333H16.6667C17.1269 15.8333 17.5 15.4602 17.5 15V5C17.5 4.53976 17.1269 4.16667 16.6667 4.16667H3.33333C2.8731 4.16667 2.5 4.53976 2.5 5V15C2.5 15.4602 2.8731 15.8333 3.33333 15.8333Z" stroke="#6F677E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="placeholder-text">Enter your email</span>
                </div>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="enroll-form-field">
            <label className="enroll-form-label">
              Phone Number <span className="required">*</span>
            </label>
            <div className="enroll-input-container">
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleInputChange}
                className="enroll-form-input"
                required
              />
              {!formData.phone && (
                <div className="enroll-input-placeholder">
                  <svg className="enroll-input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.83333 2.5H14.1667C15.0871 2.5 15.8333 3.24619 15.8333 4.16667V15.8333C15.8333 16.7538 15.0871 17.5 14.1667 17.5H5.83333C4.91286 17.5 4.16667 16.7538 4.16667 15.8333V4.16667C4.16667 3.24619 4.91286 2.5 5.83333 2.5Z" stroke="#6F677E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14.1667H10.0083" stroke="#6F677E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="placeholder-text">Enter your phone number</span>
                </div>
              )}
            </div>
          </div>

          {/* Track Dropdown - Custom */}
          <div className="enroll-form-field">
            <label className="enroll-form-label">
              Choose Track <span className="required">*</span>
            </label>
            <div className="custom-dropdown-container">
              <div 
                className={`custom-dropdown-trigger ${isDropdownOpen ? 'open' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={formData.track ? 'selected' : 'placeholder'}>
                  {formData.track ? getSelectedTrackLabel() : 'Select your track'}
                </span>
                <svg className="dropdown-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#6F677E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {isDropdownOpen && (
                <div className="custom-dropdown-menu">
                  {trackOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`dropdown-option ${formData.track === option.value ? 'selected' : ''}`}
                      onClick={() => handleTrackSelect(option.value)}
                    >
                      {option.label}
                      {formData.track === option.value && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#6443FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <input
                type="hidden"
                name="track"
                value={formData.track}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="enroll-submit-button">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollModal;
