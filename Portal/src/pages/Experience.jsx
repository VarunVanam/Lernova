import './Experience.css';

function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-section">
        <div className="experience-inner">
          <div className="experience-copy">
            <span className="section-eyebrow">The Experience</span>
            <h2>Charged. Purposeful. Electric.</h2>
            <p>
              Every session, every masterclass, and every interaction on TattvaLearn is designed to spark new ideas.
              The atmosphere is dense with ambition. You aren't just absorbing content; you're participating in a movement of minds.
            </p>
            <ul className="experience-list">
              <li>Immersive masterclasses with industry titans</li>
              <li>High-signal networking without the noise</li>
              <li>Actionable frameworks you can apply immediately</li>
              <li>A community that holds you to a higher standard</li>
            </ul>
            <div className="hero-actions">
              <a href="/audience" className="primary-btn">Find Your Path</a>
              <a href="/mentors" className="secondary-btn">Meet Mentors</a>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-card-border">
              <div className="experience-card-center" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Experience;

