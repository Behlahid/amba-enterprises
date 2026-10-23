import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import EnergyConservationHub from './components/EnergyConservationHub';
import InstallationGallery from './components/InstallationGallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';

export default function App() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedProductForRfq, setSelectedProductForRfq] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleOpenRfq = (productName = '') => {
    setSelectedProductForRfq(productName);
    setRfqOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqOpen(false);
    setSelectedProductForRfq('');
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="amba-app">
      {/* Navigation */}
      <Navbar onOpenRfq={() => handleOpenRfq()} />

      {/* Hero with Equipment Quick-Finder */}
      <Hero 
        onOpenRfq={() => handleOpenRfq()} 
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Product Showcase & Spec Matrices */}
      <ProductShowcase 
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onOpenRfq={handleOpenRfq}
      />

      {/* Energy Conservation Knowledge & Interactive Calculator */}
      <EnergyConservationHub 
        onOpenRfq={handleOpenRfq}
      />

      {/* Plant Installations & Industry Case Studies */}
      <InstallationGallery 
        onOpenRfq={handleOpenRfq}
      />

      {/* About Us & Global Engineering Partnerships */}
      <AboutSection />

      {/* Contact & Mumbai Headquarters Location */}
      <ContactSection />

      {/* Technical Literature Footer */}
      <Footer 
        onOpenRfq={() => handleOpenRfq()} 
        onSelectCategory={handleSelectCategory}
      />

      {/* Interactive RFQ Modal */}
      <RFQModal 
        isOpen={rfqOpen}
        onClose={handleCloseRfq}
        initialEquipment={selectedProductForRfq}
      />
    </div>
  );
}
