import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider, ThemeProvider } from "@/app/core/providers";
import "./tailwind.css";
import "./global.scss";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Conversion Lab",
  description:
    "Помогаю бизнесам і арбітражникам отримувати більше заявок з того ж рекламного бюджету.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={inter.className}>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
