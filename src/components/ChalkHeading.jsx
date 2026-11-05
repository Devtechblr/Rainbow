import React from 'react';
import { motion } from 'framer-motion';

export const ChalkHeading = ({
  badge,
  title,
  highlightWord,
  subtitle,
  align = 'center',
  light = false
}) => {
  const isCenter = align === 'center';

  return (
    <div
      style={{
        textAlign: align,
        marginBottom: '2.5rem',
        maxWidth: isCenter ? '760px' : '100%',
        marginInline: isCenter ? 'auto' : undefined
      }}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="chalk-badge"
          style={{
            background: light ? 'rgba(255, 250, 242, 0.15)' : undefined,
            color: light ? '#FFFAF2' : undefined,
            borderColor: light ? 'rgba(245, 201, 76, 0.6)' : undefined
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>✨</span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          color: light ? '#FFFAF2' : '#173D55',
          lineHeight: 1.2,
          position: 'relative',
          display: 'inline-block'
        }}
      >
        {title}{' '}
        {highlightWord && (
          <span style={{ position: 'relative', color: '#ED8B37' }}>
            {highlightWord}
            {/* Animated chalk underline */}
            <svg
              style={{
                position: 'absolute',
                left: 0,
                bottom: -8,
                width: '100%',
                height: 14,
                overflow: 'visible'
              }}
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 2 8 Q 50 1, 100 7 T 198 6"
                stroke="#F5C94C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="4 2 8 3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              />
            </svg>
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: '1rem',
            fontSize: '1.12rem',
            color: light ? '#E9F3ED' : '#5A7184',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default ChalkHeading;

