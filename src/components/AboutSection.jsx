import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { Award, ShieldCheck, Globe, Wrench, Clock, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Text Narrative */}
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
              THREE DECADES OF ENGINEERING LEADERSHIP
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.25rem' }}>
              Engineering Foundations & The IAEC Heritage
            </h2>
            <p style={{ fontSize: '1.0625rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              <strong>AMBA ENTERPRISES</strong> was founded in <strong>1992</strong> by <strong>Mr. S. Ganesan</strong>, who brought with him 25 years of extensive, hands-on thermal engineering experience from <strong>IAEC India Ltd., Mumbai</strong> (the pioneer manufacturer of industrial boilers, burners, and heating equipment in India).
            </p>
            <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Originally established to cater to the critical requirements of boilers, burners, baking ovens, genuine spare parts, and after-sales service, Amba Enterprises has grown into a premier thermal engineering house with authorized foreign tie-ups and turnkey capabilities across the subcontinent.
            </p>

            {/* Core Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                  <Award size={16} color="var(--color-secondary)" /> Our Mission
                </div>
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>
                  To deliver high-reliability thermal products incorporating the latest technological advancements, providing verifiable ROI and fuel savings.
                </p>
              </div>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={16} color="var(--color-secondary)" /> Quality Policy
                </div>
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>
                  Strict employee training, ISO compliance, non-destructive weld testing, and zero-compromise spare parts verification.
                </p>
              </div>
            </div>

            {/* Turnkey Services Checklist */}
            <h4 style={{ fontSize: '0.9375rem', textTransform: 'uppercase', color: 'var(--color-slate)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Comprehensive Turnkey Engineering Services:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <CheckCircle2 size={15} color="var(--color-secondary)" /> Annual Maintenance (AMC)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <CheckCircle2 size={15} color="var(--color-secondary)" /> Flue Gas Efficiency Audits
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <CheckCircle2 size={15} color="var(--color-secondary)" /> Plant Erection & Commissioning
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <CheckCircle2 size={15} color="var(--color-secondary)" /> 24/7 Breakdown & Spares
              </span>
            </div>
          </div>

          {/* Right Foreign Tie-Ups & Credentials Grid */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-primary)', borderBottom: '2px solid var(--color-canvas)', paddingBottom: '0.75rem' }}>
              Authorized Global Principals & Partnerships
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {COMPANY_INFO.partners.map((partner, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#F8FAFC',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '0.5rem',
                    color: 'var(--color-secondary)'
                  }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-graphite)' }}>{partner.name}</span>
                      <span className="badge badge-primary" style={{ fontSize: '0.625rem' }}>{partner.origin}</span>
                    </div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>{partner.role}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Callout */}
            <div style={{
              backgroundColor: 'var(--color-primary-light)',
              border: '1px solid rgba(32, 49, 127, 0.2)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9375rem' }}>Headquarters & Technical Works</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>Bhandup (W), Mumbai, Maharashtra 400078</div>
              </div>
              <a href="#contact" className="btn btn-primary btn-sm">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
