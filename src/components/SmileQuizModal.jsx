import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RefreshCw, Calendar } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function SmileQuizModal({ isOpen, onClose, onOpenBooking }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    urgency: '',
    budget: ''
  });

  if (!isOpen) return null;

  const goalOptions = [
    { id: 'behel', label: 'Perapihan Gigi Berjejal / Gingsul / Maju', reco: 'behel', spec: 'drg. Amanda Saphira, Sp.Ort' },
    { id: 'veneer', label: 'Ingin Senyum Putih Rapi Instan (Veneer)', reco: 'veneer', spec: 'drg. Budi Pratama, Sp.KG' },
    { id: 'bleaching', label: 'Gigi Kuning Ingin Diputihkan Instan 45 Min', reco: 'bleaching', spec: 'Dokter Gigi Spesialis Konservasi' },
    { id: 'implant', label: 'Ada Gigi Ompong / Hilang Ingin Ditanam', reco: 'implant', spec: 'drg. Rian Hendrawan, Sp.BMM' },
    { id: 'anak', label: 'Perawatan Gigi Anak (Bebas Perih & Ramah)', reco: 'anak', spec: 'drg. Clara Kirana, Sp.KGA' },
    { id: 'scaling', label: 'Pembersihan Karang Gigi & Sakit Gigi Umum', reco: 'scaling', spec: 'Dokter Gigi Spesialis' }
  ];

  const handleSelectGoal = (opt) => {
    setAnswers({ ...answers, goal: opt.id });
    setStep(2);
  };

  const handleSelectUrgency = (urg) => {
    setAnswers({ ...answers, urgency: urg });
    setStep(3);
  };

  const selectedGoalObj = goalOptions.find(g => g.id === answers.goal) || goalOptions[0];
  const recommendedService = clinicData.services.find(s => s.id === selectedGoalObj.reco);

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ goal: '', urgency: '', budget: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="bg-white border border-teal-300 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center border border-slate-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center border border-teal-300">
            <Sparkles className="w-5 h-5 text-teal-700" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest block">
              Quiz Diagnosa Senyum (Langkah {step} dari 3)
            </span>
            <h3 className="text-lg font-bold text-slate-900">Analisis Perawatan Gigi Ideal Anda</h3>
          </div>
        </div>

        {/* Step 1: Primary Concern */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-800">
              1. Apa keluhan atau tujuan utama senyum yang ingin Anda perbaiki?
            </p>
            <div className="space-y-2.5">
              {goalOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectGoal(opt)}
                  className="w-full p-3.5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-400 text-xs font-bold text-slate-800 hover:text-teal-900 transition-all flex items-center justify-between text-left group shadow-xs"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Time Sensitivity */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-800">
              2. Kapan Anda berencana melakukan kunjungan konsultasi?
            </p>
            <div className="space-y-2.5">
              {[
                { id: 'secepatnya', label: 'Hari ini / Besok (Mendesak / Butuh Penanganan)' },
                { id: 'minggu-ini', label: 'Dalam 3-7 Hari Ini (Jadwal Kerja / Akhir Pekan)' },
                { id: 'bebas', label: 'Hanya Ingin Konsultasi & Cek Estimasi Dulu' }
              ].map((urg) => (
                <button
                  key={urg.id}
                  onClick={() => handleSelectUrgency(urg.label)}
                  className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-400 text-xs font-bold text-slate-800 hover:text-teal-900 transition-all flex items-center justify-between text-left group shadow-xs"
                >
                  <span>{urg.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-500 hover:text-slate-800 underline pt-2 block font-semibold"
            >
              ← Kembali ke pertanyaan sebelumnya
            </button>
          </div>
        )}

        {/* Step 3: Result & Recommendation */}
        {step === 3 && recommendedService && (
          <div className="space-y-5 animate-in fade-in">
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-teal-900 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Rekomendasi Spesialis Untuk Anda
              </div>

              <div className="flex gap-3">
                <img
                  src={recommendedService.image}
                  alt={recommendedService.title}
                  className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{recommendedService.title}</h4>
                  <p className="text-xs text-amber-700 font-extrabold mt-0.5">Estimasi: {recommendedService.priceStart}</p>
                  <p className="text-[11px] text-slate-600 mt-1">Dokter Spesialis: <strong className="text-slate-900">{selectedGoalObj.spec}</strong></p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
              ✨ <strong>Bonus Quiz:</strong> Anda berhak mendapatkan <strong>Free Konsultasi Pertama & Scan 3D</strong> jika melakukan booking online sekarang!
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={resetQuiz}
                className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-200"
                title="Ulangi Quiz"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Ulangi</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(recommendedService.id);
                }}
                className="flex-1 py-3 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Klaim Bonus & Buat Janji</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
