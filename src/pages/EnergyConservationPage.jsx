import React from 'react';
import EnergyConservationHub from '../components/EnergyConservationHub';
import { ENERGY_PAPERS } from '../data/websiteData';
import { Gauge, TrendingDown, ArrowRight, CheckCircle2, ChevronRight, FileText, Zap } from 'lucide-react';

export default function EnergyConservationPage({ onOpenRfq }) {
  return (
    <div className="energy-page" style={{ backgroundColor: 'var(--color-canvas)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#0B132B', color: 'var(--color-white)', paddingTop: '2.5rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
            <span>Home</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>Energy Conservation Engineering</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Hub (Includes Calculator) */}
      <EnergyConservationHub onOpenRfq={onOpenRfq} />

      {/* Deep Engineering Whitepapers */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
              THERMODYNAMICS & COMBUSTION KNOWLEDGE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
              Authoritative Combustion Engineering Principles
            </h2>
            <p style={{ fontSize: '1.0625rem' }}>
              Authored by senior thermal engineers. Understanding how stoichiometric tuning, digital micro-modulation, and sensible flue enthalpy capture translate to millions in annual fuel savings.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}>
            {ENERGY_PAPERS.map((paper) => (
              <div key={paper.id} className="machined-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="badge badge-secondary" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                  {paper.badge}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  {paper.title}
                </h3>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '1rem' }}>
                  {paper.summary}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {paper.content}
                </p>
                <button 
                  onClick={() => onOpenRfq(`Combustion Audit Consultation regarding ${paper.title}`)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Consult an Engineer on this Principle &rarr;
                </button>
              </div>
            ))}
          </div>

          {/* Before vs After Servicing Case Study Card */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '2px solid var(--color-primary)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>DOCUMENTED FIELD AUDIT</span>
              <h3 style={{ fontSize: '1.375rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                Before & After Servicing Efficiency Case Report
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.6, margin: 0 }}>
                A 10 TPH furnace-oil boiler in a Thane chemical complex was operating with 6.8% excess O2 and 240°C flue gas temperature, achieving only 76.5% thermal efficiency. Following an Amba digital combustion tune-up and burner tip overhaul, excess O2 was locked at 2.8% and stack temp dropped to 185°C.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Thermal Efficiency Jump:
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-success)', fontFamily: 'var(--font-display)', marginBottom: '0.25rem' }}>
                76.5% &rarr; 84.8%
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Result: ₹ 28.4 Lakhs Annual Net Fuel Savings
              </div>
              <button 
                onClick={() => onOpenRfq('On-Site Boiler Efficiency Audit Request')}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1.25rem' }}
              >
                Book Your Plant Combustion Audit <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
