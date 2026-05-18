import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">TattvaLearn</div>
        <nav className="footer-nav">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/audience">Audience</NavLink>
          <NavLink to="/mentors">Mentors</NavLink>
        </nav>
      </div>
      <div className="footer-copy">
        <span>Every Mind. One Movement.</span>
        <small>&copy; 2026 TattvaLearn. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

