import { useState } from 'react';
import API from '../services/api';

const NewsletterForm = () => {
  const [form, setForm] = useState({ name: '', email: '', path: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (message) setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/users/newsletter', form);
      setMessage('Thank you for joining the Tattvalearn waitlist!');
      setForm({ name: '', email: '', path: '' });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Subscription failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-header">
        <div className="newsletter-badge">Learn. Evolve. Rise.</div>
        <h3 className="newsletter-title">Join the exclusive waitlist.</h3>
        <p>Secure your place in the movement before doors open.</p>
      </div>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={form.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <select
          name="path"
          value={form.path}
          onChange={handleChange}
          required
          className="input-field select-field"
        >
          <option value="" disabled>
            Select your path
          </option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
          <option value="Academician">Academician</option>
        </select>
        <button type="submit" disabled={loading} className="primary-btn full-width-btn">
          {loading ? 'Sending...' : 'Ignite Your Mind'}
        </button>
      </form>
      {message && <p className={`message ${message.includes('Thank') ? 'success' : 'error'}`}>{message}</p>}
    </div>
  );
};

export default NewsletterForm;

