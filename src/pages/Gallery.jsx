import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Maximize2, Tag, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';
import Lightbox from '../components/Lightbox';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const categories = ['All', 'Academics', 'STEM', 'Early Years', 'Sports', 'Events'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = () => {
    setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setSelectedItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
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
              <Camera size={14} color="#C5A880" />
              Campus Visual Tour
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
            Campus Visual Gallery
          </h1>

          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Authentic photographs of smart classrooms, science and IT laboratories, athletics fields, performing arts, and student life at Rainbow Innovative Academy.
          </p>
        </div>
      </section>

      {/* 2. SECTION TYPE A (Warm Ivory #F4F1E9): Editorial Gallery Grid */}
      <section className="section-padding section-ivory">
        <div className="container">
          <SectionHeader
            badge="AUTHENTIC PHOTOGRAPHY"
            title="Life Across Our 4,000+ sq. m Campus"
            subtitle="Click or tap any photograph to open the high-resolution lightbox with keyboard arrow navigation."
          />

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginBottom: '3rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.35rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--navy-primary)' : 'rgba(16, 43, 73, 0.15)',
                  backgroundColor: activeCategory === cat ? 'var(--navy-primary)' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--navy-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? 'var(--shadow-sm)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Editorial Photographic Grid with Diverse Proportions */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredItems.map((item, index) => {
              // Create an editorial rhythm: first card and every 5th card can span slightly taller
              const isFeatured = index % 5 === 0;

              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    height: isFeatured ? '320px' : '260px',
                    cursor: 'pointer',
                    backgroundColor: '#0A1B2E',
                    border: '1px solid rgba(16, 43, 73, 0.08)',
                    boxShadow: 'var(--shadow-xs)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.04)';
                    const overlay = e.currentTarget.querySelector('.zoom-hint');
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                    const overlay = e.currentTarget.querySelector('.zoom-hint');
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 23, 44, 0.92) 0%, rgba(7, 23, 44, 0.25) 55%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.35rem 1.5rem',
                      color: '#FFFFFF'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--gold-accent)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {item.category}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        lineHeight: 1.3
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Zoom Hint Icon */}
                  <div
                    className="zoom-hint"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(7, 23, 44, 0.75)',
                      padding: '0.45rem',
                      borderRadius: '6px',
                      color: '#FFFFFF',
                      opacity: 0,
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SECTION (Deep Navy #102B49): Schedule Visit CTA Banner */}
      <section
        className="section-navy"
        style={{
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Experience Our Campus in Person
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
            We welcome prospective families to visit Rainbow Innovative Academy in Konadasapura, explore our classrooms and laboratories, and meet our faculty.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">
              <Calendar size={16} />
              <span>Schedule Campus Tour</span>
            </Link>
            <Link to="/admissions" className="btn-outline-white">
              <GraduationCap size={16} />
              <span>Admissions 2026–27</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <Lightbox
          item={filteredItems[selectedItemIndex]}
          total={filteredItems.length}
          currentIndex={selectedItemIndex}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Gallery;
