"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import "./parallax.scss";

export type ParallaxType =
  | "slide-left"
  | "slide-right"
  | "slide-top"
  | "slide-bottom"
  | "scale"
  | "opacity";

interface ParallaxProps {
  /** Animation preset. Default: "slide-bottom" */
  type?: ParallaxType;
  /** Animation duration (ms). Default: 700 */
  duration?: number;
  /** Delay before the animation starts (ms). Default: 0 */
  delay?: number;
  /** Intersection threshold (0–1). Default: 0.15 */
  threshold?: number;
  /** If true, animate only once on first entry. Default: false (replays on every entry). */
  once?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Parallax({
  type = "slide-bottom",
  duration = 700,
  delay = 0,
  threshold = 0.15,
  once = false,
  className = "",
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const combinedClassName = [
    "parallax",
    `parallax--${type}`,
    inView && "parallax--in-view",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={combinedClassName}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
