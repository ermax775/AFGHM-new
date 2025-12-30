"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { BookOpen, Globe, Heart, Users } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "Demonstrating Christ's unconditional love in all we do",
  },
  {
    icon: BookOpen,
    title: "Truth",
    description: "Standing firm on the unchanging Word of God",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building authentic relationships that strengthen faith",
  },
  {
    icon: Globe,
    title: "Mission",
    description: "Reaching the world with the Gospel of Jesus Christ",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(220,40%,13%)] mt-4 mb-6">
            Anchored in Faith,
            <br />
            <span className="text-gradient-gold">Growing in Grace</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(220,40%,13%)] mb-6">
              Our Mission
            </h3>
            <p className="text-[hsl(220,10%,40%)] text-lg leading-relaxed mb-6">
              Anchor For Generations Holistic Ministry (AFGHM) is dedicated to
              nurturing spiritual growth and building lasting foundations of
              faith. We believe in approaching ministry holistically – caring
              for the whole person: spirit, mind, and body.
            </p>
            <p className="text-[hsl(220,10%,40%)] text-lg leading-relaxed mb-6">
              Our name reflects our commitment to being an anchor of hope and
              stability in an ever-changing world, passing down the timeless
              truths of Scripture from generation to generation.
            </p>
            <p className="text-[hsl(220,10%,40%)] text-lg leading-relaxed">
              Founded on the principles of love, service, and unwavering faith,
              we strive to create a community where everyone can discover their
              purpose in Christ and grow together in His grace.
            </p>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop"
                alt="Church community worship"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,40%,13%)]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-xl italic">
                  &ldquo;Building bridges of faith across generations&rdquo;
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary rounded-lg -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[hsl(220,40%,13%)]">
            Our Core Values
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[hsl(220,40%,13%)] mb-3">
                {value.title}
              </h4>
              <p className="text-[hsl(220,10%,40%)]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
