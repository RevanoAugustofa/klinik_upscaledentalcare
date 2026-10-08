import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function TestimonialsSection() {
  // Ambil 3 ulasan teratas dari pasien (semua cabang)
  const testimonials = (clinicData.testimonials || []).slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman &amp; Ulasan Pasien <br />
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Ulasan Asli Google Maps
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ulasan jujur &amp; transparan dari pasien yang telah merasakan perawatan dokter gigi spesialis di Upscale Dental Care.
          </p>
        </div>

        {/* 3 Google Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-300 transition-all duration-300 space-y-4 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              {/* Top Header: Patient & Google Badge */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initials */}
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center border border-teal-200 shrink-0">
                      {t.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" title="Pasien Terverifikasi" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">{t.date}</span>
                    </div>
                  </div>

                  {/* Google Maps Icon Badge */}
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0" title="Google Maps Review">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                </div>

                {/* Stars Rating & Branch */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {/* <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {t.branchName || (t.branchId === 'cilacap' ? 'Cabang Cilacap' : 'Cabang Purwokerto')}
                  </span> */}
                </div>

                {/* Comment */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-1 -left-1 rotate-180 opacity-40 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative z-10 pl-2">
                    "{t.comment}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Treatment Tag */}
              {/* <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Perawatan:</span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-bold rounded-lg text-[11px]">
                  {t.service}
                </span>
              </div> */}

            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <a
            href="https://idalamat.com/alamat/upscale-dental-care-specialist-1060870#ulasan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all"
          >
            <span>Lihat Selengkapnya Ulasan Pasien di Google Maps</span>
            <ExternalLink className="w-4 h-4 text-teal-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
