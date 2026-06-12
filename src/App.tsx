import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './SalesPage';
import InstitutionalPage from './InstitutionalPage';
import JobsPage from './JobsPage';
import SimulatedCheckoutPage from './SimulatedCheckoutPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/institucional" element={<InstitutionalPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/checkout-simulado" element={<SimulatedCheckoutPage />} />
      </Routes>
    </Router>
  );
}
