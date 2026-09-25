import React from 'react';
import { X, Sparkles, ShieldCheck, Award, MapPin, Users, HeartHandshake, CheckCircle2, Clock } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function AboutModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center border border-slate-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center p-0.5 shadow-md">
            <div className="w-full h-full bg-teal-600 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">Tentang Upscale Dental Care Specialist</h3>
            <p className="text-xs text-teal-700 font-bold">Klinik Dokter Gigi Spesialis Terpercaya • Cilacap</p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="space-y-6">
          
          {/* Main Hero Image */}
          <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100 border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Profil Upscale Dental Care Specialist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500 text-white text-[10px] font-extrabold uppercase tracking-wider">
                Resmi Cilacap
              </span>
              <h4 className="text-base font-bold mt-1">Standar Medis VVIP & Pelayanan Berhati</h4>
            </div>
          </div>

          {/* Description Story */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">Upscale Dental Care Specialist</strong> didirikan dengan komitmen memberikan perawatan estetika dan kesehatan gigi berkualitas tinggi bagi masyarakat Kabupaten Cilacap dan sekitarnya.
            </p>
            <p>
              Kami meyakini bahwa senyum yang sehat dan rapi adalah kunci rasa percaya diri setiap individu. Oleh karena itu, setiap prosedur tindakan di klinik kami ditangani secara langsung oleh **Dokter Gigi Spesialis** lulusan universitas ternama di Indonesia sesuai bidang keahliannya (Ortodonti, Estetika & Konservasi, Bedah Mulut, serta Kedokteran Gigi Anak).
            </p>
          </div>

          {/* Key Value Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <Users className="w-4 h-4 text-teal-600" />
                <span>Dokter Spesialis Expert</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Tim dokter bersertifikat Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM berpengalaman ribuan kasus.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Sterilisasi 5 Tahap Eropa</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Alat medis dijamin 100% bebas kuman melalui proses Autoclave Class B terkini.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Painless Technology</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Prosedur minimal rasa sakit dengan peralatan pencitraan 3D digital presisi tinggi.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <HeartHandshake className="w-4 h-4 text-teal-600" />
                <span>Kenyamanan & Cicilan 0%</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Suasana klinik rileks tanpa antre lama, plus skema pembayaran fleksibel.
              </p>
            </div>
          </div>

          {/* Address & Hotline Box */}
          <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200 text-xs space-y-2">
            <div className="flex items-start gap-2 text-slate-800">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <span><strong>Alamat:</strong> {clinicData.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong>Jam Buka:</strong> Senin - Sabtu (09.00 - 21.00 WIB) | Minggu (By Appointment)</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Konsultasi & Reservasi Sekarang</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
