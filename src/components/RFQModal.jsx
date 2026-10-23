import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/websiteData';

export default function RFQModal({ isOpen, onClose, initialEquipment = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipment: initialEquipment || 'Industrial Burners',
    fuel: 'Natural Gas',
    capacity: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialEquipment) {
      setFormData(prev => ({ ...prev, equipment: initialEquipment }));
    }
  }, [initialEquipment]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--color-slate)'
          }}
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-secondary" style={{ marginBottom: '0.375rem' }}>
                REQUEST FOR ENGINEERING QUOTATION (RFQ)
              </span>
              <h3 style={{ fontSize: '1.625rem', color: 'var(--color-primary)' }}>
                Equipment Specification & Pricing Request
              </h3>
              <p style={{ fontSize: '0.875rem', margin: 0 }}>
                Our senior thermal application engineers will review your plant parameters and respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Plant Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Textiles Ltd."
                    className="form-control"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Equipment Category</label>
                  <select
                    className="form-control"
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                  >
                    {PRODUCT_CATEGORIES.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Burner Tune-up & AMC">Burner Tune-up & AMC Contract</option>
                    <option value="Combustion Audit">Flue Gas Efficiency Audit</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Fuel / Energy Medium</label>
                  <select
                    className="form-control"
                    value={formData.fuel}
                    onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
                  >
                    <option value="Natural Gas / PNG">Natural Gas / PNG / LPG</option>
                    <option value="Light Diesel Oil (LDO)">Light Diesel Oil (LDO / HSD)</option>
                    <option value="Heavy Furnace Oil">Furnace Oil / LSHS</option>
                    <option value="Dual Fuel (Oil/Gas)">Dual Fuel Combination (Oil + Gas)</option>
                    <option value="Solid Fuel / Biomass">Solid Biomass / Wood / Coal</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Target Capacity / Operating Pressure</label>
                <input
                  type="text"
                  placeholder="e.g. 3 TPH @ 10.5 kg/cm², 1,500 kW, 500,000 kcal/hr"
                  className="form-control"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Details / Process Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Describe your plant process, existing boiler model, or replacement timeline..."
                  className="form-control"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                  <ShieldCheck size={16} color="var(--color-primary)" /> Protected by 256-bit SSL & Google reCAPTCHA
                </div>
                <button type="submit" className="btn btn-secondary">
                  Submit Engineering RFQ <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              RFQ Successfully Submitted!
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate)', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
              Thank you, <strong>{formData.name}</strong>. An Amba application engineer will review your specifications for <strong>{formData.equipment}</strong> and provide a detailed quotation.
            </p>

            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', marginBottom: '0.25rem' }}>Immediate Technical Urgent Query?</div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+912225960000" className="btn btn-outline btn-sm">
                  <Phone size={14} /> Call Mumbai Office
                </a>
                <a 
                  href={`https://wa.me/919820000000?text=Hi%20Amba%20Enterprises,%20I%20just%20submitted%20an%20RFQ%20for%20${encodeURIComponent(formData.equipment)}%20(${encodeURIComponent(formData.company)}).`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-sm"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                >
                  <MessageCircle size={14} /> Instant WhatsApp
                </a>
              </div>
            </div>

            <button onClick={resetAndClose} className="btn btn-primary">
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
