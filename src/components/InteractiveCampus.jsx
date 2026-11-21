import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Tv,
  FlaskConical,
  Cpu,
  BookOpen,
  Activity,
  Bus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { facilitiesList } from '../data/schoolData';

export const InteractiveCampus = () => {
  const [activeFacilityId, setActiveFacilityId] = useState('smart-classes');

  const facilityIcons = {
    'smart-classes': Tv,
    'science-labs': FlaskConical,
    'computer-lab': Cpu,
    library: BookOpen,
    'sports-ground': Activity,
    transport: Bus
  };

  const activeFacility =
    facilitiesList.find((f) => f.id === activeFacilityId) || facilitiesList[0];

  const IconComponent = facilityIcons[activeFacility.id] || Tv;

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid rgba(33, 22, 46, 0.08)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden'
      }}
    >
      {/* Top Facility Selector Tabs */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          backgroundColor: 'var(--cream-warm)',
          borderBottom: '1px solid rgba(33, 22, 46, 0.08)',
          scrollbarWidth: 'none',
          padding: '0.6rem 0.75rem',
          gap: '0.5rem'
        }}
      >
        {facilitiesList.slice(0, 6).map((fac) => {
          const isActive = fac.id === activeFacilityId;
          const FacIcon = facilityIcons[fac.id] || Tv;
          return (
            <button
              key={fac.id}
              onClick={() => setActiveFacilityId(fac.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.65rem 1.15rem',
                borderRadius: '8px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.86rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#FFFFFF' : 'var(--plum-deep)',
                backgroundColor: isActive ? 'var(--plum-deep)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(33, 22, 46, 0.25)' : 'none'
              }}
            >
              <FacIcon size={16} color={isActive ? 'var(--yellow-sunshine)' : 'var(--plum-deep)'} />
              <span>{fac.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase (Split View) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          padding: '2.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left: Authentic Facility Photo with Interactive Overlay */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              height: '340px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(33, 22, 46, 0.08)',
              position: 'relative'
            }}
          >
            <img
              src={activeFacility.image}
              alt={activeFacility.title}
              key={activeFacility.id}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
            />

            {/* Category Marker Badge */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(33, 22, 46, 0.9)',
                color: 'var(--yellow-sunshine)',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <ShieldCheck size={13} color="var(--yellow-sunshine)" />
              <span>{activeFacility.category} Infrastructure</span>
            </div>

            {/* Campus Coordinates Note */}
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(33, 22, 46, 0.85)',
                color: '#FFFFFF',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.72rem',
                backdropFilter: 'blur(6px)'
              }}
            >
              RIA Bengaluru Campus
            </div>
          </div>
        </div>

        {/* Right: Detailed Specification & Context */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(185, 167, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--plum-deep)'
              }}
            >
              <IconComponent size={20} />
            </div>
            <span className="badge-lavender">Verified Campus Feature</span>
          </div>

          <h3
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              color: 'var(--plum-deep)',
              lineHeight: 1.25,
              marginBottom: '0.85rem'
            }}
          >
            {activeFacility.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {activeFacility.description}
          </p>

          <div
            style={{
              backgroundColor: 'var(--cream-warm)',
              padding: '1.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(33, 22, 46, 0.08)',
              marginBottom: '1.75rem'
            }}
          >
            <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--plum-deep)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
              Facility Highlights:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.45rem' }}>
              {activeFacility.id === 'smart-classes' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Touchscreen interactive multimedia display boards</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>CBSE-aligned audiovisual curriculum animations</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>High-ventilation ergonomic seating layouts</span>
                  </div>
                </>
              )}
              {activeFacility.id === 'science-labs' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Dedicated Physics, Chemistry, and Biology workbenches</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>High-precision optical microscopes and standard reagents</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Strict safety protocols and protective gear for secondary practicals</span>
                  </div>
                </>
              )}
              {activeFacility.id === 'computer-lab' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Individual networked desktop workstations with high-speed LAN</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Algorithmic logic, Python fundamentals, and digital literacy</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Filtered internet access and cyber safety instruction</span>
                  </div>
                </>
              )}
              {activeFacility.id === 'library' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>CBSE reference encyclopedias, journals, and fiction classics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Dedicated quiet study alcoves and reading club discussions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Age-stratified book borrowing system from Grade 1 to 10</span>
                  </div>
                </>
              )}
              {activeFacility.id === 'sports-ground' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Spacious outdoor grounds for Football, Cricket, Basketball & Volleyball</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Standard athletics track races and inter-house sporting tournaments</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Morning yoga, aerobic conditioning, and badminton training</span>
                  </div>
                </>
              )}
              {activeFacility.id === 'transport' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Fleet of GPS-monitored buses covering Hoskote, Konadasapura & Whitefield</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Mandatory trained female attendant and verified driver on every route</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--coral-vibrant)" />
                    <span>Speed governors and scheduled arrival alerts for parents</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/gallery" className="btn-lavender" style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}>
              <span>View in Photo Gallery</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/apply" className="btn-coral" style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}>
              <span>Schedule Campus Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCampus;

