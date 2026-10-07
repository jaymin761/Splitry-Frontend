import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

/** App icon + wordmark. Purely presentational — wrap in a Link where needed. */
export function Logo({ className, size = "md" }: LogoProps) {
  const icon = size === "sm" ? 28 : 36;
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/AppIcon.png"
        alt=""
        width={icon}
        height={icon}
        loading="eager"
        className="rounded-[10px] shadow-sm"
      />
      <span className={cn("font-bold tracking-tight text-primary-dark", size === "sm" ? "text-lg" : "text-xl")}>
        Splitry
      </span>
    </span>
  );
}
