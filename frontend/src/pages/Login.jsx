import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Laptop, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      // Check if user has completed onboarding
      const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
      
      if (hasCompletedOnboarding) {
        // Navigate to dashboard or home page
        navigate('/home');
      } else {
        // First time login, go through onboarding
        navigate('/onboarding/basic-info');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    
    // Simulate social login
    setTimeout(() => {
      // For demo purposes, just navigate to onboarding
      navigate('/onboarding/basic-info');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      {/* Left side - Form */}
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <div className="logo-container">
            <Laptop className="logo-icon" />
            <span className="logo-text">COLLABRO</span>
          </div>
          
          <div className="login-form-box">
            <h2 className="login-title">Login to CollaBro</h2>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="forgot-password">
                <a href="#" className="forgot-password-link">
                  Forgot Password?
                </a>
              </div>
              
              <button
                type="submit"
                className={`login-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
              </button>
              
              <div className="alternate-login">
                or sign in with
              </div>
              
              <div className="social-login-buttons">
                <button 
                  type="button" 
                  className="social-login-button github"
                  onClick={() => handleSocialLogin('github')}
                >
                  <Github size={20} />
                </button>
                <button 
                  type="button" 
                  className="social-login-button linkedin"
                  onClick={() => handleSocialLogin('linkedin')}
                >
                  <Linkedin size={20} />
                </button>
                <button 
                  type="button" 
                  className="social-login-button google"
                  onClick={() => handleSocialLogin('google')}
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
          
          <p className="signup-prompt">
            New to CollaBro?{' '}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Info */}
      <div className="login-info-container">
        <div className="login-info-content">
          <h2 className="welcome-title">WELCOME BACK,</h2>
          <h3 className="about-subtitle">To CollaBro!</h3>
          
          <img
            src="/login.png"
            alt="Collaboration"
            className="login-image"
          />
          
          <p className="login-description">
            A platform designed to foster collaborative innovation by bringing together individuals from diverse streams and domains to work on impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;