import { useState } from 'react';
import './Login.css';

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <main className="login-page">
      <section className="hero">
        <div className="login-card">
          <img src="/Learn.jpeg" alt="Tattvalearn" className="login-logo" />
          <div className="toggle-group">
            <button 
              type="button" 
              className={`toggle-btn ${!isRegister ? 'active' : ''}`} 
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
            <button 
              type="button" 
              className={`toggle-btn ${isRegister ? 'active' : ''}`} 
              onClick={() => setIsRegister(true)}
            >
              Sign up
            </button>
          </div>
<div className="login-title">{isRegister ? 'Create your account' : 'Sign in to your account'}</div>
          <p className="hero-description">
            {isRegister 
              ? 'Start your Tattvalearn journey today with the right role.' 
              : 'Access your personalized learning dashboard.'
            }
          </p>
          <form className="login-form">
            {isRegister && (
              <div className="form-group">
                <input name="name" type="text" className="input-field" placeholder="Full Name" required />
              </div>
            )}
            <div className="form-group">
              <input name="email" type="email" className="input-field" placeholder="Email address" required />
            </div>
            <div className="form-group">
              <input name="password" type="password" className="input-field" placeholder={isRegister ? 'Create password' : 'Password'} required />
            </div>
            {isRegister && (
              <div className="form-group">
                <input name="confirmPassword" type="password" className="input-field" placeholder="Confirm password" required />
              </div>
            )}
            {isRegister && (
              <div className="role-group">
                <legend className="role-label">Choose your role</legend>
                <label className="role-option">
                  <input type="radio" name="role" value="student" required />
                  <span className="role-icon">🎓 Student</span>
                </label>
                <label className="role-option">
                  <input type="radio" name="role" value="professional" required />
                  <span className="role-icon">📘 Professional</span>
                </label>
                <label className="role-option">
                  <input type="radio" name="role" value="academician" required />
                  <span className="role-icon">🌐 Academician</span>
                </label>
              </div>
            )}
            {!isRegister && (
              <a href="#" className="forgot-link">Forgot Password?</a>
            )}
            <button type="submit" className="primary-btn full-width-btn">
              {isRegister ? 'Create Account' : 'Sign In'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;

