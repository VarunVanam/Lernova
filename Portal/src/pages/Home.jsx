import NewsletterForm from '../components/NewsletterForm';
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
            <a href="#newsletter" className="primary-btn">Join the Movement</a>
            <a href="#experience" className="secondary-btn">Explore Platform</a>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="experience-inner">
          <div className="experience-copy">
            <span className="section-eyebrow">The Experience</span>
            <h2>Charged. Purposeful. Electric.</h2>
            <p>
              Every session, every masterclass, and every interaction on Learnova is designed to spark new ideas.
              The atmosphere is dense with ambition. You aren't just absorbing content; you're participating in a movement of minds.
            </p>
            <ul className="experience-list">
              <li>Immersive masterclasses with industry titans</li>
              <li>High-signal networking without the noise</li>
              <li>Actionable frameworks you can apply immediately</li>
              <li>A community that holds you to a higher standard</li>
            </ul>
          </div>
          <div className="experience-card">
            <div className="experience-card-border">
              <div className="experience-card-center" />
            </div>
          </div>
        </div>
      </section>

      <section id="audiences" className="audiences-section">
        <div className="section-header">
          <h2>Every Mind. One Movement.</h2>
          <p>Three distinct paths, united by a singular drive to excel.</p>
        </div>
        <div className="audience-grid">
          <article className="audience-card audience-student">
            <div className="audience-icon">🎓</div>
            <h3>Students</h3>
            <p>Hungry to grow. Connect with mentors, access premium resources, and accelerate your path from academia to industry leadership.</p>
          </article>
          <article className="audience-card audience-professional">
            <div className="audience-icon">📘</div>
            <h3>Professionals</h3>
            <p>Leveling up. Sharpen your edge, share your field notes, and network with elite practitioners who push the boundaries.</p>
          </article>
          <article className="audience-card audience-academician">
            <div className="audience-icon">🌐</div>
            <h3>Academicians</h3>
            <p>Sharing wisdom. Translate theoretical breakthroughs into real-world impact, guiding the next generation of innovators.</p>
          </article>
        </div>
      </section>

      <section id="mentors" className="mentors-section">
        <div className="mentors-header">
          <div>
            <span className="section-eyebrow">The Network</span>
            <h2>Learn from the Best.</h2>
          </div>
          <a href="#newsletter" className="outline-btn">View All Mentors</a>
        </div>
        <div className="mentor-grid">
          <article className="mentor-card">
            <div className="mentor-avatar" />
            <strong>Dr. Elena Rostova</strong>
            <span>AI Researcher</span>
          </article>
          <article className="mentor-card">
            <div className="mentor-avatar" />
            <strong>Marcus Chen</strong>
            <span>VP Engineering</span>
          </article>
          <article className="mentor-card">
            <div className="mentor-avatar" />
            <strong>Sarah Jenkins</strong>
            <span>Product Lead</span>
          </article>
          <article className="mentor-card">
            <div className="mentor-avatar" />
            <strong>Prof. David Okafor</strong>
            <span>Data Science</span>
          </article>
        </div>
      </section>

      <section id="newsletter" className="waitlist-section">
        <div className="waitlist-card">
          <NewsletterForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">LEARNOVA</div>
          <nav className="footer-nav">
            <a href="#home">About Us</a>
            <a href="#experience">Manifesto</a>
            <a href="#audiences">Terms of Service</a>
            <a href="#mentors">Privacy Policy</a>
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

