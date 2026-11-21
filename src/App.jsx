import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Core Institutional Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import ApplyNow from './pages/ApplyNow';

const AppContent = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ flex: 1, minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <Routes location={location}>
              {/* Official Redesigned Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/apply" element={<ApplyNow />} />

              {/* Seamless Legacy Path Forwarders to Prevent Any Broken Links */}
              <Route path="/academics" element={<Navigate to="/mandatory-disclosure" replace />} />
              <Route path="/campus-life" element={<Navigate to="/gallery" replace />} />
              <Route path="/contact" element={<Navigate to="/apply" replace />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
