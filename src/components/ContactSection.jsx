import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);

  const handleQuickContact = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
            GET IN TOUCH WITH OUR APPLICATION TEAM
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Headquarters & Engineering Inquiries
          </h2>
          <p style={{ fontSize: '1.0625rem' }}>
            Contact our Mumbai technical office for equipment sizing, boiler replacement assessments, or 24/7 emergency combustion servicing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Details & Office Card */}
          <div>
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                Mumbai Registered Office & Works
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--color-white)', padding: '0.625rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-secondary)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-graphite)' }}>Physical Address</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.5 }}>
                      Station Plaza, C-130, Bhandup Station Rd, Bhandup (W), Mumbai, Maharashtra 400078, India
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--color-white)', padding: '0.625rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-graphite)' }}>Direct Telephone Lines</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>
                      +91 22 2596 0000 / +91 98200 00000
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-light)' }}>Mon - Sat: 9:00 AM - 6:30 PM IST</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--color-white)', padding: '0.625rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-graphite)' }}>Technical Sales & AMC Email</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>
                      sales@ambaenterprises.com
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--color-white)', padding: '0.625rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: '#25D366' }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-graphite)' }}>Direct WhatsApp Dispatch</div>
                    <a 
                      href="https://wa.me/919820000000" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ fontSize: '0.875rem', color: '#16A34A', fontWeight: 600 }}
                    >
                      Click to chat with on-duty technician &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Callout */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1px solid #FCA5A5',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ fontWeight: 800, color: '#DC2626', fontSize: '1.25rem' }}>24/7</div>
              <div>
                <div style={{ fontWeight: 700, color: '#991B1B', fontSize: '0.875rem' }}>Boiler Breakdown Emergency Response</div>
                <div style={{ fontSize: '0.75rem', color: '#B91C1C' }}>Priority dispatch for active AMC and continuous process clients</div>
              </div>
            </div>
          </div>

          {/* Quick Direct Message Form */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              Send an Instant Inquiry
            </h3>

            {!formSent ? (
              <form onSubmit={handleQuickContact}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input type="text" required placeholder="Full Name" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Number or WhatsApp *</label>
                  <input type="tel" required placeholder="+91 ..." className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Plant Location / City</label>
                  <input type="text" placeholder="e.g. Mumbai, Thane, Pune, Surat, Vapi" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">How can our engineers assist you?</label>
                  <textarea rows="4" required placeholder="Inquire about boiler capacity, burner replacement, AMC, spare parts, etc." className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={16} /> Send Message to Sales Desk
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={48} color="var(--color-success)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Message Dispatched!</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
                  Your inquiry has been routed to our technical desk in Bhandup, Mumbai. An engineer will call or WhatsApp you shortly.
                </p>
                <button onClick={() => setFormSent(false)} className="btn btn-outline btn-sm">
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
