import React, { useState } from "react";

const PaymentForm = ({ onPaymentSuccess }) => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, input validation and backend submission would occur here.
    console.log("Payment info:", { cardHolder, cardNumber, expDate, cvc });
    onPaymentSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Payment Information</h2>
      
      <div className="form-group">
        <label htmlFor="cardHolder">Card Holder Name</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="expDate">Expiration Date (MM/YY)</label>
        <input
          type="text"
          id="expDate"
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="cvc">CVC</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          placeholder="123"
          required
        />
      </div>
      
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
