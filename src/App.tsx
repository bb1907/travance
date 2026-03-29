/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Play, 
  TrendingUp, 
  CircleDollarSign, 
  MessageSquare, 
  Zap, 
  Star, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Bot,
  Megaphone,
  Users,
  Plane,
  Sparkles,
  Twitter,
  Linkedin,
  X,
  Terminal,
  Code2,
  Activity
} from "lucide-react";
import { translations, Language } from "./translations";

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => (
  <div className="group flex items-center gap-2.5 cursor-pointer">
    <div className={`relative ${size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10"} flex items-center justify-center`}>
      <div className="absolute inset-0 bg-blue-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-10"></div>
      <div className={`relative ${size === "sm" ? "w-7 h-7" : size === "lg" ? "w-11 h-11" : "w-9 h-9"} bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <Plane className={`${size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"} text-white -rotate-45`} />
        <div className="absolute -top-1 -right-1">
          <div className="relative">
            <Sparkles className="text-blue-300 w-3 h-3 animate-pulse" />
            <div className="absolute inset-0 bg-blue-400 blur-sm opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <span className={`${size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"} font-bold tracking-tight text-slate-900`}>
      Travance<span className="text-blue-600">.ai</span>
    </span>
  </div>
);

const Navbar = ({ lang, setLang, t, onRequestDemo, onLogin }: { lang: Language, setLang: (l: Language) => void, t: any, onRequestDemo: () => void, onLogin: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t.nav.features}</a>
        <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t.nav.pricing}</a>
        <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t.nav.about}</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
          <button 
            onClick={() => setLang("tr")}
            className={`hover:text-blue-600 transition-colors ${lang === "tr" ? "text-blue-600" : ""}`}
          >
            TR
          </button>
          <span className="text-slate-200 font-light">|</span>
          <button 
            onClick={() => setLang("en")}
            className={`hover:text-blue-600 transition-colors ${lang === "en" ? "text-blue-600" : ""}`}
          >
            EN
          </button>
        </div>
        <button 
          onClick={onLogin}
          className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          {t.nav.login}
        </button>
        <button 
          onClick={onRequestDemo}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          {t.nav.getStarted}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ t, onWatchDemo, onRequestDemo, lang }: { t: any, onWatchDemo: () => void, onRequestDemo: () => void, lang: Language }) => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            {t.hero.title.split(lang === 'tr' ? 'Turizm işletmenizi' : 'tourism business').map((part: string, i: number) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="text-blue-600">{lang === 'tr' ? 'Turizm işletmenizi' : 'tourism business'}</span>}
              </span>
            ))}
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={onRequestDemo}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              {t.hero.ctaPrimary}
            </button>
            <button 
              onClick={onWatchDemo}
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              {t.hero.ctaSecondary}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBPycPUsdNe4dB0npcBniiDZ7IRbY8zEzS-uk1pGu404Ajvpn5lPc0bFL3_vyKUUIcnUtuJHFIlrjFynieH7eysyOnKhAZN7wMKXg8IJPniTDrrCPTJ2sRyf66x-DpalwK3CGsZhjfZW_Ugna4O2cLTnuPNSH9uvqOx0im4mH_l0s1Eo0j2dMjPzWw1I7CP--UPOUedQPBxkwE9ZAvcxwI1zLfYAD5mti0YJEs3xjvlnSVDwR8JfXV1BahmBzFvoU2BZAOoE1Ew-aL5",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAa6Z_RrQppnUBLrVuP-5LEkSa-qD7XoHZfbQaoAMzJ8WgRIrp8pM5BeEr8PjAvjVowvbt9HqvJkbPTYU3c1935vYBTLTfHJJcOW_32jLTBaydU7jiKsysbk6TTMebTPxK2SOiZ4qn-q8gCGjJDe-TtmnKGtTh-Zd1HDOmmPfC4ZcEJOOtJ2Vqapp0TBePY5rA-GRtmN6M7tNK5RuUpQT8tYBbJiLm-Vl8fFPiLKJBXIjElJgskVBn68W1DMPHzGlW8ldTHEOd231D8",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDiz-Z527BESh5hAhONWz4-KopCVuMSXR0jDak2z86ExyZEUeV9iNsszuuSBvsmD9vyIquf7BosgNkvc0NRPMey9BV0gJi5amZIjt0iZvDxqxAafzGHVXyzcEtC6_KCqVB6lMVELVZS4gbdU7ggS6rRJTdOelObNKJb3qFPMolGgjjX41XCh__EtAyZTet_ojcV1Z-nyHSAPncuEyx67zdu3wye54F6PRcwJPLLW6SpGRKEvWLyfR3z_nM20D7OcW5lTB4uKIfG3Xqg"
              ].map((url, i) => (
                <img 
                  key={i}
                  src={url} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">{t.hero.trust}</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -z-10 transform translate-x-10 translate-y-10"></div>
          <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
            <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-slate-100">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTFQ37zvLV6Gb8kndtd1f7ll0DsEl55r3iFvKe9oyTvcUy3nPyEOB0wlbMR9_QByDDXP2jbGnpHF8T-IffkWvSZafYIF47EaqYOfoIx3buRDTCiiElCS-Ax26qXp_SCMDkilW9egkxmuv3C6e2DgR4tFHrhzs6-kuw76bsflDuVhUiDbSuT7riXdcqduWryEwweRnq8lEKdVsbiZhGfKmW8DFObgC7R37MBZ9K2_hA_MVZPzSg0u6vQBj4DB8jL8lQqqdgGrtycRrX" 
                className="w-full h-full object-cover"
                alt="Dashboard"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={onWatchDemo}
                  className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label="Watch Demo"
                >
                  <Play className="text-white w-8 h-8 fill-current ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = ({ t }: { t: any }) => (
  <section id="features" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t.features.title}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          {t.features.subtitle}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {t.features.items.map((feature: any, i: number) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100"
          >
            <div className={`w-14 h-14 ${i === 0 ? 'bg-blue-100' : i === 1 ? 'bg-indigo-100' : 'bg-orange-100'} rounded-2xl flex items-center justify-center mb-8`}>
              {i === 0 ? <CircleDollarSign className="w-6 h-6 text-blue-600" /> : i === 1 ? <Bot className="w-6 h-6 text-indigo-600" /> : <Megaphone className="w-6 h-6 text-orange-600" />}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">{feature.desc}</p>
            <ul className="space-y-3">
              {feature.bullets.map((bullet: string, j: number) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Efficiency = ({ t }: { t: any }) => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            {t.efficiency.title}
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            {t.efficiency.subtitle}
          </p>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t.efficiency.revenueTitle}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {t.efficiency.revenueDesc}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t.efficiency.costsTitle}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {t.efficiency.costsDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-12 rounded-[3rem] relative overflow-hidden">
          <div className="bg-white p-8 rounded-3xl shadow-xl mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-slate-500">{t.efficiency.scoreLabel}</span>
              <span className="text-sm font-bold text-blue-600">+45%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-[85%] rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">{t.efficiency.savingsLabel}</span>
              <div className="text-3xl font-extrabold text-slate-900">$12k<span className="text-sm font-medium text-slate-400">{t.efficiency.perMonth}</span></div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">{t.efficiency.aiLabel}</span>
              <div className="text-3xl font-extrabold text-slate-900">68%</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-xl aspect-video overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn94D73lV244RK0mB-PeF-Qy1KEeaW0L2m77JPubQew4y80eDSdKgHN5DBjitoIjuukV6PPwng09hCXHj93ix21cFffQGqBPMDowWE_Ue7Fmy41Bp_86l5PpeO1LRXbfUYgVdKX6mhkqQC4cgcA_IilRN3ERZKCoMi_3VQgvmnetE650EFLRkKlhZ3HfIbAxvys8AczCE-mcqjPXIqkroQo1euldsf5I73WhS2-_9mjbO9yAuW1E0stQxKE5ReWnjvMYugIRNqU0ud" 
              className="w-full h-full object-cover rounded-xl"
              alt="Chart"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = ({ t }: { t: any }) => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t.testimonials.title}</h2>
          <p className="text-lg text-slate-600">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-all">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {t.testimonials.items.map((testimonial: any, i: number) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-5 h-5 text-orange-400 fill-current" />
              ))}
            </div>
            <p className="text-xl font-medium text-slate-800 mb-10 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={i === 0 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSPB3LsnBsppW0iMv643VuKPazGFo3Xzpll6piaBTImZX1gbetkmX4G3Hi0GbhMvMgeoOEpzP3Wc6KabW9dq6Q3WGtfamsBOpIkOCCs1pbbc8vz4-Bo6YmOIAQcTMrwIltx1YIuBK3DcpK1Xm9QAGDgjFkPf_0BAdSsFs5L07aRuY7QjUPlinhni1_9YGU5cgf5pV3j-AMdlknck80Bobh5c6ZR1ZOIGAmxd5hhC_ZvQxFKMxi3k3i5wIJnQXBmL4DvMN6D9DOrDl" : i === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDINLn46chM3wd-aGSZIVSyZEGvWz_t2tbUPN-xg7HHXkREhINqNd0rfaW54kLTseZWcGP-jDOUMZmsp9nKNhgy8kdQt4ttDLXU5k6N0QdcBLG1UB41anVBpeBBgzfu9WsDhPUu_0dCaMKQCY8quNKj3mJIQV8-J-Un_WOfy70SGuhnaFIB2i8qoJA8QGkJ2uKSPMW2wac2ofHzvN2aJtlgpsigaBaHlWpkphsFQ85NbhjrcKnPLSs4A6ZN4564DDA2x6u91-2mxmR8" : "https://lh3.googleusercontent.com/aida-public/AB6AXuCfr-gf6kyZqDRfjOMJJq5YukMt6Yhz6AqI3ZbxzjbAC_bMZEZpE2VtC60a95OI6sMHJMwv4YNUe5kvPG8TQ_m_lCkm-RUNJ6A0Xmh4LkKFzpzEl7lqvQINePovMPEq6cKNH0ng7psrYnY0SfWF_MNu92EQD2A5wZy_s4tjKQxdxSoi5bbMrlO5Xfgrilr-iWdqyOAIa0FGmJ_dARCoOYXTKJ1aRgPvTXnvLmKLl11gZSgYOb2u0FRBK3RJH7hk-ZX9spWpVU0JCFUV"} 
                className="w-14 h-14 rounded-full object-cover"
                alt={testimonial.name}
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EXCHANGE_RATE = 33.0;

const formatPrice = (price: number | string, lang: Language) => {
  if (typeof price === "string") return price;
  if (lang === "en") return `$${price}`;
  const tlPrice = Math.round(price * EXCHANGE_RATE);
  return `${tlPrice.toLocaleString("tr-TR")} TL`;
};

const Pricing = ({ t, lang }: { t: any, lang: Language }) => (
  <section id="pricing" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t.pricing.title}</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-lg">
          {t.pricing.subtitle}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h4 className="text-xl font-bold text-slate-900 mb-2">{t.pricing.starter.name}</h4>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-extrabold text-slate-900">{formatPrice(t.pricing.starter.price, lang)}</span>
            <span className="text-slate-400 font-medium">{t.pricing.perMonth}</span>
          </div>
          <ul className="space-y-4 mb-10">
            {t.pricing.starter.features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Check className="w-5 h-5 text-blue-600" />
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-2xl border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-all">
            {t.pricing.starter.cta}
          </button>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-blue-600 shadow-2xl relative transform scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            {t.pricing.popular}
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">{t.pricing.pro.name}</h4>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-extrabold text-slate-900">{formatPrice(t.pricing.pro.price, lang)}</span>
            <span className="text-slate-400 font-medium">{t.pricing.perMonth}</span>
          </div>
          <ul className="space-y-4 mb-10">
            {t.pricing.pro.features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Check className="w-5 h-5 text-blue-600" />
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
            {t.pricing.pro.cta}
          </button>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h4 className="text-xl font-bold text-slate-900 mb-2">{t.pricing.enterprise.name}</h4>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-extrabold text-slate-900">{formatPrice(t.pricing.enterprise.price, lang)}</span>
          </div>
          <ul className="space-y-4 mb-10">
            {t.pricing.enterprise.features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Check className="w-5 h-5 text-blue-600" />
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-2xl border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-all">
            {t.pricing.enterprise.cta}
          </button>
        </div>
      </div>
    </div>
  </section>
);

const CTA = ({ t, onWatchDemo, onRequestDemo }: { t: any, onWatchDemo: () => void, onRequestDemo: () => void }) => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3.5rem] p-12 lg:p-24 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
          {t.cta.title}
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onRequestDemo}
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
          >
            {t.cta.primary}
          </button>
          <button 
            onClick={onWatchDemo}
            className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
          >
            {t.cta.secondary}
          </button>
        </div>
        <p className="mt-10 text-blue-200 text-sm font-medium">
          {t.cta.footer}
        </p>
      </div>
    </div>
  </section>
);

const Footer = ({ t }: { t: any }) => (
  <footer className="py-20 border-t border-slate-100 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <Logo size="sm" />
          <p className="text-sm text-slate-500 mt-6 leading-relaxed max-w-xs">
            {t.hero.subtitle}
          </p>
        </div>
        {t.footer.columns.map((column: any, i: number) => (
          <div key={i}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{column.title}</h4>
            <ul className="space-y-4">
              {column.links.map((link: any, j: number) => (
                <li key={j}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500">{t.footer.rights}</p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const DemoModal = ({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: any }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % t.demo.steps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, t.demo.steps.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[2.5rem] w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-[650px]"
          >
            {/* Left Side: Visual Flow Diagram */}
            <div className="flex-1 p-6 md:p-10 bg-slate-50 relative overflow-hidden flex flex-col">
              <div className="relative z-10 mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.demo.title}</h2>
                <p className="text-slate-500 font-medium">{t.demo.subtitle}</p>
              </div>

              <div className="flex-1 relative flex flex-col justify-between py-4">
                {/* Connecting Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Vertical Path */}
                  <path 
                    d="M 40 40 L 40 460" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="4 4"
                    className="opacity-20"
                  />

                  {/* Animated Light Pulse */}
                  <motion.circle
                    r="4"
                    fill="#3b82f6"
                    filter="url(#glow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ 
                      offsetDistance: "100%",
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    style={{ 
                      offsetPath: "path('M 40 40 L 40 460')",
                      offsetRotate: "auto"
                    }}
                  />
                </svg>

                {t.demo.steps.map((step: any, i: number) => (
                  <motion.div
                    key={i}
                    className="relative z-10 flex items-center gap-6 group"
                    animate={{ 
                      opacity: activeStep === i ? 1 : 0.5,
                      x: activeStep === i ? 10 : 0
                    }}
                  >
                    {/* Node Icon */}
                    <div className="relative">
                      <motion.div 
                        animate={{ 
                          scale: activeStep === i ? [1, 1.2, 1] : 1,
                          boxShadow: activeStep === i ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none"
                        }}
                        transition={{ repeat: activeStep === i ? Infinity : 0, duration: 2 }}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          activeStep === i ? "bg-blue-600 text-white" : "bg-white border-2 border-slate-200 text-slate-400"
                        }`}
                      >
                        {i === 0 && <Zap className="w-6 h-6" />}
                        {i === 1 && <Bot className="w-6 h-6" />}
                        {i === 2 && <CircleDollarSign className="w-6 h-6" />}
                        {i === 3 && <Megaphone className="w-6 h-6" />}
                      </motion.div>
                      
                      {/* Light Effect at the tip */}
                      {activeStep === i && (
                        <motion.div 
                          layoutId="activeGlow"
                          className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full blur-sm"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 p-5 rounded-[1.5rem] border-2 transition-all duration-500 ${
                      activeStep === i 
                        ? "bg-white border-blue-100 shadow-xl shadow-blue-50" 
                        : "bg-transparent border-transparent"
                    }`}>
                      <h3 className={`font-black text-lg mb-1 transition-colors ${activeStep === i ? "text-slate-900" : "text-slate-400"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${activeStep === i ? "text-slate-600" : "text-slate-400"}`}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Live API Terminal */}
            <div className="w-full md:w-[420px] bg-slate-950 p-8 flex flex-col relative">
              <div className="absolute top-8 right-8 z-20">
                <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors group">
                  <X className="w-6 h-6 text-slate-500 group-hover:text-white" />
                </button>
              </div>

              <div className="flex-1 flex flex-col mt-12 md:mt-0">
                <div className="flex items-center gap-3 text-blue-400 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Live API Stream</span>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 font-mono text-[11px] leading-relaxed text-slate-300 mb-6 border border-slate-800/50 backdrop-blur-sm flex-1 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 text-slate-600">
                    <Terminal className="w-3 h-3" />
                    <span>travance_os_v2.5</span>
                  </div>
                  
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex gap-2">
                      <span className="text-slate-600">$</span>
                      <span className="text-blue-400">POST</span>
                      <span className="text-slate-400">{t.demo.steps[activeStep].api}</span>
                    </div>
                    
                    <div className="text-slate-600">{"{"}</div>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-emerald-500">"event"</span>: 
                        <span className="text-orange-400"> "{t.demo.steps[activeStep].title.toLowerCase().replace(/ /g, '_')}"</span>,
                      </div>
                      <div>
                        <span className="text-emerald-500">"status"</span>: 
                        <span className="text-orange-400"> "active"</span>,
                      </div>
                      <div>
                        <span className="text-emerald-500">"payload"</span>: {"{"}
                        <div className="pl-4 text-slate-500 italic">
                          // {t.demo.steps[activeStep].desc}
                        </div>
                        {"}"}
                      </div>
                    </div>
                    <div className="text-slate-600">{"}"}</div>

                    <div className="pt-4 flex items-center gap-2 text-emerald-500/70">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>200 OK (14ms)</span>
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/50">
                    <div className="text-[9px] text-slate-600 font-black uppercase tracking-widest mb-1">Throughput</div>
                    <div className="text-white font-mono text-sm">1.2k req/s</div>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/50">
                    <div className="text-[9px] text-slate-600 font-black uppercase tracking-widest mb-1">Uptime</div>
                    <div className="text-emerald-500 font-mono text-sm">99.998%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LoginModal = ({ isOpen, onClose, t, onRequestDemo }: { isOpen: boolean, onClose: () => void, t: any, onRequestDemo: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login attempted with: " + email);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl relative"
          >
            <div className="p-8 flex justify-between items-center">
              <Logo size="sm" />
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="px-8 pb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.login.title}</h2>
              <p className="text-slate-500 mb-8">{t.login.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.login.email}</label>
                  <input 
                    required
                    type="email" 
                    placeholder={t.login.placeholders.email}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700">{t.login.password}</label>
                    <button type="button" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                      {t.login.forgotPassword}
                    </button>
                  </div>
                  <input 
                    required
                    type="password" 
                    placeholder={t.login.placeholders.password}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 mt-4"
                >
                  {t.login.submit}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  {t.login.noAccount}{" "}
                  <button 
                    onClick={() => {
                      onClose();
                      onRequestDemo();
                    }}
                    className="font-bold text-blue-600 hover:text-blue-700"
                  >
                    {t.login.requestDemo}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RequestFormModal = ({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: any }) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    bookingVolume: "",
    source: "",
    consent1: false,
    consent2: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    alert("Demo request sent successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-8"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">{t.requestForm.title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <p className="text-sm text-slate-600 italic leading-relaxed border-b border-slate-100 pb-6">
                {t.requestForm.disclaimer}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.firstName}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t.requestForm.placeholders.firstName}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formState.firstName}
                    onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.lastName}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t.requestForm.placeholders.lastName}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formState.lastName}
                    onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.email}</label>
                  <input 
                    required
                    type="email" 
                    placeholder={t.requestForm.placeholders.email}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.phone}</label>
                  <input 
                    required
                    type="tel" 
                    placeholder={t.requestForm.placeholders.phone}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.website}</label>
                  <input 
                    required
                    type="url" 
                    placeholder={t.requestForm.placeholders.website}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formState.website}
                    onChange={(e) => setFormState({...formState, website: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.businessType}</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    value={formState.businessType}
                    onChange={(e) => setFormState({...formState, businessType: e.target.value})}
                  >
                    <option value="">{t.requestForm.placeholders.select}</option>
                    {t.requestForm.options.businessType.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.bookingVolume}</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    value={formState.bookingVolume}
                    onChange={(e) => setFormState({...formState, bookingVolume: e.target.value})}
                  >
                    <option value="">{t.requestForm.placeholders.select}</option>
                    {t.requestForm.options.bookingVolume.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.requestForm.source}</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    value={formState.source}
                    onChange={(e) => setFormState({...formState, source: e.target.value})}
                  >
                    <option value="">{t.requestForm.placeholders.select}</option>
                    {t.requestForm.options.source.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    checked={formState.consent1}
                    onChange={(e) => setFormState({...formState, consent1: e.target.checked})}
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    {t.requestForm.consent1}
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    checked={formState.consent2}
                    onChange={(e) => setFormState({...formState, consent2: e.target.checked})}
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    {t.requestForm.consent2}
                  </span>
                </label>
              </div>

              <p className="text-xs text-slate-400">
                {t.requestForm.privacyInfo}
              </p>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                {t.requestForm.submit}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [showDemo, setShowDemo] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onRequestDemo={() => setShowRequestForm(true)} 
        onLogin={() => setShowLogin(true)}
      />
      <Hero t={t} onWatchDemo={() => setShowDemo(true)} onRequestDemo={() => setShowRequestForm(true)} lang={lang} />
      <Features t={t} />
      <Efficiency t={t} />
      <Testimonials t={t} />
      <Pricing t={t} lang={lang} />
      <CTA t={t} onWatchDemo={() => setShowDemo(true)} onRequestDemo={() => setShowRequestForm(true)} />
      <Footer t={t} />
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} t={t} />
      <RequestFormModal isOpen={showRequestForm} onClose={() => setShowRequestForm(false)} t={t} />
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        t={t} 
        onRequestDemo={() => setShowRequestForm(true)}
      />
    </div>
  );
}
