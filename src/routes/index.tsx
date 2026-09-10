import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Handshake, LineChart, Trees } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";

import ciudadImg from "@/assets/ciudad.jpg";
import espacio1 from "@/assets/espacio-1.jpg";
import espacio2 from "@/assets/espacio-2.jpg";
import adoptaImg from "@/assets/adopta.jpg";
import mapaImg from "@/assets/mapa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santa Cruz Sostenible — Una ciudad que evoluciona" },
      {
        name: "description",
        content:
          "Santa Cruz Sostenible: una visión moderna de la ciudad, con espacios públicos cuidados, más áreas verdes y aliados que transforman.",
      },
      { property: "og:title", content: "Santa Cruz Sostenible" },
      {
        property: "og:description",
        content: "Una ciudad que evoluciona: espacios públicos, naturaleza y futuro para Santa Cruz de la Sierra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function CityBand() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="ciudad" ref={ref} className="relative h-[92svh] w-full overflow-hidden bg-forest">
      <motion.img
        style={{ y, scale: 1.14 }}
        src={ciudadImg}
        alt="Vista aérea de una plaza arbolada rodeada de arquitectura urbana en Santa Cruz"
        width={1600}
        height={1008}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/45" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <h2 className="display-xl text-primary-foreground text-[clamp(2.2rem,7vw,5.5rem)]">
            Nuestra
            <br />
            ciudad.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {["ESPACIOS", "NATURALEZA", "COMUNIDAD", "FUTURO"].map((t, i) => (
            <Reveal key={t} delay={i * 0.12}>
              <div className="border-t border-primary-foreground/30 pt-4">
                <span className="text-[0.68rem] tracking-[0.24em] text-primary-foreground/85">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />

      {/* UNA CIUDAD. UN FUTURO. */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 pt-28 md:px-10 md:pt-44">
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="rule-green" />
              <span className="text-[0.68rem] tracking-[0.26em] text-muted-foreground">NUESTRA VISIÓN</span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7" delay={0.1}>
              <h2 className="display-xl text-foreground text-[clamp(2.2rem,7.5vw,6rem)]">
                Una ciudad.
                <br />
                <span className="text-primary">Un futuro.</span>
              </h2>
            </Reveal>
            <Reveal className="md:col-span-5 md:pt-8" delay={0.24}>
              <p className="max-w-xl text-base leading-relaxed font-light text-muted-foreground md:text-lg">
                Santa Cruz tiene la oportunidad de crecer de una manera diferente: cuidando sus espacios públicos,
                fortaleciendo sus áreas verdes y construyendo una ciudad más sostenible.
              </p>
              <ul className="mt-10 space-y-4">
                {["Más áreas verdes por barrio", "Espacios públicos cuidados", "Aliados que transforman"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span aria-hidden="true" className="h-px w-6 bg-leaf" />
                      <span className="text-[0.7rem] tracking-[0.22em] text-foreground/80 uppercase">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          <div className="mt-24 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
            {[
              {
                icon: Trees,
                number: "01",
                title: "Espacios",
                text: "Recuperar y cuidar los lugares que compartimos.",
              },
              {
                icon: Handshake,
                number: "02",
                title: "Alianzas",
                text: "Conectar empresas, instituciones y comunidad.",
              },
              {
                icon: LineChart,
                number: "03",
                title: "Impacto",
                text: "Hacer visible cada avance de la ciudad.",
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.1}>
                  <article className="group flex min-h-72 flex-col justify-between gap-14 border-b border-border px-1 py-10 transition-colors duration-700 last:border-b-0 hover:bg-secondary md:border-b-0 md:px-10 md:py-14 first:md:pl-0 last:md:pr-0">
                    <div className="flex items-start justify-between">
                      <div className="grid size-12 place-items-center border border-border bg-mist text-primary transition-colors duration-700 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon aria-hidden="true" strokeWidth={1.4} className="size-6" />
                      </div>
                      <span className="font-display text-4xl font-light text-primary/20 transition-colors duration-700 group-hover:text-primary/60 md:text-5xl">
                        {pillar.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-semibold text-foreground">{pillar.title}</h3>
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Cinta tipográfica en movimiento */}
        <div aria-hidden="true" className="mt-20 border-b border-border py-8 md:mt-28 md:py-10">
          <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-10">
                {["Espacios públicos", "Áreas verdes", "Comunidad", "Futuro", "Santa Cruz"].map((word) => (
                  <span key={word} className="flex items-center gap-10">
                    <span className="display-xl text-4xl text-primary/15 md:text-6xl">{word}</span>
                    <span className="size-2 rounded-full bg-leaf/40" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CityBand />

      {/* ESPACIOS */}
      <section id="espacios" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <h2 className="display-xl text-foreground text-[clamp(2rem,6.5vw,5rem)]">
            Espacios
            <br />
            <span className="text-primary">que nos pertenecen a todos.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-8" delay={0.05}>
            <figure className="overflow-hidden">
              <img
                src={espacio1}
                alt="Alameda con palmeras, bancas y personas caminando"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.18}>
            <figure className="h-full overflow-hidden">
              <img
                src={espacio2}
                alt="Jardín urbano con vegetación tropical y jardineras de concreto"
                width={1000}
                height={1300}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ADOPTA */}
      <section id="adopta" className="relative overflow-hidden bg-primary">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-44">
          <div>
            <Reveal>
              <h2 className="display-xl text-primary-foreground text-[clamp(2.2rem,6.5vw,5rem)]">
                Adopta.
                <br />
                Cuida.
                <br />
                Transforma.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-10 max-w-md text-base leading-relaxed font-light text-primary-foreground/80">
                Empresas e instituciones pueden convertirse en aliados de Santa Cruz y contribuir a la recuperación y
                cuidado de nuestros espacios públicos.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <a
                href="#impacto"
                className="mt-12 inline-block border border-background bg-background px-8 py-3.5 text-[0.7rem] tracking-[0.24em] text-primary transition-all duration-500 hover:bg-transparent hover:text-primary-foreground"
              >
                CONOCE EL PROGRAMA
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <img
              src={adoptaImg}
              alt="Personas plantando árboles en una plaza de la ciudad"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* MAPA */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <span className="rule-green" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 display-xl text-foreground text-[clamp(1.8rem,5.5vw,4rem)]">Descubre los espacios.</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 border border-border bg-mist p-4 md:p-10">
            <img
              src={mapaImg}
              alt="Mapa esquemático de Santa Cruz con anillos y áreas verdes destacadas"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full object-contain"
            />
          </div>
        </Reveal>
      </section>

      {/* IMPACTO */}
      <section id="impacto" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display-xl text-foreground text-[clamp(1.6rem,4.5vw,3rem)]">Impacto</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "—", l: "ÁREAS PÚBLICAS" },
              { v: "—", l: "EMPRESAS" },
              { v: "—", l: "ESPACIOS RECUPERADOS" },
              { v: "—", l: "IMPACTO" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <div className="font-display text-5xl font-light text-primary md:text-6xl">{s.v}</div>
                  <div className="mt-4 text-[0.66rem] tracking-[0.24em] text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-10 text-[0.66rem] tracking-[0.22em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <span className="text-primary">SANTA CRUZ SOSTENIBLE</span>
          <span>UNA CIUDAD QUE EVOLUCIONA</span>
        </div>
      </footer>
    </main>
  );
}
