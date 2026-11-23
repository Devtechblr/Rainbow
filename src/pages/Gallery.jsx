import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, Sparkles, ArrowRight } from 'lucide-react';
import Lightbox from '../components/Lightbox';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const categories = [
    'All',
    'Campus Spaces',
    'Smart Classrooms',
    'Science & Labs',
    'Sports & Fitness',
    'Arts & Celebrations'
  ];

  const curatedPhotos = [
    {
      id: 1,
      title: "Rainbow Innovative Academy Main Campus Building",
      category: "Campus Spaces",
      image: "/images/school/campus-facade-main.webp",
      featured: true
    },
    {
      id: 2,
      title: "Interactive Smart Classroom in Session",
      category: "Smart Classrooms",
      image: "/images/school/hero-interactive-smartclass.webp",
      featured: false
    },
    {
      id: 3,
      title: "Secondary Composite Science Laboratory",
      category: "Science & Labs",
      image: "/images/school/highschool-science-lab.webp",
      featured: false
    },
    {
      id: 4,
      title: "Networked Computer & Coding Laboratory",
      category: "Science & Labs",
      image: "/images/school/computer-technology-lab.jpg",
      featured: true
    },
    {
      id: 5,
      title: "Kindergarten Play-Way Learning Center",
      category: "Smart Classrooms",
      image: "/images/school/kindergarten-classroom.webp",
      featured: false
    },
    {
      id: 6,
      title: "Expansive Sports Grounds & Athletics Field",
      category: "Sports & Fitness",
      image: "/images/school/sports-athletics-field.jpg",
      featured: true
    },
    {
      id: 7,
      title: "Track & Field Sprint Events",
      category: "Sports & Fitness",
      image: "/images/school/primary-sports-track.webp",
      featured: false
    },
    {
      id: 8,
      title: "Performing Arts, Classical Dance & Music Studio",
      category: "Arts & Celebrations",
      image: "/images/school/cultural-dance-music.webp",
      featured: false
    },
    {
      id: 9,
      title: "Creative Fine Arts & Clay Sculpture Studio",
      category: "Arts & Celebrations",
      image: "/images/school/primary-art-creative.webp",
      featured: false
    },
    {
      id: 10,
      title: "Primary Reading Sanctuary & Library Resource Hub",
      category: "Campus Spaces",
      image: "/images/school/primary-library-reading.webp",
      featured: false
    },
    {
      id: 11,
      title: "Student Morning Assembly & Public Presentation",
      category: "Arts & Celebrations",
      image: "/images/school/student-assembly-presentation.webp",
      featured: true
    },
    {
      id: 12,
      title: "Community Outreach & Environmental Initiative",
      category: "Arts & Celebrations",
      image: "/images/school/community-service-initiative.webp",
      featured: false
    }
  ];

  const filteredPhotos =
    activeCategory === 'All'
      ? curatedPhotos
      : curatedPhotos.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = () => {
    setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNext = () => {
    setSelectedItemIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      {/* 1. CINEMATIC HERO (Deep Plum #21162E) */}
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
        <div className="ambient-glow-lavender" style={{ bottom: '-150px', left: '-150px' }} />

        <div className="container" style={{ maxWidth: '860px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem', display: 'inline-block' }}
          >
            <span className="badge-dark-yellow">
              <Camera size={14} />
              <span>Campus Visual Showcase</span>
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
            Life Across Our Campus
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
            A visual journey through our smart classrooms, scientific labs, athletics grounds, and cultural studios.
          </motion.p>
        </div>
      </section>

      {/* 2. VISUALLY IMMERSIVE GALLERY SECTION (Warm Cream #FFF8F0) */}
      <section className="section-padding section-cream">
        <div className="container">
          {/* Interactive Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginBottom: '3.5rem'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--coral-vibrant)' : 'var(--border-medium)',
                    backgroundColor: isActive ? 'var(--coral-vibrant)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? 'var(--shadow-coral)' : 'none'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Creative Editorial Image Arrangement */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem'
            }}
          >
            <AnimatePresence>
              {filteredPhotos.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--plum-deep)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border-light)',
                    height: item.featured ? '380px' : '300px'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Top Category Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(33, 22, 46, 0.85)',
                      color: 'var(--yellow-sunshine)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '50px',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    {item.category}
                  </span>

                  {/* Top-Right Expand Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(33, 22, 46, 0.85)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>

                  {/* Bottom Gradient Label */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(33, 22, 46, 0.95) 0%, rgba(33, 22, 46, 0.4) 60%, transparent 100%)',
                      padding: '1.75rem 1.5rem 1.25rem',
                      color: '#FFFFFF'
                    }}
                  >
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--cream-warm)' }}>
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Lightbox Viewer */}
          {selectedItemIndex !== null && (
            <Lightbox
              item={filteredPhotos[selectedItemIndex]}
              total={filteredPhotos.length}
              currentIndex={selectedItemIndex}
              onClose={closeLightbox}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
