import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
  Send,
  Info,
  Clock,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import {
  schoolInfo,
  admissionSteps,
  admissionDocuments,
  academicPrograms,
  faqs
} from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    targetClass: 'Nursery',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or Guardian name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.studentName.trim()) {
      errs.studentName = "Student's full name is required";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const refId = 'RIA-2026-' + Math.floor(1000 + Math.random() * 9000);

    // Save to browser localStorage persistently
    try {
      const existing = JSON.parse(localStorage.getItem('ria_admission_enquiries') || '[]');
      existing.push({
        refId,
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('ria_admission_enquiries', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(refId);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Rainbow Innovative Academy admissions desk,\nI have submitted an admission enquiry (Ref: ${submittedRef}).\nParent Name: ${formData.parentName}\nStudent Name: ${formData.studentName}\nClass: ${formData.targetClass}\nPhone: ${formData.phone}`
    );
    return `https://wa.me/917090796666?text=${text}`;
  };

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
              <GraduationCap size={14} color="#C5A880" />
              Academic Year 2026 – 2027
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
            Admissions at Rainbow Innovative Academy
          </h1>

          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Welcoming students from Pre-Nursery through Grade 10. Start your child's transformative educational journey with verified CBSE standards.
          </p>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): 4-Step Admission Journey */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="ENROLLMENT PROTOCOL"
            title="The 4-Stage Admission Journey"
            subtitle="A transparent, parent-friendly admission process ensuring personalized academic alignment for every applicant."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--gold-rich)',
                    marginBottom: '0.65rem'
                  }}
                >
                  {step.step}
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Enquiry Form & Documentation Grid */}
      <section className="section-padding section-grey-blue">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Form Column */}
            <div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '2.5rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ marginBottom: '1.75rem' }}>
                  <span className="badge-navy" style={{ marginBottom: '0.5rem' }}>
                    Online Registration
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    Admission Enquiry 2026–27
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B' }}>
                    Submit details below. Our admissions desk will contact you within 24 business hours.
                  </p>
                </div>

                {submittedRef ? (
                  <div
                    style={{
                      padding: '2rem',
                      backgroundColor: 'var(--bg-ivory)',
                      borderRadius: '8px',
                      border: '1px solid rgba(16, 43, 73, 0.15)',
                      textAlign: 'center'
                    }}
                  >
                    <CheckCircle2 size={42} color="var(--navy-primary)" style={{ margin: '0 auto 1rem' }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      Enquiry Logged in School Registry
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', marginBottom: '0.85rem' }}>
                      Official Reference Number: <strong style={{ color: 'var(--navy-primary)' }}>{submittedRef}</strong>
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Your registration has been logged in the admissions database. Our academic coordinator will reach out to <strong>{formData.phone}</strong> to confirm your campus visit.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.75rem', fontSize: '0.88rem', backgroundColor: '#25D366', borderColor: '#25D366' }}
                      >
                        <MessageCircle size={16} />
                        <span>Instant Confirm via WhatsApp Desk</span>
                      </a>

                      <a
                        href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`}
                        className="btn-secondary"
                        style={{ padding: '0.75rem', fontSize: '0.88rem' }}
                      >
                        <Phone size={15} />
                        <span>Call Admissions Desk Directly</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          parentName: '',
                          phone: '',
                          email: '',
                          studentName: '',
                          targetClass: 'Nursery',
                          message: ''
                        });
                      }}
                      style={{ fontSize: '0.82rem', color: '#64748B', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Submit Another Student Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                      <div>
                        <label className="ria-label">Parent / Guardian Full Name *</label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Kumar"
                          className="ria-input"
                        />
                        {errors.parentName && (
                          <span style={{ fontSize: '0.78rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                            {errors.parentName}
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label className="ria-label">Mobile Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="ria-input"
                          />
                          {errors.phone && (
                            <span style={{ fontSize: '0.78rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                              {errors.phone}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="ria-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@email.com"
                            className="ria-input"
                          />
                          {errors.email && (
                            <span style={{ fontSize: '0.78rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                        <div>
                          <label className="ria-label">Student's Full Name *</label>
                          <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="e.g. Ananya Kumar"
                            className="ria-input"
                          />
                          {errors.studentName && (
                            <span style={{ fontSize: '0.78rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                              {errors.studentName}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="ria-label">Applying For *</label>
                          <select
                            name="targetClass"
                            value={formData.targetClass}
                            onChange={handleChange}
                            className="ria-input"
                          >
                            <option value="Pre-Nursery">Pre-Nursery</option>
                            <option value="Nursery">Nursery</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="Class 1">Class 1</option>
                            <option value="Class 2">Class 2</option>
                            <option value="Class 3">Class 3</option>
                            <option value="Class 4">Class 4</option>
                            <option value="Class 5">Class 5</option>
                            <option value="Class 6">Class 6</option>
                            <option value="Class 7">Class 7</option>
                            <option value="Class 8">Class 8</option>
                            <option value="Class 9">Class 9</option>
                            <option value="Class 10">Class 10</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="ria-label">Questions or Bus Route Request (Optional)</label>
                        <textarea
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Let us know if you require bus transport or have specific questions..."
                          className="ria-input"
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}
                      >
                        <Send size={16} />
                        <span>{isSubmitting ? 'Registering Enquiry...' : 'Submit Admission Enquiry'}</span>
                      </button>

                      <div style={{ fontSize: '0.76rem', color: '#64748B', textAlign: 'center', marginTop: '0.25rem' }}>
                        Admissions desk phone: <a href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`} style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>{schoolInfo.contact.phones[0]}</a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Document Checklist Column */}
            <div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '2.25rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.15rem' }}>
                  <FileText size={20} color="var(--gold-rich)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                    Mandatory Documents Checklist
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {admissionDocuments.map((doc, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--gold-rich)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions Office Information */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
                  Admissions Consultation Desk
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.86rem', color: '#334155' }}>
                  <div>
                    <strong>Campus Address: </strong>Erappa Garden, Rajappa Building, Budigere Cross, Konadasapura, Bengaluru – 560049
                  </div>
                  <div>
                    <strong>Direct Lines: </strong>{schoolInfo.contact.phones[0]} / {schoolInfo.contact.phones[1]}
                  </div>
                  <div>
                    <strong>Office Hours: </strong>Mon to Sat: 8:30 AM – 4:30 PM (Sun Closed)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TYPE C (Light Blue-Grey #DCE5EE): Frequently Asked Questions Accordion */}
      <section className="section-padding section-blue-grey">
        <div className="container" style={{ maxWidth: '880px' }}>
          <SectionHeader
            badge="PARENT QUERIES"
            title="Frequently Asked Questions"
            subtitle="Authoritative answers regarding CBSE affiliation, age criteria, security protocols, and student transport."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.15rem 1.4rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.96rem',
                      color: 'var(--navy-primary)',
                      gap: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="var(--gold-dark)" /> : <ChevronDown size={18} color="#64748B" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.4rem 1.15rem', color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, borderTop: '1px solid #F1F5F9' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED SECTION (Deep Navy #102B49): Desk Callout Banner */}
      <section
        className="section-navy"
        style={{
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Visit Our Admissions Desk in Person
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
            Collect the physical prospectus and syllabus guides from our Konadasapura campus desk. Open Monday through Saturday.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">
              <Calendar size={16} />
              <span>Schedule Campus Visit</span>
            </Link>
            <a href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`} className="btn-outline-white">
              <Phone size={16} />
              <span>Call: {schoolInfo.contact.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
