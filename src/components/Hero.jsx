import React, { useState } from 'react';
import { ArrowRight, Flame, Shield, CheckCircle2, Search, Download, Settings, Gauge } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/websiteData';

export default function Hero({ onOpenRfq, onSelectCategory }) {
  const [selectedType, setSelectedType] = useState('burners');
  const [selectedFuel, setSelectedFuel] = useState('Gas');
  const [capacitySearch, setCapacitySearch] = useState('');

  const handleFinderSubmit = (e) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(selectedType);
    }
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      backgroundColor: '#0F172A',
      backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(32, 49, 127, 0.45) 0%, rgba(15, 23, 42, 0.95) 70%), url("/assets/general/servicing-image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
      color: 'var(--color-white)',
      paddingTop: '4.5rem',
      paddingBottom: '5.5rem',
      position: 'relative',
      borderBottom: '4px solid var(--color-secondary)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.95fr)',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Hero Left Content */}
          <div>
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span className="badge badge-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                <Flame size={13} /> Thermal Engineering Excellence Since 1992
              </span>
              <span className="badge badge-dark">
                Authorized Partner: Termo ISI & Oertli
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.025em'
            }}>
              Heavy-Duty Industrial Boilers & <span style={{ color: 'var(--color-secondary)' }}>Precision Combustion</span> Systems
            </h1>

            <p style={{
              fontSize: '1.125rem',
              color: '#CBD5E1',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '620px'
            }}>
              Engineering turnkey steam boilers, high-turndown industrial burners, and energy-conservation retrofits across India. Founded by former IAEC senior engineers with over three decades of verified industrial performance.
            </p>

            {/* Key Value Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '2.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-white)', fontFamily: 'var(--font-display)' }}>30+</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-secondary)', fontFamily: 'var(--font-display)' }}>500+</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Plant Installations</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-display)' }}>10-15%</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Fuel Savings Tested</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenRfq} className="btn btn-secondary btn-lg">
                Request Engineering Quote <ArrowRight size={18} />
              </button>
              <a href="/assets/catalogs/Catlogue1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                <Download size={18} /> Download Master Catalog
              </a>
            </div>
          </div>

          {/* Hero Right: Quick Equipment Specification Selector */}
          <div style={{
            backgroundColor: '#1E293B',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '2.25rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <div style={{
                  background: 'rgba(228, 97, 37, 0.15)',
                  color: 'var(--color-secondary)',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <Gauge size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-white)', margin: 0 }}>Equipment Specification Finder</h3>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Match equipment to your plant capacity</span>
                </div>
              </div>
              <span className="badge badge-dark">OEM SPEC</span>
            </div>

            <form onSubmit={handleFinderSubmit}>
              <div className="form-group">
                <label className="form-label" style={{ color: '#E2E8F0' }}>1. Select Equipment Class</label>
                <select 
                  className="form-control"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  style={{ backgroundColor: '#0F172A', color: '#FFFFFF', borderColor: '#334155' }}
                >
                  <option value="burners">Industrial Burners (Monobloc & Duobloc)</option>
                  <option value="boilers">Steam Boilers (IBR & Non-IBR Packages)</option>
                  <option value="heaters">Thermic Fluid Heaters (Up to 300°C)</option>
                  <option value="generators">Hot Air & Water Generators (HWG R1-R7)</option>
                  <option value="spares">Genuine Spares & HP Technik Pumps</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: '#E2E8F0' }}>2. Fuel / Energy Source</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {['Natural Gas / LPG', 'Light Oil (HSD/LDO)', 'Heavy Oil (FO/LSHS)', 'Solid Fuel / Biomass'].map((fuel) => (
                    <button
                      key={fuel}
                      type="button"
                      onClick={() => setSelectedFuel(fuel)}
                      style={{
                        padding: '0.625rem 0.5rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        textAlign: 'center',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        border: selectedFuel === fuel ? '1px solid var(--color-secondary)' : '1px solid #334155',
                        backgroundColor: selectedFuel === fuel ? 'rgba(228, 97, 37, 0.2)' : '#0F172A',
                        color: selectedFuel === fuel ? '#FFA97A' : '#94A3B8'
                      }}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: '#E2E8F0' }}>3. Target Capacity / Rating</label>
                <input 
                  type="text" 
                  placeholder="e.g. 500 kW, 3 TPH, 1,000,000 kcal/hr"
                  value={capacitySearch}
                  onChange={(e) => setCapacitySearch(e.target.value)}
                  className="form-control"
                  style={{ backgroundColor: '#0F172A', color: '#FFFFFF', borderColor: '#334155' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Search size={16} /> View Matching Equipment Models
              </button>
            </form>

            {/* Micro trust indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.75rem',
              color: '#94A3B8'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCircle2 size={13} color="#10B981" /> Full IBR Compliance
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCircle2 size={13} color="#10B981" /> German & Swiss Tie-ups
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCircle2 size={13} color="#10B981" /> 24/7 AMC Support
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          section > .container > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
