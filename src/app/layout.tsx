import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundo IPTV - Streaming Completo",
  description: "Acesso completo ao melhor do streaming. Desfrute de milhares de canais de de notícias e esportes além de  filmes e séries com a melhor qualidade de imagem.",
  keywords: "IPTV, streaming, canais, filmes, séries, entretenimento, esporte, notícias",
  authors: [{ name: "Mundo IPTV" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

