"use client";

import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const linksRapidos = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Equipe", href: "#equipe" },
  { name: "Contato", href: "#contato" },
];

const areasFooter = [
  "Direito Empresarial",
  "Direito Tributário",
  "Direito Contratual",
  "Contencioso Cível",
  "Recuperação Judicial",
];

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-1 border-t border-hairline overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,115,0.25), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/logo.png" alt="DRC Advogados" fill className="object-contain" sizes="40px" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm tracking-[0.28em] text-parchment font-serif">DRC</span>
                <span className="text-[9px] tracking-[0.22em] text-parchment-faint uppercase mt-1">Advogados</span>
              </div>
            </div>
            <p className="text-parchment-faint text-sm leading-relaxed mb-6 max-w-xs">
              Advocacia empresarial de alto padrão, combinando excelência técnica com atendimento
              próximo e estratégico há mais de 20 anos.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/drc.advogados/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-hairline text-parchment-faint hover:border-brass hover:text-brass transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                aria-label="Instagram DRC Advogados"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-hairline text-parchment-faint hover:border-brass hover:text-brass transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                aria-label="LinkedIn DRC Advogados"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:contato@drcadvogados.com.br"
                className="w-9 h-9 flex items-center justify-center border border-hairline text-parchment-faint hover:border-brass hover:text-brass transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                aria-label="Enviar e-mail para DRC Advogados"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="folio-mark text-[11px] text-brass uppercase tracking-[0.2em] mb-5">Navegação</h3>
            <ul className="space-y-3">
              {linksRapidos.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-parchment-faint hover:text-brass transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="folio-mark text-[11px] text-brass uppercase tracking-[0.2em] mb-5">Áreas</h3>
            <ul className="space-y-3">
              {areasFooter.map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-sm text-parchment-faint hover:text-brass transition-colors duration-300">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="folio-mark text-[11px] text-brass uppercase tracking-[0.2em] mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-parchment-faint">
                <MapPin className="w-4 h-4 text-brass/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-parchment-faint">
                <Phone className="w-4 h-4 text-brass/60 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+5511912252450" className="hover:text-brass transition-colors">+55 11 91225-2450</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-parchment-faint">
                <Mail className="w-4 h-4 text-brass/60 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:contato@drcadvogados.com.br" className="hover:text-brass transition-colors break-all">
                  contato@drcadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parchment-faint text-center sm:text-left">
            © {anoAtual} DRC Advogados. Todos os direitos reservados.
          </p>
          <p className="text-xs text-parchment-faint text-center sm:text-right">
            OAB/SP — Sociedade de Advogados
          </p>
        </div>
      </div>
    </footer>
  );
}
