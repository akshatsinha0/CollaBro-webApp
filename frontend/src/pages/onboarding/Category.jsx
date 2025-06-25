import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Briefcase, Rocket } from 'lucide-react'
import '../../styles/onboarding/Category.css'

export default function Category() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('onboard_category')
    if (saved) setSelected(saved)
  }, [])

  const handleContinue = (category) => {
    localStorage.setItem('onboard_category', category)
    navigate('/onboarding/domains')
  }

  const optionClasses = (key) =>
    `category-option${selected === key ? ' selected' : ''}`

  return (
    <div className="category-container">
      <div className="category-content">
        <div className="category-header">
          <h2 className="category-title">What's Your Journey? 🌟</h2>
          <p className="category-subtitle">Select your current status</p>
        </div>

        <div className="category-options">
          <button
            onClick={() => handleContinue('student')}
            className={optionClasses('student')}
          >
            <div className="option-content">
              <div className="option-icon-wrapper">
                <GraduationCap className="option-icon" />
              </div>
              <div className="option-text">
                <h3 className="option-title">Student</h3>
                <p className="option-description">
                  Currently pursuing education
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleContinue('fresher')}
            className={optionClasses('fresher')}
          >
            <div className="option-content">
              <div className="option-icon-wrapper">
                <Rocket className="option-icon" />
              </div>
              <div className="option-text">
                <h3 className="option-title">Fresher</h3>
                <p className="option-description">
                  Ready to start your career
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleContinue('professional')}
            className={optionClasses('professional')}
          >
            <div className="option-content">
              <div className="option-icon-wrapper">
                <Briefcase className="option-icon" />
              </div>
              <div className="option-text">
                <h3 className="option-title">Working Professional</h3>
                <p className="option-description">
                  Experienced in the field
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="category-footer">
          <button
            onClick={() => navigate('/onboarding/basic-info')}
            className="back-button"
          >
            ← Back
          </button>
          <div className="step-indicator">Step 2 of 4</div>
        </div>
      </div>
    </div>
  )
}
