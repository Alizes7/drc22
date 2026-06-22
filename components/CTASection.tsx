"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Chamada para ação">
      <GoldenBackground variant="intense" showOrbs={true} showLines={true} showGrid={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative border border-brass/20 px-6 sm:px-14 py-14 sm:py-16 text-center"
        >
          <div className="absolute -top-px -left-px w-10 h-10 border-t border-l border-brass/50" aria-hidden="true" />
          <div className="absolute -top-px -right-px w-10 h-10 border-t border-r border-brass/50" aria-hidden="true" />
          <div className="absolute -bottom-px -left-px w-10 h-10 border-b border-l border-brass/50" aria-hidden="true" />
          <div className="absolute -bottom-px -right-px w-10 h-10 border-b border-r border-brass/50" aria-hidden="true" />

          <span className="folio-mark text-[11px] text-brass/50 block mb-5">fls. 08</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parchment mb-6 font-serif leading-[1.05]">
            Pronto para <span className="text-brass-gradient font-medium">Proteger</span> Seu Negócio?
          </h2>
          <p className="text-lg text-parchment-muted mb-10 max-w-2xl mx-auto">
            Agende sua consulta jurídica hoje mesmo e descubra como nossa advocacia pode fazer a
            diferença em sua empresa.
          </p>
          <motion.a
            href="https://wa.me/5511912252450"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-brass text-ink font-medium tracking-wider hover:bg-brass-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm relative overflow-hidden"
            aria-label="Fale conosco pelo WhatsApp"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">FALE CONOSCO NO WHATSAPP</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
