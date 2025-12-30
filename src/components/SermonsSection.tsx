"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const sermons = [
  {
    title: "Anchored in Hope",
    speaker: "Pastor James Mitchell",
    date: "December 29, 2024",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    series: "The Anchor Series",
  },
  {
    title: "Foundations That Last",
    speaker: "Pastor James Mitchell",
    date: "December 22, 2024",
    duration: "52 min",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop",
    series: "The Anchor Series",
  },
  {
    title: "Walking in Faith",
    speaker: "Pastor Sarah Johnson",
    date: "December 15, 2024",
    duration: "38 min",
    image: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?w=600&h=400&fit=crop",
    series: "Journey of Faith",
  },
];

export function SermonsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sermons" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Watch & Listen
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(220,40%,13%)] mt-4 mb-6">
            Recent Sermons
          </h2>
          <p className="text-[hsl(220,10%,40%)] text-lg max-w-2xl mx-auto">
            Missed a service? Catch up on our latest messages and be encouraged by God&apos;s Word.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Sermons grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center cursor-pointer shadow-xl"
                  >
                    <Play className="w-7 h-7 text-white ml-1" />
                  </motion.div>
                </div>
                {/* Series badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[hsl(220,40%,13%)] px-3 py-1 rounded-full text-sm font-medium">
                  {sermon.series}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[hsl(220,40%,13%)] mb-2 group-hover:text-primary transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-[hsl(220,10%,40%)] text-sm mb-4">{sermon.speaker}</p>
                <div className="flex items-center gap-4 text-sm text-[hsl(220,10%,50%)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-6 text-lg shadow-lg shadow-primary/25"
          >
            View All Sermons
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
