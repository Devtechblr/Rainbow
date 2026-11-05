import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroVideo from './components/IntroVideo';
import ScrollToTop from './components/ScrollToTop';
import { RocketProvider } from './components/RocketAnimation';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main style={{ minHeight: '80vh', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          {/* Smooth page transition: fades and rises into view */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export const App = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <BrowserRouter>
      <RocketProvider>
        <ScrollToTop />

        {/* Fullscreen Classroom Intro Video (shown once per browser session) */}
        <IntroVideo onIntroComplete={() => setIntroFinished(true)} />

        <AppContent />
      </RocketProvider>
    </BrowserRouter>
  );
};

export default App;
