"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Professional {
  image: string;
  name: string;
  registration?: string;
  role: string;
  alt: string;
  about: string;
  work: string;
  meaning: string;
}

const FADE_MS = 280;

export function ProfessionalsGrid({ professionals }: { professionals: Professional[] }) {
  const [selected, setSelected] = useState<Professional | null>(null);
  const [visible, setVisible] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  function open(professional: Professional, trigger: HTMLButtonElement) {
    lastTrigger.current = trigger;
    setSelected(professional);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function close() {
    setVisible(false);
    setTimeout(() => {
      setSelected(null);
      lastTrigger.current?.focus();
    }, FADE_MS);
  }

  useEffect(() => {
    if (!selected) return;

    closeButton.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="professionals-grid">
        {professionals.map((professional) => (
          <article className="professional-card" data-parallax="0.018" key={professional.name}>
            <button
              className="professional-card-button"
              type="button"
              onClick={(event) => open(professional, event.currentTarget)}
              aria-label={`Conhecer ${professional.name}, ${professional.role}`}
            >
              <div className="professional-photo image-hover">
                <Image src={professional.image} alt={professional.alt} fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <div className="professional-card-copy">
                <h3>{professional.name}</h3>
                <p className="professional-role">{professional.role}</p>
                {professional.registration && <p className="professional-registration">{professional.registration}</p>}
                <span className="professional-more">Conhecer <span aria-hidden="true">→</span></span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className={`professional-modal${visible ? " is-visible" : ""}`}
          onClick={(event) => event.target === event.currentTarget && close()}
        >
          <div className="professional-modal-panel" role="dialog" aria-modal="true" aria-labelledby="professional-modal-title">
            <button ref={closeButton} className="professional-modal-close" type="button" onClick={close} aria-label="Fechar apresentação">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" /></svg>
            </button>
            <div className="professional-modal-photo">
              <Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 720px) 100vw, 40vw" />
            </div>
            <div className="professional-modal-copy">
              <p className="professional-role">{selected.role}</p>
              <h3 id="professional-modal-title">{selected.name}</h3>
              {selected.registration && <p className="professional-registration">{selected.registration}</p>}
              <h4>Quem é</h4>
              <p>{selected.about}</p>
              <h4>O que faz</h4>
              <p>{selected.work}</p>
              <h4>O significado deste cuidado</h4>
              <p>{selected.meaning}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
