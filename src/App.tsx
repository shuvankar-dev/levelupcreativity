
import './App.css';


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
        <div className="logo-text">levelup.</div>
        <h1 className="main-title">Design meets </h1>
        <h2 className="subtitle">UI/UX Design & 3D Animation Courses Coming Soon</h2>

        <button className="call-btn">
          Request a Call
          <span className="call-icon">📞</span>
        </button>

        <div className="contact-box">
          <span style={{ color: '#fff', fontWeight: 700, marginRight: 8 }}>Contact us:</span>
          <a href="tel:+918420184862" className="contact-link">+91 84201 84862</a>
          <span className="divider">/</span>
          <a href="tel:+919836841945" className="contact-link">+91 98368 41945</a>
        </div>
      </div>
    </div>
  );
}

export default App;
