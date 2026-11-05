import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { useRocket } from './RocketAnimation';
import { schoolInfo } from '../data/schoolData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { rocketNavigate, launchingElementId } = useRocket();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path, e) => {
    setMobileMenuOpen(false);
    rocketNavigate(path, e, { id: path });
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #173D55 0%, #0F2838 100%)',
          color: '#FFFAF2',
          padding: '0.45rem 1rem',
          fontSize: '0.85rem',
          fontWeight: 600,
          borderBottom: '2px solid #ED8B37'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                background: '#ED8B37',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.15rem 0.55rem',
                borderRadius: '9999px',
                textTransform: 'uppercase'
              }}
            >
              Admissions Open 2025-26
            </span>
            <span style={{ opacity: 0.9 }}>CBSE Affiliation No: {schoolInfo.affiliation.affiliationNo}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem' }}>
            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#F5C94C' }}
            >
              <Phone size={13} />
              <span>{schoolInfo.contact.phones[0]}</span>
            </a>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ color: '#E9F3ED' }}>Erappa Garden, Konadasapura, Bengaluru</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(255, 250, 242, 0.96)' : 'rgba(255, 250, 242, 0.88)',
          backdropFilter: 'blur(12px)',
          boxShadow: isScrolled ? '0 8px 30px rgba(23, 61, 85, 0.08)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(23, 61, 85, 0.08)' : '1px solid transparent'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '82px',
            transition: 'height 0.3s ease'
          }}
        >
          {/* Logo Brand with Real Official School Crest */}
          <a
            id="nav-logo"
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              cursor: 'pointer',
              transform: launchingElementId === '/' ? 'translateY(-3px) scale(1.04)' : 'none',
              filter:
                launchingElementId === '/'
                  ? 'drop-shadow(0 0 12px rgba(245, 201, 76, 0.8))'
                  : 'none',
              transition: 'transform 0.25s ease, filter 0.25s ease'
            }}
          >
            <img
              src="/images/school/ria-crest.svg"
              alt="Rainbow Innovative Academy Official Logo Crest"
              style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))' }}
            />
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.28rem',
                  letterSpacing: '-0.02em',
                  color: '#173D55',
                  lineHeight: 1.1
                }}
              >
                Rainbow
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  color: '#ED8B37',
                  lineHeight: 1.1
                }}
              >
                INNOVATIVE ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isLaunching = launchingElementId === link.path;

              return (
                <a
                  key={link.path}
                  id={`nav-link-${link.path.replace('/', '') || 'home'}`}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  style={{
                    position: 'relative',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: isActive || isLaunching ? 800 : 600,
                    fontSize: '0.96rem',
                    color: isLaunching ? '#ED8B37' : isActive ? '#ED8B37' : '#173D55',
                    textDecoration: 'none',
                    padding: '0.5rem 0.4rem',
                    borderRadius: '8px',
                    transform: isLaunching ? 'translateY(-4px) scale(1.08)' : 'none',
                    boxShadow: isLaunching
                      ? '0 0 16px rgba(245, 201, 76, 0.75), 0 0 24px rgba(237, 139, 55, 0.4)'
                      : 'none',
                    backgroundColor: isLaunching ? 'rgba(255, 250, 242, 0.95)' : 'transparent',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && !isLaunching && (
                    <span
                      style={{
                        position: 'absolute',
                        left: '0.4rem',
                        right: '0.4rem',
                        bottom: '-2px',
                        height: '3px',
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, #ED8B37, #F5C94C)'
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Apply / Enroll CTA */}
            <a
              id="nav-apply-btn"
              href="/admissions"
              onClick={(e) => handleNavClick('/admissions', e)}
              className="btn-primary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.92rem',
                cursor: 'pointer',
                transform:
                  launchingElementId === '/admissions'
                    ? 'translateY(-4px) scale(1.06)'
                    : undefined,
                boxShadow:
                  launchingElementId === '/admissions'
                    ? '0 0 20px rgba(245, 201, 76, 0.9), 0 0 30px rgba(237, 139, 55, 0.6)'
                    : undefined
              }}
            >
              <GraduationCap size={18} />
              <span>Apply Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#FFFAF2',
              border: '2px solid #E2E8F0',
              color: '#173D55'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFAF2',
              borderTop: '1px solid #E2E8F0',
              padding: '1.25rem 1.5rem 2rem',
              boxShadow: '0 12px 30px rgba(23, 61, 85, 0.12)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const isLaunching = launchingElementId === link.path;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleNavClick(link.path, e)}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: isActive || isLaunching ? 800 : 600,
                      fontSize: '1.08rem',
                      color: isLaunching ? '#ED8B37' : isActive ? '#ED8B37' : '#173D55',
                      padding: '0.6rem 0.8rem',
                      borderRadius: '8px',
                      background: isLaunching ? '#FFF4E5' : isActive ? '#FFF4E5' : 'transparent',
                      transform: isLaunching ? 'translateX(6px)' : 'none',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div style={{ paddingTop: '0.75rem' }}>
                <a
                  href="/admissions"
                  onClick={(e) => handleNavClick('/admissions', e)}
                  className="btn-primary"
                  style={{ width: '100%', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  <GraduationCap size={18} />
                  <span>Admissions 2025-26</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Media query styling for responsive nav */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
