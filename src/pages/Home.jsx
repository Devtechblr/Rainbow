import React, { useState, useRef, useEffect } from 'react';
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
  Play,
  Pause,
  Volume2,
  VolumeX,
  Compass
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const Home = () => {
  const [activeZone, setActiveZone] = useState('academic');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Guarantee mobile autoplay compliance and responsive playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked by mobile battery/data saver policy
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

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
        'Comprehensive laboratory suites equipped with standard reagents, precision optical microscopes, and electronic testing benches. Paired with a networked computer lab for algorithmic logic, Python, and digital literacy.',
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
          (Desktop: Full-width background drone video with dark Plum overlay.
           Mobile: Dedicated 16:9 responsive video container with play/pause controls,
           avoiding vertical cropping while preserving the full drone footage)
          ========================================================================== */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--plum-deep)',
          color: 'var(--cream-warm)',
          padding: '5.5rem 0 4.5rem',
          overflow: 'hidden'
        }}
      >
        {/* Background Video Wrapper (Active on Desktop) */}
        <div className="hero-desktop-video-backdrop">
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(
                180deg,
                rgba(33, 22, 46, 0.82) 0%,
                rgba(33, 22, 46, 0.58) 45%,
                rgba(33, 22, 46, 0.94) 100%
              )`,
              zIndex: 1
            }}
          />
          {/* Ambient Lighting Orbs */}
          <div className="ambient-glow-coral" style={{ top: '-100px', right: '-100px', zIndex: 1 }} />
          <div className="ambient-glow-lavender" style={{ bottom: '-150px', left: '-150px', zIndex: 1 }} />
        </div>

        {/* Hero Interactive Content Layer */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '960px' }}>
          {/* Top Admissions Badge (Affiliation strictly kept in top info bar) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.25rem', display: 'inline-block' }}
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
            className="hero-headline"
            style={{
              fontSize: 'clamp(2.1rem, 5.2vw, 4.2rem)',
              fontWeight: 800,
              color: 'var(--cream-warm)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
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
            className="hero-subtext"
            style={{
              fontSize: 'clamp(0.98rem, 1.4vw, 1.2rem)',
              color: 'var(--text-light-muted)',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '680px',
              margin: '0 auto 2rem',
              fontWeight: 400
            }}
          >
            A premier CBSE day school in Konadasapura, Bengaluru. Bridging rigorous academic excellence with hands-on discovery from Nursery to Class 10.
          </motion.p>

          {/* ======================================================================
              HERO VIDEO CONTAINER
              (On Desktop: positioned in background.
               On Mobile: sits in-flow with 16:9 aspect ratio, fully visible school building,
               touch controls for play/pause and mute/unmute, avoiding awkward cropping)
              ====================================================================== */}
          <div className="hero-video-container">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/images/school/hero-campus-banner.webp"
              className="hero-main-video"
            >
              <source src="/videos/school-drone.mp4" type="video/mp4" />
            </video>

            {/* Video Interactive Controls & Overlay Info */}
            <div className="hero-video-controls">
              <span className="hero-video-badge">
                <span className="pulse-dot" />
                Aerial Campus Tour
              </span>

              <div style={{ display: 'flex', gap: '0.45rem' }}>
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="hero-video-btn"
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="hero-video-btn"
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-buttons-wrapper"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}
          >
            <Link
              to="/apply"
              className="btn-coral"
              style={{
                padding: '0.9rem 2.2rem',
                fontSize: '1rem',
                gap: '0.65rem'
              }}
            >
              <GraduationCap size={19} />
              <span>Apply for Admission 2026–27</span>
            </Link>

            <Link
              to="/gallery"
              className="btn-outline-white"
              style={{
                padding: '0.9rem 1.85rem',
                fontSize: '1rem',
                gap: '0.65rem'
              }}
            >
              <span>Explore Campus Life</span>
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Quick Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-metrics-strip"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
              gap: '1rem',
              backgroundColor: 'rgba(33, 22, 46, 0.78)',
              backdropFilter: 'blur(16px)',
              padding: '1.25rem 1.5rem',
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
              <div key={i} style={{ textAlign: 'center', padding: '0.4rem' }}>
                <div style={{ color: 'var(--yellow-sunshine)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  {stat.label}
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.22rem', fontWeight: 800, margin: '0.15rem 0' }}>
                  {stat.val}
                </div>
                <div style={{ color: 'var(--text-light-muted)', fontSize: '0.74rem' }}>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
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
                    gap: '0.85rem',
                    padding: '1rem 1.15rem',
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
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'var(--cream-warm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isActive ? zone.color : 'var(--plum-deep)'
                    }}
                  >
                    <ZoneIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, lineHeight: 1.25 }}>
                      {zone.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        color: isActive ? 'rgba(255, 255, 255, 0.75)' : 'var(--text-muted)',
                        marginTop: '0.15rem'
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
                padding: 'clamp(1.5rem, 3.5vw, 3rem)',
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '2rem',
                  alignItems: 'center'
                }}
              >
                {/* Left: Detailed Overview & Highlights */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        backgroundColor: 'var(--cream-warm)',
                        color: 'var(--plum-deep)',
                        border: '1px solid var(--border-medium)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '50px',
                        fontSize: '0.74rem',
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
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      RIA Bengaluru Campus
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.4rem, 2.4vw, 2.1rem)',
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
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {currentZone.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    {currentZone.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2
                          size={18}
                          color="var(--coral-vibrant)"
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                    <Link
                      to="/gallery"
                      className="btn-coral"
                      style={{ padding: '0.75rem 1.45rem', fontSize: '0.9rem' }}
                    >
                      <span>Explore Photo Gallery</span>
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      to="/apply"
                      className="btn-plum"
                      style={{ padding: '0.75rem 1.45rem', fontSize: '0.9rem' }}
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
                    padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                      Infrastructure Standards
                    </span>
                    <span
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '50px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--coral-vibrant)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      CBSE Affiliated
                    </span>
                  </div>

                  {/* 3 Metric Chips */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                    {currentZone.stats.map((st, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: '#FFFFFF',
                          padding: '0.95rem 1.15rem',
                          borderRadius: '12px',
                          border: '1px solid var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                          {st.label}
                        </span>
                        <span
                          style={{
                            fontSize: '1.05rem',
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
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(33, 22, 46, 0.05)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-body)'
                    }}
                  >
                    <MapPin size={18} color="var(--coral-vibrant)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Location:</strong> Erappa Garden, Budigere Cross, Konadasapura, Bengaluru – 560049
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '1.5rem'
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
                  whileHover={{ y: -6 }}
                  className="card-cream"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `4px solid ${pillar.color}`
                  }}
                >
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
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

                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
                        {pillar.num}
                      </span>
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--cream-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-dark)'
                        }}
                      >
                        <IconComp size={17} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.45rem' }}>
                      {pillar.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
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
          ========================================================================== */}
      <section
        className="section-plum"
        style={{
          padding: '5.5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="ambient-glow-coral" style={{ top: '-150px', right: '-100px' }} />
        <div className="ambient-glow-yellow" style={{ bottom: '-150px', left: '-100px' }} />

        <div className="container" style={{ textAlign: 'center', maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--cream-warm)',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '1.15rem'
            }}
          >
            Give Your Child the Foundation for a Lifetime of Success
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.96rem, 1.3vw, 1.12rem)',
              color: 'var(--text-light-muted)',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: '660px',
              margin: '0 auto 2.25rem'
            }}
          >
            We invite parents to tour our green campus in Konadasapura, interact with our academic mentors, and inspect our modern smart classrooms in person.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/apply"
              className="btn-coral"
              style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}
            >
              <GraduationCap size={19} />
              <span>Apply Online for 2026–27</span>
            </Link>

            <Link
              to="/admissions"
              className="btn-outline-white"
              style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}
            >
              <Calendar size={17} />
              <span>Admissions Process</span>
            </Link>
          </div>

          <div
            style={{
              marginTop: '3rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(185, 167, 255, 0.15)',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.86rem',
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

      {/* Responsive Video & Hero Layout CSS */}
      <style>{`
        /* Desktop styles: Video acts as full-bleed backdrop */
        @media (min-width: 769px) {
          .hero-desktop-video-backdrop {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
          }
          .hero-video-container {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
          }
          .hero-main-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.02);
          }
          .hero-video-controls {
            position: absolute;
            bottom: 24px;
            right: 28px;
            z-index: 5;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: rgba(33, 22, 46, 0.7);
            backdrop-filter: blur(8px);
            padding: 0.4rem 0.75rem;
            border-radius: 50px;
            border: 1px solid rgba(185, 167, 255, 0.25);
          }
        }

        /* Mobile & Tablet styles: Intelligent 16:9 in-flow showcase */
        @media (max-width: 768px) {
          .hero-desktop-video-backdrop {
            display: none;
          }
          .hero-section {
            padding: 3.5rem 0 3.5rem !important;
            min-height: auto !important;
          }
          .hero-headline {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-subtext {
            font-size: 0.95rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.25rem !important;
          }
          .hero-video-container {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            margin: 0 auto 1.75rem;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
            border: 2px solid rgba(255, 214, 107, 0.35);
            background-color: #000000;
          }
          .hero-main-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
          }
          .hero-video-controls {
            position: absolute;
            bottom: 10px;
            left: 10px;
            right: 10px;
            display: flex;
            justifyContent: space-between;
            align-items: center;
            z-index: 3;
            pointer-events: auto;
          }
          .hero-metrics-strip {
            padding: 1rem !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-buttons-wrapper {
            flex-direction: column !important;
            width: 100%;
          }
          .hero-buttons-wrapper a {
            width: 100% !important;
            text-align: center;
            justify-content: center;
          }
          .hero-metrics-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Video controls styling */
        .hero-video-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(33, 22, 46, 0.85);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.2s;
          cursor: pointer;
        }
        .hero-video-btn:hover {
          background: var(--coral-vibrant);
          color: #FFFFFF;
        }
        .hero-video-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(33, 22, 46, 0.85);
          color: var(--yellow-sunshine);
          border: 1px solid rgba(255, 214, 107, 0.3);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          backdrop-filter: blur(6px);
        }
        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--coral-vibrant);
          display: inline-block;
          animation: pulseAnim 1.6s infinite;
        }
        @keyframes pulseAnim {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </div>
  );
};

export default Home;
