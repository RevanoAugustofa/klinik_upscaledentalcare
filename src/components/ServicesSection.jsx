import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Clock, Calendar, Calculator, Info, ArrowRight, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function ServicesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);

  // Calculator State
  const [calcSelectedServices, setCalcSelectedServices] = useState(['scaling']);
  const [calcTenor, setCalcTenor] = useState(6);

  const categories = ['Semua', 'Perapihan Gigi', 'Estetika', 'Restorasi', 'Perawatan Umum', 'Perawatan Anak', 'Bedah Mulut'];

  const filteredServices = activeCategory === 'Semua'
    ? clinicData.services
    : clinicData.services.filter(s => s.category === activeCategory);

  const getNumericPrice = (priceStr) => {
    if (priceStr.includes('3.999.000')) return 3999000;
    if (priceStr.includes('1.850.000')) return 1850000;
    if (priceStr.includes('8.500.000')) return 8500000;
    if (priceStr.includes('1.499.000')) return 1499000;
    if (priceStr.includes('250.000')) return 250000;
    if (priceStr.includes('299.000')) return 299000;
    if (priceStr.includes('350.000')) return 350000;
    if (priceStr.includes('1.750.000')) return 1750000;
    return 500000;
  };

  const calcTotalPrice = calcSelectedServices.reduce((sum, serviceId) => {
    const service = clinicData.services.find(s => s.id === serviceId);
    return sum + (service ? getNumericPrice(service.priceStart) : 0);
  }, 0);

  const calcMonthlyInstallment = Math.round(calcTotalPrice / calcTenor);

  const toggleCalcService = (id) => {
    if (calcSelectedServices.includes(id)) {
      if (calcSelectedServices.length > 1) {
        setCalcSelectedServices(calcSelectedServices.filter(s => s !== id));
      }
    } else {
      setCalcSelectedServices([...calcSelectedServices, id]);
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Layanan Perawatan Gigi <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Komprehensif & Bergaransi
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Setiap perawatan dilakukan dengan protokol sterilitas tinggi, anestesi minim rasa sakit, dan konsultasi terbuka bersama Dokter Spesialis.
            </p>
          </div>

          {/* Calculator Trigger Button */}
          {/* <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="px-5 py-3 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shrink-0"
          >
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>{showCalculator ? 'Tutup Kalkulator' : 'Kalkulator Simulasi Biaya & Cicilan'}</span>
          </button> */}
        </div>

        {/* Interactive Treatment Calculator Panel */}
        {showCalculator && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-amber-300 shadow-xl animate-in fade-in slide-in-from-top duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center border border-amber-300">
                <Calculator className="w-5 h-5 text-amber-700" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-slate-900">Kalkulator Simulasi Estimasi Perawatan & Cicilan 0%</h3>
                <p className="text-xs text-slate-600">Pilih perawatan yang Anda butuhkan untuk melihat perkiraan estimasi investasi kesehatan gigi Anda.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Select Treatments Grid */}
              <div className="lg:col-span-7 space-y-3 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Pilih Kombinasi Perawatan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {clinicData.services.map(service => {
                    const isChecked = calcSelectedServices.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleCalcService(service.id)}
                        className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-teal-600 border-teal-600' : 'border-slate-300'}`}>
                            {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </div>
                          <span>{service.title}</span>
                        </div>
                        <span className="text-teal-700 font-bold">{service.priceStart}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Summary Card */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-500 pb-2 border-b border-slate-100">
                    <span>Jumlah Perawatan Dipilih:</span>
                    <span className="font-bold text-slate-900">{calcSelectedServices.length} Item</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block mb-1">Estimasi Total Investasi:</span>
                    <p className="text-3xl font-black text-amber-600">
                      Rp {calcTotalPrice.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-700">Simulasi Cicilan 0%:</span>
                      <div className="flex gap-1">
                        {[3, 6, 12].map(t => (
                          <button
                            key={t}
                            onClick={() => setCalcTenor(t)}
                            className={`px-2.5 py-1 text-[11px] font-bold rounded-lg ${
                              calcTenor === t
                                ? 'bg-teal-600 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {t}x Bulan
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 flex justify-between items-center">
                      <span className="text-xs text-slate-600">Angsuran / bulan ({calcTenor} bulan):</span>
                      <span className="text-sm font-black text-teal-800">
                        Rp {calcMonthlyInstallment.toLocaleString('id-ID')} /bln
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-2">
                  <button
                    onClick={() => {
                      setShowCalculator(false);
                      onOpenBooking(calcSelectedServices[0]);
                    }}
                    className="w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Buat Janji Berdasarkan Perkiraan Ini
                  </button>
                  <p className="text-[10px] text-slate-500 text-center">
                    *Estimasi biaya akhir akan disesuaikan setelah pemeriksaan langsung oleh Dokter Spesialis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
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
              className="rounded-3xl bg-white border border-slate-200 hover:border-teal-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl hover:-translate-y-1 text-left"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-teal-800 text-[10px] font-bold uppercase tracking-wider border border-teal-200 shadow-sm">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div className="flex items-center gap-1.5 text-xs text-white bg-slate-900/70 px-2.5 py-1 rounded-lg backdrop-blur-sm font-semibold">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="space-y-1.5 pt-2">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Price & Action */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Mulai Dari:</span>
                  <span className="text-lg font-black text-amber-600">{service.priceStart}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
                    title="Lihat Detail Info"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-all shadow flex items-center gap-1.5"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl text-left">
            <div className="relative h-48">
              <img src={selectedServiceDetail.image} alt={selectedServiceDetail.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 flex items-center justify-center shadow"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-teal-100 text-teal-800 text-xs font-bold rounded border border-teal-200">
                  {selectedServiceDetail.category}
                </span>
                <span className="text-xs text-slate-500">• Estimasi Durasi: {selectedServiceDetail.duration}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{selectedServiceDetail.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedServiceDetail.description}</p>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <p className="text-xs font-bold text-teal-800 uppercase tracking-wider">Keunggulan Tindakan Di Upscale Dental:</p>
                {selectedServiceDetail.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[11px] text-slate-500 block">Investasi Mulai Dari:</span>
                  <span className="text-xl font-black text-amber-600">{selectedServiceDetail.priceStart}</span>
                </div>
                <button
                  onClick={() => {
                    const id = selectedServiceDetail.id;
                    setSelectedServiceDetail(null);
                    onOpenBooking(id);
                  }}
                  className="px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow flex items-center gap-2"
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
