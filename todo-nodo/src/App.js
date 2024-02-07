import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import React from "react";
import Home from "./Homepage.js";
import "./App.css";

function App() {
  return (
    <div className="test">
      <Router>
        <div>
          <nav>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
