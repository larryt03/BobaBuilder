import React from "react";
import Navbar from "./components/Navbar";
import BobaBuilder from "./components/BobaBuilder";

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content: Offset for navbar height */}
      <div style={{ marginTop: "140px" }}>
        <BobaBuilder />
      </div>
    </>
  );
}

export default App;
