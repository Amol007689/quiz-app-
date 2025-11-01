import React, { useState } from 'react';
import './login.css'; // Import the CSS file

// --- SVG Icon Component ---
// Using the same Trophy icon for brand consistency
const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-1 1.2-.53.22-1.05.3-1.6.3H6c-1.2 0-2.2-.8-2.5-2-.3-.9-.1-1.8.5-2.5.6-.7 1.3-1 2.2-1.1.8-.1 1.5-.1 2.3.1V14.66z"></path>
    <path d="M14 14.66V17c0 .55.47.98 1 1.2.53.22 1.05.3 1.6.3h1.4c1.2 0 2.2-.8 2.5-2 .3-.9.1-1.8-.5-2.5-.6-.7-1.3-1-2.2-1.1-.8-.1-1.5-.1-2.3.1V14.66z"></path>
    <path d="M9 4h6"></path>
    <path d="M12 4v8"></path>
    <path d="M12 12L10 10.5"></path>
    <path d="M12 12L14 10.5"></path>
  </svg>
);
// --- End SVG Icon Component ---

// Main Login Component
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        {/* Logo and Title */}
        <div className="login-logo-container">
          <Trophy className="logo-icon" />
          <span className="logo-text">ExamPlatform</span>
        </div>
        <h2 className="login-title">Sign in to your account</h2>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="login-label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <a href="#" className="forgot-password-link">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn btn-primary btn-full login-button">
              Sign in
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="signup-link-container">
          Not a member?{' '}
          <a href="#" className="signup-link">
            Start your free trial
          </a>
        </p>
      </div>
    </div>
  );
}
