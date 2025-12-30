"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Baby, Music, Utensils, GraduationCap, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const ministries = [
  {
    icon: Users,
    title: "Men's Fellowship",
    description: "Building godly men through discipleship, accountability, and brotherhood.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: HeartHandshake,
    title: "Women's Ministry",
    description: "Empowering women to grow in faith and support one another in love.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Baby,
    title: "Children's Church",
    description: "Laying spiritual foundations for our youngest believers with joy and creativity.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Youth Ministry",
    description: "Equipping the next generation to stand firm in their faith.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Music,
    title: "Worship Team",
    description: "Leading the congregation into God's presence through praise and worship.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Utensils,
    title: "Outreach & Care",
    description: "Serving our community with compassion through food drives and support programs.",
    color: "from-orange-500 to-red-600",
  },
];

export function MinistriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ministries" className="py-24 gradient-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Ministries
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover the many ways you can connect, grow, and serve within our church family.
            There&apos;s a place for everyone at AFGHM.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Ministry cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <ministry.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {ministry.title}
              </h3>
              <p className="text-white/60 mb-6">{ministry.description}</p>

              {/* Learn more link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${ministry.color} blur-xl -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-6 text-lg shadow-lg shadow-primary/25"
          >
            Explore All Ministries
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
