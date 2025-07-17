import React, { useState } from "react";
import Navbar from "./Navbar";
import PlanCards from "./PlanCards";
import "./Planner.css";

const Planner = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="planner-container">
      <Navbar />
      <div className="planner-content">
        <div className="planner-header">
          <h1 className="planner-title">Choose your plan now</h1>
          <h2 className="planner-subtitle">
            Upgrade your plan today to experience it all. Cancel anytime
          </h2>

          <div className="toggle-container">
            <button
              className={`toggle-button ${!isAnnual ? "toggle-button-active" : "toggle-button-inactive"}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`toggle-button toggle-button-annual ${isAnnual ? "toggle-button-active" : "toggle-button-inactive"}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
              <span className="save-badge">Save 10%</span>
            </button>
          </div>
        </div>

        <PlanCards isAnnual={isAnnual} />
      </div>
    </div>
  );
};

export default Planner;
