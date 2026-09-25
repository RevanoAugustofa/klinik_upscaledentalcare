import React from 'react';
import SEO from '../components/SEO';
import BeforeAfterGallery from '../components/BeforeAfterGallery';

export default function GalleryPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <SEO 
        title="Galeri & Hasil Perawatan | Upscale Dental Care Cilacap"
        description="Lihat dokumentasi transformasi senyum indah (Before & After) serta fasilitas klinik gigi modern & nyaman di Upscale Dental Care Cilacap."
        canonical="/gallery"
        keywords="galeri behel sebelum sesudah, hasil veneer gigi cilacap, foto klinik gigi cilacap"
      />
      <BeforeAfterGallery onOpenBooking={onOpenBooking} />
    </div>
  );
}
