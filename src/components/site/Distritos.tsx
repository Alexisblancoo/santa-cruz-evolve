import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DISTRITOS } from "@/data/distritos";
import { Reveal } from "@/components/site/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function Distritos() {
  const [activo, setActivo] = useState(1);
  const distrito = DISTRITOS[activo - 1] ?? DISTRITOS[0]!;

  return (
    <section id="distritos" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="rule-green" />
            <span className="text-[0.68rem] tracking-[0.26em] text-muted-foreground">TERRITORIO</span>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7" delay={0.1}>
            <h2 className="display-xl text-foreground text-[clamp(2rem,6.5vw,5rem)]">
              Distritos
              <br />
              <span className="text-primary">municipales.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.2}>
            <p className="max-w-md text-base leading-relaxed font-light text-muted-foreground md:ml-auto">
              Santa Cruz se organiza en quince distritos. Explora cada uno y descubre los espacios que podemos
              transformar juntos.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-12">
          {/* Plano del distrito seleccionado */}
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="border border-border bg-background p-4 md:p-8">
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <span className="font-display text-2xl font-semibold text-primary md:text-3xl">
                  D-{String(distrito.numero).padStart(2, "0")}
                </span>
                <span className="text-[0.66rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {distrito.nombre}
                </span>
              </div>
              <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-mist">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={distrito.numero}
                    src={distrito.plano}
                    alt={`Plano oficial del ${distrito.nombre} de Santa Cruz de la Sierra`}
                    width={900}
                    height={675}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.7, ease }}
                    className="h-full w-full object-contain"
                  />
                </AnimatePresence>
              </div>
              <p className="mt-4 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                Fuente: Gobierno Autónomo Municipal de Santa Cruz de la Sierra
              </p>
            </div>
          </Reveal>

          {/* Lista seleccionable */}
          <Reveal className="md:col-span-5" delay={0.2}>
            <ul role="listbox" aria-label="Distritos municipales" className="grid grid-cols-3 gap-px border border-border bg-border md:grid-cols-1 md:border-0 md:bg-transparent">
              {DISTRITOS.map((d) => {
                const seleccionado = d.numero === activo;
                return (
                  <li key={d.numero}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={seleccionado}
                      onClick={() => setActivo(d.numero)}
                      className={[
                        "group flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors duration-500 md:border-b md:border-border md:px-2 md:py-3",
                        seleccionado
                          ? "bg-primary text-primary-foreground md:bg-transparent md:text-primary"
                          : "bg-background text-foreground/70 hover:text-primary",
                      ].join(" ")}
                    >
                      <span className="flex items-baseline gap-3 md:gap-5">
                        <span
                          className={[
                            "font-display text-sm font-semibold tabular-nums md:text-base",
                            seleccionado ? "text-primary-foreground md:text-primary" : "text-muted-foreground group-hover:text-primary",
                          ].join(" ")}
                        >
                          {String(d.numero).padStart(2, "0")}
                        </span>
                        <span className="hidden text-[0.66rem] tracking-[0.2em] uppercase md:inline">
                          {d.nombre}
                        </span>
                        <span className="text-[0.62rem] tracking-[0.14em] uppercase md:hidden">D-{d.numero}</span>
                      </span>
                      <span
                        className={[
                          "hidden h-px flex-1 transition-colors duration-500 md:block",
                          seleccionado ? "bg-leaf" : "bg-transparent",
                        ].join(" ")}
                      />
                      <span
                        aria-hidden="true"
                        className={[
                          "hidden text-xs transition-all duration-500 md:inline",
                          seleccionado ? "translate-x-0 text-primary opacity-100" : "-translate-x-1 opacity-0",
                        ].join(" ")}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
