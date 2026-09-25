import React from 'react';
import SEO from '../components/SEO';
import DoctorsSection from '../components/DoctorsSection';

export default function DoctorsPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <SEO 
        title="Tim Dokter Gigi Spesialis | Upscale Dental Care Cilacap"
        description="Kenali tim dokter gigi spesialis lulusan universitas ternama di Upscale Dental Care Cilacap (Ortodontis, Konservasi Gigi, Bedah Mulut, & Pedodontis)."
        canonical="/doctors"
        keywords="dokter gigi spesialis ortodonti cilacap, drg spesialis cilacap, jadwal dokter gigi cilacap"
      />
      <DoctorsSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
