"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnchorLogo } from "./AnchorLogo";

export function ScriptureBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-[hsl(220,40%,8%)]/90" />

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full opacity-10"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 C150,10 350,50 500,30 C650,10 850,50 1000,30 C1150,10 1350,50 1440,30 L1440,60 L0,60 Z"
            fill="hsl(32, 95%, 50%)"
            animate={{
              d: [
                "M0,30 C150,10 350,50 500,30 C650,10 850,50 1000,30 C1150,10 1350,50 1440,30 L1440,60 L0,60 Z",
                "M0,20 C150,40 350,20 500,40 C650,60 850,20 1000,40 C1150,60 1350,20 1440,40 L1440,60 L0,60 Z",
                "M0,30 C150,10 350,50 500,30 C650,10 850,50 1000,30 C1150,10 1350,50 1440,30 L1440,60 L0,60 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <AnchorLogo
            size={80}
            className="text-primary opacity-50"
            animate={false}
          />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-8">
            &ldquo;Therefore everyone who hears these words of mine and puts
            them into practice is like a wise man who built his house on the
            rock.&rdquo;
          </p>
          <footer className="text-primary text-xl md:text-2xl font-semibold">
            Matthew 7:24
          </footer>
        </motion.blockquote>

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-0.5 bg-primary mx-auto mt-10"
        />
      </div>
    </section>
  );
}
