import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './SalesPage';
import InstitutionalPage from './InstitutionalPage';
import JobsPage from './JobsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/institucional" element={<InstitutionalPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </Router>
  );
}
