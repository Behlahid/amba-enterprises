import React from 'react';
import { MessageCircle, FileText, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onOpenRfq }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 999
    }}>
      {/* WhatsApp Quick Dispatch */}
      <a 
        href="https://wa.me/919820000000?text=Hello%20Amba%20Enterprises,%20I%20would%20like%20to%20discuss%20an%20industrial%20boiler/burner%20requirement."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer'
        }}
        title="Chat on WhatsApp"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={28} />
      </a>

      {/* Floating Quick RFQ Trigger */}
      <button
        onClick={onOpenRfq}
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: 'var(--color-secondary)',
          color: '#FFFFFF',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(228, 97, 37, 0.4)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer'
        }}
        title="Request Engineering Quote (RFQ)"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FileText size={24} />
      </button>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-slate)',
          border: '1px solid var(--color-border)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          alignSelf: 'center'
        }}
        title="Scroll to Top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
