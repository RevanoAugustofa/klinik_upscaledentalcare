import React from 'react';
import { Award, GraduationCap, Calendar, Clock, Sparkles, ChevronRight, CheckCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function DoctorsSection({ onOpenBooking }) {
  return (
    <section id="doctors" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dokter Gigi Spesialis <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Berpengalaman & Bersertifikat
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Setiap perawatan di Upscale Dental Care ditangani oleh Dokter Gigi Spesialis sesuai disiplin keilmuannya (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM) demi hasil optimal dan presisi.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicData.doctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-teal-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl hover:-translate-y-1 text-left"
            >
              <div>
                {/* Doctor Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-amber-700 text-[10px] font-bold border border-amber-300 flex items-center gap-1 shadow-sm">
                    <Award className="w-3 h-3 text-amber-600" />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-700 mt-0.5">
                      {doc.title}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-slate-600">
                      <GraduationCap className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{doc.education}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600">
                      <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{doc.schedule}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed pt-1 line-clamp-3">
                    {doc.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBooking(null, doc.id)}
                  className="w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-teal-600 hover:text-white border border-slate-200 hover:border-teal-500 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Buat Janji drg. {doc.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Banner Consultation Guarantee */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              Butuh Rujukan Kasus Gigi Khusus Atau Second Opinion?
            </h4>
            <p className="text-xs text-slate-600">
              Tim dokter spesialis kami siap mendiskusikan rencana perawatan (treatment plan) yang paling efisien dan tepat untuk kebutuhan estetika maupun kesehatan gigi Anda.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1"
          >
            <span>Jadwalkan Konsultasi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
