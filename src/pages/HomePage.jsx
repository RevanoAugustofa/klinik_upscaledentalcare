import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage({ onOpenBooking, onOpenQuiz }) {
  return (
    <div className="animate-in fade-in duration-300">
      <SEO 
        title="Upscale Dental Care Specialist Cilacap | Klinik Dokter Gigi Spesialis"
        description="Klinik Dokter Gigi Spesialis #1 di Cilacap. Melayani Behel Ortodonti, Veneer Gigi, Implan Gigi, Bleaching Laser, & Dental Anak. Reservasi janji online tanpa antre."
        canonical="/"
        keywords="dokter gigi cilacap, klinik gigi cilacap, behel cilacap, veneer cilacap, implan gigi cilacap, dokter gigi spesialis"
      />
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onOpenQuiz={onOpenQuiz}
      />
      <WhyUs onOpenBooking={() => onOpenBooking()} />
      <LocationSection onOpenBooking={() => onOpenBooking()} />
      <TestimonialsSection />
    </div>
  );
}
