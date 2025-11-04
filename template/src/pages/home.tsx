"use client";

import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ added import
import "./home.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Exams", href: "#" },
  { name: "Contests", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Wallet", href: "/wallet" }, // ✅ updated Wallet link
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">Quizzy</div>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="nav-button">
            Log in
          </Link>
          <Link to="/signup" className="nav-button nav-button-primary">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="mobile-nav-link">
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="mobile-nav-button">
            Log in
          </Link>
          <Link to="/signup" className="mobile-nav-button mobile-nav-button-primary">
            Sign up
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Master Quizzes. Boost Your Knowledge.</h1>
          <p className="hero-subtitle">
            Join Quizzy today to challenge your mind and track your progress.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="hero-btn hero-btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="hero-btn hero-btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
