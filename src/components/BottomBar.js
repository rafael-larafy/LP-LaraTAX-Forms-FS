"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "Segurança jurídica total",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Sem custo até encontrar resultados",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BottomBar() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative z-[1] flex items-center justify-center gap-10 max-md:gap-6 px-6 py-7 md:px-15 border-t border-cyan/[0.08] flex-wrap"
    >
      {items.map((item) => (
        <motion.div
          key={item.label}
          variants={itemVariants}
          className="flex items-center gap-2.5 text-[0.82rem] text-white/40"
        >
          <div className="w-9 h-9 flex items-center justify-center bg-cyan/[0.08] rounded-lg text-cyan shrink-0">
            {item.icon}
          </div>
          {item.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
