"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnchorLogo } from "./AnchorLogo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Ministries", href: "#ministries" },
  { name: "Events", href: "#events" },
  { name: "Sermons", href: "#sermons" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
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
              <p className="text-xs text-primary font-medium -mt-1">
                Anchor For Generations
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/80 hover:text-primary transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
              Give Online
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
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
                    <p className="text-xs text-primary">
                      Anchor For Generations
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white/80 hover:text-primary transition-colors duration-300 text-lg font-medium py-2 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Give Online
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
