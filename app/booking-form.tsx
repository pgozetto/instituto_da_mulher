"use client";

import { FormEvent, useState } from "react";

const WHATSAPP = "5519996789337";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("Ginecologia");

  function schedule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const greeting = name.trim() ? `Olá, meu nome é ${name.trim()}.` : "Olá!";
    const text = `${greeting} Gostaria de agendar uma consulta de ${specialty} no Instituto da Mulher de Piracicaba.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={schedule} className={compact ? "booking-form booking-form--compact" : "booking-form"}>
      <div className="booking-field">
        <label htmlFor={compact ? "name-compact" : "name"}>Como podemos te chamar?</label>
        <input
          id={compact ? "name-compact" : "name"}
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
        />
      </div>
      <div className="booking-field">
        <label htmlFor={compact ? "specialty-compact" : "specialty"}>Qual atendimento procura?</label>
        <select
          id={compact ? "specialty-compact" : "specialty"}
          name="specialty"
          value={specialty}
          onChange={(event) => setSpecialty(event.target.value)}
        >
          <option>Ginecologia</option>
          <option>Obstetrícia</option>
          <option>Psicologia</option>
          <option>Nutrição</option>
          <option>Colocação ou retirada de DIU</option>
          <option>Implanon</option>
          <option>Reposição hormonal</option>
        </select>
      </div>
      <button className="button button-primary booking-submit" type="submit">
        Agendar pelo WhatsApp
        <ArrowIcon />
      </button>
    </form>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.75 10h12.5M10.75 4.5 16.25 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
