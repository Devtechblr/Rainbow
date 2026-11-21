import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--plum-deep)',
        color: 'var(--cream-warm)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(185, 167, 255, 0.12)'
      }}
    >
      {/* Brand Accent Line */}
      <div className="brand-palette-line" />

      {/* Main Footer Container */}
      <div className="container" style={{ padding: '4.5rem 1.5rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Col 1: Complete Official Logo & School Heritage */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link to="/" style={{ display: 'inline-block' }}>
                <div
                  style={{
                    backgroundColor: 'var(--cream-warm)',
                    padding: '0.5rem 0.9rem',
                    borderRadius: '12px',
                    display: 'inline-block',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <img
                    src="/images/school/03_RIA_20logo.svg"
                    alt="Rainbow Innovative Academy"
                    style={{
                      height: '42px',
                      width: 'auto',
                      maxWidth: '230px',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </div>
              </Link>
            </div>

            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              A premier CBSE-affiliated co-educational day school in Konadasapura, Bengaluru. Nurturing academic excellence, creative discovery, and ethical leadership from Early Years through Class 10.
            </p>

            <div
              style={{
                padding: '0.85rem 1.15rem',
                backgroundColor: 'rgba(185, 167, 255, 0.08)',
                border: '1px solid rgba(185, 167, 255, 0.2)',
                borderRadius: '12px',
                fontSize: '0.82rem',
                color: 'var(--cream-warm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem', color: 'var(--yellow-sunshine)', fontWeight: 700 }}>
                <ShieldCheck size={16} />
                <span>CBSE Affiliated Institution</span>
              </div>
              <div style={{ color: 'var(--text-light-muted)' }}>
                Affiliation No: <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{schoolInfo.affiliation.affiliationNo}</span> · School Code: <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{schoolInfo.affiliation.schoolCode}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Institutional Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--yellow-sunshine)',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
                textTransform: 'uppercase'
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us & Heritage', path: '/about' },
                { name: 'Mandatory Disclosure (CBSE)', path: '/mandatory-disclosure' },
                { name: 'Campus Life & Gallery', path: '/gallery' },
                { name: 'Admissions 2026–27', path: '/admissions' },
                { name: 'Apply Now & Enquiry', path: '/apply' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--text-light-muted)',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--coral-vibrant)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-light-muted)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ChevronRight size={14} color="var(--lavender-soft)" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Stages (Short & Concise) */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--lavender-soft)',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
                textTransform: 'uppercase'
              }}
            >
              Academic Stages
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { title: 'Early Years (Pre-Nursery – UKG)', desc: 'Montessori & Sensory Play-Way Discovery' },
                { title: 'Primary Stage (Classes 1 to 5)', desc: 'Smart Class & Foundational Competencies' },
                { title: 'Middle Stage (Classes 6 to 8)', desc: 'Disciplinary STEM Labs, Coding & Olympiad' },
                { title: 'Secondary Stage (Classes 9 & 10)', desc: 'Rigorous CBSE Board Preparation' }
              ].map((stage, i) => (
                <li key={i} style={{ fontSize: '0.88rem' }}>
                  <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{stage.title}</div>
                  <div style={{ color: 'var(--text-light-muted)', fontSize: '0.8rem' }}>{stage.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--coral-vibrant)',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
                textTransform: 'uppercase'
              }}
            >
              Campus Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={17} color="var(--coral-vibrant)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ color: 'var(--text-light-muted)', lineHeight: 1.5 }}>
                  {schoolInfo.contact.address}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={17} color="var(--coral-vibrant)" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
                  style={{ color: '#FFFFFF', transition: 'color 0.2s', fontWeight: 600 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--coral-vibrant)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {schoolInfo.contact.phones[0]}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={17} color="var(--coral-vibrant)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${schoolInfo.contact.email}`}
                  style={{ color: 'var(--text-light-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light-muted)')}
                >
                  {schoolInfo.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={17} color="var(--yellow-sunshine)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-light-muted)' }}>{schoolInfo.contact.officeHours}</span>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <Link
                  to="/apply"
                  className="btn-coral"
                  style={{
                    padding: '0.65rem 1.25rem',
                    fontSize: '0.86rem',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <GraduationCap size={16} />
                  <span>Admissions Enquiry 2026–27</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(185, 167, 255, 0.12)',
            paddingTop: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.84rem',
            color: 'var(--text-light-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Rainbow Innovative Academy. Governed by RIA Educational Trust. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <Link to="/mandatory-disclosure" style={{ color: 'var(--text-light-muted)', transition: 'color 0.2s' }}>
              Mandatory Disclosure
            </Link>
            <span>•</span>
            <Link to="/admissions" style={{ color: 'var(--text-light-muted)', transition: 'color 0.2s' }}>
              Admissions
            </Link>
            <span>•</span>
            <Link to="/apply" style={{ color: 'var(--coral-vibrant)', transition: 'color 0.2s', fontWeight: 600 }}>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
