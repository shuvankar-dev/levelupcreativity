import React from 'react';
import './CSS/shortcourses.css';

interface CourseCardProps {
  mode: string;
  title: string;
  trustTagline: string;
  courseBrief: string;
  learnTime: string;
  numberOfLessons: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  mode,
  title,
  trustTagline,
  courseBrief,
  learnTime,
  numberOfLessons,
}) => {
  return (
    <div className="short-course-card">
      <div className="short-course-card-content">
        <div className="mode-badge">
          <span className="mode-text">{mode}</span>
        </div>
        
        <h3 className="short-course-title">{title}</h3>
        
        <p className="trust-tagline">{trustTagline}</p>
        
        <p className="course-brief">{courseBrief}</p>
        
        <div className="course-meta">
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 7V14L18 16" stroke="#EEEFF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="14" cy="14" r="9" stroke="#EEEFF2" strokeWidth="2"/>
            </svg>
            <span className="meta-text">{learnTime}</span>
          </div>
          
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8L14 3L24 8L14 13L4 8Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 14L14 19L24 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 20L14 25L24 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="meta-text">{numberOfLessons}</span>
          </div>
        </div>
        
        <button className="start-button">
          <div className="button-content">
            <span className="button-text">Start</span>
            <img 
              src="/src/assets/ShortCoursesIcon/ArrowRight.png" 
              alt="Arrow Right" 
              className="button-icon"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

const ShortCoursesSection: React.FC = () => {
  const courses = [
    {
      mode: "ONLINE",
      title: "FIGMA BASICS",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to Figma Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
    {
      mode: "ONLINE",
      title: "MAYA BASICS",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to Maya Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
    {
      mode: "ONLINE",
      title: "UX AUDIT",
      trustTagline: "Learn From Experts",
      courseBrief: "Quick start guide to UX Audit Essentials",
      learnTime: "2 hours",
      numberOfLessons: "12 lessons",
    },
  ];

  return (
    <section className="short-courses-section">
      <div className="short-courses-header">
        <h2 className="short-courses-title">Short Courses We Offer</h2>
        <p className="short-courses-subtitle">
          Start your learning journey with our comprehensive mini course
        </p>
      </div>
      
      <div className="carousel-container">
        <div className="short-courses-grid">
          {/* Render courses multiple times for seamless infinite scroll */}
          {[...courses, ...courses, ...courses].map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortCoursesSection;
// 