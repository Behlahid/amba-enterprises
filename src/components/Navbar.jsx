import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { Phone, MessageCircle, MapPin, Award, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} className="text-secondary" style={{ color: 'var(--color-secondary)' }} />
              Station Plaza, Bhandup (W), Mumbai - 400078
            </span>
            <span className="top-bar-item">
              <Award size={13} style={{ color: 'var(--color-secondary)' }} />
              Est. 1992 | Ex-IAEC Thermal Engineers
            </span>
            <span className="top-bar-item">
              <ShieldCheck size={13} style={{ color: '#10B981' }} />
              ISO 9001:2015 & IBR Certified
            </span>
          </div>

          <div className="top-bar-right">
            <a href="tel:+912225960000" className="top-bar-item">
              <Phone size={13} />
              +91 22 2596 0000
            </a>
            <a 
              href="https://wa.me/919820000000?text=Hello%20Amba%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20industrial%20boilers%20and%20burners." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-item"
              style={{ color: '#25D366', fontWeight: 600 }}
            >
              <MessageCircle size={13} />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="navbar">
        <div className="container">
          <a href="#" className="nav-brand">
            <img src="/assets/logo/logo.png" alt="Amba Enterprises Logo" onError={(e) => { e.target.src = '/assets/logo/Amba-Logo.jpg'; }} />
            <div className="brand-text">
              <h1>AMBA ENTERPRISES</h1>
              <span>Industrial Boilers & Combustion Systems</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              <li><a href="#products" className="nav-link">Products & Equipment</a></li>
              <li><a href="#energy" className="nav-link">Energy Conservation</a></li>
              <li><a href="#calculator" className="nav-link">Savings Calculator</a></li>
              <li><a href="#installations" className="nav-link">Plant Installations</a></li>
              <li><a href="#about" className="nav-link">About Us</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
              <li>
                <button 
                  onClick={onOpenRfq} 
                  className="btn btn-secondary btn-sm"
                  style={{ marginLeft: '0.5rem' }}
                >
                  Request a Quote <ArrowRight size={14} />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'none', 
              border: '1px solid var(--color-border)', 
              borderRadius: 'var(--radius-sm)', 
              padding: '0.5rem', 
              display: 'none',
              cursor: 'pointer'
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--color-white)',
            borderBottom: '2px solid var(--color-primary)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>Products & Equipment</a>
            <a href="#energy" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>Energy Conservation Hub</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>Fuel Savings Calculator</a>
            <a href="#installations" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>Plant Installations</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>About & Partnerships</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>Contact & Location</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRfq(); }} 
              className="btn btn-secondary" 
              style={{ width: '100%' }}
            >
              Request Engineering Quote
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 992px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
