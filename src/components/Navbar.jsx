import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, GraduationCap } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Institutional Utility Bar */}
      <div
        style={{
          backgroundColor: '#07172C',
          color: '#E2E8F0',
          fontSize: '0.8rem',
          fontWeight: 500,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '0.4rem 1.5rem',
            gap: '0.75rem'
          }}
        >
          {/* Left: CBSE Affiliation & Admissions Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(197, 168, 128, 0.22)',
                color: '#E8D5B5',
                border: '1px solid rgba(197, 168, 128, 0.45)',
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '0.15rem 0.55rem',
                borderRadius: '3px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              Admissions Open 2026–27
            </span>
            <span style={{ color: '#94A3B8', fontSize: '0.78rem', whiteSpace: 'nowrap' }} className="hide-sm">
              CBSE Affiliation No: <strong style={{ color: '#F1F5F9' }}>{schoolInfo.affiliation.affiliationNo}</strong> · School Code: <strong style={{ color: '#F1F5F9' }}>{schoolInfo.affiliation.schoolCode}</strong>
            </span>
          </div>

          {/* Right: Verified Direct Contact & Email */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.8rem',
              color: '#CBD5E1',
              whiteSpace: 'nowrap'
            }}
          >
            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#F1F5F9' }}
            >
              <Phone size={13} style={{ color: '#C5A880' }} />
              <span>{schoolInfo.contact.phones[0]}</span>
            </a>
            <span style={{ opacity: 0.3 }} className="hide-mobile">|</span>
            <a
              href={`mailto:${schoolInfo.contact.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#CBD5E1' }}
              className="hide-mobile"
            >
              <Mail size={13} style={{ color: '#C5A880' }} />
              <span>{schoolInfo.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Subtle architectural hairline */}
        <div className="brand-rainbow-line" style={{ height: '2.5px' }} />
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(244, 241, 233, 0.98)',
          backdropFilter: 'blur(10px)',
          boxShadow: isScrolled ? '0 4px 20px rgba(16, 43, 73, 0.08)' : '0 1px 0 rgba(16, 43, 73, 0.08)',
          transition: 'all 0.25s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '82px',
            transition: 'height 0.25s ease'
          }}
        >
          {/* School Brand Identity (Logo + Name + Subtitle) */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            <img
              src="/images/school/ria-crest.svg"
              alt="Rainbow Innovative Academy Crest"
              style={{
                width: isScrolled ? '48px' : '54px',
                height: isScrolled ? '48px' : '54px',
                objectFit: 'contain',
                flexShrink: 0,
                transition: 'all 0.25s ease'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.18rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--navy-primary)',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap'
                }}
              >
                Rainbow Innovative Academy
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.74rem',
                  letterSpacing: '0.03em',
                  color: '#64748B',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap'
                }}
                className="hide-xs"
              >
                Affiliated to CBSE, New Delhi · Bengaluru
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.7rem, 1.1vw, 1.35rem)',
              whiteSpace: 'nowrap'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--navy-primary)' : '#334155',
                    padding: '0.4rem 0',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--navy-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#334155';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--gold-rich)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Apply Now Action Button */}
            <Link
              to="/admissions"
              className="btn-primary"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.84rem',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                gap: '0.45rem'
              }}
            >
              <GraduationCap size={15} />
              <span>Apply Now</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--navy-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '71px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 23, 44, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 980
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              maxHeight: 'calc(100vh - 71px)',
              overflowY: 'auto',
              padding: '1.75rem 1.5rem 2.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              borderBottom: '1px solid #E2E8F0'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.98rem',
                      color: isActive ? 'var(--navy-primary)' : '#334155',
                      backgroundColor: isActive ? 'var(--navy-subtle)' : 'transparent',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} color={isActive ? 'var(--navy-primary)' : '#94A3B8'} />
                  </Link>
                );
              })}
            </div>

            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <GraduationCap size={17} />
                <span>Enquire & Apply for 2026–27</span>
              </Link>
              
              <a
                href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
                className="btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <Phone size={15} />
                <span>Call Admissions: {schoolInfo.contact.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles for Navigation Bar */}
      <style>{`
        @media (max-width: 1140px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .hide-sm {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hide-xs {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
