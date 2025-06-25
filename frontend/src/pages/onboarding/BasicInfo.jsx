
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, MapPin, Building2 } from 'lucide-react'
import '../../styles/onboarding/BasicInfo.css'

export default function BasicInfo() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [currentCity, setCurrentCity] = useState('')
  const [organization, setOrganization] = useState('')

  useEffect(() => {
    // Pre-fill if the user navigates back
    const savedName = localStorage.getItem('onboard_fullName')
    const savedCity = localStorage.getItem('onboard_currentCity')
    const savedOrg  = localStorage.getItem('onboard_organization')
    if (savedName) setFullName(savedName)
    if (savedCity) setCurrentCity(savedCity)
    if (savedOrg)  setOrganization(savedOrg)
  }, [])

  const handleContinue = (e) => {
    e.preventDefault()
    localStorage.setItem('onboard_fullName', fullName.trim())
    localStorage.setItem('onboard_currentCity', currentCity.trim())
    localStorage.setItem('onboard_organization', organization.trim())
    navigate('/onboarding/category')
  }

  const isValid =
    fullName.trim().length > 0 &&
    currentCity.trim().length > 0 &&
    organization.trim().length > 0

  return (
    <div className="onboarding-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="icon-wrapper">
            <div className="icon-bg">
              <User className="icon" />
            </div>
          </div>
          <h2 className="title">Let's Get Started! 🚀</h2>
          <p className="subtitle">First, tell us a bit about yourself</p>
        </div>

        <form className="form-container" onSubmit={handleContinue}>
          <div className="form-fields">
            <div className="form-field">
              <User className="field-icon" />
              <div className="field-content">
                <label className="field-label">Full Name</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="e.g. Akshat Sinha"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <MapPin className="field-icon" />
              <div className="field-content">
                <label className="field-label">Current City</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="e.g. Vellore"
                  value={currentCity}
                  onChange={(e) => setCurrentCity(e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <Building2 className="field-icon" />
              <div className="field-content">
                <label className="field-label">University / Company</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="e.g. VIT Vellore"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-footer">
            <div className="step-indicator">Step 1 of 4</div>
            <button
              type="submit"
              className={`continue-button${!isValid ? ' disabled' : ''}`}
              disabled={!isValid}
            >
              Continue →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
