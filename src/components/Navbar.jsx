import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  Phone, MessageCircle, MapPin, Award, Menu, X, ArrowRight, 
  ShieldCheck, ChevronDown, Flame, Layers, Thermometer, Wind, Wrench, Download 
} from 'lucide-react';

export default function Navbar({ onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close mega menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={navRef} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* 1. Top Utility Header */}
      <div style={{
        backgroundColor: '#0A0F1D',
        color: '#94A3B8',
        fontSize: '0.75rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.45rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          {/* Top Left Credentials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#E2E8F0' }}>
              <MapPin size={13} style={{ color: 'var(--color-secondary)' }} />
              Station Plaza, C-130, Bhandup (W), Mumbai - 400078
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#CBD5E1' }}>
              <Award size={13} style={{ color: 'var(--color-secondary)' }} />
              Est. 1992 | Former IAEC Senior Thermal Engineers
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#34D399' }}>
              <ShieldCheck size={13} />
              ISO 9001:2015 & IBR Certified
            </span>
          </div>

          {/* Top Right Direct Contact Hotlines */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href="tel:+912225960000" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#E2E8F0', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = '#E2E8F0'}
            >
              <Phone size={13} style={{ color: 'var(--color-secondary)' }} />
              <span className="mono">+91 22 2596 0000</span>
            </a>
            <a 
              href="https://wa.me/919820000000?text=Hello%20Amba%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20industrial%20boilers%20and%20burners." 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#25D366', fontWeight: 600, textDecoration: 'none' }}
            >
              <MessageCircle size={13} />
              WhatsApp Priority Dispatch
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Corporate Header */}
      <header style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #DDE2EB',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        position: 'relative'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          {/* Official Brand Logo */}
          <Link to="/" onClick={() => setMegaMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/assets/logo/Web-amba-Logo.fw.png" 
              alt="Amba Enterprises" 
              style={{ 
                height: '46px', 
                width: 'auto', 
                objectFit: 'contain',
                display: 'block'
              }}
              onError={(e) => { 
                e.target.src = '/assets/logo/logo.png'; 
              }} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <Link 
              to="/" 
              className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
              style={{ textDecoration: 'none', color: location.pathname === '/' ? 'var(--color-primary)' : 'var(--color-graphite)', fontWeight: 600, fontSize: '0.9375rem' }}
            >
              Home
            </Link>

            {/* Products & Machinery Dropdown Trigger */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setMegaMenuOpen(true)}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: location.pathname.startsWith('/products') || megaMenuOpen ? 'var(--color-primary)' : 'var(--color-graphite)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  padding: '0.5rem 0'
                }}
              >
                <span>Machinery & Products</span>
                <ChevronDown 
                  size={14} 
                  style={{ 
                    transition: 'transform 0.2s ease',
                    transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
            </div>

            <Link 
              to="/energy-conservation" 
              className={`nav-item ${location.pathname === '/energy-conservation' ? 'active' : ''}`}
              style={{ textDecoration: 'none', color: location.pathname === '/energy-conservation' ? 'var(--color-primary)' : 'var(--color-graphite)', fontWeight: 600, fontSize: '0.9375rem' }}
            >
              Energy Hub & Calculator
            </Link>

            <Link 
              to="/installations" 
              className={`nav-item ${location.pathname === '/installations' ? 'active' : ''}`}
              style={{ textDecoration: 'none', color: location.pathname === '/installations' ? 'var(--color-primary)' : 'var(--color-graphite)', fontWeight: 600, fontSize: '0.9375rem' }}
            >
              Plant Installations
            </Link>

            <Link 
              to="/about" 
              className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
              style={{ textDecoration: 'none', color: location.pathname === '/about' ? 'var(--color-primary)' : 'var(--color-graphite)', fontWeight: 600, fontSize: '0.9375rem' }}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
              style={{ textDecoration: 'none', color: location.pathname === '/contact' ? 'var(--color-primary)' : 'var(--color-graphite)', fontWeight: 600, fontSize: '0.9375rem' }}
            >
              Contact
            </Link>

            {/* Request a Quote CTA */}
            <button 
              onClick={() => { setMegaMenuOpen(false); onOpenRfq(); }} 
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.625rem 1.25rem', whiteSpace: 'nowrap' }}
            >
              Request a Quote <ArrowRight size={14} />
            </button>
          </nav>

          {/* Mobile Menu Hamburger Toggle */}
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

        {/* 3. Full-Width Industrial Mega-Menu Overlay */}
        {megaMenuOpen && (
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderTop: '2px solid var(--color-primary)',
              borderBottom: '3px solid var(--color-secondary)',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
              zIndex: 9999,
              padding: '2rem 0'
            }}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="container">
              {/* Header inside Mega-Menu */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="badge badge-primary">COMPLETE EQUIPMENT SPECTRUM</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>Explore technical specifications, capacity ratings, and certified literature</span>
                </div>
                <button 
                  onClick={() => setMegaMenuOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-slate)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}
                >
                  <X size={14} /> Close Menu
                </button>
              </div>

              {/* 5-Column Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1.25rem',
                marginBottom: '1.75rem'
              }}>
                {/* Column 1: Industrial Burners */}
                <Link 
                  to="/products/burners" 
                  onClick={() => setMegaMenuOpen(false)}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                    <Flame size={24} />
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-primary)', margin: '0 0 0.25rem 0' }}>Industrial Burners</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    Monobloc & Duobloc for Gas, Oil, and Dual Fuel (15 kW - 25 MW).
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    View Burner Models &rarr;
                  </span>
                </Link>

                {/* Column 2: Steam Boilers */}
                <Link 
                  to="/products/boilers" 
                  onClick={() => setMegaMenuOpen(false)}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    <Layers size={24} />
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-primary)', margin: '0 0 0.25rem 0' }}>Steam Boilers</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    IBR 3-Pass Wetback Solid Fuel & Oil/Gas, plus Non-IBR Coils.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    View Boiler Specs &rarr;
                  </span>
                </Link>

                {/* Column 3: Thermic Fluid Heaters */}
                <Link 
                  to="/products/thermic-fluid" 
                  onClick={() => setMegaMenuOpen(false)}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                    <Thermometer size={24} />
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-primary)', margin: '0 0 0.25rem 0' }}>Thermic Fluid Heaters</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    Process heating up to 300°C without pressure hazards.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    Explore Coils & Pumps &rarr;
                  </span>
                </Link>

                {/* Column 4: Hot Air & Water */}
                <Link 
                  to="/products/hot-air-water" 
                  onClick={() => setMegaMenuOpen(false)}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    <Wind size={24} />
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-primary)', margin: '0 0 0.25rem 0' }}>Hot Air & Water</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    Clean indirect air for pharma spray dryers & CETIK ISI hot water.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    View Generator Ratings &rarr;
                  </span>
                </Link>

                {/* Column 5: Genuine Spares & HP Pumps */}
                <Link 
                  to="/products/spare-parts" 
                  onClick={() => setMegaMenuOpen(false)}
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                    <Wrench size={24} />
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-primary)', margin: '0 0 0.25rem 0' }}>Genuine Spares</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    German HP Technik pumps, servomotors, electrodes & Aderco additives.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                    Browse Spares List &rarr;
                  </span>
                </Link>
              </div>

              {/* Bottom Strip of Mega-Menu */}
              <div style={{
                borderTop: '1px solid #E2E8F0',
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
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}
                >
                  <Download size={14} /> Download Master Engineering Catalog (PDF)
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 4. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FFFFFF',
            borderBottom: '2px solid var(--color-primary)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'var(--color-graphite)' }}>Home</Link>
            <div style={{ fontWeight: 700, color: 'var(--color-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.375rem' }}>
              Products & Machinery:
            </div>
            <Link to="/products/burners" onClick={() => setMobileMenuOpen(false)} style={{ paddingLeft: '1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-slate)' }}>• Industrial Burners (15 kW - 25 MW)</Link>
            <Link to="/products/boilers" onClick={() => setMobileMenuOpen(false)} style={{ paddingLeft: '1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-slate)' }}>• Steam Boilers (IBR & Non-IBR)</Link>
            <Link to="/products/thermic-fluid" onClick={() => setMobileMenuOpen(false)} style={{ paddingLeft: '1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-slate)' }}>• Thermic Fluid Heaters (Up to 300°C)</Link>
            <Link to="/products/hot-air-water" onClick={() => setMobileMenuOpen(false)} style={{ paddingLeft: '1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-slate)' }}>• Hot Air & Water Generators</Link>
            <Link to="/products/spare-parts" onClick={() => setMobileMenuOpen(false)} style={{ paddingLeft: '1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-slate)' }}>• Genuine Boiler Spares & HP Pumps</Link>
            <Link to="/energy-conservation" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'var(--color-graphite)' }}>Energy Hub & Calculator</Link>
            <Link to="/installations" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'var(--color-graphite)' }}>Plant Installations</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'var(--color-graphite)' }}>About & IAEC Heritage</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'var(--color-graphite)' }}>Contact Mumbai Office</Link>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRfq(); }} 
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
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
