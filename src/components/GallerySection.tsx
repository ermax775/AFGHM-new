"use client";

import { motion, useInView } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
    title: "Community Worship",
    category: "Worship",
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop",
    title: "Youth Conference",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=800&fit=crop",
    title: "Outreach Program",
    category: "Ministry",
  },
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
    title: "Small Groups",
    category: "Community",
  },
  {
    url: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=800&fit=crop",
    title: "Bible Study",
    category: "Word",
  },
  {
    url: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=600&h=800&fit=crop",
    title: "Mission Trip",
    category: "Missions",
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(images.map((img) => img.category))];
  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary w-5 h-5" />
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Visual Witness
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Life at <span className="text-primary">AFGHM Ministry</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              key={image.url}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden break-inside-avoid"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {image.title}
                  </h3>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
