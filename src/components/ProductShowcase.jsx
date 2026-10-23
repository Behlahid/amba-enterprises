import React, { useState } from 'react';
import { PRODUCT_CATEGORIES } from '../data/websiteData';
import { Download, FileText, Check, ArrowRight, Gauge, Layers, Info } from 'lucide-react';

export default function ProductShowcase({ activeCategory, onSelectCategory, onOpenRfq }) {
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const filteredCategories = activeCategory === 'all' 
    ? PRODUCT_CATEGORIES 
    : PRODUCT_CATEGORIES.filter(p => p.id === activeCategory);

  return (
    <section id="products" className="section" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            ENGINEERED MACHINERY CATALOG
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Heavy-Duty Industrial Heating & Combustion Systems
          </h2>
          <p style={{ fontSize: '1.0625rem' }}>
            Every unit is manufactured and tested under strict ISO 9001 quality guidelines and Indian Boiler Regulations (IBR) with imported burner and pump configurations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => onSelectCategory('all')}
            className={`btn btn-sm ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All Equipment Categories ({PRODUCT_CATEGORIES.length})
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredCategories.map((product) => (
            <div key={product.id} className="machined-card" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Product Card Image Container */}
              <div style={{
                height: '240px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '1rem',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    e.target.src = '/assets/general/heating-solution.png';
                  }}
                />
                <span className="badge badge-dark" style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  {product.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.375rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem', flexGrow: 1 }}>
                {product.shortDesc}
              </p>

              {/* Key Parameter Tags */}
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.875rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--color-slate)', fontWeight: 600 }}>Capacity Rating:</span>
                  <span className="mono" style={{ fontWeight: 600, color: 'var(--color-graphite)' }}>{product.range}</span>
                </div>
                {product.pressure && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem', fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--color-slate)', fontWeight: 600 }}>Operating Pressure:</span>
                    <span className="mono" style={{ fontWeight: 600, color: 'var(--color-graphite)' }}>{product.pressure}</span>
                  </div>
                )}
                {product.temperature && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem', fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--color-slate)', fontWeight: 600 }}>Fluid Temperature:</span>
                    <span className="mono" style={{ fontWeight: 600, color: 'var(--color-graphite)' }}>{product.temperature}</span>
                  </div>
                )}
                {product.turndown && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--color-slate)', fontWeight: 600 }}>Turndown Ratio:</span>
                    <span className="mono" style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>{product.turndown}</span>
                  </div>
                )}
              </div>

              {/* Compatible Fuel Chips */}
              {product.fuelTypes && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 700, marginBottom: '0.375rem' }}>
                    Fuel Compatibility:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {product.fuelTypes.map((fuel) => (
                      <span key={fuel} className="badge badge-primary" style={{ fontSize: '0.6875rem' }}>
                        {fuel}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Actions */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border)'
              }}>
                <button 
                  onClick={() => setSelectedProductModal(product)}
                  className="btn btn-outline btn-sm"
                >
                  <FileText size={14} /> Spec Matrix
                </button>
                <button 
                  onClick={() => onOpenRfq(product.name)}
                  className="btn btn-secondary btn-sm"
                >
                  Quote RFQ <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical PDF Catalogs Banner */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div>
            <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>DOWNLOADABLE ASSETS</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Engineering Product Literature & Dimensional Schematics</h3>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>Access verified manufacturer catalogs, wiring diagrams, and combustion curves.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="/assets/catalogs/Catlogue1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Download size={15} /> Burners Catalog (PDF)
            </a>
            <a href="/assets/catalogs/Catlogue2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Download size={15} /> Steam Boilers Catalog (PDF)
            </a>
            <a href="/assets/catalogs/Catlogue5_compressed.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Download size={15} /> Thermic Fluid Heaters (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Deep-Dive Technical Spec Matrix Modal */}
      {selectedProductModal && (
        <div className="modal-overlay" onClick={() => setSelectedProductModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '0.375rem' }}>{selectedProductModal.category} SPECIFICATION</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{selectedProductModal.name}</h3>
                <p style={{ fontSize: '0.875rem', margin: 0 }}>Model parameters, thermal capacities, and available literature</p>
              </div>
              <button 
                onClick={() => setSelectedProductModal(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-slate)' }}
              >
                &times;
              </button>
            </div>

            {/* Models Table */}
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Standard Model Configurations
            </h4>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Model Code</th>
                    <th>Configuration Name</th>
                    <th>Rated Capacity</th>
                    <th>Fuel / Type</th>
                    <th>Datasheet</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProductModal.models.map((m) => (
                    <tr key={m.code}>
                      <td className="mono" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{m.code}</td>
                      <td>{m.name}</td>
                      <td className="mono" style={{ fontWeight: 600 }}>{m.capacity || m.type}</td>
                      <td>
                        <span className="badge badge-secondary" style={{ fontSize: '0.6875rem' }}>
                          {m.fuel || m.origin || 'Standard'}
                        </span>
                      </td>
                      <td>
                        {m.pdf ? (
                          <a href={m.pdf} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600, fontSize: '0.8125rem' }}>
                            <Download size={13} /> PDF
                          </a>
                        ) : (
                          <span style={{ color: 'var(--color-slate)', fontSize: '0.75rem' }}>On Request</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Engineering Highlights */}
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Engineering Features & Compliance
            </h4>
            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
              {selectedProductModal.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <Check size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={() => setSelectedProductModal(null)} className="btn btn-outline">
                Close
              </button>
              <button 
                onClick={() => {
                  const name = selectedProductModal.name;
                  setSelectedProductModal(null);
                  onOpenRfq(name);
                }} 
                className="btn btn-secondary"
              >
                Inquire About {selectedProductModal.name} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
