import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Phone,
  ArrowRight,
  ClipboardList,
  UserCheck,
  Award,
  Clock,
  MapPin,
  HelpCircle,
  FileText
} from 'lucide-react';
import { schoolInfo, admissionSteps, admissionDocuments, faqs } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const Admissions = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState('Nursery');
  const [checkedDocs, setCheckedDocs] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const ageGuidelines = [
    { grade: 'Pre-Nursery', age: '2.5 – 3 Years', cutoff: 'As of June 1, 2026', focus: 'Sensory discovery, verbal expression, social play' },
    { grade: 'Nursery', age: '3 – 4 Years', cutoff: 'As of June 1, 2026', focus: 'Foundational motor skills, phonetic rhymes, art exploration' },
    { grade: 'LKG', age: '4 – 5 Years', cutoff: 'As of June 1, 2026', focus: 'Early literacy, number readiness, interactive smartboard activities' },
    { grade: 'UKG', age: '5 – 6 Years', cutoff: 'As of June 1, 2026', focus: 'Sentence building, basic arithmetic, curiosity-driven science' },
    { grade: 'Class 1', age: '6+ Years', cutoff: 'As of June 1, 2026', focus: 'CBSE primary core subjects, coding foundations, reading clubs' },
    { grade: 'Classes 2 to 10', age: 'Age Appropriate', cutoff: 'Based on verified Transfer Certificate', focus: 'Systematic CBSE curriculum, laboratory practicals, sports, leadership' }
  ];

  const toggleDoc = (index) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const selectedAgeInfo = ageGuidelines.find((g) => g.grade === selectedGrade) || ageGuidelines[1];
  const checkedCount = Object.values(checkedDocs).filter(Boolean).length;

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
        <div className="ambient-glow-coral" style={{ top: '-160px', right: '-120px' }} />
        <div className="ambient-glow-yellow" style={{ bottom: '-150px', left: '-150px' }} />

        <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem', display: 'inline-block' }}
          >
            <span className="badge-dark-yellow">
              <GraduationCap size={15} color="var(--yellow-sunshine)" />
              <span>Admissions Open for Session 2026–2027 · Bengaluru</span>
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
            Where Curious Minds Begin Their Journey
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
              margin: '0 auto 2.5rem'
            }}
          >
            A warm, supportive, and transparent admission process from Nursery through Class 10. We invite your family to join our thriving academic community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
          >
            <Link to="/apply" className="btn-coral" style={{ padding: '1rem 2.4rem', fontSize: '1.05rem' }}>
              <GraduationCap size={20} />
              <span>Apply Online for 2026–27</span>
            </Link>

            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              className="btn-outline-white"
              style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
            >
              <Phone size={18} />
              <span>Call Admissions: {schoolInfo.contact.phones[0]}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          2. INTERACTIVE ADMISSION JOURNEY (4-STAGE STEPPER)
          ========================================================================== */}
      <section className="section-padding section-cream">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <SectionHeader
            badge="FOUR TRANSPARENT STEPS"
            badgeVariant="coral"
            title="The 4-Step Admission Journey"
            subtitle="Straightforward and transparent from your first campus visit to your child's first day in class."
          />

          {/* Stepper Progress Bar & Stage Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            {admissionSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    borderRadius: '20px',
                    backgroundColor: isActive ? 'var(--plum-deep)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                    border: '2px solid',
                    borderColor: isActive ? 'var(--coral-vibrant)' : 'var(--border-light)',
                    boxShadow: isActive ? '0 12px 28px rgba(33, 22, 46, 0.2)' : 'var(--shadow-xs)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '1.8rem',
                        color: isActive ? 'var(--coral-vibrant)' : 'var(--text-muted)'
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.65rem',
                        borderRadius: '50px',
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'var(--cream-warm)',
                        color: isActive ? 'var(--yellow-sunshine)' : 'var(--text-muted)'
                      }}
                    >
                      Stage {idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.5rem 0', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-body)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {step.description}
                  </p>

                  {isActive && (
                    <motion.div
                      layoutId="stepActiveIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: 'var(--coral-vibrant)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Spotlight Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem'
              }}
            >
              <div style={{ flex: 1, minWidth: '300px' }}>
                <span className="badge-coral" style={{ marginBottom: '0.85rem' }}>
                  Stage 0{activeStepIndex + 1} Deep Dive
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.85rem' }}>
                  {admissionSteps[activeStepIndex].title}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '1.02rem', lineHeight: 1.7, margin: '0 0 1.5rem 0' }}>
                  {admissionSteps[activeStepIndex].description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <Clock size={16} color="var(--coral-vibrant)" />
                  <span>Prompt resolution: Academic counselors respond within 24 business hours.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/apply" className="btn-coral" style={{ padding: '0.85rem 1.8rem' }}>
                  <span>Begin Online Application</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==========================================================================
          3. INTERACTIVE AGE ELIGIBILITY & DOCUMENT CHECKLIST
          ========================================================================== */}
      <section className="section-padding section-lavender">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}
          >
            {/* Left: Age Eligibility Explorer */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                padding: 'clamp(1.25rem, 3.5vw, 2.25rem)'
              }}
            >
              <span className="badge-yellow" style={{ marginBottom: '1rem' }}>
                Age Calculator & Benchmarks
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                Age Eligibility Matrix (2026–27)
              </h3>

              {/* Grade Selector Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {ageGuidelines.map((row) => (
                  <button
                    key={row.grade}
                    onClick={() => setSelectedGrade(row.grade)}
                    style={{
                      padding: '0.45rem 0.95rem',
                      borderRadius: '50px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      backgroundColor: selectedGrade === row.grade ? 'var(--plum-deep)' : 'var(--cream-warm)',
                      color: selectedGrade === row.grade ? '#FFFFFF' : 'var(--text-dark)',
                      border: '1px solid',
                      borderColor: selectedGrade === row.grade ? 'var(--plum-deep)' : 'var(--border-light)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {row.grade}
                  </button>
                ))}
              </div>

              {/* Selected Grade Highlight Card */}
              <motion.div
                key={selectedAgeInfo.grade}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: 'var(--cream-warm)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid var(--border-light)',
                  borderLeft: '5px solid var(--coral-vibrant)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                    {selectedAgeInfo.grade}
                  </h4>
                  <span
                    style={{
                      backgroundColor: 'var(--coral-vibrant)',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '50px'
                    }}
                  >
                    {selectedAgeInfo.age}
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                  <strong>Cutoff Benchmark:</strong> {selectedAgeInfo.cutoff}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  <strong>Curriculum Emphasis:</strong> {selectedAgeInfo.focus}
                </div>
              </motion.div>
            </div>

            {/* Right: Interactive Document Checklist Tracker */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                padding: 'clamp(1.25rem, 3.5vw, 2.25rem)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge-coral">
                  Verification Checklist
                </span>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--coral-vibrant)' }}>
                  {checkedCount} of {admissionDocuments.length} Ready
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                Required Verification Documents
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {admissionDocuments.map((doc, idx) => {
                  const isChecked = !!checkedDocs[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleDoc(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        backgroundColor: isChecked ? 'rgba(56, 161, 105, 0.08)' : 'var(--cream-warm)',
                        border: '1px solid',
                        borderColor: isChecked ? 'rgba(56, 161, 105, 0.4)' : 'var(--border-light)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '6px',
                          border: '2px solid',
                          borderColor: isChecked ? '#38A169' : 'var(--border-medium)',
                          backgroundColor: isChecked ? '#38A169' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {isChecked && <CheckCircle2 size={16} color="#FFFFFF" />}
                      </div>
                      <span
                        style={{
                          fontSize: '0.92rem',
                          color: isChecked ? '#1C5B39' : 'var(--text-dark)',
                          fontWeight: isChecked ? 600 : 500,
                          textDecoration: isChecked ? 'line-through' : 'none'
                        }}
                      >
                        {doc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4. EXPANDABLE FREQUENTLY ASKED QUESTIONS
          ========================================================================== */}
      <section className="section-padding section-cream">
        <div className="container" style={{ maxWidth: '880px' }}>
          <SectionHeader
            badge="QUESTIONS & ANSWERS"
            badgeVariant="coral"
            title="Frequently Asked Questions"
            subtitle="Clear details on curriculum, transport routes, timings, and campus security."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-xs)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: isOpen ? 'var(--cream-warm)' : '#FFFFFF',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={22} color="var(--coral-vibrant)" /> : <ChevronDown size={22} color="var(--text-dark)" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '1.35rem 1.6rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          5. STRONG APPLY NOW CALL TO ACTION
          ========================================================================== */}
      <section className="section-plum" style={{ padding: '6rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="ambient-glow-coral" style={{ top: '-150px', right: '-100px' }} />
        <div className="ambient-glow-yellow" style={{ bottom: '-150px', left: '-100px' }} />

        <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)', fontWeight: 800, color: 'var(--cream-warm)', marginBottom: '1.25rem' }}>
            Ready to Begin Your Child's Journey?
          </h2>

          <p style={{ color: 'var(--text-light-muted)', fontSize: '1.15rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Submit an online enquiry or visit our admissions office in Konadasapura to tour our campus and interact with our academic faculty.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/apply" className="btn-coral" style={{ padding: '1.05rem 2.5rem', fontSize: '1.05rem' }}>
              <GraduationCap size={20} />
              <span>Apply Online for 2026–27</span>
            </Link>

            <a
              href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
              className="btn-outline-white"
              style={{ padding: '1.05rem 2rem', fontSize: '1.05rem' }}
            >
              <Phone size={18} />
              <span>{schoolInfo.contact.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
