"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function BackgroundImage() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, {
    stiffness: 80,
    damping: 30,
    mass: 0.6,
  });

  const y = useTransform(smoothScroll, [0, 1500], ["0%", "12%"]);
  const scale = useTransform(smoothScroll, [0, 1500], [1, 1.08]);

  return (
    <motion.div
      className="bg-image"
      style={{ y, scale }}
      aria-hidden
    />
  );
}
