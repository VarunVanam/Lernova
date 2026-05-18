import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/api';
import './Login.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'student'
};

const EyeIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" className="eye-icon" aria-hidden="true">
    {open ? (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ) : (
      <>
        <path d="M3 4l18 16" />
        <path d="M10.6 6.3A11 11 0 0 1 12 6c6.5 0 10 6 10 6a18.3 18.3 0 0 1-3.2 3.9" />
        <path d="M14.8 17.2A10.6 10.6 0 0 1 12 18c-6.5 0-10-6-10-6a18.6 18.6 0 0 1 4.1-4.5" />
        <path d="M9.9 9.9a3.2 3.2 0 0 0 4.2 4.2" />
      </>
    )}
  </svg>
);

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onToggle = (registerMode) => {
    setIsRegister(registerMode);
    setError('');
    setFormData(initialState);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim().toLowerCase();

    if (isRegister && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!trimmedEmail || !formData.password) {
      setError('Please enter email and password');
      return;
    }

    if (isRegister && !trimmedName) {
      setError('Please enter your full name');
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = isRegister
        ? {
            name: trimmedName,
            email: trimmedEmail,
            password: formData.password,
            role: formData.role
          }
        : { email: trimmedEmail, password: formData.password };

      const { data } = isRegister ? await register(payload) : await login(payload);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/profile');
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Cannot connect to server. Please ensure backend is running on port 5001.');
      } else {
        setError('Authentication failed');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="login-page">
      <section className="hero">
        <div className="login-card">
          <img src="/Learn.jpeg" alt="TattvaLearn" className="login-logo" />
          <div className="toggle-group">
            <button
              type="button"
              className={`toggle-btn ${!isRegister ? 'active' : ''}`}
              onClick={() => onToggle(false)}
            >
              Login
            </button>
            <button
              type="button"
              className={`toggle-btn ${isRegister ? 'active' : ''}`}
              onClick={() => onToggle(true)}
            >
              Sign up
            </button>
          </div>
          <div className="login-title">{isRegister ? 'Create your account' : 'Sign in to your account'}</div>
          <p className="hero-description">
            {isRegister
              ? 'Start your TattvaLearn journey today with the right role.'
              : 'Access your personalized learning dashboard.'}
          </p>
          <form className="login-form" onSubmit={onSubmit}>
            {isRegister && (
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="input-field"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={onChange}
                  required
                />
              </div>
            )}

            {isRegister && (
              <div className="form-group">
                <div className="role-label">Role</div>
                <div className="role-options">
                  {[
                    { label: 'Student', value: 'student' },
                    { label: 'Professional', value: 'professional' },
                    { label: 'Academician', value: 'academician' }
                  ].map((r) => (
                    <label key={r.value} className="role-option">
                      <input
                        type="radio"
                        name="role"
                        value={r.value}
                        checked={formData.role === r.value}
                        onChange={onChange}
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="input-field"
                placeholder="Email address"
                autoComplete="email"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <div className="password-field">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="input-field"
                  placeholder={isRegister ? 'Create password' : 'Password'}
                  autoComplete={isRegister ? 'new-password' : 'current-password'}
                  value={formData.password}
                  onChange={onChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>
            {isRegister && (
              <div className="form-group">
                <div className="password-field">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="input-field"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={onChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    <EyeIcon open={showConfirmPassword} />
                  </button>
                </div>
              </div>
            )}
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="primary-btn full-width-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
