// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Live from "./pages/Live";
import Videos from "./pages/Videos";
import Learning from "./pages/Learning";
import Mentors from "./pages/Mentors";
import Mentorsdetails from "./pages/Mentorsdetails";
import Community from "./pages/Community";
import Topicdetails from "./pages/Topicdetails";



export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentorsdetails" element={<Mentorsdetails />} /> {/* Dynamic route */}
        <Route path="/community" element={<Community />} />
        <Route path="/topicdetails" element={<Topicdetails />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}