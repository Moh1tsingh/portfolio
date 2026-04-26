"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function AnimatedItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
