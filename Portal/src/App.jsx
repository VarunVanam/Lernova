import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));

    const handleAnchorClick = (event) => {
      event.preventDefault();
      const target = document.querySelector(event.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    anchorLinks.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
    return () => anchorLinks.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
