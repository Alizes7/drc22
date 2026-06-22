import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRC Advogados | Advocacia Empresarial em São Paulo",
  description:
    "Escritório especializado em Direito Empresarial. Soluções preventivas, consultivas e contenciosas de alto padrão para empresas nacionais e internacionais. 20+ anos de experiência.",
  keywords:
    "advocacia empresarial, direito empresarial, advogados são paulo, consultoria jurídica, direito tributário, compliance",
  authors: [{ name: "DRC Advogados" }],
  creator: "DRC Advogados",
  publisher: "DRC Advogados",
  robots: "index, follow",
  openGraph: {
    title: "DRC Advogados | Advocacia Empresarial",
    description: "Parceria estratégica com excelência jurídica e resultados assertivos.",
    type: "website",
    locale: "pt_BR",
    siteName: "DRC Advogados",
  },
  twitter: {
    card: "summary_large_image",
    title: "DRC Advogados | Advocacia Empresarial",
    description: "Parceria estratégica com excelência jurídica e resultados assertivos.",
  },
  alternates: {
    canonical: "https://drcadvogados.com.br",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08080A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-ink text-parchment">{children}</body>
    </html>
  );
}
