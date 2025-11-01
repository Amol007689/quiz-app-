import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file
// import { Link } from 'react-router-dom'; // Uncomment this if you are using React Router

// --- SVG Icon Component ---
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

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', { fullName, email, password });
    if (password !== confirmPassword) {
      console.error("Passwords don't match!");
      // You would typically show an error to the user here
      return;
    }
    // ... proceed with signup API call
  };

  // Fallback for Link if react-router-dom isn't set up
  const LoginLink = ({ children }: { children: React.ReactNode }) => (
    <a href="/login" className="switch-link">
      {children}
    </a>
  );
  // Uncomment the line below to use React Router's Link
  // const LoginLink = ({ children }: { children: React.ReactNode }) => <Link to="/login" className="switch-link">{children}</Link>;


  return (
    <div className="signup-page-container">
      <div className="signup-card">
        <div className="signup-title-container">
          <a href="/" className="logo-link">
            <Trophy className="logo-icon" />
            <span className="logo-text">ExamPlatform</span>
          </a>
          <h2 className="signup-title">Create your account</h2>
          <p className="signup-subtitle">
            Already have an account?{' '}
            <LoginLink>
              Log in
            </LoginLink>
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary btn-full">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}