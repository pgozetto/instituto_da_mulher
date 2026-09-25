import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Instituto da Mulher de Piracicaba | Saúde feminina",
    template: "%s | Instituto da Mulher de Piracicaba",
  },
  description:
    "Clínica especializada em saúde da mulher em Piracicaba, com ginecologia, obstetrícia, psicologia e nutrição. Agende sua consulta.",
  keywords: [
    "ginecologista Piracicaba",
    "obstetrícia Piracicaba",
    "saúde da mulher Piracicaba",
    "DIU Piracicaba",
    "Implanon Piracicaba",
    "Instituto da Mulher de Piracicaba",
  ],
  openGraph: {
    title: "Instituto da Mulher de Piracicaba",
    description: "Cuidado completo e humanizado para a saúde da mulher.",
    locale: "pt_BR",
    type: "website",
    images: siteUrl
      ? [{ url: "/images/equipe-medica.jpg", width: 1920, height: 1280 }]
      : undefined,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#9068F0",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
