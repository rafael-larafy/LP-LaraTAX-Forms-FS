"use client";

import { motion, useInView, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const trustBadges = [
  { value: 200, prefix: "+R$", suffix: "M", label: "Recuperados", delay: 0 },
  { value: 450, prefix: "", suffix: "+", label: "Empresas atendidas", delay: 150 },
  { text: "Zero", label: "Risco p/ você" },
];

const deliverables = [
  {
    icon: "clock_arrow_up",
    title: "5 anos em 40 minutos.",
    lead: "Diagnóstico completo de oportunidades tributárias dos ",
    emphasis: "últimos 5 anos em até 40 minutos.",
  },
  {
    icon: "smart_toy",
    title: "O fim da era manual.",
    lead: "Automatização de recuperação de tributos feita por Inteligência Artificial. ",
    emphasis: "Sem trabalho manual.",
  },
];

function AnimatedCounter({ value, prefix = "", suffix = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 28,
    damping: 24,
    mass: 0.9,
  });
  const [count, setCount] = useState(0);

  useMotionValueEvent(springValue, "change", (latest) => {
    setCount(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) return;

    const timeout = window.setTimeout(() => {
      motionValue.set(value);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [delay, isInView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function HeroContent() {
  return (
    <div className="flex-1 max-w-[560px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-[18px] py-2 bg-cyan/10 border border-cyan/25 rounded-full text-[0.78rem] font-semibold text-cyan uppercase tracking-[1.5px] mb-7"
      >
        <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse-dot" />
        O que é o LaraTAX?
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="font-[var(--font-jakarta)] text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight mb-6"
      >
        Pare de perder tempo{" "}
        <span className="text-cyan relative">
          manipulando dados tributários
          <span className="absolute bottom-0.5 left-0 w-full h-[3px] bg-cyan/30 rounded-sm" />
        </span>
        .
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-[18px] py-2 text-[0.98rem] font-semibold text-White uppercase tracking-[1.5px] mb-5"
      >
        <span className="w-2.5 h-2.5 bg-cyan rounded-full animate-pulse-dot" />
        O que o LaraTAX entrega
      </motion.div>

      <div className="flex flex-col gap-4 mb-9 max-w-[480px]">
        {deliverables.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: 0.12 + index * 0.08,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent px-4 py-4 sm:px-5 sm:py-5 shadow-[0_0_0_1px_rgba(53,185,215,0.06)] transition-colors hover:border-cyan/25 hover:shadow-[0_0_32px_-12px_rgba(53,185,215,0.35)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan/60 via-cyan/25 to-transparent opacity-80"
            />
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan shadow-inner ring-1 ring-cyan/20 ring-inset transition-transform duration-300 group-hover:scale-[1.03]">
                <span className="material-symbols-outlined">{item.icon}</span>
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="font-[var(--font-jakarta)] text-base font-bold leading-snug tracking-tight text-white sm:text-[1.05rem]">
                  {item.title}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/65">
                  {item.lead}
                  <strong className="font-semibold text-white/92">{item.emphasis}</strong>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex gap-8"
      >
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex flex-col gap-1">
            <span className="font-[var(--font-jakarta)] text-[1.6rem] font-extrabold text-cyan">
              {badge.text ?? (
                <AnimatedCounter
                  value={badge.value}
                  prefix={badge.prefix}
                  suffix={badge.suffix}
                  delay={badge.delay ?? 0}
                />
              )}
            </span>
            <span className="text-[0.75rem] text-white/45 uppercase tracking-[1px] font-medium">
              {badge.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
