import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Building2,
  Users,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Sparkles,
  Search,
  Layers,
  MapPin,
  Calendar,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { schoolInfo, mandatoryDisclosureData } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const MandatoryDisclosure = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState({
    general: true,
    documents: true,
    academics: true,
    staff: true,
    infrastructure: true
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const navCategories = [
    { id: 'all', title: 'Full Appendix-IX', count: '5 Sections', icon: Layers },
    { id: 'general', title: 'General Info', count: '8 Parameters', icon: Building2 },
    { id: 'documents', title: 'Compliance Documents', count: '8 Certificates', icon: FileCheck },
    { id: 'academics', title: 'Academics & Fees', count: 'Fees & Committees', icon: BookOpen },
    { id: 'staff', title: 'Faculty & Ratios', count: '1:15 Ratio', icon: Users },
    { id: 'infrastructure', title: 'Infrastructure', count: '15 Classrooms', icon: ShieldCheck }
  ];

  // Filtering for documents
  const filteredDocs = mandatoryDisclosureData.documents.filter((d) =>
    searchQuery === ''
      ? true
      : d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.authority.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* ==========================================================================
          1. STATUTORY EXECUTIVE HEADER (Deep Plum #21162E)
          ========================================================================== */}
      <section
        className="section-plum"
        style={{
          padding: '6.5rem 0 4.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="ambient-glow-lavender" style={{ top: '-160px', right: '-120px' }} />
        <div className="ambient-glow-coral" style={{ bottom: '-150px', left: '-150px' }} />

        <div className="container" style={{ maxWidth: '920px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem', display: 'inline-block' }}
          >
            <span className="badge-dark-yellow">
              <ShieldCheck size={15} color="var(--yellow-sunshine)" />
              <span>CBSE SARAS Appendix-IX Mandatory Public Disclosure</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.4rem, 4.6vw, 3.6rem)',
              color: 'var(--cream-warm)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}
          >
            Official Statutory Records & Compliances
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'var(--text-light-muted)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 2.5rem'
            }}
          >
            Statutory records, government recognitions, architectural parameters, and academic oversight in full compliance with the Central Board of Secondary Education.
          </motion.p>

          {/* Search / Filter Bar */}
          <div
            style={{
              maxWidth: '560px',
              margin: '0 auto',
              position: 'relative'
            }}
          >
            <Search
              size={18}
              color="var(--lavender-soft)"
              style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search compliance certificates, metrics, or governance..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.95rem 1.25rem 0.95rem 3.25rem',
                borderRadius: '50px',
                border: '1px solid rgba(185, 167, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                outline: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s'
              }}
            />
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. COMPLIANCE SUMMARY STRIP
          ========================================================================== */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.5rem 0',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
              gap: '1.25rem',
              textAlign: 'center'
            }}
          >
            {[
              { label: 'CBSE Affiliation No', value: schoolInfo.affiliation.affiliationNo, note: 'Secondary Stage' },
              { label: 'Official School Code', value: schoolInfo.affiliation.schoolCode, note: 'State Registered' },
              { label: 'Managing Trust', value: 'RIA Educational Trust', note: 'Registered Society' },
              { label: 'Affiliation Status', value: 'Active & In Good Standing', note: 'Up to Class 10' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--cream-warm)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--plum-deep)', margin: '0.2rem 0' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--coral-vibrant)', fontWeight: 600 }}>
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. INTERACTIVE SECTION TABS & COMPLIANCE CARDS
          ========================================================================== */}
      <section className="section-padding section-cream">
        <div className="container" style={{ maxWidth: '1120px' }}>
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}
          >
            {navCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.75rem 1.35rem',
                    borderRadius: '50px',
                    backgroundColor: isActive ? 'var(--plum-deep)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--plum-deep)' : 'var(--border-light)',
                    boxShadow: isActive ? 'var(--shadow-plum)' : 'var(--shadow-xs)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    transition: 'all 0.25s ease'
                  }}
                >
                  <CatIcon size={16} color={isActive ? 'var(--yellow-sunshine)' : 'var(--coral-vibrant)'} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* ====================================================================
                SECTION A: GENERAL INSTITUTIONAL INFORMATION
                ==================================================================== */}
            {(activeTab === 'all' || activeTab === 'general') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => toggleSection('general')}
                  style={{
                    padding: '1.5rem 2rem',
                    backgroundColor: 'var(--cream-warm)',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--coral-vibrant)',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                    >
                      <Building2 size={22} />
                    </div>
                    <div>
                      <span className="badge-coral" style={{ fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                        Section A
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        General Institutional Information
                      </h3>
                    </div>
                  </div>
                  {openSections.general ? <ChevronUp size={22} color="var(--text-dark)" /> : <ChevronDown size={22} color="var(--text-dark)" />}
                </div>

                {openSections.general && (
                  <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                        gap: '1.25rem'
                      }}
                    >
                      {mandatoryDisclosureData.generalInfo.map((row, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '1.25rem',
                            backgroundColor: 'var(--cream-warm)',
                            borderRadius: '16px',
                            border: '1px solid var(--border-light)'
                          }}
                        >
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            {row.label}
                          </div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: '0.35rem', wordBreak: 'break-word' }}>
                            {row.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ====================================================================
                SECTION B: COMPLIANCE DOCUMENTS & STATUTORY CERTIFICATES
                ==================================================================== */}
            {(activeTab === 'all' || activeTab === 'documents') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => toggleSection('documents')}
                  style={{
                    padding: '1.5rem 2rem',
                    backgroundColor: 'var(--cream-warm)',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--plum-deep)',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                    >
                      <FileCheck size={22} />
                    </div>
                    <div>
                      <span className="badge-lavender" style={{ fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                        Section B
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        Documents & Statutory Compliance Certificates
                      </h3>
                    </div>
                  </div>
                  {openSections.documents ? <ChevronUp size={22} color="var(--text-dark)" /> : <ChevronDown size={22} color="var(--text-dark)" />}
                </div>

                {openSections.documents && (
                  <div style={{ padding: '2rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      All statutory documents have been submitted to and vetted by the CBSE SARAS inspection committee. Certified original physical copies are maintained in the Principal's Office for public inspection.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {filteredDocs.map((doc, idx) => (
                        <div
                          key={doc.id}
                          style={{
                            padding: '1.25rem 1.5rem',
                            backgroundColor: 'var(--cream-warm)',
                            borderRadius: '16px',
                            border: '1px solid var(--border-light)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1, minWidth: '280px' }}>
                            <div
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                backgroundColor: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--coral-vibrant)',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                flexShrink: 0
                              }}
                            >
                              0{idx + 1}
                            </div>
                            <div>
                              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                                {doc.title}
                              </h4>
                              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                <strong>Authority:</strong> {doc.authority} · <em>{doc.note}</em>
                              </div>
                            </div>
                          </div>

                          <div>
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                backgroundColor: 'rgba(56, 161, 105, 0.12)',
                                color: '#1C5B39',
                                border: '1px solid rgba(56, 161, 105, 0.3)',
                                padding: '0.4rem 0.95rem',
                                borderRadius: '50px',
                                fontSize: '0.82rem',
                                fontWeight: 700
                              }}
                            >
                              <CheckCircle2 size={15} color="#38A169" />
                              <span>{doc.status}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Official Physical Verification Notice */}
                    <div
                      style={{
                        marginTop: '2rem',
                        padding: '1.25rem 1.5rem',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid var(--yellow-sunshine)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <ShieldCheck size={28} color="#8C6500" style={{ flexShrink: 0 }} />
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                        <strong>Physical Document Inspection Notice:</strong> Certified original documents are open for inspection by parents and guardians at the Administrative Desk, Rainbow Innovative Academy, Erappa Garden, Konadasapura, Bengaluru – 560049 during office hours (Mon–Sat: 8:30 AM – 4:30 PM).
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ====================================================================
                SECTION C: ACADEMICS, FEES & COMMITTEES
                ==================================================================== */}
            {(activeTab === 'all' || activeTab === 'academics') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => toggleSection('academics')}
                  style={{
                    padding: '1.5rem 2rem',
                    backgroundColor: 'var(--cream-warm)',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--coral-vibrant)',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                    >
                      <BookOpen size={22} />
                    </div>
                    <div>
                      <span className="badge-yellow" style={{ fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                        Section C
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        Fee Structure, Academic Calendar & Committees
                      </h3>
                    </div>
                  </div>
                  {openSections.academics ? <ChevronUp size={22} color="var(--text-dark)" /> : <ChevronDown size={22} color="var(--text-dark)" />}
                </div>

                {openSections.academics && (
                  <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                      1. Approved Fee Structure Guidelines (Session 2026–2027)
                    </h4>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                        gap: '1.25rem',
                        marginBottom: '2.5rem'
                      }}
                    >
                      {mandatoryDisclosureData.academicsAndCommittees.feeStructure.map((fee, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '1.25rem',
                            backgroundColor: 'var(--cream-warm)',
                            borderRadius: '16px',
                            border: '1px solid var(--border-light)',
                            borderTop: '4px solid var(--coral-vibrant)'
                          }}
                        >
                          <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                            {fee.stage}
                          </div>
                          <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                            {fee.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                      2. Statutory Oversight Bodies
                    </h4>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                        gap: '1.5rem'
                      }}
                    >
                      <div
                        style={{
                          padding: '1.5rem',
                          backgroundColor: 'var(--cream-warm)',
                          borderRadius: '16px',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <Users size={18} color="var(--coral-vibrant)" />
                          <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                            School Management Committee (SMC)
                          </h5>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                          {mandatoryDisclosureData.academicsAndCommittees.smc}
                        </p>
                      </div>

                      <div
                        style={{
                          padding: '1.5rem',
                          backgroundColor: 'var(--cream-warm)',
                          borderRadius: '16px',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <GraduationCap size={18} color="var(--lavender-soft)" />
                          <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                            Parent-Teacher Association (PTA)
                          </h5>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                          {mandatoryDisclosureData.academicsAndCommittees.pta}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ====================================================================
                SECTION D: STAFFING & RATIOS
                ==================================================================== */}
            {(activeTab === 'all' || activeTab === 'staff') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => toggleSection('staff')}
                  style={{
                    padding: '1.5rem 2rem',
                    backgroundColor: 'var(--cream-warm)',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--plum-deep)',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                    >
                      <Users size={22} />
                    </div>
                    <div>
                      <span className="badge-coral" style={{ fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                        Section D
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        Teaching Faculty & Teacher-Student Ratio
                      </h3>
                    </div>
                  </div>
                  {openSections.staff ? <ChevronUp size={22} color="var(--text-dark)" /> : <ChevronDown size={22} color="var(--text-dark)" />}
                </div>

                {openSections.staff && (
                  <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                        gap: '1.25rem'
                      }}
                    >
                      <div style={{ padding: '1.25rem', backgroundColor: 'var(--cream-warm)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                          Principal
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '0.3rem' }}>
                          {mandatoryDisclosureData.staffDetails.principal}
                        </div>
                      </div>

                      <div style={{ padding: '1.25rem', backgroundColor: 'var(--cream-warm)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                          Teacher-Student Ratio
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--coral-vibrant)', marginTop: '0.3rem' }}>
                          {mandatoryDisclosureData.staffDetails.teacherStudentRatio}
                        </div>
                      </div>

                      <div style={{ padding: '1.25rem', backgroundColor: 'var(--cream-warm)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                          Special Educator
                        </div>
                        <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: '0.3rem' }}>
                          {mandatoryDisclosureData.staffDetails.specialEducator}
                        </div>
                      </div>

                      <div style={{ padding: '1.25rem', backgroundColor: 'var(--cream-warm)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                          Wellness & Counselor
                        </div>
                        <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: '0.3rem' }}>
                          {mandatoryDisclosureData.staffDetails.wellnessCounselor}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ====================================================================
                SECTION E: INFRASTRUCTURE & SAFETY PARAMETERS
                ==================================================================== */}
            {(activeTab === 'all' || activeTab === 'infrastructure') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => toggleSection('infrastructure')}
                  style={{
                    padding: '1.5rem 2rem',
                    backgroundColor: 'var(--cream-warm)',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--coral-vibrant)',
                        boxShadow: 'var(--shadow-xs)'
                      }}
                    >
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <span className="badge-lavender" style={{ fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                        Section E
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        Campus Infrastructure & Safety Parameters
                      </h3>
                    </div>
                  </div>
                  {openSections.infrastructure ? <ChevronUp size={22} color="var(--text-dark)" /> : <ChevronDown size={22} color="var(--text-dark)" />}
                </div>

                {openSections.infrastructure && (
                  <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                        gap: '1.25rem'
                      }}
                    >
                      {mandatoryDisclosureData.infrastructureDetails.map((infra, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '1.25rem',
                            backgroundColor: 'var(--cream-warm)',
                            borderRadius: '16px',
                            border: '1px solid var(--border-light)'
                          }}
                        >
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            {infra.metric}
                          </div>
                          <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '0.35rem' }}>
                            {infra.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Third-Party CBSE SARAS Verification Portal Link */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a
              href="https://saras.cbse.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-plum"
              style={{ gap: '0.65rem', padding: '0.95rem 2rem', fontSize: '0.95rem' }}
            >
              <span>Verify on Official CBSE SARAS Portal</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
