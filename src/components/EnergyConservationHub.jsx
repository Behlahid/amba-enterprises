import React, { useState } from 'react';
import { ENERGY_CONSERVATION_METRICS } from '../data/websiteData';
import { Gauge, TrendingDown, Cpu, Flame, Calculator, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function EnergyConservationHub({ onOpenRfq }) {
  // Interactive Calculator State
  const [fuelType, setFuelType] = useState('Furnace Oil');
  const [monthlySpend, setMonthlySpend] = useState(1500000); // 15 Lakhs INR
  const [efficiencyGain, setEfficiencyGain] = useState(5); // 5% savings

  const annualSpend = monthlySpend * 12;
  const annualSavings = annualSpend * (efficiencyGain / 100);
  const co2ReductionTons = Math.round((annualSavings / 100000) * 18.5); // Approx metric ton estimate based on industrial fuel mix

  return (
    <section id="energy" className="section" style={{ backgroundColor: '#0B132B', color: 'var(--color-white)', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
            THERMODYNAMIC ENGINEERING & EFFICIENCY
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--color-white)', marginBottom: '1.25rem' }}>
            Industrial Combustion Tuning & Energy Conservation
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.0625rem' }}>
            In typical industrial plant operations, fuel accounts for over <strong>75% of life-cycle boiler costs</strong>. Our combustion engineers eliminate thermodynamic losses through precision digital modulation and flue-gas optimization.
          </p>
        </div>

        {/* 4 Technical Parameter Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4.5rem'
        }}>
          {ENERGY_CONSERVATION_METRICS.map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#1C2541',
              border: '1px solid #3A506B',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}>
              <div style={{
                color: 'var(--color-secondary)',
                fontSize: '1.25rem',
                fontWeight: 800,
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}>
                {item.metric}
              </div>
              <h3 style={{ fontSize: '1.125rem', color: 'var(--color-white)', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '1rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
              <div style={{
                backgroundColor: 'rgba(11, 19, 43, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-xs)',
                padding: '0.5rem 0.75rem',
                fontSize: '0.75rem',
                color: '#38BDF8',
                fontFamily: 'var(--font-mono)'
              }}>
                {item.formula}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: Mechanical Linkage vs Direct Digital Combustion */}
        <div style={{
          backgroundColor: '#1E293B',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '2.5rem',
          marginBottom: '4.5rem'
        }}>
          <h3 style={{ fontSize: '1.375rem', color: 'var(--color-white)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Technology Benchmark: Traditional Mechanical Cam vs. Microprocessor Digital Combustion
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {/* Legacy Column */}
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F87171', fontWeight: 700, marginBottom: '1rem' }}>
                <ShieldAlert size={18} /> Legacy Mechanical Linkage System
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>❌ Single drive motor controlling air & fuel via rods and cam profiles</li>
                <li>❌ Mechanical backlash, wear-and-tear, and hysteresis over time</li>
                <li>❌ Cannot compensate for ambient air temperature or humidity shifts</li>
                <li>❌ Requires wide excess air safety margin (5-8% O2), wasting costly fuel</li>
                <li>❌ High purge heat loss during low-load cycling</li>
              </ul>
            </div>

            {/* Amba Direct Digital Column */}
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34D399', fontWeight: 700, marginBottom: '1rem' }}>
                <CheckCircle2 size={18} /> Amba Direct Digital Combustion Control
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>✅ Dedicated digital servo actuators on air damper & fuel control valve</li>
                <li>✅ 0.1° positioning accuracy with zero mechanical hysteresis</li>
                <li>✅ Integrated continuous O2 trim and real-time flue gas temperature feedback</li>
                <li>✅ Operates safely at optimal excess air (2.5 - 3.2% O2), reducing stack losses</li>
                <li>✅ 1:10 Turndown modulation eliminates unnecessary purge cycling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Plant Energy & Cost Savings Calculator */}
        <div id="calculator" style={{
          backgroundColor: '#111827',
          border: '2px solid var(--color-secondary)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              backgroundColor: 'rgba(228, 97, 37, 0.2)',
              color: 'var(--color-secondary)',
              padding: '0.625rem',
              borderRadius: 'var(--radius-sm)'
            }}>
              <Calculator size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-white)', margin: 0 }}>
                Interactive Plant Fuel Savings Calculator
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', margin: 0 }}>
                Estimate financial return on investment (ROI) from an Amba combustion retrofit
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Input Controls */}
            <div>
              <div className="form-group">
                <label className="form-label" style={{ color: '#E5E7EB' }}>Primary Plant Fuel</label>
                <select 
                  className="form-control"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  style={{ backgroundColor: '#1F2937', color: '#FFFFFF', borderColor: '#374151' }}
                >
                  <option value="Furnace Oil">Heavy Fuel Oil / Furnace Oil (FO)</option>
                  <option value="Light Diesel Oil">Light Diesel Oil (LDO) / HSD</option>
                  <option value="Natural Gas">Piped Natural Gas (PNG) / LNG</option>
                  <option value="Biomass Briquettes">Solid Biomass Briquettes / Wood</option>
                </select>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                  <label className="form-label" style={{ color: '#E5E7EB', margin: 0 }}>Estimated Monthly Fuel Expenditure</label>
                  <span className="mono" style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>
                    ₹ {(monthlySpend / 100000).toFixed(1)} Lakhs / mo
                  </span>
                </div>
                <input 
                  type="range"
                  min="300000"
                  max="10000000"
                  step="100000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-secondary)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6B7280', marginTop: '0.25rem' }}>
                  <span>₹ 3 Lakhs</span>
                  <span>₹ 50 Lakhs</span>
                  <span>₹ 1 Crore+</span>
                </div>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                  <label className="form-label" style={{ color: '#E5E7EB', margin: 0 }}>Expected Efficiency Gain</label>
                  <span className="mono" style={{ color: '#38BDF8', fontWeight: 700 }}>
                    {efficiencyGain}% Savings
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[3, 5, 8, 12].map((gain) => (
                    <button
                      key={gain}
                      type="button"
                      onClick={() => setEfficiencyGain(gain)}
                      style={{
                        flex: 1,
                        padding: '0.625rem',
                        fontSize: '0.8125rem',
                        fontFamily: 'var(--font-mono)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        border: efficiencyGain === gain ? '1px solid var(--color-secondary)' : '1px solid #374151',
                        backgroundColor: efficiencyGain === gain ? 'var(--color-secondary)' : '#1F2937',
                        color: '#FFFFFF',
                        fontWeight: 600
                      }}
                    >
                      {gain}%
                    </button>
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block', marginTop: '0.375rem' }}>
                  *Standard burner tune-up yields 3-5%; digital servo retrofit yields 6-12%.
                </span>
              </div>
            </div>

            {/* Calculation Output Card */}
            <div style={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.8125rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Projected Annual Financial Savings
              </span>
              <div style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: '#34D399',
                margin: '0.75rem 0',
                fontFamily: 'var(--font-display)'
              }}>
                ₹ {(annualSavings / 100000).toFixed(2)} <span style={{ fontSize: '1.25rem', color: '#E5E7EB' }}>Lakhs / year</span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                margin: '1.5rem 0',
                paddingTop: '1.25rem',
                borderTop: '1px solid #374151'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Monthly Cash Savings</div>
                  <div className="mono" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-white)' }}>
                    ₹ {Math.round(annualSavings / 12).toLocaleString('en-IN')}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>CO2 Emission Cut</div>
                  <div className="mono" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#38BDF8' }}>
                    ~{co2ReductionTons} Metric Tons
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onOpenRfq(`Combustion Audit for ${fuelType} (Est. ${efficiencyGain}% savings)`)}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Schedule On-Site Boiler Efficiency Audit <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
