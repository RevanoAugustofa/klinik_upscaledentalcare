import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FloatingWhatsapp({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const quickQuestions = [
    "Berapa harga pasang behel ortodonti?",
    "Apakah dokter gigi spesialis buka hari ini?",
    "Bisa cicilan 0% untuk veneer gigi?",
    "Saya mau reservasi pembersihan karang gigi (scaling)"
  ];

  const sendToWhatsapp = (textToSend) => {
    const msg = textToSend || userMsg || "Halo Upscale Dental Care Specialist, saya ingin konsultasi perawatan gigi";
    window.open(`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Popover Chat Window */}
      {isOpen && (
        <div className="bg-white border border-emerald-300 rounded-3xl max-w-xs sm:max-w-sm w-full p-5 shadow-2xl animate-in zoom-in-95 duration-200 text-left space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  UDC
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Hotline WhatsApp Admin</h4>
                <span className="text-[10px] text-emerald-700 font-bold">Online • Merespon Cepat</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-slate-800 leading-relaxed">
            👋 Halo! Selamat datang di <strong>Upscale Dental Care Specialist Cilacap</strong>. Ada keluhan gigi atau pertanyaan seputar perawatan yang bisa kami bantu?
          </div>

          {/* Quick Buttons */}
          <div className="space-y-1.5">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">Pertanyaan Cepat:</span>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => sendToWhatsapp(q)}
                className="w-full p-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 rounded-xl text-[11px] font-semibold text-left border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between"
              >
                <span className="truncate">{q}</span>
                <Send className="w-3 h-3 text-emerald-600 shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Tulis pesan Anda..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendToWhatsapp()}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-emerald-500 focus:outline-none"
            />
            <button
              onClick={() => sendToWhatsapp()}
              className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-lg backdrop-blur-md animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Chat Admin WhatsApp</span>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 group border-2 border-emerald-300/40"
          aria-label="WhatsApp Hotline"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

    </div>
  );
}
