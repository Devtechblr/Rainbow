import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, MessageCircle, ExternalLink } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#07172C',
        color: '#CBD5E1',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle brand rainbow hairline */}
      <div className="brand-rainbow-line" style={{ height: '2.5px' }} />

      {/* Main Footer Container */}
      <div className="container" style={{ padding: '3.25rem 1.5rem 1.75rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '2.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Col 1: Identity & Governance */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <img
                src="/images/school/ria-crest.svg"
                alt="Rainbow Innovative Academy Crest"
                style={{ width: '42px', height: '42px', objectFit: 'contain' }}
              />
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.15
                  }}
                >
                  Rainbow Innovative Academy
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.74rem',
                    color: 'var(--gold-accent)',
                    fontWeight: 500,
                    letterSpacing: '0.04em'
                  }}
                >
                  RIA Educational Trust · Estd. 2019
                </span>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              A premier CBSE co-educational institution in Bengaluru dedicated to academic excellence, scientific curiosity, and moral character.
            </p>

            <div
              style={{
                padding: '0.65rem 0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: '#CBD5E1'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem', color: '#E8D5B5', fontWeight: 600 }}>
                <ShieldCheck size={14} color="#C5A880" />
                <span>CBSE Affiliated Institution</span>
              </div>
              <div style={{ color: '#94A3B8' }}>
                Affiliation: <span style={{ color: '#F1F5F9' }}>{schoolInfo.affiliation.affiliationNo}</span> · Code: <span style={{ color: '#F1F5F9' }}>{schoolInfo.affiliation.schoolCode}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Institutional Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              Institutional
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { name: 'About RIA & Leadership', path: '/about' },
                { name: 'Academic Curriculum (CBSE)', path: '/academics' },
                { name: 'Campus Facilities & Sports', path: '/campus-life' },
                { name: 'Admissions 2026–27', path: '/admissions' },
                { name: 'Campus Photo Gallery', path: '/gallery' },
                { name: 'Contact & Campus Map', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#94A3B8',
                      fontSize: '0.86rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <ChevronRight size={13} color="#C5A880" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Stages */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              Academic Stages
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { name: 'Kindergarten & Pre-Primary', sub: 'Pre-Nursery, Nursery, LKG, UKG' },
                { name: 'Primary School', sub: 'Classes 1 to 5' },
                { name: 'Middle School', sub: 'Classes 6 to 8' },
                { name: 'Secondary High School', sub: 'Classes 9 & 10 (CBSE AISSE)' }
              ].map((prog, i) => (
                <li key={i}>
                  <Link
                    to="/academics"
                    style={{
                      display: 'block',
                      color: '#94A3B8',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <span style={{ display: 'block', fontSize: '0.86rem', color: '#E2E8F0', fontWeight: 500 }}>{prog.name}</span>
                    <span style={{ display: 'block', fontSize: '0.74rem', color: '#64748B' }}>{prog.sub}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus Location & Desk */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              Admissions Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.84rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={16} color="#C5A880" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Erappa Garden, Rajappa Building, Budigere Cross, Konadasapura, Bengaluru – 560049
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={16} color="#C5A880" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`} style={{ display: 'block', color: '#F1F5F9' }}>
                    {schoolInfo.contact.phones[0]}
                  </a>
                  <a href={`tel:${schoolInfo.contact.phones[1].replace(/\s+/g, '')}`} style={{ display: 'block', color: '#CBD5E1', fontSize: '0.78rem' }}>
                    {schoolInfo.contact.phones[1]}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={16} color="#C5A880" style={{ flexShrink: 0 }} />
                <a href={`mailto:${schoolInfo.contact.email}`} style={{ color: '#F1F5F9' }}>
                  {schoolInfo.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Clock size={16} color="#C5A880" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 8:30 AM – 4:30 PM (Sun Closed)</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.35rem' }}>
                <a
                  href="https://wa.me/917090796666"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#C5A880',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.78rem',
            color: '#64748B'
          }}
        >
          <div>
            © {new Date().getFullYear()} Rainbow Innovative Academy. All rights reserved. Affiliated to CBSE, New Delhi (Affiliation No: 831372).
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/about" style={{ color: '#94A3B8' }}>About Us</Link>
            <Link to="/academics" style={{ color: '#94A3B8' }}>Academics</Link>
            <Link to="/admissions" style={{ color: '#94A3B8' }}>Admissions</Link>
            <Link to="/contact" style={{ color: '#94A3B8' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
