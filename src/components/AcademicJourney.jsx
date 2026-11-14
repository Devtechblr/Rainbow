import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  FlaskConical,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { academicPrograms } from '../data/schoolData';

export const AcademicJourney = () => {
  const [activeStageId, setActiveStageId] = useState('pre-primary');

  const stageIcons = {
    'pre-primary': Sparkles,
    primary: BookOpen,
    middle: FlaskConical,
    secondary: GraduationCap
  };

  const activeProgram =
    academicPrograms.find((p) => p.id === activeStageId) || academicPrograms[0];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '2.5rem',
        border: '1px solid rgba(16, 43, 73, 0.08)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Milestone Progress Bar / Nav */}
      <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
        {/* Connecting Progress Line */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '5%',
            right: '5%',
            height: '3px',
            background: 'linear-gradient(90deg, #C53030 0%, #DD6B20 25%, #D69E2E 50%, #38A169 75%, #3182CE 100%)',
            zIndex: 1,
            opacity: 0.7
          }}
        />

        {/* Milestone Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            position: 'relative',
            zIndex: 2,
            gap: '0.75rem'
          }}
        >
          {academicPrograms.map((prog, idx) => {
            const isSelected = prog.id === activeStageId;
            const IconComp = stageIcons[prog.id] || BookOpen;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveStageId(prog.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'var(--navy-primary)' : '#FFFFFF',
                    border: `3px solid ${isSelected ? 'var(--gold-rich)' : '#CBD5E1'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? '#FFFFFF' : 'var(--navy-primary)',
                    boxShadow: isSelected ? '0 4px 14px rgba(16, 43, 73, 0.25)' : 'var(--shadow-xs)',
                    transition: 'all 0.25s ease',
                    marginBottom: '0.65rem'
                  }}
                >
                  <IconComp size={20} />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 700 : 600,
                    color: isSelected ? 'var(--navy-primary)' : '#64748B',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}
                >
                  {prog.badge}
                </span>

                <span
                  style={{
                    fontSize: '0.74rem',
                    color: isSelected ? 'var(--gold-dark)' : '#94A3B8',
                    marginTop: '0.2rem',
                    fontWeight: 500
                  }}
                >
                  {prog.grades}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Panel (Split Content) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          backgroundColor: 'var(--bg-ivory)',
          padding: '2.25rem',
          borderRadius: '12px',
          border: '1px solid rgba(16, 43, 73, 0.08)'
        }}
      >
        {/* Left: Description & Highlights */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
            <span className="badge-navy">{activeProgram.badge}</span>
            <span style={{ fontSize: '0.84rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
              Age Group: {activeProgram.ageGroup}
            </span>
          </div>

          <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.25rem' }}>
            {activeProgram.title}
          </h3>

          <div style={{ fontSize: '0.9rem', color: 'var(--navy-light)', fontWeight: 600, marginBottom: '1rem' }}>
            Covering: {activeProgram.grades}
          </div>

          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {activeProgram.description}
          </p>

          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
            Key Curriculum Milestones:
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.45rem', marginBottom: '1.75rem' }}>
            {activeProgram.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="var(--gold-rich)" style={{ flexShrink: 0 }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <Link
            to="/admissions"
            className="btn-primary"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
          >
            <span>Enquire for {activeProgram.title}</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Right: Authentic Classroom / Activity Photo */}
        <div>
          <div
            style={{
              height: '320px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(16, 43, 73, 0.08)'
            }}
          >
            <img
              src={activeProgram.image}
              alt={activeProgram.title}
              key={activeProgram.id}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicJourney;

