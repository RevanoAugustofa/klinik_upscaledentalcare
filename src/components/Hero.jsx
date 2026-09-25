import React from 'react';
import { Calendar, ShieldCheck, Star, Sparkles, PhoneCall, ChevronRight, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Hero({ onOpenBooking, onOpenQuiz }) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-200/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call To Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
              <span className="text-xs font-bold text-teal-800 tracking-wide uppercase">
                Klinik Dokter Gigi Spesialis
              </span>
              <span className="text-xs text-slate-300">|</span>
              <span className="text-xs text-amber-700 font-bold flex items-center gap-1">
                ★ 4.9 Rating Google
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Wujudkan Senyum <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600 bg-clip-text text-transparent">
                Indah, Rapi & Sehat
              </span> <br />
              Bersama Dokter Spesialis
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-semibold">Upscale Dental Care Specialist Cilacap</strong> menghadirkan perawatan estetika & kesehatan gigi kualitas terbaik. Didukung oleh tim dokter spesialis (Ortodonti, Konservasi Gigi, Bedah Mulut, & Anak) dengan teknologi 3D Eropa modern tanpa rasa sakit.
            </p>

            {/* Highlighted Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Dokter Spesialis Sp.Ort & Sp.KG</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Peralatan Steril 100%</span>
              </div>
            </div>

            {/* CTAs Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* <button
                onClick={onOpenBooking}
                className="px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 hover:from-teal-500 hover:to-cyan-500 rounded-2xl shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Buat Janji Reservasi Online</span>
                <ChevronRight className="w-4 h-4" />
              </button> */}

              <a
                href={`https://wa.me/${clinicData.whatsappNumber}?text=Halo%20Upscale%20Dental%20Care%20Cilacap,%20saya%20ingin%20konsultasi%20perawatan%20gigi`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all flex items-center justify-center gap-2.5 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-teal-600" />
                <span>Chat WhatsApp Admin</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              {clinicData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-teal-700">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Accent Ring */}
            {/* <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-400 opacity-30 blur-xl"></div> */}
            
            <div className="relative rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Upscale Dental Care Specialist Clinic Cilacap"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>

            </div>

            {/* Address Banner Snippet */}
            <div className="mt-4 p-3 bg-white border border-slate-200 rounded-2xl flex items-center justify-between text-xs shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Jl. DI Panjaitan No.23, Gobok, Donan, Cilacap</span>
              </div>
              <a
                href="#location"
                className="text-teal-700 hover:text-teal-800 font-bold flex items-center gap-1"
              >
                Peta & Buka <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
