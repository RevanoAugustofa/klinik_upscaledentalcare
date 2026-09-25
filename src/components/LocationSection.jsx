import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function LocationSection({ onOpenBooking }) {
  return (
    <section id="location" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Lokasi Klinik & Jam Operasional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kunjungi Klinik Gigi Spesialis Kami <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Di Pusat Kota Cilacap
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Lokasi strategis, mudah diakses, dilengkapi dengan fasilitas parkir kendaraan luas dan aman.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Address & Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center border border-teal-300 shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Alamat Lengkap Klinik</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mt-1">
                    {clinicData.address}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    (Kecamatan Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53215)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-bold">Hotline & WhatsApp:</span>
                    <a
                      href={`tel:${clinicData.phone}`}
                      className="text-xs font-bold text-teal-700 hover:underline"
                    >
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-bold">Jam Praktik Operasional:</span>
                    {clinicData.operationalHours.map((h, i) => (
                      <p key={i} className="text-xs text-slate-700 font-medium">
                        <strong className="text-slate-900">{h.days}:</strong> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://maps.google.com/?q=Upscale+Dental+Care+Specialist+Cilacap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-all shadow flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah (Maps)</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="py-3 px-4 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-xs"
                >
                  Reservasi Jadwal
                </button>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Terdaftar Resmi di Portal IDalamat.com</span>
              </div>
              <a
                href="https://idalamat.com/alamat/upscale-dental-care-specialist-1060870"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-800 font-bold flex items-center gap-1 text-[11px]"
              >
                Lihat IDalamat <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map / Map Showcase */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl relative min-h-[380px]">
            <iframe
              title="Lokasi Upscale Dental Care Specialist Cilacap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.214871923292!2d109.0069!3d-7.7245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDMnMjgyMiJTIDEwOcKwMDAnMjQuOCJF!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center gap-2 pointer-events-none shadow-md">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Jl. DI Panjaitan No.23, Donan, Cilacap Tengah</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
