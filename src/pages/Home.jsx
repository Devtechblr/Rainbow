import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  ArrowRight,
  Sparkles,
  Tv,
  FlaskConical,
  Activity,
  Palette,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Cpu,
  Bus,
  Trophy,
  Compass,
  Layers,
  ChevronRight
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const Home = () => {
  const [activeZone, setActiveZone] = useState('academic');

  const campusZones = [
    {
      id: 'academic',
      title: 'Digital Academic Quad',
      subtitle: 'Smart Classes & Collaborative Studios',
      icon: Tv,
      color: 'var(--coral-vibrant)',
      badge: 'Interactive Learning',
      headline: 'Classrooms Engineered for Active Engagement',
      description:
        'Every classroom is outfitted with high-definition touchscreen display panels, high-ventilation ergonomic layouts, and CBSE-aligned visual media that turns abstract concepts into hands-on student discoveries.',
      stats: [
        { label: 'Interactive Displays', value: '100% Digital' },
        { label: 'Teacher-Student Ratio', value: '1:25 Optimal' },
        { label: 'Air & Natural Light', value: 'Optimized Flow' }
      ],
      features: [
        'Multimedia interactive touchscreens with animated curriculum',
        'Ergonomic, flexible student seating for group collaboration',
        'Dedicated reading nooks and language development corners'
      ]
    },
    {
      id: 'stem',
      title: 'Scientific & IT Workbenches',
      subtitle: 'Physics, Chemistry, Biology & Coding',
      icon: FlaskConical,
      color: 'var(--lavender-soft)',
      badge: 'STEM & Discovery',
      headline: 'Where Scientific Hypotheses Become Real Experience',
      description:
        'Comprehensive, laboratory suites equipped with standard reagents, precision optical microscopes, and electronic testing benches. Paired with a networked computer lab for algorithmic logic, Python, and digital literacy.',
      stats: [
        { label: 'Laboratories', value: 'Composite & IT' },
        { label: 'Safety Protocol', value: 'Strict CBSE Standards' },
        { label: 'Coding Curriculum', value: 'Classes 1–10' }
      ],
      features: [
        'Dedicated physics optics, chemical apparatus & biology specimens',
        'Networked desktop stations with high-speed filtered internet',
        'Robotics & tinkering kits fostering algorithmic problem solving'
      ]
    },
    {
      id: 'athletics',
      title: 'Athletics & Open Arena',
      subtitle: 'Sports Grounds, Track & Yoga Pavilion',
      icon: Activity,
      color: 'var(--yellow-sunshine)',
      badge: 'Physical Vitality',
      headline: 'Building Stamina, Teamwork & Sportsmanship',
      description:
        'Over 4,000 square meters of campus space devoted to outdoor physical vitality. Students train daily under certified physical educators in football, cricket, basketball, track sprints, and mindful morning yoga.',
      stats: [
        { label: 'Open Campus', value: '4,000+ Sq. M' },
        { label: 'Structured Sports', value: 'Daily Program' },
        { label: 'Disciplines', value: '6+ Major Sports' }
      ],
      features: [
        'Dedicated football turf, cricket nets & basketball courts',
        'Standard athletics sprint lanes and long-jump landing pit',
        'Morning yoga, aerobic agility routines & inter-house leagues'
      ]
    },
    {
      id: 'safety',
      title: 'Safety, Care & Transit Hub',
      subtitle: 'GPS Transport, Infirmary & 24/7 CCTV',
      icon: ShieldCheck,
      color: '#38A169',
      badge: 'Student Safety',
      headline: 'Uncompromising Child Safety & Care At Every Step',
      description:
        'A comprehensive protection grid with round-the-clock CCTV surveillance, perimeter security, background-verified personnel, campus first-aid infirmary, and a modern GPS-monitored bus fleet serving East Bengaluru.',
      stats: [
        { label: 'CCTV Coverage', value: '24/7 Active' },
        { label: 'Bus Escorts', value: 'Female Attendants' },
        { label: 'Medical Care', value: 'First-Aid Infirmary' }
      ],
      features: [
        'GPS-tracked school buses covering Hoskote, Budigere & Whitefield',
        'Fire-safety certified infrastructure and emergency exit plans',
        'Trained medical staff and tie-ups with nearby healthcare centers'
      ]
    }
  ];

  const currentZone = campusZones.find((z) => z.id === activeZone) || campusZones[0];
  const CurrentIcon = currentZone.icon;

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* ==========================================================================
          1. CINEMATIC HERO SECTION
          (Full-width school drone video background with subtle dark overlay,
           oversized typography, and Vibrant Coral CTA)
          ========================================================================== */}
      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--plum-deep)',
          color: 'var(--cream-warm)',
          padding: '6.5rem 0 5.5rem',
          overflow: 'hidden'
        }}
      >
        {/* Full-Width School Drone Video Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/school/hero-campus-banner.webp"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transform: 'scale(1.02)'
            }}
          >
            <source src="/videos/school-drone.mp4" type="video/mp4" />
          </video>

          {/* Deep Plum Gradient Overlay for Maximum Readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(
                180deg,
                rgba(33, 22, 46, 0.78) 0%,
                rgba(33, 22, 46, 0.52) 45%,
                rgba(33, 22, 46, 0.92) 100%
              )`
            }}
          />

          {/* Ambient Lighting Orbs */}
          <div className="ambient-glow-coral" style={{ top: '-100px', right: '-100px' }} />
          <div className="ambient-glow-lavender" style={{ bottom: '-150px', left: '-150px' }} />
        </div>

        {/* Hero Interactive Content Layer */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '960px' }}>
          {/* Top Admissions Badge (Affiliation strictly in top utility bar) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem', display: 'inline-block' }}
          >
            <span className="badge-dark-yellow">
              <Sparkles size={14} color="var(--yellow-sunshine)" />
              <span>Admissions Open for Session 2026–2027 · Bengaluru</span>
            </span>
          </motion.div>

          {/* Animated Oversized Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5.8vw, 4.4rem)',
              fontWeight: 800,
              color: 'var(--cream-warm)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            Igniting Curiosity.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFD66B 0%, #FF705E 55%, #B9A7FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Inspiring Character.
            </span>
          </motion.h1>

          {/* Concise Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'var(--text-light-muted)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              fontWeight: 400
            }}
          >
            A premier CBSE day school in Konadasapura, Bengaluru. Bridging rigorous academic excellence with hands-on discovery from Nursery to Class 10.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem'
            }}
          >
            <Link
              to="/apply"
              className="btn-coral"
              style={{
                padding: '1rem 2.4rem',
                fontSize: '1.05rem',
                gap: '0.65rem'
              }}
            >
              <GraduationCap size={20} />
              <span>Apply for Admission 2026–27</span>
            </Link>

            <Link
              to="/gallery"
              className="btn-outline-white"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.05rem',
                gap: '0.65rem'
              }}
            >
              <span>Explore Campus Life</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Quick Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              backgroundColor: 'rgba(33, 22, 46, 0.75)',
              backdropFilter: 'blur(16px)',
              padding: '1.5rem 2rem',
              borderRadius: '20px',
              border: '1px solid rgba(185, 167, 255, 0.2)',
              boxShadow: 'var(--shadow-plum)'
            }}
          >
            {[
              { label: 'Campus Area', val: '4,000+ Sq. M', sub: 'Lush Green Grounds' },
              { label: 'Faculty Ratio', val: '1:25 Optimal', sub: 'Individual Attention' },
              { label: 'Curriculum', val: 'Nursery to 10', sub: 'CBSE Secondary' },
              { label: 'Infrastructure', val: '100% Digital', sub: 'Smart Touchscreens' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--yellow-sunshine)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  {stat.label}
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 800, margin: '0.2rem 0' }}>
                  {stat.val}
                </div>
                <div style={{ color: 'var(--text-light-muted)', fontSize: '0.78rem' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          2. SECOND SECTION: INTERACTIVE CAMPUS ECO-SYSTEM
          (Creative redesign: Building photo removed to prevent repetition with
           the drone video; replaced with a dynamic, interactive Campus Navigator)
          ========================================================================== */}
      <section className="section-padding section-cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader
            badge="4,000+ SQ. METERS OF EXCELLENCE"
            badgeVariant="coral"
            title="An Environment Engineered for Curiosity & Discovery"
            subtitle="Set within Erappa Garden, Konadasapura, our green campus provides secure, distraction-free spaces engineered for academic exploration and active play."
          />

          {/* Interactive Zone Navigator Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            {campusZones.map((zone) => {
              const isActive = zone.id === activeZone;
              const ZoneIcon = zone.icon;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.15rem 1.35rem',
                    borderRadius: '16px',
                    backgroundColor: isActive ? 'var(--plum-deep)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                    border: '2px solid',
                    borderColor: isActive ? zone.color : 'var(--border-light)',
                    boxShadow: isActive ? '0 10px 25px rgba(33, 22, 46, 0.18)' : 'var(--shadow-xs)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'var(--cream-warm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isActive ? zone.color : 'var(--plum-deep)'
                    }}
                  >
                    <ZoneIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, lineHeight: 1.25 }}>
                      {zone.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: isActive ? 'rgba(255, 255, 255, 0.75)' : 'var(--text-muted)',
                        marginTop: '0.2rem'
                      }}
                    >
                      {zone.badge}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="zoneIndicator"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        backgroundColor: zone.color
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Feature Stage (Dynamic Reveal) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentZone.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Ambient Decorative Corner Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: currentZone.color,
                  opacity: 0.08,
                  pointerEvents: 'none'
                }}
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                {/* Left: Detailed Overview & Highlights */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                    <span
                      style={{
                        backgroundColor: 'var(--cream-warm)',
                        color: 'var(--plum-deep)',
                        border: '1px solid var(--border-medium)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '50px',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <CurrentIcon size={14} color="var(--coral-vibrant)" />
                      <span>{currentZone.badge}</span>
                    </span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      RIA Bengaluru Campus
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 800,
                      color: 'var(--text-dark)',
                      lineHeight: 1.25,
                      marginBottom: '1rem',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {currentZone.headline}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-body)',
                      fontSize: '1.02rem',
                      lineHeight: 1.7,
                      marginBottom: '1.75rem'
                    }}
                  >
                    {currentZone.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {currentZone.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2
                          size={18}
                          color="var(--coral-vibrant)"
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span style={{ fontSize: '0.94rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link
                      to="/gallery"
                      className="btn-coral"
                      style={{ padding: '0.8rem 1.6rem', fontSize: '0.92rem' }}
                    >
                      <span>Explore Photo Gallery</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/apply"
                      className="btn-plum"
                      style={{ padding: '0.8rem 1.6rem', fontSize: '0.92rem' }}
                    >
                      <span>Book a Campus Tour</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Key Metric Blocks & Verified Hallmarks */}
                <div
                  style={{
                    backgroundColor: 'var(--cream-warm)',
                    borderRadius: '20px',
                    padding: '2rem',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                      Infrastructure Standards
                    </span>
                    <span
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '50px',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--coral-vibrant)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      CBSE Affiliated
                    </span>
                  </div>

                  {/* 3 Metric Chips */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    {currentZone.stats.map((st, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: '#FFFFFF',
                          padding: '1.15rem 1.35rem',
                          borderRadius: '14px',
                          border: '1px solid var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                          {st.label}
                        </span>
                        <span
                          style={{
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            color: 'var(--plum-deep)',
                            fontFamily: 'var(--font-heading)'
                          }}
                        >
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Campus Coordinates & Notice */}
                  <div
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(33, 22, 46, 0.05)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-body)'
                    }}
                  >
                    <MapPin size={20} color="var(--coral-vibrant)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Location:</strong> Erappa Garden, Rajappa Building, Budigere Cross, Konadasapura, Bengaluru – 560049
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==========================================================================
          3. FACILITIES SECTION: IMAGES STRICTLY MATCHING THEIR CONTENT
          (Smart Classrooms, Scientific STEM Labs, Athletics & Sports, Performing Arts)
          ========================================================================== */}
      <section className="section-padding section-lavender">
        <div className="container">
          <SectionHeader
            badge="FOUR PILLARS"
            badgeVariant="coral"
            title="Designed for Modern, Curious Minds"
            subtitle="Academic rigor balanced with hands-on technological fluencies, sports conditioning, and creative expression."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {[
              {
                num: '01',
                title: 'Smart Classrooms',
                desc: 'Modern smart classroom with interactive digital boards and multimedia touchscreen displays where students actively learn.',
                icon: Tv,
                tag: 'Interactive Tech',
                color: 'var(--coral-vibrant)',
                image: '/images/school/hero-interactive-smartclass.webp'
              },
              {
                num: '02',
                title: 'Scientific STEM Labs',
                desc: 'Students conducting science experiments and hands-on investigation in a properly equipped, modern science laboratory.',
                icon: FlaskConical,
                tag: 'STEM Inquiry',
                color: 'var(--lavender-soft)',
                image: '/images/school/highschool-science-lab.webp'
              },
              {
                num: '03',
                title: 'Athletics & Sports',
                desc: 'Outdoor sports activities, athletic track heats, football, cricket, and physical training on the spacious campus playground.',
                icon: Activity,
                tag: 'Physical Health',
                color: 'var(--yellow-sunshine)',
                image: '/images/school/sports-athletics-field.jpg'
              },
              {
                num: '04',
                title: 'Performing & Fine Arts',
                desc: 'Creative activities including painting, hands-on craft practice, pottery clay sculpting, classical dance, and music.',
                icon: Palette,
                tag: 'Creative Growth',
                color: 'var(--coral-vibrant)',
                image: '/images/school/primary-art-creative.webp'
              }
            ].map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card-cream"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `4px solid ${pillar.color}`
                  }}
                >
                  <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(33, 22, 46, 0.88)',
                        color: 'var(--cream-warm)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        backdropFilter: 'blur(6px)'
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
                        {pillar.num}
                      </span>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--cream-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-dark)'
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                      {pillar.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                      {pillar.desc}
                    </p>

                    <Link
                      to="/gallery"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        color: 'var(--coral-vibrant)',
                        marginTop: 'auto'
                      }}
                    >
                      <span>Explore in Gallery</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4. ADMISSIONS CALL TO ACTION (Deep Plum #21162E)
          (Duplicate "Admissions Open for Session 2026-2027" announcement banner
           completely removed per instruction; clean, non-repetitive CTA layout)
          ========================================================================== */}
      <section
        className="section-plum"
        style={{
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="ambient-glow-coral" style={{ top: '-150px', right: '-100px' }} />
        <div className="ambient-glow-yellow" style={{ bottom: '-150px', left: '-100px' }} />

        <div className="container" style={{ textAlign: 'center', maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--cream-warm)',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}
          >
            Give Your Child the Foundation for a Lifetime of Success
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-light-muted)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              maxWidth: '660px',
              margin: '0 auto 2.5rem'
            }}
          >
            We invite parents to tour our green campus in Konadasapura, interact with our academic mentors, and inspect our modern smart classrooms in person.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link
              to="/apply"
              className="btn-coral"
              style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}
            >
              <GraduationCap size={20} />
              <span>Apply Online for 2026–27</span>
            </Link>

            <Link
              to="/admissions"
              className="btn-outline-white"
              style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
            >
              <Calendar size={18} />
              <span>Admissions Process</span>
            </Link>
          </div>

          <div
            style={{
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(185, 167, 255, 0.15)',
              display: 'flex',
              justifyContent: 'center',
              gap: '2.5rem',
              flexWrap: 'wrap',
              fontSize: '0.88rem',
              color: 'var(--text-light-muted)'
            }}
          >
            <div>
              Admissions Desk: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.contact.phones[0]}</strong>
            </div>
            <div>
              School Office: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.contact.phones[1]}</strong>
            </div>
            <div>
              Hours: <strong style={{ color: '#FFFFFF' }}>{schoolInfo.contact.officeHours}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
