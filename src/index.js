import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main.jsx";
import Result from "./components/result.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

