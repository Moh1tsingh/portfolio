"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../lib/animations";

export default function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
