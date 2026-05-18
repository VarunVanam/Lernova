import { NavLink } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
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

      {/* <Mentors /> */}

      <section id="newsletter" className="waitlist-section">
        <div className="waitlist-card">
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;

