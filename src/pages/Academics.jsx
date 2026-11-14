import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  CheckCircle2,
  Tv,
  Cpu,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { academicPrograms, schoolInfo } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';
import AcademicJourney from '../components/AcademicJourney';

export const Academics = () => {
  const [selectedStage, setSelectedStage] = useState('all');

  const filteredPrograms =
    selectedStage === 'all'
      ? academicPrograms
      : academicPrograms.filter((p) => p.id === selectedStage);

  return (
    <div>
      {/* 1. Page Header Banner (Deep Navy #102B49) */}
      <section
        className="section-navy"
        style={{
          padding: '4.5rem 0 3.5rem',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge-dark-gold">
              <ShieldCheck size={14} color="#C5A880" />
              CBSE Affiliation No: {schoolInfo.affiliation.affiliationNo} · Nursery to Class 10
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.35rem, 4.5vw, 3.4rem)',
              color: '#FFFFFF',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}
          >
            Academic Curriculum & Pedagogy
          </h1>

          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Inspiring conceptual clarity, scientific reasoning, and moral character through a disciplined CBSE curriculum aligned with NEP 2020 principles.
          </p>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): Educational Philosophy & NEP Alignment */}
      <section className="section-padding section-ivory">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-navy" style={{ marginBottom: '0.85rem' }}>
                Academic Philosophy
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.85rem, 3.2vw, 2.45rem)',
                  fontWeight: 700,
                  color: 'var(--navy-primary)',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                Inquiry-Based Learning Anchored in Conceptual Mastery
              </h2>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                At Rainbow Innovative Academy, we integrate the progressive guidelines of the <strong>National Education Policy (NEP 2020)</strong> within the structured curriculum benchmarks of the <strong>Central Board of Secondary Education (CBSE)</strong>. We believe that genuine comprehension occurs when curiosity is encouraged and theory is reinforced with practical experimentation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                {[
                  'Concept clarity reinforced through interactive smart touchscreen multimedia lessons',
                  'Dedicated practical laboratory sessions in Physics, Chemistry, and Biology',
                  'Optimal 1:25 teacher-student ratio ensuring individualized attention and mentoring',
                  'Continuous Comprehensive Evaluation (CCE) tracking scholastic and co-scholastic growth',
                  'Structured Olympiad, NTSE, and competitive exam foundation from middle school'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={17} color="var(--gold-rich)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(16, 43, 73, 0.1)'
                }}
              >
                <img
                  src="/images/school/highschool-science-lab.webp"
                  alt="Science laboratory experimentation at Rainbow Innovative Academy"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Academic Journey Interactive Milestone Timeline */}
      <section className="section-padding section-grey-blue">
        <div className="container">
          <SectionHeader
            badge="LEARNING PROGRESSION"
            title="The RIA Academic Journey"
            subtitle="Click or tap any milestone on the timeline to explore our age-appropriate curriculum progression from foundational early years to secondary board examinations."
          />

          {/* Interactive Academic Journey Timeline Component */}
          <AcademicJourney />
        </div>
      </section>

      {/* 4. SECTION TYPE C (Light Blue-Grey #DCE5EE): Detailed Curricular Stages */}
      <section className="section-padding section-blue-grey">
        <div className="container">
          <SectionHeader
            badge="CURRICULUM ARCHITECTURE"
            title="Detailed Academic Stages (Nursery to Class 10)"
            subtitle="Explore our comprehensive subject syllabi, teaching methodologies, and age-specific developmental goals."
          />

          {/* Stage Filters */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginBottom: '2.5rem'
            }}
          >
            {[
              { id: 'all', label: 'All Levels (Nursery – 10)' },
              { id: 'pre-primary', label: 'Early Years (Pre-Primary)' },
              { id: 'primary', label: 'Primary School (Grades 1–5)' },
              { id: 'middle', label: 'Middle School (Grades 6–8)' },
              { id: 'secondary', label: 'Secondary (Grades 9–10)' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedStage(btn.id)}
                style={{
                  padding: '0.55rem 1.35rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  border: '1px solid',
                  borderColor: selectedStage === btn.id ? 'var(--navy-primary)' : 'rgba(16, 43, 73, 0.15)',
                  backgroundColor: selectedStage === btn.id ? 'var(--navy-primary)' : '#FFFFFF',
                  color: selectedStage === btn.id ? '#FFFFFF' : 'var(--navy-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedStage === btn.id ? 'var(--shadow-sm)' : 'none'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Detailed Academic Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-sm)',
                  padding: '2.25rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2.25rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="badge-navy">{prog.badge}</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                      Age Group: {prog.ageGroup}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.25rem' }}>
                    {prog.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--navy-light)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    Classes: {prog.grades}
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {prog.description}
                  </p>

                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Pedagogical Highlights:
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {prog.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                        <CheckCircle2 size={15} color="var(--gold-rich)" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.88rem', color: '#334155' }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/admissions" className="btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.86rem' }}>
                    <GraduationCap size={15} />
                    <span>Admissions for {prog.title}</span>
                  </Link>
                </div>

                <div>
                  <div
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      height: '260px',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <img
                      src={prog.image}
                      alt={prog.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION TYPE A (Warm Ivory #F4F1E9): Academic Support Infrastructure */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="LEARNING INFRASTRUCTURE"
            title="Specialized Academic Facilities"
            subtitle="Dedicated environments engineered to support scientific observation, technological literacy, and independent research."
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
                icon: FlaskConical,
                title: 'Integrated Science Laboratories',
                desc: 'Dedicated labs for Physics, Chemistry, and Biology equipped with precision apparatus, microscopes, reagent stations, and safety equipment aligned with CBSE practical syllabi.'
              },
              {
                icon: Tv,
                title: 'Digital Smart Classrooms',
                desc: 'Every classroom is equipped with interactive touchscreen multimedia displays and smart board software, transforming abstract theoretical concepts into engaging visual models.'
              },
              {
                icon: Cpu,
                title: 'Computer & IT Laboratory',
                desc: 'High-speed networked workstations providing foundational coding instruction, digital literacy, logical algorithmic problem-solving, and cyber safety modules.'
              },
              {
                icon: BookOpen,
                title: 'Library & Resource Center',
                desc: 'Extensive repository of CBSE reference texts, encyclopedias, children’s literature, and academic journals fostering independent inquiry and a lifelong reading habit.'
              }
            ].map((fac, i) => {
              const IconComp = fac.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    padding: '1.85rem',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    boxShadow: 'var(--shadow-xs)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--navy-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--navy-primary)',
                      marginBottom: '1rem'
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.55rem' }}>
                    {fac.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65 }}>
                    {fac.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FEATURED SECTION (Deep Navy #102B49): Admissions CTA Banner */}
      <section
        className="section-navy"
        style={{
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Ready to Enroll at Rainbow Innovative Academy?
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
            Admissions are open for Academic Session 2026–2027 from Pre-Primary through Class 10. Contact our admissions desk to learn more.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-gold">
              <GraduationCap size={16} />
              <span>Apply for 2026–27</span>
            </Link>
            <Link to="/contact" className="btn-outline-white">
              <span>Contact Admissions Desk</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
