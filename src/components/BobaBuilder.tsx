import React, { useState } from "react";
import "./BobaBuilder.css";

const drinkCategories: Record<string, { label: string; value: string }[]> = {
  "Cream Teas - $5": [
    { label: "Avocado", value: "avo" },
    { label: "Taro", value: "taro" },
    { label: "Coconut", value: "coconut" },
    { label: "Peach", value: "peach" },
    { label: "Orange", value: "orange" },
    { label: "Strawberry", value: "strawberry" },
  ],
  "Smoothies - $5": [
    { label: "Avocado", value: "avo" },
    { label: "Banana", value: "banana" },
    { label: "Honey Dew", value: "honeydew" },
    { label: "Lychee", value: "lychee" },
    { label: "Peach", value: "peach" },
    { label: "Orange", value: "orange" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Taro", value: "taro" },
  ],
  "Special Drinks - $5": [
    { label: "Thai Tea", value: "thai" },
    { label: "Vietnamese Coffee", value: "coffee" },
    { label: "Matcha Latte", value: "matcha" },
  ],
  "Flavored Teas - $5": [
    { label: "Guava", value: "guava" },
    { label: "Kumquat", value: "kumquat" },
    { label: "Lychee", value: "lychee" },
    { label: "Mango", value: "mango" },
    { label: "Peach", value: "peach" },
  ],
};

const toppingOptions = [
  { label: "Boba", value: "boba" },
  { label: "Mini Boba", value: "mini_boba" },
  { label: "Coffee Pudding", value: "coffee_pudding" },
  { label: "Egg Pudding", value: "egg_pudding" },
  { label: "Mixed Jellies", value: "mixed_jelly" },
];

const toppingImages: Record<string, string> = {
  boba: "boba.png",
  mini_boba: "boba.png",
  coffee_pudding: "jelly.png",
  egg_pudding: "jelly.png",
  mixed_jelly: "mixed_jelly.png",
};

const BobaBuilder = () => {
  const [selectedDrink, setSelectedDrink] = useState<{ label: string; value: string } | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const drinkPrice = 5.0;
  const toppingPrice = 0.5;

  const toggleTopping = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    );
  };

  const reset = () => {
    setSelectedDrink(null);
    setSelectedToppings([]);
  };

  const totalPrice =
    (selectedDrink ? drinkPrice : 0) + selectedToppings.length * toppingPrice;

  const handleAddToCart = () => {
    if (!selectedDrink) {
      alert("Please choose a drink before adding to cart.");
      return;
    }
    const summary = `🧋 Order Summary:
- Drink: ${selectedDrink.label}
- Toppings: ${selectedToppings.map((t) => t.replace("_", " ")).join(", ") || "None"}
- Total: $${totalPrice.toFixed(2)} 💰
✅ Added to cart!`;
    alert(summary);
  };

  return (
    <div id="boba-builder" className="boba-builder-layout">
      {/* Left Panel - Drinks */}
      <div className="drinks-panel">
        {Object.entries(drinkCategories).map(([category, drinks]) => (
          <div key={category} className="drink-section">
            <h2>{category}</h2>
            <div className="button-group">
              {drinks.map((drink) => (
                <button
                  key={drink.value}
                  className={`drink-btn ${
                    selectedDrink?.value === drink.value ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDrink(drink)}
                >
                  {drink.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Center - Cup Display */}
      <div className="boba-display-container">
        <div className="boba-display">
          <img
            src="/images/cup-outline.png"
            alt="Cup Outline"
            className="layer cup"
          />
          {selectedDrink && (
            <img
              src={`/images/${selectedDrink.value}.png`}
              alt="Drink"
              className="layer drink"
            />
          )}
          {selectedToppings.map((topping) => (
            <img
              key={topping}
              src={`/images/${toppingImages[topping]}`}
              alt={topping}
              className="layer topping"
            />
          ))}
        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>

      {/* Right Panel - Toppings and Summary */}
      <div className="toppings-panel">
        <div className="drink-section">
          <h2>Toppings - $0.50</h2>
          <div className="button-group">
            {toppingOptions.map((topping) => (
              <button
                key={topping.value}
                className={`drink-btn ${
                  selectedToppings.includes(topping.value) ? "selected" : ""
                }`}
                onClick={() => toggleTopping(topping.value)}
              >
                {topping.label}
              </button>
            ))}
          </div>
        </div>

        <div className="order-summary">
          <h3>Your Order</h3>
          <p>
            <strong>Drink:</strong>{" "}
            {selectedDrink ? selectedDrink.label : "None"}
          </p>
          <p>
            <strong>Toppings:</strong>{" "}
            {selectedToppings.length > 0
              ? selectedToppings.map((t) => t.replace("_", " ")).join(", ")
              : "None"}
          </p>
          <p>
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </p>
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default BobaBuilder;
