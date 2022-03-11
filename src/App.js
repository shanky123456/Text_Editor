import logo from "./logo.svg";
import "./App.css";

import NavBar from "./NavBar";
import TextForm from "./TextForm";
import About from "./About";
import React, { useState } from "react";

// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = (e) => {
    // e.preventDefault();
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    }
  };

  return (
    <>
      <Router>
        <NavBar
          text="TextUtils"
          home="Home"
          AboutUs="About us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3">
          <Routes>
              <Route
                path="/"
                element={
                  <TextForm heading="Enter the text to analyze" mode={mode} />
                  // <About />
                  
                }
              />
              <Route path="about" element={<About />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
