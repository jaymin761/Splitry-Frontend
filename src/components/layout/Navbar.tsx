"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
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

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Showcase", href: "/#showcase" },
    { name: "AI", href: "/#ai" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-border-stroke bg-background-soft/90 backdrop-blur-md font-sans",
        isScrolled ? "py-3 shadow-premium" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-10 h-10 transition-transform"
          >
            <Image
              src="/splitry-logo-s1.png"
              alt="Splitry Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <span className="text-2xl font-bold tracking-tight text-primary-dark">
            Splitry
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 relative" onMouseLeave={() => setHoveredLink(null)}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-bold text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide rounded-lg z-10"
              onMouseEnter={() => setHoveredLink(link.name)}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredLink === link.name && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-primary-green/10 rounded-xl -z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 26 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="primary" size="default" className="group font-bold text-sm uppercase tracking-wide">
            Download App
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-dark cursor-pointer p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background-soft border-b border-border-stroke p-6 shadow-2xl md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border-stroke my-2" />
              <div className="flex flex-col gap-3">
                <Button variant="outline" size="default" className="w-full font-bold text-sm uppercase tracking-wide">
                  Sign In
                </Button>
                <Button variant="primary" size="default" className="w-full font-bold text-sm uppercase tracking-wide">
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
