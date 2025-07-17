import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Palette,
  Database,
  Cpu,
  LineChart,
  Code,
  Camera,
} from "lucide-react";
import "./Domains.css";

const Domains = () => {
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState([]);

  const domains = [
    { id: "web", icon: Globe, label: "Web Development" },
    { id: "mobile", icon: Smartphone, label: "Mobile Development" },
    { id: "ui", icon: Palette, label: "UI/UX Design" },
    { id: "backend", icon: Database, label: "Backend Development" },
    { id: "ai", icon: Cpu, label: "AI/ML" },
    { id: "data", icon: LineChart, label: "Data Science" },
    { id: "blockchain", icon: Code, label: "Blockchain" },
    { id: "ar", icon: Camera, label: "AR/VR" },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("onboard_domains") || "[]");
    if (saved.length) {
      setSelectedDomains(saved);
    }
  }, []);

  const toggleDomain = (id) => {
    setSelectedDomains((prev) => {
      const next = prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id];
      localStorage.setItem("onboard_domains", JSON.stringify(next));
      return next;
    });
  };

  const hasSelection = selectedDomains.length > 0;

  return (
    <div className="domains-container">
      <div className="domains-content">
        <div className="domains-header">
          <h2 className="domains-title">What's Your Expertise? 🎯</h2>
          <p className="domains-subtitle">
            Select all domains that interest you
          </p>
        </div>

        <div className="domains-grid">
          {domains.map(({ id, icon: Icon, label }) => {
            const isSelected = selectedDomains.includes(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => toggleDomain(id)}
                className={`domain-item${isSelected ? " selected" : ""}`}
              >
                <div className="domain-content">
                  <div className="domain-icon-wrapper">
                    <Icon
                      className={`domain-icon${isSelected ? " selected" : ""}`}
                    />
                  </div>
                  <span
                    className={`domain-label${isSelected ? " selected" : ""}`}
                  >
                    {label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="domains-footer">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/onboarding/category")}
          >
            ← Back
          </button>
          <div className="step-indicator">Step 3 of 4</div>
          <button
            type="button"
            className={`continue-button${!hasSelection ? " disabled" : ""}`}
            onClick={() => navigate("/onboarding/resume")}
            disabled={!hasSelection}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Domains;
