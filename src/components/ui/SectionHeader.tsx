import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  /** Use h1 for page-level headers. */
  as?: "h1" | "h2";
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary-green/20 bg-primary-green/8 px-3 py-1 text-xs font-semibold text-primary-green-deep",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary-green" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "center", className, as = "h2" }: SectionHeaderProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "max-w-xl items-start text-left",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          "font-bold tracking-tight text-primary-dark text-balance",
          as === "h1" ? "text-4xl leading-[1.1] sm:text-5xl lg:text-6xl" : "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]"
        )}
      >
        {title}
      </Heading>
      {description && <p className="text-base leading-relaxed text-body sm:text-lg text-pretty">{description}</p>}
    </div>
  );
}
