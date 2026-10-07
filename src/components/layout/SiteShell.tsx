import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/SectionHeader";

/** Shared page chrome: skip link, navbar, main landmark, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary-dark focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-16 lg:pt-[4.5rem]">
        {children}
      </main>
      <Footer />
    </>
  );
}

/** Header band used by inner pages (About, Contact, FAQ, legal). */
export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border-stroke">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(3,166,113,0.10),transparent_70%)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-primary-dark text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && <p className="max-w-2xl text-base leading-relaxed text-body sm:text-lg text-pretty">{description}</p>}
        {meta && <p className="text-sm text-muted">{meta}</p>}
        {children}
      </div>
    </section>
  );
}
