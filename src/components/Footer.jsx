import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Send, CheckCircle2 } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { useRocket } from './RocketAnimation';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { rocketNavigate } = useRocket();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const handleLinkClick = (path, e) => {
    rocketNavigate(path, e);
  };

  return (
    <footer
      style={{
        backgroundColor: '#173D55',
        color: '#FFFAF2',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Rainbow top border stripe */}
      <div className="rainbow-bar" />

      {/* Main Footer Content */}
      <div className="container" style={{ padding: '4.5rem 1.5rem 3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: School Identity & Official Crest */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/school/ria-crest.svg"
                alt="Rainbow Innovative Academy Official Crest"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
              <div>
                <h3
                  style={{
                    color: '#FFFAF2',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  Rainbow
                </h3>
                <span
                  style={{
                    color: '#F5C94C',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    display: 'block'
                  }}
                >
                  INNOVATIVE ACADEMY
                </span>
              </div>
            </div>

            <p style={{ color: '#E9F3ED', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              “{schoolInfo.tagline}” — A premier CBSE-affiliated day school managed by the{' '}
              <strong style={{ color: '#F5C94C' }}>{schoolInfo.trust}</strong>. Empowering young learners with creativity,
              inquiry, and character.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 250, 242, 0.08)',
                border: '1px solid rgba(245, 201, 76, 0.4)',
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                color: '#F5C94C'
              }}
            >
              <ShieldCheck size={16} />
              <span>CBSE Affil. No: {schoolInfo.affiliation.affiliationNo} | Code: {schoolInfo.affiliation.schoolCode}</span>
            </div>
          </div>

          {/* Column 2: Quick Links with Rocket Navigation */}
          <div>
            <h4
              style={{
                color: '#FFFAF2',
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                position: 'relative'
              }}
            >
              Explore RIA
              <span
                style={{
                  display: 'block',
                  width: '32px',
                  height: '3px',
                  backgroundColor: '#ED8B37',
                  borderRadius: '2px',
                  marginTop: '0.4rem'
                }}
              />
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'About RIA & Leadership', path: '/about' },
                { name: 'Academic Curriculum (CBSE)', path: '/academics' },
                { name: 'Campus Life & Activities', path: '/campus-life' },
                { name: 'Admission Guidelines 2025-26', path: '/admissions' },
                { name: 'Photo & Event Gallery', path: '/gallery' },
                { name: 'Contact & Directions', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    style={{
                      color: '#E9F3ED',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F5C94C';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#E9F3ED';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ color: '#ED8B37' }}>›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Campus Coordinates */}
          <div>
            <h4
              style={{
                color: '#FFFAF2',
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              Campus Desk
              <span
                style={{
                  display: 'block',
                  width: '32px',
                  height: '3px',
                  backgroundColor: '#ED8B37',
                  borderRadius: '2px',
                  marginTop: '0.4rem'
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#ED8B37', flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ color: '#E9F3ED', lineHeight: 1.5 }}>
                  {schoolInfo.contact.address}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#F5C94C', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {schoolInfo.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s+/g, '')}`}
                      style={{ color: '#FFFAF2', fontWeight: 600 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F5C94C')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFAF2')}
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#38A169', flexShrink: 0 }} />
                <a
                  href={`mailto:${schoolInfo.contact.email}`}
                  style={{ color: '#E9F3ED', wordBreak: 'break-all' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F5C94C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E9F3ED')}
                >
                  {schoolInfo.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Clock size={18} style={{ color: '#3182CE', flexShrink: 0 }} />
                <span style={{ color: '#E9F3ED' }}>{schoolInfo.contact.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Parent Updates */}
          <div>
            <h4
              style={{
                color: '#FFFAF2',
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              School Circulars
              <span
                style={{
                  display: 'block',
                  width: '32px',
                  height: '3px',
                  backgroundColor: '#ED8B37',
                  borderRadius: '2px',
                  marginTop: '0.4rem'
                }}
              />
            </h4>

            <p style={{ color: '#E9F3ED', fontSize: '0.92rem', marginBottom: '1rem', lineHeight: 1.5 }}>
              Subscribe to receive admission schedules, school event dates, and academic announcements directly.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <input
                type="email"
                placeholder="Enter parent email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 250, 242, 0.2)',
                  backgroundColor: 'rgba(255, 250, 242, 0.08)',
                  color: '#FFFAF2',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#ED8B37',
                  color: '#FFFFFF',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#db7621')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ED8B37')}
              >
                <span>Subscribe Updates</span>
                <Send size={15} />
              </button>
            </form>

            {subscribed && (
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(56, 161, 105, 0.2)',
                  border: '1px solid #38A169',
                  color: '#E9F3ED',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <CheckCircle2 size={15} color="#38A169" />
                <span>Thank you! You are subscribed to RIA updates.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 250, 242, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#A0AEC0'
          }}
        >
          <div>
            © {new Date().getFullYear()} Rainbow Innovative Academy. Managed by {schoolInfo.trust}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Made with joyful care for RIA learners</span>
            <Heart size={14} fill="#ED8B37" color="#ED8B37" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
