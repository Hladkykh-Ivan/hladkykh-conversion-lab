import type { Metadata } from "next";
import { getServerTranslations } from "@/i18n/locale.server";

type SampleKey = "sample1" | "sample2" | "sample3";

export async function buildSampleMetadata(key: SampleKey): Promise<Metadata> {
  const t = await getServerTranslations();
  const meta = t.meta[key];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
    twitter: { title: meta.title, description: meta.description },
  };
}
