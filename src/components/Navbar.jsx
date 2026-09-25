import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Calendar, Clock, Menu, X, Sparkles, ChevronDown, ChevronRight, HelpCircle, Info } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onOpenBooking, onOpenQuiz }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainNavLinks = [
    { name: 'Layanan & Spesialis', path: '/services' },
    { name: 'Dokter Spesialis', path: '/doctors' },
    { name: 'Before & After', path: '/gallery' },
    { name: 'Promo', path: '/promos' },
  ];

  return (
    <>
      {/* Top Bar Info */}
      <div className="bg-slate-100 text-slate-700 text-xs py-2 px-4 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              Jl. DI Panjaitan No.23, Donan, Cilacap Tengah
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              Senin - Sabtu: 09.00 - 21.00 WIB
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              ★ {clinicData.googleRating} Google Rating ({clinicData.googleReviewCount}+ Ulasan)
            </span>
            <a 
              href={`tel:${clinicData.phone}`}
              className="flex items-center gap-1.5 text-teal-700 hover:text-teal-800 transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              {clinicData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-0.5 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-teal-600 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
                  UPSCALE
                </span>
                <span className="text-[10px] font-extrabold tracking-widest px-1.5 py-0.5 bg-teal-100 text-teal-800 rounded border border-teal-200 uppercase">
                  Specialist
                </span>
              </div>
              <p className="text-[11px] text-slate-500 tracking-wider uppercase font-semibold">
                Dental Care Cilacap
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Beranda */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'text-teal-700 bg-teal-50 font-bold'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-teal-50/70'
                }`
              }
            >
              Beranda
            </NavLink>

            {/* About ▾ Dropdown */}
            <div
              ref={aboutDropdownRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  aboutDropdownOpen
                    ? 'text-teal-700 bg-teal-50/80'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-teal-50/70'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>

              {/* Floating Dropdown Card */}
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 text-left">
                  <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                    Tentang Klinik
                  </div>
                  <div className="space-y-1">
                    {/* About Us Item */}
                    <Link
                      to="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-100/70 flex items-center justify-center shrink-0 border border-teal-200/60 group-hover:bg-teal-600 transition-colors">
                        <Info className="w-4 h-4 text-teal-700 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                          Tentang Klinik
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Profil, Visi Misi &amp; Standar Medis
                        </p>
                      </div>
                    </Link>

                    {/* FAQ Item */}
                    <Link
                      to="/about#faq"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-100/70 flex items-center justify-center shrink-0 border border-teal-200/60 group-hover:bg-teal-600 transition-colors">
                        <HelpCircle className="w-4 h-4 text-teal-700 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                          FAQ (Pertanyaan Umum)
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Tanya Jawab Seputar Perawatan
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Main Links */}
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-teal-700 bg-teal-50 font-bold'
                      : 'text-slate-700 hover:text-teal-700 hover:bg-teal-50/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          {/* <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow-md shadow-teal-600/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Buat Janji Online
            </button>
          </div> */}

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg shadow flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              Reservasi
            </button> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 text-left">
            
            {/* Beranda Link */}
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-teal-50 rounded-lg flex items-center justify-between"
            >
              <span>Beranda</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </NavLink>

            {/* About Dropdown Group */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider block px-1">
                About Klinik
              </span>
              <div className="space-y-1">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-3 py-2 text-xs font-bold text-slate-800 hover:bg-white rounded-xl flex items-center justify-between border border-transparent hover:border-slate-200 text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Info className="w-4 h-4 text-teal-600" />
                    <span>About Us (Tentang Kami)</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  to="/about#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold text-slate-800 hover:bg-white rounded-xl flex items-center justify-between border border-transparent hover:border-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-teal-600" />
                    <span>FAQ (Pertanyaan Umum)</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Other Links */}
            <div className="grid grid-cols-1 gap-1">
              {mainNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-teal-50 rounded-lg flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            {/* <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Buat Janji Konsultasi Online
              </button>
            </div> */}
          </div>
        )}
      </header>
    </>
  );
}
