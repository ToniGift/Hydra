"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Animated count-up number ───────────────────────────────────────────── */
function CountUp({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = duration * 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Scroll fade-in wrapper ─────────────────────────────────────────────── */
function FadeInSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Pipeline SVG diagram ────────────────────────────────────────────────── */
function PipelineDiagram() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 440 390"
        fill="none"
        className="w-full max-w-[620px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1B4FD8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1B4FD8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="clientLine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8A020" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1B4FD8" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="clientLine2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8A020" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1B4FD8" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="clientLine3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1B4FD8" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Centre glow */}
        <circle cx="220" cy="195" r="90" fill="url(#centerGlow)" />

        {/* ── Nigeria node ── */}
        <circle cx="68" cy="115" r="32" stroke="#E8A020" strokeWidth="1.5" fill="none" opacity="0.8" />
        <circle cx="68" cy="115" r="22" fill="#E8A020" fillOpacity="0.08" />
        <text x="68" y="109" textAnchor="middle" fontSize="14" fontFamily="system-ui">🇳🇬</text>
        <text x="68" y="122" textAnchor="middle" fill="#E8A020" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing="1">NIGERIA</text>

        {/* ── West Africa node ── */}
        <circle cx="58" cy="198" r="28" stroke="#E8A020" strokeWidth="1.5" fill="none" opacity="0.55" />
        <circle cx="58" cy="198" r="19" fill="#E8A020" fillOpacity="0.06" />
        <text x="58" y="193" textAnchor="middle" fontSize="12" fontFamily="system-ui">🌍</text>
        <text x="58" y="205" textAnchor="middle" fill="#E8A020" fontSize="6.5" fontFamily="system-ui" fontWeight="700" letterSpacing="0.5">W. AFRICA</text>

        {/* ── Europe node ── */}
        <circle cx="72" cy="278" r="30" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="72" cy="278" r="20" fill="#94A3B8" fillOpacity="0.06" />
        <text x="72" y="273" textAnchor="middle" fontSize="13" fontFamily="system-ui">🇪🇺</text>
        <text x="72" y="285" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing="1">EUROPE</text>

        {/* ── Connection lines: clients → Hydra ── */}
        <path d="M100 125 Q155 160 178 185" stroke="url(#clientLine1)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.7" />
        <path d="M86 198 L178 198" stroke="url(#clientLine2)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
        <path d="M100 270 Q155 235 178 210" stroke="url(#clientLine3)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />

        {/* ── Hydra central node ── */}
        <circle cx="220" cy="196" r="52" stroke="#1B4FD8" strokeWidth="2" fill="#1B4FD8" fillOpacity="0.18" />
        <circle cx="220" cy="196" r="42" stroke="#1B4FD8" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.35">
          <animateTransform attributeName="transform" type="rotate" values="0 220 196;360 220 196" dur="18s" repeatCount="indefinite" />
        </circle>
        <text x="220" y="189" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui" fontWeight="800" letterSpacing="1">HYDRA</text>
        <text x="220" y="204" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="system-ui" letterSpacing="2">AGENCY</text>

        {/* ── Output line: Hydra → Manufacturer ── */}
        <path d="M272 196 L348 196" stroke="#1B4FD8" strokeWidth="2.5" strokeDasharray="7 4" opacity="0.85">
          <animate attributeName="stroke-dashoffset" values="11;0" dur="0.8s" repeatCount="indefinite" />
        </path>
        <polygon points="348,191 360,196 348,201" fill="#1B4FD8" opacity="0.85" />

        {/* ── Manufacturer node ── */}
        <circle cx="395" cy="196" r="38" stroke="#1B4FD8" strokeWidth="2" fill="#1B4FD8" fillOpacity="0.22" />
        <text x="395" y="188" textAnchor="middle" fill="white" fontSize="9" fontFamily="system-ui" fontWeight="800" letterSpacing="0.5">MANU-</text>
        <text x="395" y="200" textAnchor="middle" fill="white" fontSize="9" fontFamily="system-ui" fontWeight="800" letterSpacing="0.5">FACTURER</text>
        <text x="395" y="212" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="system-ui" letterSpacing="1">DIRECT</text>

        {/* ISO badge below manufacturer */}
        <rect x="356" y="240" width="78" height="18" rx="9" fill="#1B4FD8" fillOpacity="0.25" stroke="#1B4FD8" strokeWidth="1" opacity="0.8" />
        <text x="395" y="253" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing="1">ISO CERTIFIED</text>

        {/* ── Animated flow dots: Nigeria → Hydra ── */}
        <circle r="3.5" fill="#E8A020" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite" path="M100 125 Q155 160 178 185" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill="#E8A020" opacity="0.9">
          <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M100 125 Q155 160 178 185" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* ── Animated flow dot: W. Africa → Hydra ── */}
        <circle r="2.5" fill="#E8A020" opacity="0.7">
          <animateMotion dur="2.8s" begin="0.5s" repeatCount="indefinite" path="M86 198 L178 198" />
          <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.8s" begin="0.5s" repeatCount="indefinite" />
        </circle>

        {/* ── Animated flow dot: Europe → Hydra ── */}
        <circle r="2.5" fill="#94A3B8" opacity="0.6">
          <animateMotion dur="3.2s" begin="1.2s" repeatCount="indefinite" path="M100 270 Q155 235 178 210" />
          <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3.2s" begin="1.2s" repeatCount="indefinite" />
        </circle>

        {/* ── Animated flow dots: Hydra → Manufacturer ── */}
        <circle r="4" fill="#1B4FD8" opacity="0.95">
          <animateMotion dur="1.4s" repeatCount="indefinite" path="M272 196 L348 196" />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#1B4FD8" opacity="0.95">
          <animateMotion dur="1.4s" begin="0.7s" repeatCount="indefinite" path="M272 196 L348 196" />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.4s" begin="0.7s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* ─── Main HomePage ──────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-hydra-navy flex items-center">
        {/* Background image — construction site with blueprints */}
        <Image
          src="/hero-bg.png"
          alt="Construction site with blueprints and cranes at sunset"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        {/* Left-to-right gradient: opaque navy on text side, open on diagram side */}
        <div className="absolute inset-0 bg-gradient-to-r from-hydra-navy via-hydra-navy/88 to-hydra-navy/35 pointer-events-none" />
        {/* Bottom fade: seamless transition into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-hydra-navy/25 via-transparent to-hydra-navy pointer-events-none" />
        {/* Subtle blue tone-match so image reads as part of the brand palette */}
        <div className="absolute inset-0 bg-hydra-blue/8 pointer-events-none" />
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-navy opacity-30" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-hydra-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-hydra-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hydra-gold/35 bg-hydra-gold/10 text-hydra-gold text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold animate-pulse-dot" />
              Client-to-Manufacturer · Nigeria &amp; Europe
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-xl sm:text-2xl font-bold text-white/90 tracking-wide mb-5"
            >
              RC: 1234567 · CAC Nigeria
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] mb-6"
            >
              Connecting Clients
              <br />
              to{" "}
              <span className="text-gradient-gold">Manufacturers</span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-9"
            >
              Hydra Forge is Nigeria&apos;s authorised agency bridging construction firms, developers, and
              contractors directly to pre-insulated pipe manufacturers — cutting procurement costs
              and guaranteeing ISO-certified, factory-direct supply across West Africa and Europe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-hydra-blue/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-hydra-gold/40 text-hydra-gold hover:bg-hydra-gold/10 font-semibold text-sm transition-all duration-200"
              >
                View Products
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-8 mt-10 pt-8 border-t border-slate-800"
            >
              {[
                { value: "40+", label: "Years Expertise" },
                { value: "24h", label: "Quote Turnaround" },
                { value: "100%", label: "ISO Certified" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-xl font-bold text-hydra-gold">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Pipeline diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden md:flex items-center justify-center w-full"
          >
            <PipelineDiagram />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-[10px] uppercase tracking-[3px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-slate-600" />
          </motion.div>
        </div>
      </section>

      {/* ══ TRUST TICKER ════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 border-y border-slate-800 overflow-hidden">
        <div className="animate-ticker py-4">
          {[0, 1].map((idx) => (
            <span key={idx} className="inline-flex">
              {[
                "Trusted Manufacturer Network",
                "ISO Certified Products",
                "Factory-Direct Supply",
                "24h Quote Response",
                "Lagos · Nigeria Headquartered",
                "Operating Across Europe",
                "Authorised Manufacturer Partner",
                "Pre-Insulated PEX Systems",
                "16–125mm Diameter Range",
                "Geothermal Installations",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-3 px-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold flex-shrink-0" />
                  <span className="text-sm text-slate-400 font-medium whitespace-nowrap">{item}</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════════════ */}
      <section className="bg-blue-50 dark:bg-slate-950 py-20 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Split intro: text left + image right */}
          <FadeInSection className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-hydra-blue dark:text-hydra-gold mb-3">
                Our Process
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                How Hydra Works
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6">
                We remove complexity from industrial procurement — connecting your project directly
                to certified manufacturers in three straightforward steps.
              </p>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-10 h-px bg-hydra-gold flex-shrink-0" />
                No middlemen. No markup. Factory-direct every time.
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1768796371809-95b49943a48b?w=900&q=80"
                alt="Factory production line — workers assembling components at a modern manufacturing facility"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hydra-navy/80 via-hydra-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-hydra-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-hydra-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">3 steps from spec to delivery</div>
                    <div className="text-slate-400 text-xs">Response within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connecting dashes on desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(33.33%+16px)] right-[calc(33.33%+16px)] h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-700" />

            {[
              {
                step: "01",
                title: "Submit Requirements",
                desc: "Share your project specs — pipe type, diameter, quantity, destination country and deadline. Our quote form captures everything needed.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                color: "text-hydra-gold bg-hydra-gold/10 border-hydra-gold/20",
              },
              {
                step: "02",
                title: "Hydra Sources",
                desc: "We match your requirements to our certified manufacturer network and negotiate factory-direct pricing on your behalf.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                color: "text-hydra-blue bg-hydra-blue/10 border-hydra-blue/20",
              },
              {
                step: "03",
                title: "Factory-Direct Delivery",
                desc: "Your order ships from the manufacturer's facility with full ISO documentation, technical support, and Hydra Forge handling every step of coordination.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800",
              },
            ].map((item, i) => (
              <FadeInSection key={item.step} delay={i * 0.15}>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-7 hover:border-hydra-blue dark:hover:border-hydra-blue transition-colors group h-full">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${item.color} transition-transform group-hover:scale-110 duration-200`}>
                    {item.icon}
                  </div>
                  <div className="font-display text-xs font-bold tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4} className="text-center mt-10">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              Start with a Quote →
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════════════ */}
      <section className="bg-hydra-navy py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-hydra-blue/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-hydra-gold mb-3 block">
              By the Numbers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Proven Track Record
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { target: 40, suffix: "+", label: "Years of Industry Expertise", sublabel: "Manufacturer network" },
              { target: 125, suffix: "mm", label: "Maximum Pipe Diameter", sublabel: "16–125mm full range" },
              { target: 10, suffix: "+", label: "Clients Connected", sublabel: "Nigeria & Europe" },
              { target: 24, suffix: "h", label: "Quote Turnaround", sublabel: "Guaranteed response time" },
            ].map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="bg-white/5 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center hover:border-hydra-blue/50 transition-colors group">
                  <div className="font-display text-4xl sm:text-5xl font-bold text-hydra-gold mb-2 group-hover:scale-105 transition-transform origin-bottom duration-200">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="font-medium text-white text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-600">{stat.sublabel}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS PREVIEW ════════════════════════════════════════════════ */}
      <section className="bg-blue-50 dark:bg-slate-900 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-hydra-blue dark:text-hydra-gold mb-3 block">
                Product Range
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                ISO-Certified Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-hydra-blue dark:text-hydra-gold hover:underline flex items-center gap-1 flex-shrink-0"
            >
              View all products →
            </Link>
          </FadeInSection>

          {/* Feature banner image */}
          <FadeInSection className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src="/img-8.jpeg"
              alt="Hydra Agency — pre-insulated pipe systems factory"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hydra-navy/90 via-hydra-navy/55 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 max-w-xl">
                <div className="inline-flex items-center gap-2 text-hydra-gold text-xs font-bold uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold" />
                  ISO Certified
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  Direct from the factory floor
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every product sourced from our certified manufacturing facilities —
                  ISO tested, documented, and ready to ship to Nigeria or Europe.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Pre-insulated PEX Pipelines",
                specs: ["16–125mm", "Up to 100m coils", "95°C / 6 bar"],
                image: "/product-pex.png",
                desc: "Single, double and multi-pipe systems for heating, DHW and water supply networks.",
                accent: "border-t-hydra-blue",
              },
              {
                title: "Geothermal Pipes",
                specs: ["Ground source", "Heat pumps", "Flexible loops"],
                image: "/product-geothermal.png",
                desc: "High-efficiency pipes for horizontal and vertical geothermal heat pump installations.",
                accent: "border-t-hydra-blue",
              },
              {
                title: "Brass Fittings",
                specs: ["All sizes", "Corrosion resistant", "PEX compatible"],
                image: "/product-connector.png",
                desc: "Premium brass fittings designed for secure connection to pre-insulated pipe systems.",
                accent: "border-t-hydra-blue",
              },
            ].map((product, i) => (
              <FadeInSection key={product.title} delay={i * 0.1}>
                <div className={`bg-white dark:bg-slate-800 rounded-2xl border-t-4 border border-slate-200 dark:border-slate-700 ${product.accent} h-full hover:-translate-y-1.5 hover:shadow-xl hover:border-hydra-blue/40 transition-all duration-300 group cursor-pointer`}>
                  <div className="p-5">
                    {/* Product icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 overflow-hidden relative flex-shrink-0 group-hover:bg-hydra-blue/10 group-hover:border-hydra-blue/20 group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-2"
                        sizes="56px"
                      />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-2 group-hover:text-hydra-blue transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs bg-blue-50 text-hydra-blue px-2.5 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4} className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              View More Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ══ MARKETS ══════════════════════════════════════════════════════════ */}
      <section className="bg-hydra-navy py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-hydra-gold mb-3 block">
              Geographic Reach
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Markets We Serve
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              From our Lagos headquarters, Hydra Forge operates a seamless supply chain connecting
              clients across Nigeria, Africa, Europe and Asia to factory-direct manufacturer pricing.
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                iconBg: "bg-hydra-blue",
                region: "Nigeria",
                badge: "Home Market",
                badgeColor: "bg-hydra-blue/20 text-blue-300 border-hydra-blue/30",
                borderColor: "border-hydra-blue/40",
                accentLine: "bg-hydra-blue",
                points: [
                  "Lagos — Primary operations hub",
                  "Abuja — Government & commercial",
                  "Port Harcourt — Industrial sector",
                  "Direct contractor relationships",
                ],
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
                iconBg: "bg-hydra-blue",
                region: "Africa",
                badge: "Growing Region",
                badgeColor: "bg-hydra-blue/20 text-blue-300 border-hydra-blue/30",
                borderColor: "border-hydra-blue/30",
                accentLine: "bg-hydra-blue",
                points: [
                  "Ghana — Residential development",
                  "Senegal — Infrastructure projects",
                  "Côte d'Ivoire — Commercial builds",
                  "Cross-border logistics managed",
                ],
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                iconBg: "bg-hydra-blue",
                region: "Europe",
                badge: "Established Network",
                badgeColor: "bg-hydra-blue/20 text-blue-300 border-hydra-blue/30",
                borderColor: "border-hydra-blue/30",
                accentLine: "bg-hydra-blue",
                points: [
                  "Poland, Germany, Czech Republic",
                  "Romania, Latvia, Estonia",
                  "UK — Commercial & residential",
                  "ISO documentation provided",
                ],
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
                iconBg: "bg-hydra-blue",
                region: "Asia",
                badge: "Emerging Market",
                badgeColor: "bg-hydra-blue/20 text-blue-300 border-hydra-blue/30",
                borderColor: "border-hydra-blue/30",
                accentLine: "bg-hydra-blue",
                points: [
                  "India — Large-scale infrastructure",
                  "UAE — Commercial & hospitality",
                  "Southeast Asia — Development projects",
                  "Factory-direct supply chain",
                ],
              },
            ].map((market, i) => (
              <FadeInSection key={market.region} delay={i * 0.1}>
                <div className={`relative bg-white/5 rounded-2xl border ${market.borderColor} p-7 hover:bg-white/[0.08] transition-all hover:-translate-y-1 h-full overflow-hidden`}>
                  {/* Accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${market.accentLine}`} />
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${market.iconBg} flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {market.icon}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="font-display text-xl font-bold text-white">{market.region}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${market.badgeColor}`}>
                      {market.badge}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {market.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg className="w-3.5 h-3.5 text-hydra-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY PARTNER WITH HYDRA ═══════════════════════════════════════════ */}
      <section className="bg-blue-50 dark:bg-slate-950 py-20 sm:py-24 relative overflow-hidden">
        {/* Subtle background texture image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=60"
            alt=""
            fill
            className="object-cover opacity-[0.035] dark:opacity-[0.025]"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split intro with image */}
          <FadeInSection className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-hydra-blue dark:text-hydra-gold mb-3 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                The Hydra Advantage
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl">
                We are not a distributor. We are a strategic bridge — your direct line to the
                manufacturer, with none of the markup and all of the service.
              </p>
            </div>
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Industrial pipe systems and engineering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-hydra-navy/80 via-hydra-navy/40 to-hydra-blue/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex flex-wrap gap-3">
                  {["ISO 15875", "EN 15632", "Factory Certified"].map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-bold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Factory-Direct Pricing",
                desc: "No distributor markup. We connect you straight to our certified manufacturer network — ensuring the best possible factory-direct price.",
                color: "text-hydra-gold bg-hydra-gold/10",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "ISO-Certified Quality",
                desc: "Every product in our network carries full ISO certification and manufacturer-backed technical documentation — no compromises on quality.",
                color: "text-hydra-blue bg-hydra-blue/10",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Cross-Continental Reach",
                desc: "Lagos-headquartered with active operations across West Africa and Europe. One agency, two continents, seamless logistics.",
                color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "24-Hour Response",
                desc: "Submit your quote request today and receive a detailed pricing proposal within 24 hours — tailored to your exact specifications.",
                color: "text-violet-600 bg-violet-50 dark:bg-violet-900/20",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Expert Technical Support",
                desc: "From spec selection to installation guidance — our team provides full technical support throughout your project lifecycle.",
                color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Full Documentation",
                desc: "CE marking, ISO certificates, technical datasheets and customs paperwork — all provided with every order, no exceptions.",
                color: "text-slate-600 bg-slate-100 dark:bg-slate-800",
              },
            ].map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-hydra-blue dark:hover:border-hydra-blue/50 hover:shadow-md transition-all duration-200 group bg-white dark:bg-slate-900 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} transition-transform group-hover:scale-110 duration-200`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═══════════════════════════════════════════════════════ */}
      <section className="bg-hydra-navy py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-40" />
        {/* Gold glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-hydra-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hydra-gold/30 bg-hydra-gold/10 text-hydra-gold text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold animate-pulse-dot" />
              Authorised Manufacturer Partner
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Source{" "}
              <span className="text-gradient-gold">Direct</span>?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Skip the middlemen. Submit your project requirements and receive a factory-direct
              quote from Hydra Forge within 24 hours — tailored to your specification, destination,
              and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-hydra-gold hover:bg-hydra-gold-light text-hydra-navy font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-hydra-gold/25 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Request a Quote Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                Contact Us First
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

    </div>
  );
}
