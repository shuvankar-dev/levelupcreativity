import './App.css';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
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
      
      {/* Header */}
      <header className="header">
        <div className="logo">levelup<span className="dot"></span></div>
        <button className="get-in-touch-btn">Get In Touch</button>
      </header>
      
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
  );
}

export default App;
