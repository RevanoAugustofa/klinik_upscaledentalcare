import React from 'react';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <ServicesSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
