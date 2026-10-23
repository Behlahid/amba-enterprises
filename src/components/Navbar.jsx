import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  Phone, MessageCircle, MapPin, Award, Menu, X, ArrowRight, 
  ShieldCheck, ChevronDown, Flame, Layers, Thermometer, Wind, Wrench, Download 
} from 'lucide-react';

export default function Navbar({ onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  const closeAll = () => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Header */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} style={{ color: 'var(--color-secondary)' }} />
              Station Plaza, C-130, Bhandup (W), Mumbai - 400078
            </span>
            <span className="top-bar-item">
              <Award size={13} style={{ color: 'var(--color-secondary)' }} />
              Est. 1992 | Former IAEC Senior Thermal Engineers
            </span>
            <span className="top-bar-item">
              <ShieldCheck size={13} style={{ color: '#10B981' }} />
              ISO 9001:2015 & IBR 1950 Certified
            </span>
          </div>

          <div className="top-bar-right">
            <a href="tel:+912225960000" className="top-bar-item">
              <Phone size={13} />
              +91 22 2596 0000 / +91 98200 00000
            </a>
            <a 
              href="https://wa.me/919820000000?text=Hello%20Amba%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20industrial%20boilers%20and%20burners." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-item"
              style={{ color: '#25D366', fontWeight: 600 }}
            >
              <MessageCircle size={13} />
              WhatsApp Priority Dispatch
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header className="navbar" onMouseLeave={() => setMegaMenuOpen(false)}>
        <div className="container">
          {/* Logo Brand */}
          <Link to="/" onClick={closeAll} className="nav-brand">
            <img 
              src="/assets/logo/logo.png" 
              alt="Amba Enterprises Logo" 
              onError={(e) => { e.target.src = '/assets/logo/Amba-Logo.jpg'; }} 
            />
            <div className="brand-text">
              <h1>AMBA ENTERPRISES</h1>
              <span>Thermal & Combustion Engineering • Mumbai</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>

              {/* Products Mega-Menu Trigger */}
              <li 
                onMouseEnter={() => setMegaMenuOpen(true)}
                style={{ position: 'relative' }}
              >
                <span 
                  className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  Machinery & Products <ChevronDown size={14} />
                </span>
              </li>

              <li>
                <Link to="/energy-conservation" className={`nav-link ${location.pathname === '/energy-conservation' ? 'active' : ''}`}>
                  Energy Conservation Hub
                </Link>
              </li>

              <li>
                <Link to="/installations" className={`nav-link ${location.pathname === '/installations' ? 'active' : ''}`}>
                  Plant Installations
                </Link>
              </li>

              <li>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>

              <li>
                <button 
                  onClick={() => { closeAll(); onOpenRfq(); }} 
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

        {/* Industrial Mega-Menu Dropdown */}
        {megaMenuOpen && (
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderBottom: '3px solid var(--color-secondary)',
              boxShadow: '0 20px 40px rgba(21, 24, 33, 0.15)',
              zIndex: 999,
              padding: '2rem 0'
            }}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="container">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1.5rem',
                marginBottom: '1.75rem'
              }}>
                {/* 1. Industrial Burners */}
                <Link 
                  to="/products/burners" 
                  onClick={closeAll}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                    <Flame size={24} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Industrial Burners</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0' }}>
                    Monobloc & Duobloc for Gas, Oil, and Dual Fuel (15 kW - 25 MW).
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    View Burner Models &rarr;
                  </span>
                </Link>

                {/* 2. Steam Boilers */}
                <Link 
                  to="/products/boilers" 
                  onClick={closeAll}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    <Layers size={24} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Steam Boilers</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0' }}>
                    IBR 3-Pass Wetback Solid Fuel / Oil-Gas Boilers & Non-IBR Coils.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    View Boiler Specs &rarr;
                  </span>
                </Link>

                {/* 3. Thermic Fluid Heaters */}
                <Link 
                  to="/products/thermic-fluid" 
                  onClick={closeAll}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                    <Thermometer size={24} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Thermic Fluid Heaters</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0' }}>
                    Operating up to 300°C at atmospheric pressure without water treatment.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    Explore Coils & Pumps &rarr;
                  </span>
                </Link>

                {/* 4. Hot Air & Water Generators */}
                <Link 
                  to="/products/hot-air-water" 
                  onClick={closeAll}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    <Wind size={24} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Hot Air & Water</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0' }}>
                    Pharma clean indirect air generators & CETIK ISI hot water series.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    View Generator Ratings &rarr;
                  </span>
                </Link>

                {/* 5. Genuine Spares & HP Technik */}
                <Link 
                  to="/products/spare-parts" 
                  onClick={closeAll}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                    <Wrench size={24} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Genuine Spares</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0' }}>
                    German HP Technik pumps, servomotors, electrodes & Aderco additives.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    Browse Spares List &rarr;
                  </span>
                </Link>
              </div>

              {/* Bottom Strip of Mega-Menu */}
              <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8125rem'
              }}>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-slate)' }}>
                  <span>Authorized Dealers: <strong>TERMO ISI (Turkey)</strong></span>
                  <span><strong>OERTLI (Switzerland)</strong></span>
                  <span><strong>CETIK ISI</strong></span>
                  <span><strong>HP Technik (Germany)</strong></span>
                </div>
                <a 
                  href="/assets/catalogs/Catlogue1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-primary)', fontWeight: 600 }}
                >
                  <Download size={14} /> Download Complete Engineering Catalog (PDF)
                </a>
              </div>
            </div>
          </div>
        )}

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
            <Link to="/" onClick={closeAll} style={{ fontWeight: 600 }}>Home</Link>
            <div style={{ fontWeight: 700, color: 'var(--color-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.375rem' }}>
              Products & Equipment:
            </div>
            <Link to="/products/burners" onClick={closeAll} style={{ paddingLeft: '1rem', fontSize: '0.875rem' }}>• Industrial Burners (15 kW - 25 MW)</Link>
            <Link to="/products/boilers" onClick={closeAll} style={{ paddingLeft: '1rem', fontSize: '0.875rem' }}>• Steam Boilers (IBR & Non-IBR)</Link>
            <Link to="/products/thermic-fluid" onClick={closeAll} style={{ paddingLeft: '1rem', fontSize: '0.875rem' }}>• Thermic Fluid Heaters (Up to 300°C)</Link>
            <Link to="/products/hot-air-water" onClick={closeAll} style={{ paddingLeft: '1rem', fontSize: '0.875rem' }}>• Hot Air & Water Generators</Link>
            <Link to="/products/spare-parts" onClick={closeAll} style={{ paddingLeft: '1rem', fontSize: '0.875rem' }}>• Genuine Boiler Spares & HP Pumps</Link>
            <Link to="/energy-conservation" onClick={closeAll} style={{ fontWeight: 600 }}>Energy Conservation Hub & Calculator</Link>
            <Link to="/installations" onClick={closeAll} style={{ fontWeight: 600 }}>Plant Installations</Link>
            <Link to="/about" onClick={closeAll} style={{ fontWeight: 600 }}>About & IAEC Heritage</Link>
            <Link to="/contact" onClick={closeAll} style={{ fontWeight: 600 }}>Contact Mumbai Office</Link>
            <button 
              onClick={() => { closeAll(); onOpenRfq(); }} 
              className="btn btn-secondary" 
              style={{ width: '100%', marginTop: '0.5rem' }}
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
