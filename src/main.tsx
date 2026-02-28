import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Contact from './pages/Contact.tsx'
import AdminAuth from './pages/AdminAuth.tsx'
import UXDesignCourse from './pages/UXDesignCourse.tsx'
import VFXAnimationCourse from './pages/VFXAnimationCourse.tsx'
import ComponentTest from './pages/ComponentTest.tsx'
import ToolsWeOfferVFX from './components/ToolsWeOfferVFX.tsx'
import Blog from './pages/Blog.tsx'
import VFXShortCourses from './pages/VFXShortCourses.tsx'

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
      } else if (page === 'vfx-animation') {
        navigate('/vfx-animation');
      } else if (page === 'blog') {
        navigate('/blog');
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
      <Route path="/vfx-animation" element={<VFXAnimationCourse />} />
      <Route path="/ComponentTest" element={<ComponentTest />} />
      <Route path="/ToolsWeOfferVFX" element={<ToolsWeOfferVFX />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/vfx-short-courses" element={<VFXShortCourses />} />
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
