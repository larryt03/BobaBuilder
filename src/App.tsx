import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BobaBuilder from "./components/BobaBuilder";
import Menu from "./components/Menu";
import CheckoutPage from "./components/CheckoutPage"; // ✅ import it

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "140px" }}>
        <Routes>
          <Route path="/" element={<BobaBuilder />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CheckoutPage />} /> {/* ✅ add route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
