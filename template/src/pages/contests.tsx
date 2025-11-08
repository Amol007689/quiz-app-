import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contests.css';

// SVG Icon Components
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

const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Users = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const Award = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

const Target = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const Zap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Filter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const Search = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

// Types
interface Contest {
  id: number;
  title: string;
  type: 'weekly' | 'biweekly' | 'special';
  status: 'upcoming' | 'live' | 'completed';
  startDate: string;
  startTime: string;
  duration: string;
  participants: number;
  entryFee: number;
  prizePool: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
  questionsCount: number;
  description: string;
  imageGradient: string;
}

interface User {
  name: string;
  email: string;
  walletBalance: number;
}

export default function Contests() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'virtual'>('upcoming');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'weekly' | 'biweekly' | 'special'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [contests, setContests] = useState<Contest[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace with actual API calls
        // const response = await fetch('/api/contests');
        // const data = await response.json();
        // setContests(data);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching contests:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Exams', href: '#' },
    { name: 'Contests', href: '/contests' },
    { name: 'Wallet', href: '#' },
  ];

  const getContestImage = (gradient: string) => {
    return `linear-gradient(135deg, ${gradient})`;
  };

  const filteredContests = contests
    .filter(contest => selectedFilter === 'all' || contest.type === selectedFilter)
    .filter(contest => contest.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="contests-container">
      {/* Header */}
      <header className="header-sticky">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <Trophy className="logo-icon" />
                <span className="logo-text">ExamPlatform</span>
              </Link>
            </div>

            <nav className="nav-desktop">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link ${link.name === 'Contests' ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="user-menu-desktop">
              <div className="user-profile">
                <div className="user-avatar">
                  {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
                </div>
                <span className="user-name">{user?.name || 'User'}</span>
              </div>
            </div>

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

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="mobile-nav-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="contests-main">
        <div className="container">
          {/* Hero Section */}
          <div className="contests-hero">
            <div className="hero-badge">
              <Zap style={{ height: '1rem', width: '1rem' }} />
              <span>Live Competitions</span>
            </div>
            <h1 className="contests-hero-title">Compete & Win Prizes</h1>
            <p className="contests-hero-subtitle">
              Join weekly and biweekly contests, compete with top coders, and win exciting cash prizes
            </p>
          </div>

          {/* Stats Overview */}
          <div className="contests-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper stat-primary">
                <Trophy className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value">₹{user?.walletBalance?.toFixed(2) || '0.00'}</div>
                <div className="stat-label">Wallet Balance</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper stat-success">
                <Award className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value">0</div>
                <div className="stat-label">Contests Won</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper stat-info">
                <Target className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value">0</div>
                <div className="stat-label">Total Participated</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper stat-warning">
                <Star className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value">N/A</div>
                <div className="stat-label">Best Rank</div>
              </div>
            </div>
          </div>

          {/* Tabs and Filters */}
          <div className="contests-controls">
            <div className="contests-tabs">
              <button
                className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                <Calendar className="tab-icon" />
                Upcoming Contests
              </button>
              <button
                className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
                onClick={() => setActiveTab('past')}
              >
                <Award className="tab-icon" />
                Past Contests
              </button>
              <button
                className={`tab-button ${activeTab === 'virtual' ? 'active' : ''}`}
                onClick={() => setActiveTab('virtual')}
              >
                <Target className="tab-icon" />
                Virtual Contests
              </button>
            </div>

            <div className="contests-filters">
              <div className="search-box">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search contests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('all')}
                >
                  All
                </button>
                <button
                  className={`filter-btn ${selectedFilter === 'weekly' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('weekly')}
                >
                  Weekly
                </button>
                <button
                  className={`filter-btn ${selectedFilter === 'biweekly' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('biweekly')}
                >
                  Biweekly
                </button>
                <button
                  className={`filter-btn ${selectedFilter === 'special' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('special')}
                >
                  Special
                </button>
              </div>
            </div>
          </div>

          {/* Contests Grid */}
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading contests...</p>
            </div>
          ) : filteredContests.length > 0 ? (
            <div className="contests-grid">
              {filteredContests.map((contest) => (
                <div key={contest.id} className="contest-card">
                  <div 
                    className="contest-card-header"
                    style={{ background: getContestImage(contest.imageGradient) }}
                  >
                    <div className="contest-type-badge">
                      {contest.type === 'weekly' && '📅 Weekly'}
                      {contest.type === 'biweekly' && '📆 Biweekly'}
                      {contest.type === 'special' && '⭐ Special'}
                    </div>
                    <div className="contest-status-badge">
                      {contest.status === 'live' && '🔴 Live'}
                      {contest.status === 'upcoming' && '⏰ Upcoming'}
                      {contest.status === 'completed' && '✅ Completed'}
                    </div>
                  </div>

                  <div className="contest-card-body">
                    <h3 className="contest-title">{contest.title}</h3>
                    <p className="contest-description">{contest.description}</p>

                    <div className="contest-info-grid">
                      <div className="contest-info-item">
                        <Calendar className="info-icon" />
                        <span>{contest.startDate}</span>
                      </div>
                      <div className="contest-info-item">
                        <Clock className="info-icon" />
                        <span>{contest.startTime}</span>
                      </div>
                      <div className="contest-info-item">
                        <Users className="info-icon" />
                        <span>{contest.participants.toLocaleString()} participants</span>
                      </div>
                      <div className="contest-info-item">
                        <Target className="info-icon" />
                        <span>{contest.questionsCount} questions</span>
                      </div>
                    </div>

                    <div className="contest-card-footer">
                      <div className="contest-prizes">
                        <div className="prize-item">
                          <span className="prize-label">Entry Fee</span>
                          <span className="prize-value entry-fee">₹{contest.entryFee}</span>
                        </div>
                        <div className="prize-divider"></div>
                        <div className="prize-item">
                          <span className="prize-label">Prize Pool</span>
                          <span className="prize-value prize-pool">₹{contest.prizePool.toLocaleString()}</span>
                        </div>
                      </div>

                      <button className="btn-join-contest">
                        {contest.status === 'live' && 'Join Now'}
                        {contest.status === 'upcoming' && 'Register'}
                        {contest.status === 'completed' && 'View Results'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Trophy className="empty-icon" />
              <h3 className="empty-title">No contests found</h3>
              <p className="empty-description">
                {searchQuery
                  ? 'Try adjusting your search or filters'
                  : 'New contests will be announced soon'}
              </p>
            </div>
          )}
        </div>
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