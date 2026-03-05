/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  CircleDollarSign, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Briefcase
} from 'lucide-react';

const LogoMark = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* L shape */}
    <path d="M15 15V85H55V70H30V15H15Z" fill="currentColor" />
    {/* K diagonal top */}
    <path d="M30 50L75 15V30L45 55L30 50Z" fill="currentColor" />
    {/* K diagonal bottom */}
    <path d="M30 55L75 85V70L45 50L30 55Z" fill="currentColor" />
    {/* Stylized white lines on K */}
    <path d="M40 42L75 15V20L45 45L40 42Z" fill="white" fillOpacity="0.6" />
    <path d="M40 65L75 85V80L45 62L40 65Z" fill="white" fillOpacity="0.6" />
  </svg>
);

const FullLogo = ({ light = false, scale = 1 }: { light?: boolean, scale?: number }) => (
  <div className="flex items-center gap-3" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
    <div className={light ? 'text-blue-400' : 'text-blue-900'}>
      <LogoMark className="w-12 h-12" />
    </div>
    <div className="flex flex-col">
      <span className={`text-2xl font-black tracking-tighter leading-none ${light ? 'text-white' : 'text-slate-900'}`}>
        LE KHUONG
      </span>
      <div className="flex items-center gap-2 mt-1">
        <div className={`h-[2px] w-4 ${light ? 'bg-blue-500/50' : 'bg-blue-900/30'}`}></div>
        <span className={`text-[10px] font-black tracking-[0.3em] leading-none ${light ? 'text-blue-400' : 'text-blue-900'}`}>
          DEPOT
        </span>
        <div className={`h-[2px] w-4 ${light ? 'bg-blue-500/50' : 'bg-blue-900/30'}`}></div>
      </div>
    </div>
  </div>
);

export default function App() {
  const phoneNumber = "0906895793";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <FullLogo scale={0.8} />
              <div className="hidden lg:block h-8 w-[1px] bg-slate-200 mx-2"></div>
              <div className="hidden sm:block">
                <span className="font-bold text-slate-900 block leading-tight text-sm">SAS & LONG BÌNH</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Logistics Vietnam</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg shadow-blue-200"
              >
                <Phone size={18} />
                <span className="hidden sm:inline">Gọi ngay: {phoneNumber}</span>
                <span className="sm:hidden">Gọi ngay</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              <Briefcase size={14} />
              <span>Đang tuyển dụng trực tiếp</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Tuyển Dụng Tài Xế <span className="text-blue-500">Container</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Gia nhập đội ngũ SAS Logistics Vietnam & Long Bình Logistics. 
              Tuyến cố định Cát Lái - Long Bình, Đồng Nai. Thu nhập ổn định, chế độ đầy đủ.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="text-blue-400 mb-2"><CircleDollarSign size={24} /></div>
                <div className="text-white font-bold text-lg">25 - 35 Triệu</div>
                <div className="text-slate-400 text-sm">Thu nhập/tháng</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="text-blue-400 mb-2"><Truck size={24} /></div>
                <div className="text-white font-bold text-lg">Bằng FC / CE</div>
                <div className="text-slate-400 text-sm">Yêu cầu bằng lái</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="text-blue-400 mb-2"><Clock size={24} /></div>
                <div className="text-white font-bold text-lg">Tuyến Cố Định</div>
                <div className="text-slate-400 text-sm">Cát Lái - Long Bình</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(`tel:${phoneNumber}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20"
              >
                Ứng tuyển ngay <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 text-slate-400">
                <Phone size={20} />
                <span className="font-mono text-lg">{phoneNumber}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Job Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Job Description */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Info size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Mô tả công việc</h2>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Điều khiển xe đầu kéo rơ móoc có mọt",
                    "Vận chuyển hàng hóa tuyến cảng – về cty lấy hàng đưa đi cảng tiếp (tuyến cố định khu vực Cát Lái tới Long Bình, Đồng Nai)",
                    "Thực hiện theo điều động điều độ của công ty",
                    "Đảm bảo: An toàn – Đúng tiến độ – Đúng quy trình vận hành"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Income & Benefits */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <CircleDollarSign size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Thu nhập & Chế độ</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Tổng thu nhập
                  </h3>
                  <div className="text-3xl font-black text-blue-600 mb-2">25 – 35 Triệu</div>
                  <p className="text-sm text-slate-500 mb-6">Trung bình hàng tháng</p>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-slate-600">
                      <span>Lương cơ bản:</span>
                      <span className="font-bold">7.000.000đ</span>
                    </li>
                    <li className="flex justify-between text-slate-600">
                      <span>Lương khoán:</span>
                      <span className="font-bold">Theo chuyến</span>
                    </li>
                    <li className="text-slate-500 text-sm italic mt-4">
                      * Minh bạch, rõ ràng, theo năng suất thực tế. Đảm bảo có hàng chạy thường xuyên.
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-slate-200">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Phúc lợi đầy đủ
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "HĐLĐ + BHXH, BHYT, BHTN đầy đủ",
                      "Thưởng Lễ, Tết hàng năm",
                      "Lương tháng 13",
                      "Môi trường làm việc chuyên nghiệp"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center">
                        <ShieldCheck className="text-blue-400" size={18} />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Địa điểm làm việc</h2>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <span className="font-bold text-slate-900">Bãi xe phụ:</span> kế bên cty depot Nam Hòa 2, Khu phố Hiệp Thắng, Bình Thắng, Dĩ An, Bình Dương (cũ).
              </p>
              <div className="w-full h-48 bg-slate-100 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold">
                    <MapPin size={16} className="text-red-500" />
                    Khu phố Hiệp Thắng
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
              <h2 className="text-xl font-bold mb-6">Liên hệ ứng tuyển</h2>
              <div className="space-y-6">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="block bg-white text-blue-600 p-4 rounded-2xl text-center font-black text-2xl hover:scale-105 transition-transform"
                >
                  {phoneNumber}
                </a>
                <p className="text-blue-100 text-center text-sm">
                  Hoặc nhắn tin (Inbox) trực tiếp để được tư vấn.
                </p>
                <div className="pt-6 border-t border-blue-500/30">
                  <p className="text-xs text-blue-200 italic leading-relaxed">
                    "Các anh em đã ổn định công việc xin đừng nói lời cay đắng. Chúng tôi có thiện chí tuyển dụng, xin thông cảm và lượng thứ."
                  </p>
                </div>
              </div>
            </div>

            {/* Company Logo/Branding */}
            <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6">
                <FullLogo scale={1.2} />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Đối tác vận tải tin cậy</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <FullLogo light scale={1} />
            <div className="h-[1px] w-24 bg-slate-800"></div>
            <div className="text-center">
              <span className="text-white font-bold block text-lg">SAS & LONG BÌNH Logistics</span>
              <span className="text-slate-500 text-xs uppercase tracking-widest">Vietnam Transportation Network</span>
            </div>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} SAS Logistics Vietnam & Long Bình Logistics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
