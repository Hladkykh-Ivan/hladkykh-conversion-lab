"use client";

import { useState, type ComponentType } from "react";
import { useLanguage } from "@/app/core/providers";
import {
  Parallax,
  Template1,
  Template2,
  Template3,
  type ParallaxType,
} from "@/app/shared/components";
import "./examples-carousel.scss";

type SampleCard = {
  key: string;
  Component: ComponentType;
  url: string;
  parallax: ParallaxType;
};

const cards: SampleCard[] = [
  { key: "sample-1", Component: Template1, url: "/sample-1", parallax: "slide-left" },
  { key: "sample-2", Component: Template2, url: "/sample-2", parallax: "slide-bottom" },
  { key: "sample-3", Component: Template3, url: "/sample-3", parallax: "slide-right" },
];

type SlotPosition = "left" | "center" | "right";

const slotForOffset = (offset: number): SlotPosition => {
  if (offset === 0) return "center";
  if (offset === 1) return "right";
  return "left";
};

export default function ExamplesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { t } = useLanguage();

  return (
    <section className="examples-carousel">
      <Parallax type="slide-top" duration={1000}>
        <h2 className="examples-carousel__title">{t.examples.title}</h2>
      </Parallax>

      <div className="examples-carousel__stage">
        {cards.map((card, index) => {
          const offset = (index - activeIndex + cards.length) % cards.length;
          const slot = slotForOffset(offset);
          const isCenter = slot === "center";
          const { Component } = card;

          const activate = () => {
            if (isCenter) {
              window.open(card.url, "_blank", "noopener,noreferrer");
            } else {
              setActiveIndex(index);
            }
          };

          return (
            <div
              key={card.key}
              className={`examples-carousel__slot examples-carousel__slot--${slot}`}
              onClick={activate}
              role="button"
              tabIndex={0}
              aria-label={
                isCenter
                  ? `Open ${card.key} landing page example`
                  : `Show ${card.key} example`
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  activate();
                }
              }}
            >
              <Parallax type={card.parallax} duration={2000} delay={100}>
                <Component />
              </Parallax>
            </div>
          );
        })}
      </div>
    </section>
  );
}
