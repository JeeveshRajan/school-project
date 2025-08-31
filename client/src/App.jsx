import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddSchool from "./pages/addSchool";
import ShowSchools from "./pages/showSchools";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Add School</Link>
            </li>
            <li>
              <Link to="/schools">View Schools</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<AddSchool />} />
            <Route path="/schools" element={<ShowSchools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
