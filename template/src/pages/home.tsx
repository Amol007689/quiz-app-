import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './home.css'; // Import the CSS file

// --- SVG Icon Components ---
const BookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

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

const Wallet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1V3"></path>
    <path d="M1 16h15"></path>
    <path d="M17 20v-4h4"></path>
  </svg>
);

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
// --- End SVG Icon Components ---

// Main Home Component
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Exams', href: '#' },
    { name: 'Contests', href: '/contests' },
    { name: 'Pricing', href: '#' },
    { name: 'Wallet', href: '#' },
  ];

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header-sticky">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <a href="#" className="logo-link">
                <Trophy className="logo-icon" />
                <span className="logo-text">ExamPlatform</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="nav-desktop">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Auth Buttons (Desktop) */}
            <div className="auth-buttons-desktop">
              <Link to="/login" className="btn btn-secondary">
                Log In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button-container">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-button"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="mobile-menu-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="mobile-nav-link">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mobile-auth-buttons">
              <div className="mobile-auth-wrapper">
                <Link to="/signup" className="btn btn-primary btn-full">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-secondary btn-full btn-mobile-login">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Your Gateway to Success</h1>
              <p className="hero-subtitle">
                Join thousands of students preparing for exams, competing in weekly contests, and
                managing their success all in one platform.
              </p>
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary btn-lg">
                  Get Started
                </a>
                <a href="#" className="btn btn-secondary btn-lg btn-outline">
                  View Contests
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">All-in-One Learning Platform</h2>
              <p className="section-subtitle">
                Everything you need to prepare, compete, and win.
              </p>
            </div>
            <div className="features-grid">
              {/* Feature 1: Online Exams */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <BookOpen className="feature-icon" />
                </div>
                <h3 className="feature-title">Online Examinations</h3>
                <p className="feature-description">
                  Access a vast question bank and take scheduled exams based on your membership
                  plan. Track your progress and view detailed results.
                </p>
              </div>

              {/* Feature 2: Weekly Contests */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Trophy className="feature-icon" />
                </div>
                <h3 className="feature-title">Paid Weekly Contests</h3>
                <p className="feature-description">
                  Participate in exciting weekly contests by paying an entry fee. Compete with
                  others and win prize money credited directly to your wallet.
                </p>
              </div>

              {/* Feature 3: Wallet & Points */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Wallet className="feature-icon" />
                </div>
                <h3 className="feature-title">Wallet & Point System</h3>
                <p className="feature-description">
                  Easily deposit funds, pay for contests, and receive rewards. Our 'Point2Mark'
                  system converts your performance into real wallet cash.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Choose Your Plan</h2>
              <p className="section-subtitle">
                Simple, transparent pricing to unlock all features.
              </p>
            </div>
            <div className="pricing-grid">
              {/* Plan 1: 1 Month */}
              <div className="pricing-card">
                <h3 className="pricing-plan-title">1 Month Plan</h3>
                <p className="pricing-price">
                  <span className="price-amount">$10</span>
                  <span className="price-period">/mo</span>
                </p>
                <p className="pricing-description">
                  Perfect for a quick review and short-term goals.
                </p>
                <ul role="list" className="pricing-features-list">
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Access to all exams</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Contest participation</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Wallet access</span>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-full btn-price">
                  Choose Plan
                </a>
              </div>

              {/* Plan 2: 3 Months (Recommended) */}
              <div className="pricing-card pricing-card-popular">
                <div className="pricing-card-header">
                  <h3 className="pricing-plan-title">3 Months Plan</h3>
                  <span className="popular-badge">Most Popular</span>
                </div>
                <p className="pricing-price">
                  <span className="price-amount">$8</span>
                  <span className="price-period">/mo</span>
                </p>
                <p className="pricing-description">
                  Best value for consistent preparation and results.
                </p>
                <ul role="list" className="pricing-features-list">
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Access to all exams</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Contest participation</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Wallet access</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-full btn-price">
                  Choose Plan
                </a>
              </div>

              {/* Plan 3: 6 Months */}
              <div className="pricing-card">
                <h3 className="pricing-plan-title">6 Months Plan</h3>
                <p className="pricing-price">
                  <span className="price-amount">$6</span>
                  <span className="price-period">/mo</span>
                </p>
                <p className="pricing-description">
                  Commit to your success and save the most.
                </p>
                <ul role="list" className="pricing-features-list">
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Access to all exams</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Contest participation</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Wallet access</span>
                  </li>
                  <li className="pricing-feature">
                    <CheckCircle className="pricing-feature-icon" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-full btn-price">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo-container">
              <Trophy className="logo-icon" />
              <span className="logo-text">ExamPlatform</span>
            </div>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} ExamPlatform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}