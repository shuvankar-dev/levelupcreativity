import { useState, useEffect, useRef } from 'react';
import './CSS/navbar.css';
import levelupLogo from '../assets/levelupLogo.png';

function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Full hero height
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Clear any pending timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // If at top (hero section), always show full navbar
      if (currentScrollY <= heroHeight) {
        setIsCollapsed(false);
      } 
      // If past hero section
      else {
        // Scrolling down (with threshold to avoid jitter)
        if (scrollDifference > 5) {
          setIsCollapsed(true);
        } 
        // Scrolling up (with threshold to avoid jitter)
        else if (scrollDifference < -5) {
          setIsCollapsed(false);
        }
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
        <div className="logo">
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
          <div className="nav-item">
            <div className="nav-item-content">
              <span className="nav-text">Contacts</span>
            </div>
          </div>
        </div>

        <button className="get-in-touch-btn">Get In Touch</button>
      </div>
    </nav>
  );
}

export default Navbar;
