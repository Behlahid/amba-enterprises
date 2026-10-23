import React from 'react';
import { CLIENT_SECTORS, INSTALLATION_CASE_STUDIES } from '../data/websiteData';
import { MapPin, Building, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export default function InstallationGallery({ onOpenRfq }) {
  return (
    <section id="installations" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            PROVEN TRACK RECORD ACROSS INDIA
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Plant Installations & Client Field Performance
          </h2>
          <p style={{ fontSize: '1.0625rem' }}>
            Over 500+ successful installations across leading process industries in Maharashtra, Gujarat, and pan-India manufacturing corridors.
          </p>
        </div>

        {/* Industrial Client Sectors */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem'
        }}>
          {CLIENT_SECTORS.map((sec, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--color-canvas)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'border-color 0.2s ease, transform 0.2s ease'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                margin: '0 auto 1rem auto',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Building size={22} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.375rem', color: 'var(--color-graphite)' }}>
                {sec.name}
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.4 }}>
                {sec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Plant Case Studies */}
        <h3 style={{ fontSize: '1.375rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Documented Field Installations
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {INSTALLATION_CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="machined-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#F1F5F9', position: 'relative' }}>
                <img 
                  src={study.image} 
                  alt={study.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/assets/general/instl-commisioning.jpg'; }}
                />
                <span className="badge badge-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  {study.sector}
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-slate)', fontSize: '0.8125rem', marginBottom: '0.5rem' }}>
                  <MapPin size={14} color="var(--color-secondary)" /> {study.location}
                </div>
                <h4 style={{ fontSize: '1.1875rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                  {study.title}
                </h4>
                <div style={{
                  backgroundColor: '#F8FAFC',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '1rem',
                  color: 'var(--color-graphite)'
                }}>
                  {study.specs}
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-success)' }}>
                  <CheckCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--color-graphite)' }}>{study.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Certifications & Approvals Strip */}
        <div style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
            REGULATORY CONFORMANCE & STANDARDS
          </span>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>
            International Quality & Safety Certifications
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>ISO 9001:2015</div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Quality Management System</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>BVQI Approved</div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Bureau Veritas Certification</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>IBR 1950</div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Indian Boiler Regulations</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>DVGW & VDE</div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>European Gas & Electrical Safety</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
