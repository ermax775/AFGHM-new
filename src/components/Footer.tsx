"use client";

import { motion } from "framer-motion";
import { AnchorLogo } from "./AnchorLogo";
import { Facebook, Instagram, Youtube, Twitter, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Ministries", href: "#ministries" },
  { name: "Events", href: "#events" },
  { name: "Sermons", href: "#sermons" },
  { name: "Contact", href: "#contact" },
];

const ministryLinks = [
  { name: "Men's Fellowship", href: "#" },
  { name: "Women's Ministry", href: "#" },
  { name: "Youth Ministry", href: "#" },
  { name: "Children's Church", href: "#" },
  { name: "Worship Team", href: "#" },
  { name: "Outreach", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-[hsl(220,40%,6%)] relative overflow-hidden">
      {/* Top decoration */}
      <div className="section-divider" />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <AnchorLogo
                size={50}
                className="text-primary group-hover:scale-110 transition-transform"
                animate={false}
              />
              <div>
                <h2 className="text-xl font-bold text-white">AFGHM</h2>
                <p className="text-xs text-primary font-medium">
                  Anchor For Generations
                </p>
              </div>
            </a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Building spiritual foundations that last for generations through the
              transformative power of God&apos;s Word.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Ministries</h3>
            <ul className="space-y-3">
              {ministryLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Stay Connected</h3>
            <p className="text-white/60 mb-4">
              Subscribe to receive updates, prayer requests, and encouragement.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} AFGHM - Anchor For Generations Holistic Ministry.
              All rights reserved.
            </p>
            <p className="text-white/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary" /> for the Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
