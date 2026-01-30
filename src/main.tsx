import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'

function Root() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Listen for page navigation events
    const handleNavigation = (e: CustomEvent) => {
      setCurrentPage(e.detail.page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('navigate' as any, handleNavigation);
    return () => window.removeEventListener('navigate' as any, handleNavigation);
  }, []);

  return (
    <StrictMode>
      {currentPage === 'home' && <App />}
      {currentPage === 'privacy-policy' && <PrivacyPolicy />}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
