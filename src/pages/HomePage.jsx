import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage({ onOpenBooking, onOpenQuiz }) {
  return (
    <div className="animate-in fade-in duration-300">
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
