import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider, ThemeProvider } from "@/app/core/providers";
import { getServerLocale, getServerTranslations } from "@/i18n/locale.server";
import "./tailwind.css";
import "./global.scss";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const [locale, t] = await Promise.all([getServerLocale(), getServerTranslations()]);
  return {
    title: t.meta.home.title,
    description: t.meta.home.description,
    keywords: [
      "лендінг",
      "Meta Ads",
      "Meta Pixel",
      "Facebook Pixel",
      "арбітраж трафіку",
      "landing page",
      "Hladkykh Ivan",
    ],
    authors: [{ name: "Hladkykh Ivan" }],
    openGraph: {
      title: t.meta.home.title,
      description: t.meta.home.description,
      type: "website",
      locale: locale === "en" ? "en_US" : "uk_UA",
      alternateLocale: locale === "en" ? "uk_UA" : "en_US",
      siteName: "Conversion Helper",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.home.title,
      description: t.meta.home.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  return (
    <html lang={locale} className={inter.className}>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
