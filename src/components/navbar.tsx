import { useState, useEffect, useRef } from 'react';
import './CSS/navbar.css';
import levelupLogo from '../assets/levelupLogo.png';

interface NavbarProps {
  variant?: 'default' | 'course-page';
  courseName?: string;
}

function Navbar({ variant = 'default', courseName }: NavbarProps) {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any pending timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // If at the very top (0), always show expanded
      if (currentScrollY === 0) {
        setIsCollapsed(false);
      } 
      // Any scroll down from current position - collapse immediately
      else if (currentScrollY > lastScrollY.current + 5) {
        setIsCollapsed(true);
      } 
      // Scrolling up - expand
      else if (currentScrollY < lastScrollY.current - 5) {
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
    <nav className={`navbar ${isCollapsed ? 'navbar-collapsed' : ''} ${variant === 'course-page' ? 'navbar-course-page' : ''}`}>
      <div className="navbar-inner">
        <div 
          className="logo"
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }))}
          style={{ cursor: 'pointer' }}
        >
          <img src={levelupLogo} alt="LevelUp" className="logo-image" />
        </div>
        
        {/* Navigation Menu - Fades out when collapsed */}
        <div className={`nav-menu ${isCollapsed ? 'nav-menu-hidden' : ''}`}>
          {/* Courses with Dropdown Arrow */}
          <div 
            className="nav-item nav-item-dropdown"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <div className="nav-item-content">
              <span className="nav-text">{courseName || 'Courses'}</span>
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
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }))}
            style={{ cursor: 'pointer' }}
          >
            <div className="nav-item-content">
              <span className="nav-text">Contacts</span>
            </div>
          </div>

          {/* Privacy Policy - No Arrow */}
          <div 
            className="nav-item"
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'privacy-policy' } }))}
            style={{ cursor: 'pointer' }}
          >
            <div className="nav-item-content">
              <span className="nav-text">Privacy Policy</span>
            </div>
          </div>
        </div>

        <button 
          className="get-in-touch-btn"
          onClick={() => window.open('https://wa.me/919836841945?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20UI%2FUX%20and%20VFX%20courses.%20Can%20you%20provide%20more%20details%3F', '_blank')}
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
