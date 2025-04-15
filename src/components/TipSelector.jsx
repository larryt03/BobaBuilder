import React from "react";

const TipSelector = ({ tipPercentage, setTipPercentage }) => {
  const options = [0,10, 15, 20];
  
  return (
    <div className="tip-selector">
      <h2>Select Tip Percentage</h2>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setTipPercentage(option)}
          className={tipPercentage === option ? "selected" : ""}
        >
          {option}%
        </button>
      ))}
    </div>
  );
};

export default TipSelector;
