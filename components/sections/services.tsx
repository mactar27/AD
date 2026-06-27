'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Code2, ShoppingCart, Smartphone, Search, Megaphone, PenTool, Cloud, Rocket, CheckCircle2, Users } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24 bg-[#fafbfd] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">{t.services.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-6">
            {t.services.title1}<br />
            {t.services.title2} <span className="text-blue-600">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-lg text-slate-500">
            {t.services.description1}<br className="hidden md:block" />
            {t.services.description2}
          </p>
        </div>

        {/* Top Row - 4 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Card 1: Sites Web (Blue Featured) */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group relative flex flex-col justify-between bg-blue-600 rounded-[28px] p-8 text-white shadow-2xl shadow-blue-600/20 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 whitespace-pre-line">{t.services.cards.web.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                {t.services.cards.web.desc}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm w-fit">
                {t.services.discover} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Mini Illustration Sites Web */}
            <div className="relative mt-10 h-40 w-[120%] -ml-[10%] bg-white rounded-t-xl shadow-2xl p-4 transform rotate-[-2deg] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="w-24 h-3 bg-slate-100 rounded-full mb-4" />
              <div className="w-full h-20 bg-slate-50 rounded-lg border border-slate-100 flex p-2 gap-2">
                 <div className="w-1/3 h-full bg-blue-50 rounded" />
                 <div className="w-2/3 h-full flex flex-col gap-2">
                    <div className="w-full h-2 bg-slate-200 rounded-full" />
                    <div className="w-2/3 h-2 bg-slate-200 rounded-full" />
                 </div>
              </div>
            </div>

            {/* Stats Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-blue-700/50 backdrop-blur-md flex items-center justify-between border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center"><Globe className="w-4 h-4" /></div>
                <div>
                  <p className="text-lg font-bold">120+</p>
                  <p className="text-[10px] text-blue-200 uppercase tracking-wider">{t.services.cards.web.projects}</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-amber-400/20 flex items-center justify-center"><StarIcon className="w-4 h-4 text-amber-400" /></div>
                <div>
                  <p className="text-lg font-bold">4.9/5</p>
                  <p className="text-[10px] text-blue-200 uppercase tracking-wider">{t.services.cards.web.satisfaction}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Web Apps */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group flex flex-col bg-white rounded-[28px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(10,86,197,0.08)] hover:border-blue-100 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 whitespace-pre-line">{t.services.cards.apps.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
              {t.services.cards.apps.desc}
            </p>
            
            {/* Mini Illustration Dashboard */}
            <div className="h-40 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-[10px] text-slate-400 font-medium mb-1">{t.services.cards.apps.dashboard}</div>
                  <div className="w-16 h-2 bg-slate-200 rounded-full" />
                </div>
                <div className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-md">+12.5%</div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-20">
                <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                  <path d="M0,40 L0,20 C10,20 15,30 25,25 C35,20 40,5 50,15 C60,25 70,10 80,15 C90,20 95,5 100,0 L100,40 Z" fill="url(#blue-gradient)" opacity="0.2" />
                  <path d="M0,20 C10,20 15,30 25,25 C35,20 40,5 50,15 C60,25 70,10 80,15 C90,20 95,5 100,0" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
              {t.services.discover} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 3: E-commerce */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group flex flex-col bg-white rounded-[28px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(16,185,129,0.08)] hover:border-emerald-100 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 whitespace-pre-line">{t.services.cards.ecommerce.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
              {t.services.cards.ecommerce.desc}
            </p>
            
            {/* Mini Illustration E-commerce */}
            <div className="h-40 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 <ShoppingCart className="w-24 h-24" />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 w-full z-10">
                <div className="w-full h-16 bg-slate-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-12 h-8 bg-slate-200 rounded-md rotate-[-15deg]" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/2 h-2 bg-slate-200 rounded-full" />
                  <div className="w-1/3 h-6 bg-slate-900 rounded-md" />
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
              {t.services.discover} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 4: Mobile Apps */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group flex flex-col bg-white rounded-[28px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(139,92,246,0.08)] hover:border-purple-100 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 whitespace-pre-line">{t.services.cards.mobile.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
              {t.services.cards.mobile.desc}
            </p>
            
            {/* Mini Illustration Mobile */}
            <div className="h-40 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 mb-6 flex justify-center group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
              <div className="w-24 h-32 bg-white rounded-t-2xl border-x border-t border-slate-200 shadow-sm mt-4 p-2 relative">
                <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto mb-3" />
                <div className="w-full h-8 bg-purple-50 rounded-lg mb-2 flex items-center px-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
                  <div className="w-1/2 h-1.5 bg-purple-200 rounded-full" />
                </div>
                <div className="w-full h-8 bg-slate-50 rounded-lg" />
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 group-hover:gap-3 transition-all">
              {t.services.discover} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Bottom Row - 4 Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 5: SEO */}
          <motion.div whileHover={{ y: -4 }} className="group bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 leading-tight whitespace-pre-line">{t.services.cards.seo.title}</h4>
            </div>
            <div className="flex items-end justify-between flex-1">
              <div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 group-hover:gap-2 transition-all">
                  {t.services.discover} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400 font-medium">{t.services.cards.seo.traffic}</div>
                <div className="text-lg font-bold text-slate-900">+310%</div>
                <svg viewBox="0 0 50 20" className="w-16 h-6 mt-1">
                  <path d="M0,15 L10,12 L20,18 L30,5 L40,8 L50,2" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Ads */}
          <motion.div whileHover={{ y: -4 }} className="group bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                <Megaphone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 leading-tight whitespace-pre-line">{t.services.cards.ads.title}</h4>
            </div>
            <div className="flex items-end justify-between flex-1">
              <div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 group-hover:gap-2 transition-all">
                  {t.services.discover} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="text-right flex items-end gap-1 h-12">
                <div className="w-2.5 h-4 bg-red-200 rounded-t-sm" />
                <div className="w-2.5 h-6 bg-red-300 rounded-t-sm" />
                <div className="w-2.5 h-8 bg-red-400 rounded-t-sm" />
                <div className="w-2.5 h-12 bg-red-500 rounded-t-sm" />
              </div>
            </div>
          </motion.div>

          {/* Card 7: UI/UX */}
          <motion.div whileHover={{ y: -4 }} className="group bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <PenTool className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 leading-tight whitespace-pre-line">{t.services.cards.design.title}</h4>
            </div>
            <div className="flex items-end justify-between flex-1">
              <div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 group-hover:gap-2 transition-all">
                  {t.services.discover} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 w-16 h-12 flex flex-col gap-1.5">
                <div className="w-full h-2 bg-slate-200 rounded-sm" />
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-amber-400 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 8: Cloud */}
          <motion.div whileHover={{ y: -4 }} className="group bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 leading-tight whitespace-pre-line">{t.services.cards.cloud.title}</h4>
            </div>
            <div className="flex items-end justify-between flex-1">
              <div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 group-hover:gap-2 transition-all">
                  {t.services.discover} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-14 h-3.5 bg-slate-100 rounded border border-slate-200 flex items-center px-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </div>
                <div className="w-14 h-3.5 bg-slate-100 rounded border border-slate-200 flex items-center px-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </div>
                <div className="w-14 h-3.5 bg-slate-100 rounded border border-slate-200 flex items-center px-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">{t.services.ctaBanner.title}</h4>
              <p className="text-sm text-slate-500">{t.services.ctaBanner.desc}</p>
            </div>
          </div>
          
          <div className="flex items-center flex-col sm:flex-row gap-6 w-full md:w-auto">
            <a href="#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
              {t.services.ctaBanner.button} <ArrowRight className="w-4 h-4" />
            </a>
            
            <div className="flex items-center gap-3">
              <div className="flex h-8 items-center justify-center rounded-full bg-blue-50 px-3 border border-blue-100">
                <Users className="size-4 text-blue-600" />
              </div>
              <div className="text-xs text-slate-500 font-medium whitespace-pre-line">
                {t.services.ctaBanner.trust}
              </div>
            </div>
          </div>
        </div>

        {/* Full List of Services (All 23 services requested by user) */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">{t.services.fullList.title}</h3>
            <p className="text-slate-500 mt-2">{t.services.fullList.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dev */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600" /> {t.services.fullList.dev}
              </h4>
              <ul className="space-y-3">
                {t.data.services.slice(0, 8).map(s => (
                  <li key={s.title} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design & Création */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-blue-600" /> {t.services.fullList.design}
              </h4>
              <ul className="space-y-3">
                {t.data.services.slice(16, 23).map(s => (
                  <li key={s.title} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketing */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-blue-600" /> {t.services.fullList.marketing}
              </h4>
              <ul className="space-y-3">
                {t.data.services.slice(9, 12).concat(t.data.services.slice(18, 21)).map(s => (
                  <li key={s.title} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure & Data */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-blue-600" /> {t.services.fullList.infra}
              </h4>
              <ul className="space-y-3">
                {t.data.services.slice(8, 9).concat(t.data.services.slice(12, 16)).map(s => (
                  <li key={s.title} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function StarIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}
