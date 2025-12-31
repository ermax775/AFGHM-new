import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { AnchorLogo } from "./AnchorLogo";
import { useLanguage } from "@/lib/LanguageContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.ministries"), href: "#ministries" },
    { name: t("nav.events"), href: "#events" },
    { name: t("nav.sermons"), href: "#sermons" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[hsl(220,40%,8%)]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <AnchorLogo
              size={45}
              className="text-primary transition-transform duration-300 group-hover:scale-110"
              animate={false}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white tracking-wide">
                AFGHM
              </h1>
              <p className="text-xs text-primary font-bold -mt-1">
                Anchor For Generations
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/80 hover:text-primary transition-colors duration-300 text-sm font-bold relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white group hover:bg-white/10 rounded-full px-4"
            >
              <Globe className="w-4 h-4 mr-2 text-primary group-hover:rotate-12 transition-transform" />
              <span className="font-bold">{language === "en" ? "AM" : "EN"}</span>
            </Button>

            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 rounded-xl">
              Give Online
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:bg-white/10 rounded-full px-3"
            >
              <span className="font-bold text-xs">{language === "en" ? "AM" : "EN"}</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-[hsl(220,40%,8%)] border-l border-white/10"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  <div className="flex items-center gap-3 mb-10">
                    <AnchorLogo
                      size={40}
                      className="text-primary"
                      animate={false}
                    />
                    <div>
                      <h2 className="text-lg font-bold text-white">AFGHM</h2>
                      <p className="text-xs text-primary font-bold">
                        Anchor For Generations
                      </p>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-primary transition-colors duration-300 text-lg font-bold py-2 border-b border-white/5"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto pb-8 flex flex-col gap-4">
                    <Button
                      variant="outline"
                      onClick={toggleLanguage}
                      className="w-full border-white/10 text-white hover:bg-white/5 font-bold"
                    >
                      <Globe className="w-4 h-4 mr-2 text-primary" />
                      Switch to {language === "en" ? "Amharic (አማርኛ)" : "English"}
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl">
                      Give Online
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

