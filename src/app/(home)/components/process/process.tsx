"use client";

import { useLanguage } from "@/app/core/providers";
import { Parallax, type ParallaxType } from "@/app/shared/components";
import "./process.scss";

const STEP_PARALLAX: ParallaxType[] = ["slide-left", "slide-bottom", "slide-right"];

const STEP_ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 12l8-4.5M12 12v9M12 12L4 7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M3 9h18M7 14h4M7 17h7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="17" cy="15.5" r="1.4" fill="currentColor" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 4l6 6-9.5 9.5a2 2 0 01-2.83 0l-3.17-3.17a2 2 0 010-2.83L14 4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M14 4l6 6M9 14l-3 6 6-3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
  </svg>,
];

const PERK_ICON = (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12l5 5L20 7"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section className="process">
      <div className="process__inner">
        <Parallax type="slide-top" duration={1000}>
          <header className="process__header">
            <h2 className="process__title">{p.title}</h2>
            <p className="process__subtitle">{p.subtitle}</p>
          </header>
        </Parallax>

        <div className="process__steps">
          {p.steps.map((step, i) => (
            <Parallax key={i} type={STEP_PARALLAX[i]} duration={1200} delay={150 + i * 100}>
              <article className="process__step">
                <div className="process__step-icon">{STEP_ICONS[i]}</div>
                <div className="process__step-text">
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-description">{step.description}</p>
                </div>
              </article>
            </Parallax>
          ))}
        </div>

        <Parallax type="scale" duration={1200} delay={400}>
          <div className="process__pricing">
          <div className="process__pricing-shine" aria-hidden="true" />
          <div className="process__pricing-content">
            <div className="process__pricing-head">
              <span className="process__pricing-label">{p.pricing.label}</span>
              <div className="process__pricing-amount">{p.pricing.amount}</div>
            </div>
            <ul className="process__pricing-perks">
              {p.pricing.perks.map((perk, i) => (
                <li key={i} className="process__pricing-perk">
                  <span
                    className="process__pricing-perk-icon"
                    aria-hidden="true"
                  >
                    {PERK_ICON}
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <p className="process__pricing-note">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 8v4M12 16h.01"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              {p.extraNote}
            </p>
          </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
