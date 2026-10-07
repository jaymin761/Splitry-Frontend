"use client";

import React, { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on Escape and lock page scroll while it's open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href: string) => !href.startsWith("/#") && pathname === href;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen
          ? "border-b border-border-stroke bg-background-soft/90 shadow-[0_8px_24px_-18px_rgba(40,40,44,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-background-soft/60 backdrop-blur-md"
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem]">
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Splitry home"
          className={cn(
            "origin-left rounded-lg transition-transform duration-300",
            isScrolled && !mobileMenuOpen ? "scale-[0.92]" : "scale-100"
          )}
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:px-4",
                  isActive(link.href)
                    ? "bg-white text-primary-dark shadow-card"
                    : "text-primary-dark/70 hover:bg-white/80 hover:text-primary-dark"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-primary-dark/70 transition-colors hover:text-primary-dark"
          >
            Contact
          </Link>
          <Link
            href="/#download"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-green-deeper px-5 py-2.5 text-sm font-semibold text-white shadow-green transition-all hover:bg-primary-green-deeper/90 active:scale-[0.98]"
          >
            Get the app
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-stroke bg-white text-primary-dark lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="animate-rise [--rise-delay:0ms] h-[calc(100dvh-4rem)] lg:h-auto overflow-y-auto border-t border-border-stroke bg-background-soft px-4 pb-8 pt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {[...NAV_LINKS, { name: "Contact", href: "/contact" }].map((link, i) => (
                <li
                  key={link.name}
                  className="animate-rise"
                  style={{ "--rise-delay": `${50 + i * 40}ms` } as CSSProperties}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors",
                      isActive(link.href) ? "bg-white text-primary-green shadow-card" : "text-primary-dark hover:bg-white"
                    )}
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 text-secondary-gray" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#download"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-green-deeper py-4 text-base font-semibold text-white shadow-green transition-transform active:scale-[0.98]"
            >
              Get the app
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
    </header>
  );
};

export default Navbar;
