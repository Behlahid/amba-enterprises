import React from 'react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/websiteData';
import { Download, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenRfq, onSelectCategory }) {
  return (
    <footer style={{ backgroundColor: '#0A0F1D', color: '#94A3B8', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand & Legacy Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src="/assets/logo/logo.png" 
                alt="Amba Enterprises Logo" 
                style={{ height: '48px', objectFit: 'contain' }}
                onError={(e) => { e.target.src = '/assets/logo/Amba-Logo.jpg'; }}
              />
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-white)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                  AMBA ENTERPRISES
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-secondary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  Thermal Combustion Engineers
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#94A3B8' }}>
              Founded in 1992 by former IAEC engineers. India’s premier authorized specialists for industrial boilers, high-turndown burners, and turnkey thermal energy conservation.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-dark" style={{ fontSize: '0.6875rem' }}>ISO 9001:2015</span>
              <span className="badge badge-dark" style={{ fontSize: '0.6875rem' }}>IBR Certified</span>
              <span className="badge badge-dark" style={{ fontSize: '0.6875rem' }}>BVQI Approved</span>
            </div>
          </div>

          {/* Equipment Lines */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Equipment Lines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              {PRODUCT_CATEGORIES.map((p) => (
                <li key={p.id}>
                  <a 
                    href="#products" 
                    onClick={() => onSelectCategory(p.id)}
                    style={{ color: '#CBD5E1', transition: 'color 0.15s ease' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--color-secondary)'}
                    onMouseOut={(e) => e.target.style.color = '#CBD5E1'}
                  >
                    {p.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#energy" 
                  style={{ color: '#CBD5E1' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-secondary)'}
                  onMouseOut={(e) => e.target.style.color = '#CBD5E1'}
                >
                  Digital Combustion Retrofits
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Literature Downloads */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technical Catalogs (PDF)
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li>
                <a href="/assets/catalogs/Catlogue1.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#CBD5E1' }}>
                  <Download size={14} color="var(--color-secondary)" /> Industrial Burners Catalog
                </a>
              </li>
              <li>
                <a href="/assets/catalogs/Catlogue2.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#CBD5E1' }}>
                  <Download size={14} color="var(--color-secondary)" /> Steam Boilers Brochure
                </a>
              </li>
              <li>
                <a href="/assets/catalogs/Catlogue5_compressed.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#CBD5E1' }}>
                  <Download size={14} color="var(--color-secondary)" /> Thermic Fluid Heaters
                </a>
              </li>
              <li>
                <a href="/assets/catalogs/Industrial HAG.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#CBD5E1' }}>
                  <Download size={14} color="var(--color-secondary)" /> Hot Air Generators (HAG)
                </a>
              </li>
              <li>
                <a href="/assets/catalogs/Catloge6.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#CBD5E1' }}>
                  <Download size={14} color="var(--color-secondary)" /> Boiler Spares & HP Pumps
                </a>
              </li>
            </ul>
          </div>

          {/* Mumbai Registered Office */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Head Office Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Station Plaza, C-130, Bhandup Station Rd, Bhandup (W), Mumbai, MH 400078</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--color-secondary)" />
                <span>+91 22 2596 0000 / +91 98200 00000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--color-secondary)" />
                <span>sales@ambaenterprises.com</span>
              </div>
              <button 
                onClick={onOpenRfq} 
                className="btn btn-secondary btn-sm" 
                style={{ marginTop: '0.5rem' }}
              >
                Request Quotation (RFQ)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem'
        }}>
          <div>
            © 1992 - 2026 <strong>Amba Enterprises</strong>. All rights reserved. Registered under Indian Boiler Regulations (IBR).
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Mumbai Technical Works</span>
            <span>Tarapur & Vapi Service Desks</span>
            <span style={{ color: '#64748B' }}>Engineered for Industrial Reliability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
