import React from 'react';
import AboutSection from '../components/AboutSection';
import { COMPANY_INFO } from '../data/websiteData';
import { Award, ShieldCheck, Globe, Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ onOpenRfq }) {
  return (
    <div className="about-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Amba Enterprises</span>
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
              FOUNDED IN 1992 • OVER 30 YEARS OF COMBUSTION MASTERY
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              About Amba Enterprises
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Headquartered in Bhandup (W), Mumbai. Building on the rich engineering foundation of IAEC India Ltd. to deliver world-class boilers, precision combustion systems, and verifiable fuel conservation.
            </p>
          </div>
        </div>

        {/* Core Narrative Component */}
        <AboutSection />

        {/* Quality Management & Certifications Strip */}
        <div style={{
          marginTop: '3.5rem',
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>TOTAL QUALITY MANAGEMENT</span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Quality Assurance & Statutory Conformance
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate)' }}>
              Rigorous non-destructive testing, hydrostatic vessel verification, and ISO 9001 certified operational workflows across every engineering deployment.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>ISO 9001:2015</div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                Fully certified Quality Management System governing design, procurement, fabrication, and after-sales servicing protocols.
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>BVQI & DVGW Approved</div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                Bureau Veritas audited manufacturing standards and European DVGW gas safety certification on all imported burner lines.
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Indian Boiler Regulations (IBR)</div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                All pressure vessel welding, tube rolling, and materials traceability are certified under the Indian Boiler Act 1950.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
