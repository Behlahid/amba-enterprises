import React from 'react';
import ContactSection from '../components/ContactSection';
import { COMPANY_INFO } from '../data/websiteData';
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="contact-page" style={{ paddingTop: '2rem', paddingBottom: '5rem', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Contact & Engineering Works</span>
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
              MUMBAI REGISTERED OFFICE & TECHNICAL WORKS
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Contact Amba Enterprises
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Connect with our technical application desk in Bhandup, Mumbai for boiler replacements, burner retrofits, annual maintenance contracts (AMC), or emergency spares.
            </p>
          </div>
        </div>

        {/* Contact Section Component */}
        <ContactSection />

        {/* Regional Industrial Hubs Strip */}
        <div style={{
          marginTop: '3.5rem',
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1.25rem', textAlign: 'center' }}>
            Regional Technician Desks & Industrial Corridor Coverage
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {COMPANY_INFO.serviceHubs.map((hub, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <MapPin size={18} color="var(--color-secondary)" style={{ margin: '0 auto 0.5rem auto' }} />
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-graphite)' }}>{hub}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)', marginTop: '0.25rem' }}>Full Sales & AMC Dispatch</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
