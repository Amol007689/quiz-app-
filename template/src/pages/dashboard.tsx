import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

// --- SVG Icon Components ---
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

const CreditCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
    <line x1="2" x2="22" y1="10" y2="10"></line>
  </svg>
);

const Wallet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1V3"></path>
    <path d="M1 16h15"></path>
    <path d="M17 20v-4h4"></path>
  </svg>
);

const BookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
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

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const FileText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" x2="8" y1="13" y2="13"></line>
    <line x1="16" x2="8" y1="17" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const AlertCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" x2="12" y1="8" y2="12"></line>
    <line x1="12" x2="12.01" y1="16" y2="16"></line>
  </svg>
);

const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

// --- End SVG Icon Components ---

// Types
interface User {
  name: string;
  email: string;
  membershipStatus: string;
  membershipExpiry: string;
  walletBalance: number;
  pointsEarned: number;
}

interface Exam {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'live' | 'completed';
  questionsCount: number;
}

interface Contest {
  id: number;
  title: string;
  date: string;
  time: string;
  participants: number;
  entryFee: number;
  prizePool: number;
  status: 'upcoming' | 'live' | 'completed';
}

interface Activity {
  id: number;
  type: 'success' | 'info' | 'warning';
  text: string;
  time: string;
}

// Main Dashboard Component
export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // State for real data from API
  const [user, setUser] = useState<User | null>(null);
  const [upcomingExams, setUpcomingExams] = useState<Exam[]>([]);
  const [upcomingContests, setUpcomingContests] = useState<Contest[]>([]);
  const [recentActivities, setRecentActivities] = useState<Activity[]>([]);

  // Fetch data from API on component mount
  React.useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        
        // TODO: Replace these with your actual API endpoints
        // Example:
        // const userResponse = await fetch('/api/user/profile');
        // const userData = await userResponse.json();
        // setUser(userData);
        
        // const examsResponse = await fetch('/api/exams/upcoming');
        // const examsData = await examsResponse.json();
        // setUpcomingExams(examsData);
        
        // const contestsResponse = await fetch('/api/contests/upcoming');
        // const contestsData = await contestsResponse.json();
        // setUpcomingContests(contestsData);
        
        // const activitiesResponse = await fetch('/api/activities/recent');
        // const activitiesData = await activitiesResponse.json();
        // setRecentActivities(activitiesData);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Exams', href: '#' },
    { name: 'Contests', href: '#' },
    { name: 'Wallet', href: '#' },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header-sticky">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <Trophy className="logo-icon" />
                <span className="logo-text">ExamPlatform</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="nav-desktop">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link ${link.name === 'Dashboard' ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* User Menu (Desktop) */}
            <div className="user-menu-desktop">
              <div className="user-profile">
                <div className="user-avatar">
                  {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
                </div>
                <span className="user-name">{user?.name || 'User'}</span>
              </div>
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
                <Link key={link.name} to={link.href} className="mobile-nav-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          {/* Loading State */}
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading your dashboard...</p>
            </div>
          ) : (
            <>
              {/* Welcome Section */}
              <div className="welcome-section">
                <h1 className="welcome-title">
                  Welcome back, {user?.name.split(' ')[0] || 'Student'}! 👋
                </h1>
                <p className="welcome-subtitle">Here's what's happening with your learning journey today.</p>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                {/* Membership Status */}
                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-label">Membership</span>
                    <div className="stat-icon-wrapper primary">
                      <CreditCard className="stat-icon" />
                    </div>
                  </div>
                  <h3 className="stat-value">{user?.membershipStatus || 'N/A'}</h3>
                  <p className="stat-description">Valid until {user?.membershipExpiry || 'N/A'}</p>
                  {user?.membershipStatus && (
                    <span className="stat-badge premium">
                      <Star style={{ height: '0.75rem', width: '0.75rem', fill: 'currentColor' }} />
                      Active Plan
                    </span>
                  )}
                </div>

                {/* Wallet Balance */}
                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-label">Wallet Balance</span>
                    <div className="stat-icon-wrapper success">
                      <Wallet className="stat-icon" />
                    </div>
                  </div>
                  <h3 className="stat-value">₹{user?.walletBalance?.toFixed(2) || '0.00'}</h3>
                  <p className="stat-description">Available for contests</p>
                </div>

                {/* Upcoming Exams Count */}
                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-label">Upcoming Exams</span>
                    <div className="stat-icon-wrapper warning">
                      <BookOpen className="stat-icon" />
                    </div>
                  </div>
                  <h3 className="stat-value">{upcomingExams.length}</h3>
                  <p className="stat-description">Scheduled this week</p>
                </div>

                {/* Points Earned */}
                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-label">Points Earned</span>
                    <div className="stat-icon-wrapper info">
                      <Award className="stat-icon" />
                    </div>
                  </div>
                  <h3 className="stat-value">{user?.pointsEarned || 0}</h3>
                  <p className="stat-description">Total achievement points</p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="content-grid">
                {/* Left Column - Exams and Contests */}
                <div>
                  {/* Upcoming Exams Section */}
                  <div className="section-card" style={{ marginBottom: '1.5rem' }}>
                    <div className="section-header">
                      <h2 className="section-title">
                        <Calendar className="title-icon" />
                        Upcoming Exams
                      </h2>
                      <a href="#" className="view-all-link">View All</a>
                    </div>
                    <div className="section-content">
                      {upcomingExams.length > 0 ? (
                        <div className="item-list">
                          {upcomingExams.map((exam) => (
                            <div key={exam.id} className="item-card">
                              <div className="item-header">
                                <h3 className="item-title">{exam.title}</h3>
                                <span className="item-badge upcoming">Upcoming</span>
                              </div>
                              <div className="item-details">
                                <div className="item-detail">
                                  <Calendar className="item-detail-icon" />
                                  <span>{exam.date}</span>
                                </div>
                                <div className="item-detail">
                                  <Clock className="item-detail-icon" />
                                  <span>{exam.time}</span>
                                </div>
                                <div className="item-detail">
                                  <FileText className="item-detail-icon" />
                                  <span>{exam.questionsCount} questions</span>
                                </div>
                              </div>
                              <div className="item-footer">
                                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                                  Duration: {exam.duration}
                                </span>
                                <button className="btn-item btn-primary">Start Exam</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="empty-state">
                          <BookOpen className="empty-icon" />
                          <h3 className="empty-title">No upcoming exams</h3>
                          <p className="empty-description">Check back later for new exam schedules</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upcoming Contests Section */}
                  <div className="section-card">
                    <div className="section-header">
                      <h2 className="section-title">
                        <Trophy className="title-icon" />
                        Upcoming Contests
                      </h2>
                      <a href="#" className="view-all-link">View All</a>
                    </div>
                    <div className="section-content">
                      {upcomingContests.length > 0 ? (
                        <div className="item-list">
                          {upcomingContests.map((contest) => (
                            <div key={contest.id} className="item-card">
                              <div className="item-header">
                                <h3 className="item-title">{contest.title}</h3>
                                <span className="item-badge upcoming">Upcoming</span>
                              </div>
                              <div className="item-details">
                                <div className="item-detail">
                                  <Calendar className="item-detail-icon" />
                                  <span>{contest.date}</span>
                                </div>
                                <div className="item-detail">
                                  <Clock className="item-detail-icon" />
                                  <span>{contest.time}</span>
                                </div>
                                <div className="item-detail">
                                  <Users className="item-detail-icon" />
                                  <span>{contest.participants} participants</span>
                                </div>
                              </div>
                              <div className="item-footer">
                                <div>
                                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Prize Pool</div>
                                  <div className="item-prize">₹{contest.prizePool}</div>
                                </div>
                                <button className="btn-item btn-primary">
                                  Join (₹{contest.entryFee})
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="empty-state">
                          <Trophy className="empty-icon" />
                          <h3 className="empty-title">No upcoming contests</h3>
                          <p className="empty-description">New contests will be announced soon</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Quick Actions and Activity */}
                <div>
                  {/* Quick Actions */}
                  <div className="section-card" style={{ marginBottom: '1.5rem' }}>
                    <div className="section-header">
                      <h2 className="section-title">Quick Actions</h2>
                    </div>
                    <div className="section-content">
                      <div className="quick-actions">
                        <a href="#" className="action-button">
                          <div className="action-icon-wrapper">
                            <Wallet className="action-icon" />
                          </div>
                          <div className="action-content">
                            <h4 className="action-title">Add Funds</h4>
                            <p className="action-description">Deposit money to wallet</p>
                          </div>
                          <ChevronRight className="action-arrow" />
                        </a>

                        <a href="#" className="action-button">
                          <div className="action-icon-wrapper">
                            <BookOpen className="action-icon" />
                          </div>
                          <div className="action-content">
                            <h4 className="action-title">Browse Exams</h4>
                            <p className="action-description">Find practice tests</p>
                          </div>
                          <ChevronRight className="action-arrow" />
                        </a>

                        <a href="#" className="action-button">
                          <div className="action-icon-wrapper">
                            <Trophy className="action-icon" />
                          </div>
                          <div className="action-content">
                            <h4 className="action-title">Join Contest</h4>
                            <p className="action-description">Compete and win</p>
                          </div>
                          <ChevronRight className="action-arrow" />
                        </a>

                        <a href="#" className="action-button">
                          <div className="action-icon-wrapper">
                            <CreditCard className="action-icon" />
                          </div>
                          <div className="action-content">
                            <h4 className="action-title">Upgrade Plan</h4>
                            <p className="action-description">Get more benefits</p>
                          </div>
                          <ChevronRight className="action-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="section-card">
                    <div className="section-header">
                      <h2 className="section-title">Recent Activity</h2>
                    </div>
                    <div className="section-content">
                      {recentActivities.length > 0 ? (
                        <div className="activity-list">
                          {recentActivities.map((activity) => (
                            <div key={activity.id} className="activity-item">
                              <div className={`activity-icon-wrapper ${activity.type}`}>
                                {activity.type === 'success' && <CheckCircle className="activity-icon" />}
                                {activity.type === 'info' && <FileText className="activity-icon" />}
                                {activity.type === 'warning' && <AlertCircle className="activity-icon" />}
                              </div>
                              <div className="activity-content">
                                <p className="activity-text">{activity.text}</p>
                                <p className="activity-time">{activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="empty-state">
                          <FileText className="empty-icon" />
                          <h3 className="empty-title">No recent activity</h3>
                          <p className="empty-description">Your activity will appear here</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
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