import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Laptop, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Navigate to onboarding process
      navigate('/onboarding/basic-info');
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialSignup = (provider) => {
    setIsLoading(true);
    
    // Simulate social login
    setTimeout(() => {
      // For demo purposes, just navigate to onboarding
      navigate('/onboarding/basic-info');
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="signup-container">
      {/* Left side - Form */}
      <div className="signup-form-container">
        <div className="signup-form-wrapper">
          <div className="logo-container">
            <Laptop className="logo-icon" />
            <span className="logo-text">COLLABRO</span>
          </div>
          
          <div className="signup-form-box">
            <h2 className="signup-title">Create Account</h2>
            
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="phone-container">
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="country-code-input"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="phone-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="form-input"
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`signup-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'SIGNING UP...' : 'SIGN UP'}
              </button>
              
              <div className="alternate-signup">
                or sign up with
              </div>
              
              <div className="social-login-buttons">
                <button 
                  type="button" 
                  className="social-login-button github"
                  onClick={() => handleSocialSignup('github')}
                >
                  <Github size={20} />
                </button>
                <button 
                  type="button" 
                  className="social-login-button linkedin"
                  onClick={() => handleSocialSignup('linkedin')}
                >
                  <Linkedin size={20} />
                </button>
                <button 
                  type="button" 
                  className="social-login-button google"
                  onClick={() => handleSocialSignup('google')}
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
          
          <p className="login-prompt">
            Already have an account?{' '}
            <Link to="/login" className="login-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Info */}
      <div className="signup-info-container">
        <div className="signup-info-content">
          <h2 className="welcome-title">JOIN US TODAY</h2>
          
          <img
            src="/signup.png"
            alt="Collaboration"
            className="signup-image"
          />
          
          <p className="signup-description">
            CollaBro connects innovators, developers, designers, and visionaries to collaborate on projects that make a difference. Join our community and start building something amazing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;