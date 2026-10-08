import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight, Star, Clock, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function LocationSection() {
  const branches = clinicData.branches || [];

  return (
    <section id="location" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lokasi Klinik <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Upscale Dental Care Specialist
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pilih cabang terdekat Anda di Cilacap atau Purwokerto untuk melihat detail alamat, jadwal dokter, fasilitas, dan petunjuk arah.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((b) => (
            <div
              key={b.id}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-teal-700" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-lg flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {b.googleRating} ({b.googleReviewCount}+)
                    </span>
                   
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{b.operationalHours[0]?.days}: {b.operationalHours[0]?.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{b.formattedWhatsapp}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  to={`/cabang-${b.id}`}
                  className="w-full py-3.5 px-5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>Lihat Detail </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
