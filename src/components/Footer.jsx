import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Heart, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* LOGO */}
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-teal-400" />
                </div>
              </div> */}
              <div>
                <span className="font-extrabold text-lg text-white">UPSCALE DENTAL CARE</span>
                <p className="text-[10px] text-teal-400 font-bold tracking-widest uppercase">Specialist Clinic</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
             Upscale Dental Care menghadirkan perawatan gigi berkualitas dengan dukungan tim dokter spesialis untuk kesehatan dan senyum terbaik Anda.
             </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Jelajahi</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-teal-300 transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="hover:text-teal-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-300 transition-colors">Layanan</Link></li>
              <li><Link to="/doctors" className="hover:text-teal-300 transition-colors">Dokter Tim</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-300 transition-colors">Before &amp; After</Link></li>
              <li><Link to="/services/promos" className="hover:text-teal-300 transition-colors">Promo Terbaru</Link></li>
              <li><Link to="/cabang-cilacap" className="hover:text-teal-300 transition-colors">Cabang Cilacap</Link></li>
              <li><Link to="/cabang-purwokerto" className="hover:text-teal-300 transition-colors">Cabang Purwokerto</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Layanan</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onOpenBooking('behel')} className="hover:text-teal-300 text-left">Behel Gigi</button></li>
              <li><button onClick={() => onOpenBooking('veneer')} className="hover:text-teal-300 text-left">Veneer Gigi</button></li>
              <li><button onClick={() => onOpenBooking('bleaching')} className="hover:text-teal-300 text-left">Bleaching Gigi</button></li>
              <li><button onClick={() => onOpenBooking('implant')} className="hover:text-teal-300 text-left">Implant &amp; Crown</button></li>
              <li><button onClick={() => onOpenBooking('anak')} className="hover:text-teal-300 text-left">Perawatan Gigi Anak</button></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kontak</h4>
            
            <p className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{clinicData.phone}</span>
            </p>
            <div className="space-y-1.5 pt-1 border-t border-slate-800/80 ">
              <a 
                href={clinicData.socials?.instagram?.url || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[2] shrink-0" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram: {clinicData.socials?.instagram?.handle}</span>
              </a>
              <a 
                href={clinicData.socials?.tiktok?.url || "https://tiktok.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.89 2.892 2.895 2.895 0 0 1-2.892-2.892 2.896 2.896 0 0 1 2.892-2.89 2.84 2.84 0 0 1 .867.135V9.412a6.32 6.32 0 0 0-.867-.061A6.335 6.335 0 0 0 3.33 15.682a6.335 6.335 0 0 0 6.336 6.337 6.335 6.335 0 0 0 6.336-6.337V8.829a8.21 8.21 0 0 0 4.814 1.543V6.927a4.83 4.83 0 0 1-1.227-.241z"/>
                </svg>
                <span>TikTok: {clinicData.socials?.tiktok?.handle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Upscale Dental Care Specialist. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Didesain untuk kesehatan senyuman</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
