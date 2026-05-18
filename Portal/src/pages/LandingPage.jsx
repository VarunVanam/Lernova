import './LandingPage.css';

function LandingPage() {
  return (
    <div className="lp-page">
      <nav className="lp-nav">
        <a href="#home" className="lp-nav-logo">
          <div className="lp-nav-logo-mark">TL</div>
          <span className="lp-nav-brand">TattvaLearn</span>
        </a>
        <ul className="lp-nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#event">Event 2026</a></li>
          <li><a href="#partners">Partner</a></li>
        </ul>
        <button className="lp-nav-cta" type="button">Schedule a Call</button>
      </nav>

      <section className="lp-hero" id="home">
        <div className="lp-hero-bg-pattern" />
        <div className="lp-hero-circles" />
        <div className="lp-hero-content">
          <div className="lp-hero-badge"><span /> India's Campus-to-Corporate Readiness Platform</div>
          <h1>Bridging Degrees<br />to <em>Real Careers</em></h1>
          <p className="lp-hero-sub">We prepare students not just to get a job - but to succeed in one. Because the gap between academic excellence and workplace readiness is the most important gap no one is solving.</p>
          <p className="lp-hero-tagline">Skill Over Degree · Industry Connect · Future Workforce AI</p>
          <div className="lp-hero-pills">
            <span className="lp-pill lp-pill-saffron">Engineering Colleges</span>
            <span className="lp-pill lp-pill-forest">MBA Institutes</span>
            <span className="lp-pill lp-pill-gold">Law Schools</span>
            <span className="lp-pill lp-pill-saffron">Corporate CSR</span>
          </div>
          <div className="lp-hero-btns">
            <a href="#programs" className="lp-btn-primary">Explore Programs →</a>
            <a href="#event" className="lp-btn-secondary">TattvaLearn 2026 Event</a>
          </div>
          <div className="lp-hero-stats">
            <div className="lp-stat-item"><span className="lp-stat-num">500+</span><span className="lp-stat-label">Event Participants</span></div>
            <div className="lp-stat-item"><span className="lp-stat-num">3</span><span className="lp-stat-label">Program Tiers</span></div>
            <div className="lp-stat-item"><span className="lp-stat-num">6</span><span className="lp-stat-label">Core Modules</span></div>
            <div className="lp-stat-item"><span className="lp-stat-num">2026</span><span className="lp-stat-label">Bangalore Event</span></div>
          </div>
        </div>
      </section>

      <section className="lp-why-section" id="about">
        <div className="lp-why-grid">
          <div>
            <div className="lp-section-label">The Problem We Solve</div>
            <h2 className="lp-section-title">India Produces Graduates.<br />Industry Needs <em>Professionals.</em></h2>
            <p className="lp-section-sub">India produces millions of graduates every year - yet nearly half struggle with employability. Not because they lack intelligence. Because no one taught them how the corporate world actually works.</p>
            <div className="lp-why-list">
              <div className="lp-why-card"><div className="lp-why-icon">🎓</div><div><div className="lp-why-card-title">Academically strong, corporately unprepared</div><div className="lp-why-card-text">Students ace exams but freeze in group discussions, struggle with professional communication, and underperform in interviews.</div></div></div>
              <div className="lp-why-card"><div className="lp-why-icon">🏛️</div><div><div className="lp-why-card-title">Institutions lack structured employability frameworks</div><div className="lp-why-card-text">Curriculum covers theory well, but workplace behaviour, AI readiness, and career clarity often fall through the cracks.</div></div></div>
              <div className="lp-why-card"><div className="lp-why-icon">🔍</div><div><div className="lp-why-card-title">Recruiters spend time filtering avoidable gaps</div><div className="lp-why-card-text">Hiring managers report entry-level candidates are high potential but underprepared in presence.</div></div></div>
            </div>
          </div>
          <div className="lp-why-right">
            <div className="lp-why-big-stat"><div className="lp-why-big-num">~50%</div><div className="lp-why-big-label">of Indian graduates face employability challenges despite holding degrees from recognized institutions</div></div>
            <div className="lp-why-diff">
              <div className="lp-why-diff-title">THE TattvaLearn DIFFERENCE</div>
              <ul>
                <li>We simulate real corporate environments - not classrooms</li>
                <li>Every student gets a personal feedback scorecard</li>
                <li>Industry experts lead every session</li>
                <li>AI readiness is core, not optional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-what-section" id="what">
        <div className="lp-what-header">
          <div>
            <div className="lp-section-label">What We Do</div>
            <h2 className="lp-section-title">Six Skills That Change<br />How Students <em>Show Up</em></h2>
          </div>
          <p className="lp-section-sub">Every module is designed to mirror what hiring managers actually look for on Day 1.</p>
        </div>
        <div className="lp-module-grid">
          <div className="lp-module-card"><div className="lp-module-num">01</div><div className="lp-module-title">Communication & Presence</div><div className="lp-module-text">Build professional voice and presence.</div></div>
          <div className="lp-module-card"><div className="lp-module-num">02</div><div className="lp-module-title">Interview Intelligence</div><div className="lp-module-text">Think on your feet, not scripted answers.</div></div>
          <div className="lp-module-card"><div className="lp-module-num">03</div><div className="lp-module-title">Group Dynamics & Decision Making</div><div className="lp-module-text">Lead and collaborate in live GD simulations.</div></div>
          <div className="lp-module-card"><div className="lp-module-num">04</div><div className="lp-module-title">AI for the Future Workforce</div><div className="lp-module-text">Hands-on workplace AI literacy.</div></div>
          <div className="lp-module-card"><div className="lp-module-num">05</div><div className="lp-module-title">Corporate Simulation</div><div className="lp-module-text">Navigate real scenarios and stakeholder contexts.</div></div>
          <div className="lp-module-card"><div className="lp-module-num">06</div><div className="lp-module-title">Career Architecture</div><div className="lp-module-text">Create clarity and distinctive positioning.</div></div>
        </div>
      </section>

      <section className="lp-programs-section" id="programs">
        <div className="lp-programs-header">
          <div className="lp-section-label">Our Programs</div>
          <h2 className="lp-section-title">Choose Your Depth of <em>Engagement</em></h2>
        </div>
        <div className="lp-programs-grid">
          <div className="lp-program-card"><div className="lp-program-duration">1-Day Bootcamp</div><div className="lp-program-title">TattvaLearn SPARK</div><ul><li>Communication crash course</li><li>Live GD simulation</li><li>Mock interview experience</li></ul></div>
          <div className="lp-program-card lp-program-featured"><div className="lp-featured-badge">FLAGSHIP</div><div className="lp-program-duration">3-Day Immersive</div><div className="lp-program-title">TattvaLearn CORE</div><ul><li>All 6 core modules</li><li>AI workplace module</li><li>Industry interaction</li></ul></div>
          <div className="lp-program-card"><div className="lp-program-duration">Semester Partnership</div><div className="lp-program-title">TattvaLearn PRO</div><ul><li>Semester-long integration</li><li>Live projects + mentorship</li><li>Placement support</li></ul></div>
        </div>
      </section>

      <section className="lp-flagship-section">
        <div className="lp-flagship-grid">
          <div>
            <div className="lp-section-label">Flagship Workshop</div>
            <h2 className="lp-section-title">From Campus to <em>Corporate</em></h2>
            <div className="lp-flagship-steps">
              <div className="lp-flagship-step"><span>01</span><p>Live Group Discussions</p></div>
              <div className="lp-flagship-step"><span>02</span><p>Mock Interviews with Practitioners</p></div>
              <div className="lp-flagship-step"><span>03</span><p>Hands-On AI Sessions</p></div>
              <div className="lp-flagship-step"><span>04</span><p>Personal Feedback Scorecard</p></div>
            </div>
          </div>
          <div className="lp-flagship-visual">Student Scorecard Preview</div>
        </div>
      </section>

      <section className="lp-event-section" id="event">
        <div className="lp-event-header">
          <div>
            <div className="lp-section-label">TattvaLearn 2026</div>
            <h2 className="lp-section-title">Where Minds <em>Ignite</em></h2>
            <p className="lp-section-sub">A two-day international-standard conference and hackathon connecting CXOs, students, faculty, and industry leaders.</p>
            <div className="lp-event-meta">
              <div>📅 June 20-21, 2026</div>
              <div>📍 Bangalore, India</div>
              <div>👥 500+ Participants Expected</div>
            </div>
          </div>
          <div className="lp-event-days">
            <div className="lp-event-day-card"><div className="lp-event-day-title">The Conference</div><ul><li>Keynotes by industry CXOs</li><li>Deep-dive technical sessions</li><li>Student-corporate connects</li></ul></div>
            <div className="lp-event-day-card"><div className="lp-event-day-title">The Hackathon</div><ul><li>Real-world problem statements</li><li>8-hour build sprint</li><li>Internship opportunities</li></ul></div>
          </div>
        </div>
      </section>

      <section className="lp-philosophy-section" id="philosophy">
        <div className="lp-section-label">Our Philosophy</div>
        <h2 className="lp-section-title">Degrees May Open Doors.<br /><em>Skills Keep Them Open.</em></h2>
        <div className="lp-pillar-grid">
          <div className="lp-pillar-card"><div className="lp-pillar-number">01</div><div className="lp-pillar-title">Skill Over Degree</div></div>
          <div className="lp-pillar-card"><div className="lp-pillar-number">02</div><div className="lp-pillar-title">Industry Connect</div></div>
          <div className="lp-pillar-card"><div className="lp-pillar-number">03</div><div className="lp-pillar-title">Future Workforce AI</div></div>
        </div>
      </section>

      <section className="lp-how-section" id="how">
        <div className="lp-section-label">How It Works</div>
        <h2 className="lp-section-title">From First Call to <em>Measurable Impact</em></h2>
        <div className="lp-steps-timeline">
          <div className="lp-timeline-step"><div className="lp-timeline-dot">1</div><p>Discovery Call</p></div>
          <div className="lp-timeline-step"><div className="lp-timeline-dot">2</div><p>Custom Program Design</p></div>
          <div className="lp-timeline-step"><div className="lp-timeline-dot">3</div><p>On-Campus Delivery</p></div>
          <div className="lp-timeline-step"><div className="lp-timeline-dot">4</div><p>Post-Program Insights</p></div>
        </div>
      </section>

      <section className="lp-partner-section" id="partners">
        <div className="lp-partner-header">
          <div className="lp-section-label">Partnerships</div>
          <h2 className="lp-section-title">Built for Those Who <em>Build Futures</em></h2>
        </div>
        <div className="lp-partner-grid">
          <div className="lp-partner-card"><div className="lp-partner-title">For Institutions</div></div>
          <div className="lp-partner-card"><div className="lp-partner-title">For Corporates</div></div>
          <div className="lp-partner-card"><div className="lp-partner-title">For Event Partners</div></div>
        </div>
      </section>

      <section className="lp-cta-section">
        <h2 className="lp-cta-title">Bring TattvaLearn<br />to Your Campus</h2>
        <p className="lp-cta-sub">Let's build career-ready professionals, not just degree holders.</p>
      </section>

      <footer className="lp-footer">
        <div className="lp-footer-grid">
          <div><div className="lp-footer-brand">TattvaLearn</div><div className="lp-footer-about">India's Campus-to-Corporate Readiness Platform.</div></div>
          <div><div className="lp-footer-col-title">Programs</div></div>
          <div><div className="lp-footer-col-title">About</div></div>
          <div><div className="lp-footer-col-title">Event 2026</div></div>
        </div>
        <div className="lp-footer-bottom">
          <div className="lp-footer-copy">© 2026 TattvaLearn. All rights reserved.</div>
          <div className="lp-footer-tagline">Where Minds Ignite · Bangalore, June 20-21, 2026</div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
