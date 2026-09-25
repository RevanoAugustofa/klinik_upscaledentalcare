import React from 'react';
import { Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Standard Kenyamanan VVIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Klinik Modern & <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Ruangan Berstandar Medis Tinggi
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dirancang khusus untuk menghapus kesan menakutkan dari klinik gigi biasa. Nikmati kenyamanan sekelas hotel bintang lima di Cilacap.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-teal-400 transition-all duration-300 group shadow-md hover:shadow-xl text-left"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {fac.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
