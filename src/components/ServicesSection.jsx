import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Calendar, Info, ArrowRight, X, Tag } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function ServicesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  const categories = ['Semua', 'Perapihan Gigi', 'Estetika', 'Restorasi', 'Perawatan Umum', 'Perawatan Anak', 'Bedah Mulut'];

  const filteredServices = activeCategory === 'Semua'
    ? clinicData.services
    : clinicData.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="section-label">Layanan Perawatan Gigi</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              <span>Layanan Perawatan Gigi</span>{' '}
              <span className="text-teal-600">Komprehensif &amp; Bergaransi</span>
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                to="/services/promos"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Promo Spesial</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Setiap perawatan dilakukan dengan protokol sterilitas tinggi, anestesi minim rasa sakit, dan konsultasi terbuka bersama Dokter Spesialis.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="clinic-card group flex flex-col overflow-hidden text-left"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category & Badge */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 text-teal-800 text-[10px] font-bold border border-teal-100 shadow-sm">
                    {service.category}
                  </span>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-amber-500 text-white text-[10px] font-bold shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>
                {/* Duration */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-white bg-slate-900/70 px-2.5 py-1 rounded-md backdrop-blur-sm font-medium">
                  <Clock className="w-3 h-3 text-teal-400" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[17px] font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-1.5 mb-5 flex-1">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors"
                    title="Lihat Detail Info"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="flex-1 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Reservasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Service Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl text-left">
            <div className="relative h-44">
              <img src={selectedServiceDetail.image} alt={selectedServiceDetail.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-xl font-bold text-white">{selectedServiceDetail.title}</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-lg border border-teal-100">
                  {selectedServiceDetail.category}
                </span>
                <span className="text-xs text-slate-400">• Estimasi Durasi: {selectedServiceDetail.duration}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{selectedServiceDetail.description}</p>
              
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <p className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-3">Keunggulan Tindakan Di Upscale Dental:</p>
                {selectedServiceDetail.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end pt-2">
                <button
                  onClick={() => {
                    const id = selectedServiceDetail.id;
                    setSelectedServiceDetail(null);
                    onOpenBooking(id);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Buat Janji Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
