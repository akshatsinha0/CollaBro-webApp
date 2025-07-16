import { useState } from 'react';
import './Planner.css';
import PropTypes from 'prop-types';

const PlanCards = ({ isAnnual }) => {
  const [activeCard, setActiveCard] = useState(0);

  const cardData = [
    {
      title: 'Starters Plan',
      price: 'Free',
      buttonText: 'Your Plan Now',
      features: ['Plan Advantage', 'Plan Advantage', 'Plan Advantage', 'Plan Advantage'],
    },
    {
      title: 'Standard Plan',
      price: `Rs.${isAnnual ? '54' : '60'}/month`,
      buttonText: 'Get Started',
      features: ['Plan Advantage', 'Plan Advantage', 'Plan Advantage', 'Plan Advantage'],
    },
    {
      title: 'Ultimate Plan',
      price: `Rs.${isAnnual ? '90' : '100'}/month`,
      buttonText: 'Get Started',
      features: ['Plan Advantage', 'Plan Advantage', 'Plan Advantage', 'Plan Advantage'],
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`plan-card ${activeCard === index ? 'plan-card-active' : ''}`}
          onClick={() => setActiveCard(index)}
        >
          <h2 className="plan-title">{card.title}</h2>
          <p className="plan-price">{card.price}</p>
          <button 
            className={`plan-button ${activeCard === index ? 'plan-button-active' : 'plan-button-inactive'}`} 
          >
            {card.buttonText}
          </button>
          <ul className="feature-list">
            {card.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="feature-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="feature-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

PlanCards.propTypes = {
  isAnnual: PropTypes.bool.isRequired
};

export default PlanCards;