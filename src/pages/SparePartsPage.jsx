import React, { useState } from 'react';
import { SPARES_CATALOG } from '../data/websiteData';
import { Wrench, Download, ArrowRight, Search, ShieldCheck, ChevronRight, Check } from 'lucide-react';

export default function SparePartsPage({ onOpenRfq }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', ...new Set(SPARES_CATALOG.map(s => s.category))];

  const filteredSpares = SPARES_CATALOG.filter(sp => {
    const matchCat = activeCat === 'All' || sp.category === activeCat;
    const matchSearch = sp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        sp.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        sp.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="spares-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Genuine Spares & Accessories</span>
        </div>

        {/* Hero Banner */}
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
              DIRECT EUROPEAN IMPORT & CERTIFIED OEM SPARES
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Boiler & Burner Replacement Spares
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Exclusive authorized channel partners for <strong>HP Technik (Germany)</strong> fuel pumps. Immediate inventory of European servomotors, ignition systems, nozzles, and Aderco fuel additives with same-day dispatch.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenRfq('Genuine Spare Parts')} className="btn btn-secondary">
                Request Spares Quotation <ArrowRight size={16} />
              </button>
              <a href="/assets/catalogs/Catloge6.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                <Download size={16} /> Download Spares Catalog (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`btn btn-sm ${activeCat === c ? 'btn-primary' : 'btn-outline'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--color-slate)' }} />
            <input 
              type="text"
              placeholder="Search by part number, brand, or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '2.25rem' }}
            />
          </div>
        </div>

        {/* Spares Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {filteredSpares.map((sp, idx) => (
            <div key={idx} className="machined-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                height: '200px',
                backgroundColor: '#F8FAFC',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                marginBottom: '1.25rem',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
              }}>
                <img 
                  src={sp.image} 
                  alt={sp.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = '/assets/products/SpareParts-new.jpg'; }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
                  Part #: {sp.partNumber}
                </span>
                <span className="badge badge-primary" style={{ fontSize: '0.6875rem' }}>
                  {sp.origin}
                </span>
              </div>

              <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-primary)', marginBottom: '0.375rem' }}>
                {sp.name}
              </h3>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '0.75rem' }}>
                Manufacturer: {sp.brand}
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.5, marginBottom: '1.5rem', flexGrow: 1 }}>
                {sp.desc}
              </p>

              <button 
                onClick={() => onOpenRfq(`Spare Part Quote: ${sp.name} (${sp.partNumber})`)}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Inquire Price & Stock Availability <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Authorized Brands Strip */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--color-slate)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
            Authorized European & Global Component Partners
          </h4>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)' }}>HP TECHNIK (Germany)</div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)' }}>LANDIS & GYR / SIEMENS</div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)' }}>SATRONIC (Switzerland)</div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)' }}>PETERCEM (France)</div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)' }}>ADERCO (Belgium)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
