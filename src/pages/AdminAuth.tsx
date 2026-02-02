import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getAllEnrollments, getEnrollmentCount, updateEnrollmentStatus } from '../actions/enrollmentActions';
import './CSS/AdminAuth.css';

// Enrollment interface
interface Enrollment {
  id: string;
  name: string;
  email: string;
  phone: string;
  track: string;
  status: 'pending' | 'contacted';
  created_at: string;
}

// Toast Notification Component
const Toast: React.FC<{ message: string; type: 'success' | 'error'; onClose: () => void }> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast-notification toast-${type}`}>
      <div className="toast-icon">
        {type === 'success' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

// Enrollment Leads Page Component
const EnrollmentLeadsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetchEnrollments();
    
    // Listen for new enrollment notifications
    const handleToast = (event: any) => {
      setToast({
        message: event.detail.message,
        type: event.detail.type
      });
      // Refresh enrollments
      fetchEnrollments();
    };
    
    window.addEventListener('showToast', handleToast);
    return () => window.removeEventListener('showToast', handleToast);
  }, []);

  const fetchEnrollments = async () => {
    setLoading(true);
    const response = await getAllEnrollments();
    if (response.success && response.data) {
      setEnrollments(response.data);
    }
    setLoading(false);
  };

  const handleStatusChange = async (id: string, newStatus: 'pending' | 'contacted') => {
    setUpdatingId(id);
    const response = await updateEnrollmentStatus(id, newStatus);
    if (response.success) {
      // Update local state
      setEnrollments(prev =>
        prev.map(enrollment =>
          enrollment.id === id ? { ...enrollment, status: newStatus } : enrollment
        )
      );
    }
    setUpdatingId(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const totalLeads = enrollments.length;
  const pendingCount = enrollments.filter(e => e.status === 'pending').length;
  const contactedCount = enrollments.filter(e => e.status === 'contacted').length;

  return (
    <div className="enrollment-leads-page">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      {/* Header */}
      <div className="enrollment-leads-header">
        <div className="enrollment-leads-header-content">
          <div className="enrollment-leads-title-section">
            <button onClick={onBack} className="back-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Dashboard
            </button>
            <h1 className="enrollment-leads-title">Enrollment Leads</h1>
            <p className="enrollment-leads-subtitle">Manage and track all enrollment submissions</p>
          </div>
          <div className="enrollment-leads-stats">
            <div className="leads-stat-item">
              <span className="leads-stat-label">Total Leads</span>
              <span className="leads-stat-value">{totalLeads}</span>
            </div>
            <div className="leads-stat-item">
              <span className="leads-stat-label">Pending</span>
              <span className="leads-stat-value leads-stat-pending">{pendingCount}</span>
            </div>
            <div className="leads-stat-item">
              <span className="leads-stat-label">Contacted</span>
              <span className="leads-stat-value leads-stat-contacted">{contactedCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="enrollment-leads-content">
        <div className="enrollment-leads-container">
          {loading ? (
            <div className="enrollment-loading">Loading enrollments...</div>
          ) : enrollments.length === 0 ? (
            <div className="enrollment-empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>No enrollments yet</p>
            </div>
          ) : (
            <div className="enrollment-table-wrapper">
              <table className="enrollment-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Track</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments.map((enrollment) => (
                    <tr key={enrollment.id}>
                      <td className="name-cell">{enrollment.name}</td>
                      <td className="email-cell">{enrollment.email}</td>
                      <td className="phone-cell">{enrollment.phone}</td>
                      <td>
                        <span className={`track-badge track-${enrollment.track}`}>
                          {enrollment.track === 'ui-ux' ? 'UI/UX Design' : 'VFX Animation'}
                        </span>
                      </td>
                      <td>
                        <div className="status-badge-container">
                          <button
                            onClick={() => handleStatusChange(enrollment.id, 'pending')}
                            className={`status-badge ${enrollment.status === 'pending' ? 'status-badge-active status-badge-pending' : 'status-badge-inactive'}`}
                            disabled={updatingId === enrollment.id}
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => handleStatusChange(enrollment.id, 'contacted')}
                            className={`status-badge ${enrollment.status === 'contacted' ? 'status-badge-active status-badge-contacted' : 'status-badge-inactive'}`}
                            disabled={updatingId === enrollment.id}
                          >
                            Contacted
                          </button>
                        </div>
                      </td>
                      <td className="date-cell">{formatDate(enrollment.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard: React.FC<{ onSignOut: () => void }> = ({ onSignOut }) => {
  const [adminEmail, setAdminEmail] = useState<string>('');
  const [enrollmentCount, setEnrollmentCount] = useState<number>(0);
  const [showEnrollmentLeads, setShowEnrollmentLeads] = useState(false);

  useEffect(() => {
    fetchAdminInfo();
    fetchEnrollmentCount();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setAdminEmail(user.email);
      }
    } catch (error) {
      console.error('Error fetching admin info:', error);
    }
  };

  const fetchEnrollmentCount = async () => {
    const count = await getEnrollmentCount();
    setEnrollmentCount(count);
  };

  // Show enrollment leads page
  if (showEnrollmentLeads) {
    return <EnrollmentLeadsPage onBack={() => setShowEnrollmentLeads(false)} />;
  }

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-content">
          <div className="dashboard-title-section">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <p className="dashboard-subtitle">
              {adminEmail ? (
                <>Welcome back, <span className="admin-email">{adminEmail}</span></>
              ) : (
                'Welcome back! Here\'s your overview'
              )}
            </p>
          </div>
          <div className="dashboard-actions">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
              }}
              className="dashboard-home-button"
            >
              Home
            </button>
            <button onClick={onSignOut} className="dashboard-signout-button">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="dashboard-container">
          {/* Stats Grid - 3 Cards in a Row */}
          <div className="stats-grid">
            {/* Enroll Users Card - Clickable */}
            <div className="stat-card stat-card-clickable" onClick={() => setShowEnrollmentLeads(true)}>
              <div className="stat-card-inner">
                <div className="stat-icon-wrapper">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <p className="stat-label">Enrollment Leads</p>
                  <p className="stat-value">{enrollmentCount}</p>
                  <p className="stat-description">Click to view all enrollments</p>
                </div>
              </div>
            </div>

            {/* Free Course Leads Card */}
            <div className="stat-card">
              <div className="stat-card-inner">
                <div className="stat-icon-wrapper stat-icon-green">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 17H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <p className="stat-label">Free Course Leads</p>
                  <p className="stat-value">0</p>
                  <p className="stat-description">Users interested in free courses</p>
                </div>
              </div>
            </div>

            {/* Add Blog Card */}
            <div className="stat-card stat-card-action">
              <div className="stat-card-inner">
                <div className="stat-icon-wrapper stat-icon-orange">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <p className="stat-label">Add Blog</p>
                  <p className="stat-description">Create and publish new blog posts</p>
                  <button className="stat-action-button">
                    Create New Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminAuth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    checkUser();
    
    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setIsAuthenticated(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setShowResendButton(false);

    try {
      if (isSignUp) {
        // Sign Up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          setMessage('Sign up successful! Please check your email to verify your account.');
          setShowResendButton(true);
        }
      } else {
        // Sign In
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.session) {
          setMessage('Sign in successful! Redirecting to dashboard...');
          // TODO: Redirect to admin dashboard
          setTimeout(() => {
            console.log('Redirect to dashboard');
          }, 1500);
        }
      }
    } catch (error: any) {
      let errorMessage = error.message || 'Authentication failed. Please try again.';
      
      // Provide helpful message for common errors
      if (error.message?.includes('Email not confirmed')) {
        errorMessage = 'Please verify your email before signing in. Check your inbox for the confirmation link.';
        setShowResendButton(true);
      } else if (error.message?.includes('Invalid login credentials')) {
        errorMessage = 'Invalid email or password. Please try again.';
      }
      
      setMessage(errorMessage);
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });

      if (error) throw error;

      setMessage('Confirmation email resent! Please check your inbox and spam folder.');
    } catch (error: any) {
      setMessage(error.message || 'Failed to resend email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setMessage('Signed out successfully');
      setIsAuthenticated(false);
      setEmail('');
      setPassword('');
    } catch (error: any) {
      setMessage(error.message || 'Sign out failed');
    }
  };

  // If user is authenticated, show dashboard
  if (isAuthenticated) {
    return <AdminDashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-container">
        <div className="admin-auth-card">
          {/* Header */}
          <div className="admin-auth-header">
            <h1 className="admin-auth-title">Admin Portal</h1>
            <p className="admin-auth-subtitle">
              {isSignUp ? 'Create your admin account' : 'Sign in to your account'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="admin-auth-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="form-input"
                required
              />
            </div>

            {message && (
              <div className={`auth-message ${message.includes('failed') || message.includes('Invalid') ? 'error' : 'success'}`}>
                {message}
              </div>
            )}

            {showResendButton && (
              <button
                type="button"
                onClick={handleResendEmail}
                className="resend-email-button"
                disabled={loading}
              >
                Resend Confirmation Email
              </button>
            )}

            <button
              type="submit"
              className="auth-submit-button"
              disabled={loading}
            >
              {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          {/* Toggle Sign In/Sign Up */}
          <div className="auth-toggle">
            <p className="auth-toggle-text">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setMessage('');
                }}
                className="auth-toggle-button"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {/* Back to Home */}
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
            }}
            className="back-home-button"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
