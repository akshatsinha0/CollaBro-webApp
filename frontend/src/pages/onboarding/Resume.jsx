import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import '../../styles/onboarding/Resume.css';

function Resume() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (file) => {
    if (file) {
      if (file.type === 'application/pdf') {
        setFile(file);
        setError('');
      } else {
        setError('Please upload a PDF file');
        setFile(null);
      }
    }
  };

  const handleComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    navigate('/home');
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h2 className="resume-title">Last Step! 🎉</h2>
          <p className="resume-subtitle">Upload your resume to complete your profile</p>
        </div>

        <div className="resume-form">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`upload-area ${isDragging ? 'dragging' : ''} ${file ? 'has-file' : ''}`}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileInput}
              className="file-input"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="upload-label">
              {file ? (
                <div className="upload-success">
                  <CheckCircle className="success-icon" />
                  <p className="file-name">{file.name}</p>
                  <p className="upload-message">File uploaded successfully!</p>
                </div>
              ) : (
                <div className="upload-prompt">
                  <Upload className="upload-icon" />
                  <p className="upload-text">
                    Drag and drop your resume here or <span className="browse-text">browse</span>
                  </p>
                  <p className="upload-hint">Supports PDF files</p>
                </div>
              )}
            </label>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle className="error-icon" />
              <span>{error}</span>
            </div>
          )}

          <div className="resume-footer">
            <button
              onClick={() => navigate('/onboarding/domains')}
              className="back-button"
            >
              ← Back
            </button>
            <div className="step-indicator">Step 4 of 4</div>
            <button
              onClick={handleComplete}
              className={`complete-button ${!file ? 'disabled' : ''}`}
              disabled={!file}
            >
              Complete →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;