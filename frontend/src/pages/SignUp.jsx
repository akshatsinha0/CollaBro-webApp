import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Laptop, Github, Linkedin, Mail, Eye, EyeOff } from 'lucide-react'
import '../styles/SignUp.css'

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phone: value }))
  }

  const togglePassword = () => setShowPassword(v => !v)
  const toggleConfirm  = () => setShowConfirm(v => !v)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      navigate('/onboarding/basic-info')
      setIsLoading(false)
    }, 1000)
  }

  const handleSocialSignup = (provider) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate('/onboarding/basic-info')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="signup-container">
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
                <PhoneInput
                  country={'us'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  enableSearch
                  searchPlaceholder="Search country"
                  preferredCountries={['us','gb','in']}
                  placeholder="Phone Number"
                  inputClass="form-input phone-input"
                  buttonClass="phone-button"
                  dropdownClass="phone-dropdown"
                  containerClass="phone-container"
                />
              </div>

              <div className="form-group password-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="form-input password-input"
                  required
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="password-toggle-button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>

              <div className="form-group password-group">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="form-input password-input"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirm}
                  className="password-toggle-button"
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>

              <button
                type="submit"
                className={`signup-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'SIGNING UP...' : 'SIGN UP'}
              </button>

              <div className="alternate-signup">or sign up with</div>
              <div className="social-login-buttons">
                <button
                  type="button"
                  className="social-login-button github"
                  onClick={() => handleSocialSignup('github')}
                  title="Sign in with GitHub"
                  disabled={isLoading}
                >
                  <Github size={36}/>
                </button>
                <button
                  type="button"
                  className="social-login-button linkedin"
                  onClick={() => handleSocialSignup('linkedin')}
                  title="Sign in with LinkedIn"
                  disabled={isLoading}
                >
                  <Linkedin size={36}/>
                </button>
                <button
                  type="button"
                  className="social-login-button google"
                  onClick={() => handleSocialSignup('google')}
                  title="Sign in with Gmail"
                  disabled={isLoading}
                >
                  <Mail size={36}/>
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

      <div className="signup-info-container">
        <div className="signup-info-content">
          <h2 className="welcome-title">JOIN US TODAY</h2>
          <img src="/signup.png" alt="Collaboration" className="signup-image" />
          <p className="signup-description">
            CollaBro connects innovators, developers, designers, and visionaries
            to collaborate on projects that make a difference. Join our community
            and start building something amazing.
          </p>
        </div>
      </div>
    </div>
  )
}
