import { useState } from "react";
import OrderSummary from "./OrderSummary";
import TipSelector from "./TipSelector";
import PaymentForm from "./PaymentForm";


const CheckoutPage = () => {
  // Sample order with IDs for proper key handling.
  const [order, setOrder] = useState([
    { id: 1, name: "Iced Latte", quantity: 2, price: 4.5 },
    { id: 2, name: "Matcha", quantity: 1, price: 5.0 },
  ]);
  const [tipPercentage, setTipPercentage] = useState(0);

  // Calculate the totals.
  const orderTotal = order.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const tipAmount = orderTotal * (tipPercentage / 100);
  const finalTotal = orderTotal + tipAmount;

  // Remove a drink from the order.
  const handleRemoveDrink = (drinkId) => {
    setOrder(prevOrder => prevOrder.filter(drink => drink.id !== drinkId));
  };

  // Dummy payment success handler.
  const handlePaymentSuccess = () => {
    alert("Payment successful!");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <OrderSummary order={order} onRemoveDrink={handleRemoveDrink} />
        <TipSelector tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
        <div className="order-totals">
          <p>Order Total: ${orderTotal.toFixed(2)}</p>
          <p>Tip: ${tipAmount.toFixed(2)} ({tipPercentage}%)</p>
          <p>Final Total: ${finalTotal.toFixed(2)}</p>
        </div>
        <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
      </div>
    </div>
  );
};

export default CheckoutPage;
