import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import CursorFollower from '../components/CursorFollower';
import './CSS/PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <CursorFollower />
      <Navbar />
      
      <main className="privacy-policy-page">
        {/* Sidebar Navigation */}
        <aside className="privacy-sidebar">
          <div className="sidebar-item active">Introduction</div>
          <div className="sidebar-item">Information We Collect</div>
          <div className="sidebar-item">How We Use Your Information</div>
          <div className="sidebar-item">Data Sharing & Third Parties</div>
          <div className="sidebar-item">Student Privacy</div>
          <div className="sidebar-item">Data Security</div>
          <div className="sidebar-item">Your Rights & Choices</div>
          <div className="sidebar-item">Cookies & Tracking</div>
          <div className="sidebar-item">Data Retention</div>
          <div className="sidebar-item">Policy Updates</div>
          <div className="sidebar-item">Contact Us</div>
        </aside>

        {/* Main Content */}
        <div className="privacy-content">
          {/* Header Section */}
          <section className="privacy-header-section">
            <div className="privacy-main-header">
              <h1 className="privacy-main-title">Privacy Policy</h1>
              <p className="privacy-subtitle">Your privacy matters. Learn how EduLearn protects and manages your data.</p>
            </div>
            
            <div className="compliance-badges">
              <div className="badge-item">
                <span className="badge-dot"></span>
                <span className="badge-text">FERPA Compliant</span>
              </div>
              <div className="badge-item">
                <span className="badge-dot"></span>
                <span className="badge-text">COPPA Certified</span>
              </div>
              <div className="badge-item">
                <span className="badge-dot"></span>
                <span className="badge-text">GDPR Ready</span>
              </div>
            </div>
          </section>

          <div className="divider-line"></div>

          {/* Introduction */}
          <section className="content-section">
            <h2 className="section-title">Introduction</h2>
            <p className="section-text">Welcome to Levelup. We are committed to protecting the privacy and security of our users, including students, educators, parents, and administrators. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational technology platform.</p>
          </section>

          {/* Information We Collect */}
          <section className="content-section info-collect-section">
            <h2 className="section-title">Information We Collect</h2>
            <p className="section-subtitle">We collect the following types of information:</p>
            
            <div className="info-cards">
              <div className="info-card">
                <h3 className="card-title">Personal Information</h3>
                <p className="card-text">Name, email address, and contact details<br/>Account credentials and profile information<br/>Educational institution, role, and grade level</p>
              </div>
              
              <div className="info-card">
                <h3 className="card-title">Educational Records</h3>
                <p className="card-text">Assignment submissions and grades<br/>Learning progress and performance data<br/>Course materials accessed</p>
              </div>
              
              <div className="info-card">
                <h3 className="card-title">Technical Information</h3>
                <p className="card-text">Device information and browser type<br/>IP address and usage analytics</p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="content-section">
            <h2 className="section-title">How We Use Your Information</h2>
            <p className="section-subtitle">We use collected information to :</p>
            
            <div className="two-column-list">
              <div className="column">
                <p className="list-text">Provide and improve our educational services<br/>Personalize learning experiences<br/>Track academic progress and generate reports<br/>Facilitate platform communication<br/>Ensure security and prevent unauthorized access</p>
              </div>
              <div className="column">
                <p className="list-text">Personalize learning experiences<br/>Track academic progress and generate reports<br/>Facilitate platform communication<br/>Ensure security and prevent unauthorized access<br/>Comply with legal and educational regulations</p>
              </div>
            </div>
          </section>

          {/* Data Sharing & Third Parties */}
          <section className="content-section">
            <h2 className="section-title">Data Sharing & Third Parties</h2>
            <p className="section-subtitle">We do not sell, trade, or rent your personal information.</p>
            <p className="section-subtitle">We may share information only with:</p>
            
            <div className="sharing-list">
              <div className="sharing-item">
                <h3 className="sharing-title">Educational Institutions</h3>
                <p className="sharing-text">Authorized school administrators and educators for legitimate educational purposes.</p>
              </div>
              
              <div className="sharing-item">
                <h3 className="sharing-title">Service Providers</h3>
                <p className="sharing-text">Trusted third-party providers who assist in operating our platform, bound by confidentiality agreements.</p>
              </div>
              
              <div className="sharing-item">
                <h3 className="sharing-title">Legal Requirements</h3>
                <p className="sharing-text">When required by law, court order, or to protect user safety and platform rights.</p>
              </div>
            </div>
          </section>

          {/* Student Privacy */}
          <section className="content-section">
            <h2 className="section-title">Student Privacy</h2>
            <p className="section-subtitle">We comply with FERPA (Family Educational Rights and Privacy Act) and COPPA (Children's Online Privacy Protection Act).</p>
            
            <div className="student-privacy-content">
              <div className="privacy-block">
                <h3 className="block-title">For Students Under 13</h3>
                <p className="block-text">Parental or school consent required before account creation<br/>No targeted advertising displayed to children<br/>Parents can review, modify, or delete their child's information</p>
              </div>
              
              <div className="privacy-block">
                <h3 className="block-title">Educational Records</h3>
                <p className="block-text">Records treated as confidential education records<br/>Access limited to authorized educational personnel</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="content-section">
            <h2 className="section-title">Data Security</h2>
            <p className="section-subtitle">We implement industry-standard security measures:</p>
            
            <div className="security-grid">
              <div className="security-column">
                <p className="security-text">End-to-end encryption (TLS 1.3)<br/>End-to-end encryption (TLS 1.3)<br/>Role-based access controls</p>
              </div>
              <div className="security-column">
                <p className="security-text">AES-256 encryption at rest<br/>Regular security audits<br/>SOC 2 Type II certified data centers</p>
              </div>
            </div>
          </section>

          {/* Your Rights & Choices */}
          <section className="content-section">
            <h2 className="section-title">Your Rights & Choices</h2>
            <p className="section-subtitle">You have the following rights regarding your personal information:</p>
            
            <div className="rights-grid">
              <div className="rights-row">
                <div className="right-card">
                  <h3 className="right-title">Access</h3>
                  <p className="right-text">Request a copy of your personal data</p>
                </div>
                <div className="right-card">
                  <h3 className="right-title">Correction</h3>
                  <p className="right-text">Update inaccurate information</p>
                </div>
              </div>
              <div className="rights-row">
                <div className="right-card">
                  <h3 className="right-title">Deletion</h3>
                  <p className="right-text">Request account and data deletion</p>
                </div>
                <div className="right-card">
                  <h3 className="right-title">Opt-Out</h3>
                  <p className="right-text">Unsubscribe from communications</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section className="content-section">
            <h2 className="section-title">Cookies & Tracking</h2>
            <p className="section-subtitle">We use cookies and similar technologies for:</p>
            
            <div className="cookies-table">
              <div className="cookie-row">
                <span className="cookie-type">Essential</span>
                <span className="cookie-desc">Required for platform functionality</span>
              </div>
              <div className="cookie-row">
                <span className="cookie-type">Analytics</span>
                <span className="cookie-desc">Understanding usage patterns</span>
              </div>
              <div className="cookie-row">
                <span className="cookie-type">Preferences</span>
                <span className="cookie-desc">Storing your settings</span>
              </div>
            </div>
            <p className="cookie-note">Manage cookie preferences through your browser settings.</p>
          </section>

          {/* Data Retention */}
          <section className="content-section">
            <h2 className="section-title">Data Retention</h2>
            <p className="section-text">We retain information as long as necessary to provide services, comply with legal requirements, and support legitimate educational purposes. Upon account deletion, data is removed within 90 days unless retention is legally required.</p>
          </section>

          {/* Policy Updates */}
          <section className="content-section">
            <h2 className="section-title">Policy Updates</h2>
            <p className="section-text">We may update this Privacy Policy periodically. When material changes are made, we will notify you via email or platform notice and update the "Last Updated" date.</p>
          </section>

          {/* Contact Us */}
          <section className="content-section">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-info">
              <p className="contact-text">For questions or requests regarding this Privacy Policy:</p>
              <p className="contact-text">Email: levelupcreativity@gmail.com</p>
              <p className="contact-text">Address: 123 Education Drive, Suite 400, San Francisco, CA 94105</p>
            </div>
          </section>

          {/* CTA Button */}
          <div className="privacy-cta">
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
