"use client";

import { motion } from "framer-motion";

interface AnchorLogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export function AnchorLogo({
  className = "",
  size = 100,
  animate = true,
}: AnchorLogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Anchor ring at top */}
      <motion.circle
        cx="50"
        cy="18"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        variants={pathVariants}
      />

      {/* Anchor vertical shaft */}
      <motion.path
        d="M50 28 L50 85"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        variants={pathVariants}
      />

      {/* Horizontal crossbar */}
      <motion.path
        d="M35 40 L65 40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        variants={pathVariants}
      />

      {/* Left anchor arm */}
      <motion.path
        d="M50 85 Q30 85 20 70"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
      />

      {/* Right anchor arm */}
      <motion.path
        d="M50 85 Q70 85 80 70"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
      />

      {/* Left fluke */}
      <motion.path
        d="M20 70 L15 60 L25 68"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
      />

      {/* Right fluke */}
      <motion.path
        d="M80 70 L85 60 L75 68"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
      />
    </motion.svg>
  );
}
