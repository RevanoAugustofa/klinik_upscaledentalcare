import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <SEO 
        title="Layanan Dokter Gigi Spesialis | Upscale Dental Care Cilacap"
        description="Daftar layanan perawatan gigi lengkap: Behel Ortodonti, Veneer Porselen, Bleaching Laser, Implan Gigi, Penambalan Aesthetic, & Perawatan Gigi Anak di Cilacap."
        canonical="/services"
        keywords="layanan dokter gigi cilacap, pasang behel cilacap, bleaching gigi cilacap, cabut gigi, scaling gigi"
      />
      <ServicesSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
