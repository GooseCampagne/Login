import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/campagne_parcial2">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);
