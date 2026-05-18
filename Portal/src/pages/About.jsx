import { NavLink } from 'react-router-dom';
import './About.css';

const coreModules = [
  {
    id: '01',
    icon: 'CP',
    title: 'Communication & Presence',
    text: 'Build the clarity, confidence, and listening habits that help you stand out in interviews, discussions, and workplace conversations.'
  },
  {
    id: '02',
    icon: 'II',
    title: 'Interview Intelligence',
    text: 'Learn how to handle foundational and curveball questions with structured thinking instead of memorized scripts.'
  },
  {
    id: '03',
    icon: 'GD',
    title: 'Group Dynamics',
    text: 'Practice decision-making, collaboration, and leadership in realistic team simulations and guided feedback loops.'
  },
  {
    id: '04',
    icon: 'AI',
    title: 'AI Readiness',
    text: 'Use AI tools responsibly and productively so you can contribute faster in modern academic and professional environments.'
  },
  {
    id: '05',
    icon: 'CS',
    title: 'Corporate Simulation',
    text: 'Experience realistic workplace scenarios to improve stakeholder communication, role clarity, and decision ownership.'
  },
  {
    id: '06',
    icon: 'CA',
    title: 'Career Architecture',
    text: 'Design your next steps with better positioning, stronger profiles, and a practical roadmap toward internships and roles.'
  }
];

const journeySteps = [
  {
    step: '1',
    title: 'Discover',
    text: 'Understand your current gap areas and growth priorities through guided orientation and baseline mapping.'
  },
  {
    step: '2',
    title: 'Build',
    text: 'Develop high-value capabilities through workshops, practical sessions, and collaborative learning formats.'
  },
  {
    step: '3',
    title: 'Apply',
    text: 'Apply skills in simulations, projects, and challenge-based experiences that mirror real-world expectations.'
  },
  {
    step: '4',
    title: 'Advance',
    text: 'Move forward with actionable feedback, stronger professional readiness, and clearer career direction.'
  }
];

function About() {
  return (
    <main className="about-page">
      <section className="hero about-hero">
        <div className="hero-copy">
          <span className="hero-badge">About TattvaLearn</span>
          <h1>From <span>Campus Potential</span> to Career Confidence.</h1>
          <p className="hero-description">
            TattvaLearn is a campus-to-corporate readiness platform that helps students and early professionals bridge
            the gap between academic learning and industry performance.
          </p>
          <div className="hero-actions">
            <NavLink to="/courses" className="primary-btn">Explore Programs</NavLink>
            <NavLink to="/events" className="secondary-btn">View Events</NavLink>
          </div>

          <div className="about-hero-stats">
            <div className="about-stat">
              <strong>6</strong>
              <span>Core Skill Modules</span>
            </div>
            <div className="about-stat">
              <strong>3</strong>
              <span>Program Formats</span>
            </div>
            <div className="about-stat">
              <strong>500+</strong>
              <span>Event-Scale Community</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why">
        <div className="about-why-left">
          <p className="about-label">The Gap We Solve</p>
          <h2>Degrees start the journey. Workplace readiness drives the outcome.</h2>
          <p>
            Many learners are academically capable but underprepared for real hiring and workplace environments.
            TattvaLearn addresses this with structured, practical, and mentor-supported learning pathways.
          </p>
          <div className="about-issue-list">
            <article>
              <div className="issue-icon">EX</div>
              <div>
                <h3>Low Practical Exposure</h3>
                <p>Theory is strong, but real communication, interview, and collaboration practice is often missing.</p>
              </div>
            </article>
            <article>
              <div className="issue-icon">WK</div>
              <div>
                <h3>Workplace Skill Gaps</h3>
                <p>Early professionals need stronger execution habits, adaptability, and decision confidence.</p>
              </div>
            </article>
            <article>
              <div className="issue-icon">AI</div>
              <div>
                <h3>AI-Era Readiness</h3>
                <p>Modern roles require practical AI fluency, not just awareness of tools and trends.</p>
              </div>
            </article>
          </div>
        </div>

        <aside className="about-why-right">
          <div className="highlight-card">
            <p className="highlight-kicker">TattvaLearn Focus</p>
            <h3>Learn. Apply. Evolve.</h3>
            <p>
              We combine skill development, real-world simulation, and career guidance so learners become confident,
              adaptable, and opportunity-ready.
            </p>
          </div>
          <div className="difference-card">
            <p>What makes us different</p>
            <ul>
              <li>Industry-informed curriculum design</li>
              <li>Hands-on modules with feedback loops</li>
              <li>Mentor and peer learning ecosystem</li>
              <li>Clear progression from learning to outcomes</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="about-modules">
        <div className="section-head">
          <p className="about-label">Core Modules</p>
          <h2>Six pillars that shape career-ready learners</h2>
        </div>
        <div className="module-grid">
          {coreModules.map((module, index) => (
            <article key={module.id} className="module-card" style={{ animationDelay: `${index * 90}ms` }}>
              <div className="module-top">
                <span className="module-id">{module.id}</span>
                <span className="module-logo">{module.icon}</span>
              </div>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-audience-split">
        <article className="audience-panel student">
          <p className="audience-chip">For Students</p>
          <h3>Placement and career readiness with practical depth</h3>
          <ul>
            <li>Interview and group discussion preparation</li>
            <li>Confidence building through live simulation</li>
            <li>Career clarity and profile positioning support</li>
          </ul>
        </article>

        <article className="audience-panel professional">
          <p className="audience-chip">For Professionals</p>
          <h3>Continuous upskilling for role growth and transitions</h3>
          <ul>
            <li>Domain-aligned upskilling with applied workflows</li>
            <li>Communication and leadership-in-action practice</li>
            <li>Future-focused capability building for evolving roles</li>
          </ul>
        </article>
      </section>

      <section className="about-journey">
        <div className="section-head centered">
          <p className="about-label">How It Works</p>
          <h2>A clear four-step learning journey</h2>
        </div>
        <div className="timeline">
          {journeySteps.map((item, index) => (
            <article key={item.step} className="timeline-step" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="timeline-dot">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Build your next chapter with TattvaLearn</h2>
        <p>
          Join a learning ecosystem designed for measurable growth, stronger outcomes, and long-term professional
          confidence.
        </p>
        <div className="cta-actions">
          <NavLink to="/courses" className="primary-btn">Start Learning</NavLink>
          <NavLink to="/events" className="secondary-btn">Join Community Events</NavLink>
        </div>
      </section>
    </main>
  );
}

export default About;
