import Image from "next/image";
import { BookingForm } from "./booking-form";
import { ParallaxEffects } from "./parallax-effects";
import { ProfessionalsGrid, type Professional } from "./professionals-grid";
import { Typewriter } from "../components/ui/typewriter";

const WHATSAPP_URL = "https://wa.me/5519996789337?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20no%20Instituto%20da%20Mulher%20de%20Piracicaba.";
const ADDRESS_URL = "https://www.google.com/maps/search/?api=1&query=Avenida%20Independ%C3%AAncia%20950%20sala%20123%20Piracicaba%20SP";

const services = [
  {
    icon: "✦",
    title: "Ginecologia",
    text: "Cuidado preventivo, exames de rotina e acompanhamento de cada fase da vida feminina.",
  },
  {
    icon: "◌",
    title: "Obstetrícia",
    text: "Atenção acolhedora durante a gestação e com acompanhamento próximo para você e seu bebê.",
  },
  {
    icon: "⌁",
    title: "Psicologia",
    text: "Um espaço seguro de escuta e apoio para a sua saúde emocional.",
  },
  {
    icon: "⟡",
    title: "Nutrição",
    text: "Orientação individualizada, com escolhas adequadas à sua rotina.",
  },
];

const procedures = [
  "Colocação e retirada de DIU",
  "MCP Formal",
  "Exame preventivo (rotina ginecológica, com foco na prevenção de doenças)",
  "Rotina ginecológica",
];

const professionals: Professional[] = [
  {
    image: "/images/medico.jpg",
    name: "Dr. Eduardo Henrique Salvador",
    registration: "CRM 111862",
    role: "Ginecologista e Obstetra",
    alt: "Dr. Eduardo Henrique Salvador, ginecologista obstetra",
    about: "Médico ginecologista e obstetra do Instituto da Mulher de Piracicaba.",
    work: "Acompanha a saúde da mulher em consultas de rotina, prevenção, planejamento familiar, gestação e pós-parto.",
    meaning: "Cuidar da saúde ginecológica e da gestação é acompanhar a mulher nos momentos mais importantes da vida, com segurança, escuta e respeito às suas escolhas.",
  },
  {
    image: "/images/giuliana-vitti.jpg",
    name: "Dra. Giuliana Mazziero Vitti",
    registration: "CRM 108554",
    role: "Ginecologista e obstetra",
    alt: "Dra. Giuliana Mazziero Vitti, ginecologista e obstetra",
    about: "Médica ginecologista e obstetra do Instituto da Mulher de Piracicaba.",
    work: "Realiza consultas ginecológicas, exames preventivos e o acompanhamento da gestação, do pré-natal ao pós-parto.",
    meaning: "Um olhar atento para cada fase da vida feminina ajuda a prevenir, orientar e trazer mais tranquilidade para as decisões sobre o próprio corpo.",
  },
  {
    image: "/images/ana-cristina.jpg",
    name: "Ana Cristina Vitor",
    registration: "CRP 06/158617",
    role: "Psicóloga",
    alt: "Ana Cristina Vitor, psicóloga",
    about: "Psicóloga do Instituto da Mulher de Piracicaba.",
    work: "Oferece atendimento psicológico com escuta qualificada para as questões emocionais de cada momento da vida.",
    meaning: "A saúde emocional faz parte da saúde da mulher. Ter um espaço seguro para falar e ser ouvida transforma a forma de viver cada fase.",
  },
  {
    image: "/images/kimberly.jpg",
    name: "Kimberly Machado Belluco",
    registration: "CRN 72717",
    role: "Nutricionista e personal trainer",
    alt: "Kimberly Machado Belluco, nutricionista e personal trainer",
    about: "Nutricionista e personal trainer do Instituto da Mulher de Piracicaba.",
    work: "Faz orientação nutricional individualizada e une alimentação e atividade física de acordo com a sua rotina e os seus objetivos.",
    meaning: "Comer bem e cuidar do corpo, sem fórmulas prontas, é uma forma de ter mais energia, bem-estar e saúde em cada fase da vida.",
  },
  {
    image: "/images/enfermeira.webp",
    name: "Deise Pessoa",
    registration: "COREN-SP 513368",
    role: "Enfermeira",
    alt: "Deise Pessoa, enfermeira",
    about: "Enfermeira do Instituto da Mulher de Piracicaba.",
    work: "Atua com consultoria em amamentação, cuidados com o recém-nascido, apresentação alimentar, taping terapêutico, furo humanizado, laserterapia e cone hindu.",
    meaning: "Apoiar a mãe e o bebê nos primeiros cuidados traz mais confiança e leveza para uma fase cheia de descobertas.",
  },
];

export default function Home() {
  return (
    <main className="antialiased">
      <ParallaxEffects />
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Ir para o início">
          <Image src="/images/logo.png" alt="Símbolo do Instituto da Mulher de Piracicaba" width={54} height={54} priority />
          <span>
            Instituto da Mulher
            <small>de Piracicaba</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#especialidades">Especialidades</a>
          <a href="#profissionais">Profissionais</a>
          <a href="#sobre">O Instituto</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="button button-primary header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Agendar consulta
          <ArrowIcon />
        </a>
      </header>

      <section id="inicio" className="hero section-shell">
        <div className="hero-copy">
          <h1 aria-label="Seu cuidado merece atenção por inteiro.">
            <span className="sr-only">Seu cuidado merece atenção por inteiro.</span>
            <Typewriter words={["Seu cuidado merece atenção por inteiro."]} speed={72} delayBetweenWords={2600} />
          </h1>
          <p>
            Uma clínica feita, pensada, programada e planejada para acompanhar você com escuta, tecnologia e uma equipe que entende cada fase da vida feminina.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Agendar consulta
              <ArrowIcon />
            </a>
            <a className="text-link" href="#especialidades">Conheça nossas especialidades <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shape hero-shape-one" />
          <div className="hero-shape hero-shape-two" />
          <div className="hero-photo image-hover" data-parallax="0.045">
            <Image
              src="/images/eduardo-giuliana.jpg"
              alt="Médico do Instituto da Mulher de Piracicaba em seu consultório"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 48vw"
            />
          </div>
        </div>
        <div className="hero-booking-card">
          <div className="booking-heading">
            <span className="eyebrow">Agende sua consulta</span>
            <h2>Vamos cuidar de você.</h2>
          </div>
          <BookingForm compact />
        </div>
      </section>

      <section id="especialidades" className="specialties section-shell section-space">
        <div className="section-heading centered-heading">
          <span className="eyebrow">Cuidado integrado</span>
          <h2>Especialidades que se encontram por você.</h2>
          <p>Uma equipe multidisciplinar para cuidar da sua saúde física e emocional de maneira completa.</p>
        </div>
        <div className="specialties-grid">
          {services.map((service) => (
            <article className="specialty-card" data-parallax="0.02" key={service.title}>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.title}`}>
                Agendar <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="profissionais" className="professionals-section section-shell section-space">
        <div className="section-heading centered-heading">
          <span className="eyebrow">Nossa equipe</span>
          <h2>Profissionais que cuidam de cada detalhe.</h2>
          <p>Uma equipe experiente para acompanhar você com conhecimento e acolhimento.</p>
        </div>
        <ProfessionalsGrid professionals={professionals} />
      </section>

      <section id="sobre" className="story-section section-space">
        <div className="section-shell story-layout">
          <div className="story-images">
            <div className="story-main-image image-hover" data-parallax="0.04">
              <Image src="/images/equipe-atualizada.png" alt="Equipe reunida no Instituto da Mulher de Piracicaba" fill sizes="(max-width: 900px) 90vw, 40vw" />
            </div>
            <div className="story-small-image image-hover" data-parallax="0.025">
              <Image src="/images/consultorio.jpg" alt="Detalhe da estrutura do Instituto da Mulher de Piracicaba" fill sizes="(max-width: 900px) 42vw, 20vw" />
            </div>
          </div>
          <div className="story-copy">
            <span className="eyebrow">Nossa história</span>
            <h2>Um espaço pensado para acolher todas as suas fases.</h2>
            <p>
              O Instituto da Mulher de Piracicaba nasceu de uma ideia simples: a saúde feminina merece um cuidado próximo, respeitoso e completo.
            </p>
            <p>
              Reunimos especialidades, experiência e uma estrutura preparada para que cada consulta seja vivida com mais tranquilidade, clareza e confiança.
            </p>
            <a className="text-link" href="#contato">Venha conhecer o Instituto <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="care-section section-shell section-space">
        <div className="care-photo image-hover" data-parallax="0.035">
          <Image src="/images/recepcao.jpg" alt="Recepção acolhedora do Instituto da Mulher de Piracicaba" fill sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="care-copy">
          <span className="eyebrow">Atendimentos e procedimentos</span>
          <h2>Da prevenção ao acompanhamento, com atenção a você.</h2>
          <p>Conte com uma clínica preparada para orientações, exames e tratamentos ginecológicos importantes para a sua jornada.</p>
          <ul>
            {procedures.map((procedure) => <li key={procedure}><CheckIcon />{procedure}</li>)}
          </ul>
          <a className="button button-outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Tirar uma dúvida no WhatsApp <ArrowIcon /></a>
        </div>
      </section>

      <section id="estrutura" className="gallery-section section-space">
        <div className="section-shell">
          <div className="gallery-header">
            <div className="section-heading">
              <span className="eyebrow">Conheça nosso espaço</span>
              <h2>Um ambiente leve para você se sentir bem.</h2>
            </div>
            <p>Localizado em uma região de fácil acesso em Piracicaba, o Instituto foi pensado para oferecer conforto desde a chegada.</p>
          </div>
          <div className="gallery-highlights">
            <p className="gallery-quote">Instituto da Mulher em Piracicaba: saúde feminina com <strong>escuta, confiança e acolhimento</strong>.</p>
            <p>Saúde feminina personalizada para cada fase da vida.</p>
            <p>Saúde feminina individualizada e com acompanhamento próximo em cada fase da vida.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item image-hover" data-parallax="0.025"><Image src="/images/recepcionista-1.jpg" alt="Atendimento na recepção do Instituto" fill sizes="(max-width: 900px) 50vw, 25vw" /></div>
            <div className="gallery-item image-hover" data-parallax="0.035"><Image src="/images/recepcionista-2.jpg" alt="Equipe de atendimento do Instituto da Mulher" fill sizes="(max-width: 900px) 50vw, 25vw" /></div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact-section section-space">
        <div className="section-shell contact-card" data-parallax="0.018">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light">Seu próximo passo pode ser agora</span>
            <h2>Vamos conversar sobre o seu cuidado?</h2>
            <p>Fale com a nossa equipe pelo WhatsApp e encontre o melhor horário para a sua consulta.</p>
            <div className="contact-details">
              <a href="tel:+5519996789337"><PhoneIcon />(19) 99678-9337</a>
              <a href={ADDRESS_URL} target="_blank" rel="noreferrer"><PinIcon />Avenida Independência, 950, sala 123<br /><span>Piracicaba - SP, 13419-155</span></a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <BookingForm />
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="" width={46} height={46} />
          <span>Instituto da Mulher<small>de Piracicaba</small></span>
        </div>
        <p>Saúde feminina com escuta, confiança e acolhimento.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/institutodamulherpiracicaba" target="_blank" rel="noreferrer" aria-label="Instagram do Instituto da Mulher de Piracicaba">
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <a href="https://web.facebook.com/institutodamulherdepiracicaba/" target="_blank" rel="noreferrer" aria-label="Facebook do Instituto da Mulher de Piracicaba">
            <FacebookIcon />
            <span>Facebook</span>
          </a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Agendar consulta pelo WhatsApp">
        <WhatsAppIcon />
        <span>Agendar consulta</span>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Instituto da Mulher de Piracicaba",
            description: "Clínica especializada em saúde da mulher em Piracicaba, com ginecologia, obstetrícia, psicologia e nutrição.",
            telephone: "+55 19 99678-9337",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avenida Independência, 950, sala 123",
              addressLocality: "Piracicaba",
              addressRegion: "SP",
              postalCode: "13419-155",
              addressCountry: "BR"
            },
            sameAs: ["https://www.instagram.com/institutodamulherpiracicaba", "https://web.facebook.com/institutodamulherdepiracicaba/"]
          }),
        }}
      />
    </main>
  );
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.75 10h12.5M10.75 4.5 16.25 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" /><circle cx="12" cy="12" r="4.1" /><circle cx="17.55" cy="6.55" r=".9" fill="currentColor" stroke="none" /></svg>;
}

function FacebookIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M13.8 21v-8h2.7l.4-3.1h-3.1V7.92c0-.9.25-1.52 1.57-1.52h1.67V3.62c-.29-.04-1.28-.12-2.44-.12-2.42 0-4.08 1.48-4.08 4.2v2.2H7.78V13h2.74v8h3.28Z" /></svg>;
}

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="m4 10 3.5 3.5L16 5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12.8 19.8 19.8 0 0 1 2.08 4.13 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L7.97 9.74a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.5 11.6a8.48 8.48 0 0 1-12.53 7.48L3.5 20.5l1.42-4.23A8.5 8.5 0 1 1 20.5 11.6Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.35 7.65c.2-.45.41-.46.62-.47h.53c.16 0 .38.06.48.35l.67 1.59c.08.2.04.4-.08.55l-.42.5c-.12.12-.1.3 0 .42.37.64.97 1.18 1.64 1.5.15.08.3.07.42-.04l.63-.55c.14-.11.33-.14.5-.07l1.53.7c.24.1.3.27.3.42 0 .16-.08.86-.52 1.03-.4.15-.79.26-1.2.18-2.2-.45-4.62-2.55-5.42-4.58-.3-.75-.16-1.39.06-1.84Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
