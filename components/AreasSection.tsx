"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, Building2, FileText, Gavel, Landmark, Shield,
  TrendingUp, Users, Scale, Globe, X, ArrowUpRight,
} from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

interface Area {
  icon: React.ElementType;
  title: string;
  description: string;
  detalhes: string[];
}

const areasPrincipais: Area[] = [
  { icon: Briefcase, title: "Direito Empresarial", description: "Assessoria completa para empresas de todos os portes, com foco em prevenção e solução de conflitos societários.", detalhes: ["Planejamento societário e holding", "Fusões e aquisições", "Contratos comerciais e corporativos", "Governança corporativa", "Due diligence"] },
  { icon: Building2, title: "Direito Tributário", description: "Planejamento tributário estratégico e defesa em processos administrativos e judiciais.", detalhes: ["Planejamento tributário", "Recuperação de créditos", "Defesa em autuações fiscais", "Consultoria em operações especiais", "Compliance tributário"] },
  { icon: FileText, title: "Direito Contratual", description: "Elaboração, revisão e negociação de contratos comerciais e corporativos complexos.", detalhes: ["Elaboração de contratos", "Revisão de cláusulas", "Negociação comerciais", "Contratos internacionais", "Resolução de conflitos contratuais"] },
  { icon: Gavel, title: "Contencioso Cível", description: "Representação judicial em demandas cíveis e comerciais com estratégia e excelência.", detalhes: ["Ações cíveis e comerciais", "Execuções", "Tutela de urgência", "Recursos", "Mediação e conciliação"] },
  { icon: Landmark, title: "Direito Regulatório", description: "Compliance e assessoria em normas setoriais para diversos segmentos de mercado.", detalhes: ["Licenciamento", "Regulação setorial", "Compliance regulatório", "Relações com órgãos reguladores", "Auditorias"] },
  { icon: Shield, title: "Direito do Consumidor", description: "Defesa empresarial em ações consumeristas e consultoria preventiva.", detalhes: ["Defesa em ações consumeristas", "Consultoria preventiva", "Revisão de políticas", "Negociação de acordos", "Compliance consumerista"] },
];

const areasExtras: Area[] = [
  { icon: TrendingUp, title: "Recuperação Judicial", description: "Assessoria especializada em processos de recuperação judicial e extrajudicial de empresas.", detalhes: ["Planejamento de recuperação", "Negociação com credores", "Elaboração de plano", "Assessoria em assembleias", "Recuperação extrajudicial"] },
  { icon: Users, title: "Direito Trabalhista", description: "Consultoria preventiva e contencioso trabalhista para empresas de todos os portes.", detalhes: ["Consultoria preventiva", "Defesa em reclamações", "Auditoria trabalhista", "Elaboração de documentos", "Negociação coletiva"] },
  { icon: Scale, title: "Arbitragem e Mediação", description: "Representação em procedimentos arbitrais e mediações de alta complexidade.", detalhes: ["Representação em arbitragens", "Mediação comercial", "Elaboração de cláusulas", "Execução de laudos", "Consultoria prévia"] },
  { icon: Globe, title: "Direito Internacional", description: "Assessoria em operações transnacionais e resolução de conflitos de jurisdição.", detalhes: ["Contratos internacionais", "Due diligence cross-border", "Resolução de conflitos", "Planejamento estrutural", "Compliance internacional"] },
];

export default function AreasSection() {
  const [showAll, setShowAll] = useState(false);
  const [areaSelecionada, setAreaSelecionada] = useState<Area | null>(null);
  const todasAreas = [...areasPrincipais, ...areasExtras];

  useEffect(() => {
    if (!areaSelecionada) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAreaSelecionada(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [areaSelecionada]);

  return (
    <section id="areas" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="intense" showOrbs={true} showLines={true} showGrid={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="folio-mark text-[11px] text-brass/50">fls. 03</span>
            <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
            <span className="text-brass text-xs tracking-[0.32em] uppercase">Áreas de Atuação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-parchment mb-6 font-serif leading-[1.05]">
            Índice de <span className="text-brass-gradient font-medium">Especialidades</span>
          </h2>
          <p className="text-parchment-muted max-w-2xl text-base sm:text-lg">
            Atuação multidisciplinar com foco nas áreas preventiva, consultiva e contenciosa,
            priorizando o atendimento personalizado de acordo com o porte da empresa.
          </p>
        </motion.div>

        {/* table-of-contents style index */}
        <div className="border-t border-hairline">
          <AnimatePresence mode="popLayout">
            {todasAreas.map((area, index) => {
              if (!showAll && index >= 6) return null;
              return (
                <motion.div
                  key={area.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: index < 6 ? index * 0.06 : (index - 6) * 0.06 }}
                >
                  <button
                    onClick={() => setAreaSelecionada(area)}
                    className="group w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-hairline text-left bg-transparent hover:bg-brass/[0.04] transition-colors duration-300 cursor-pointer px-2 sm:px-3 -mx-2 sm:-mx-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                    aria-label={`Saiba mais sobre ${area.title}`}
                  >
                    <span className="folio-mark text-xs sm:text-sm text-brass/50 w-6 sm:w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-hairline-strong group-hover:border-brass/50 transition-colors duration-500 flex-shrink-0">
                      <area.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-parchment-faint group-hover:text-brass transition-colors duration-500" aria-hidden="true" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-medium text-parchment font-serif group-hover:text-brass transition-colors duration-500">
                        {area.title}
                      </h3>
                      <p className="hidden sm:block text-sm text-parchment-faint group-hover:text-parchment-muted transition-colors duration-500 mt-0.5 truncate max-w-xl">
                        {area.description}
                      </p>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-parchment-faint group-hover:text-brass transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" aria-hidden="true" strokeWidth={1.5} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 border border-brass/40 text-brass text-sm tracking-wider hover:bg-brass hover:text-ink transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
            aria-expanded={showAll}
            aria-label={showAll ? "Mostrar menos áreas" : "Ver todas as áreas de atuação"}
          >
            {showAll ? "MOSTRAR MENOS" : "VER TODAS AS ÁREAS"}
            <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {areaSelecionada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90 backdrop-blur-sm"
            onClick={() => setAreaSelecionada(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-ink-2 border border-hairline p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setAreaSelecionada(null)}
                className="absolute top-4 right-4 text-parchment-faint hover:text-brass transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center border border-brass/50">
                  <areaSelecionada.icon className="w-5 h-5 text-brass" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <h3 id="modal-title" className="text-2xl font-medium text-parchment font-serif">{areaSelecionada.title}</h3>
              </div>
              <p className="text-parchment-muted mb-6 leading-relaxed">{areaSelecionada.description}</p>
              <h4 className="text-xs text-brass tracking-[0.2em] uppercase mb-4">Serviços Oferecidos</h4>
              <ul className="space-y-3">
                {areaSelecionada.detalhes.map((detalhe, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-parchment-2">
                    <span className="w-1.5 h-1.5 bg-brass rounded-full mt-1.5 flex-shrink-0" aria-hidden="true" />
                    {detalhe}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-hairline">
                <a
                  href="https://wa.me/5511912252450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brass text-ink text-sm font-medium tracking-wider hover:bg-brass-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
                >
                  FALE COM UM ESPECIALISTA
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
