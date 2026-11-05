import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FastForward, Play, Volume2, VolumeX } from 'lucide-react';

export const IntroVideo = ({ onIntroComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isRainbowExpanding, setIsRainbowExpanding] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onIntroComplete) onIntroComplete();
      return;
    }

    // Check session storage so it only plays once per session
    const hasSeenIntro = sessionStorage.getItem('ria_intro_seen');
    if (hasSeenIntro === 'true') {
      if (onIntroComplete) onIntroComplete();
      return;
    }

    // Show intro
    setIsVisible(true);

    // Safety timeout: dismiss after 8.5 seconds max
    const timer = setTimeout(() => {
      handleComplete();
    }, 8500);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    // Start rainbow wipe reveal
    setIsRainbowExpanding(true);
    sessionStorage.setItem('ria_intro_seen', 'true');

    setTimeout(() => {
      setIsVisible(false);
      if (onIntroComplete) onIntroComplete();
    }, 900);
  };

  const handleVideoEnded = () => {
    handleComplete();
  };

  const handleVideoError = () => {
    console.warn("Classroom intro video could not load, using animated chalkboard fallback.");
    setVideoError(true);
    // Give fallback 4 seconds before ending
    setTimeout(() => {
      handleComplete();
    }, 4200);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#173D55] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10000,
          backgroundColor: '#173D55'
        }}
      >
        {/* Skip Button (Top Right) */}
        <button
          onClick={handleComplete}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 10002,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(23, 61, 85, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#FFFAF2',
            border: '1.5px solid rgba(245, 201, 76, 0.7)',
            padding: '0.6rem 1.25rem',
            borderRadius: '9999px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ED8B37';
            e.currentTarget.style.borderColor = '#ED8B37';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(23, 61, 85, 0.75)';
            e.currentTarget.style.borderColor = 'rgba(245, 201, 76, 0.7)';
          }}
          aria-label="Skip intro animation and proceed to website"
        >
          <span>Skip Intro</span>
          <FastForward size={16} />
        </button>

        {/* Video Player */}
        {!videoError ? (
          <video
            ref={videoRef}
            src="/videos/classroom-intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onError={handleVideoError}
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              filter: 'brightness(0.96)'
            }}
          />
        ) : (
          /* Graceful Animated Chalkboard Fallback */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, #1c4b69 0%, #0e2737 100%)',
              color: '#FFFAF2',
              padding: '2rem',
              textAlign: 'center'
            }}
          >
            {/* Classroom chalkboard frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                maxWidth: '780px',
                width: '90%',
                background: '#1d3929',
                border: '14px solid #8B5A2B',
                borderRadius: '16px',
                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6), 0 20px 50px rgba(0,0,0,0.5)',
                padding: '3rem 2rem',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  color: '#F5C94C',
                  lineHeight: 1.3
                }}
              >
                Welcome to
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                  color: '#FFFAF2',
                  letterSpacing: '-0.02em',
                  margin: '0.8rem 0'
                }}
              >
                Rainbow Innovative Academy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                  color: '#E9F3ED',
                  letterSpacing: '0.04em'
                }}
              >
                “Where curious minds grow.”
              </motion.p>
              
              {/* Glowing chalk rainbow arc */}
              <motion.svg
                viewBox="0 0 240 70"
                style={{ width: '220px', margin: '1.5rem auto 0' }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 2, duration: 1.2 }}
              >
                <path d="M 10 65 A 90 60 0 0 1 230 65" stroke="#ED8B37" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M 22 65 A 78 50 0 0 1 218 65" stroke="#F5C94C" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                <path d="M 34 65 A 66 40 0 0 1 206 65" stroke="#48BB78" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M 46 65 A 54 30 0 0 1 194 65" stroke="#4299E1" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </motion.svg>
            </motion.div>
          </div>
        )}

        {/* Expanding Rainbow Screen Transition */}
        {isRainbowExpanding && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10001,
              transformOrigin: 'bottom',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ flex: 1, backgroundColor: '#ED8B37' }} />
            <div style={{ flex: 1, backgroundColor: '#F5C94C' }} />
            <div style={{ flex: 1, backgroundColor: '#38A169' }} />
            <div style={{ flex: 1, backgroundColor: '#3182CE' }} />
            <div style={{ flex: 1, backgroundColor: '#805AD5' }} />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroVideo;

