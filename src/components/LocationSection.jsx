import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function LocationSection() {
  const branches = clinicData.branches || [];

  return (
    <section id="location" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label mb-4">Cabang Kami</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lokasi Klinik{' '}
            <span className="text-teal-600">Upscale Dental Care Specialist</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            Pilih cabang terdekat Anda di Cilacap atau Purwokerto untuk melihat detail alamat, jadwal dokter, fasilitas, dan petunjuk arah.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((b) => (
            <div
              key={b.id}
              className="clinic-card group p-8 flex flex-col text-left"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold rounded-lg">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {b.googleRating} ({b.googleReviewCount}+)
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                  {b.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </p>
              </div>

              {/* Info rows */}
              <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5 text-sm text-slate-500">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>{b.operationalHours[0]?.days}: {b.operationalHours[0]?.hours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>{b.formattedWhatsapp}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  to={`/cabang-${b.id}`}
                  className="block w-full py-3 px-5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors text-center"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
