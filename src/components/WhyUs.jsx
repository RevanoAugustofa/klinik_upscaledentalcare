import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, CreditCard, Sparkles, Cpu, Clock, ThumbsUp } from 'lucide-react';

export default function WhyUs({ onOpenBooking }) {
  const advantages = [
    {
      icon: UserCheck,
      title: "Tim Dokter Spesialis Terlengkap",
      description: "Perawatan ditangani langsung oleh Dokter Spesialis lulusan PTN terbaik (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM) sesuai bidang keahliannya.",
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
      title: "Jaminan 100% Steril Standard Eropa",
      description: "Proses sterilisasi alat medis melewati 5 tahap Autoclave Class B untuk menjamin kebersihan 100% bebas risiko infeksi silang.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: CreditCard,
      title: "Transparan & Cicilan 0%",
      description: "Tanpa biaya tersembunyi. Tersedia opsi pembayaran fleksibel dengan program Cicilan 0% hingga 12 bulan untuk perapihan behel & veneer.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: HeartHandshake,
      title: "Klinik Ramah Anak & Dewasa",
      description: "Suasana klinik yang tenang, wangi aromaterapi, ruang bermain anak, serta pelayanan staff yang ramah sekelas hotel berbintang.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Reservasi Tepat Waktu Tanpa Antre",
      description: "Sistem jadwal dokter terstruktur presisi. Anda datang sesuai jam reservasi dan langsung mendapatkan layanan tanpa membuang waktu.",
      color: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-slate-100/70 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Keunggulan Utama Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Ratusan Pasien <br className="hidden sm:inline" />
            Memilih <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Upscale Dental Care Specialist</span>?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Kami mengkombinasikan keahlian dokter spesialis bereputasi tinggi dengan standar kenyamanan dan teknologi Kedokteran Gigi modern di Cilacap.
          </p>
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

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-50 via-cyan-50 to-white border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-300">
              <ThumbsUp className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Garansi Kepuasan & Kenyamanan Pasien</p>
              <p className="text-xs text-slate-600">Konsultasikan keluhan gigi Anda secara personal bersama tim spesialis kami hari ini.</p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            Konsultasi Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}
