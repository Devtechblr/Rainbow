import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  Users,
  Compass,
  Award,
  Clock,
  Sparkles,
  MapPin
} from 'lucide-react';
import {
  schoolInfo,
  leadership,
  academicPrograms,
  facilitiesList,
  galleryItems
} from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';
import InteractiveCampus from '../components/InteractiveCampus';

export const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION: Premium Split Hero (Text Left, Authentic Campus Photo Right) */}
      <section
        style={{
          backgroundColor: 'var(--bg-navy-featured)',
          color: '#FFFFFF',
          padding: '4.5rem 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="hero-split-grid">
            {/* Left Column: Authoritative Institutional Messaging */}
            <div>
              {/* Affiliation & Admissions Pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="badge-dark-gold">
                  <ShieldCheck size={13} color="#C5A880" />
                  CBSE Affiliated · Affiliation No. {schoolInfo.affiliation.affiliationNo}
                </span>
                <span
                  style={{
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    color: '#E2E8F0',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em'
                  }}
                >
                  Admissions 2026–27
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: 'clamp(1.9rem, 3.1vw, 2.65rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.22,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem'
                }}
              >
                Cultivating Inquiring Minds, Academic Rigor & Ethical Leadership
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.35vw, 1.12rem)',
                  color: '#CBD5E1',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  maxWidth: '560px'
                }}
              >
                Rainbow Innovative Academy is a premier co-educational CBSE institution in Konadasapura, Bengaluru. We nurture conceptual mastery, scientific curiosity, and moral integrity from Nursery through Class 10.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                <Link to="/admissions" className="btn-gold" style={{ padding: '0.9rem 1.85rem' }}>
                  <GraduationCap size={18} />
                  <span>Apply for Admission</span>
                </Link>
                <Link to="/about" className="btn-outline-white" style={{ padding: '0.9rem 1.75rem' }}>
                  <span>Explore Our School</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Verified Desk Hotline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: '#94A3B8' }}>
                <Phone size={15} color="#C5A880" />
                <span>Admissions Desk: <strong style={{ color: '#F1F5F9' }}>{schoolInfo.contact.phones[0]}</strong></span>
              </div>
            </div>

            {/* Right Column: Clean Authentic Campus Photograph (Unobstructed View) */}
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  backgroundColor: '#0c2138'
                }}
              >
                {/* Clean School Facade Photograph */}
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                  <img
                    src="/images/school/campus-facade-main.webp"
                    alt="Rainbow Innovative Academy Main Campus Building, Bengaluru"
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16 / 10',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Refined Institutional Caption Strip (Placed below photo to keep entire building completely visible) */}
                <div
                  style={{
                    backgroundColor: '#07172C',
                    padding: '1rem 1.35rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    flexWrap: 'wrap',
                    gap: '0.65rem'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#C5A880',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'block',
                        marginBottom: '0.15rem'
                      }}
                    >
                      Verified Campus Infrastructure
                    </span>
                    <strong style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 600 }}>
                      4,000+ Sq. Meters Dedicated Learning Campus
                    </strong>
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: '#CBD5E1',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px'
                    }}
                  >
                    <MapPin size={13} color="#C5A880" />
                    <span>Konadasapura, Bengaluru</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): Verified Institutional Pillars */}
      <section
        className="section-ivory"
        style={{
          borderBottom: '1px solid rgba(16, 43, 73, 0.08)',
          padding: '2.5rem 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {[
              {
                icon: ShieldCheck,
                title: 'CBSE Affiliation',
                detail: `No. ${schoolInfo.affiliation.affiliationNo} · Code: ${schoolInfo.affiliation.schoolCode}`,
                sub: 'Up to Secondary (Class 10)'
              },
              {
                icon: Compass,
                title: '4,000+ Sq. Meters',
                detail: 'Lush Green Campus',
                sub: 'Konadasapura, Bengaluru'
              },
              {
                icon: Users,
                title: '1:25 Faculty Ratio',
                detail: 'Individual Mentorship',
                sub: 'Tailored Academic Attention'
              },
              {
                icon: BookOpen,
                title: 'Early Years to Class 10',
                detail: 'Structured Curriculum',
                sub: 'NCERT & NEP 2020 Aligned'
              }
            ].map((pillar, i) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    backgroundColor: '#FFFFFF',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(16, 43, 73, 0.06)',
                    boxShadow: 'var(--shadow-xs)'
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
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={20} color="var(--navy-primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.15rem' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', fontWeight: 600, color: '#334155', marginBottom: '0.1rem' }}>
                      {pillar.detail}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
                      {pillar.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Institutional Foundation & Leadership Welcome */}
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
            {/* Left: Academic Philosophy & Ethos */}
            <div>
              <span className="badge-navy" style={{ marginBottom: '0.85rem' }}>
                Institutional Overview
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
                An Educational Sanctuary Built on Purpose, Discipline & Empathy
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Established under the governance of the <strong>RIA Educational Trust</strong>, Rainbow Innovative Academy was founded with the clear objective of delivering academic excellence without compromising the joy of childhood discovery.
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Our 4,000+ sq. meter green campus in Konadasapura provides a secure, distraction-free environment where students develop critical thinking, scientific curiosity, and foundational leadership skills under qualified educators.
              </p>

              {/* Highlights Checklist */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'CBSE Syllabus with Smart Class Integration',
                  'Dedicated Physics, Chemistry & Biology Labs',
                  'Modern IT & Algorithmic Coding Workspace',
                  'Structured Athletic Coaching & Open Grounds',
                  'GPS-Monitored Safe School Bus Fleet',
                  'Optimal 1:25 Teacher-Student Ratio'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-rich)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, color: '#334155' }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-secondary">
                <span>Read Full Leadership Message</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: Authentic Leadership Profile Card */}
            <div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '2.25rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <img
                    src={leadership.founder.image}
                    alt={leadership.founder.name}
                    style={{
                      width: '82px',
                      height: '82px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      border: '2px solid var(--gold-border)'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                      {leadership.founder.name}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                      {leadership.founder.role}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
                      {leadership.founder.qualifications}
                    </p>
                  </div>
                </div>

                <blockquote
                  style={{
                    fontSize: '0.94rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    borderLeft: '3px solid var(--gold-accent)',
                    paddingLeft: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  "{leadership.founder.message}"
                </blockquote>

                <div
                  style={{
                    borderTop: '1px solid #E2E8F0',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.84rem'
                  }}
                >
                  <span style={{ color: '#64748B' }}>Principal: <strong>{leadership.principal.name}</strong> ({leadership.principal.qualifications})</span>
                  <Link to="/about" style={{ color: 'var(--navy-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>Message</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TYPE C (Light Blue-Grey #DCE5EE): Academic Spectrum */}
      <section className="section-padding section-blue-grey">
        <div className="container">
          <SectionHeader
            badge="ACADEMIC EXCELLENCE"
            title="Curriculum & Learning Pathways"
            subtitle="Structured around the CBSE academic framework, nurturing steady intellectual progression from early childhood through secondary board examinations."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {academicPrograms.map((program) => (
              <div
                key={program.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-xs)'
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
                <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(7, 23, 44, 0.88)',
                      color: '#E8D5B5',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {program.badge}
                  </span>
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    {program.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {program.grades} · Age {program.ageGroup}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                    {program.description}
                  </p>

                  <Link
                    to="/academics"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--navy-primary)',
                      marginTop: 'auto'
                    }}
                  >
                    <span>Explore Stage Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <Link to="/academics" className="btn-primary">
              <BookOpen size={16} />
              <span>View Full CBSE Academic Structure</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SECTION TYPE A (Warm Ivory #F4F1E9): Interactive Campus Facilities Experience */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="INTERACTIVE CAMPUS TOUR"
            title="Explore Our Campus Facilities"
            subtitle="Click or tap any facility tab to inspect authentic photographs, equipment standards, and student resources across our 4,000+ sq. meter campus."
          />

          {/* Interactive Campus Showcase Component */}
          <InteractiveCampus />
        </div>
      </section>

      {/* 6. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Curated Photo Gallery Preview */}
      <section className="section-padding section-grey-blue">
        <div className="container">
          <SectionHeader
            badge="CAMPUS LIFE IN ACTION"
            title="Visual Tour of Rainbow Innovative Academy"
            subtitle="Authentic moments of student discovery, scientific investigation, athletics, and cultural celebrations."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {galleryItems.slice(0, 4).map((item) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '240px',
                  boxShadow: 'var(--shadow-xs)',
                  border: '1px solid rgba(16, 43, 73, 0.08)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 23, 44, 0.88) 0%, rgba(7, 23, 44, 0.1) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                    color: '#FFFFFF'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', color: '#E8D5B5', fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#FFFFFF' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn-secondary">
              <span>Explore Complete Campus Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FEATURED SECTION (Deep Navy #102B49): Admissions 2026–27 CTA */}
      <section
        className="section-navy"
        style={{
          padding: '4.5rem 0',
          position: 'relative'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span className="badge-dark-gold" style={{ marginBottom: '1.25rem' }}>
            Admissions Session 2026–2027
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.25,
              marginBottom: '1.25rem'
            }}
          >
            Begin Your Child's Educational Journey at RIA
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.12rem)',
              color: '#CBD5E1',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: '680px',
              margin: '0 auto 2.25rem'
            }}
          >
            Enrollment is open for Pre-Primary through Class 10. We invite parents to tour our lush green campus in Konadasapura, meet our faculty, and inspect our interactive smart classrooms.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-gold" style={{ padding: '0.9rem 2.25rem' }}>
              <GraduationCap size={18} />
              <span>Submit Admission Enquiry</span>
            </Link>
            <Link to="/contact" className="btn-outline-white" style={{ padding: '0.9rem 2rem' }}>
              <Calendar size={18} />
              <span>Schedule Campus Visit</span>
            </Link>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              gap: '2.5rem',
              flexWrap: 'wrap',
              fontSize: '0.86rem',
              color: '#94A3B8'
            }}
          >
            <div>Admissions Desk: <strong style={{ color: '#F1F5F9' }}>+91 70907 96666</strong></div>
            <div>School Office: <strong style={{ color: '#F1F5F9' }}>+91 70909 96666</strong></div>
            <div>Hours: <strong style={{ color: '#F1F5F9' }}>Mon–Sat 8:30 AM – 4:30 PM</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
