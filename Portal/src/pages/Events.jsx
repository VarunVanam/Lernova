import './Events.css';

const upcomingEvents = [
  {
    title: 'TattvaLearn Future of Work Summit 2026',
    date: 'June 20-21, 2026',
    location: 'Bangalore International Exhibition Centre',
    format: 'In-Person · 2-Day Conference + Career Expo',
    audience: 'Students, Placement Cells, L&D Teams',
    inspiredBy: 'Inspired by keynote + breakout structures used by global tech conferences',
    highlights: [
      'Opening keynote on AI-native careers and hiring trends',
      'Parallel breakout tracks: Product, Cloud, Cybersecurity, Data',
      'Career Expo with recruiter booths and portfolio reviews',
      'Evening fireside chat with founders and CHRO leaders'
    ]
  },
  {
    title: 'Build for Bharat HackSprint',
    date: 'July 12, 2026',
    location: 'Hybrid (Pune Hub + Online Participation)',
    format: 'Hybrid · 10-Hour Hackathon',
    audience: 'Engineering Students and Early Professionals',
    inspiredBy: 'Inspired by challenge-based hackathon formats from global developer events',
    highlights: [
      'Problem statements across FinTech, AgriTech, and Accessibility',
      'Mentor office-hours every 90 minutes',
      'Demo Day judging rubric: impact, usability, technical depth',
      'Winning teams get internship interview fast-track'
    ]
  },
  {
    title: 'Campus to Corporate Communication Lab',
    date: 'August 4-25, 2026 (Every Tuesday)',
    location: 'Online Live Cohort',
    format: 'Virtual · Recurring 4-Session Bootcamp',
    audience: 'Final-Year Students and MBA Cohorts',
    inspiredBy: 'Inspired by recurring cohort event structures commonly listed on Eventbrite',
    highlights: [
      'Session 1: Professional storytelling and first impressions',
      'Session 2: Group discussion strategy with live role-play',
      'Session 3: Interview simulation with structured feedback',
      'Session 4: Negotiation, follow-up mails, and offer readiness'
    ]
  },
  {
    title: 'Women in AI Leadership Forum',
    date: 'September 18, 2026',
    location: 'Hyderabad · HITEX Convention Centre',
    format: 'In-Person · Forum + Mentorship Circles',
    audience: 'Women Students, Mentors, and Hiring Leaders',
    inspiredBy: 'Inspired by thought-leadership conference formats with networking circles',
    highlights: [
      'Lightning talks from AI product and research leaders',
      'Mentorship circles capped at 12 participants each',
      'Resume clinic and personal branding desk',
      'Scholarship announcements for advanced AI learning paths'
    ]
  }
];

const dayWiseAgenda = [
  {
    day: 'Day 1 · June 20',
    theme: 'Inspiration + Direction',
    sessions: [
      '09:00 Keynote: The Employability Reset',
      '11:00 Track Sessions (Cloud, Product, Cybersecurity)',
      '14:00 Panel: What Recruiters Actually Evaluate',
      '16:30 Mentor Lounges and Career Mapping'
    ]
  },
  {
    day: 'Day 2 · June 21',
    theme: 'Build + Demonstrate',
    sessions: [
      '09:30 HackSprint kickoff and team formation',
      '11:00 Solution sprints with mentor checkpoints',
      '16:00 Live demos and jury feedback',
      '18:30 Awards, internships, and closing address'
    ]
  }
];

function Events() {
  const featuredEvent = upcomingEvents[0];

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="events-kicker-row">
          <p className="events-kicker">Upcoming Events</p>
          <span className="events-season-badge">2026 Season</span>
        </div>
        <h1>Where Talent Meets Opportunity</h1>
        <p>
          Conference stages, challenge sprints, and mentoring circles that move students from
          classroom confidence to career confidence.
        </p>
        <div className="events-hero-stats">
          <div><strong>12+</strong><span>Events Planned</span></div>
          <div><strong>4</strong><span>Formats</span></div>
          <div><strong>2500+</strong><span>Expected Attendees</span></div>
        </div>
      </section>

      <section className="events-featured">
        <div className="events-featured-copy">
          <p className="events-featured-label">Flagship Spotlight</p>
          <h2>{featuredEvent.title}</h2>
          <p>{featuredEvent.inspiredBy}</p>
          <div className="events-featured-meta">
            <span>📅 {featuredEvent.date}</span>
            <span>📍 {featuredEvent.location}</span>
            <span>👥 {featuredEvent.audience}</span>
          </div>
        </div>
        <div className="events-featured-track">
          <h3>Core Tracks</h3>
          <ul>
            <li>AI for Workforce</li>
            <li>Cybersecurity Readiness</li>
            <li>Cloud + DevOps</li>
            <li>Product and Design Thinking</li>
          </ul>
        </div>
      </section>

      <section className="events-grid-section">
        <h2 className="events-section-title">Full Event Lineup</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-card-header">
                <h2>{event.title}</h2>
                <span>{event.format}</span>
              </div>
              <div className="event-meta-row">📅 {event.date}</div>
              <div className="event-meta-row">📍 {event.location}</div>
              <div className="event-meta-row">🎯 {event.audience}</div>
              <p className="event-inspired">{event.inspiredBy}</p>
              <ul>
                {event.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="events-agenda">
        <h2>Flagship Summit Agenda Snapshot</h2>
        <div className="agenda-grid">
          {dayWiseAgenda.map((agenda) => (
            <article key={agenda.day} className="agenda-card">
              <h3>{agenda.day}</h3>
              <p>{agenda.theme}</p>
              <ul>
                {agenda.sessions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="events-cta">
        <h2>Want your campus or company to host one?</h2>
        <p>Email reachus@tattvalearn.com to co-create a custom event format.</p>
      </section>
    </main>
  );
}

export default Events;
