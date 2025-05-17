import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Building2 } from 'lucide-react';
import '../../styles/onboarding/BasicInfo.css';

function BasicInfo() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/onboarding/category');
  };

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

        <div className="form-container">
          <div className="form-fields">
            <div className="form-field">
              <User className="field-icon" />
              <div className="field-content">
                <label className="field-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="form-field">
              <MapPin className="field-icon" />
              <div className="field-content">
                <label className="field-label">
                  Current City
                </label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="New York"
                />
              </div>
            </div>

            <div className="form-field">
              <Building2 className="field-icon" />
              <div className="field-content">
                <label className="field-label">
                  University/Company
                </label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Stanford University"
                />
              </div>
            </div>
          </div>

          <div className="form-footer">
            <div className="step-indicator">Step 1 of 4</div>
            <button
              onClick={handleContinue}
              className="continue-button"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;