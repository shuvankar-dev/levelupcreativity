import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import CursorFollower from '../components/CursorFollower';
import QASection from '../components/QASection';
import CTABannerSection from '../components/CTABannerSection';
import './CSS/Contact.css';

const Contact: React.FC = () => {
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
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <CursorFollower />
      <Navbar />
      
      <main className="contact-page">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <h1 className="contact-title">Reach Us Anytime</h1>
            <p className="contact-subtitle">Master UI/UX Design and 3D Creation with industry-</p>
          </div>

          {/* Contact Cards Grid */}
          <div className="contact-grid">
            {/* Left Column */}
            <div className="contact-left-column">
              {/* Email Card */}
              <div className="contact-card">
                <div className="card-header">
                  <div className="card-header-top">
                    <div className="icon-wrapper">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5L8.5 9L14.5 5M3.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V4C14.5 3.44772 14.0523 3 13.5 3H3.5C2.94772 3 2.5 3.44772 2.5 4V13C2.5 13.5523 2.94772 14 3.5 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="card-title">Email Us</h3>
                  </div>
                  <div className="card-content">
                    <p className="card-description">Facing technical challenges or product concerns? We're here to assist</p>
                    <a href="mailto:levelupcreativity@gmail.com" className="card-link">levelupcreativity@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Sales Card */}
              <div className="contact-card">
                <div className="card-header">
                  <div className="card-header-top">
                    <div className="icon-wrapper">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5L8.5 9L14.5 5M3.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V4C14.5 3.44772 14.0523 3 13.5 3H3.5C2.94772 3 2.5 3.44772 2.5 4V13C2.5 13.5523 2.94772 14 3.5 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="card-title">Contact Sales</h3>
                  </div>
                  <div className="card-content">
                    <p className="card-description">Let's collaborate on custom solutions or discuss product insights</p>
                    <button className="enroll-button">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-header">
                  <div className="form-header-top">
                    <div className="icon-wrapper">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5L8.5 9L14.5 5M3.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V4C14.5 3.44772 14.0523 3 13.5 3H3.5C2.94772 3 2.5 3.44772 2.5 4V13C2.5 13.5523 2.94772 14 3.5 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="form-title">We'd love to help! Let us know how</h3>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Full Name</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" stroke="#6F677E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 24C23 19.5817 18.9706 16 14 16C9.02944 16 5 19.5817 5 24" stroke="#6F677E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

                <div className="form-field">
                  <label className="form-label">Email</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8L14 15L24 8M5 22H23C23.5523 22 24 21.5523 24 21V7C24 6.44772 23.5523 6 23 6H5C4.44772 6 4 6.44772 4 7V21C4 21.5523 4.44772 22 5 22Z" stroke="#6F677E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

                <div className="form-field">
                  <label className="form-label">Mobile</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4H20C21.1046 4 22 4.89543 22 6V22C22 23.1046 21.1046 24 20 24H8C6.89543 24 6 23.1046 6 22V6C6 4.89543 6.89543 4 8 4Z" stroke="#6F677E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 20H14.01" stroke="#6F677E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

                <button type="submit" className="submit-button">Enroll Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <QASection />

      {/* CTA Banner Section */}
      <CTABannerSection />
      
      <Footer />
    </>
  );
};

export default Contact;
