import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg px-4 py-2 text-sm font-semibold shadow transition items-center justify-center inline-flex",
  {
    variants: {
      variant: {
        primary: "bg-mist-700 text-white hover:bg-mist-800 focus:bg-mist-600",
        outline: "border border-mist-800 text-white hover:bg-mist-800 focus:bg-mist-600",
        ghost: "text-white hover:bg-mist-800 focus:bg-mist-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant,
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = buttonVariants({ variant, className });

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}