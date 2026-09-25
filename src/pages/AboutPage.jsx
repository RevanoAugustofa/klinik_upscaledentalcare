import React from 'react';
import { Sparkles, ShieldCheck, Award, MapPin, Users, HeartHandshake, Calendar, CheckCircle2, Clock } from 'lucide-react';
import FaqSection from '../components/FaqSection';
import { clinicData } from '../data/clinicData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Page Banner Header */}
      <section className="bg-gradient-to-b from-teal-50 via-slate-50 to-white py-14 border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Profil &amp; Filosofi Klinik
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tentang <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Upscale Dental Care Specialist</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Pelajari komitmen standar kedokteran gigi spesialis berteknologi presisi, sterilisasi 100%, serta pelayanan ramah sekelas VVIP di Kabupaten Cilacap.
          </p>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-6 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Tentang Upscale Dental Care Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <div className="md:col-span-6 space-y-4">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-lg border border-teal-200">
                Resmi Beroperasi Di Cilacap
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Komitmen Kami Untuk Senyum Sehat &amp; Estetis Anda
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Upscale Dental Care Specialist</strong> didirikan dengan visi menghadirkan fasilitas perawatan estetika dan kesehatan gigi tingkat tinggi tanpa harus pergi keluar kota.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Setiap pasien ditangani secara pribadi oleh tim **Dokter Gigi Spesialis (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM)** menggunakan peralatan 3D digital mutakhir buatan Eropa yang minim rasa sakit.
              </p>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Konsultasi Dengan Dokter Spesialis</span>
              </button>
            </div>
          </div>

          {/* Key Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center border border-teal-300">
                <Users className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Dokter Spesialis Expert</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Penanganan langsung oleh dokter gigi spesialis lulusan PTN terbaik.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center border border-teal-300">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Steril 100% Autoclave</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jaminan kebersihan medis 5 tahap standar internasional Class B.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center border border-amber-300">
                <Award className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Painless Technology</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Teknologi pencitraan 3D minim rasa sakit & pemulihan cepat.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center border border-teal-300">
                <HeartHandshake className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Cicilan 0% Transparan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Opsi pembayaran angsuran tanpa bunga hingga 12 bulan.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded FAQ Section */}
      <FaqSection />

    </div>
  );
}
