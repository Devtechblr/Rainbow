import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const ApplyNow = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Nursery',
    visitDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or Guardian full name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile contact number is required';
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

  const generateRef = () => {
    return 'RIA-2026-' + Math.floor(1000 + Math.random() * 9000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const ref = generateRef();
    setSubmittedRef(ref);

    // Save record securely in browser storage
    try {
      const records = JSON.parse(localStorage.getItem('ria_admission_applications') || '[]');
      records.push({
        refId: ref,
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('ria_admission_applications', JSON.stringify(records));
    } catch {
      // Local fallback
    }

    setIsPrepared(true);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Rainbow Innovative Academy - Admission Enquiry (2026-2027)*\n` +
      `*Application Ref:* ${submittedRef}\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Contact Phone:* ${formData.phone}\n` +
      `*Email Address:* ${formData.email}\n` +
      `*Student Name:* ${formData.studentName}\n` +
      `*Applying For Grade:* ${formData.grade}\n` +
      `*Preferred Visit Date:* ${formData.visitDate || 'To be scheduled'}\n` +
      `*Notes / Questions:* ${formData.message || 'None'}\n` +
      `-----------------------------------------\n` +
      `Dispatched via RIA Official Portal.`
    );
    return `https://wa.me/917090796666?text=${text}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Admission Enquiry 2026-27 - ${formData.studentName} [Ref: ${submittedRef}]`);
    const body = encodeURIComponent(
      `To,\nAdmissions Committee\nRainbow Innovative Academy\nKonadasapura, Bengaluru\n\n` +
      `Dear Admissions Desk,\n\n` +
      `I would like to submit an admission enquiry for Academic Session 2026–2027:\n\n` +
      `Application Reference: ${submittedRef}\n` +
      `Parent / Guardian: ${formData.parentName}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email}\n` +
      `Student Name: ${formData.studentName}\n` +
      `Grade Applying For: ${formData.grade}\n` +
      `Preferred Visit Date: ${formData.visitDate || 'Please advise available slots'}\n` +
      `Questions / Remarks: ${formData.message || 'None'}\n\n` +
      `Thank you,\n${formData.parentName}`
    );
    return `mailto:${schoolInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setIsPrepared(false);
    setSubmittedRef(null);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      studentName: '',
      grade: 'Nursery',
      visitDate: '',
      message: ''
    });
  };

  return (
    <div>
      {/* 1. HERO (Deep Plum #21162E) */}
      <section
        className="section-plum"
        style={{
          padding: '6rem 0 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="ambient-glow-coral" style={{ top: '-160px', right: '-120px' }} />

        <div className="container" style={{ maxWidth: '860px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem', display: 'inline-block' }}
          >
            <span className="badge-dark-yellow">
              <Sparkles size={14} />
              <span>Session 2026–2027 Application Portal</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              color: 'var(--cream-warm)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '1rem'
            }}
          >
            Admission Enquiry Form
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'var(--text-light-muted)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            Submit an enquiry for your child. Our admissions officers will promptly guide you through the next steps.
          </motion.p>
        </div>
      </section>

      {/* 2. FORM & COORDINATES SECTION (Warm Cream #FFF8F0) */}
      <section className="section-padding section-cream">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left: Direct Desk Information */}
            <div>
              <span className="badge-coral" style={{ marginBottom: '1rem' }}>
                Contact Coordinates
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                Connect with Our Admissions Team
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin size={22} color="var(--coral-vibrant)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 0.2rem' }}>
                      Campus Address
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                      {schoolInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Phone size={22} color="var(--coral-vibrant)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 0.2rem' }}>
                      Phone Lines
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                      Admissions: <strong>{schoolInfo.contact.phones[0]}</strong> / Office: <strong>{schoolInfo.contact.phones[1]}</strong>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Mail size={22} color="var(--coral-vibrant)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 0.2rem' }}>
                      Email
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                      {schoolInfo.contact.email}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Clock size={22} color="var(--yellow-sunshine)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 0.2rem' }}>
                      Office Hours
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                      {schoolInfo.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  height: '240px'
                }}
              >
                <iframe
                  title="Campus Location Map"
                  src={schoolInfo.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Modern Application Form */}
            <div>
              <div
                className="card-cream"
                style={{
                  padding: '2.5rem',
                  borderTop: '5px solid var(--coral-vibrant)'
                }}
              >
                {!isPrepared ? (
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <span className="badge-yellow" style={{ marginBottom: '0.65rem' }}>
                        Session 2026–2027
                      </span>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        Student Application Details
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                      <div>
                        <label className="ria-label" htmlFor="parentName">
                          Parent / Guardian Name <span style={{ color: 'var(--coral-vibrant)' }}>*</span>
                        </label>
                        <input
                          id="parentName"
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Anand Sharma"
                          className="ria-input"
                        />
                        {errors.parentName && (
                          <div style={{ color: 'var(--coral-vibrant)', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                            {errors.parentName}
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label className="ria-label" htmlFor="phone">
                            Phone Number <span style={{ color: 'var(--coral-vibrant)' }}>*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 9876543210"
                            className="ria-input"
                          />
                          {errors.phone && (
                            <div style={{ color: 'var(--coral-vibrant)', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                              {errors.phone}
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="ria-label" htmlFor="email">
                            Email <span style={{ color: 'var(--coral-vibrant)' }}>*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. anand@example.com"
                            className="ria-input"
                          />
                          {errors.email && (
                            <div style={{ color: 'var(--coral-vibrant)', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                        <div>
                          <label className="ria-label" htmlFor="studentName">
                            Student Name <span style={{ color: 'var(--coral-vibrant)' }}>*</span>
                          </label>
                          <input
                            id="studentName"
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="e.g. Rohan Sharma"
                            className="ria-input"
                          />
                          {errors.studentName && (
                            <div style={{ color: 'var(--coral-vibrant)', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                              {errors.studentName}
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="ria-label" htmlFor="grade">
                            Grade Applying For
                          </label>
                          <select
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            className="ria-input"
                            style={{ cursor: 'pointer' }}
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
                        <label className="ria-label" htmlFor="visitDate">
                          Preferred Campus Visit Date (Optional)
                        </label>
                        <input
                          id="visitDate"
                          type="date"
                          name="visitDate"
                          value={formData.visitDate}
                          onChange={handleChange}
                          className="ria-input"
                        />
                      </div>

                      <div>
                        <label className="ria-label" htmlFor="message">
                          Questions or Transport Inquiries (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="2"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="e.g. Bus transport route inquiry..."
                          className="ria-input"
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-coral"
                        style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem' }}
                      >
                        <Send size={18} />
                        <span>Submit Admission Enquiry</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Real Configured Transmission Panel */
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(56, 161, 105, 0.15)',
                        color: '#38A169',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.25rem'
                      }}
                    >
                      <CheckCircle2 size={32} />
                    </div>

                    <span className="badge-coral" style={{ marginBottom: '0.85rem' }}>
                      Application Ref: {submittedRef}
                    </span>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.65rem' }}>
                      Application Dossier Ready
                    </h3>

                    <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                      Your enquiry for <strong>{formData.studentName}</strong> ({formData.grade}) has been formatted for the admissions desk under reference <strong>{submittedRef}</strong>.
                      <br />
                      Dispatch directly using one of the configured options below:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-coral"
                        style={{
                          backgroundColor: '#25D366',
                          borderColor: '#25D366',
                          color: '#FFFFFF',
                          padding: '0.9rem',
                          fontWeight: 700
                        }}
                      >
                        <MessageCircle size={18} />
                        <span>Dispatch to Official WhatsApp (+91 70907 96666)</span>
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="btn-plum"
                        style={{ padding: '0.9rem' }}
                      >
                        <Mail size={18} />
                        <span>Email to rainbowinnovativeacademy@gmail.com</span>
                      </a>
                    </div>

                    <button
                      onClick={handleReset}
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--coral-vibrant)',
                        textDecoration: 'underline',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      ← Submit another enquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
