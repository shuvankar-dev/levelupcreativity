import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Contact from './pages/Contact.tsx'
import AdminAuth from './pages/AdminAuth.tsx'

function Root() {
  const navigate = useNavigate();

  // Listen for custom navigation events and convert to router navigation
  window.addEventListener('navigate' as any, (e: CustomEvent) => {
    const page = e.detail.page;
    if (page === 'home') {
      navigate('/');
    } else if (page === 'privacy-policy') {
      navigate('/privacy-policy');
    } else if (page === 'contact') {
      navigate('/contact');
    } else if (page === 'admin') {
      navigate('/admin');
    }
  });

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminAuth />} />
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
