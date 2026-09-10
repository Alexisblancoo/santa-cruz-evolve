import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "ESPACIOS", href: "#espacios" },
  { label: "DISTRITOS", href: "#distritos" },
  { label: "ADOPTA", href: "#adopta" },
  { label: "IMPACTO", href: "#impacto" },
];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out",
        solid
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10"
      >
        <a
          href="#top"
          className={[
            "font-display text-[0.7rem] tracking-[0.28em] transition-colors duration-500 md:text-xs",
            solid ? "text-primary" : "text-primary-foreground",
          ].join(" ")}
        >
          SANTA CRUZ SOSTENIBLE
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={[
                "group relative text-[0.68rem] tracking-[0.22em] transition-colors duration-500",
                solid ? "text-foreground/70 hover:text-primary" : "text-primary-foreground/80 hover:text-primary-foreground",
              ].join(" ")}
            >
              {l.label}
              <span
                className={[
                  "absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 group-hover:w-full",
                  solid ? "bg-leaf" : "bg-primary-foreground",
                ].join(" ")}
              />
            </a>
          ))}
          <a
            href="#ciudad"
            className={[
              "border px-5 py-2 text-[0.68rem] tracking-[0.22em] transition-all duration-500",
              solid
                ? "border-primary bg-primary text-primary-foreground hover:bg-forest"
                : "border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
            ].join(" ")}
          >
            DESCUBRIR
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={[
            "md:hidden transition-colors duration-500",
            solid || open ? "text-primary" : "text-primary-foreground",
          ].join(" ")}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {[...LINKS, { label: "DESCUBRIR", href: "#ciudad" }].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.22em] text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
