import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeader - Modern Visual Section Title
 * @param {string} badge - Eyebrow label, e.g. "EXPLORE OUR CAMPUS"
 * @param {string} title - Primary heading
 * @param {string} subtitle - Short supporting statement
 * @param {boolean} centered - Whether text is centered (default: true)
 * @param {string} badgeVariant - "coral" | "lavender" | "yellow" (default: "coral")
 * @param {boolean} light - Light text mode for dark plum backgrounds
 */
export const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  badgeVariant = 'coral',
  light = false,
  className = ''
}) => {
  const getBadgeClass = () => {
    if (light) {
      if (badgeVariant === 'lavender') return 'badge-dark-lavender';
      if (badgeVariant === 'yellow') return 'badge-dark-yellow';
      return 'badge-dark-coral';
    }
    if (badgeVariant === 'lavender') return 'badge-lavender';
    if (badgeVariant === 'yellow') return 'badge-yellow';
    return 'badge-coral';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`section-header ${className}`}
      style={{
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? '780px' : '100%',
        margin: centered ? '0 auto 3.5rem' : '0 0 2.5rem'
      }}
    >
      {badge && (
        <div style={{ marginBottom: '1rem' }}>
          <span className={getBadgeClass()}>
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
            color: light ? 'var(--cream-warm)' : 'var(--text-dark)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            marginBottom: subtitle ? '1rem' : '0'
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            color: light ? 'var(--text-light-muted)' : 'var(--text-muted)',
            lineHeight: 1.7,
            margin: centered ? '0 auto' : '0',
            maxWidth: '640px'
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
