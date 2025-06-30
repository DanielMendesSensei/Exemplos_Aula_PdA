import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/themeprovider";

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
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-[var(--bkcolor1)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey={process.env.PROJECT_NAME as string}
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
