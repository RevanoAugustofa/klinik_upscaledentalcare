import React from 'react';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Ulasan Pengunjung & Pasien
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Mereka Tentang <br />
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Pengalaman Di Upscale Dental Care?
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Kepuasan dan kenyamanan pasien adalah kebanggaan terbesar kami.
          </p>
        </div>

        {/* Rating Score Banner */}
        <div className="p-6 rounded-3xl bg-white border border-amber-300 max-w-2xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-black text-slate-900 flex items-baseline gap-1">
              4.9 <span className="text-lg font-bold text-amber-600">/ 5.0</span>
            </div>
            <div className="text-left">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Berdasarkan 480+ Ulasan Terverifikasi Google Reviews
              </p>
            </div>
          </div>

          <a
            href="https://idalamat.com/alamat/upscale-dental-care-specialist-1060870#ulasan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Lihat Ulasan Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-teal-600" />
          </a>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinicData.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-teal-400 transition-all duration-300 space-y-4 shadow-md text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{t.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    {t.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" title="Pasien Terverifikasi" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>

                <span className="px-2.5 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded-lg border border-teal-200">
                  {t.service}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
