"use client";

import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    content:
      "AFGHM Ministry has been a true anchor for my family. The spiritual growth and community support we've found here is life-changing.",
    author: "Sarah Johnson",
    role: "Community Member",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    content:
      "The teachings are profound and deeply rooted in the Word. I've found a sense of purpose and belonging that I never knew was possible.",
    author: "Michael Chen",
    role: "Youth Leader",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    content:
      "A warm, welcoming place where everyone feels like family. The outreach programs are making a real difference in our city.",
    author: "David Wilson",
    role: "Volunteer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 gradient-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Voices of Our <span className="text-gradient-gold">Community</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="relative z-10">
                <p className="text-white/80 text-lg italic mb-8 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      {testimonial.author}
                    </h4>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
