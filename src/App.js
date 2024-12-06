import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style.css';
import Home from "./components/Home";
import AddDoctor from "./components/AddDoctor";
import AddPatient from "./components/AddPatient";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">стоматологічна клініка</h1>
        <nav>
          <ul className="flex ul-link">
            <li>
              <Link to="/Home">головна</Link>
            </li>
            <li>
              <Link to="/AddDoctor">лікарі</Link>
            </li>
            <li>
              <Link to="/AddPatient">пацієнти</Link>
            </li>
            <li>
              <Link to="/Contact">контакти</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/AddPatient" element={<AddPatient />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
