import { NavLink } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import Experience from './Experience';
import Audience from './Audience';
import Mentors from './Mentors';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="hero-badge">Where Minds Ignite</span>
          <h1>Transform <span>Learning</span> into Action.</h1>
          <p className="hero-description">
            A premium platform uniting hungry students, ambitious professionals, and wise academicians.
            Step into a charged space designed to elevate your trajectory.
          </p>
          <div className="hero-actions">
            <NavLink to="/mission" className="primary-btn">Our Mission</NavLink>
            <NavLink to="/experience" className="secondary-btn">Discover Experience</NavLink>
          </div>
        </div>
      </section>

      <Experience />

      <Audience />

      <Mentors />

      <section id="newsletter" className="waitlist-section">
        <div className="waitlist-card">
          <NewsletterForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">LEARNOVA</div>
          <nav className="footer-nav">
            <NavLink to="/mission">About Us</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/audience">Audience</NavLink>
            <NavLink to="/mentors">Mentors</NavLink>
          </nav>
        </div>
        <div className="footer-copy">
          <span>Every Mind. One Movement.</span>
          <small>&copy; 2026 Learnova. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}

export default Home;

