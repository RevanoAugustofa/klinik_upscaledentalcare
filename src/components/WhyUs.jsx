import React from 'react';
import { UserCheck, ShieldCheck, Cpu } from 'lucide-react';

export default function WhyUs({ onOpenBooking }) {
  const advantages = [
    {
      icon: UserCheck,
      title: "Tim Dokter Gigi Profesional",
      description: "Perawatan ditangani langsung oleh Dokter Spesialis (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM) sesuai bidang keahliannya.",
      accent: "teal",
    },
    {
      icon: Cpu,
      title: "Painless Dental Technology",
      description: "Menggunakan peralatan 3D Scanner & Laser terkini buatan Eropa untuk prosedur yang sangat cepat, presisi, dan minim rasa sakit.",
      accent: "cyan",
    },
    {
      icon: ShieldCheck,
      title: "Jaminan 100% Steril",
      description: "Proses sterilisasi alat medis melewati 5 tahap Autoclave Class B untuk menjamin kebersihan 100% bebas risiko infeksi silang.",
      accent: "emerald",
    },
  ];

  const accentMap = {
    teal:    { bg: 'bg-teal-50',    border: 'border-teal-100',   icon: 'text-teal-600',    num: 'text-teal-600' },
    cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-100',   icon: 'text-cyan-600',    num: 'text-cyan-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600', num: 'text-emerald-600' },
  };

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label mb-4">Keunggulan Kami</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="text-gradient-teal">Mengapa Harus Memilih Upscale Dental Care Specialist ?</span>
          </h2>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            const colors = accentMap[adv.accent];
            return (
              <div
                key={idx}
                className="clinic-card group p-7 text-left"
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center transition-colors group-hover:border-teal-300`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <span className={`text-4xl font-black ${colors.num} opacity-20 font-mono leading-none`}>
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-slate-900 mb-2.5 group-hover:text-teal-700 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
