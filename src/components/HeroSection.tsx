import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { AnchorLogo } from "./AnchorLogo";
import { useLanguage } from "@/lib/LanguageContext";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: string;
      top: string;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,40%,6%)] via-[hsl(220,40%,10%)] to-[hsl(220,40%,8%)]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light rays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] bg-gradient-to-b from-primary/20 via-transparent to-transparent"
          style={{
            clipPath: "polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)",
          }}
        />

        {/* Floating particles */}
        {mounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      {/* Ocean waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-32"
          style={{
            background:
              "linear-gradient(to top, hsl(220, 40%, 12%), transparent)",
          }}
        />
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-20 opacity-20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z"
            fill="hsl(32, 95%, 50%)"
            animate={{
              d: [
                "M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z",
                "M0,40 C150,70 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1350,30 1440,60 L1440,100 L0,100 Z",
                "M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pb-24">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 animate-glow">
              <AnchorLogo
                size={140}
                className="text-primary blur-lg opacity-50"
              />
            </div>
            <AnchorLogo
              size={140}
              className="text-primary relative animate-float"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase">
            {t("hero.welcome")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          {t("hero.title")}
          <br />
          <span className="text-gradient-gold">{t("hero.subtitle")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-medium"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-7 rounded-xl text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
          >
            {t("hero.cta.join")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white bg-white/5 hover:bg-white/10 font-bold px-8 py-7 rounded-xl text-lg group backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2 text-primary group-hover:scale-125 transition-transform" />
            {t("hero.cta.watch")}
          </Button>
        </motion.div>

        {/* Scripture verse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 glass rounded-2xl px-8 py-6 max-w-xl mx-auto"
        >
          <p className="text-white/90 italic text-lg leading-relaxed">
            &ldquo;{t("hero.verse")}&rdquo;
          </p>
          <p className="text-primary font-bold mt-2">{t("hero.verse.ref")}</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-bold">
            {t("hero.scroll")}
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
