import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const RocketContext = createContext({
  rocketNavigate: () => {},
  isNavigating: false,
  launchingElementId: null
});

export const useRocket = () => useContext(RocketContext);

export const RocketProvider = ({ children }) => {
  const [journeyState, setJourneyState] = useState(null);
  const [launchingElementId, setLaunchingElementId] = useState(null);
  const isNavigatingRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const rocketNavigate = useCallback(
    (to, event, options = {}) => {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      // Prevent overlapping rapid clicks while animation is in flight
      if (isNavigatingRef.current) {
        return;
      }

      // Reduced motion check: navigate immediately without animation
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        if (to) {
          if (location.pathname === to) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            navigate(to);
          }
        }
        return;
      }

      isNavigatingRef.current = true;

      try {
        const isCard = options.variant === 'card';
        let startX = window.innerWidth / 2;
        let startY = 80;
        let elemId = options.id || null;

        if (event && event.currentTarget && event.currentTarget.getBoundingClientRect) {
          const rect = event.currentTarget.getBoundingClientRect();
          startX = rect.left + rect.width / 2;
          startY = rect.top + rect.height / 2;
          if (!elemId && event.currentTarget.id) {
            elemId = event.currentTarget.id;
          }
        } else if (event && event.clientX && event.clientY) {
          startX = event.clientX;
          startY = event.clientY;
        }

        setLaunchingElementId(elemId || to);

        // Portal center destination
        const portalX = window.innerWidth / 2;
        const portalY = Math.max(window.innerHeight * 0.42, 180);

        // Smooth curved trajectory: arc sweeping slightly outward before homing in
        const isLeftOfPortal = startX < portalX;
        const arcSpread = isLeftOfPortal ? -60 : 60;

        const cp1X = startX + (portalX - startX) * 0.28 + arcSpread;
        const cp1Y = Math.min(startY, portalY) - (isCard ? 35 : 55);

        const cp2X = startX + (portalX - startX) * 0.72 + (arcSpread * 0.35);
        const cp2Y = portalY - 25;

        // Tangent angles for rocket head alignment
        const angle0 = Math.atan2(cp1Y - startY, cp1X - startX) * (180 / Math.PI) + 90;
        const angle1 = Math.atan2(cp2Y - cp1Y, cp2X - cp1X) * (180 / Math.PI) + 90;
        const angle2 = Math.atan2(portalY - cp2Y, portalX - cp2X) * (180 / Math.PI) + 90;

        // Rainbow stardust, tiny stars, and soft chalk-like smoke particles
        const colors = ['#ED8B37', '#F5C94C', '#38A169', '#3182CE', '#805AD5'];
        const particles = [];
        const totalParticles = isCard ? 10 : 16;

        for (let i = 0; i < totalParticles; i++) {
          const t = i / totalParticles;
          const px =
            Math.pow(1 - t, 3) * startX +
            3 * Math.pow(1 - t, 2) * t * cp1X +
            3 * (1 - t) * Math.pow(t, 2) * cp2X +
            Math.pow(t, 3) * portalX;
          const py =
            Math.pow(1 - t, 3) * startY +
            3 * Math.pow(1 - t, 2) * t * cp1Y +
            3 * (1 - t) * Math.pow(t, 2) * cp2Y +
            Math.pow(t, 3) * portalY;

          particles.push({
            id: `p-${i}-${Date.now()}`,
            x: px + (Math.random() * 14 - 7),
            y: py + (Math.random() * 14 - 7),
            size: i % 3 === 0 ? 11 : i % 3 === 1 ? 7 : 14,
            type: i % 4 === 0 ? 'star' : i % 2 === 0 ? 'rainbow' : 'chalk',
            color: colors[i % colors.length],
            delay: 0.04 + t * (isCard ? 0.28 : 0.36)
          });
        }

        const journeyId = Date.now();
        setJourneyState({
          id: journeyId,
          startX,
          startY,
          cp1X,
          cp1Y,
          cp2X,
          cp2Y,
          portalX,
          portalY,
          rotations: [angle0, angle1, angle2, angle2],
          particles,
          isCard,
          phase: 'launching'
        });

        const entryDelay = isCard ? 360 : 440;
        const wipeDelay = isCard ? 430 : 510;
        const completeDelay = isCard ? 720 : 880;

        // T1: Rocket enters portal core
        setTimeout(() => {
          setJourneyState((prev) => (prev ? { ...prev, phase: 'entering' } : null));
        }, entryDelay);

        // T2: Rainbow wipe envelopes screen and route updates
        setTimeout(() => {
          setJourneyState((prev) => (prev ? { ...prev, phase: 'wipe' } : null));
          if (to) {
            if (location.pathname === to) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate(to);
            }
          }
        }, wipeDelay);

        // T3: Rainbow wipe clears and journey completes
        setTimeout(() => {
          setJourneyState(null);
          setLaunchingElementId(null);
          isNavigatingRef.current = false;
        }, completeDelay);
      } catch (err) {
        console.error('Rocket Rainbow Journey error:', err);
        setJourneyState(null);
        setLaunchingElementId(null);
        isNavigatingRef.current = false;
        if (to) navigate(to);
      }
    },
    [navigate, location.pathname]
  );

  return (
    <RocketContext.Provider
      value={{
        rocketNavigate,
        isNavigating: !!journeyState,
        launchingElementId
      }}
    >
      {children}

      {/* FIXED FULLSCREEN ANIMATION OVERLAY */}
      <AnimatePresence>
        {journeyState && (
          <div
            className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
            style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}
            aria-hidden="true"
          >
            {/* 1. GLOWING RAINBOW PORTAL AT SCREEN CENTER */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                journeyState.phase === 'wipe'
                  ? {
                      scale: 36,
                      opacity: [1, 1, 0],
                      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
                    }
                  : {
                      scale: [0, 1.15, 1],
                      opacity: 1,
                      transition: { duration: 0.35, ease: 'easeOut' }
                    }
              }
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                left: journeyState.portalX - 52,
                top: journeyState.portalY - 52,
                width: 104,
                height: 104,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transformOrigin: 'center center'
              }}
            >
              {/* Rotating Rainbow Rings Portal SVG */}
              <motion.svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFAF2" stopOpacity="1" />
                    <stop offset="35%" stopColor="#F5C94C" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#ED8B37" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#38A169" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#3182CE" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="portalRings" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ED8B37" />
                    <stop offset="25%" stopColor="#F5C94C" />
                    <stop offset="50%" stopColor="#38A169" />
                    <stop offset="75%" stopColor="#3182CE" />
                    <stop offset="100%" stopColor="#805AD5" />
                  </linearGradient>
                </defs>

                {/* Outer Portal Aura */}
                <circle cx="50" cy="50" r="48" fill="url(#portalGlow)" opacity="0.65" />

                {/* Concentric Rainbow Rings */}
                <circle cx="50" cy="50" r="40" stroke="url(#portalRings)" strokeWidth="3" fill="none" strokeDasharray="6 3" />
                <circle cx="50" cy="50" r="32" stroke="#F5C94C" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                <circle cx="50" cy="50" r="24" stroke="#38A169" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="16" fill="#173D55" />
                <circle cx="50" cy="50" r="10" fill="#FFFAF2" />

                {/* Starlight Sparkles on Portal Rim */}
                {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
                  <circle
                    key={idx}
                    cx={50 + 40 * Math.cos((deg * Math.PI) / 180)}
                    cy={50 + 40 * Math.sin((deg * Math.PI) / 180)}
                    r="2.5"
                    fill="#FFFAF2"
                  />
                ))}
              </motion.svg>
            </motion.div>

            {/* 2. THE ROCKET FLYING ALONG CURVED PATH INTO PORTAL */}
            {journeyState.phase !== 'wipe' && (
              <motion.div
                initial={{
                  x: journeyState.startX,
                  y: journeyState.startY,
                  scale: 0.4,
                  opacity: 0,
                  rotate: journeyState.rotations[0]
                }}
                animate={{
                  x: [
                    journeyState.startX,
                    journeyState.cp1X,
                    journeyState.cp2X,
                    journeyState.portalX
                  ],
                  y: [
                    journeyState.startY,
                    journeyState.cp1Y,
                    journeyState.cp2Y,
                    journeyState.portalY
                  ],
                  scale: journeyState.isCard ? [0.35, 0.95, 0.8, 0.2] : [0.4, 1.25, 1.05, 0.25],
                  opacity: [0, 1, 1, 0.4],
                  rotate: journeyState.rotations
                }}
                transition={{
                  duration: journeyState.isCard ? 0.38 : 0.46,
                  ease: [0.25, 0.1, 0.25, 1],
                  times: [0, 0.35, 0.7, 1]
                }}
                style={{
                  position: 'fixed',
                  top: journeyState.isCard ? -20 : -26,
                  left: journeyState.isCard ? -20 : -26,
                  width: journeyState.isCard ? 40 : 52,
                  height: journeyState.isCard ? 40 : 52,
                  transformOrigin: 'center center'
                }}
              >
                {/* Storybook Illustrated Rocket */}
                <svg viewBox="0 0 52 52" width="100%" height="100%" fill="none">
                  {/* Glowing Animated Thruster Flame */}
                  <motion.path
                    d="M 23 37 Q 26 50 26 50 Q 26 50 29 37 Z"
                    fill="#ED8B37"
                    animate={{ scaleY: [1, 1.5, 0.9, 1.3] }}
                    transition={{ repeat: Infinity, duration: 0.14 }}
                  />
                  <motion.path
                    d="M 24.5 37 Q 26 46 26 46 Q 26 46 27.5 37 Z"
                    fill="#F5C94C"
                    animate={{ scaleY: [1, 1.35, 0.85] }}
                    transition={{ repeat: Infinity, duration: 0.1 }}
                  />

                  {/* Stabilizer Fins */}
                  <path d="M 16 30 L 20 35 L 20 27 Z" fill="#173D55" stroke="#FFFFFF" strokeWidth="1" />
                  <path d="M 36 30 L 32 35 L 32 27 Z" fill="#173D55" stroke="#FFFFFF" strokeWidth="1" />

                  {/* Fuselage Body */}
                  <path
                    d="M 26 7 C 20 15 19 29 22 36 L 30 36 C 33 29 32 15 26 7 Z"
                    fill="#FFFAF2"
                    stroke="#173D55"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* Orange Nose Cone Tip */}
                  <path
                    d="M 26 7 C 23.5 10.5 22.5 13.5 22.5 14.5 L 29.5 14.5 C 29.5 13.5 28.5 10.5 26 7 Z"
                    fill="#ED8B37"
                  />

                  {/* Porthole Window with Glass Reflection */}
                  <circle cx="26" cy="20" r="4.5" fill="#3182CE" stroke="#173D55" strokeWidth="1.5" />
                  <circle cx="27" cy="19" r="1.3" fill="#FFFFFF" />

                  {/* Golden Discovery Star */}
                  <polygon
                    points="26,27 26.8,29 29,29.3 27.4,30.7 27.8,33 26,31.8 24.2,33 24.6,30.7 23,29.3 25.2,29"
                    fill="#F5C94C"
                  />
                </svg>
              </motion.div>
            )}

            {/* 3. RAINBOW PARTICLES, TINY STARS & CHALK SMOKE TRAIL */}
            {journeyState.particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: p.x,
                  y: p.y,
                  scale: 0.2,
                  opacity: 0
                }}
                animate={{
                  x: p.x + (Math.random() * 20 - 10),
                  y: p.y + (Math.random() * 16 - 8),
                  scale: [0.2, 1.3, 0.5],
                  opacity: [0, 0.9, 0]
                }}
                transition={{
                  duration: 0.48,
                  delay: p.delay,
                  ease: 'easeOut'
                }}
                style={{
                  position: 'fixed',
                  width: p.size,
                  height: p.size,
                  transformOrigin: 'center center'
                }}
              >
                {p.type === 'star' ? (
                  /* 4-Point Golden Star */
                  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#F5C94C">
                    <path d="M 12 0 L 14.5 9.5 L 24 12 L 14.5 14.5 L 12 24 L 9.5 14.5 L 0 12 L 9.5 9.5 Z" />
                  </svg>
                ) : p.type === 'chalk' ? (
                  /* Soft Chalk Smoke Puff */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 250, 242, 0.75)',
                      boxShadow: '0 0 12px rgba(255, 250, 242, 0.8)',
                      filter: 'blur(1.5px)'
                    }}
                  />
                ) : (
                  /* Rainbow Sparkle Dot */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: p.color,
                      boxShadow: `0 0 10px ${p.color}`
                    }}
                  />
                )}
              </motion.div>
            ))}

            {/* 4. EXPANDING RAINBOW WIPE ON DESTINATION REVEAL */}
            {journeyState.phase === 'wipe' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.96, 0] }}
                transition={{ duration: 0.38, times: [0, 0.35, 1], ease: 'easeInOut' }}
                style={{
                  position: 'fixed',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  pointerEvents: 'none'
                }}
              >
                <div style={{ flex: 1, backgroundColor: '#ED8B37' }} />
                <div style={{ flex: 1, backgroundColor: '#F5C94C' }} />
                <div style={{ flex: 1, backgroundColor: '#38A169' }} />
                <div style={{ flex: 1, backgroundColor: '#3182CE' }} />
                <div style={{ flex: 1, backgroundColor: '#805AD5' }} />
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </RocketContext.Provider>
  );
};

export default RocketProvider;
