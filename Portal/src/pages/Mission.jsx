import './Mission.css';

function Mission() {
  return (
    <main className="mission-page">
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-badge">Our Mission</span>
          <h1>Transform <span>Learning</span> into Action.</h1>
          <p className="hero-description">
            Learnova is the premium platform uniting hungry students, ambitious professionals, and wise academicians.
            We create a charged space designed to elevate your trajectory through immersive experiences and high-signal connections.
          </p>
          <div className="hero-actions">
            <a href="/experience" className="primary-btn">Discover Experience</a>
            <a href="/audience" className="secondary-btn">Who We Serve</a>
          </div>
        </div>
      </section>
      {/* Add more mission details here */}
    </main>
  );
}

export default Mission;

