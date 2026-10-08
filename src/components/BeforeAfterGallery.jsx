import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BeforeAfterGallery({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = clinicData.transformations[activeTab];

  return (
    <section id="gallery" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-4">Hasil Transformasi</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hasil Sebelum &amp; Sesudah{' '}
            <span className="text-teal-600">Perawatan Di Upscale Dental Care</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            Bukti nyata kepuasan pasien kami dalam mendapatkan senyum yang lebih rapi, putih, dan percaya diri.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {clinicData.transformations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {item.treatment}
            </button>
          ))}
        </div>

        {/* Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Before / After Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="relative rounded-xl overflow-hidden border border-red-200 bg-white shadow-sm">
                <img
                  src={currentCase.beforeImg}
                  alt="Kondisi Sebelum Perawatan"
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-red-50 border border-red-200 text-red-700 text-[10px] font-bold uppercase rounded-md tracking-wide">
                  Sebelum (Before)
                </div>
              </div>

              {/* After */}
              <div className="relative rounded-xl overflow-hidden border border-teal-200 bg-white shadow-sm">
                <img
                  src={currentCase.afterImg}
                  alt="Kondisi Sesudah Perawatan"
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-[10px] font-bold uppercase rounded-md tracking-wide">
                  Sesudah (After) ★
                </div>
              </div>
            </div>

            {/* Case Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-lg border border-teal-100">
                {currentCase.treatment}
              </span>

              <h3 className="text-xl font-bold text-slate-900">
                {currentCase.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Pasien:</span>
                  <span className="font-bold text-slate-800">{currentCase.patient}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Durasi Perawatan:</span>
                  <span className="font-bold text-teal-600">{currentCase.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Tingkat Kepuasan:</span>
                  <span className="font-bold text-amber-600">5.0 / 5.0 (Sangat Puas)</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Konsultasikan Kasus Anda</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
