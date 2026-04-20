import './Audience.css';

function Audience() {
  return (
    <main className="audience-page">
      <section className="audiences-section">
        <div className="section-header">
          <h2>Every Mind. One Movement.</h2>
          <p>Three distinct paths, united by a singular drive to excel.</p>
        </div>
        <div className="audience-grid">
          <article className="audience-card audience-student">
            <div className="audience-icon">🎓</div>
            <h3>Students</h3>
            <p>Hungry to grow. Connect with mentors, access premium resources, and accelerate your path from academia to industry leadership.</p>
            <a href="/mentors" className="primary-btn">Find Mentors</a>
          </article>
          <article className="audience-card audience-professional">
            <div className="audience-icon">📘</div>
            <h3>Professionals</h3>
            <p>Leveling up. Sharpen your edge, share your field notes, and network with elite practitioners who push the boundaries.</p>
            <a href="/experience" className="primary-btn">Explore Platform</a>
          </article>
          <article className="audience-card audience-academician">
            <div className="audience-icon">🌐</div>
            <h3>Academicians</h3>
            <p>Sharing wisdom. Translate theoretical breakthroughs into real-world impact, guiding the next generation of innovators.</p>
            <a href="/mission" className="primary-btn">Our Mission</a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Audience;

