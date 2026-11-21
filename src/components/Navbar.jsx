import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Institutional Bar: Deep Plum #21162E with Sunshine Yellow badge & Warm Cream text */}
      <div
        style={{
          backgroundColor: 'var(--plum-deep)',
          color: 'var(--cream-warm)',
          fontSize: '0.8rem',
          fontWeight: 500,
          borderBottom: '1px solid rgba(185, 167, 255, 0.12)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '0.45rem 1.5rem',
            gap: '0.75rem'
          }}
        >
          {/* Left: Admissions & CBSE Affiliation info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(255, 214, 107, 0.18)',
                color: 'var(--yellow-sunshine)',
                border: '1px solid rgba(255, 214, 107, 0.4)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.65rem',
                borderRadius: '50px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              <Sparkles size={11} />
              <span>Admissions Open 2026–27</span>
            </span>
            <span style={{ color: 'var(--text-light-muted)', fontSize: '0.78rem', whiteSpace: 'nowrap' }} className="hide-sm">
              CBSE Affiliation No: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.affiliation.affiliationNo}</strong> · School Code: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.affiliation.schoolCode}</strong>
            </span>
          </div>

          {/* Right: Direct Desk Contact & Email */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.8rem',
              color: 'var(--text-light-muted)',
              whiteSpace: 'nowrap'
            }}
          >
            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#FFFFFF', transition: 'color 0.2s' }}
            >
              <Phone size={13} style={{ color: 'var(--coral-vibrant)' }} />
              <span>{schoolInfo.contact.phones[0]}</span>
            </a>
            <span style={{ opacity: 0.3 }} className="hide-mobile">|</span>
            <a
              href={`mailto:${schoolInfo.contact.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-light-muted)', transition: 'color 0.2s' }}
              className="hide-mobile"
            >
              <Mail size={13} style={{ color: 'var(--coral-vibrant)' }} />
              <span>{schoolInfo.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Brand Accent Palette Line */}
        <div className="brand-palette-line" />
      </div>

      {/* Main Sticky Header with Warm Cream background */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          backgroundColor: isScrolled ? 'rgba(255, 248, 240, 0.97)' : 'rgba(255, 248, 240, 0.92)',
          backdropFilter: 'blur(16px)',
          boxShadow: isScrolled ? '0 10px 30px rgba(33, 22, 46, 0.08)' : '0 1px 0 rgba(33, 22, 46, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '74px' : '84px',
            transition: 'height 0.3s ease'
          }}
        >
          {/* Complete Logo: No separate text, original proportions strictly preserved */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0
            }}
            aria-label="Rainbow Innovative Academy - Home"
          >
            <img
              src="/images/school/03_RIA_20logo.svg"
              alt="Rainbow Innovative Academy"
              style={{
                height: isScrolled ? '46px' : '52px',
                width: 'auto',
                maxWidth: '280px',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
                display: 'block'
              }}
              className="header-official-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.8rem, 1.4vw, 1.6rem)',
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
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--coral-vibrant)' : 'var(--text-dark)',
                    padding: '0.45rem 0',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--coral-vibrant)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-dark)';
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
                        height: '2.5px',
                        backgroundColor: 'var(--coral-vibrant)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* ONLY ONE APPLY NOW BUTTON (Vibrant Coral #FF705E) */}
            <Link
              to="/apply"
              className="btn-coral"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.88rem',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                gap: '0.5rem'
              }}
            >
              <GraduationCap size={16} />
              <span>Apply Now</span>
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--plum-deep)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(33, 22, 46, 0.75)',
            backdropFilter: 'blur(10px)',
            zIndex: 980
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--cream-warm)',
              width: '100%',
              maxHeight: 'calc(100vh - 74px)',
              overflowY: 'auto',
              padding: '1.75rem 1.5rem 2.5rem',
              boxShadow: '0 25px 50px rgba(23, 14, 33, 0.3)',
              borderBottom: '3px solid var(--coral-vibrant)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
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
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1rem',
                      color: isActive ? 'var(--coral-vibrant)' : 'var(--text-dark)',
                      backgroundColor: isActive ? 'rgba(255, 112, 94, 0.08)' : 'transparent',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={17} color={isActive ? 'var(--coral-vibrant)' : '#A392B8'} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action: Single Apply Now button */}
            <div style={{ borderTop: '1px solid rgba(33, 22, 46, 0.1)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-coral"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              >
                <GraduationCap size={18} />
                <span>Apply Now (Session 2026–27)</span>
              </Link>
              
              <a
                href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
                className="btn-plum"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              >
                <Phone size={15} />
                <span>Call Admissions: {schoolInfo.contact.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Header Queries */}
      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 600px) {
          .header-official-logo {
            height: 38px !important;
            max-width: 195px !important;
          }
          .hide-sm {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
