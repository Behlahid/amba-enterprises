import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import RFQModal from './components/RFQModal';

import HomePage from './pages/HomePage';
import BurnersPage from './pages/BurnersPage';
import BoilersPage from './pages/BoilersPage';
import ThermicFluidPage from './pages/ThermicFluidPage';
import HotAirWaterPage from './pages/HotAirWaterPage';
import SparePartsPage from './pages/SparePartsPage';
import EnergyConservationPage from './pages/EnergyConservationPage';
import InstallationsPage from './pages/InstallationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on page route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedProductForRfq, setSelectedProductForRfq] = useState('');

  const handleOpenRfq = (productName = '') => {
    setSelectedProductForRfq(productName);
    setRfqOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqOpen(false);
    setSelectedProductForRfq('');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="amba-app">
        {/* Universal Navbar with Mega-Menu */}
        <Navbar onOpenRfq={() => handleOpenRfq()} />

        {/* Application Page Routing */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage onOpenRfq={handleOpenRfq} />} />
            <Route path="/products/burners" element={<BurnersPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/products/boilers" element={<BoilersPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/products/thermic-fluid" element={<ThermicFluidPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/products/hot-air-water" element={<HotAirWaterPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/products/spare-parts" element={<SparePartsPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/energy-conservation" element={<EnergyConservationPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/installations" element={<InstallationsPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/about" element={<AboutPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/contact" element={<ContactPage onOpenRfq={handleOpenRfq} />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage onOpenRfq={handleOpenRfq} />} />
          </Routes>
        </main>

        {/* Universal Technical Footer */}
        <Footer onOpenRfq={() => handleOpenRfq()} />

        {/* Floating Quick Action Triggers (WhatsApp, RFQ, Scroll Top) */}
        <FloatingActions onOpenRfq={() => handleOpenRfq()} />

        {/* Global RFQ Modal */}
        <RFQModal 
          isOpen={rfqOpen}
          onClose={handleCloseRfq}
          initialEquipment={selectedProductForRfq}
        />
      </div>
    </BrowserRouter>
  );
}
