import './App.css';
import { Phone } from 'lucide-react';

function App() {
  return (
    <div className="video-content-section">
      <video
        className="main-video"
        src="/src/assets/vedio/landingpage_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
      <div className="attractive-content">
        {/* Logo Image instead of text */}
        <img 
          src="/assets/icon.png" 
          alt="Level Up Creativity Logo" 
          className="logo-image"
        />
        
        <h1 className="main-title">Design meets Dimension</h1>
        <h2 className="subtitle">UI/UX Design & 3D Animation Courses Coming Soon</h2>

        <button className="call-btn">
          Request a Call
          <Phone className="call-icon" size={20} />
        </button>
      </div>
    </div>
  );
}

export default App;
