import React from "react";
import Navbar from "./components/Navbar";
import BobaBuilder from "./components/BobaBuilder.tsx";

const App: React.FC = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content: Offset for fixed navbar height */}
      <div style={{ marginTop: "140px" }}>
        <BobaBuilder />
      </div>
    </>
  );
};

export default App;
