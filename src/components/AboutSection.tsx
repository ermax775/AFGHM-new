import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { BookOpen, Globe, Heart, Users, Star, Target } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function AboutSection() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Heart,
      title: t("about.values.v1"),
      description: "Demonstrating Christ's unconditional love in all we do",
    },
    {
      icon: Target,
      title: t("about.values.v2"),
      description: "Building authentic relationships that strengthen faith",
    },
    {
      icon: Star,
      title: t("about.values.v3"),
      description: "Standing firm on the unchanging Word of God",
    },
  ];

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
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
            {t("section.about.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Anchored in Faith,
            <br />
            <span className="text-gradient-gold">Growing in Grace</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Target className="text-primary w-8 h-8" />
                  {t("about.mission.title")}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {t("about.mission.desc")}
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Star className="text-primary w-8 h-8" />
                  {t("about.vision.title")}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {t("about.vision.desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop"
                alt="Church community worship"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <p className="text-white text-2xl font-bold italic leading-tight">
                  &ldquo;Building bridges of faith across generations&rdquo;
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-8 border-primary/20 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900">
            {t("about.values.title")}
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <value.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
