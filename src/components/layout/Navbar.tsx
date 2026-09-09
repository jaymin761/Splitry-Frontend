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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b",
        isScrolled
          ? "py-3 bg-[#080A0F]/85 backdrop-blur-2xl border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          : "py-4 bg-[#080A0F]/60 backdrop-blur-xl border-white/[0.06]"
      )}
    >
      {/* Top Emerald Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
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
            <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-primary-green transition-colors">
              Splitry
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Capsule */}
        <div
          className="hidden md:flex items-center gap-1 bg-[#111522]/90 p-1.5 rounded-full border border-white/10 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] relative"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-wider rounded-full z-10 flex items-center gap-1.5"
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <Icon className="w-3.5 h-3.5 text-primary-green opacity-90" />
                <span className="relative z-10">{link.name}</span>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="full-nav-hover-pill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15 -z-0"
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
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-green via-[#03A671] to-[#00F5A0] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(3,166,113,0.35)] hover:shadow-[0_0_30px_rgba(3,166,113,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Download App</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white cursor-pointer p-2 rounded-full bg-[#111522] hover:bg-[#161B2E] transition-colors border border-white/10"
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
            className="absolute top-full left-0 w-full bg-[#0B0E14]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl md:hidden flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm font-bold text-slate-300 hover:text-primary-green hover:bg-white/5 rounded-xl transition-all uppercase tracking-wider flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 text-primary-green" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <hr className="border-white/10 my-2" />
              <button
                onClick={handleDownloadClick}
                className="w-full py-3 rounded-full bg-gradient-to-r from-primary-green to-[#00F5A0] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(3,166,113,0.3)] flex items-center justify-center gap-2 cursor-pointer"
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
