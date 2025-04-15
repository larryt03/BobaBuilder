import "./Menu.css";

function Menu() {
  return (
    <section className="menu-container">
      <div className="menu">
        <h2>Bobalicious Menu</h2>

        <div className="menu-grid">
          {/* Column 1 */}
          <div className="menu-category">
            <h3>Cream Teas - $5</h3>
            <ul>
              <li>Avocado</li>
              <li>Taro</li>
              <li>Coconut</li>
              <li>Peach</li>
              <li>Orange</li>
              <li>Strawberry</li>
            </ul>
            <p className="menu-note">HOT/COLD • GREEN/BLACK</p>

            <h3>Flavored Teas - $4</h3>
            <ul>
              <li>Guava</li>
              <li>Kumquat</li>
              <li>Lychee</li>
              <li>Mango</li>
              <li>Peach</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="menu-category">
            <h3>Smoothies - $5</h3>
            <ul>
              <li>Avocado</li>
              <li>Banana</li>
              <li>Honey Dew</li>
              <li>Lychee</li>
              <li>Peach</li>
              <li>Orange</li>
              <li>Strawberry</li>
              <li>Taro</li>
            </ul>

            <h3>Special - $5.50</h3>
            <ul>
              <li>Thai Tea</li>
              <li>Vietnamese Coffee</li>
              <li>Matcha Latte</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="menu-category">
            <h3>Toppings - $0.50</h3>
            <ul>
              <li>Boba</li>
              <li>Egg Pudding</li>
              <li>Mini Boba</li>
              <li>Popping Boba</li>
              <li>Coffee Pudding</li>
              <li>Mixed Jellies</li>
            </ul>

            <h3>Macarons - $2</h3>
            <ul>
              <li>Chocolate</li>
              <li>Cookies N’ Cream</li>
              <li>Matcha</li>
              <li>Strawberry</li>
              <li>Vanilla</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
