import './App.css';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/navbar';
import Home from './components/home';
import CTASection from './components/CTASection';
import ToolsSection from './components/ToolsSection';
import FreeCourseSection from './components/FreeCourseSection';
import PricingSection from './components/PricingSection';
import CurriculumSection from './components/CurriculumSection';
import PrerequisitesSection from './components/PrerequisitesSection';
import WhyLevelUpSection from './components/WhyLevelUpSection';

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

      <Home />
      <CTASection />
      <ToolsSection />
      <FreeCourseSection />
      <PricingSection />
      <CurriculumSection />
      <PrerequisitesSection />
      <WhyLevelUpSection />
    </>
  );
}

export default App;
