import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';
import '../../styles/onboarding/Category.css';

function Category() {
  const navigate = useNavigate();

  const handleContinue = (category) => {
    navigate('/onboarding/domains');
  };

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
            className="category-option"
          >
            <div className="option-content">
              <div className="option-icon-wrapper">
                <GraduationCap className="option-icon" />
              </div>
              <div className="option-text">
                <h3 className="option-title">Student</h3>
                <p className="option-description">Currently pursuing education</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleContinue('fresher')}
            className="category-option"
          >
            <div className="option-content">
              <div className="option-icon-wrapper">
                <Rocket className="option-icon" />
              </div>
              <div className="option-text">
                <h3 className="option-title">Fresher</h3>
                <p className="option-description">Ready to start your career</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleContinue('professional')}
            className="category-option"
          >
            <div className="option-content">
              <div className="option-icon-wrapper">
                <Briefcase className="option-icon" />
              </div>
              <div className="option-text">
                <h3 className="option-title">Working Professional</h3>
                <p className="option-description">Experienced in the field</p>
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
  );
}

export default Category;