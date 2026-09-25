import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BeforeAfterGallery({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = clinicData.transformations[activeTab];

  return (
    <section id="gallery" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hasil Sebelum & Sesudah <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Perawatan Di Upscale Dental Care
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Bukti nyata kepuasan pasien kami dalam mendapatkan senyum yang lebih rapi, putih, dan percaya diri.
          </p>
        </div>

        {/* Transformation Case Selector Tabs */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {clinicData.transformations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span>{item.treatment}</span>
            </button>
          ))}
        </div>

        {/* Featured Transformation Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Before / After Image Comparison Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="relative rounded-2xl overflow-hidden border border-red-300 bg-white shadow-sm">
                <img
                  src={currentCase.beforeImg}
                  alt="Kondisi Sebelum Perawatan"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-red-100 border border-red-300 text-red-800 text-[10px] font-extrabold uppercase rounded-full tracking-wider shadow-xs">
                  Sebelum (Before)
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-2xl overflow-hidden border border-teal-400 bg-white shadow-sm">
                <img
                  src={currentCase.afterImg}
                  alt="Kondisi Sesudah Perawatan"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-teal-100 border border-teal-300 text-teal-900 text-[10px] font-extrabold uppercase rounded-full tracking-wider shadow-xs">
                  Sesudah (After) ★
                </div>
              </div>
            </div>

            {/* Case Info Detail Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-lg border border-teal-200">
                {currentCase.treatment}
              </span>

              <h3 className="text-xl font-bold text-slate-900">
                {currentCase.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs shadow-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Pasien:</span>
                  <span className="font-bold text-slate-900">{currentCase.patient}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Durasi Perawatan:</span>
                  <span className="font-bold text-teal-700">{currentCase.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tingkat Kepuasan:</span>
                  <span className="font-bold text-amber-600">5.0 / 5.0 (Sangat Puas)</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
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
