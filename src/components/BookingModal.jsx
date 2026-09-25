import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BookingModal({ isOpen, onClose, initialServiceId, initialDoctorId, initialPromoCode }) {
  const [formData, setFormData] = useState({
    serviceId: initialServiceId || clinicData.services[0].id,
    doctorId: initialDoctorId || clinicData.doctors[0].id,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 WIB',
    name: '',
    phone: '',
    complaint: '',
    promoCode: initialPromoCode || ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(null);

  useEffect(() => {
    if (initialServiceId) setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    if (initialDoctorId) setFormData(prev => ({ ...prev, doctorId: initialDoctorId }));
    if (initialPromoCode) setFormData(prev => ({ ...prev, promoCode: initialPromoCode }));
  }, [initialServiceId, initialDoctorId, initialPromoCode]);

  if (!isOpen) return null;

  const selectedService = clinicData.services.find(s => s.id === formData.serviceId) || clinicData.services[0];
  const selectedDoctor = clinicData.doctors.find(d => d.id === formData.doctorId) || clinicData.doctors[0];

  const timeSlots = [
    '09:30 WIB', '10:30 WIB', '13:00 WIB', '14:30 WIB',
    '16:00 WIB', '17:30 WIB', '19:00 WIB', '20:00 WIB'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingCode = `UDC-${Math.floor(100000 + Math.random() * 900000)}`;

    const reservationData = {
      bookingCode,
      ...formData,
      serviceName: selectedService.title,
      doctorName: selectedDoctor.name,
      createdAt: new Date().toLocaleString('id-ID')
    };

    const existing = JSON.parse(localStorage.getItem('upscale_bookings') || '[]');
    localStorage.setItem('upscale_bookings', JSON.stringify([reservationData, ...existing]));

    setBookingSuccess(reservationData);
  };

  const getWhatsappUrl = () => {
    if (!bookingSuccess) return '#';
    const text = `Halo Admin Upscale Dental Care Specialist Cilacap,%0A%0ASaya ingin mengonfirmasi Janji Temu Online:%0A%0A📌 *Kode Booking:* ${bookingSuccess.bookingCode}%0A👤 *Nama:* ${bookingSuccess.name}%0A📞 *No WA:* ${bookingSuccess.phone}%0A🦷 *Layanan:* ${bookingSuccess.serviceName}%0A👨‍⚕️ *Dokter Spesialis:* ${bookingSuccess.doctorName}%0A📅 *Tanggal:* ${bookingSuccess.date}%0A⏰ *Jam:* ${bookingSuccess.timeSlot}%0A` + (bookingSuccess.promoCode ? `🎁 *Promo Code:* ${bookingSuccess.promoCode}%0A` : '') + (bookingSuccess.complaint ? `📝 *Keluhan:* ${bookingSuccess.complaint}%0A` : '') + `%0AMohon konfirmasi ketersediaan jadwal. Terima kasih!`;
    return `https://wa.me/${clinicData.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setBookingSuccess(null);
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center border border-slate-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center p-0.5 shadow-md">
            <div className="w-full h-full bg-teal-600 rounded-[10px] flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Form Reservasi Dokter Gigi Online</h3>
            <p className="text-xs text-slate-500">Upscale Dental Care Specialist • Cilacap</p>
          </div>
        </div>

        {/* Success View */}
        {bookingSuccess ? (
          <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto border border-teal-300">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-extrabold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                KODE BOOKING: {bookingSuccess.bookingCode}
              </span>
              <h4 className="text-2xl font-black text-slate-900 pt-2">Reservasi Anda Terkirim!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Silakan klik tombol di bawah untuk menyambungkan detail booking langsung ke WhatsApp Admin Klinik.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Nama Pasien:</span>
                <span className="font-bold text-slate-900">{bookingSuccess.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Perawatan:</span>
                <span className="font-bold text-teal-700">{bookingSuccess.serviceName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dokter Spesialis:</span>
                <span className="font-bold text-slate-900">{bookingSuccess.doctorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Jadwal Jam:</span>
                <span className="font-bold text-amber-600">{bookingSuccess.date} ({bookingSuccess.timeSlot})</span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Detail Ke WhatsApp (Buka Chat)</span>
              </a>
              
              <button
                onClick={() => {
                  setBookingSuccess(null);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-900"
              >
                Selesai & Tutup
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Service & Doctor Select Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Pilih Perawatan:</label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                >
                  {clinicData.services.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Pilih Dokter Spesialis:</label>
                <select
                  value={formData.doctorId}
                  onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                >
                  {clinicData.doctors.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Pilih Tanggal Kunjungan:</label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Pilih Jam Sesi:</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                >
                  {timeSlots.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Patient Inputs */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Nama Lengkap Pasien:</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Nomor WhatsApp (Aktif):</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Kode Voucher / Promo (Opsional):</label>
              <input
                type="text"
                placeholder="Contoh: BEHEL-SPECIALIST"
                value={formData.promoCode}
                onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-amber-700 font-mono font-bold focus:border-teal-500 focus:outline-none uppercase"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Catatan / Keluhan Singkat (Opsional):</label>
              <textarea
                rows={2}
                placeholder="Contoh: Gigi geraham kiri sakit saat mengunyah makanan dingin..."
                value={formData.complaint}
                onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Konfirmasi Reservasi Online</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Bebas Biaya Pembatalan • Data Terenkripsi Aman</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
