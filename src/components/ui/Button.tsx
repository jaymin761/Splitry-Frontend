"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green disabled:opacity-50 disabled:pointer-events-none active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary-green text-white hover:bg-primary-green/90 shadow-lg shadow-primary-green/20",
        dark: "bg-primary-dark text-white hover:bg-primary-dark/90 shadow-lg shadow-primary-dark/20",
        outline: "border border-border-stroke bg-transparent hover:bg-primary-dark hover:text-white",
        ghost: "hover:bg-primary-dark/5 text-primary-dark",
        glass: "glass text-primary-dark hover:bg-white/90",
        retro: "bg-primary-green text-white rounded-xl border-2 border-[#026E4B] border-b-[4px] active:border-b-2 active:translate-y-[2px] active:scale-100 hover:brightness-105 transition-all font-bold uppercase tracking-wider shadow-sm",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
