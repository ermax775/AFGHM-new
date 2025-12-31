"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Global Missions Network", logo: "GMN" },
  { name: "Faith Builders Int.", logo: "FBI" },
  { name: "Healing Waters", logo: "HW" },
  { name: "Grace Foundation", logo: "GF" },
  { name: "Unity in Christ", logo: "UIC" },
  { name: "Anchor Hope", logo: "AH" },
];

export function PartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-slate-400 font-bold text-sm uppercase tracking-[0.4em] mb-8">
            Our Trusted Partners & Supporters
          </h3>
        </motion.div>

        <div className="relative">
          {/* Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-16 items-center whitespace-nowrap py-4"
            >
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-primary text-xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                    {partner.logo}
                  </div>
                  <span className="text-slate-500 font-bold text-lg group-hover:text-slate-900 transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
