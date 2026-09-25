import React from 'react';
import SEO from '../components/SEO';
import PromosSection from '../components/PromosSection';

export default function PromosPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <SEO 
        title="Promo Perawatan Gigi Spesial | Upscale Dental Care Cilacap"
        description="Dapatkan diskon promo spesial perawatan behel ortodonti, paket bleaching gigi laser, scaling karang gigi, & konsultasi dokter di Upscale Dental Care Cilacap."
        canonical="/promos"
        keywords="promo behel cilacap, diskon dokter gigi cilacap, paket scaling gigi cilacap"
      />
      <PromosSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
