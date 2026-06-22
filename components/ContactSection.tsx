"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

const contatos = [
  { icon: Phone, label: "Telefone", valor: "+55 11 91225-2450", href: "tel:+5511912252450" },
  { icon: Mail, label: "E-mail", valor: "contato@drcadvogados.com.br", href: "mailto:contato@drcadvogados.com.br" },
  { icon: MapPin, label: "Endereço", valor: "R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP", href: "https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8" },
  { icon: Clock, label: "Horário", valor: "Segunda a Sexta: 9h às 18h", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="warm" showOrbs={true} showLines={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.2), transparent)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="folio-mark text-[11px] text-brass/50">fls. 09</span>
            <span className="h-px w-8 bg-brass/30" aria-hidden="true" />
            <span className="text-brass text-xs tracking-[0.32em] uppercase">Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-parchment mb-6 font-serif leading-[1.05]">
            Entre em <span className="text-brass-gradient font-medium">Contato</span>
          </h2>
          <p className="text-parchment-muted max-w-2xl leading-relaxed">
            Estamos prontos para atender suas necessidades jurídicas. Entre em contato conosco e agende uma consulta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contatos.map((contato, index) => (
                <motion.a
                  key={index}
                  href={contato.href}
                  target={contato.href.startsWith("http") ? "_blank" : undefined}
                  rel={contato.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-5 bg-ink-2/80 backdrop-blur-sm border border-hairline hover:border-brass/30 transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
                  aria-label={`${contato.label}: ${contato.valor}`}
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-brass to-brass-light group-hover:w-full transition-all duration-500" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-hairline group-hover:border-brass/50 transition-colors flex-shrink-0">
                      <contato.icon className="w-4 h-4 text-parchment-faint group-hover:text-brass transition-colors" aria-hidden="true" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="folio-mark text-[10px] text-parchment-faint uppercase tracking-wider mb-1">{contato.label}</p>
                      <p className="text-sm text-parchment-2 group-hover:text-brass transition-colors leading-relaxed">{contato.valor}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="relative">
              <div className="relative border border-hairline overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brass to-brass-light z-10" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.447706913285!2d-46.69576648447594!3d-23.601448084658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5763a80e948d%3A0xad297ab3eccff75f!2sDRC%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="320"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização DRC Advogados"
                  className="block"
                />
                <a
                  href="https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-ink/90 backdrop-blur-sm border border-brass/30 text-brass text-xs tracking-wider hover:bg-brass hover:text-ink hover:border-brass transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  VER NO MAPA
                </a>
              </div>
              <p className="mt-3 text-xs text-parchment-faint text-center">
                R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP — CEP 04571-020
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <form className="relative p-6 sm:p-8 bg-ink-2/80 backdrop-blur-sm border border-hairline" aria-label="Formulário de contato" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brass to-brass-light" />
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-parchment font-serif">Envie uma mensagem</h3>
                <span className="folio-mark text-[10px] text-brass/40">protocolo</span>
              </div>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-xs text-parchment-faint uppercase tracking-wider mb-2">
                    Nome <span className="text-brass">*</span>
                  </label>
                  <input id="nome" name="nome" type="text" required autoComplete="name" className="w-full bg-ink/80 border border-hairline px-4 py-3 text-parchment focus:border-brass focus:outline-none transition-colors" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-parchment-faint uppercase tracking-wider mb-2">
                    E-mail <span className="text-brass">*</span>
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="w-full bg-ink/80 border border-hairline px-4 py-3 text-parchment focus:border-brass focus:outline-none transition-colors" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-xs text-parchment-faint uppercase tracking-wider mb-2">Telefone</label>
                  <input id="telefone" name="telefone" type="tel" autoComplete="tel" className="w-full bg-ink/80 border border-hairline px-4 py-3 text-parchment focus:border-brass focus:outline-none transition-colors" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-xs text-parchment-faint uppercase tracking-wider mb-2">
                    Mensagem <span className="text-brass">*</span>
                  </label>
                  <textarea id="mensagem" name="mensagem" rows={4} required className="w-full bg-ink/80 border border-hairline px-4 py-3 text-parchment focus:border-brass focus:outline-none transition-colors resize-none" placeholder="Descreva sua necessidade..." />
                </div>
                <motion.button
                  type="submit"
                  className="w-full relative py-3 sm:py-4 bg-brass text-ink font-medium tracking-wider overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">ENVIAR MENSAGEM</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
