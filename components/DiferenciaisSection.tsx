"use client";

import { motion } from "framer-motion";
import { Clock, Target, MessageCircle, Award } from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

const diferenciais = [
  { icon: Clock, artigo: "Art. 1º", title: "Agilidade", description: "Respostas rápidas e decisões assertivas para acompanhar a velocidade dos negócios." },
  { icon: Target, artigo: "Art. 2º", title: "Foco em Resultados", description: "Estratégias jurídicas alinhadas aos objetivos de negócio de cada cliente." },
  { icon: MessageCircle, artigo: "Art. 3º", title: "Comunicação Clara", description: "Relatórios e pareceres em linguagem acessível, sem perder a rigorosidade técnica." },
  { icon: Award, artigo: "Art. 4º", title: "Excelência Técnica", description: "Equipe altamente qualificada com formação contínua e acompanhamento do cenário jurídico." },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="intense" showOrbs={true} showLines={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="folio-mark text-[11px] text-brass/50">fls. 04</span>
            <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
            <span className="text-brass text-xs tracking-[0.32em] uppercase">Por Que Nos Escolher</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parchment mb-3 font-serif leading-[1.05]">
            Nossos <span className="text-brass-gradient font-medium">Diferenciais</span>
          </h2>
          <p className="text-parchment-faint text-sm tracking-wide max-w-xl mx-auto">
            Quatro princípios que orientam cada caso conduzido pela banca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-ink-2"
            >
              <div className="relative h-full p-8 overflow-hidden transition-colors duration-500 hover:bg-ink-3">
                <div className="absolute inset-0 bg-gradient-to-br from-brass/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-brass to-brass-light group-hover:w-full transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="folio-mark text-xs text-brass/50 tracking-wider">{item.artigo}</span>
                    <item.icon
                      className="w-5 h-5 text-parchment-faint group-hover:text-brass transition-colors duration-500"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-medium text-parchment mb-3 font-serif group-hover:text-brass transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className="w-8 h-px bg-hairline-strong group-hover:w-12 group-hover:bg-brass transition-all duration-500 mb-4" />
                  <p className="text-sm text-parchment-faint group-hover:text-parchment-muted transition-colors duration-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
