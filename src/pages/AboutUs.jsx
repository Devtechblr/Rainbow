import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Calendar,
  Building2,
  Users,
  Compass,
  Heart,
  Lightbulb,
  BookOpen,
  Quote,
  ChevronRight
} from 'lucide-react';
import {
  schoolInfo,
  leadership,
  visionMission,
  verifiedAwards,
  schoolMilestones
} from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const AboutUs = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(schoolMilestones.length - 1);
  const [activePrincipleIndex, setActivePrincipleIndex] = useState(0);

  // Rainbow palette mapping for the 5 milestones
  const rainbowColors = [
    { name: 'Red-Coral', hex: '#FF705E', glow: 'rgba(255, 112, 94, 0.35)' },
    { name: 'Sunshine-Yellow', hex: '#FFD66B', glow: 'rgba(255, 214, 107, 0.35)' },
    { name: 'Emerald-Green', hex: '#38A169', glow: 'rgba(56, 161, 105, 0.35)' },
    { name: 'Sky-Blue', hex: '#3182CE', glow: 'rgba(49, 130, 206, 0.35)' },
    { name: 'Soft-Lavender', hex: '#B9A7FF', glow: 'rgba(185, 167, 255, 0.35)' }
  ];

  const principleIcons = [Lightbulb, ShieldCheck, Heart, BookOpen, Compass];

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* ==========================================================================
          1. CINEMATIC HERO (Deep Plum #21162E)
          ========================================================================== */}
      <section
        className="section-plum"
        style={{
          padding: '6.5rem 0 5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="ambient-glow-coral" style={{ top: '-180px', right: '-120px' }} />
        <div className="ambient-glow-lavender" style={{ bottom: '-150px', left: '-150px' }} />

        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem', display: 'inline-block' }}
          >
            <span className="badge-dark-lavender">
              <Sparkles size={14} color="var(--lavender-soft)" />
              <span>Estd. {schoolInfo.established} · RIA Educational Trust</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              color: 'var(--cream-warm)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}
          >
            Nurturing Inquiring Minds & Compassionate Leaders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'var(--text-light-muted)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            An inspiring educational journey in Konadasapura, Bengaluru. Bridging rigorous CBSE academic standards with scientific curiosity, character building, and joyful discovery.
          </motion.p>
        </div>
      </section>

      {/* ==========================================================================
          2. BALANCED MISSION & VISION SECTION
          (Fixed spacing, zero awkward gaps, perfectly aligned and proportional)
          ========================================================================== */}
      <section className="section-padding section-lavender">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <SectionHeader
            badge="PURPOSE & DESTINY"
            badgeVariant="coral"
            title="Our Vision & Mission"
            subtitle="The enduring philosophical anchors guiding every program, teacher mentorship, and campus interaction."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
              alignItems: 'stretch'
            }}
          >
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                borderTop: '6px solid var(--coral-vibrant)',
                borderLeft: '1px solid var(--border-light)',
                borderRight: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(255, 112, 94, 0.08)',
                  pointerEvents: 'none'
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(255, 112, 94, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--coral-vibrant)'
                    }}
                  >
                    <Eye size={26} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--coral-vibrant)',
                      backgroundColor: 'rgba(255, 112, 94, 0.1)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '50px'
                    }}
                  >
                    North Star
                  </span>
                </div>

                <h3 style={{ fontSize: '1.55rem', color: 'var(--text-dark)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.015em' }}>
                  Our Vision
                </h3>

                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '1.05rem',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    position: 'relative',
                    paddingLeft: '1.25rem',
                    borderLeft: '3px solid var(--coral-vibrant)'
                  }}
                >
                  "{visionMission.vision}"
                </p>
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.86rem'
                }}
              >
                <CheckCircle2 size={16} color="var(--coral-vibrant)" />
                <span>Empowering Global Learners · Lifelong Innovators</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                borderTop: '6px solid var(--lavender-soft)',
                borderLeft: '1px solid var(--border-light)',
                borderRight: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(185, 167, 255, 0.12)',
                  pointerEvents: 'none'
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(185, 167, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--plum-deep)'
                    }}
                  >
                    <Target size={26} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--plum-deep)',
                      backgroundColor: 'rgba(185, 167, 255, 0.25)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '50px'
                    }}
                  >
                    Daily Action
                  </span>
                </div>

                <h3 style={{ fontSize: '1.55rem', color: 'var(--text-dark)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.015em' }}>
                  Our Mission
                </h3>

                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '1.05rem',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    position: 'relative',
                    paddingLeft: '1.25rem',
                    borderLeft: '3px solid var(--lavender-soft)'
                  }}
                >
                  "{visionMission.mission}"
                </p>
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.86rem'
                }}
              >
                <CheckCircle2 size={16} color="var(--lavender-soft)" />
                <span>Values-Driven Curriculum · Joyful Exploration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. SCHOOL HISTORY TIMELINE — RAINBOW DESIGN ELEMENT
          (Creative rainbow-flow arc and flowing ribbon with milestone stations)
          ========================================================================== */}
      <section className="section-padding section-cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <SectionHeader
            badge="RAINBOW JOURNEY"
            badgeVariant="yellow"
            title="The Rainbow Arc of Our History"
            subtitle="Tracing the vibrant arc of milestones that built Rainbow Innovative Academy into an elite CBSE institution in Bengaluru."
          />

          {/* Rainbow Arc SVG Flow Graphic (Desktop & Tablet) */}
          <div style={{ position: 'relative', margin: '2rem auto 3rem' }}>
            {/* Curved Rainbow Spectral Gradient Ribbon */}
            <div
              style={{
                height: '8px',
                borderRadius: '50px',
                background: 'linear-gradient(90deg, #FF705E 0%, #FFD66B 25%, #38A169 50%, #3182CE 75%, #B9A7FF 100%)',
                boxShadow: '0 4px 20px rgba(255, 112, 94, 0.35)',
                marginBottom: '2rem',
                position: 'relative'
              }}
            >
              {/* Floating Spectral Pulses */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50px',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.8))',
                  opacity: 0.6
                }}
              />
            </div>

            {/* Rainbow Milestone Selector Track */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                gap: '0.85rem'
              }}
            >
              {schoolMilestones.map((m, idx) => {
                const isActive = activeMilestoneIndex === idx;
                const rainbowColor = rainbowColors[idx % rainbowColors.length];
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveMilestoneIndex(idx)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '1.25rem 1rem',
                      borderRadius: '18px',
                      backgroundColor: isActive ? 'var(--plum-deep)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                      border: '2px solid',
                      borderColor: isActive ? rainbowColor.hex : 'var(--border-light)',
                      boxShadow: isActive
                        ? `0 12px 28px ${rainbowColor.glow}`
                        : 'var(--shadow-xs)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Top Rainbow Pill Indicator */}
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: rainbowColor.hex,
                        boxShadow: `0 0 10px ${rainbowColor.hex}`,
                        marginBottom: '0.65rem'
                      }}
                    />

                    <span
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        color: isActive ? '#FFFFFF' : 'var(--plum-deep)'
                      }}
                    >
                      {m.year}
                    </span>

                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: isActive ? rainbowColor.hex : 'var(--text-muted)',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        marginTop: '0.25rem'
                      }}
                    >
                      {m.title}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="rainbowActivePill"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          backgroundColor: rainbowColor.hex
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Milestone Card (Interactive Spotlight) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestoneIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                border: '1px solid var(--border-light)',
                borderLeft: `8px solid ${rainbowColors[activeMilestoneIndex % rainbowColors.length].hex}`,
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: rainbowColors[activeMilestoneIndex % rainbowColors.length].hex,
                  opacity: 0.08,
                  pointerEvents: 'none'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    backgroundColor: rainbowColors[activeMilestoneIndex % rainbowColors.length].hex,
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    padding: '0.35rem 0.95rem',
                    borderRadius: '50px',
                    letterSpacing: '0.04em'
                  }}
                >
                  Year {schoolMilestones[activeMilestoneIndex].year}
                </span>

                <span
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    backgroundColor: 'var(--cream-warm)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '50px'
                  }}
                >
                  Milestone {activeMilestoneIndex + 1} of {schoolMilestones.length}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  lineHeight: 1.25,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {schoolMilestones[activeMilestoneIndex].title}
              </h3>

              <p
                style={{
                  color: 'var(--text-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                  maxWidth: '850px'
                }}
              >
                {schoolMilestones[activeMilestoneIndex].description}
              </p>

              {/* Milestone Key Highlights Strip */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--cream-warm)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Award size={20} color={rainbowColors[activeMilestoneIndex % rainbowColors.length].hex} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                    Official Rainbow Innovative Academy Archive
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => setActiveMilestoneIndex((prev) => (prev > 0 ? prev - 1 : schoolMilestones.length - 1))}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-dark)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveMilestoneIndex((prev) => (prev < schoolMilestones.length - 1 ? prev + 1 : 0))}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'var(--plum-deep)',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Next Milestone
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==========================================================================
          4. FIVE PRINCIPLES GUIDING RIA (Completely Redesigned Interactive Experience)
          (Interactive Principle Stage, active reveals, rich motion, Deep Plum contrast)
          ========================================================================== */}
      <section className="section-padding section-plum" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-coral" style={{ top: '-120px', left: '-100px' }} />
        <div className="ambient-glow-yellow" style={{ bottom: '-120px', right: '-100px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1120px' }}>
          <SectionHeader
            badge="OUR CORE TENETS"
            badgeVariant="yellow"
            light={true}
            title="The 5 Principles Guiding RIA"
            subtitle="The enduring educational philosophy instilled across all academic, sporting, and leadership programs."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              marginTop: '2rem'
            }}
          >
            {/* Left: Interactive Principle Selector Track */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {visionMission.coreValues.map((v, i) => {
                const isActive = activePrincipleIndex === i;
                const IconComp = principleIcons[i] || Lightbulb;
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActivePrincipleIndex(i)}
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.15rem 1.4rem',
                      borderRadius: '16px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                      border: '1.5px solid',
                      borderColor: isActive ? 'var(--coral-vibrant)' : 'rgba(185, 167, 255, 0.15)',
                      boxShadow: isActive ? '0 8px 24px rgba(0, 0, 0, 0.3)' : 'none',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: isActive ? 'var(--coral-vibrant)' : 'rgba(185, 167, 255, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 800,
                          fontSize: '0.92rem',
                          flexShrink: 0
                        }}
                      >
                        0{i + 1}
                      </div>

                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                          {v.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: isActive ? 'var(--yellow-sunshine)' : 'var(--text-light-muted)' }}>
                          Principle 0{i + 1} of 05
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      size={20}
                      color={isActive ? 'var(--coral-vibrant)' : 'rgba(255, 255, 255, 0.4)'}
                      style={{
                        transform: isActive ? 'translateX(4px)' : 'none',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Right: Expansive Animated Feature Stage */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePrincipleIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '28px',
                  border: '1px solid rgba(185, 167, 255, 0.25)',
                  padding: 'clamp(2.25rem, 4vw, 3.25rem)',
                  boxShadow: 'var(--shadow-plum)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      backgroundColor: 'rgba(255, 112, 94, 0.2)',
                      color: 'var(--coral-vibrant)',
                      border: '1px solid rgba(255, 112, 94, 0.4)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '50px',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  >
                    Principle 0{activePrincipleIndex + 1} Spotlight
                  </span>

                  <span
                    style={{
                      color: 'var(--yellow-sunshine)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      opacity: 0.4
                    }}
                  >
                    0{activePrincipleIndex + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)',
                    fontWeight: 800,
                    color: 'var(--cream-warm)',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {visionMission.coreValues[activePrincipleIndex].title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-light-muted)',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem'
                  }}
                >
                  {visionMission.coreValues[activePrincipleIndex].description}
                </p>

                {/* Practical Educational Application */}
                <div
                  style={{
                    backgroundColor: 'rgba(33, 22, 46, 0.65)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(185, 167, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem'
                  }}
                >
                  <Sparkles size={22} color="var(--yellow-sunshine)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.92rem', color: '#FFFFFF', lineHeight: 1.5 }}>
                    <strong>Everyday Integration:</strong> Woven into our daily CBSE classroom deliberations, morning assemblies, and student-led club projects.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          5. INSTITUTIONAL LEADERSHIP (Significantly Increased Image Sizes)
          (Prominent, properly proportioned portrait frames, elegant editorial layout)
          ========================================================================== */}
      <section className="section-padding section-cream">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <SectionHeader
            badge="GOVERNANCE & MENTORSHIP"
            badgeVariant="coral"
            title="Institutional Leadership"
            subtitle="Guided by visionary educationists committed to student wellbeing, academic distinction, and ethical character."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {/* Founder & Chairman Profile (Prominent Large Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '28px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(1.5rem, 3.5vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              {/* Large Portrait Showcase */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '340px',
                    height: 'clamp(320px, 48vw, 420px)',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    margin: '0 auto',
                    border: '4px solid #FFFFFF',
                    boxShadow: '0 20px 45px rgba(33, 22, 46, 0.16)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={leadership.founder.image}
                    alt={leadership.founder.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(33, 22, 46, 0.95), transparent)',
                      padding: '1.5rem 1rem 1rem',
                      color: '#FFFFFF'
                    }}
                  >
                    <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      {leadership.founder.name}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--yellow-sunshine)' }}>
                      {leadership.founder.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Editorial Narrative */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <span className="badge-coral">
                    Founder's Address
                  </span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {leadership.founder.qualifications}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: 'var(--text-dark)',
                    lineHeight: 1.25,
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Building an Academy of Heart & Mind
                </h3>

                <blockquote
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    borderLeft: '4px solid var(--coral-vibrant)',
                    paddingLeft: '1.5rem',
                    margin: '0 0 1.75rem 0'
                  }}
                >
                  "{leadership.founder.message}"
                </blockquote>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                    gap: '1rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--coral-vibrant)" />
                    <span>Holistic Pedagogy</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--coral-vibrant)" />
                    <span>Ethical Stewardship</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Principal Profile (Prominent Large Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '28px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(1.5rem, 3.5vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              {/* Principal Editorial Narrative */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <span className="badge-lavender">
                    Principal's Desk
                  </span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {leadership.principal.qualifications}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: 'var(--text-dark)',
                    lineHeight: 1.25,
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Empowering Every Child's Unique Potential
                </h3>

                <blockquote
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    borderLeft: '4px solid var(--lavender-soft)',
                    paddingLeft: '1.5rem',
                    margin: '0 0 1.75rem 0'
                  }}
                >
                  "{leadership.principal.message}"
                </blockquote>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                    gap: '1rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--lavender-soft)" />
                    <span>Individual Attention</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--lavender-soft)" />
                    <span>Scientific Inquiry</span>
                  </div>
                </div>
              </div>

              {/* Large Portrait Showcase */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '340px',
                    height: 'clamp(320px, 48vw, 420px)',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    margin: '0 auto',
                    border: '4px solid #FFFFFF',
                    boxShadow: '0 20px 45px rgba(33, 22, 46, 0.16)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={leadership.principal.image}
                    alt={leadership.principal.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(33, 22, 46, 0.95), transparent)',
                      padding: '1.5rem 1rem 1rem',
                      color: '#FFFFFF'
                    }}
                  >
                    <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      {leadership.principal.name}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--yellow-sunshine)' }}>
                      {leadership.principal.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          6. VERIFIED AWARDS & RECOGNITION (Minimal, Genuine)
          ========================================================================== */}
      <section className="section-padding section-lavender">
        <div className="container" style={{ maxWidth: '980px' }}>
          <SectionHeader
            badge="ACHIEVEMENTS"
            badgeVariant="yellow"
            title="Institutional Accolades"
            subtitle="Genuine honors recognizing our pedagogical commitments and community contributions."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {verifiedAwards.map((award, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="card-cream"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '4px solid var(--coral-vibrant)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <Award size={28} color="var(--coral-vibrant)" />
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--plum-deep)',
                      backgroundColor: 'var(--cream-warm)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '50px'
                    }}
                  >
                    {award.year}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                  {award.title}
                </h4>

                <div style={{ fontSize: '0.85rem', color: 'var(--coral-vibrant)', fontWeight: 600, marginBottom: '0.65rem' }}>
                  {award.body}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, marginTop: 'auto' }}>
                  {award.significance}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          7. ADMISSION ENQUIRY CTA
          ========================================================================== */}
      <section className="section-plum" style={{ padding: '5.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: 'var(--cream-warm)', marginBottom: '1.25rem' }}>
            Experience the Rainbow Innovative Academy Culture
          </h2>
          <p style={{ color: 'var(--text-light-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            We welcome families to schedule a personalized campus tour and observe our vibrant classrooms in action.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/apply" className="btn-coral" style={{ padding: '1rem 2.5rem' }}>
              <GraduationCap size={20} />
              <span>Apply Online for 2026–27</span>
            </Link>
            <Link to="/gallery" className="btn-outline-white" style={{ padding: '1rem 2rem' }}>
              <span>View Campus Gallery</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
