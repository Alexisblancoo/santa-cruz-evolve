import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-santa-cruz.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Avenida arbolada con palmeras y arquitectura de Santa Cruz de la Sierra"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/25 to-forest/70" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease }}
          className="display-xl text-primary-foreground text-[clamp(2.7rem,11vw,9rem)]"
        >
          <span className="block">Santa Cruz</span>
          <span className="block text-[color:oklch(0.88_0.09_150)]">Sostenible</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease }}
          className="mt-8 text-sm font-light tracking-[0.18em] text-primary-foreground/85 md:text-base"
        >
          Una ciudad que evoluciona.
        </motion.p>

        <motion.a
          href="#ciudad"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8, ease }}
          className="group mt-14 inline-flex items-center gap-3 border border-primary-foreground/60 px-9 py-3.5 text-[0.7rem] tracking-[0.26em] text-primary-foreground transition-all duration-500 hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          DESCUBRIR
          <span className="inline-block transition-transform duration-500 group-hover:translate-y-0.5">↓</span>
        </motion.a>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-primary-foreground/40"
      />
    </section>
  );
}
