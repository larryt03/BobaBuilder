import React from "react";

const DrinkItem = ({ drink, onRemove }) => {
  console.log("DrinkItem rendering for:", drink);
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div>
        <div className="font-bold">{drink.name}</div>
        <div>Quantity: {drink.quantity}</div>
        <div>Price: ${(drink.price).toFixed(2)}</div>
      </div>
      <div>
        <button
          className="text-red-500 hover:underline"
          onClick={() => onRemove(drink.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default DrinkItem;
