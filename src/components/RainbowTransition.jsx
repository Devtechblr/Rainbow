import React from 'react';
import { motion } from 'framer-motion';

export const RainbowTransition = () => {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        pointerEvents: 'none',
        transformOrigin: 'top',
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
  );
};

export default RainbowTransition;

