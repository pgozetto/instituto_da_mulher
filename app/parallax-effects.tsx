"use client";

import { useEffect } from "react";

export function ParallaxEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      elements.forEach((element) => {
        const { top, height } = element.getBoundingClientRect();
        const speed = Number(element.dataset.parallax || 0.035);
        const distance = top + height / 2 - viewportCenter;
        const offset = Math.max(-28, Math.min(28, -distance * speed));
        element.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
      });
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      elements.forEach((element) => element.style.removeProperty("--parallax-y"));
    };
  }, []);

  return null;
}
