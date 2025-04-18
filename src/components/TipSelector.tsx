import React from "react";

const TipSelector = ({ tipPercentage, setTipPercentage }) => {

  // The tip percentage option
  const options = [0, 10, 15, 20];

  // Returns the tip selection box 
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
