"use client";

import { CONTACTS } from "@/app/core/config";
import { useLanguage } from "@/app/core/providers";
import { Parallax } from "@/app/shared/components";
import "./hero.scss";

const scrollToExamples = () => {
  const el = document.querySelector(".examples-carousel");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="hero">
      <div className="hero__content">
        <Parallax type="slide-top" duration={1000}>
          <span className="hero__eyebrow">{hero.eyebrow}</span>
        </Parallax>

        <Parallax type="slide-bottom" duration={1200} delay={100}>
          <h1 className="hero__title">
            {hero.titleStart}{" "}
            <span className="hero__title-accent">{hero.titleAccent}</span>
          </h1>
        </Parallax>

        <Parallax type="slide-bottom" duration={1200} delay={250}>
          <p className="hero__subtitle">{hero.subtitle}</p>
        </Parallax>

        <Parallax type="scale" duration={1000} delay={400}>
          <div className="hero__actions">
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--telegram"
          >
            <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <path
                d="M51.6735 7.33828C50.8335 6.62596 49.5141 6.52404 48.15 7.07172H48.1477C46.713 7.6474 7.5354 24.4519 5.94052 25.1384C5.65044 25.2392 3.117 26.1845 3.37796 28.2901C3.61092 30.1885 5.64708 30.9748 5.89572 31.0655L15.8559 34.4759C16.5167 36.6756 18.9527 44.7911 19.4914 46.5248C19.8274 47.6056 20.3751 49.0258 21.3349 49.3181C22.1772 49.6429 23.0149 49.3461 23.557 48.9205L29.6464 43.2724L39.4767 50.9388L39.7108 51.0788C40.3783 51.3744 41.0178 51.5223 41.6282 51.5223C42.0997 51.5223 42.5522 51.4338 42.9845 51.2568C44.4573 50.652 45.0464 49.2487 45.108 49.0896L52.4508 10.9234C52.8988 8.885 52.276 7.84788 51.6735 7.33828ZM24.64 35.84L21.28 44.8L17.92 33.6L43.68 14.56L24.64 35.84Z"
                fill="currentColor"
              />
            </svg>
            <span>{hero.telegramCta}</span>
          </a>
          <a
            href={CONTACTS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--whatsapp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            <span>{hero.whatsappCta}</span>
          </a>
          </div>
        </Parallax>

        <Parallax type="opacity" duration={1200} delay={600}>
          <button
            type="button"
            onClick={scrollToExamples}
            className="hero__examples-link"
          >
          <span className="hero__examples-link-text">{hero.examplesCta}</span>
          <svg
            className="hero__examples-link-arrow"
            viewBox="0 0 30 36"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 5 L15 26"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M5 20 L15 30 L25 20"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </button>
        </Parallax>
      </div>
    </section>
  );
}
