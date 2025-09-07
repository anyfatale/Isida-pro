import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gamingButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium font-orbitron transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-glow hover:scale-105 active:scale-95",
        secondary: "bg-background-secondary border border-primary/30 text-foreground hover:bg-card-hover hover:border-primary hover:shadow-neon hover:scale-105",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary-glow hover:shadow-neon",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-destructive/50",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-neon hover:shadow-glow animate-glow-pulse",
        matrix: "bg-background-tertiary border border-success/50 text-success hover:bg-success/10 hover:border-success hover:shadow-[0_0_20px_hsl(var(--success)/0.5)] scan-line",
        hack: "bg-gradient-to-r from-destructive/80 to-warning/80 text-white font-bold shadow-lg hover:from-destructive hover:to-warning hover:scale-105 animate-float",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface GamingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gamingButtonVariants> {
  asChild?: boolean;
}

const GamingButton = React.forwardRef<HTMLButtonElement, GamingButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gamingButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GamingButton.displayName = "GamingButton";

export { GamingButton, gamingButtonVariants };