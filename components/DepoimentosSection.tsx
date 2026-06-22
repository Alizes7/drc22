"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

const depoimentos = [
  { texto: "A DRC Advogados se tornou um parceiro estratégico fundamental para nossa empresa. A qualidade técnica e o comprometimento com resultados superaram todas as expectativas.", autor: "Marcelo Andrade", cargo: "CEO, Grupo Andrade" },
  { texto: "Excelência jurídica combinada com atendimento personalizado. A equipe entende perfeitamente as necessidades do negócio e entrega soluções práticas e eficientes.", autor: "Patrícia Lima", cargo: "Diretora Jurídica, TechCorp Brasil" },
  { texto: "Profissionalismo impecável e resultados consistentes. Recomendo a DRC para qualquer empresa que busque excelência em assessoria jurídica empresarial.", autor: "Roberto Santos", cargo: "Presidente, Santos Holding" },
];

export default function DepoimentosSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % depoimentos.length), []);
  const prevFn = useCallback(() => setCurrent((prev) => (prev - 1 + depoimentos.length) % depoimentos.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="cool" showOrbs={true} showLines={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="folio-mark text-[11px] text-brass/50">fls. 06</span>
            <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
            <span className="text-brass text-xs tracking-[0.32em] uppercase">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parchment font-serif leading-[1.05]">
            O Que Dizem <span className="text-brass-gradient font-medium">Nossos Clientes</span>
          </h2>
        </motion.div>

        <div className="relative border border-hairline px-6 sm:px-16 py-12 sm:py-16">
          <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 w-8 h-8 text-brass/30" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-parchment-2 leading-relaxed mb-8 font-serif italic font-light">
                &ldquo;{depoimentos[current].texto}&rdquo;
              </p>
              <div>
                <p className="text-brass font-medium text-lg font-serif">{depoimentos[current].autor}</p>
                <p className="text-parchment-faint text-sm mt-0.5">{depoimentos[current].cargo}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevFn}
              className="p-2 border border-hairline text-parchment-faint hover:border-brass hover:text-brass transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 ${
                    index === current ? "bg-brass w-6" : "bg-hairline-strong w-1.5"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-hairline text-parchment-faint hover:border-brass hover:text-brass transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
