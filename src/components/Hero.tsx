import './CSS/hero.css';

function Hero() {
  return (
    <main className="hero-section">
      {/* Hero Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="limited-spots-badge">
          <span>Hurry, Limited Spots Left</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Become a UI/UX and<br />
          VFX Animation Expert
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Become job-ready with real design projects, industry-standard processes.
        </p>

        {/* Button */}
        <button className="enroll-button">
          <span className="button-text">
            <span className="button-text-inner">Enroll Now →</span>
            <span className="button-text-inner">Enroll Now →</span>
          </span>
        </button>
      </div>

      {/* Gradient Background Container */}
      <div className="gradient-container">
        {/* Ellipse 27 - Lightest Purple */}
        <div className="gradient-ellipse gradient-1"></div>
        
        {/* Ellipse 23 - Light Purple */}
        <div className="gradient-ellipse gradient-2"></div>
        
        {/* Ellipse 24 - Dark Purple */}
        <div className="gradient-ellipse gradient-3"></div>
        
        {/* Ellipse 25 - Darker Purple */}
        <div className="gradient-ellipse gradient-4"></div>
        
        {/* Ellipse 26 - Darkest Purple */}
        <div className="gradient-ellipse gradient-5"></div>
        
        {/* Frame 582 - Overlay Gradient */}
        <div className="gradient-frame-582"></div>
      </div>
    </main>
  );
}

export default Hero;
