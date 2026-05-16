"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Showcase", href: "#showcase" },
    { name: "AI", href: "#ai" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-300 px-6 py-2 flex items-center justify-between",
          isScrolled ? "glass shadow-premium" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-green rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary-dark">
            Splitry
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary-gray hover:text-primary-green transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="group">
            Download App
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-primary-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border-stroke" />
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Download App</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
