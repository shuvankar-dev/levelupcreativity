import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Contact from './pages/Contact.tsx'
import AdminAuth from './pages/AdminAuth.tsx'
import UXDesignCourse from './pages/UXDesignCourse.tsx'
import ComponentTest from './pages/ComponentTest.tsx'

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for custom navigation events and convert to router navigation
    const handleNavigate = (e: CustomEvent) => {
      const page = e.detail.page;
      if (page === 'home') {
        navigate('/');
      } else if (page === 'privacy-policy') {
        navigate('/privacy-policy');
      } else if (page === 'contact') {
        navigate('/contact');
      } else if (page === 'admin') {
        navigate('/admin');
      } else if (page === 'ux-design') {
        navigate('/ux-design');
      }
    };

    window.addEventListener('navigate' as any, handleNavigate);
    
    return () => {
      window.removeEventListener('navigate' as any, handleNavigate);
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminAuth />} />
      <Route path="/ux-design" element={<UXDesignCourse />} />
      <Route path="/ComponentTest" element={<ComponentTest />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
