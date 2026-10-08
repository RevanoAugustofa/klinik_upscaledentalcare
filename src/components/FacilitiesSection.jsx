import React from 'react';
import { Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Standard Kenyamanan VVIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Klinik Modern &{' '}
            <span className="text-teal-600">Ruangan Berstandar Medis Tinggi</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            Dirancang khusus untuk menghapus kesan menakutkan dari klinik gigi biasa. Nikmati kenyamanan sekelas hotel bintang lima di Cilacap.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="clinic-card group overflow-hidden text-left"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1.5">
                  {fac.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
