import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, CreditCard, Sparkles, Cpu, Clock, ThumbsUp } from 'lucide-react';

export default function WhyUs({ onOpenBooking }) {
  const advantages = [
    {
      icon: UserCheck,
      title: "Tim Dokter Gigi Profesional",
      description: "Perawatan ditangani langsung oleh Dokter Spesialis (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM) sesuai bidang keahliannya.",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Painless Dental Technology",
      description: "Menggunakan peralatan 3D Scanner & Laser terkini buatan Eropa untuk prosedur yang sangat cepat, presisi, dan minim rasa sakit.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: ShieldCheck,
      title: "Jaminan 100% Steril",
      description: "Proses sterilisasi alat medis melewati 5 tahap Autoclave Class B untuk menjamin kebersihan 100% bebas risiko infeksi silang.",
      color: "from-emerald-500 to-teal-500"
    },
  ];

  return (
    <section className="py-16 bg-slate-100/70 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {/* Mengapa Harus <br className="hidden sm:inline" /> */}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Mengapa Harus Memilih Upscale Dental Care Specialist ?</span>
          </h2>
          {/* <p className="text-slate-600 text-sm sm:text-base">
            Kami mengkombinasikan keahlian dokter spesialis bereputasi tinggi dengan standar kenyamanan dan teknologi Kedokteran Gigi modern di Cilacap.
          </p> */}
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 group text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${adv.color} p-0.5 mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
