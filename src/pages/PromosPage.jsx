import React from 'react';
import PromosSection from '../components/PromosSection';

export default function PromosPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <PromosSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
