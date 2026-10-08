import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck, 
  Star, Building2, CheckCircle, ArrowRight, Calendar, Sparkles,
  ChevronRight, Award, UserCheck, Heart, Info, MessageCircle, HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import { clinicData } from '../data/clinicData';

export default function BranchDetailPage({ onOpenBooking }) {
  const { branchId } = useParams();
  
  // Normalize branch ID from URL param (e.g. "cabang-cilacap" or "cilacap")
  const targetId = (branchId || '').replace(/^cabang-/, '').toLowerCase() || 'cilacap';
  
  const branch = clinicData.branches.find(b => b.id === targetId) || clinicData.branches[0];
  const otherBranches = clinicData.branches.filter(b => b.id !== branch.id);

  const [activeDoctorTab, setActiveDoctorTab] = useState('Semua');


  if (!branch) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="animate-in fade-in duration-300 bg-white">
      <SEO 
        title={`Klinik Gigi ${branch.city} Terdekat - ${branch.name} | Upscale Dental Care`}
        description={`Klinik Dokter Gigi Spesialis #1 di ${branch.city}. Melayani Behel Ortodonti, Veneer Gigi, Implan, Bleaching Laser, & Dental Anak di ${branch.address}.`}
        canonical={`/cabang-${branch.id}`}
        keywords={`dokter gigi ${branch.city.toLowerCase()}, klinik gigi ${branch.city.toLowerCase()}, behel ${branch.city.toLowerCase()}, veneer ${branch.city.toLowerCase()}, upscale dental ${branch.city.toLowerCase()}`}
      />

    

      {/* Branch Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24 overflow-hidden text-left">
        {/* Decorative Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-xs font-bold backdrop-blur-md">
                <Building2 className="w-4 h-4 text-teal-400" />
                <span>{branch.badge} • Kota {branch.city}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Klinik Dokter Gigi Spesialis <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  {branch.name}
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Klinik gigi spesialis modern di {branch.city} melayani Behel Ortodonti, Porcelain Veneer, Implan Gigi, Laser Bleaching, dan Perawatan Gigi Anak dengan standar sterilitas tinggi &amp; dokter spesialis tepercaya.
              </p>

              {/* Rating & Stats Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <div>
                    <span className="text-sm font-bold text-white block">{branch.googleRating} / 5.0</span>
                    <span className="text-[10px] text-slate-400 block">{branch.googleReviewCount}+ Ulasan Google Pasien</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                  <div>
                    <span className="text-sm font-bold text-white block">Steril 100% Autoclave B</span>
                    <span className="text-[10px] text-slate-400 block">Protokol Kesehatan Medis Eropa</span>
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`https://wa.me/${branch.whatsappNumber}?text=Halo%20Admin%20Upscale%20Dental%20Care%20${encodeURIComponent(branch.name)},%20saya%20ingin%20reservasi%20jadwal%20konsultasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Reservasi WA {branch.shortName}</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>
              </div>

            </div>

            {/* Right Card Column */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700 backdrop-blur-xl space-y-5 shadow-2xl text-left">
                
                <div className="border-b border-slate-700/80 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block mb-1">
                    Informasi Cabang {branch.city}
                  </span>
                  <h3 className="text-xl font-bold text-white">{branch.name}</h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Alamat Lengkap</span>
                    <p className="text-xs text-slate-200 leading-relaxed mt-0.5">{branch.address}</p>
                    {branch.landmark && (
                      <p className="text-[11px] text-amber-300/90 italic mt-1">Patokan: {branch.landmark}</p>
                    )}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-700/80">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Jam Operasional</span>
                    {branch.operationalHours.map((h, idx) => (
                      <p key={idx} className="text-xs text-slate-200 font-medium">
                        <strong className="text-white">{h.days}:</strong> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-700/80">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Hotline Direct</span>
                    <a href={`tel:${branch.phone}`} className="text-xs font-bold text-teal-300 hover:underline">
                      {branch.phone} ({branch.formattedWhatsapp})
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map & Direction Details */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Alamat Klinik Gigi {branch.name}
            </h2>
            <p className="text-slate-600 text-sm">
              Lokasi strategis mudah dijangkau kendaraan roda dua &amp; empat dengan fasilitas parkir luas.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl min-h-[420px] relative">
            <iframe
              title={`Google Map ${branch.name}`}
              src={branch.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Doctors Team Section at this branch */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dokter Gigi {branch.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tim dokter spesialis berlisensi resmi lulusan universitas terbaik di Indonesia (UGM, UI, UNAIR, UNPAD).
            </p>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicData.doctors.map((doc) => (
              <div 
                key={doc.id}
                className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-600 rounded text-white uppercase">
                        {doc.experience}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-teal-700 font-semibold">{doc.title}</p>
                    <p className="text-[11px] text-slate-500">Alumni: {doc.education}</p>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Jadwal Praktik:</span>
                      <span className="text-xs text-slate-700 font-medium">{doc.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBooking(null, doc.id)}
                    className="w-full py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-all shadow flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Janji drg. {doc.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services at Branch */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Layanan Perawatan cabang {branch.shortName}
            </h2>
            <p className="text-slate-600 text-sm">
              Semua tindakan medis dikerjakan menggunakan peralatan ter-kalibrasi presisi dengan garansi hasil maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {clinicData.services.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                 
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{service.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    {service.duration}
                  </span>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3.5 py-2 text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors flex items-center gap-1"
                  >
                    <span>Reservasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 transition-all"
            >
              <span>Lihat Semua Layanan Perawatan Gigi</span>
              <ArrowRight className="w-4 h-4 text-teal-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fasilitas &amp; Kenyamanan {branch.name}
            </h2>
            <p className="text-slate-600 text-sm">
              Suasana klinik yang tenang, mewah, dan higienis tanpa menimbulkan rasa cemas atau takut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {clinicData.facilities.slice(0, 3).map((facility, idx) => (
              <div key={idx} className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">{facility.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Switch to Other Branch Navigator */}
      {otherBranches.length > 0 && (
        <section className="py-16 bg-slate-100 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Lihat Cabang Upscale Dental Care Lainnya
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {otherBranches.map((ob) => (
                <Link
                  key={ob.id}
                  to={`/cabang-${ob.id}`}
                  className="px-6 py-4 rounded-2xl bg-white border border-slate-300 text-slate-900 hover:border-teal-500 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
                >
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>{ob.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
