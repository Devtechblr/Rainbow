import React from 'react';

/**
 * SectionHeader - Standardized Institutional Section Title
 * @param {string} badge - Eyebrow label, e.g. "ACADEMIC EXCELLENCE"
 * @param {string} title - Primary heading
 * @param {string} subtitle - Explanatory context
 * @param {boolean} centered - Whether text is centered (default: true)
 * @param {string} badgeVariant - "gold" | "navy" (default: "gold")
 * @param {boolean} light - Light text mode for dark navy backgrounds
 */
export const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  badgeVariant = 'gold',
  light = false,
  className = ''
}) => {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? '760px' : '100%',
        margin: centered ? '0 auto 3.5rem' : '0 0 2.5rem'
      }}
    >
      {badge && (
        <div style={{ marginBottom: '0.85rem' }}>
          <span
            className={badgeVariant === 'navy' ? 'badge-navy' : 'badge-gold'}
            style={
              light
                ? {
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(197, 168, 128, 0.4)',
                    color: '#E8D5B5'
                  }
                : undefined
            }
          >
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2
          style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
            color: light ? '#FFFFFF' : 'var(--navy-primary)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            marginBottom: subtitle ? '1rem' : '0'
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: light ? '#CBD5E1' : 'var(--text-muted)',
            lineHeight: 1.65,
            margin: centered ? '0 auto' : '0',
            maxWidth: '680px'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

