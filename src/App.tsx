import './App.css';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/navbar';
import Home from './components/home';
import CTASection from './components/CTASection';

function App() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Video Background */}
        <video
          className="background-video"
          src="/src/assets/vedio/landingpage_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
        
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">LevelUp.</span> Made To Standout.
          </h1>
            
          <p className="hero-subtitle">
            Master UI/UX Design and VFX Animation with industry-leading courses. Transform your passion into expertise.
          </p>
          
          <button className="enroll-btn">
            Enroll Now <ArrowRight className="arrow-icon" size={20} />
          </button>
        </div>
      </div>

      {/* Home/Courses Section */}
      <Home />
      {/* Your other components */}
      <CTASection />
    </>
  );
}

export default App;
