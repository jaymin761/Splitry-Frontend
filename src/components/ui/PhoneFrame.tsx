import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  preload?: boolean;
}

/** Lightweight device frame around a real app screenshot. */
export function PhoneFrame({ src, alt, width, height, className, sizes, preload }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.4rem] bg-primary-dark p-[7px] shadow-lift ring-1 ring-black/5",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-background-soft">
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} preload={preload} className="h-auto w-full" />
      </div>
    </div>
  );
}
