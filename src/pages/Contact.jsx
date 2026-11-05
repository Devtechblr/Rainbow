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
  Info
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) errs.phone = 'Contact phone number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
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
    // Simulate submission
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
            <span>We Are Here to Help</span>
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
            Contact <span style={{ color: '#F5C94C' }}>Rainbow Innovative Academy</span>
          </h1>

          <p style={{ color: '#E9F3ED', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Visit our Konadasapura campus, reach out via phone, or leave us a message. We look forward to welcoming you.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Contact Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span
                  style={{
                    color: '#ED8B37',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Get In Touch
                </span>
                <h2 style={{ fontSize: '2rem', color: '#173D55', marginTop: '0.3rem', marginBottom: '1rem' }}>
                  School Coordinates & Campus Office
                </h2>
                <p style={{ color: '#4A5568', fontSize: '1.02rem', lineHeight: 1.7 }}>
                  Our administrative reception is open Monday through Saturday for campus walkthroughs, prospectus
                  collections, and parent interactions.
                </p>
              </div>

              {/* Address Card */}
              <div
                className="ria-card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.75rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#FFF4E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ED8B37',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#173D55', marginBottom: '0.35rem' }}>Campus Address</h4>
                  <p style={{ color: '#4A5568', fontSize: '0.96rem', lineHeight: 1.6 }}>
                    {schoolInfo.contact.address}
                  </p>
                  <span style={{ fontSize: '0.85rem', color: '#ED8B37', fontWeight: 600, marginTop: '0.4rem', display: 'block' }}>
                    Landmark: {schoolInfo.contact.landmark}
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div
                className="ria-card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.75rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#E9F3ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38A169',
                    flexShrink: 0
                  }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#173D55', marginBottom: '0.35rem' }}>Direct Helpline</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {schoolInfo.contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        style={{ color: '#173D55', fontSize: '1.05rem', fontWeight: 700 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#ED8B37')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#173D55')}
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email & Office Hours Card */}
              <div
                className="ria-card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.75rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#EBF8FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3182CE',
                    flexShrink: 0
                  }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#173D55', marginBottom: '0.35rem' }}>Email & Hours</h4>
                  <a
                    href={`mailto:${schoolInfo.contact.email}`}
                    style={{ color: '#3182CE', fontWeight: 600, fontSize: '0.96rem', display: 'block', marginBottom: '0.5rem' }}
                  >
                    {schoolInfo.contact.email}
                  </a>
                  <p style={{ color: '#718096', fontSize: '0.88rem' }}>
                    {schoolInfo.contact.officeHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div
              className="ria-card"
              style={{
                backgroundColor: '#FFFAF2',
                padding: '2.5rem',
                borderRadius: '24px',
                border: '1px solid #E2E8F0'
              }}
            >
              <h3 style={{ fontSize: '1.6rem', color: '#173D55', marginBottom: '0.5rem' }}>
                Send Us a Message
              </h3>
              <p style={{ color: '#718096', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
                Have a query regarding curriculum, transport routes, or school policies? We're here to assist.
              </p>

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
                  <strong>Frontend Demo Notice:</strong> Form submissions are validated in this interface. For immediate
                  assistance, please call +91 70907 96666.
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
                  <h4 style={{ fontSize: '1.35rem', color: '#173D55', marginBottom: '0.5rem' }}>
                    Message Form Validated!
                  </h4>
                  <p style={{ color: '#2F855A', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your test query regarding "
                    {formData.subject}" has been successfully completed in this demo.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label className="ria-label">
                      Your Full Name <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="ria-input"
                    />
                    {errors.name && (
                      <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label className="ria-label">
                        Phone Number <span style={{ color: '#E53E3E' }}>*</span>
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
                        placeholder="e.g. priya@example.com"
                        className="ria-input"
                      />
                      {errors.email && (
                        <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="ria-label">
                      Subject <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Inquiry regarding Bus Route from Kadugodi"
                      className="ria-input"
                    />
                    {errors.subject && (
                      <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="ria-label">
                      Your Message <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your detailed questions or comments here..."
                      className="ria-input"
                      style={{ resize: 'vertical' }}
                    />
                    {errors.message && (
                      <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginTop: '0.3rem', display: 'block' }}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map & Directions Link */}
      <section className="section-padding" style={{ backgroundColor: '#FFFAF2' }}>
        <div className="container">
          <ChalkHeading
            badge="Find Our Campus"
            title="Location &"
            highlightWord="Directions"
            subtitle="Conveniently located at Erappa Garden, Konadasapura in Bengaluru Urban."
          />

          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '6px solid #FFFFFF',
              position: 'relative'
            }}
          >
            <iframe
              src={schoolInfo.contact.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rainbow Innovative Academy Campus Google Map"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://maps.google.com/?q=Rainbow+Innovative+Academy+Konadasapura+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink size={18} />
              <span>Open in Google Maps Navigation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

