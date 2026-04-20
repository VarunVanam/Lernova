import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Mission from './pages/Mission';
import Experience from './pages/Experience';
import Audience from './pages/Audience';
import Mentors from './pages/Mentors';
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
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
