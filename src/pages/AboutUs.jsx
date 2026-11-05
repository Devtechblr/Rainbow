import React from 'react';
import { ShieldCheck, Target, Eye, Award } from 'lucide-react';
import { schoolInfo, leadership, visionMission, verifiedAwards } from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';

export const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#FFFAF2' }}>
      {/* Page Hero Banner */}
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
            <span>Estd. {schoolInfo.established} · Bengaluru</span>
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
            About <span style={{ color: '#F5C94C' }}>Rainbow Innovative Academy</span>
          </h1>

          <p style={{ color: '#E9F3ED', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Nurturing inquisitive minds and empathetic hearts within a state-of-the-art CBSE learning environment.
          </p>
        </div>
      </section>

      {/* Introduction & Foundation Story with Real Campus Photograph */}
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
              <div className="chalk-badge">Our Genesis</div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  color: '#173D55',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                An Educational Sanctuary Built on <span style={{ color: '#ED8B37' }}>Joy & Purpose</span>
              </h2>

              <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Established under the aegis of the <strong>RIA Educational Trust</strong>, Rainbow Innovative Academy was
                founded with an ambition to redefine school education in Bengaluru. Located in the serene surroundings
                of Erappa Garden, Konadasapura, our 4,000+ sq. meter campus provides a tranquil, green setting where children
                can safely explore their passions.
              </p>

              <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We believe learning should not be a mechanical chore. By blending the structured academic rigor of the{' '}
                <strong>Central Board of Secondary Education (CBSE)</strong> with experiential discovery, digital smart
                classrooms, and sports, we prepare students to be confident, empathetic global contributors.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: '#FFFAF2',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px'
                }}
              >
                <ShieldCheck size={36} color="#ED8B37" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#173D55', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Affiliated with CBSE, New Delhi
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#718096', margin: 0 }}>
                    Affiliation No: 831372 · School Code: 46162 · Quality ISO 9001:2015 Certified
                  </p>
                </div>
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
                  src="/images/school/campus-building-main.jpg"
                  alt="Real photograph of Rainbow Innovative Academy campus building in Bengaluru"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Strategic Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Guiding Principles"
            title="Our Vision &"
            highlightWord="Mission"
            subtitle="The core aspirations steering RIA's academic policies, pedagogy, and community culture."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem'
            }}
          >
            {/* Vision Card */}
            <div
              className="ria-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderTop: '6px solid #ED8B37',
                padding: '2.5rem'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: '#FFF4E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ED8B37',
                  marginBottom: '1.25rem'
                }}
              >
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#173D55', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8 }}>
                “{visionMission.vision}”
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="ria-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderTop: '6px solid #38A169',
                padding: '2.5rem'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: '#E9F3ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38A169',
                  marginBottom: '1.25rem'
                }}
              >
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#173D55', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.8 }}>
                “{visionMission.mission}”
              </p>
            </div>
          </div>

          {/* 5 Core Values */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#173D55', fontWeight: 800 }}>
              The 5 Foundational Pillars of RIA
            </h3>
            <p style={{ color: '#718096', fontSize: '1rem', marginTop: '0.5rem' }}>
              Every program and practice is anchored in these shared principles.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {visionMission.coreValues.map((v, i) => (
              <div
                key={i}
                className="ria-card"
                style={{
                  borderTop: `4px solid ${v.color}`,
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <h4 style={{ fontSize: '1.15rem', color: '#173D55' }}>{v.title}</h4>
                <p style={{ fontSize: '0.92rem', color: '#4A5568', lineHeight: 1.6 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages with Real Authentic Photographs */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="Institutional Leadership"
            title="Voices from Our"
            highlightWord="Leadership Team"
            subtitle="Dedicated educators guiding Rainbow Innovative Academy with vision and passion."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
            {/* Founder & Chairman with Real Photo */}
            <div
              className="ria-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '2.5rem',
                borderLeft: '8px solid #ED8B37'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src={leadership.founder.image}
                  alt={leadership.founder.name}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 1.25rem',
                    border: '5px solid #ED8B37',
                    boxShadow: '0 8px 24px rgba(237, 139, 55, 0.3)'
                  }}
                />
                <h3 style={{ fontSize: '1.6rem', color: '#173D55', marginBottom: '0.2rem' }}>
                  {leadership.founder.name}
                </h3>
                <div style={{ color: '#ED8B37', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  {leadership.founder.role}
                </div>
                <div style={{ color: '#718096', fontSize: '0.85rem' }}>
                  {leadership.founder.qualifications}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#173D55', marginBottom: '0.85rem' }}>
                  Message from the Founder & Chairman
                </h4>
                <p style={{ color: '#4A5568', fontSize: '1.02rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                  “{leadership.founder.message}”
                </p>
                <p style={{ color: '#4A5568', fontSize: '1.02rem', lineHeight: 1.8, marginTop: '1rem' }}>
                  Our open-door philosophy ensures every parent is an active, valued partner in their child's educational
                  journey. We take pride in building a school where children run in each morning with smiles on their faces.
                </p>
              </div>
            </div>

            {/* Principal with Real Photo */}
            <div
              className="ria-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '2.5rem',
                borderLeft: '8px solid #173D55'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src={leadership.principal.image}
                  alt={leadership.principal.name}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 1.25rem',
                    border: '5px solid #173D55',
                    boxShadow: '0 8px 24px rgba(23, 61, 85, 0.3)'
                  }}
                />
                <h3 style={{ fontSize: '1.6rem', color: '#173D55', marginBottom: '0.2rem' }}>
                  {leadership.principal.name}
                </h3>
                <div style={{ color: '#173D55', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  {leadership.principal.role}
                </div>
                <div style={{ color: '#718096', fontSize: '0.85rem' }}>
                  {leadership.principal.qualifications}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#173D55', marginBottom: '0.85rem' }}>
                  Principal's Desk
                </h4>
                <p style={{ color: '#4A5568', fontSize: '1.02rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                  “{leadership.principal.message}”
                </p>
                <p style={{ color: '#4A5568', fontSize: '1.02rem', lineHeight: 1.8, marginTop: '1rem' }}>
                  Through continuous teacher professional development, structured formative feedback, and a balanced
                  blend of academics, athletics, and cultural arts, we equip our learners for lifelong triumph.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Awards & Recognitions */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Verified Quality"
            title="School Certifications &"
            highlightWord="Accolades"
            subtitle="Verified formal recognitions acknowledging academic standards, digital adoption, and green initiatives."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginTop: '2.5rem'
            }}
          >
            {verifiedAwards.map((a, i) => (
              <div
                key={i}
                className="ria-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#FFF4E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ED8B37'
                  }}
                >
                  <Award size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#173D55' }}>{a.title}</h4>
                <div style={{ fontSize: '0.82rem', color: '#ED8B37', fontWeight: 700 }}>{a.awardedBy}</div>
                <p style={{ fontSize: '0.92rem', color: '#4A5568', lineHeight: 1.6 }}>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
