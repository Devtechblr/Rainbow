import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  ArrowRight,
  Activity,
  Bus,
  HeartHandshake
} from 'lucide-react';
import { campusLifeActivities, schoolInfo } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';
import InteractiveCampus from '../components/InteractiveCampus';

export const CampusLife = () => {
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
              <Activity size={14} color="#C5A880" />
              Holistic Student Development · 4,000+ sq. m Campus
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
            Vibrant Campus Life & Co-Curriculars
          </h1>

          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Where athletics, performing arts, scientific curiosity, and student leadership form the foundation of a memorable school experience.
          </p>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): Co-Curricular Pillars (BALANCED 2x2 Full-Width Grid) */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="BEYOND TEXTBOOKS"
            title="Co-Curricular & Student Life Pillars"
            subtitle="A structured daily program balancing rigorous academic learning with physical vitality, artistic expression, and civic responsibility."
          />

          {/* Balanced 2-Column Desktop Grid for the 4 Activities (No lonely card on the left) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {campusLifeActivities.map((act, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                }}
              >
                <div style={{ height: '210px', overflow: 'hidden' }}>
                  <img
                    src={act.image}
                    alt={act.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '0.45rem' }}>
                    <span className="badge-navy">{act.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '1.28rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                    {act.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {act.description}
                  </p>

                  <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Core Opportunities:
                  </h4>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: 'auto' }}>
                    {act.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', color: '#334155' }}>
                        <CheckCircle2 size={15} color="var(--gold-rich)" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Sports & Athletics Grounds */}
      <section className="section-padding section-grey-blue">
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
                Physical Education
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
                Championing Teamwork, Discipline & Athletic Excellence
              </h2>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                We believe that the sports ground instills lessons in sportsmanship, grit, and emotional resilience that complement classroom learning. Our sports curriculum includes daily structured physical education, inter-house leagues, and qualified coaching across multiple disciplines:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem',
                  marginBottom: '1.75rem'
                }}
              >
                {[
                  'Cricket Pitch & Practice Nets',
                  'Open Football Field',
                  'Basketball Court',
                  'Volleyball Court',
                  'Badminton Courts',
                  'Athletics Running Tracks',
                  'Morning Yoga & Mindfulness',
                  'Chess & Indoor Games Room'
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid rgba(16, 43, 73, 0.08)',
                      boxShadow: 'var(--shadow-xs)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--navy-primary)'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--gold-rich)" style={{ flexShrink: 0 }} />
                    <span>{s}</span>
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
                  src="/images/school/sports-athletics-field.jpg"
                  alt="Athletic sports grounds at Rainbow Innovative Academy Bengaluru"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TYPE C (Light Blue-Grey #DCE5EE): Interactive Campus Experience */}
      <section className="section-padding section-blue-grey">
        <div className="container">
          <SectionHeader
            badge="INTERACTIVE FACILITIES"
            title="Explore Our Campus Infrastructure"
            subtitle="Tap through verified laboratories, smart classrooms, sports facilities, and transport services."
          />

          <InteractiveCampus />
        </div>
      </section>

      {/* 5. SECTION TYPE A (Warm Ivory #F4F1E9): Annual Traditions & Celebrations */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="SCHOOL TRADITIONS"
            title="Annual Traditions & Celebrations"
            subtitle="Signature school events uniting students, teachers, and families throughout the academic year."
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
                title: 'Annual Cultural Day Extravaganza',
                term: 'Winter Term',
                badge: 'Flagship Event',
                desc: 'A grand celebration featuring classical and folk dance, theatrical dramatics, choral music, and student art exhibits.'
              },
              {
                title: 'Annual Sports & Athletic Meet',
                term: 'Autumn Term',
                badge: 'Athletics',
                desc: 'High-spirited track races, inter-house relays, march-past, and physical demonstrations promoting sportsmanship and team camaraderie.'
              },
              {
                title: 'Science & Innovation Exhibition',
                term: 'National Science Day',
                badge: 'STEM',
                desc: 'Interactive experiments, working robotics prototypes, eco-friendly models, and math logic showcases created by young researchers.'
              },
              {
                title: 'National Observances & Assemblies',
                term: 'Throughout the Year',
                badge: 'Heritage',
                desc: 'Observance of Independence Day, Republic Day, Kannada Rajyotsava, Gandhi Jayanti, and International Yoga Day.'
              }
            ].map((ev, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '1.85rem 1.65rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge-navy">{ev.badge}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: 600 }}>{ev.term}</span>
                </div>

                <h4 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.55rem' }}>
                  {ev.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65 }}>
                  {ev.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED SECTION (Deep Navy #102B49): Safe GPS Transport & 24/7 Campus Security */}
      <section
        className="section-navy"
        style={{
          padding: '4.5rem 0'
        }}
      >
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
              <span className="badge-dark-gold" style={{ marginBottom: '1rem' }}>
                <ShieldCheck size={14} color="#C5A880" />
                Comprehensive Child Safety
              </span>

              <h2
                style={{
                  fontSize: 'clamp(1.95rem, 3.5vw, 2.7rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                GPS-Monitored Buses & 24/7 Campus Security
              </h2>

              <p style={{ color: '#CBD5E1', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                We understand that student safety and well-being are paramount for parents. RIA implements comprehensive security protocols spanning daily bus transit, visitor identification, health infirmary, and continuous campus monitoring.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'GPS-enabled bus fleet with live tracking notifications covering Hoskote, Konadasapura & Whitefield',
                  'Background-verified drivers and mandatory trained female bus attendant on every vehicle',
                  '24/7 CCTV surveillance covering all entrance gates, school corridors, and outdoor grounds',
                  'Dedicated campus infirmary with trained nursing staff for emergency first aid',
                  'Strict visitor identity verification and authorized parent pickup protocol'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <ShieldCheck size={17} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#E2E8F0', fontSize: '0.92rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-gold">
                <span>Enquire About Bus Routes & Safety</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <img
                  src="/images/school/facility-gps-transport.webp"
                  alt="GPS-monitored school bus transport at Rainbow Innovative Academy"
                  style={{ width: '100%', height: '390px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
