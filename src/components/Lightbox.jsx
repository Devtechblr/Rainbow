import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export const Lightbox = ({ item, total, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 11000,
          backgroundColor: 'rgba(22, 14, 32, 0.97)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Campus Photo Lightbox"
      >
        {/* Top Control Bar with Image Counter */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 11002
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ color: 'var(--yellow-sunshine)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em' }}>
            {typeof currentIndex === 'number' && typeof total === 'number' ? (
              <span>Photograph {currentIndex + 1} of {total}</span>
            ) : (
              <span>Rainbow Innovative Academy Campus</span>
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--coral-vibrant)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            aria-label="Close Lightbox (Escape)"
          >
            <X size={22} />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 11002,
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--coral-vibrant)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 11002,
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--coral-vibrant)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
          aria-label="Next photograph"
        >
          <ChevronRight size={28} />
        </button>

        {/* Image & Description Container */}
        <motion.div
          key={item.id}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            maxWidth: '960px',
            maxHeight: '84vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1E122A',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            border: '1px solid rgba(185, 167, 255, 0.2)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#130B1C' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                maxWidth: '100%',
                maxHeight: '62vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          <div
            style={{
              padding: '1.25rem 1.75rem',
              backgroundColor: '#21162E',
              borderTop: '1px solid rgba(185, 167, 255, 0.15)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.45rem' }}>
              <span
                style={{
                  background: 'var(--coral-vibrant)',
                  color: '#FFFFFF',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                {item.category}
              </span>
              {item.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(185, 167, 255, 0.15)',
                    color: 'var(--lavender-soft)',
                    fontSize: '0.74rem',
                    fontWeight: 500,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              {item.title}
            </h3>
            <p style={{ color: '#E2D9EE', fontSize: '0.9rem', lineHeight: 1.5 }}>
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
