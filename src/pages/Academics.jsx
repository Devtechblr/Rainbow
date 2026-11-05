import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Tv,
  Cpu,
  ArrowRight,
  ShieldCheck,
  FlaskConical
} from 'lucide-react';
import { academicPrograms } from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';
import { useRocket } from '../components/RocketAnimation';

export const Academics = () => {
  const [selectedStage, setSelectedStage] = useState('all');
  const { rocketNavigate } = useRocket();

  const handleLinkClick = (path, e) => {
    rocketNavigate(path, e);
  };

  const filteredPrograms =
    selectedStage === 'all'
      ? academicPrograms
      : academicPrograms.filter((p) => p.id === selectedStage);

  return (
    <div style={{ backgroundColor: '#FFFAF2' }}>
      {/* Page Header Banner */}
      <section
        style={{
          padding: '4.5rem 0 3.5rem',
          background: 'linear-gradient(135deg, #173D55 0%, #0F2838 100%)',
          color: '#FFFAF2',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div
            className="chalk-badge"
            style={{
              background: 'rgba(255, 250, 242, 0.1)',
              borderColor: 'rgba(245, 201, 76, 0.6)',
              color: '#F5C94C'
            }}
          >
            <span>CBSE Affiliated Curriculum · Nursery to Class 10</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              color: '#FFFAF2',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}
          >
            Academic <span style={{ color: '#F5C94C' }}>Excellence</span> at RIA
          </h1>

          <p style={{ color: '#E9F3ED', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Inspiring deep conceptual clarity, scientific reasoning, and creative expression through a student-centered
            curriculum.
          </p>
        </div>
      </section>

      {/* Academic Philosophy & Pedagogical Approach with Real Science Lab Photo */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
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
              <div className="chalk-badge">Our Educational Philosophy</div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  color: '#173D55',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                Beyond Rote Memorization: <span style={{ color: '#ED8B37' }}>Learning by Doing</span>
              </h2>

              <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                At Rainbow Innovative Academy, we follow the progressive guidelines of the <strong>National Education
                Policy (NEP)</strong> integrated within the <strong>Central Board of Secondary Education (CBSE)</strong>{' '}
                curriculum framework. We believe that true understanding occurs when curiosity is encouraged and
                concepts are brought alive through practical demonstrations and interactive questioning.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Concept clarity through smart touchscreen multimedia lessons',
                  'Hands-on experimental science sessions in dedicated physics, chemistry & biology labs',
                  'Optimal 1:25 teacher-student ratio for individual mentoring',
                  'Holistic continuous evaluation (CCE) focusing on both scholastic and co-scholastic growth',
                  'Foundational Olympiad, NTSE, and competitive preparation from middle school'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} color="#38A169" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#2D3748', fontSize: '0.98rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '6px solid #FFFFFF'
                }}
              >
                <img
                  src="/images/school/highschool-science-lab.webp"
                  alt="Real students conducting experiments in science laboratory at Rainbow Innovative Academy"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Class Stage Filter & Detailed Program Cards with Real Class Images */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Academic Stages"
            title="Class Levels &"
            highlightWord="Curriculum Framework"
            subtitle="Explore our age-appropriate curricula spanning early childhood to CBSE Class 10 Board examinations."
          />

          {/* Stage Filter Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '3rem'
            }}
          >
            {[
              { id: 'all', label: 'All Levels (Nursery - 10)' },
              { id: 'pre-primary', label: 'Kindergarten & Pre-Primary' },
              { id: 'primary', label: 'Primary (Grades 1-5)' },
              { id: 'middle', label: 'Middle School (Grades 6-8)' },
              { id: 'secondary', label: 'Secondary (Grades 9-10)' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedStage(btn.id)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '2px solid',
                  borderColor: selectedStage === btn.id ? '#ED8B37' : '#CBD5E0',
                  backgroundColor: selectedStage === btn.id ? '#ED8B37' : '#FFFFFF',
                  color: selectedStage === btn.id ? '#FFFFFF' : '#173D55',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedStage === btn.id ? '0 4px 14px rgba(237, 139, 55, 0.35)' : 'none'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Academic Cards Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="ria-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderLeft: `8px solid ${prog.color}`,
                  padding: '2.5rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div style={{ flex: '1 1 300px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        background: `${prog.color}18`,
                        color: prog.color,
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase'
                      }}
                    >
                      {prog.badge}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', color: '#173D55' }}>{prog.title}</h3>
                    <div
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#FFFAF2',
                        border: '1.5px solid #E2E8F0',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '10px',
                        fontSize: '0.88rem',
                        marginTop: '0.4rem'
                      }}
                    >
                      <strong style={{ color: '#173D55' }}>Classes: </strong>
                      <span style={{ color: '#ED8B37', fontWeight: 700 }}>{prog.grades}</span>
                      <span style={{ color: '#718096', marginLeft: '0.5rem' }}>({prog.ageGroup})</span>
                    </div>
                  </div>

                  <div style={{ width: '220px', height: '140px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={prog.image}
                      alt={prog.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                  {prog.description}
                </p>

                <h4 style={{ fontSize: '1.05rem', color: '#173D55', marginBottom: '1rem' }}>
                  Key Pedagogical Highlights:
                </h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}
                >
                  {prog.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FFFAF2',
                        borderRadius: '10px',
                        border: '1px solid #EDF2F7'
                      }}
                    >
                      <CheckCircle2 size={18} color={prog.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span style={{ fontSize: '0.92rem', color: '#2D3748', lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid #E2E8F0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.9rem' }}>
                    <ShieldCheck size={16} color="#38A169" />
                    <span>Adhering strictly to CBSE Board & NEP 2020 curriculum benchmarks</span>
                  </div>

                  <a
                    href="/admissions"
                    onClick={(e) => handleLinkClick('/admissions', e)}
                    className="btn-primary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem', cursor: 'pointer' }}
                  >
                    <span>Enroll in {prog.title}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support Infrastructure */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="Learning Infrastructure"
            title="Laboratories & Academic"
            highlightWord="Facilities"
            subtitle="Specialized learning hubs designed to foster observation, experimentation, and critical thinking."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '2rem',
              marginTop: '2.5rem'
            }}
          >
            <div className="ria-card">
              <FlaskConical size={36} color="#38A169" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#173D55', marginBottom: '0.5rem' }}>
                Integrated Science Laboratories
              </h4>
              <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Dedicated laboratories for Physics, Chemistry, and Biology equipped with microscopes, chemical reagents,
                circuit models, and safety apparatus for CBSE practical curriculum.
              </p>
            </div>

            <div className="ria-card">
              <Tv size={36} color="#ED8B37" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#173D55', marginBottom: '0.5rem' }}>
                Digital Smart Classrooms
              </h4>
              <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Every classroom features high-definition interactive screens and multimedia learning software, enabling
                teachers to present 3D simulations and immersive visual examples.
              </p>
            </div>

            <div className="ria-card">
              <Cpu size={36} color="#3182CE" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#173D55', marginBottom: '0.5rem' }}>
                Computer & Coding Lab
              </h4>
              <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Equipped with individual workstations, high-speed LAN, scratch coding, Python basics, and cyber-safety
                modules to nurture computer literacy from young ages.
              </p>
            </div>

            <div className="ria-card">
              <BookOpen size={36} color="#805AD5" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#173D55', marginBottom: '0.5rem' }}>
                Library & Knowledge Center
              </h4>
              <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Extensive catalog of reference texts, age-appropriate storybooks, periodicals, and quiet reading nooks
                that cultivate a daily reading habit among students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
