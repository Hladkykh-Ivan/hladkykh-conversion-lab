"use client";

import { useState } from "react";
import { useLanguage } from "@/app/core/providers";
import ExampleCard from "./example-card";
import "./examples-carousel.scss";

type Theme = "green" | "purple" | "blue";

const cards: { theme: Theme; exampleUrl: string }[] = [
  { theme: "green", exampleUrl: "https://conversion-helper-green.fly.dev" },
  { theme: "purple", exampleUrl: "https://conversion-helper-violet.fly.dev" },
  { theme: "blue", exampleUrl: "https://conversion-helper-blue.fly.dev" },
];

const slotForOffset = (offset: number) => {
  if (offset === 0) return "center";
  if (offset === 1) return "right";
  return "left";
};

export default function ExamplesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { t } = useLanguage();

  return (
    <section className="examples-carousel">
      <h2 className="examples-carousel__title">{t.examples.title}</h2>

      <div className="examples-carousel__stage">
        {cards.map((card, index) => {
          const offset = (index - activeIndex + cards.length) % cards.length;
          const slot = slotForOffset(offset);
          const isCenter = slot === "center";

          const activate = () => {
            if (isCenter) {
              window.open(card.exampleUrl, "_blank", "noopener,noreferrer");
            } else {
              setActiveIndex(index);
            }
          };

          return (
            <div
              key={card.theme}
              className={`examples-carousel__slot examples-carousel__slot--${slot}`}
              onClick={activate}
              role="button"
              tabIndex={0}
              aria-label={
                isCenter
                  ? `Open ${card.theme} landing page example`
                  : `Show ${card.theme} example`
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  activate();
                }
              }}
            >
              <ExampleCard theme={card.theme} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
