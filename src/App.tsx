import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './SalesPage';
import InstitutionalPage from './InstitutionalPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/institucional" element={<InstitutionalPage />} />
      </Routes>
    </Router>
  );
}
