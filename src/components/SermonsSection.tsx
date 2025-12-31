import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Calendar, Clock, Download, Play, Share2, X } from "lucide-react";
import { useRef, useState } from "react";

const sermons = [
  {
    id: 1,
    title: "Anchored in Hope",
    speaker: "Pastor James Mitchell",
    date: "December 29, 2024",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    series: "The Anchor Series",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 2,
    title: "Foundations That Last",
    speaker: "Pastor James Mitchell",
    date: "December 22, 2024",
    duration: "52 min",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=500&fit=crop",
    series: "The Anchor Series",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 3,
    title: "Walking in Faith",
    speaker: "Pastor Sarah Johnson",
    date: "December 15, 2024",
    duration: "38 min",
    image:
      "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?w=800&h=500&fit=crop",
    series: "Journey of Faith",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
];

export function SermonsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSermon, setActiveSermon] = useState<(typeof sermons)[0] | null>(
    null,
  );

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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Recent Sermons
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Missed a service? Catch up on our latest messages and be encouraged
            by God&apos;s Word.
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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Thumbnail */}
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => setActiveSermon(sermon)}
              >
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-7 h-7 text-white ml-1" />
                  </motion.div>
                </div>
                {/* Series badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {sermon.series}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Latest message
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {sermon.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 font-medium italic">
                  with {sermon.speaker}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold uppercase">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{sermon.duration}</span>
                    </div>
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
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            Visit Message Archive
            <Share2 className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
          </Button>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <Dialog open={!!activeSermon} onOpenChange={() => setActiveSermon(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none rounded-3xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{activeSermon?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative pt-[56.25%]">
            {activeSermon && (
              <iframe
                title={activeSermon.title}
                src={`${activeSermon.videoUrl}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="p-6 bg-slate-950 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-white text-xl font-bold mb-1">
                {activeSermon?.title}
              </h4>
              <p className="text-white/60 text-sm">{activeSermon?.speaker}</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resources
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
