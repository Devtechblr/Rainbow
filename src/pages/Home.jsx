import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Compass,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  Phone
} from 'lucide-react';
import {
  schoolInfo,
  verifiedAwards,
  academicPrograms,
  facilitiesList,
  galleryItems,
  faqs,
  leadership
} from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';
import { useRocket } from '../components/RocketAnimation';

export const Home = () => {
  const { rocketNavigate } = useRocket();

  const handleLinkClick = (path, e) => {
    rocketNavigate(path, e);
  };

  const handleCardClick = (path, e) => {
    rocketNavigate(path, e, { variant: 'card' });
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 6rem',
          background: 'radial-gradient(ellipse at top, #FFF9EE 0%, #FFFAF2 60%, #E9F3ED 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Floating Decorative Storybook Elements */}
        <div className="pointer-events-none" aria-hidden="true">
          {/* Animated Sun */}
          <motion.div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '8%',
              right: '10%',
              width: '90px',
              height: '90px'
            }}
          >
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="26" fill="#F5C94C" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="14"
                  x2="50"
                  y2="6"
                  stroke="#ED8B37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform={`rotate(${angle} 50 50)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Floating Pencil */}
          <motion.div
            className="animate-float-delayed"
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '6%',
              width: '56px',
              height: '56px',
              opacity: 0.8
            }}
          >
            <svg viewBox="0 0 48 48" fill="none">
              <polygon points="12,36 8,40 12,40" fill="#ED8B37" />
              <rect
                x="14"
                y="10"
                width="12"
                height="26"
                rx="3"
                transform="rotate(45 20 23)"
                fill="#F5C94C"
                stroke="#173D55"
                strokeWidth="2"
              />
              <path d="M 10 38 L 36 12" stroke="#ED8B37" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Floating Book */}
          <motion.div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '25%',
              left: '4%',
              width: '60px',
              height: '60px',
              opacity: 0.8
            }}
          >
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M 6 12 C 14 10 20 12 24 15 C 28 12 34 10 42 12 L 42 36 C 34 34 28 36 24 39 C 20 36 14 34 6 36 Z"
                fill="#FFFAF2"
                stroke="#3182CE"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path d="M 24 15 L 24 39" stroke="#3182CE" strokeWidth="2.5" />
            </svg>
          </motion.div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
              gap: '3.5rem'
            }}
          >
            {/* Hero Left Text Column */}
            <div>
              <div
                className="chalk-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem'
                }}
              >
                <Sparkles size={16} color="#ED8B37" />
                <span>CBSE Affiliated · Nursery to Class 10</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                  fontWeight: 800,
                  color: '#173D55',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem'
                }}
              >
                Where <span style={{ color: '#ED8B37' }}>curious minds</span> grow.
              </h1>

              {/* Hand-drawn chalk subtitle */}
              <div
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  color: '#173D55',
                  marginBottom: '1.5rem',
                  lineHeight: 1.3
                }}
              >
                “A joyful place to learn, explore, create, and shine.”
              </div>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#4A5568',
                  lineHeight: 1.7,
                  marginBottom: '2.25rem',
                  maxWidth: '540px'
                }}
              >
                Welcome to <strong>Rainbow Innovative Academy</strong> in Konadasapura, Bengaluru. We integrate rigorous
                CBSE standards with experiential learning, smart classrooms, and nurturing values in an inspiring 4,000+
                sq. meter green campus.
              </p>

              {/* Action Buttons with Rocket Animation */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick('/about', e)}
                  className="btn-secondary"
                  style={{ cursor: 'pointer' }}
                >
                  <Compass size={18} />
                  <span>Explore Our School</span>
                </a>

                <a
                  href="/admissions"
                  onClick={(e) => handleLinkClick('/admissions', e)}
                  className="btn-primary"
                  style={{ cursor: 'pointer' }}
                >
                  <GraduationCap size={18} />
                  <span>Admissions 2025-26</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginTop: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(23, 61, 85, 0.12)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#E9F3ED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38A169'
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#718096', fontWeight: 600 }}>
                      Affiliation
                    </span>
                    <strong style={{ fontSize: '0.92rem', color: '#173D55' }}>CBSE Board</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#FFF4E5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ED8B37'
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#718096', fontWeight: 600 }}>
                      Certification
                    </span>
                    <strong style={{ fontSize: '0.92rem', color: '#173D55' }}>ISO 9001:2015</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#EBF8FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3182CE'
                    }}
                  >
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#718096', fontWeight: 600 }}>
                      Classes Offered
                    </span>
                    <strong style={{ fontSize: '0.92rem', color: '#173D55' }}>Nursery – Class 10</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Presentation with Real School Photo */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(23, 61, 85, 0.16)',
                  border: '6px solid #FFFFFF'
                }}
              >
                <img
                  src="/images/school/hero-students-learning.webp"
                  alt="Real students learning at Rainbow Innovative Academy Bengaluru"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(23, 61, 85, 0.85) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem'
                  }}
                >
                  <p style={{ color: '#FFFAF2', fontSize: '0.95rem', fontWeight: 600 }}>
                    Rainbow Innovative Academy students engaged in collaborative classroom learning
                  </p>
                </div>
              </div>

              {/* Floating Award Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 10px 25px rgba(23, 61, 85, 0.12)',
                  border: '2px solid #F5C94C'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: '#F5C94C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#173D55'
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ED8B37', textTransform: 'uppercase' }}>
                    Recognized Excellence
                  </span>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#173D55' }}>
                    Best School Award 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME & ABOUT RIA PREVIEW WITH REAL LEADERSHIP PHOTOS */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="About Rainbow Innovative Academy"
            title="A Nurturing Sanctuary for"
            highlightWord="Lifelong Learners"
            subtitle="Managed by the RIA Educational Trust, anchored in Empathy, Excellence, and Accountability."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}
          >
            {/* Founder Message Card with Real Photo */}
            <div
              className="ria-card"
              style={{
                borderLeft: '5px solid #ED8B37',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <img
                    src={leadership.founder.image}
                    alt={leadership.founder.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #ED8B37',
                      boxShadow: '0 4px 10px rgba(237, 139, 55, 0.25)'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#173D55', marginBottom: '0.1rem' }}>
                      {leadership.founder.name}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#ED8B37', fontWeight: 700 }}>
                      {leadership.founder.role}
                    </span>
                  </div>
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.96rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                  “{leadership.founder.message}”
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                <a
                  href="/about"
                  onClick={(e) => handleCardClick('/about', e)}
                  style={{
                    color: '#ED8B37',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer'
                  }}
                >
                  <span>Read Chairman's Full Address</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Principal Message Card with Real Photo */}
            <div
              className="ria-card"
              style={{
                borderLeft: '5px solid #173D55',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <img
                    src={leadership.principal.image}
                    alt={leadership.principal.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #173D55',
                      boxShadow: '0 4px 10px rgba(23, 61, 85, 0.25)'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#173D55', marginBottom: '0.1rem' }}>
                      {leadership.principal.name}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#173D55', fontWeight: 700 }}>
                      {leadership.principal.role} ({leadership.principal.qualifications})
                    </span>
                  </div>
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.96rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                  “{leadership.principal.message}”
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                <a
                  href="/about"
                  onClick={(e) => handleCardClick('/about', e)}
                  style={{
                    color: '#173D55',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer'
                  }}
                >
                  <span>Read Principal's Desk Note</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC PROGRAMS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Academic Pathways"
            title="Comprehensive CBSE Learning from"
            highlightWord="Kindergarten to Class 10"
            subtitle="Curriculum designed to nurture conceptual clarity, hands-on scientific thinking, and artistic expression."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '2rem'
            }}
          >
            {academicPrograms.map((prog) => (
              <div
                key={prog.id}
                className="ria-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `5px solid ${prog.color}`,
                  padding: '1.75rem'
                }}
              >
                <div>
                  <div style={{ height: '140px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                    <img
                      src={prog.image}
                      alt={prog.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(23, 61, 85, 0.06)',
                      color: prog.color,
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {prog.badge}
                  </span>

                  <h3 style={{ fontSize: '1.3rem', color: '#173D55', marginBottom: '0.4rem' }}>
                    {prog.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: '#ED8B37',
                      fontWeight: 700,
                      marginBottom: '0.85rem'
                    }}
                  >
                    {prog.grades} · Age: {prog.ageGroup}
                  </div>

                  <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {prog.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {prog.highlights.slice(0, 3).map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: '#2D3748'
                        }}
                      >
                        <CheckCircle2 size={16} color={prog.color} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                  <a
                    href="/academics"
                    onClick={(e) => handleCardClick('/academics', e)}
                    style={{
                      color: prog.color,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>View Curriculum Details</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="/academics"
              onClick={(e) => handleLinkClick('/academics', e)}
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <BookOpen size={18} />
              <span>Explore Complete Academic Framework</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED AWARDS & RECOGNITION */}
      <section className="section-padding" style={{ backgroundColor: '#173D55', color: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Verified Accolades"
            title="Recognitions of"
            highlightWord="Excellence"
            subtitle="Verified certifications and awards acknowledging educational quality, safety, and sustainable leadership."
            light={true}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginTop: '3rem'
            }}
          >
            {verifiedAwards.map((award, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 250, 242, 0.05)',
                  border: '1px solid rgba(245, 201, 76, 0.25)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(245, 201, 76, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F5C94C'
                  }}
                >
                  <Award size={22} />
                </div>
                <h4 style={{ color: '#FFFAF2', fontSize: '1.15rem', fontWeight: 700 }}>
                  {award.title}
                </h4>
                <div style={{ fontSize: '0.82rem', color: '#ED8B37', fontWeight: 700 }}>
                  Conferred by: {award.awardedBy}
                </div>
                <p style={{ color: '#E9F3ED', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAMPUS LIFE & FACILITIES PREVIEW WITH REAL SCHOOL IMAGES */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="Campus Facilities"
            title="World-Class Infrastructure for"
            highlightWord="Every Interest"
            subtitle="Over 4,000+ sq. meters of purpose-built learning spaces, laboratories, athletics grounds, and creative studios."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {facilitiesList.slice(0, 6).map((fac) => (
              <div
                key={fac.id}
                className="ria-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  padding: '1.5rem'
                }}
              >
                <div style={{ height: '160px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img
                    src={fac.image}
                    alt={fac.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <span style={{ fontSize: '0.78rem', color: '#ED8B37', fontWeight: 700, textTransform: 'uppercase' }}>
                  {fac.category}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: '#173D55' }}>
                  {fac.title}
                </h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.6 }}>
                  {fac.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="/campus-life"
              onClick={(e) => handleLinkClick('/campus-life', e)}
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <Compass size={18} />
              <span>Explore All Campus Life & Sports Facilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW WITH REAL SCHOOL PHOTOGRAPHS */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Moments at RIA"
            title="Glimpses into Our"
            highlightWord="Vibrant Community"
            subtitle="Real moments of curiosity, teamwork, creativity, and athletic passion from Rainbow Innovative Academy."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem'
            }}
          >
            {galleryItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(23, 61, 85, 0.08)'
                }}
              >
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(23, 61, 85, 0.85)',
                      color: '#FFFAF2',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#173D55', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#4A5568', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="/gallery"
              onClick={(e) => handleLinkClick('/gallery', e)}
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <span>View Full Photo & Event Gallery</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. ADMISSIONS CALLOUT PREVIEW */}
      <section
        style={{
          background: 'linear-gradient(135deg, #173D55 0%, #0F2838 100%)',
          color: '#FFFAF2',
          padding: '5rem 0',
          position: 'relative'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ED8B37',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.85rem',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}
          >
            Admissions Open for Academic Year 2025 – 2026
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              color: '#FFFAF2',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem'
            }}
          >
            Give Your Child the Gift of <span style={{ color: '#F5C94C' }}>Joyful, Future-Ready Education</span>
          </h2>

          <p style={{ color: '#E9F3ED', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            We welcome admissions from Pre-Nursery through Grade 10. Schedule a campus tour at our Konadasapura,
            Bengaluru campus to meet our leadership and explore our classrooms.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <a
              href="/admissions"
              onClick={(e) => handleLinkClick('/admissions', e)}
              className="btn-yellow"
              style={{ cursor: 'pointer' }}
            >
              <GraduationCap size={20} />
              <span>Apply Online for Admission</span>
            </a>

            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              className="btn-secondary"
              style={{
                backgroundColor: 'rgba(255, 250, 242, 0.1)',
                color: '#FFFAF2',
                borderColor: 'rgba(255, 250, 242, 0.3)'
              }}
            >
              <Phone size={18} />
              <span>Call Admissions: {schoolInfo.contact.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <ChalkHeading
            badge="Got Questions?"
            title="Frequently Asked"
            highlightWord="Questions"
            subtitle="Answers to common queries parents ask about admissions, safety, CBSE syllabus, and transport."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
            {faqs.slice(0, 4).map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFAF2',
                  border: '1px solid rgba(23, 61, 85, 0.08)',
                  borderRadius: '14px',
                  padding: '1.5rem 1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <HelpCircle size={20} color="#ED8B37" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <h3 style={{ fontSize: '1.1rem', color: '#173D55', fontWeight: 700 }}>
                    {faq.q}
                  </h3>
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.96rem', lineHeight: 1.6, paddingLeft: '2rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="/admissions"
              onClick={(e) => handleLinkClick('/admissions', e)}
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <span>View All Admissions FAQs</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
