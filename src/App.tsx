import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventSecurityPage from './pages/services/EventSecurityPage';
import HospitalitySecurityPage from './pages/services/HospitalitySecurityPage';
import ObjectSecurityPage from './pages/services/ObjectSecurityPage';
import RetailSecurityPage from './pages/services/RetailSecurityPage';
import QuotePage from './pages/QuotePage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/event-security" element={<EventSecurityPage />} />
            <Route path="/services/hospitality-security" element={<HospitalitySecurityPage />} />
            <Route path="/services/object-security" element={<ObjectSecurityPage />} />
            <Route path="/services/retail-security" element={<RetailSecurityPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;