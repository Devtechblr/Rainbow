import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  CheckCircle2,
  BookOpen,
  Users,
  Compass,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { schoolInfo, leadership, visionMission, verifiedAwards } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const AboutUs = () => {
  return (
    <div>
      {/* 1. Page Hero Banner (Deep Navy #102B49) */}
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
              Estd. {schoolInfo.established} · RIA Educational Trust
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
            About Rainbow Innovative Academy
          </h1>

          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            A disciplined, nurturing academic sanctuary affiliated to the Central Board of Secondary Education (CBSE), New Delhi.
          </p>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): Genesis & Foundation Story */}
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
                Our Foundation
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
                An Educational Sanctuary Built on Purpose & Academic Rigor
              </h2>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Established under the aegis of the <strong>RIA Educational Trust</strong>, Rainbow Innovative Academy was founded with the resolute ambition to elevate school education in Bengaluru. Located in Erappa Garden, Budigere Cross, Konadasapura, our 4,000+ sq. meter campus provides a tranquil, green setting where students safely explore their potential.
              </p>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                We believe true education harmonizes academic rigor with character building. By integrating the structured national framework of the <strong>Central Board of Secondary Education (CBSE)</strong> with digital smart learning, laboratory inquiry, and disciplined athletics, we prepare students for future academic and life success.
              </p>

              {/* Affiliation verification badge card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <ShieldCheck size={36} color="var(--navy-primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--navy-primary)', fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                    Affiliated with CBSE, New Delhi
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', margin: 0 }}>
                    Affiliation No: <strong>{schoolInfo.affiliation.affiliationNo}</strong> · School Code: <strong>{schoolInfo.affiliation.schoolCode}</strong> · Status: {schoolInfo.affiliation.status}
                  </p>
                </div>
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
                  src="/images/school/campus-facade-main.webp"
                  alt="Rainbow Innovative Academy Campus Building"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Vision & Mission */}
      <section className="section-padding section-grey-blue">
        <div className="container">
          <SectionHeader
            badge="INSTITUTIONAL PURPOSE"
            title="Vision & Mission"
            subtitle="The enduring philosophical anchors guiding RIA's educational policies, curriculum delivery, and campus culture."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Vision */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid rgba(16, 43, 73, 0.08)',
                boxShadow: 'var(--shadow-sm)',
                borderTop: '4px solid var(--navy-primary)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--navy-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy-primary)',
                  marginBottom: '1.25rem'
                }}
              >
                <Eye size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-primary)', fontWeight: 700, marginBottom: '0.85rem' }}>
                Our Vision
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75 }}>
                “{visionMission.vision}”
              </p>
            </div>

            {/* Mission */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid rgba(16, 43, 73, 0.08)',
                boxShadow: 'var(--shadow-sm)',
                borderTop: '4px solid var(--gold-rich)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--gold-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-rich)',
                  marginBottom: '1.25rem'
                }}
              >
                <Target size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-primary)', fontWeight: 700, marginBottom: '0.85rem' }}>
                Our Mission
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75 }}>
                “{visionMission.mission}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TYPE C (Light Blue-Grey #DCE5EE): Five Foundational Principles (BALANCED 3 + 2 CENTERED LAYOUT) */}
      <section className="section-padding section-blue-grey">
        <div className="container">
          <SectionHeader
            badge="ETHOS & VALUES"
            title="The 5 Foundational Principles of RIA"
            subtitle="Every program, academic policy, and teacher mentorship practice is anchored in these shared principles."
          />

          {/* Balanced 3 + 2 Centered Grid (No awkward empty space on the right) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              maxWidth: '1160px',
              margin: '0 auto'
            }}
          >
            {visionMission.coreValues.map((v, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '2rem 1.75rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)',
                  flex: '0 1 calc(33.333% - 1.5rem)',
                  minWidth: '290px',
                  maxWidth: '360px',
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
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--navy-subtle)',
                    color: 'var(--navy-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginBottom: '1rem'
                  }}
                >
                  0{i + 1}
                </div>
                <h4 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                  {v.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginTop: 'auto' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION TYPE A (Warm Ivory #F4F1E9): Leadership Showcase */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="GOVERNANCE & LEADERSHIP"
            title="Messages from Institutional Leadership"
            subtitle="Guiding Rainbow Innovative Academy with vision, academic expertise, and philanthropic commitment."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '1050px', margin: '0 auto' }}>
            {/* Founder & Chairman */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '2.75rem 2.25rem',
                border: '1px solid rgba(16, 43, 73, 0.08)',
                boxShadow: 'var(--shadow-sm)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-md)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-sm)')}
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
                    border: '3px solid var(--gold-accent)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                  {leadership.founder.name}
                </h3>
                <div style={{ color: 'var(--gold-dark)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  {leadership.founder.role}
                </div>
                <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
                  {leadership.founder.qualifications}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
                  Message from the Founder & Chairman
                </h4>
                <blockquote
                  style={{
                    fontSize: '0.98rem',
                    color: '#334155',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    borderLeft: '3px solid var(--gold-accent)',
                    paddingLeft: '1.15rem',
                    marginBottom: '1rem'
                  }}
                >
                  "{leadership.founder.message}"
                </blockquote>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Our open-door governance ensures every parent remains an active, valued collaborator in their child's holistic educational journey.
                </p>
              </div>
            </div>

            {/* Principal */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '2.75rem 2.25rem',
                border: '1px solid rgba(16, 43, 73, 0.08)',
                boxShadow: 'var(--shadow-sm)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-md)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-sm)')}
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
                    border: '3px solid var(--navy-primary)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                  {leadership.principal.name}
                </h3>
                <div style={{ color: 'var(--navy-light)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  {leadership.principal.role}
                </div>
                <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
                  {leadership.principal.qualifications}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
                  Principal's Desk
                </h4>
                <blockquote
                  style={{
                    fontSize: '0.98rem',
                    color: '#334155',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    borderLeft: '3px solid var(--navy-primary)',
                    paddingLeft: '1.15rem',
                    marginBottom: '1rem'
                  }}
                >
                  "{leadership.principal.message}"
                </blockquote>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Through continuous faculty development, experiential learning protocols, and structured formative feedback, we prepare students for excellence in secondary examinations and global citizenship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Accreditations & Certifications */}
      <section className="section-padding section-grey-blue">
        <div className="container">
          <SectionHeader
            badge="FORMAL ACCREDITATIONS"
            title="Institutional Accolades & Certifications"
            subtitle="Verified formal recognitions acknowledging academic governance, digital smart learning, and environmental campus practices."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {verifiedAwards.map((a, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--gold-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-rich)',
                    marginBottom: '0.45rem'
                  }}
                >
                  <Award size={19} />
                </div>
                <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                  {a.title}
                </h4>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                  {a.awardedBy}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED SECTION (Deep Navy #102B49): Admissions CTA Banner */}
      <section
        className="section-navy"
        style={{
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Experience Rainbow Innovative Academy
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
            We welcome families to schedule an in-person tour of our 4,000+ sq. meter green campus in Konadasapura and meet our leadership.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-gold">
              <GraduationCap size={16} />
              <span>Admissions 2026–27</span>
            </Link>
            <Link to="/contact" className="btn-outline-white">
              <Compass size={16} />
              <span>Schedule Campus Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
