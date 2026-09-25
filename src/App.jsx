import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import BookingModal from './components/BookingModal';
import SmileQuizModal from './components/SmileQuizModal';
import AboutModal from './components/AboutModal';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import GalleryPage from './pages/GalleryPage';
import PromosPage from './pages/PromosPage';

function App() {
  const [bookingState, setBookingState] = useState({
    isOpen: false,
    serviceId: null,
    doctorId: null,
    promoCode: null
  });

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleOpenBooking = (serviceId = null, doctorId = null, promoCode = null) => {
    setBookingState({
      isOpen: true,
      serviceId,
      doctorId,
      promoCode
    });
  };

  const handleCloseBooking = () => {
    setBookingState({
      isOpen: false,
      serviceId: null,
      doctorId: null,
      promoCode: null
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white flex flex-col justify-between">
        
        {/* Persistent Navigation Bar */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          onOpenAbout={() => setIsAboutOpen(true)}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenQuiz={() => setIsQuizOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/doctors"
              element={<DoctorsPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/promos"
              element={<PromosPage onOpenBooking={handleOpenBooking} />}
            />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Sticky WhatsApp Floating Widget */}
        <FloatingWhatsapp onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Modals */}
        <BookingModal
          isOpen={bookingState.isOpen}
          onClose={handleCloseBooking}
          initialServiceId={bookingState.serviceId}
          initialDoctorId={bookingState.doctorId}
          initialPromoCode={bookingState.promoCode}
        />

        <SmileQuizModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          onOpenBooking={handleOpenBooking}
        />

        <AboutModal
          isOpen={isAboutOpen}
          onClose={() => setIsAboutOpen(false)}
          onOpenBooking={handleOpenBooking}
        />
      </div>
    </Router>
  );
}

export default App;
