import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import "./Resume.css";

const Resume = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [fileData, setFileData] = useState({ name: "", url: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("onboard_resume");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.url) {
          setFileData(parsed);
        }
      } catch {}
    }
  }, []);

  const saveToStorage = (fileInfo) => {
    localStorage.setItem("onboard_resume", JSON.stringify(fileInfo));
  };

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
    const dropped = e.dataTransfer.files[0];
    processFile(dropped);
  };

  const handleFileInput = (e) => {
    const selected = e.target.files[0];
    processFile(selected);
  };

  const processFile = (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      setFileData({ name: "", url: "" });
      localStorage.removeItem("onboard_resume");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result.toString();
      const info = { name: file.name, url };
      setFileData(info);
      setError("");
      saveToStorage(info);
    };
    reader.onerror = () => {
      setError("Failed to read file");
    };
    reader.readAsDataURL(file);
  };

  const handleComplete = () => {
    if (!fileData.url) return;
    localStorage.setItem("onboardingCompleted", "true");
    navigate("/home");
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h2 className="resume-title">Last Step! 🎉</h2>
          <p className="resume-subtitle">
            Upload your resume to complete your profile
          </p>
        </div>

        <div className="resume-form">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`upload-area
              ${isDragging ? "dragging" : ""}
              ${fileData.url ? "has-file" : ""}`}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileInput}
              className="file-input"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="upload-label">
              {fileData.url ? (
                <div className="upload-success">
                  <CheckCircle className="success-icon" />
                  <p className="file-name">{fileData.name}</p>
                  <p className="upload-message">File uploaded successfully!</p>
                </div>
              ) : (
                <div className="upload-prompt">
                  <Upload className="upload-icon" />
                  <p className="upload-text">
                    Drag and drop your resume here or{" "}
                    <span className="browse-text">browse</span>
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
              onClick={() => navigate("/onboarding/domains")}
              className="back-button"
            >
              ← Back
            </button>
            <div className="step-indicator">Step 4 of 4</div>
            <button
              onClick={handleComplete}
              className={`complete-button${!fileData.url ? " disabled" : ""}`}
              disabled={!fileData.url}
            >
              Complete →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
