"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const downloadSec = document.getElementById("download");
    if (downloadSec) {
      downloadSec.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#download";
    }
  };

  const navLinks = [
    { name: "Features", href: "/#features", icon: Zap },
    { name: "How it works", href: "/#how-it-works", icon: Sparkles },
    { name: "Use Cases", href: "/#use-cases", icon: Layers },
    { name: "About Us", href: "/about", icon: ShieldCheck },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b border-stone-200/70",
        "bg-white/90 backdrop-blur-2xl",
        isScrolled ? "py-3 shadow-[0_12px_35px_-5px_rgba(3,166,113,0.15)]" : "py-4 shadow-sm"
      )}
    >
      {/* Top Emerald Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Brand Logo + Live AI Badge */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="relative w-9 h-9 transition-transform"
            >
              <Image
                src="/AppIcon.png"
                alt="Splitry Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-2xl font-extrabold tracking-tight text-primary-dark group-hover:text-primary-green transition-colors">
              Splitry
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Capsule */}
        <div
          className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1.5 rounded-full border border-stone-200/70 shadow-inner relative"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-xs font-bold text-stone-700 hover:text-stone-900 transition-colors uppercase tracking-wider rounded-full z-10 flex items-center gap-1.5"
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <Icon className="w-3.5 h-3.5 text-primary-green opacity-80" />
                <span className="relative z-10">{link.name}</span>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="full-nav-hover-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-stone-200/50 -z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Download App Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleDownloadClick}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-green via-[#03A671] to-[#028F61] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_18px_rgba(3,166,113,0.35)] hover:shadow-[0_6px_28px_rgba(3,166,113,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Download App</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-primary-dark cursor-pointer p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors border border-stone-200/60"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Full-Width Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-stone-200/80 p-6 shadow-2xl md:hidden flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm font-bold text-stone-700 hover:text-primary-green hover:bg-stone-100/80 rounded-xl transition-all uppercase tracking-wider flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 text-primary-green" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <hr className="border-stone-200/60 my-2" />
              <button
                onClick={handleDownloadClick}
                className="w-full py-3 rounded-full bg-gradient-to-r from-primary-green to-[#028F61] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Download App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
