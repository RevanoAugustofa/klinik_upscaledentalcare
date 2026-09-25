import React from 'react';
import DoctorsSection from '../components/DoctorsSection';

export default function DoctorsPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <DoctorsSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
