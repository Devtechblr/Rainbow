import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { campusLifeActivities } from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';
import { useRocket } from '../components/RocketAnimation';

export const CampusLife = () => {
  const { rocketNavigate } = useRocket();

  const handleLinkClick = (path, e) => {
    rocketNavigate(path, e);
  };

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
            <span>Holistic Student Development · 4,000+ sq.m Campus</span>
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
            Vibrant <span style={{ color: '#F5C94C' }}>Campus Life</span> at RIA
          </h1>

          <p style={{ color: '#E9F3ED', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Where athletics, performing arts, scientific curiosity, and camaraderie create unforgettable school memories.
          </p>
        </div>
      </section>

      {/* Campus Life Core Pillars with Real School Activity Photographs */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="Beyond Textbooks"
            title="Co-Curricular &"
            highlightWord="Extracurricular Excellence"
            subtitle="A dynamic daily routine balancing physical vitality, artistic expression, and leadership opportunities."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              marginTop: '3rem'
            }}
          >
            {campusLifeActivities.map((act, index) => (
              <div
                key={index}
                className="ria-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '6px solid #ED8B37',
                  padding: '1.75rem'
                }}
              >
                <div>
                  <div style={{ height: '180px', borderRadius: '14px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                    <img
                      src={act.image}
                      alt={act.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <span
                    style={{
                      display: 'inline-block',
                      background: '#FFF4E5',
                      color: '#ED8B37',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {act.badge}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', color: '#173D55', marginBottom: '0.4rem' }}>
                    {act.title}
                  </h3>

                  <p
                    style={{
                      color: '#ED8B37',
                      fontFamily: "'Caveat', cursive",
                      fontSize: '1.35rem',
                      marginBottom: '0.85rem'
                    }}
                  >
                    “{act.tagline}”
                  </p>

                  <p style={{ color: '#4A5568', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {act.description}
                  </p>

                  <h4 style={{ fontSize: '0.95rem', color: '#173D55', marginBottom: '0.75rem' }}>
                    Featured Programs:
                  </h4>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {act.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.92rem',
                          color: '#2D3748'
                        }}
                      >
                        <CheckCircle2 size={16} color="#38A169" />
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

      {/* Sports & Athletic Infrastructure Showcase with Real Athletics Photo */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
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
              <div className="chalk-badge">Sports & Fitness</div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  color: '#173D55',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                Championing <span style={{ color: '#ED8B37' }}>Sportsmanship</span>, Strength & Teamwork
              </h2>

              <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We believe that the playing field teaches lessons in resilience, strategy, and teamwork that cannot be
                taught inside a lecture hall alone. Our sports curriculum includes daily structured physical education,
                inter-house leagues, and professional training in:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.75rem'
                }}
              >
                {[
                  { name: 'Cricket Field & Nets', icon: '🏏' },
                  { name: 'Football Ground', icon: '⚽' },
                  { name: 'Basketball Court', icon: '🏀' },
                  { name: 'Volleyball Court', icon: '🏐' },
                  { name: 'Badminton Courts', icon: '🏸' },
                  { name: 'Athletics & Track', icon: '🏃' },
                  { name: 'Yoga & Meditation', icon: '🧘' },
                  { name: 'Indoor Table Games', icon: '♟️' }
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>{s.icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#173D55' }}>{s.name}</span>
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
                  src="/images/school/sports-athletics-field.jpg"
                  alt="Students competing on the athletic grounds at Rainbow Innovative Academy Bengaluru"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Celebrations & Cultural Events */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="School Calendar"
            title="Celebrations &"
            highlightWord="Annual Traditions"
            subtitle="Festivals, national observances, and stage celebrations that unite our RIA family."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}
          >
            {[
              {
                title: 'Annual Day Cultural Extravaganza',
                date: 'Winter Term',
                description: 'A grand showcase of music, classical and folk dance, theatrical plays, and choir performances celebrating our students diverse creative expressions.',
                icon: Calendar,
                badge: 'Flagship Event'
              },
              {
                title: 'Annual Sports & Athletic Meet',
                date: 'Autumn Term',
                description: 'High-energy track races, inter-house relays, march-past, and martial arts demonstrations promoting health, endurance, and sporting honor.',
                icon: Award,
                badge: 'Athletics'
              },
              {
                title: 'Science & Innovation Exhibition',
                date: 'National Science Day',
                description: 'Interactive STEM exhibits, working robotic prototypes, eco-friendly models, and math demonstrations conceived and built by our young scientists.',
                icon: Sparkles,
                badge: 'STEM'
              },
              {
                title: 'National Celebrations & Assemblies',
                date: 'Throughout the Year',
                description: 'Observance of Independence Day, Republic Day, Kannada Rajyotsava, Gandhi Jayanti, and International Yoga Day with thoughtful presentations.',
                icon: Award,
                badge: 'Heritage'
              }
            ].map((ev, i) => (
              <div
                key={i}
                className="ria-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '5px solid #173D55'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span
                      style={{
                        background: '#E9F3ED',
                        color: '#173D55',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px'
                      }}
                    >
                      {ev.badge}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#ED8B37', fontWeight: 700 }}>{ev.date}</span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', color: '#173D55', marginBottom: '0.6rem' }}>{ev.title}</h4>
                  <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6 }}>{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Transport & Campus Security with Real Bus Fleet Photo */}
      <section
        style={{
          background: 'linear-gradient(135deg, #173D55 0%, #0F2838 100%)',
          color: '#FFFAF2',
          padding: '5rem 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div
                className="chalk-badge"
                style={{
                  background: 'rgba(255, 250, 242, 0.1)',
                  borderColor: 'rgba(245, 201, 76, 0.5)',
                  color: '#F5C94C'
                }}
              >
                Student Safety Priority
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#FFFAF2',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                GPS-Monitored Buses & <span style={{ color: '#F5C94C' }}>Secure Campus</span>
              </h2>

              <p style={{ color: '#E9F3ED', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We understand that child safety is every parent's foremost priority. RIA implements comprehensive security
                protocols spanning daily bus transit, visitor management, health care, and campus monitoring.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Fleet of GPS-enabled buses with real-time tracking covering Hoskote, Konadasapura & Whitefield',
                  'Background-verified drivers and mandatory trained female attendant on every vehicle',
                  '24/7 CCTV surveillance cameras covering all entry gates, corridors, and sports grounds',
                  'Dedicated campus infirmary with qualified nursing staff for immediate medical first aid',
                  'Strict visitor identity verification and secure single-point parent pickup protocols'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <ShieldCheck size={18} color="#F5C94C" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#FFFAF2', fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick('/contact', e)}
                  className="btn-yellow"
                  style={{ cursor: 'pointer' }}
                >
                  <span>Enquire About Bus Routes & Safety</span>
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '6px solid rgba(255, 250, 242, 0.2)',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.3)'
                }}
              >
                <img
                  src="/images/school/facility-gps-transport.webp"
                  alt="Real GPS-monitored school buses and campus transport at Rainbow Innovative Academy"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
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
