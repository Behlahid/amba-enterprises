import React from 'react';
import { HOT_AIR_WATER_SERIES } from '../data/websiteData';
import { Wind, Thermometer, Download, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export default function HotAirWaterPage({ onOpenRfq }) {
  const { hotAir, hotWater } = HOT_AIR_WATER_SERIES;

  return (
    <div className="hot-air-water-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Hot Air & Water Generators</span>
        </div>

        {/* Hero Banner */}
        <div style={{
          backgroundColor: '#0F172A',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem',
          backgroundImage: 'radial-gradient(circle at 85% 30%, rgba(32, 49, 127, 0.4) 0%, transparent 60%)',
          borderBottom: '4px solid var(--color-primary)',
          marginBottom: '3.5rem'
        }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }}>
              DIRECT & INDIRECT CLEAN PROCESS AIR
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Hot Air & Hot Water Generators
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Engineered for pharmaceutical fluid bed dryers, food spray drying, and commercial laundries. Includes authorized dealer solutions from CETIK ISI (Turkey) for high-capacity hot water systems.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenRfq('Hot Air & Water Systems')} className="btn btn-secondary">
                Request Generator Sizing <ArrowRight size={16} />
              </button>
              <a href={hotAir.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                <Download size={16} /> Download HAG Catalog (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Hot Air Generators */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                height: '300px',
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
                  src={hotAir.image} 
                  alt={hotAir.name}
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = '/assets/products/industrial-hot-air-generator.webp'; }}
                />
              </div>
              <button 
                onClick={() => onOpenRfq(hotAir.name)} 
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Inquire About Hot Air Generators <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>DRYING & PROCESS HEATING</span>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                {hotAir.name}
              </h2>
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                marginBottom: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                fontSize: '0.8125rem'
              }}>
                <div><span style={{ color: 'var(--color-slate)' }}>Thermal Output:</span> <strong className="mono">{hotAir.capacity}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Air Temperature:</span> <strong className="mono" style={{ color: 'var(--color-secondary)' }}>{hotAir.tempRange}</strong></div>
                <div style={{ gridColumn: 'span 2' }}><span style={{ color: 'var(--color-slate)' }}>Key Applications:</span> <strong>{hotAir.applications}</strong></div>
              </div>

              <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Engineering Advantages:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                {hotAir.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: CETIK ISI Hot Water Generators */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.8fr)',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                height: '300px',
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
                  src={hotWater.image} 
                  alt={hotWater.name}
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = '/assets/products/hot-water-generator.jpg'; }}
                />
              </div>
              <button 
                onClick={() => onOpenRfq(hotWater.name)} 
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Inquire About HWG Hot Water Series <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>AUTHORIZED DEALER: CETIK ISI</span>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                {hotWater.name}
              </h2>
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                marginBottom: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                fontSize: '0.8125rem'
              }}>
                <div><span style={{ color: 'var(--color-slate)' }}>Capacity Range:</span> <strong className="mono">{hotWater.capacity}</strong></div>
                <div><span style={{ color: 'var(--color-slate)' }}>Water Temperature:</span> <strong className="mono" style={{ color: 'var(--color-secondary)' }}>{hotWater.tempRange}</strong></div>
                <div style={{ gridColumn: 'span 2' }}><span style={{ color: 'var(--color-slate)' }}>Target Industries:</span> <strong>{hotWater.applications}</strong></div>
              </div>

              <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Design Specifications:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                {hotWater.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hot-air-water-page div[style*="grid-template-columns: minmax(0, 1.2fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
