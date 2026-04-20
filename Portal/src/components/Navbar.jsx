const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">LEARNOVA</div>
        <ul className="nav-links">
          <li><a href="#home">Mission</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#audiences">Audiences</a></li>
          <li><a href="#mentors">Mentors</a></li>
        </ul>
        <a href="#newsletter" className="nav-cta">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;

