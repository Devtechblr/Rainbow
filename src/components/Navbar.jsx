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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Institutional Utility Bar: Deep Plum #21162E */}
      <div
        className="top-utility-bar"
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
            padding: '0.45rem 1.25rem',
            gap: '0.5rem'
          }}
        >
          {/* Left: Admissions & CBSE Affiliation info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
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
              CBSE Affiliation: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.affiliation.affiliationNo}</strong> · Code: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.affiliation.schoolCode}</strong>
            </span>
          </div>

          {/* Right: Direct Desk Contact & Email */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.78rem',
              color: 'var(--text-light-muted)',
              whiteSpace: 'nowrap'
            }}
          >
            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#FFFFFF', transition: 'color 0.2s' }}
            >
              <Phone size={12} style={{ color: 'var(--coral-vibrant)' }} />
              <span>{schoolInfo.contact.phones[0]}</span>
            </a>
            <span style={{ opacity: 0.3 }} className="hide-mobile">|</span>
            <a
              href={`mailto:${schoolInfo.contact.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-light-muted)', transition: 'color 0.2s' }}
              className="hide-mobile"
            >
              <Mail size={12} style={{ color: 'var(--coral-vibrant)' }} />
              <span>{schoolInfo.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Brand Accent Palette Line */}
        <div className="brand-palette-line" />
      </div>

      {/* Main Sticky Header with Warm Cream background */}
      <header
        className="main-header"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          backgroundColor: isScrolled ? 'rgba(255, 248, 240, 0.98)' : 'rgba(255, 248, 240, 0.95)',
          backdropFilter: 'blur(16px)',
          boxShadow: isScrolled ? '0 8px 24px rgba(33, 22, 46, 0.08)' : '0 1px 0 rgba(33, 22, 46, 0.06)',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="container header-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '82px',
            transition: 'height 0.3s ease'
          }}
        >
          {/* Complete Official Logo: Exact provided asset, original proportions strictly preserved */}
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
              src="/images/school/official-ria-logo.jpg"
              alt="Rainbow Innovative Academy"
              style={{
                height: isScrolled ? '54px' : '62px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
                display: 'block',
                mixBlendMode: 'multiply'
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
              cursor: 'pointer',
              borderRadius: '8px',
              backgroundColor: 'rgba(33, 22, 46, 0.05)'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(33, 22, 46, 0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 980
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--cream-warm)',
              width: '100%',
              maxHeight: 'calc(100vh - 68px)',
              overflowY: 'auto',
              padding: '1.5rem 1.25rem 2rem',
              boxShadow: '0 20px 40px rgba(23, 14, 33, 0.3)',
              borderBottom: '3px solid var(--coral-vibrant)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '0.96rem',
                      color: isActive ? 'var(--coral-vibrant)' : 'var(--text-dark)',
                      backgroundColor: isActive ? 'rgba(255, 112, 94, 0.1)' : 'transparent',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={17} color={isActive ? 'var(--coral-vibrant)' : 'var(--text-muted)'} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action: Single Apply Now button */}
            <div style={{ borderTop: '1px solid rgba(33, 22, 46, 0.1)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-coral"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.85rem 1.5rem' }}
              >
                <GraduationCap size={18} />
                <span>Apply Now (Session 2026–27)</span>
              </Link>

              <a
                href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
                className="btn-plum"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.85rem 1.5rem' }}
              >
                <Phone size={15} />
                <span>Call Admissions: {schoolInfo.contact.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Header CSS */}
      <style>{`
        .mobile-drawer-overlay {
          top: 72px;
        }
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .header-container {
            height: 68px !important;
          }
          .header-official-logo {
            height: 50px !important;
          }
          .mobile-drawer-overlay {
            top: 68px !important;
          }
        }
        @media (max-width: 480px) {
          .header-container {
            height: 62px !important;
          }
          .header-official-logo {
            height: 44px !important;
            max-width: 200px !important;
          }
          .mobile-drawer-overlay {
            top: 62px !important;
          }
          .hide-sm {
            display: none !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
        @media (max-width: 360px) {
          .header-official-logo {
            height: 40px !important;
            max-width: 175px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
