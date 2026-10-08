import React, { useState } from 'react';
import { Tag, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function PromosSection({ onOpenBooking }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="promos" className="py-20 bg-amber-50/40 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full text-[11px] font-bold text-amber-800 uppercase tracking-wider">
              <Tag className="w-3 h-3" />
              Penawaran Terbatas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Promo Spesial &amp; Paket{' '}
              <span className="text-amber-600">Perawatan Gigi Cilacap</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Dapatkan potongan harga khusus, bonus konsultasi gratis, dan cicilan 0% untuk paket perawatan terbaik Anda.
            </p>
          </div>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicData.promos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white border border-slate-200 hover:border-amber-300 transition-all duration-200 hover:shadow-md rounded-xl flex flex-col overflow-hidden text-left group"
            >
              {/* Header Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white font-bold text-xs rounded-lg shadow-sm uppercase">
                  {promo.discount}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-[17px] font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {promo.subtitle}
                  </p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-xl font-black text-amber-600">{promo.promoPrice}</span>
                    <span className="text-xs text-slate-400 line-through">{promo.originalPrice}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 flex-1">
                  {promo.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Voucher Code Row */}
                <div className="mt-auto p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-amber-800 uppercase font-bold tracking-wider block mb-0.5">Kode Voucher:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {promo.code}
                      </span>
                      <button
                        onClick={() => handleCopyCode(promo.code)}
                        title="Salin Kode Voucher"
                        className="px-2 py-1 bg-white hover:bg-slate-50 text-[10px] font-semibold text-slate-600 rounded border border-slate-200 flex items-center gap-1 transition-colors"
                      >
                        {copiedCode === promo.code ? (
                          <>
                            <Check className="w-3 h-3 text-teal-600" />
                            <span className="text-teal-700">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(null, null, promo.code)}
                    className="px-4 py-2 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>Klaim</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
