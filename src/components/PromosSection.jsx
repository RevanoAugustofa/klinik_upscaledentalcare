import React, { useState, useEffect } from 'react';
import { Tag, Clock, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function PromosSection({ onOpenBooking }) {
  const [copiedCode, setCopiedCode] = useState(null);

  // Simulated countdown timer (14 days left)
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 22, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: (prev.minutes || 59) - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="promos" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Promo Spesial & Paket <br />
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                Perawatan Gigi Cilacap
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dapatkan potongan harga khusus, bonus konsultasi gratis, dan cicilan 0% untuk paket perawatan terbaik Anda.
            </p>
          </div>

          {/* Countdown Clock Box */}
          <div className="bg-amber-50/80 border border-amber-300 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-md">
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center border border-amber-300">
              <Clock className="w-5 h-5 text-amber-700 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block">Promo Berakhir Dalam:</span>
              <div className="flex items-center gap-1.5 text-sm font-black text-slate-900">
                <span className="bg-white px-2 py-0.5 rounded border border-amber-200 text-amber-700">{timeLeft.days}h</span> :
                <span className="bg-white px-2 py-0.5 rounded border border-amber-200">{timeLeft.hours}j</span> :
                <span className="bg-white px-2 py-0.5 rounded border border-amber-200">{timeLeft.minutes}m</span> :
                <span className="bg-white px-2 py-0.5 rounded border border-amber-200 text-teal-700">{timeLeft.seconds}d</span>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicData.promos.map((promo) => (
            <div
              key={promo.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl text-left"
            >
              <div>
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-slate-950 font-black text-xs rounded-full shadow-md uppercase tracking-wider">
                    {promo.discount}
                  </div>
                </div>

                {/* Promo Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {promo.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {promo.subtitle}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {promo.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code Copy Button Box */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-bold">Kode Voucher:</span>
                      <span className="text-xs font-mono font-extrabold text-teal-800">{promo.code}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(promo.code)}
                      className="px-3 py-1.5 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 rounded-lg transition-colors flex items-center gap-1 border border-slate-200 shadow-xs"
                    >
                      {copiedCode === promo.code ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-teal-600" />
                          <span className="text-teal-700">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-slate-400 line-through block">{promo.originalPrice}</span>
                  <span className="text-xl font-black text-amber-600">{promo.promoPrice}</span>
                </div>

                <button
                  onClick={() => onOpenBooking(null, null, promo.code)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow flex items-center gap-1"
                >
                  <span>Klaim Promo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
