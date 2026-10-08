import React from 'react';
import SEO from '../components/SEO';
import { Sparkles, ShieldCheck, Award, Users, HeartHandshake, Calendar } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="animate-in fade-in duration-300">
      <SEO 
        title="Tentang Kami | Upscale Dental Care Specialist Cilacap"
        description="Profil Klinik Upscale Dental Care Cilacap. Komitmen standar kedokteran gigi spesialis berteknologi presisi, sterilisasi 100%, serta pelayanan ramah VVIP di Cilacap."
        canonical="/about"
        keywords="tentang upscale dental care, profil dokter gigi cilacap, fasilitas klinik gigi cilacap"
      />
      
      {/* Page Banner Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-14 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100/50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="section-label mb-4 inline-flex">Tentang Klinik Kami</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tentang{' '}
            <span className="text-teal-600">Upscale Dental Care Specialist</span>
          </h1>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center text-left">
            <div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-80">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Tentang Upscale Dental Care Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>

            <div className="md:col-span-6 space-y-5">
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-lg border border-teal-100">
                Resmi Beroperasi Di Cilacap
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Komitmen Kami Untuk Senyum Sehat &amp; Estetis Anda
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                <strong className="text-slate-700">Upscale Dental Care Specialist</strong> didirikan dengan visi menghadirkan fasilitas perawatan estetika dan kesehatan gigi tingkat tinggi tanpa harus pergi keluar kota.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Setiap pasien ditangani secara pribadi oleh tim Dokter Gigi Spesialis (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM) menggunakan peralatan 3D digital mutakhir buatan Eropa yang minim rasa sakit.
              </p>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Konsultasi Dengan Dokter Spesialis</span>
              </button>
            </div>
          </div>

          {/* Key Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { icon: Users, title: 'Dokter Spesialis Expert', desc: 'Penanganan langsung oleh dokter gigi spesialis lulusan PTN terbaik.', accent: 'teal' },
              { icon: ShieldCheck, title: 'Steril 100% Autoclave', desc: 'Jaminan kebersihan medis 5 tahap standar internasional Class B.', accent: 'teal' },
              { icon: Award, title: 'Painless Technology', desc: 'Teknologi pencitraan 3D minim rasa sakit & pemulihan cepat.', accent: 'amber' },
              { icon: HeartHandshake, title: 'Cicilan 0% Transparan', desc: 'Opsi pembayaran angsuran tanpa bunga hingga 12 bulan.', accent: 'teal' },
            ].map((item, idx) => {
              const Icon = item.icon;
              const isAmber = item.accent === 'amber';
              return (
                <div key={idx} className="clinic-card p-5 text-left">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3 ${isAmber ? 'bg-amber-50 border-amber-100' : 'bg-teal-50 border-teal-100'}`}>
                    <Icon className={`w-5 h-5 ${isAmber ? 'text-amber-600' : 'text-teal-600'}`} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
