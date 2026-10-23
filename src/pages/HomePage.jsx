import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EnergyConservationHub from '../components/EnergyConservationHub';
import InstallationGallery from '../components/InstallationGallery';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import { 
  Flame, Layers, Thermometer, Wind, Wrench, ArrowRight, 
  Download, CheckCircle, ShieldCheck, Gauge 
} from 'lucide-react';

export default function HomePage({ onOpenRfq }) {
  const productPillars = [
    {
      title: "Industrial Burners",
      range: "15 kW - 25,000 kW",
      desc: "Monobloc & Duobloc burners for Gas, Light Oil, Heavy Oil, and Dual-Fuel with turndown ratios up to 1:10.",
      link: "/products/burners",
      image: "/assets/products/Industrial_Burners.jpg",
      icon: <Flame size={20} color="var(--color-secondary)" />
    },
    {
      title: "Steam Boilers (IBR)",
      range: "100 kg/hr - 25 TPH",
      desc: "Three-pass fully wetback solid fuel & oil/gas boilers, plus compact Non-IBR coil steam generators.",
      link: "/products/boilers",
      image: "/assets/products/IBR-Steam-Boiler.jpg",
      icon: <Layers size={20} color="var(--color-primary)" />
    },
    {
      title: "Thermic Fluid Heaters",
      range: "100,000 - 5,000,000 kcal/hr",
      desc: "High-temperature fluid heating up to 300°C without high pressure hazard, equipped with HP Technik pumps.",
      link: "/products/thermic-fluid",
      image: "/assets/products/Thermic-Fluid-Heater.jpg",
      icon: <Thermometer size={20} color="var(--color-secondary)" />
    },
    {
      title: "Hot Air & Water Generators",
      range: "Up to 60 MW / 800°C",
      desc: "Pharma-grade clean indirect hot air for fluid bed dryers, and CETIK ISI high-volume hot water systems.",
      link: "/products/hot-air-water",
      image: "/assets/products/Hot-Air-Generator.jpg",
      icon: <Wind size={20} color="var(--color-primary)" />
    },
    {
      title: "Genuine Spares & HP Pumps",
      range: "Direct European OEM",
      desc: "German HP Technik fuel oil pumps, electronic modulating servo motors, ignition electrodes, and Aderco additives.",
      link: "/products/spare-parts",
      image: "/assets/products/Spare-Parts-Modulating-Mechanism.jpg",
      icon: <Wrench size={20} color="var(--color-secondary)" />
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero onOpenRfq={onOpenRfq} />

      {/* Equipment Spectrum Grid (Oxilon + Hi-Therm Benchmark) */}
      <section className="section" style={{ backgroundColor: 'var(--color-canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
              COMPLETE INDUSTRIAL HEATING SPECTRUM
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem' }}>
              Engineered Machinery Built for Demanding Industrial Plants
            </h2>
            <p style={{ fontSize: '1.0625rem' }}>
              From heavy process steam to sub-millimeter burner combustion tuning, Amba delivers turn-key thermal efficiency with European tie-ups and 30+ years of IAEC engineering experience.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}>
            {productPillars.map((p, idx) => (
              <div key={idx} className="machined-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  height: '180px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  marginBottom: '1.25rem',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem'
                }}>
                  <img 
                    src={p.image} 
                    alt={p.title}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = '/assets/general/heating-solution.png'; }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                  {p.icon}
                  <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-primary)', margin: 0 }}>
                    {p.title}
                  </h3>
                </div>

                <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                  Rating: {p.range}
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.5 }}>
                  {p.desc}
                </p>

                <Link to={p.link} className="btn btn-outline btn-sm" style={{ width: '100%', marginTop: 'auto' }}>
                  View Detailed Specs <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Master PDF Downloads Strip */}
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
              <span className="badge badge-secondary" style={{ marginBottom: '0.375rem' }}>TECHNICAL LIBRARY</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>Download Certified Equipment Literature (PDF)</h3>
              <p style={{ fontSize: '0.875rem', margin: 0 }}>Access verified manufacturer catalogs, wiring diagrams, and combustion curves.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="/assets/catalogs/Catlogue1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <Download size={14} /> Burners Catalog
              </a>
              <a href="/assets/catalogs/Catlogue2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <Download size={14} /> Boilers Catalog
              </a>
              <a href="/assets/catalogs/Catlogue5_compressed.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <Download size={14} /> Thermic Fluid Heaters
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Conservation Hub with Interactive Calculator */}
      <EnergyConservationHub onOpenRfq={onOpenRfq} />

      {/* Plant Installations & Industry Case Studies */}
      <InstallationGallery onOpenRfq={onOpenRfq} />

      {/* About Us & Global Engineering Partnerships */}
      <AboutSection />

      {/* Contact & Mumbai Registered Works */}
      <ContactSection />
    </div>
  );
}
