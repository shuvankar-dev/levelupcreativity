import React from 'react';
import './CSS/Footer.css';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import levelupLogo from '../assets/levelupLogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Section - Logo + Navigation */}
        <div className="footer-top">
          {/* Logo + Description + Social */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={levelupLogo} alt="LevelUp" className="logo-image" />
            </div>
            <p className="footer-description">
              Empowering creators withworld-class education in design and 3D
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-nav">
            <div className="nav-column">
              <h4 className="nav-title">Courses</h4>
              <ul className="nav-links">
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">3D Design</a></li>
                <li><a href="#">Short Courses</a></li>
              </ul>
            </div>

            <div className="nav-column">
              <h4 className="nav-title">Company</h4>
              <ul className="nav-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>

            <div className="nav-column">
              <h4 className="nav-title">Support</h4>
              <ul className="nav-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="newsletter-text">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-subtitle">Get the latest courses and updates</p>
            </div>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="newsletter-button">Get In Touch</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">© 2025 DesignEdu. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
