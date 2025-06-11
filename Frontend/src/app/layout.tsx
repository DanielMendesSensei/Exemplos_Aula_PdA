import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exemplos de Aula PdA",
  description: "Exemplos de exercícios passados dentro de sala de aula",
  icons: "/images/Logo2.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
