import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/navbar.css';
import levelupLogo from '../assets/levelupLogo.png';

function Navbar() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Collapse navbar when scrolling down past 100px
      if (currentScrollY > 100 && scrollDifference > 3) {
        setIsCollapsed(true);
      } 
      // Show navbar when scrolling up or at top
      else if (scrollDifference < -3 || currentScrollY < 50) {
        setIsCollapsed(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <nav className={`navbar ${isCollapsed ? 'navbar-collapsed' : ''}`}>
      <div className="navbar-inner">
        <div 
          className="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <img src={levelupLogo} alt="LevelUp" className="logo-image" />
        </div>
        
        {/* Navigation Menu - Fades out when collapsed */}
        <div className={`nav-menu ${isCollapsed ? 'nav-menu-hidden' : ''}`}>
          {/* Courses with Dropdown Arrow */}
          <div className="nav-item nav-item-dropdown">
            <div className="nav-item-content">
              <span className="nav-text">Courses</span>
              <div className="nav-arrow-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Blogs - No Arrow */}
          <div className="nav-item">
            <div className="nav-item-content">
              <span className="nav-text">Blogs</span>
            </div>
          </div>

          {/* Events - No Arrow */}
          <div className="nav-item">
            <div className="nav-item-content">
              <span className="nav-text">Events</span>
            </div>
          </div>

          {/* Contacts - No Arrow */}
          <div 
            className="nav-item"
            onClick={() => navigate('/contact')}
            style={{ cursor: 'pointer' }}
          >
            <div className="nav-item-content">
              <span className="nav-text">Contacts</span>
            </div>
          </div>

          {/* Privacy Policy - No Arrow */}
          <div 
            className="nav-item"
            onClick={() => navigate('/privacy-policy')}
            style={{ cursor: 'pointer' }}
          >
            <div className="nav-item-content">
              <span className="nav-text">Privacy Policy</span>
            </div>
          </div>
        </div>

        <button className="get-in-touch-btn">Get In Touch</button>
      </div>
    </nav>
  );
}

export default Navbar;
