import React, { useState } from 'react';
import { BURNER_SERIES } from '../data/websiteData';
import { Flame, Download, ArrowRight, Gauge, CheckCircle2, ChevronRight, Sliders, Shield } from 'lucide-react';

export default function BurnersPage({ onOpenRfq }) {
  const [activeSeries, setActiveSeries] = useState(BURNER_SERIES[0]);
  const [selectedModel, setSelectedModel] = useState(BURNER_SERIES[0].models[0]);

  const handleSeriesChange = (series) => {
    setActiveSeries(series);
    setSelectedModel(series.models[0]);
  };

  return (
    <div className="burners-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Industrial Burners</span>
        </div>

        {/* Page Hero */}
        <div style={{
          backgroundColor: '#0F172A',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem',
          backgroundImage: 'radial-gradient(circle at 85% 30%, rgba(228, 97, 37, 0.25) 0%, transparent 60%)',
          borderBottom: '4px solid var(--color-secondary)',
          marginBottom: '3rem'
        }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
              TERMO ISI & OERTLI AUTHORIZED PARTNERS
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Industrial Burners & Precision Combustion Systems
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              From compact monobloc package burners to massive 25 MW duobloc firing stations. Engineered for Natural Gas, LPG, Light Diesel Oil, Heavy Furnace Oil, and Dual Fuel combinations with turndown ratios up to 1:10.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenRfq('Industrial Burners')} className="btn btn-secondary">
                Request Burner Sizing & Quote <ArrowRight size={16} />
              </button>
              <a href="/assets/catalogs/Catlogue1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                <Download size={16} /> Download Burners Catalog (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Series Selection Tabs (Oxilon Benchmark) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {BURNER_SERIES.map((s) => (
            <div 
              key={s.id}
              onClick={() => handleSeriesChange(s)}
              style={{
                backgroundColor: activeSeries.id === s.id ? 'var(--color-primary)' : 'var(--color-white)',
                color: activeSeries.id === s.id ? 'var(--color-white)' : 'var(--color-graphite)',
                border: activeSeries.id === s.id ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge" style={{
                  backgroundColor: activeSeries.id === s.id ? 'rgba(255, 255, 255, 0.2)' : 'var(--color-primary-light)',
                  color: activeSeries.id === s.id ? '#FFFFFF' : 'var(--color-primary)',
                  fontSize: '0.6875rem'
                }}>
                  {s.category}
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', color: activeSeries.id === s.id ? '#E2E8F0' : 'var(--color-slate)' }}>
                  {s.turndown}
                </span>
              </div>
              <h3 style={{ fontSize: '1.0625rem', margin: '0 0 0.25rem 0', color: activeSeries.id === s.id ? '#FFFFFF' : 'var(--color-primary)' }}>
                {s.name}
              </h3>
              <div className="mono" style={{ fontSize: '0.8125rem', color: activeSeries.id === s.id ? '#FFA97A' : 'var(--color-secondary)', fontWeight: 600 }}>
                {s.capacityKw}
              </div>
            </div>
          ))}
        </div>

        {/* Active Series Deep Dive Display */}
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
            {/* Left: Product Image & Badges */}
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
                  src={activeSeries.image} 
                  alt={activeSeries.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = '/assets/products/GasBurners.jpg'; }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a 
                  href={activeSeries.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <Download size={14} /> Series Datasheet (PDF)
                </a>
                <button 
                  onClick={() => onOpenRfq(activeSeries.name)}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  Quote Series <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Technical Features & Overview */}
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>TECHNICAL PROFILE</span>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                {activeSeries.name}
              </h2>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                <div><span style={{ color: 'var(--color-slate)' }}>Thermal Capacity:</span> <strong className="mono">{activeSeries.capacityKw}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Turndown Ratio:</span> <strong className="mono" style={{ color: 'var(--color-secondary)' }}>{activeSeries.turndown}</strong></div>
              </div>

              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontSize: '0.875rem'
              }}>
                <div style={{ fontWeight: 700, color: 'var(--color-slate)', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  Fuel Specifications:
                </div>
                <div>{activeSeries.fuel}</div>
              </div>

              <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Engineering Advantages & Hardware:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                {activeSeries.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Model Sizing & Firing Curve Matrix (Narayan Burners Inspiration) */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', margin: 0 }}>
                  Standard Model Configuration Matrix & Dimensions
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                  Click any model row to view detailed firing envelope and flange schematics
                </span>
              </div>
              <span className="badge badge-primary">MODULAR DESIGN</span>
            </div>

            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Model Code</th>
                    <th>Firing Range (kW)</th>
                    <th>Fuel Consumption</th>
                    <th>Connection / Flange</th>
                    <th>Blast Tube Dia.</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {activeSeries.models.map((m) => (
                    <tr 
                      key={m.code}
                      onClick={() => setSelectedModel(m)}
                      style={{ 
                        cursor: 'pointer',
                        backgroundColor: selectedModel?.code === m.code ? '#EEF2FF' : 'inherit'
                      }}
                    >
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                        {m.code}
                      </td>
                      <td className="mono" style={{ fontWeight: 600 }}>
                        {m.minKw} - {m.maxKw} kW
                      </td>
                      <td className="mono">
                        {m.maxGas ? `${m.minGas} - ${m.maxGas} SCM/h` : m.maxOil ? `${m.minOil} - ${m.maxOil} kg/h` : m.gasCons || 'On Spec'}
                      </td>
                      <td>
                        {m.connection || m.pumpPress || m.airFanPower || 'Standard'}
                      </td>
                      <td className="mono">
                        {m.blastTubeDia ? `Ø ${m.blastTubeDia} mm` : m.nozzleQty || m.fanPressure || 'OEM Flange'}
                      </td>
                      <td>
                        <button 
                          onClick={(e) => { e.stopPropagation(); onOpenRfq(`${activeSeries.name} - ${m.code}`); }}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.25rem 0.625rem', fontSize: '0.75rem' }}
                        >
                          Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Selected Model Interactive Firing Envelope Card */}
            {selectedModel && (
              <div style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}>
                <div>
                  <span className="badge badge-secondary" style={{ marginBottom: '0.25rem' }}>ACTIVE MODEL SELECTION</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                    Model: {selectedModel.code}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>
                    Maximum continuous thermal firing rate: <strong>{selectedModel.maxKw} kW</strong> (~{Math.round(selectedModel.maxKw * 860).toLocaleString()} kcal/hr).
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={() => onOpenRfq(`${activeSeries.name} - Model ${selectedModel.code}`)}
                    className="btn btn-secondary"
                  >
                    Request Official Quotation for {selectedModel.code} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Global Combustion Engineering Compliance */}
        <div style={{
          backgroundColor: '#0F172A',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.125rem', marginBottom: '0.5rem' }}>European Testing Standards</h4>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', margin: 0 }}>
              Gas burners comply fully with EN 676; oil burners comply with EN 267 and CE safety pressure directives.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Sub-60 mg/Nm³ Low-NOx Firing</h4>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', margin: 0 }}>
              Internal flue gas recirculation and stage combustion nozzles reduce thermal NOx formation to meet stringent pollution board norms.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Complete Gas Train Assemblies</h4>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', margin: 0 }}>
              Supplied with Dungs / Kromschroder / Madas safety shutoff valves, gas filters, pressure regulators, and gas leak detector units.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .burners-page .machined-card > div,
          .burners-page div[style*="grid-template-columns: minmax(0, 1.2fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
