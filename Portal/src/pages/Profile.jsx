import { useMemo, useState } from 'react';
import './Profile.css';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  highestEducation: '',
  fieldOfStudy: '',
  institution: '',
  graduationYear: '',
  currentRole: '',
  yearsExperience: '',
  company: '',
  linkedIn: '',
  portfolio: '',
  careerGoal: '',
  about: ''
};

const completionFields = [
  'firstName',
  'lastName',
  'email',
  'city',
  'country',
  'highestEducation',
  'currentRole',
  'yearsExperience',
  'careerGoal'
];

function Profile() {
  const [formData, setFormData] = useState(initialForm);

  const completion = useMemo(() => {
    const filled = completionFields.filter((field) => formData[field].trim().length > 0).length;
    return Math.round((filled / completionFields.length) * 100);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="profile-page profile-static-page">
      <div className="profile-orb profile-orb-one" />
      <div className="profile-orb profile-orb-two" />
      <section className="profile-shell">
        <aside className="profile-intro-card">
          <p className="profile-badge">Learner Passport</p>
          <h1>Build your story, one section at a time.</h1>
          <p>
            This profile helps mentors understand your background, strengths, and aspirations.
            It is currently static and designed to preview the full experience.
          </p>
          <div className="profile-progress">
            <div className="profile-progress-top">
              <span>Completion</span>
              <strong>{completion}%</strong>
            </div>
            <div className="profile-progress-track" aria-hidden="true">
              <span style={{ width: `${completion}%` }} />
            </div>
          </div>
          <ul className="profile-highlight-list">
            <li>Academic background snapshot</li>
            <li>Professional journey overview</li>
            <li>Location and networking details</li>
            <li>Goals for focused mentorship</li>
          </ul>
        </aside>

        <section className="profile-form-card" aria-label="Profile form preview">
          <form className="profile-form" onSubmit={(event) => event.preventDefault()}>
            <div className="section-head">
              <h2>Personal details</h2>
            </div>
            <div className="profile-grid two-col">
              <label>
                First name
                <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Aarav" />
              </label>
              <label>
                Last name
                <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Sharma" />
              </label>
              <label>
                Email
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
              </label>
              <label>
                Phone
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9XXXXXXXXX" />
              </label>
              <label>
                City
                <input name="city" value={formData.city} onChange={handleChange} placeholder="Bengaluru" />
              </label>
              <label>
                Country
                <input name="country" value={formData.country} onChange={handleChange} placeholder="India" />
              </label>
            </div>

            <div className="section-head">
              <h2>Educational background</h2>
            </div>
            <div className="profile-grid two-col">
              <label>
                Highest qualification
                <input
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleChange}
                  placeholder="B.Tech / MBA / M.Sc"
                />
              </label>
              <label>
                Field of study
                <input name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} placeholder="Computer Science" />
              </label>
              <label>
                Institution
                <input name="institution" value={formData.institution} onChange={handleChange} placeholder="IIT Delhi" />
              </label>
              <label>
                Graduation year
                <input name="graduationYear" value={formData.graduationYear} onChange={handleChange} placeholder="2024" />
              </label>
            </div>

            <div className="section-head">
              <h2>Professional background</h2>
            </div>
            <div className="profile-grid two-col">
              <label>
                Current role
                <input name="currentRole" value={formData.currentRole} onChange={handleChange} placeholder="Product Designer" />
              </label>
              <label>
                Years of experience
                <input name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} placeholder="3" />
              </label>
              <label>
                Company / Organization
                <input name="company" value={formData.company} onChange={handleChange} placeholder="Acme Labs" />
              </label>
              <label>
                LinkedIn
                <input name="linkedIn" value={formData.linkedIn} onChange={handleChange} placeholder="linkedin.com/in/username" />
              </label>
              <label className="full-row">
                Portfolio / Resume link
                <input name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="yourportfolio.com" />
              </label>
            </div>

            <div className="section-head">
              <h2>Aspirations</h2>
            </div>
            <div className="profile-grid one-col">
              <label>
                Career goal for the next 12 months
                <textarea
                  name="careerGoal"
                  value={formData.careerGoal}
                  onChange={handleChange}
                  rows="3"
                  placeholder="I want to transition into a senior product role and lead cross-functional teams."
                />
              </label>
              <label>
                About you
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share interests, learning style, and the kind of mentorship you're seeking."
                />
              </label>
            </div>

            <div className="profile-actions">
              <button type="button" className="outline-action">Save Draft</button>
              <button type="submit" className="primary-action">Submit Profile</button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Profile;
