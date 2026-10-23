import React, { useState } from 'react';
import { BOILER_SERIES } from '../data/websiteData';
import { Layers, Download, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Gauge, FileText } from 'lucide-react';

export default function BoilersPage({ onOpenRfq }) {
  const [activeBoiler, setActiveBoiler] = useState(BOILER_SERIES[0]);

  return (
    <div className="boilers-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Steam Boilers (IBR & Non-IBR)</span>
        </div>

        {/* Hero Banner (Hi-Therm & Energy Pack Benchmark) */}
        <div style={{
          backgroundColor: '#0F172A',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem',
          backgroundImage: 'radial-gradient(circle at 85% 30%, rgba(32, 49, 127, 0.4) 0%, transparent 60%)',
          borderBottom: '4px solid var(--color-primary)',
          marginBottom: '3rem'
        }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }}>
              FULLY COMPLIANT WITH IBR 1950 & AMENDMENTS
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Industrial Packaged Steam Boilers
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Three-pass fully wetback horizontal shell boilers engineered for high steam dryness, low stack temperatures, and long refractory life. Capacities ranging from 100 kg/hr up to 25 TPH.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenRfq('Steam Boilers')} className="btn btn-secondary">
                Request Boiler Sizing & Proposal <ArrowRight size={16} />
              </button>
              <a href="/assets/catalogs/Catlogue2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                <Download size={16} /> Download Boilers Brochure (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Boiler Categories Selection Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {BOILER_SERIES.map((b) => (
            <div 
              key={b.id}
              onClick={() => setActiveBoiler(b)}
              style={{
                backgroundColor: activeBoiler.id === b.id ? 'var(--color-primary)' : 'var(--color-white)',
                color: activeBoiler.id === b.id ? 'var(--color-white)' : 'var(--color-graphite)',
                border: activeBoiler.id === b.id ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge" style={{
                  backgroundColor: activeBoiler.id === b.id ? 'rgba(255, 255, 255, 0.2)' : 'var(--color-primary-light)',
                  color: activeBoiler.id === b.id ? '#FFFFFF' : 'var(--color-primary)',
                  fontSize: '0.6875rem'
                }}>
                  {b.efficiency}
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', color: activeBoiler.id === b.id ? '#E2E8F0' : 'var(--color-slate)' }}>
                  {b.designPressure}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1875rem', margin: '0 0 0.375rem 0', color: activeBoiler.id === b.id ? '#FFFFFF' : 'var(--color-primary)' }}>
                {b.name}
              </h3>
              <div className="mono" style={{ fontSize: '0.8125rem', color: activeBoiler.id === b.id ? '#FFA97A' : 'var(--color-secondary)', fontWeight: 600 }}>
                Capacity: {b.capacityRange}
              </div>
            </div>
          ))}
        </div>

        {/* Active Boiler Showcase Card */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            {/* Left Image & Actions */}
            <div>
              <div style={{
                height: '320px',
                backgroundColor: '#F8FAFC',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <img 
                  src={activeBoiler.image} 
                  alt={activeBoiler.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = '/assets/products/IBR Boiler.jpg'; }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a 
                  href={activeBoiler.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <Download size={14} /> Catalog (PDF)
                </a>
                <button 
                  onClick={() => onOpenRfq(activeBoiler.name)}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  Request Sizing Quote <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Information */}
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
                {activeBoiler.type}
              </span>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                {activeBoiler.name}
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontSize: '0.8125rem'
              }}>
                <div><span style={{ color: 'var(--color-slate)' }}>Capacity Range:</span> <strong className="mono">{activeBoiler.capacityRange}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Operating Pressure:</span> <strong className="mono">{activeBoiler.designPressure}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Thermal Efficiency:</span> <strong className="mono" style={{ color: 'var(--color-success)' }}>{activeBoiler.efficiency}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Fuel Types:</span> <strong>{activeBoiler.fuel}</strong></div>
              </div>

              <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Key Engineering & Mechanical Highlights:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                {activeBoiler.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deep Engineering Parameters Table (Energy Pack Benchmark) */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', margin: 0 }}>
                  Technical Performance & Consumption Table
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                  Authoritative engineering design ratings based on 100°C feed water temperature
                </span>
              </div>
              <span className="badge badge-dark">AUTHORITATIVE DATA</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Model Code</th>
                    <th>Rated Steam Output</th>
                    <th>Heat Output</th>
                    <th>Key Fuel Parameter</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeBoiler.specs.map((sp, idx) => (
                    <tr key={idx}>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                        {sp.model}
                      </td>
                      <td className="mono" style={{ fontWeight: 600 }}>
                        {sp.steamOutput}
                      </td>
                      <td className="mono">
                        {sp.heatOutput || sp.startUpTime || 'Standard'}
                      </td>
                      <td className="mono">
                        {sp.fuelConsBriquette ? `Briquettes: ${sp.fuelConsBriquette}` : sp.oilCons ? `Oil: ${sp.oilCons} / Gas: ${sp.gasCons}` : sp.powerReq}
                      </td>
                      <td>
                        <button 
                          onClick={() => onOpenRfq(`${activeBoiler.name} - ${sp.model}`)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.25rem 0.625rem', fontSize: '0.75rem' }}
                        >
                          RFQ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Regulatory & Statutory Compliance Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>INDIAN BOILER REGULATIONS</span>
            <h3 style={{ fontSize: '1.375rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
              IBR Certification & Statutory Inspections
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-slate)', margin: 0 }}>
              All Amba IBR boilers are fabricated using SA 516 Grade 70 boiler quality steel plates, welded by certified IBR welders, 100% radiographed, stress relieved, and hydraulically pressure tested in the presence of Directorate of Steam Boilers inspectors.
            </p>
          </div>

          <div style={{
            backgroundColor: '#F8FAFC',
            padding: '1.5rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)'
          }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-graphite)', marginBottom: '0.5rem' }}>
              Non-IBR Exemption Advantage:
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', lineHeight: 1.5, marginBottom: '1rem' }}>
              For process plants requiring steam under 600 kg/hr with limited floor space, our <strong>Non-IBR coil generators</strong> require zero government registration, no annual shutdown inspections, and no certified boiler attendant on payroll.
            </p>
            <button onClick={() => onOpenRfq('Non-IBR Coil Steam Generator')} className="btn btn-outline btn-sm">
              Inquire About Non-IBR Units &rarr;
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .boilers-page div[style*="grid-template-columns: minmax(0, 1.2fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
