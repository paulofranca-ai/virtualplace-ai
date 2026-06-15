import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './SalesPage';
import InstitutionalPage from './InstitutionalPage';
import JobsPage from './JobsPage';
import SimulatedCheckoutPage from './SimulatedCheckoutPage';
import BuyAgentsPage from './BuyAgentsPage';
import LeadCheckoutPage from './LeadCheckoutPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/institucional" element={<InstitutionalPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/checkout-simulado" element={<SimulatedCheckoutPage />} />
        <Route path="/comprar" element={<BuyAgentsPage />} />
        <Route path="/planos" element={<BuyAgentsPage />} />
        <Route path="/planos/confirmar" element={<LeadCheckoutPage />} />
      </Routes>
    </Router>
  );
}
