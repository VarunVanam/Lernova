import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <img src="/TLt.png" alt="TattvaLearn" style={{ height: '40px', width: 'auto' }} />
        </NavLink>
        <ul className="nav-links">
          {/* <li><NavLink to="/mission">Mission</NavLink></li> */}
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/audience">Audience</NavLink></li>
          {/* <li><NavLink to="/mentors">Mentors</NavLink></li> */}
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>

          <li><NavLink to="/about">About Us</NavLink></li>
        </ul>
        <div className="nav-actions">
          {token ? (
            <button type="button" className="nav-cta nav-cta-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <NavLink to="/login" className="nav-cta">Login</NavLink>
          )}
          <button
            type="button"
            className={`theme-icon-btn theme-icon-btn-${theme}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☀' : '🌙'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
