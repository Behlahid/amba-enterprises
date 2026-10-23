import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/websiteData';
import { Download, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenRfq }) {
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
            <div style={{ marginBottom: '1.25rem' }}>
              <Link to="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
                <img 
                  src="/assets/logo/amba-logo-dark.svg" 
                  alt="Amba Enterprises" 
                  style={{ height: '46px', width: 'auto', display: 'block' }}
                  onError={(e) => { e.target.src = '/assets/logo/amba-logo.svg'; }}
                />
              </Link>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#94A3B8' }}>
              Founded in 1992 by former IAEC engineers. India’s premier authorized specialists for industrial boilers, high-turndown burners, and turnkey thermal energy conservation.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-dark" style={{ fontSize: '0.6875rem' }}>ISO 9001:2015</span>
              <span className="badge badge-dark" style={{ fontSize: '0.6875rem' }}>IBR 1950 Certified</span>
              <span className="badge badge-dark" style={{ fontSize: '0.6875rem' }}>BVQI & DVGW Approved</span>
            </div>
          </div>

          {/* Machinery Navigation Links */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Machinery & Equipment
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li>
                <Link to="/products/burners" style={{ color: '#CBD5E1' }}>• Industrial Burners (15 kW - 25 MW)</Link>
              </li>
              <li>
                <Link to="/products/boilers" style={{ color: '#CBD5E1' }}>• Steam Boilers (IBR & Non-IBR)</Link>
              </li>
              <li>
                <Link to="/products/thermic-fluid" style={{ color: '#CBD5E1' }}>• Thermic Fluid Heaters (Up to 300°C)</Link>
              </li>
              <li>
                <Link to="/products/hot-air-water" style={{ color: '#CBD5E1' }}>• Hot Air & Water Generators</Link>
              </li>
              <li>
                <Link to="/products/spare-parts" style={{ color: '#CBD5E1' }}>• Genuine Spares & HP Technik Pumps</Link>
              </li>
              <li>
                <Link to="/energy-conservation" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>• Fuel Savings & Combustion Hub</Link>
              </li>
            </ul>
          </div>

          {/* Certified PDF Catalogs */}
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

          {/* Mumbai Registered Office & Action */}
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
            © 1992 - 2026 <strong>Amba Enterprises</strong>. All rights reserved. Registered under Indian Boiler Regulations (IBR 1950).
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
