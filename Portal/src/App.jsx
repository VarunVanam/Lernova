import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLoading } from './contexts/LoadingContext';
import AppLoader from './components/AppLoader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Mission from './pages/Mission';
import Experience from './pages/Experience';
import Audience from './pages/Audience';
import Mentors from './pages/Mentors';
import Courses from './pages/Courses';
import LandingPage from './pages/LandingPage';
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/landingpage';

  return (
    <div className="app">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

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

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
