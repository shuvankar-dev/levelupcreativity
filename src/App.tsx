
import './App.css';


function App() {
  return (
    <div className="coming-soon-container">
      <video
        className="landingpage-video big-frame"
        src="/src/assets/vedio/landingpage_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="attractive-content">
        <h1 className="main-title">Unleash Your Creativity</h1>
        <h2 className="subtitle">Graphic Design Learning Platform</h2>
        <div className="coming-soon-badge">Coming Soon</div>
        <p className="description">
          <span>Master graphic design from <b>beginner</b> to <b>advanced</b> level with hands-on projects, expert guidance, and a vibrant community.</span>
        </p>
        <div className="contact-box">
          <span>Contact us:</span>
          <a href="tel:+918420184862" className="contact-link">+91 84201 84862</a>
          <span className="divider">/</span>
          <a href="tel:+919836841945" className="contact-link">+91 98368 41945</a>
        </div>
      </div>
    </div>
  );
}

export default App;
