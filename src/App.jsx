import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cctv from "./Cctv";

function App() {
  const [activeTab, setActiveTab] = useState("wifi");

  function handleClick(tab) {
    setActiveTab(tab);
  }

  return (
    <Router>
      <div style={{ width: "100vw", height: "100vh" }}>
        {/* Navigation bar */}
        <nav
          style={{
            height: "50px",
            color: "white",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
         
          <Link to="/" style={{
            color: "white", textDecoration: "none", backgroundColor: activeTab === "cctv" ? "grey" : "inherit",
            width: "50%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}

            onClick={() => handleClick("cctv")}>
            <span style={{color:'red'}}>Click here to Start!!</span> CCTV Cameras
          </Link>
          
           </nav>

        {/* Define Routes */}
        <Routes>
          
          <Route path="/" element={<Cctv />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
