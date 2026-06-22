"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GoldenBackground from "@/components/GoldenBackground";

const equipe = [
  { nome: "Dra. Karla Ronqui", cargo: "Sócia Fundadora", especialidade: "Direito Empresarial e Tributário", imagem: "/karen.png" },
  { nome: "Dr. André Coelho", cargo: "Sócio", especialidade: "Contencioso Cível e Arbitragem", imagem: "/andre.png" },
  { nome: "Dra. Daniela Alves", cargo: "Advogada", especialidade: "Direito Contratual e Regulatório", imagem: "/daniela.png" },
  { nome: "Dr. Leonardo Landim", cargo: "Advogado", especialidade: "Direito do Consumidor e Trabalhista", imagem: "/leonardo.png" },
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="warm" showOrbs={true} showLines={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="folio-mark text-[11px] text-brass/50">fls. 05</span>
            <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
            <span className="text-brass text-xs tracking-[0.32em] uppercase">Nossa Equipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parchment font-serif leading-[1.05]">
            Conheça Nossos <span className="text-brass-gradient font-medium">Especialistas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipe.map((membro, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              aria-label={`Perfil de ${membro.nome}`}
            >
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={membro.imagem}
                      alt={`Foto profissional de ${membro.nome}, ${membro.cargo}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60 z-10" />
                  <div className="absolute inset-0 bg-brass/[0.16] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-brass/30 transition-all duration-500 z-20 pointer-events-none" />
                  <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-brass/0 group-hover:border-brass/70 transition-all duration-500 z-20" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-brass/0 group-hover:border-brass/70 transition-all duration-500 z-20" />
                  <span className="absolute top-3 right-3 folio-mark text-[10px] text-parchment/70 z-20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-brass to-brass-light group-hover:w-full transition-all duration-500 z-20" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-medium text-parchment mb-1 font-serif group-hover:text-brass transition-colors duration-500">
                  {membro.nome}
                </h3>
                <p className="text-brass text-sm mb-1">{membro.cargo}</p>
                <p className="text-parchment-faint text-sm group-hover:text-parchment-muted transition-colors duration-500">
                  {membro.especialidade}
                </p>
                <div className="mt-3 w-0 h-px bg-brass/40 group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-16">
          <a
            href="https://www.instagram.com/drc.advogados/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-brass/40 text-brass text-sm tracking-wider hover:bg-brass hover:text-ink transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
            aria-label="Siga DRC Advogados no Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            SIGA-NOS NO INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
}
