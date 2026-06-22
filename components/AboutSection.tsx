"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Users, Trophy } from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

const features = [
  {
    icon: Scale,
    title: "Excelência Jurídica",
    description: "Atuação técnica refinada com foco em resultados assertivos e soluções inovadoras.",
  },
  {
    icon: Shield,
    title: "Proteção Estratégica",
    description: "Antecipação de riscos e defesa proativa dos interesses de nossos clientes.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Relação próxima e transparente, adaptada às necessidades específicas de cada caso.",
  },
  {
    icon: Trophy,
    title: "Histórico de Sucesso",
    description: "Mais de 500 casos resolvidos com excelência ao longo de mais de 20 anos.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="warm" showOrbs={true} showLines={true} />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="folio-mark text-[11px] text-brass/50">fls. 02</span>
              <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
              <span className="text-brass text-xs tracking-[0.32em] uppercase">Sobre Nós</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parchment mb-8 font-serif leading-[1.05]">
              Tradição e <span className="text-brass-gradient font-medium">Excelência</span> em Advocacia
            </h2>
            <p className="text-parchment-muted text-lg leading-relaxed mb-6">
              O escritório DRC Advogados foi fundado com o propósito de oferecer serviços
              jurídicos de alto padrão, combinando expertise técnica com uma abordagem
              estratégica e personalizada.
            </p>
            <p className="text-parchment-muted leading-relaxed mb-8">
              Nossa equipe multidisciplinar atua de forma integrada, garantindo soluções
              completas e eficientes para os mais complexos desafios jurídicos enfrentados
              por empresas e empresários.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-brass text-sm tracking-wider group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
            >
              ENTRAR EM CONTATO
              <span className="w-8 h-px bg-brass transition-all group-hover:w-12" />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 bg-ink-2/80 backdrop-blur-sm border border-hairline hover:border-brass/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-brass to-brass-light group-hover:w-full transition-all duration-500" />
                <feature.icon
                  className="w-7 h-7 text-brass mb-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-medium text-parchment mb-2 font-serif">{feature.title}</h3>
                <p className="text-sm text-parchment-faint leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
