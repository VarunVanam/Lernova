import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">LEARNOVA</NavLink>
        <ul className="nav-links">
          <li><NavLink to="/mission">Mission</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/audience">Audience</NavLink></li>
          <li><NavLink to="/mentors">Mentors</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
        </ul>
        <NavLink to="/login" className="nav-cta">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

