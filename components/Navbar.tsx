"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Equipe", href: "#equipe" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-brass focus:text-ink focus:font-medium"
      >
        Pular para o conteúdo principal
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-ink/95 backdrop-blur-xl border-b border-brass/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#inicio" className="flex items-center gap-3 group" aria-label="DRC Advogados - Voltar ao início">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="DRC Advogados"
                  fill
                  className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(201,165,115,0.4)]"
                  priority
                  sizes="44px"
                />
              </div>
              <span className="hidden sm:flex flex-col leading-none">
                <span className="text-sm tracking-[0.28em] text-parchment font-serif">DRC</span>
                <span className="text-[9px] tracking-[0.22em] text-parchment-faint uppercase mt-1">Advogados</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                      isActive ? "text-brass" : "text-parchment-muted hover:text-parchment"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-brass to-brass-light transition-all duration-300 ${
                        isActive ? "w-4/5 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <a
                href="https://wa.me/5511912252450"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 overflow-hidden rounded-sm bg-gradient-to-r from-brass to-brass-deep hover:from-brass-light hover:to-brass transition-all duration-300"
                aria-label="Fale conosco pelo WhatsApp"
              >
                <span className="relative z-10 text-ink text-xs tracking-[0.15em] uppercase font-medium">
                  Fale Conosco
                </span>
                <svg
                  className="relative z-10 w-4 h-4 text-ink transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-brass"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent" />

          <div className="flex flex-col items-center justify-center h-full gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative flex items-center gap-3 px-8 py-3 text-lg tracking-wider transition-all duration-300 ${
                    isActive ? "text-brass" : "text-parchment hover:text-brass"
                  }`}
                >
                  <span className="folio-mark text-[10px] text-brass/40">{String(index + 1).padStart(2, "0")}</span>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-8 w-8 h-px bg-gradient-to-r from-brass to-brass-light" />
                  )}
                </a>
              );
            })}

            <a
              href="https://wa.me/5511912252450"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-3 bg-brass text-ink font-medium tracking-wider text-sm rounded-sm"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>
      )}
    </>
  );
}
