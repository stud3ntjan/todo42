import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;
