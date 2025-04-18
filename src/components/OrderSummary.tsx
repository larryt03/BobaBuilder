import React from "react";
// Returns the order summary format
// Order summary consists of the order, price, and the removable option
const OrderSummary = ({ order, onRemoveDrink }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {order.map((drink) => (
          <li key={drink.id}>
            {drink.name} x{drink.quantity} - ${drink.price.toFixed(2)}
            <button onClick={() => onRemoveDrink(drink.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
