import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export const Lightbox = ({ item, onClose, onPrev, onNext }) => {
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
        transition={{ duration: 0.25 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 11000,
          backgroundColor: 'rgba(15, 40, 56, 0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo Lightbox"
      >
        {/* Top Control Bar */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 11002
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 250, 242, 0.15)',
              border: '1.5px solid rgba(255, 250, 242, 0.3)',
              color: '#FFFAF2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ED8B37';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 250, 242, 0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Close Lightbox"
          >
            <X size={24} />
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
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 250, 242, 0.15)',
            border: '1.5px solid rgba(255, 250, 242, 0.3)',
            color: '#FFFAF2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ED8B37')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 250, 242, 0.15)')}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={30} />
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
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 250, 242, 0.15)',
            border: '1.5px solid rgba(255, 250, 242, 0.3)',
            color: '#FFFAF2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ED8B37')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 250, 242, 0.15)')}
          aria-label="Next photograph"
        >
          <ChevronRight size={30} />
        </button>

        {/* Image & Description Container */}
        <motion.div
          key={item.id}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: '1000px',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#173D55',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255, 250, 242, 0.15)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                maxWidth: '100%',
                maxHeight: '65vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: '#0F2838',
              borderTop: '1px solid rgba(255, 250, 242, 0.1)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <span
                style={{
                  background: '#ED8B37',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.65rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase'
                }}
              >
                {item.category}
              </span>
              {item.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(255, 250, 242, 0.1)',
                    color: '#F5C94C',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h3 style={{ color: '#FFFAF2', fontSize: '1.35rem', marginBottom: '0.4rem' }}>
              {item.title}
            </h3>
            <p style={{ color: '#E9F3ED', fontSize: '0.94rem', lineHeight: 1.5 }}>
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;

