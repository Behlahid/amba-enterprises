import React from 'react';
import { THERMIC_FLUID_SERIES } from '../data/websiteData';
import { Thermometer, Download, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Gauge } from 'lucide-react';

export default function ThermicFluidPage({ onOpenRfq }) {
  const data = THERMIC_FLUID_SERIES;

  return (
    <div className="thermic-fluid-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Thermic Fluid Heaters</span>
        </div>

        {/* Hero Banner */}
        <div style={{
          backgroundColor: '#0F172A',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem',
          backgroundImage: 'radial-gradient(circle at 85% 30%, rgba(228, 97, 37, 0.3) 0%, transparent 60%)',
          borderBottom: '4px solid var(--color-secondary)',
          marginBottom: '3rem'
        }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
              HIGH-TEMPERATURE PROCESS HEATING UP TO 300°C
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Industrial Thermic Fluid Heaters
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Delivering high process temperatures up to 300°C in liquid phase under atmospheric operating conditions. Eliminates expensive high-pressure piping, water softening, and condensate blowdown losses.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenRfq('Thermic Fluid Heaters')} className="btn btn-secondary">
                Request Sizing & Quotation <ArrowRight size={16} />
              </button>
              <a href={data.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                <Download size={16} /> Download Brochure (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Product Details Grid */}
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
                  src={data.image} 
                  alt={data.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = '/assets/products/Thermic-Fluid-Heater.png'; }}
                />
              </div>
              <button 
                onClick={() => onOpenRfq(data.name)}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Inquire About Thermic Fluid Heaters <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>CLOSED LOOP LIQUID PHASE</span>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                {data.name}
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Engineered with multi-start concentric helical coils fabricated from ASTM A106 seamless carbon steel pipes. Designed to ensure high fluid velocity and uniform radiant heat transfer, preventing localized film temperature hotspots and thermal oil cracking.
              </p>

              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                fontSize: '0.8125rem'
              }}>
                <div><span style={{ color: 'var(--color-slate)' }}>Capacity Range:</span> <strong className="mono">{data.capacityRange}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Maximum Temp:</span> <strong className="mono" style={{ color: 'var(--color-secondary)' }}>{data.operatingTemp}</strong></div>
                <div style={{ gridColumn: 'span 2' }}><span style={{ color: 'var(--color-slate)' }}>Fuels Supported:</span> <strong>{data.fuels}</strong></div>
              </div>

              <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Safety Interlocks & Engineering Features:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                {data.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Model Matrix Table */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Standard Model Specifications
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Model Code</th>
                    <th>Rated Thermal Output (kcal/hr)</th>
                    <th>Equivalent Power (kW)</th>
                    <th>Fluid Circulation Flow</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.models.map((m) => (
                    <tr key={m.code}>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{m.code}</td>
                      <td className="mono" style={{ fontWeight: 600 }}>{m.kcal}</td>
                      <td className="mono">{m.powerKw}</td>
                      <td className="mono">{m.flowM3}</td>
                      <td>
                        <button 
                          onClick={() => onOpenRfq(`Thermic Fluid Heater - ${m.code}`)}
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

        {/* Industrial Advantages Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Therminol 55 Compatibility</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0 }}>
              Engineered for seamless compatibility with Therminol 55 and standard synthetic thermal fluids. Low degradation rate and zero sludge formation.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.125rem', marginBottom: '0.5rem' }}>HP Technik German Pumping</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0 }}>
              Equipped with German HP Technik heavy-duty pumps with air-cooled mechanical seals, eliminating water cooling requirements.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Zero Pressure Hazard</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0 }}>
              Unlike steam systems requiring 85 bar to reach 300°C, thermal fluid delivers 300°C at under 2 to 3 bar circulating pump pressure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
