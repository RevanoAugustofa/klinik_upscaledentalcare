import React from 'react';
import BeforeAfterGallery from '../components/BeforeAfterGallery';

export default function GalleryPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <BeforeAfterGallery onOpenBooking={onOpenBooking} />
    </div>
  );
}
