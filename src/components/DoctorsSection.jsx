import React from 'react';
import { Award, GraduationCap, Clock } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function DoctorsSection({ onOpenBooking }) {
  return (
    <section id="doctors" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-4">Tim Medis Profesional</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dokter Gigi Spesialis{' '}
            <span className="text-teal-600">Berpengalaman & Bersertifikat</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            Setiap perawatan di Upscale Dental Care ditangani oleh Dokter Gigi Spesialis sesuai disiplin keilmuannya (Sp.Ort, Sp.KG, Sp.KGA, Sp.BMM) demi hasil optimal dan presisi.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicData.doctors.map((doc) => (
            <div
              key={doc.id}
              className="clinic-card group flex flex-col overflow-hidden text-left"
            >
              {/* Doctor Image */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Experience Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/95 text-amber-700 text-[10px] font-bold border border-amber-200 flex items-center gap-1 shadow-sm">
                  <Award className="w-3 h-3 text-amber-500" />
                  <span>{doc.experience}</span>
                </div>
              </div>

              {/* Info Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-bold text-teal-600 mt-0.5">
                    {doc.title}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{doc.education}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                    <span>{doc.schedule}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-3 line-clamp-3 flex-1">
                  {doc.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
