"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.6, ease: "easeOut"}}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:px-15 border-b border-cyan/10 bg-nany/85 backdrop-blur-[20px]">
      <Image src="/logo.png" alt="LaraTAX Logo" width={160} height={40} />
      <div className="text-[0.7rem] uppercase tracking-[2px] text-white/50 font-medium">
        Consultoria Tributária
      </div>
    </motion.nav>
  );
}