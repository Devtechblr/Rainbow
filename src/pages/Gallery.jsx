import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2, Tag, Eye } from 'lucide-react';
import { galleryItems } from '../data/schoolData';
import ChalkHeading from '../components/ChalkHeading';
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
            <span>Campus Visual Tour</span>
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
            Photo & Event <span style={{ color: '#F5C94C' }}>Gallery</span>
          </h1>

          <p style={{ color: '#E9F3ED', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Explore glimpses of our classrooms, science & computer labs, sports track, cultural festivals, and everyday
            student life.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs & Responsive Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <ChalkHeading
            badge="Moments at RIA"
            title="Life Across Our"
            highlightWord="Campus Grounds"
            subtitle="Click on any photograph to open full-screen view with keyboard arrow navigation."
          />

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '3rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '2px solid',
                  borderColor: activeCategory === cat ? '#ED8B37' : '#E2E8F0',
                  backgroundColor: activeCategory === cat ? '#ED8B37' : '#FFFAF2',
                  color: activeCategory === cat ? '#FFFFFF' : '#173D55',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 4px 14px rgba(237, 139, 55, 0.35)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => openLightbox(index)}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(23, 61, 85, 0.08)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  group: 'true'
                }}
                className="gallery-card"
              >
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="gallery-thumb"
                  />

                  {/* Category Pill Tag */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(23, 61, 85, 0.85)',
                      color: '#FFFAF2',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.7rem',
                      borderRadius: '9999px',
                      backdropFilter: 'blur(4px)',
                      zIndex: 2
                    }}
                  >
                    {item.category}
                  </span>

                  {/* Hover Overlay with expand icon */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(23, 61, 85, 0.4)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFAF2'
                    }}
                    className="gallery-overlay"
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#ED8B37',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                      }}
                    >
                      <Maximize2 size={22} />
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#173D55', marginBottom: '0.45rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#4A5568', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>

                  {item.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                      {item.tags.map((t, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            color: '#718096',
                            background: '#FFFAF2',
                            border: '1px solid #E2E8F0',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '6px'
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <Lightbox
          item={filteredItems[selectedItemIndex]}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Hover effect styling */}
      <style>{`
        .gallery-card:hover .gallery-thumb {
          transform: scale(1.05);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;

