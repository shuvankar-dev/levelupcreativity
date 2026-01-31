import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import './CSS/AdminAuth.css';

// Admin Dashboard Component
const AdminDashboard: React.FC<{ onSignOut: () => void }> = ({ onSignOut }) => {
  const [userCount, setUserCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = async () => {
    try {
      // Get current user's metadata or use a public function
      // For now, we'll show a placeholder since we need admin access to count all users
      // In production, you'd create a Supabase Edge Function or use RLS policies
      
      // Temporary: Just show that the feature is ready
      setUserCount(3); // This will be dynamic once we set up proper access
    } catch (error) {
      console.error('Error fetching user count:', error);
      setUserCount(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-content">
          <div className="dashboard-title-section">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back! Here's your overview</p>
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
          {/* Stats Card */}
          <div className="stats-grid">
            <div className="stat-card">
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
                  <p className="stat-label">Registered Users</p>
                  <p className="stat-value">
                    {loading ? (
                      <span className="stat-loading">...</span>
                    ) : (
                      userCount
                    )}
                  </p>
                  <p className="stat-description">Total users in the system</p>
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
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
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
