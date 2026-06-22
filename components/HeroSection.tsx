"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GoldenParticles from "./GoldenParticles";

const stats = [
  { number: "20+", label: "Anos de Experiência" },
  { number: "11", label: "Áreas Especializadas" },
  { number: "Brasil", label: "Atendimento Nacional" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Seção principal do site"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform grayscale-[35%] contrast-[1.05]"
        role="img"
        aria-label="Fachada de prédios corporativos em São Paulo"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')",
        }}
      >
        {/* duotone wash: ink shadows, brass mid-tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,10,0.55) 0%, rgba(8,8,10,0.55) 35%, rgba(8,8,10,0.92) 78%, #08080A 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-color"
          style={{ background: "linear-gradient(160deg, #6E5731 0%, #08080A 70%)" }}
        />
      </div>

      <GoldenParticles />

      {/* document-style inset frame with corner brackets, like a stamped cover sheet */}
      <div className="absolute inset-3 sm:inset-6 border border-parchment/[0.06] pointer-events-none" aria-hidden="true">
        <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-brass/40" />
        <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-brass/40" />
        <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l border-brass/40" />
        <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-brass/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20 pt-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="folio-mark text-[11px] text-brass/60">fls. 01</span>
              <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
              <span className="text-brass text-[11px] tracking-[0.32em] uppercase">Dossiê Institucional</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-parchment font-serif tracking-[0.08em] mb-2"
            >
              DRC <span className="text-brass-gradient font-medium">ADVOGADOS</span>
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-parchment leading-[1.04] mb-8 font-serif max-w-3xl"
            >
              Especializados em{" "}
              <span className="text-brass-gradient font-medium italic">Direito Empresarial</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-parchment-muted max-w-xl mb-10 leading-relaxed"
            >
              Parceria estratégica com excelência jurídica e resultados assertivos. Soluções
              preventivas, consultivas e contenciosas de alto padrão para empresas nacionais e
              internacionais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="https://wa.me/5511912252450"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-4 bg-brass text-ink font-medium tracking-wider text-sm hover:bg-brass-light transition-all duration-300 w-full sm:w-auto justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm relative overflow-hidden"
                aria-label="Agende sua consulta pelo WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">AGENDE SUA CONSULTA</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#areas"
                className="inline-flex items-center gap-3 px-7 sm:px-8 py-4 border border-parchment/15 text-parchment tracking-wider text-sm hover:border-brass hover:text-brass transition-all duration-300 w-full sm:w-auto justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
                aria-label="Conheça nossas áreas de atuação"
              >
                CONHEÇA NOSSAS ÁREAS
              </a>
            </motion.div>
          </div>

          {/* dossier index card — stats laid out like fields on a case-file cover sheet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:w-64 border border-parchment/10 bg-ink/40 backdrop-blur-sm divide-y divide-parchment/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <div className="text-2xl sm:text-3xl font-light text-brass font-serif mb-1">{stat.number}</div>
                <div className="folio-mark text-[10px] text-parchment-faint tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
