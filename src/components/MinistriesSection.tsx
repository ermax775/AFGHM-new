import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  Baby,
  GraduationCap,
  HeartHandshake,
  Music,
  Users,
  Utensils,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function MinistriesSection() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ministries = [
    {
      icon: Users,
      title: t("nav.ministries"), // Or a more specific key if I had one
      description: t("about.mission.desc"), // Placeholder
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: GraduationCap,
      title: t("ministries.youth"),
      description: t("ministries.youth.desc"),
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Music,
      title: t("ministries.worship"),
      description: t("ministries.worship.desc"),
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: HeartHandshake,
      title: t("ministries.outreach"),
      description: t("ministries.outreach.desc"),
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section
      id="ministries"
      className="py-24 gradient-navy relative overflow-hidden"
    >
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
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
            {t("nav.join")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            {t("ministries.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Ministry cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20`}
              >
                <ministry.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {ministry.title}
              </h3>
              <p className="text-white/60 mb-8 text-lg font-medium leading-relaxed">
                {ministry.description}
              </p>

              {/* Learn more link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-bold hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${ministry.color} blur-3xl -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-7 rounded-xl text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            Explore All Ministries
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
