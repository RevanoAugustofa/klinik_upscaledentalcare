import React, { useState, useEffect, useCallback } from 'react';
import { PhoneCall, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

// ============================================================
// 🖼️  GANTI GAMBAR-GAMBAR CAROUSEL DI SINI
//     Cukup ubah array `carouselImages` berikut:
//     - src  : URL gambar (bisa path lokal seperti /images/foto1.jpg
//              atau URL eksternal)
//     - alt  : deskripsi gambar (untuk SEO & aksesibilitas)
// ============================================================
const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ruang Perawatan Upscale Dental Care Cilacap',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffbb172b07e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Peralatan Modern Klinik Gigi Upscale Dental Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e66?auto=format&fit=crop&w=1000&q=80',
    alt: 'Tim Dokter Spesialis Upscale Dental Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1598256989075-5f0ae3c4e6c6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ruang Tunggu Nyaman Klinik Gigi Upscale',
  },
];

const AUTOPLAY_INTERVAL = 4000; // ms — ubah jika mau lebih lambat/cepat

export default function Hero({ onOpenBooking, onOpenQuiz }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = carouselImages.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <section id="hero"
      className="relative bg-white border-b border-slate-100 pt-10 pb-16 overflow-hidden">

      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-teal-50 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-cyan-50/60 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="lg:col-span-6 space-y-7 text-left">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Klinik Dokter Gigi Spesialis — Cilacap &amp; Purwokerto
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              <span className="text-teal-600">Wujudkan Senyum
              Indah &amp; Sehat
              Bersama Dokter Spesialis</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
              <strong className="text-slate-700 font-semibold">Upscale Dental Care Specialist</strong> menghadirkan
              perawatan gigi berkualitas dengan dukungan tim dokter spesialis untuk kesehatan dan senyum terbaik Anda.
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                'Dokter Spesialis Sp.Ort & Sp.KG',
                'Peralatan Steril 100%',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}?text=Halo%20Upscale%20Dental%20Care%20Cilacap,%20saya%20ingin%20konsultasi%20perawatan%20gigi`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm shadow-teal-600/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat WhatsApp Admin</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Lihat Layanan Kami
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-5 border-t border-slate-100">
              {clinicData.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-black text-teal-700 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Carousel ── */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >

              {/* ── Slide Images ── */}
              <div className="relative w-full h-[360px] sm:h-[440px]">
                {carouselImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                      idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
              </div>

              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent z-20 pointer-events-none" />

              {/* ── Prev / Next Buttons ── */}
              <button
                onClick={prev}
                aria-label="Gambar sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Gambar berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* ── Dot Indicators ── */}
              <div className="absolute bottom-14 left-0 right-0 z-30 flex justify-center gap-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      idx === current
                        ? 'w-6 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Slide counter (opsional, di luar frame) */}
            <div className="flex justify-center mt-3 gap-1 text-[11px] text-slate-400 font-medium">
              <span className="text-slate-700 font-bold">{current + 1}</span>
              <span>/</span>
              <span>{total}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}