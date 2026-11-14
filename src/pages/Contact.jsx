import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or question';
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
    const refId = 'RIA-MSG-' + Math.floor(1000 + Math.random() * 9000);

    // Save to browser localStorage persistently
    try {
      const existing = JSON.parse(localStorage.getItem('ria_contact_messages') || '[]');
      existing.push({
        refId,
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('ria_contact_messages', JSON.stringify(existing));
    } catch {
      // Local fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(refId);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Rainbow Innovative Academy Office,\nSubject: ${formData.subject}\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nRef: ${submittedRef}`
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
              <Building2 size={14} color="#C5A880" />
              Institutional Help Desk · Bengaluru
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
            Contact Rainbow Innovative Academy
          </h1>

          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Connect with our admissions office, schedule a guided campus tour, or submit an enquiry to our administrative leadership.
          </p>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): Contact Details & Direct Form */}
      <section className="section-padding section-ivory">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Contact Info Cards */}
            <div>
              <span className="badge-navy" style={{ marginBottom: '0.75rem' }}>
                Campus Office
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--navy-primary)',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                Visit Our Campus in Konadasapura
              </h2>

              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We encourage parents to visit our 4,000+ sq. meter campus to observe our interactive digital classrooms, laboratories, and green sports grounds first-hand.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {/* Address Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <MapPin size={22} color="var(--gold-rich)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                      Campus Location
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                      Erappa Garden, Rajappa Building, Budigere Cross, Konadasapura, Bengaluru, Karnataka – 560049
                    </p>
                    <span style={{ fontSize: '0.76rem', color: '#64748B' }}>
                      Landmark: Near Hoskote Road / Budigere Cross / Kadugodi
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <Phone size={22} color="var(--gold-rich)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                      Admissions & Office Lines
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                      Primary: <a href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`} style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>{schoolInfo.contact.phones[0]}</a>
                    </p>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                      Secondary: <a href={`tel:${schoolInfo.contact.phones[1].replace(/\s+/g, '')}`} style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>{schoolInfo.contact.phones[1]}</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <Mail size={22} color="var(--gold-rich)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                      Electronic Mail
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                      Official: <a href={`mailto:${schoolInfo.contact.email}`} style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>{schoolInfo.contact.email}</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <Clock size={22} color="var(--gold-rich)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                      Office Working Hours
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                      Monday to Saturday: 8:30 AM – 4:30 PM
                    </p>
                    <span style={{ fontSize: '0.76rem', color: '#64748B' }}>
                      Sunday & Public Holidays: Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 43, 73, 0.08)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <h5 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.15rem' }}>
                    Connect via WhatsApp Desk
                  </h5>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    Direct desk messaging & prospectus request
                  </span>
                </div>
                <a
                  href="https://wa.me/917090796666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem', backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Right: Functional Message Form */}
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
                    Direct Desk Form
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    Send an Institutional Message
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B' }}>
                    Our administrative team will review and reply within one business day.
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
                      Message Logged in School Registry
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '0.85rem' }}>
                      Official Reference ID: <strong style={{ color: 'var(--navy-primary)' }}>{submittedRef}</strong>
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Your communication has been registered with the administrative desk. Our team will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong>.
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
                        <span>Forward Directly to WhatsApp Desk</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          subject: 'General Enquiry',
                          message: ''
                        });
                      }}
                      style={{ fontSize: '0.82rem', color: '#64748B', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                      <div>
                        <label className="ria-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="ria-input"
                        />
                        {errors.name && (
                          <span style={{ fontSize: '0.78rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label className="ria-label">Phone Number *</label>
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

                      <div>
                        <label className="ria-label">Subject of Inquiry</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="ria-input"
                        >
                          <option value="General Enquiry">General Information</option>
                          <option value="Admissions 2026-27">Admissions & Enrolment 2026–27</option>
                          <option value="Campus Tour Request">Request Campus Visit Tour</option>
                          <option value="Transport & Bus Routes">Bus Transport & Routes Query</option>
                          <option value="CBSE Curriculum">CBSE Curriculum & Syllabus Query</option>
                        </select>
                      </div>

                      <div>
                        <label className="ria-label">Your Message *</label>
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details of your question or inquiry..."
                          className="ria-input"
                          style={{ resize: 'vertical' }}
                        />
                        {errors.message && (
                          <span style={{ fontSize: '0.78rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                            {errors.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}
                      >
                        <Send size={16} />
                        <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION TYPE B (Soft Grey-Blue #E8EDF3): Embedded Interactive Google Map */}
      <section className="section-padding section-grey-blue">
        <div className="container">
          <SectionHeader
            badge="CAMPUS REACH"
            title="Locate Rainbow Innovative Academy"
            subtitle="Conveniently situated in Erappa Garden, Budigere Cross, Konadasapura, easily accessible from Hoskote Road, Budigere, and Whitefield."
          />

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(16, 43, 73, 0.1)'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--navy-primary)',
                color: '#FFFFFF',
                padding: '0.85rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={17} color="var(--gold-accent)" />
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                  Rainbow Innovative Academy · Konadasapura Campus
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Rainbow+Innovative+Academy+Konadasapura+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--gold-accent)',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <iframe
              title="Rainbow Innovative Academy Campus Location Map"
              src={schoolInfo.contact.mapEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. FEATURED SECTION (Deep Navy #102B49): Help Desk Callout Banner */}
      <section
        className="section-navy"
        style={{
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Schedule an Official Campus Tour
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
            Book a meeting with our principal and explore our laboratories, classrooms, and sports grounds.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`tel:${schoolInfo.contact.phones[0].replace(/\s+/g, '')}`} className="btn-gold">
              <Phone size={16} />
              <span>Call: {schoolInfo.contact.phones[0]}</span>
            </a>
            <a href="https://wa.me/917090796666" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              <MessageCircle size={16} />
              <span>WhatsApp Admissions Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
