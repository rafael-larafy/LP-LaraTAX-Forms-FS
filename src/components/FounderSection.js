"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="relative z-[1] px-7 md:px-15 py-24 md:py-10">
      <div className="mx-auto flex max-w-[1180px] items-center gap-12 max-md:flex-col max-md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-[480px]"
        >
          <Image
            src="/Frame 4-3.png"
            alt="Waldir de Lara, criador do LaraTAX"
            width={1452}
            height={1266}
            className="h-auto w-full object-contain"
            priority={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex-1 max-w-[600px]"
        >
          <div className="inline-flex items-center gap-2 px-[18px] py-2 bg-cyan/10 border border-cyan/25 rounded-full text-[0.78rem] font-semibold text-cyan uppercase tracking-[1.5px] mb-7">
            <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse-dot" />
            Quem está por trás
          </div>

          <h2 className="font-[var(--font-jakarta)] text-[clamp(2rem,3.6vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight mb-6">
            Waldir de{" "}
            <span className="text-cyan relative">
              Lara
              <span className="absolute bottom-0.5 left-0 w-full h-[3px] bg-cyan/30 rounded-sm" />
            </span>
          </h2>

          <p className="text-[1.0125rem] leading-relaxed text-white/75">
            Criador do LaraTAX e reconhecido como uma das maiores mentes
            tributárias do Brasil, Waldir reúne{" "}
            <strong className="font-semibold text-white">
              mais de 20 anos de experiência
            </strong>{" "}
            decodificando o sistema fiscal e transformando desafios complexos em
            soluções práticas e mensuráveis. Sua visão deu origem ao LaraTAX,
            um software que automatiza processos, cruza dados com IA e
            identifica oportunidades tributárias com{" "}
            <strong className="font-semibold text-white">
              precisão inédita
            </strong>
            . Waldir segue liderando a evolução da plataforma, impulsionando uma
            nova era de consultoria tributária baseada em tecnologia,
            inteligência e alta performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
