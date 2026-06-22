"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, Clock, User, Tag, Share2, Bookmark } from "lucide-react";
import GoldenBackground from "@/components/GoldenBackground";

interface Artigo {
  id: number;
  categoria: string;
  titulo: string;
  data: string;
  resumo: string;
  conteudo: string;
  autor: string;
  tempoLeitura: string;
  tags: string[];
  destaque?: boolean;
}

const artigos: Artigo[] = [
  { 
    id: 1,
    categoria: "Direito Empresarial", 
    titulo: "Reforma Tributária: Impactos para Empresas em 2026", 
    data: "15 Jan 2026", 
    resumo: "Análise das principais mudanças trazidas pela reforma tributária e seus efeitos no planejamento estratégico das empresas.",
    conteudo: `A Reforma Tributária representa a maior mudança no sistema tributário brasileiro das últimas décadas. Com a unificação de impostos como ICMS, ISS, IPI, PIS e COFINS em um único Imposto sobre Bens e Serviços (IBS), as empresas precisam se preparar para uma nova realidade fiscal.

**Principais impactos:**

• **Transição gradual**: O novo sistema será implementado ao longo de 7 anos, com alíquotas convergindo progressivamente.

• **Crédito tributário**: O modelo de non-cumulatividade será ampliado, permitindo maior compensação de créditos ao longo da cadeia produtiva.

• **Setores impactados**: Indústria, serviços e comércio terão regras diferenciadas de transição que exigem análise caso a caso.

• **Compliance**: A complexidade inicial exige investimento em sistemas de gestão tributária e capacitação das equipes.

**Recomendações para empresas:**

1. Realize um diagnóstico tributário completo antes da vigência
2. Avalie o impacto na cadeia de fornecedores e clientes
3. Atualize sistemas ERP para compatibilidade com a nova legislação
4. Capacite a equipe fiscal interna
5. Considere a contratação de assessoria especializada para o período de transição

A DRC Advogados oferece consultoria completa para adequação à Reforma Tributária, com equipe especializada em Direito Tributário e Empresarial.`,
    autor: "Dra. Karla Ronqui",
    tempoLeitura: "8 min",
    tags: ["Reforma Tributária", "IBS", "Planejamento Tributário", "Compliance"],
    destaque: true
  },
  { 
    id: 2,
    categoria: "Compliance", 
    titulo: "LGPD: Novas Diretrizes para Adequação Empresarial", 
    data: "08 Jan 2026", 
    resumo: "Entenda as atualizações na legislação de proteção de dados e como implementar compliance efetivo.",
    conteudo: `A Lei Geral de Proteção de Dados (LGPD) completou mais um ano de vigência e as exigências regulatórias se tornaram cada vez mais rigorosas. Em 2026, a Autoridade Nacional de Proteção de Dados (ANPD) intensificou as fiscalizações e já aplicou multas milionárias a empresas que descumpriram as normas.

**Novidades em 2026:**

• **Relatórios de Impacto à Proteção de Dados (RIPD)**: Obrigatórios para operações de alto risco, exigindo análise detalhada de todos os processamentos de dados pessoais.

• **DPO obrigatório**: Empresas com mais de 5 milhões de reais de faturamento ou que processam dados sensíveis em larga escala devem ter Encarregado de Dados nomeado.

• **Transferência internacional**: Novas regras para envio de dados para fora do Brasil, exigindo certificações e acordos específicos.

• **Direitos do titular**: Prazo de resposta às solicitações reduzido para 10 dias úteis.

**Checklist de adequação:**

✓ Mapeamento completo de dados pessoais processados
✓ Política de Privacidade atualizada e acessível
✓ Termos de Consentimento claros e específicos
✓ Procedimentos para atendimento de direitos dos titulares
✓ Medidas de segurança da informação implementadas
✓ Registro de operações de tratamento
✓ Contratos com terceiros revisados

A não adequação pode resultar em multas de até 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração, além de danos reputacionais irreversíveis.`,
    autor: "Dra. Daniela Alves",
    tempoLeitura: "6 min",
    tags: ["LGPD", "Proteção de Dados", "Compliance", "ANPD"]
  },
  { 
    id: 3,
    categoria: "Contratos", 
    titulo: "Contratos Digitais: Validade e Segurança Jurídica", 
    data: "02 Jan 2026", 
    resumo: "Aspectos legais dos contratos eletrônicos e as melhores práticas para garantir validade e enforceability.",
    conteudo: `A digitalização dos contratos acelerou-se exponencialmente nos últimos anos, impulsionada pelo home office e pela necessidade de agilidade nos negócios. No entanto, a validade jurídica dos contratos digitais exige atenção a requisitos específicos para garantir segurança e enforceability.

**Base legal:**

A Medida Provisória nº 2.200-2/2001 regulamenta a Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), estabelecendo os certificados digitais como forma de identificação segura do signatário. Além disso, o Marco Civil da Internet (Lei 12.965/2014) e a Lei 14.063/2020 ampliaram as possibilidades de uso de assinaturas eletrônicas.

**Tipos de assinatura eletrônica:**

1. **Simples**: Aceitação por meio de clique, senha ou email. Válida para contratos de baixo risco.

2. **Avançada**: Utiliza credenciais de autenticação vinculadas ao signatário. Recomendada para contratos comerciais.

3. **Qualificada**: Certificado digital ICP-Brasil com chave criptográfica. Exigida para documentos públicos e operações de alto valor.

**Boas práticas:**

• Utilize plataformas certificadas e auditadas
• Garanta o consentimento livre, específico e informado
• Armazene logs de auditoria com carimbo de tempo
• Mantenha versionamento do documento
• Assegure a integridade do conteúdo após assinatura
• Forneça cópia ao contratante imediatamente

**Riscos comuns:**

- Falta de prova da identidade do signatário
- Alteração unilateral do conteúdo
- Nulidade por vício de consentimento
- Insegurança na armazenagem

A DRC Advogados auxilia na elaboração de políticas de contratação digital e na seleção de soluções tecnológicas adequadas ao perfil de risco de cada empresa.`,
    autor: "Dr. André Coelho",
    tempoLeitura: "7 min",
    tags: ["Contratos Digitais", "Assinatura Eletrônica", "ICP-Brasil", "Compliance Digital"]
  },
  { 
    id: 4,
    categoria: "Direito Tributário", 
    titulo: "Créditos de PIS/COFINS: Como Recuperar Valores Pagos a Maior", 
    data: "20 Dez 2025", 
    resumo: "Guia prático para identificação e recuperação de créditos tributários acumulados no sistema não cumulativo.",
    conteudo: `A sistemática não cumulativa do PIS e da COFINS permite que empresas com lucro real apurem créditos sobre diversas operações, reduzindo a carga tributária efetiva. No entanto, muitas companhias deixam de utilizar créditos por desconhecimento da legislação ou falhas no controle interno.

**Operações que geram créditos:**

• Aquisição de bens para revenda
• Aquisição de bens e serviços utilizados como insumo
• Aquisição de serviços de transporte e armazenagem
• Aquisição de serviços de comunicação
• Aquisição de serviços de processamento de dados
• Aquisição de energia elétrica
• Aluguel de prédios, máquinas e equipamentos
• Contraprestação de arrendamento mercantil
• Depreciação e amortização de máquinas, equipamentos e edificações

**Prazos e limitações:**

Os créditos podem ser compensados com débitos do mesmo regime (não cumulativo) ou, quando houver excesso, requerer o ressarcimento ou a restituição. O prazo de prescrição é de 5 anos, contado do primeiro dia do exercício seguinte ao da apuração.

**Cuidados importantes:**

- Documentação comprobatória deve ser mantida por 10 anos
- Créditos de insumo exigem vinculação ao processo produtivo
- Serviços de terceiros precisam estar relacionados na Lei 10.637/2002 e 10.833/2003
- Créditos de energia elétrica são limitados a consumo industrial

**Oportunidades de planejamento:**

A revisão retrospectiva das apurações dos últimos 5 anos pode identificar valores significativos a recuperar. Em alguns setores, como indústria e construção civil, os créditos acumulados podem alcançar milhões de reais.

A DRC Advogados possui equipe especializada em revisão tributária e recuperação de créditos, com metodologia própria de análise e suporte em todo o processo administrativo e judicial.`,
    autor: "Dra. Karla Ronqui",
    tempoLeitura: "10 min",
    tags: ["PIS/COFINS", "Créditos Tributários", "Recuperação Tributária", "Planejamento Fiscal"]
  },
  { 
    id: 5,
    categoria: "Direito Trabalhista", 
    titulo: "Teletrabalho: Direitos e Deveres na Era do Home Office", 
    data: "15 Dez 2025", 
    resumo: "Entenda as regras do trabalho remoto, reembolso de despesas e a nova jurisprudência do TST sobre o tema.",
    conteudo: `A pandemia acelerou a adoção do teletrabalho no Brasil, e mesmo com o retorno gradual às atividades presenciais, muitas empresas mantiveram ou expandiram o modelo remoto. A Lei 14.442/2022 trouxe regulamentação específica, mas questões práticas continuam gerando dúvidas e litígios.

**Tipos de trabalho remoto:**

1. **Teletrabalho**: Trabalho fora das dependências da empresa, em domicílio ou outro local à escolha do empregado. Pode ser total ou híbrido.

2. **Trabalho remoto ocasional**: Realizado em situações excepcionais, por até 45 dias no ano, sem alteração contratual.

**Obrigações do empregador:**

• Fornecer equipamentos necessários OU pagar auxílio-equipamento
• Arcar com despesas de internet, energia e outros custos operacionais
• Respeitar o limite de jornada e intervalos
• Garantir a segurança e saúde do trabalhador (NR 17)
• Manter registro de ponto eletrônico
• Incluir teletrabalho no Programa de Gerenciamento de Riscos (PGR)

**Reembolso de despesas:**

A jurisprudência do TST vem se consolidando no sentido de que o empregador deve reembolsar as despesas efetivamente comprovadas pelo empregado, incluindo:
- Internet banda larga
- Energia elétrica (proporcional)
- Manutenção de equipamentos
- Mobiliário ergonômico (em alguns casos)

**Riscos trabalhistas:**

- Acidente de trabalho em domicílio (reconhecido pela JT)
- Horas extras por dificuldade de desconexão
- Doenças ocupacionais (LER/DORT, transtornos mentais)
- Assédio moral por cobrança excessiva online

**Recomendações:**

- Formalize o teletrabalho em acordo individual escrito
- Estabeleça política clara de desconexão (right to disconnect)
- Forneça treinamento de ergonomia e saúde mental
- Faça visitas periódicas ao local de trabalho remoto
- Mantenha comunicação regular e estruturada

A DRC Advogados oferece consultoria preventiva e defesa em litígios trabalhistas relacionados ao trabalho remoto, com acompanhamento da evolução jurisprudencial.`,
    autor: "Dr. Leonardo Landim",
    tempoLeitura: "9 min",
    tags: ["Teletrabalho", "Home Office", "Direito Trabalhista", "TST"]
  },
  { 
    id: 6,
    categoria: "Contencioso Cível", 
    titulo: "Arbitragem vs. Judiciário: Quando Escolher Cada Via?", 
    data: "10 Dez 2025", 
    resumo: "Análise comparativa entre arbitragem e processo judicial para resolução de conflitos empresariais de alta complexidade.",
    conteudo: `A escolha entre arbitragem e processo judicial é uma decisão estratégica que pode determinar o sucesso na resolução de conflitos empresariais. Cada via possui características distintas que devem ser avaliadas conforme a natureza da disputa, as partes envolvidas e os objetivos de negócio.

**Arbitragem — Vantagens:**

• **Confidencialidade**: O processo é privado, preservando a imagem das empresas e estratégias comerciais.

• **Especialização**: Os árbitros são escolhidos pelas partes, permitindo seleção de especialistas na matéria.

• **Celeridade**: Em média, 12 a 18 meses para decisão final, contra 5 a 10 anos no Judiciário.

• **Flexibilidade**: As partes definem o procedimento, calendário e idioma.

• **Execução**: A sentença arbitral é título executivo judicial, com execução direta.

• **Transnacionalidade**: Facilidade de reconhecimento e execução no exterior (Convenção de Nova York).

**Arbitragem — Desvantagens:**

• Custo elevado (honorários arbitrais, custas da câmara, advogados)
• Poucas possibilidades de recurso (anulação restrita)
• Requer acordo prévio das partes (cláusula compromissória)
• Limitação a direitos patrimoniais disponíveis

**Judiciário — Quando preferir:**

• Litígios envolvendo direitos indisponíveis (consumidor, trabalhista, família)
• Necessidade de medidas cautelares urgentes e complexas
• Casos que exigem produção de prova técnica pública
• Situações onde a publicidade é desejável (precedentes)
• Disputas com parte insolvente ou desaparecida

**Cláusula compromissória ideal:**

Uma boa cláusula deve prever:
- Câmara arbitral ou regras ad hoc
- Número de árbitros e método de nomeação
- Local da sede arbitral
- Idioma do procedimento
- Lei aplicável ao mérito
- Aplicação do Regulamento da câmara escolhida

**Tendências em 2026:**

A arbitragem online (Online Dispute Resolution — ODR) ganhou tração, com câmaras como ICC, CIESP/FIESP e CAM-CCBC oferecendo procedimentos híbridos ou totalmente virtuais. A inteligência artificial também começa a ser utilizada em análise documental e predição de resultados.

A DRC Advogados atua tanto como representante de partes em arbitragens nacionais e internacionais quanto na elaboração de cláusulas compromissórias e políticas de resolução de conflitos.`,
    autor: "Dr. André Coelho",
    tempoLeitura: "8 min",
    tags: ["Arbitragem", "Contencioso", "Resolução de Conflitos", "ODR"]
  },
];

export default function ArtigosSection() {
  const [artigoSelecionado, setArtigoSelecionado] = useState<Artigo | null>(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("Todas");

  useEffect(() => {
    if (!artigoSelecionado) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setArtigoSelecionado(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [artigoSelecionado]);

  const categorias = ["Todas", ...Array.from(new Set(artigos.map(a => a.categoria)))];

  const artigosFiltrados = categoriaFiltro === "Todas" 
    ? artigos 
    : artigos.filter(a => a.categoria === categoriaFiltro);

  const abrirArtigo = useCallback((artigo: Artigo) => {
    setArtigoSelecionado(artigo);
    document.body.style.overflow = "hidden";
  }, []);

  const fecharArtigo = useCallback(() => {
    setArtigoSelecionado(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="artigos" className="relative py-24 md:py-32 overflow-hidden">
      <GoldenBackground variant="default" showOrbs={true} showLines={true} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-[1px] z-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-[1px] z-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }} 
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="folio-mark text-[11px] text-[#C9A573]/50">fls. 07</span>
              <span className="h-px w-8 bg-[#C9A573]/30" aria-hidden="true" />
              <span className="text-[#C9A573] text-xs tracking-[0.32em] uppercase">Publicações</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6] font-serif leading-[1.05]">
              Artigos e <span className="text-brass-gradient font-medium">Insights</span>
            </h2>
          </div>

          {/* Filtros de categoria */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaFiltro(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 rounded-sm border ${
                  categoriaFiltro === cat
                    ? "bg-[#C9A573]/10 border-[#C9A573]/40 text-[#C9A573]"
                    : "border-[#232024] text-[#5C5750] hover:border-[#C9A573]/30 hover:text-[#9B9388]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de artigos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {artigosFiltrados.map((artigo, index) => (
              <motion.article 
                key={artigo.id}
                layout
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }} 
                className="group cursor-pointer"
                onClick={() => abrirArtigo(artigo)}
              >
                <div className="relative h-full p-6 bg-[#111113]/80 backdrop-blur-sm border border-[#232024] hover:border-[#C9A573]/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C9A573] to-[#E5C788] group-hover:w-full transition-all duration-500" />

                  {/* Badge destaque */}
                  {artigo.destaque && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#C9A573]/10 border border-[#C9A573]/30 text-[#C9A573] text-[10px] tracking-wider uppercase">
                      Destaque
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#C9A573] text-xs tracking-wider uppercase">{artigo.categoria}</span>
                    </div>

                    <h3 className="text-xl font-medium text-[#F3EFE6] mb-3 font-serif group-hover:text-[#C9A573] transition-colors duration-500 leading-snug">
                      {artigo.titulo}
                    </h3>

                    <p className="text-sm text-[#5C5750] mb-4 leading-relaxed line-clamp-3">
                      {artigo.resumo}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#5C5750] text-xs">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {artigo.data}
                        <span className="mx-1">·</span>
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {artigo.tempoLeitura}
                      </div>

                      <div className="flex items-center gap-2 text-[#C9A573] text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        LER <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Contador */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#5C5750] tracking-wider">
            Exibindo {artigosFiltrados.length} de {artigos.length} artigos
          </p>
        </div>
      </div>

      {/* Modal de leitura inline */}
      <AnimatePresence>
        {artigoSelecionado && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#08080A]/95 backdrop-blur-xl overflow-y-auto"
            onClick={fecharArtigo}
          >
            {/* Botão fechar fixo */}
            <button
              onClick={fecharArtigo}
              className="fixed top-4 right-4 z-[60] p-3 bg-[#111113]/90 border border-[#232024] text-[#5C5750] hover:text-[#C9A573] hover:border-[#C9A573]/40 transition-all duration-300 rounded-sm"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative min-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do artigo */}
              <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#C9A573]/10 border border-[#C9A573]/30 text-[#C9A573] text-xs tracking-wider uppercase">
                      {artigoSelecionado.categoria}
                    </span>
                    <div className="flex items-center gap-2 text-[#5C5750] text-xs">
                      <Calendar className="w-3 h-3" />
                      {artigoSelecionado.data}
                    </div>
                    <div className="flex items-center gap-2 text-[#5C5750] text-xs">
                      <Clock className="w-3 h-3" />
                      {artigoSelecionado.tempoLeitura} de leitura
                    </div>
                  </div>

                  {/* Título */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F3EFE6] font-serif mb-6 leading-tight">
                    {artigoSelecionado.titulo}
                  </h1>

                  {/* Autor */}
                  <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#232024]">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#C9A573]/30 bg-[#C9A573]/10">
                      <User className="w-4 h-4 text-[#C9A573]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#DCD5C6]">{artigoSelecionado.autor}</p>
                      <p className="text-xs text-[#5C5750]">Advogado(a) — DRC Advogados</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-4xl mx-auto">
                  <div 
                    className="prose prose-invert prose-gold max-w-none"
                    style={{
                      color: '#9B9388',
                      lineHeight: '1.8',
                    }}
                  >
                    {/* Resumo em destaque */}
                    <div className="p-6 bg-[#111113]/60 border-l-2 border-[#C9A573] mb-8">
                      <p className="text-lg text-[#DCD5C6] italic m-0">{artigoSelecionado.resumo}</p>
                    </div>

                    {/* Conteúdo formatado */}
                    <div className="text-[#9B9388] text-base sm:text-lg leading-relaxed whitespace-pre-line">
                      {artigoSelecionado.conteudo}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-[#232024]">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-[#C9A573]" />
                      <span className="text-xs text-[#5C5750] tracking-wider uppercase">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {artigoSelecionado.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1.5 bg-[#111113] border border-[#232024] text-[#5C5750] text-xs hover:border-[#C9A573]/30 hover:text-[#C9A573] transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#232024] text-[#5C5750] text-xs tracking-wider hover:border-[#C9A573]/30 hover:text-[#C9A573] transition-all duration-300">
                      <Share2 className="w-4 h-4" />
                      COMPARTILHAR
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#232024] text-[#5C5750] text-xs tracking-wider hover:border-[#C9A573]/30 hover:text-[#C9A573] transition-all duration-300">
                      <Bookmark className="w-4 h-4" />
                      SALVAR
                    </button>
                  </div>

                  {/* CTA */}
                  <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#C9A573]/10 to-transparent border border-[#C9A573]/20">
                    <h3 className="text-xl font-medium text-[#F3EFE6] font-serif mb-3">
                      Precisa de orientação sobre este tema?
                    </h3>
                    <p className="text-sm text-[#9B9388] mb-6">
                      Nossa equipe está pronta para ajudar sua empresa com soluções jurídicas personalizadas.
                    </p>
                    <a 
                      href="https://wa.me/5511912252450" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A573] text-[#08080A] text-sm font-medium tracking-wider hover:bg-[#E5C788] transition-colors"
                    >
                      FALE COM UM ESPECIALISTA
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
