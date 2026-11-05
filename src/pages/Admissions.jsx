import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles,
  Info
} from 'lucide-react';
import {
  schoolInfo,
  admissionSteps,
  admissionDocuments,
  academicPrograms,
  faqs
} from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';

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
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or Guardian name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com)';
    }
    if (!formData.studentName.trim()) {
      errs.studentName = "Student's name is required";
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
    // Simulate frontend submission demo
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
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
            <span>Academic Year 2025 – 2026</span>
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
            Admissions at <span style={{ color: '#F5C94C' }}>Rainbow Innovative Academy</span>
          </h1>

          <p style={{ color: '#E9F3ED', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            We welcome curious young learners from Pre-Nursery to Grade 10. Start your child's transformative educational
            journey with us today.
          </p>
        </div>
      </section>

      {/* 4-Step Admission Journey */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="Admission Process"
            title="Simple 4-Step"
            highlightWord="Enrolment Journey"
            subtitle="Our parent-friendly admission process ensures transparent guidance at every stage."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}
          >
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="ria-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  position: 'relative',
                  borderTop: '5px solid #ED8B37'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#ED8B37',
                    lineHeight: 1
                  }}
                >
                  Step {step.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#173D55' }}>{step.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form & Contact Assistance */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Interactive Enquiry Form */}
            <div
              className="ria-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '2.5rem',
                borderRadius: '24px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  style={{
                    color: '#ED8B37',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Online Enquiry Form
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#173D55', marginTop: '0.3rem' }}>
                  Register Your Child's Interest
                </h3>
                <p style={{ color: '#718096', fontSize: '0.94rem', marginTop: '0.4rem' }}>
                  Please fill in the details below. Our admissions coordinator will get in touch with you.
                </p>
              </div>

              {/* Demo Notice */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#FFF4E5',
                  border: '1px solid #ED8B37',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  color: '#9C4221'
                }}
              >
                <Info size={18} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Frontend Demo Notice:</strong> Submissions are validated and simulated on the frontend; no real
                  server email is transmitted. For official enquiries, kindly call our campus desk directly.
                </span>
              </div>

              {isSuccess ? (
                <div
                  style={{
                    backgroundColor: '#E9F3ED',
                    border: '2px solid #38A169',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#38A169',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: '#173D55', marginBottom: '0.5rem' }}>
                    Demo Submission Received!
                  </h4>
                  <p style={{ color: '#2F855A', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.parentName}</strong>! Your demo enquiry for{' '}
                    <strong>{formData.studentName}</strong> ({formData.targetClass}) has been validated successfully in this
                    preview.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        parentName: '',
                        phone: '',
                        email: '',
                        studentName: '',
                        targetClass: 'Nursery',
                        message: ''
                      });
                    }}
                    className="btn-secondary"
                  >
                    Submit Another Test Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Parent Name */}
                  <div>
                    <label className="ria-label">
                      Parent / Guardian Full Name <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="ria-input"
                    />
                    {errors.parentName && (
                      <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                        {errors.parentName}
                      </span>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label className="ria-label">
                        Contact Phone Number <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="ria-input"
                      />
                      {errors.phone && (
                        <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="ria-label">
                        Email Address <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className="ria-input"
                      />
                      {errors.email && (
                        <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Student Name & Class Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label className="ria-label">
                        Student Full Name <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Kumar"
                        className="ria-input"
                      />
                      {errors.studentName && (
                        <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                          {errors.studentName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="ria-label">Class of Interest</label>
                      <select
                        name="targetClass"
                        value={formData.targetClass}
                        onChange={handleChange}
                        className="ria-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Pre-Nursery">Pre-Nursery (Age 2.5+)</option>
                        <option value="Nursery">Nursery (Age 3+)</option>
                        <option value="LKG">LKG (Age 4+)</option>
                        <option value="UKG">UKG (Age 5+)</option>
                        <option value="Grade 1">Class 1</option>
                        <option value="Grade 2">Class 2</option>
                        <option value="Grade 3">Class 3</option>
                        <option value="Grade 4">Class 4</option>
                        <option value="Grade 5">Class 5</option>
                        <option value="Grade 6">Class 6</option>
                        <option value="Grade 7">Class 7</option>
                        <option value="Grade 8">Class 8</option>
                        <option value="Grade 9">Class 9</option>
                        <option value="Grade 10">Class 10 (CBSE)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="ria-label">Additional Note or Specific Query</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your child's interests or bus route requirements..."
                      className="ria-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    {isSubmitting ? (
                      <span>Validating Demo Enquiry...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Admission Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Required Documents & Fee Policy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Documents Checklist */}
              <div
                className="ria-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <FileText size={24} color="#ED8B37" />
                  <h3 style={{ fontSize: '1.3rem', color: '#173D55' }}>Documents Required for Admission</h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {admissionDocuments.map((doc, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: '#4A5568'
                      }}
                    >
                      <CheckCircle2 size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fee Information Policy */}
              <div
                className="ria-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2rem',
                  borderLeft: '5px solid #173D55'
                }}
              >
                <h4 style={{ fontSize: '1.2rem', color: '#173D55', marginBottom: '0.75rem' }}>
                  Fee Structure Transparency
                </h4>
                <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  As per the official policy of Rainbow Innovative Academy, competitive and transparent fee schedules are
                  provided directly to parents during the personal campus interaction session. This ensures customized
                  clarity regarding class tier, bus transit zones, lab kits, and sports uniforms.
                </p>
                <p style={{ color: '#718096', fontSize: '0.88rem' }}>
                  No hidden fees or unexpected midterm charges are levied.
                </p>
              </div>

              {/* Direct Helpdesk Call Card */}
              <div
                style={{
                  backgroundColor: '#173D55',
                  color: '#FFFAF2',
                  padding: '2rem',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <h4 style={{ fontSize: '1.2rem', color: '#F5C94C' }}>Direct Admissions Helpline</h4>
                <p style={{ color: '#E9F3ED', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Prefer talking to our admissions counselor? Feel free to call us or visit between 8:30 AM and 4:30 PM.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {schoolInfo.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '1rem'
                      }}
                    >
                      <Phone size={18} color="#ED8B37" />
                      <span>{phone}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${schoolInfo.contact.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: '#E9F3ED',
                      fontSize: '0.9rem',
                      marginTop: '0.25rem'
                    }}
                  >
                    <Mail size={16} color="#38A169" />
                    <span>{schoolInfo.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <ChalkHeading
            badge="Common Inquiries"
            title="Admissions"
            highlightWord="FAQs"
            subtitle="Clear answers to the most common questions regarding admission criteria, age limits, and bus routes."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2.5rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFAF2',
                  border: '1px solid rgba(23, 61, 85, 0.08)',
                  borderRadius: '16px',
                  padding: '1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.65rem' }}>
                  <HelpCircle size={22} color="#ED8B37" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <h4 style={{ fontSize: '1.15rem', color: '#173D55', fontWeight: 700 }}>
                    {faq.q}
                  </h4>
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.96rem', lineHeight: 1.7, paddingLeft: '2.2rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

