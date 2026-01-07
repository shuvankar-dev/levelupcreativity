import './CSS/home.css';
import { Palette, Box } from 'lucide-react';

function Home() {
  return (
    <section className="courses-section">
      <div className="courses-container">
        {/* Section Header */}
        <div className="courses-header">
          <h2 className="courses-title">Our Courses</h2>
          <p className="courses-description">
            Learn in-demand UI/UX and VFX skills through practical, mentor-led training designed to build a standout portfolio and job-ready confidence.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {/* UI/UX Design Card */}
          <div className="course-card">
            <div className="course-image-wrapper">
              <img 
                src="/src/assets/mobile_image.png" 
                alt="UI/UX Design" 
                className="course-image"
              />
            </div>
            <div className="course-content">
              <div className="course-icon">
                <Palette size={24} />
              </div>
              <h3 className="course-name">UI/UX Design</h3>
              <p className="course-info">
                Build strong UI/UX skills with expert guidance and real-world practice
              </p>
            </div>
          </div>

          {/* VFX Animation Card */}
          <div className="course-card">
            <div className="course-image-wrapper">
              <img 
                src="/src/assets/animated.png" 
                alt="VFX Animation" 
                className="course-image"
              />
            </div>
            <div className="course-content">
              <div className="course-icon">
                <Box size={24} />
              </div>
              <h3 className="course-name">VFX Animation</h3>
              <p className="course-info">
                Master cinematic VFX skills with real projects and expert mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
