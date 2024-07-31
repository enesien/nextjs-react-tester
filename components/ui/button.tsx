import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        success: "bg-success text-success-foreground hover:bg-success/90",
        "link-destructive": "text-destructive hover:text-destructive/80",
        muted: "bg-muted border border-input text-primary hover:bg-muted/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        "icon-sm": "h-9 w-9",
        "icon-xs": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  spinner?: boolean;
}

/**
 * icon should use w-5 h-5 icon size
 * icon-sm should use w-4 h-4 icon size
 * 
 * non-icon buttons should use w-4 h-4 icon size
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, spinner, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        type={props.type || "button"}
        disabled={props.disabled || spinner}
      >
        {spinner ? (
          <span className={cn(spinner && "opacity-50 transition-opacity")}>
            {children}
          </span>
        ) : (
          children
        )}
        {spinner && (
          <i className="animate-in fade-in absolute">
            <LoaderCircleIcon className=" animate-spin h-6 w-6" />
          </i>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
