import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Database, Globe, Cpu, LineChart, Smartphone, Camera } from 'lucide-react';
import '../../styles/onboarding/Domains.css';

function Domains() {
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState([]);

  const domains = [
    { id: 'web', icon: Globe, label: 'Web Development', color: 'blue' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile Development', color: 'blue' },
    { id: 'ui', icon: Palette, label: 'UI/UX Design', color: 'blue' },
    { id: 'backend', icon: Database, label: 'Backend Development', color: 'blue' },
    { id: 'ai', icon: Cpu, label: 'AI/ML', color: 'blue' },
    { id: 'data', icon: LineChart, label: 'Data Science', color: 'blue' },
    { id: 'blockchain', icon: Code, label: 'Blockchain', color: 'blue' },
    { id: 'ar', icon: Camera, label: 'AR/VR', color: 'blue' },
  ];

  const toggleDomain = (domainId) => {
    setSelectedDomains(prev => 
      prev.includes(domainId)
        ? prev.filter(id => id !== domainId)
        : [...prev, domainId]
    );
  };

  return (
    <div className="domains-container">
      <div className="domains-content">
        <div className="domains-header">
          <h2 className="domains-title">What's Your Expertise? 🎯</h2>
          <p className="domains-subtitle">Select all domains that interest you</p>
        </div>

        <div className="domains-grid">
          {domains.map(({ id, icon: Icon, label }) => {
            const isSelected = selectedDomains.includes(id);
            return (
              <button
                key={id}
                onClick={() => toggleDomain(id)}
                className={`domain-item ${isSelected ? 'selected' : ''}`}
              >
                <div className="domain-content">
                  <div className={`domain-icon-wrapper ${isSelected ? 'selected' : ''}`}>
                    <Icon className={`domain-icon ${isSelected ? 'selected' : ''}`} />
                  </div>
                  <span className={`domain-label ${isSelected ? 'selected' : ''}`}>
                    {label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="domains-footer">
          <button
            onClick={() => navigate('/onboarding/category')}
            className="back-button"
          >
            ← Back
          </button>
          <div className="step-indicator">Step 3 of 4</div>
          <button
            onClick={() => navigate('/onboarding/resume')}
            className={`continue-button ${selectedDomains.length === 0 ? 'disabled' : ''}`}
            disabled={selectedDomains.length === 0}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Domains;