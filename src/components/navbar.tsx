import { useState } from 'react';
import './CSS/navbar.css';

function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        levelup<span className="dot"></span>
      </div>
      
      {/* Navigation Menu */}
      <div className="nav-menu">
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
    </nav>
  );
}

export default Navbar;
