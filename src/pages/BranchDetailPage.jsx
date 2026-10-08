import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Navigation, 
  Star, Building2, CheckCircle, ArrowRight, Calendar,
  MessageCircle, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import { clinicData } from '../data/clinicData';

export default function BranchDetailPage({ onOpenBooking }) {
  const { branchId } = useParams();
  
  // Normalize branch ID from URL param (e.g. "cabang-cilacap" or "cilacap")
  const targetId = (branchId || '').replace(/^cabang-/, '').toLowerCase() || 'cilacap';
  
  const branch = clinicData.branches.find(b => b.id === targetId) || clinicData.branches[0];
  const otherBranches = clinicData.branches.filter(b => b.id !== branch.id);

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

      {/* Branch Hero Section — dark navy */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-20 overflow-hidden text-left border-b border-slate-800">
        {/* Subtle radial accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-600/20 border border-teal-500/30 rounded-full text-teal-300 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5 text-teal-400" />
                <span>{branch.badge} • Kota {branch.city}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Klinik Dokter Gigi Spesialis{' '}
                <span className="text-teal-400">{branch.name}</span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Klinik gigi spesialis modern di {branch.city} melayani Behel Ortodonti, Porcelain Veneer, Implan Gigi, Laser Bleaching, dan Perawatan Gigi Anak dengan standar sterilitas tinggi &amp; dokter spesialis tepercaya.
              </p>

              {/* Rating & Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <div>
                    <span className="text-sm font-bold text-white block">{branch.googleRating} / 5.0</span>
                    <span className="text-[10px] text-slate-400">{branch.googleReviewCount}+ Ulasan Google Pasien</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <div>
                    <span className="text-sm font-bold text-white block">Steril 100% Autoclave B</span>
                    <span className="text-[10px] text-slate-400">Protokol Kesehatan Medis Eropa</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${branch.whatsappNumber}?text=Halo%20Admin%20Upscale%20Dental%20Care%20${encodeURIComponent(branch.name)},%20saya%20ingin%20reservasi%20jadwal%20konsultasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reservasi WA {branch.shortName}</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Info Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-5 text-left">
                
                <div className="border-b border-slate-700 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block mb-1">
                    Informasi Cabang {branch.city}
                  </span>
                  <h3 className="text-lg font-bold text-white">{branch.name}</h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-600/20 border border-teal-600/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Alamat Lengkap</span>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{branch.address}</p>
                    {branch.landmark && (
                      <p className="text-[11px] text-amber-400/90 italic mt-1">Patokan: {branch.landmark}</p>
                    )}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-4 border-t border-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-amber-600/20 border border-amber-600/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Jam Operasional</span>
                    {branch.operationalHours.map((h, idx) => (
                      <p key={idx} className="text-xs text-slate-300 font-medium">
                        <strong className="text-white">{h.days}:</strong> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-teal-600/20 border border-teal-600/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Hotline Direct</span>
                    <a href={`tel:${branch.phone}`} className="text-xs font-bold text-teal-400 hover:underline">
                      {branch.phone} ({branch.formattedWhatsapp})
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Alamat Klinik Gigi {branch.name}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Lokasi strategis mudah dijangkau kendaraan roda dua &amp; empat dengan fasilitas parkir luas.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md min-h-[420px]">
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

      {/* Doctors Team */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-4">Tim Medis</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dokter Gigi {branch.name}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              Tim dokter spesialis berlisensi resmi lulusan universitas terbaik di Indonesia (UGM, UI, UNAIR, UNPAD).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicData.doctors.map((doc) => (
              <div 
                key={doc.id}
                className="clinic-card group overflow-hidden flex flex-col text-left"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{doc.name}</h3>
                  <p className="text-xs text-teal-600 font-semibold mt-0.5">{doc.title}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Alumni: {doc.education}</p>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Jadwal Praktik:</span>
                    <span className="text-xs text-slate-600 font-medium">{doc.schedule}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(null, doc.id)}
                    className="mt-4 w-full py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
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

      {/* Services at Branch */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-4">Layanan Tersedia</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Layanan Perawatan cabang {branch.shortName}
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Semua tindakan medis dikerjakan menggunakan peralatan ter-kalibrasi presisi dengan garansi hasil maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {clinicData.services.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="clinic-card p-6 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{service.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-teal-500" />
                    {service.duration}
                  </span>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3.5 py-2 text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Reservasi</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <span>Lihat Semua Layanan Perawatan Gigi</span>
              <ArrowRight className="w-4 h-4 text-teal-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-4">Fasilitas</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fasilitas &amp; Kenyamanan {branch.name}
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Suasana klinik yang tenang, mewah, dan higienis tanpa menimbulkan rasa cemas atau takut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {clinicData.facilities.slice(0, 3).map((facility, idx) => (
              <div key={idx} className="clinic-card overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{facility.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switch Branch */}
      {otherBranches.length > 0 && (
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Lihat Cabang Upscale Dental Care Lainnya
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {otherBranches.map((ob) => (
                <Link
                  key={ob.id}
                  to={`/cabang-${ob.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:border-teal-300 text-slate-800 hover:text-teal-700 font-semibold text-sm rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <MapPin className="w-4 h-4 text-teal-500" />
                  <span>{ob.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
