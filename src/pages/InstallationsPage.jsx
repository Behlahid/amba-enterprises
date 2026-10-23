import React, { useState } from 'react';
import { DETAILED_INSTALLATIONS, CLIENT_SECTORS } from '../data/websiteData';
import { MapPin, Building, ShieldCheck, CheckCircle, ArrowRight, ChevronRight, Filter } from 'lucide-react';

export default function InstallationsPage({ onOpenRfq }) {
  const [filterCat, setFilterCat] = useState('All');

  const categories = ['All', 'Boilers', 'Burners', 'Heaters', 'Generators'];

  const filteredItems = filterCat === 'All' 
    ? DETAILED_INSTALLATIONS 
    : DETAILED_INSTALLATIONS.filter(item => item.category === filterCat);

  return (
    <div className="installations-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Plant Installations & Case Studies</span>
        </div>

        {/* Hero Banner */}
        <div style={{
          backgroundColor: '#0F172A',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem',
          backgroundImage: 'radial-gradient(circle at 85% 30%, rgba(32, 49, 127, 0.4) 0%, transparent 60%)',
          borderBottom: '4px solid var(--color-secondary)',
          marginBottom: '3rem'
        }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
              OVER 500+ COMMISSIONED INDUSTRIAL PLANTS
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Plant Installations & Verified Client Deployments
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Explore real-world turnkey installations across leading process industries in Tarapur, Taloja, Vapi, Ankleshwar, and pan-India manufacturing hubs.
            </p>
            <button onClick={() => onOpenRfq('Turnkey Boiler/Burner Installation')} className="btn btn-secondary">
              Schedule Site Feasibility Study <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Filter size={16} /> Filter by System:
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilterCat(c)}
                className={`btn btn-sm ${filterCat === c ? 'btn-primary' : 'btn-outline'}`}
              >
                {c === 'All' ? 'All Installations' : c}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Installation Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {filteredItems.map((item, idx) => (
            <div key={idx} className="machined-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '240px', backgroundColor: '#F1F5F9', position: 'relative' }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/assets/general/instl-commisioning.jpg'; }}
                />
                <span className="badge badge-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  {item.category}
                </span>
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-slate)', fontSize: '0.8125rem', marginBottom: '0.5rem' }}>
                  <MapPin size={14} color="var(--color-secondary)" /> {item.location}
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.375rem' }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  Client Profile: {item.client}
                </div>

                <div style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-graphite)',
                  marginBottom: '1rem'
                }}>
                  {item.specs}
                </div>

                <div style={{
                  backgroundColor: 'rgba(24, 121, 78, 0.08)',
                  border: '1px solid rgba(24, 121, 78, 0.2)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--color-success)',
                  marginBottom: '1.5rem'
                }}>
                  <CheckCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--color-graphite)' }}>{item.savings}</span>
                </div>

                <button 
                  onClick={() => onOpenRfq(`Inquiry about reference plant: ${item.title}`)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
                >
                  Request Plant Reference Data &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Sectors Strip */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            Serving Diverse Continuous-Process Industries Across India
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {CLIENT_SECTORS.map((sec, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: 'var(--radius-sm)', textAlign: 'center', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-graphite)', marginBottom: '0.25rem' }}>{sec.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>{sec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
