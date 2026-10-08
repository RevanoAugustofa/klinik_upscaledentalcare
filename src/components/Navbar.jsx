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
    { name: 'Tentang', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Dokter Spesialis', path: '/doctors' },
    { name: 'Before & After', path: '/gallery' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b border-slate-200 shadow-sm py-3'
            : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Cross/Plus icon representing medical */}
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8h-2V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-7 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-8H11V6a1 1 0 0 1 2 0v2z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[15px] tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  UPSCALE
                </span>
                <span className="text-[9px] font-bold tracking-widest px-1.5 py-0.5 bg-teal-50 text-teal-700 rounded border border-teal-200 uppercase">
                  Specialist
                </span>
              </div>
              <p className="text-[10px] text-slate-500 tracking-wide font-medium">
                Dental Care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Beranda */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                }`
              }
            >
              Beranda
            </NavLink>

            {/* Other Main Links */}
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-teal-700 bg-teal-50'
                      : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${clinicData.whatsappNumber}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-200 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-5 space-y-1 text-left">
            {/* Beranda Link */}
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive ? 'text-teal-700 bg-teal-50' : 'text-slate-700 hover:bg-slate-50'
                }`
              }
            >
              Beranda
            </NavLink>

            {/* Other Links */}
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive ? 'text-teal-700 bg-teal-50' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}`}
                target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
