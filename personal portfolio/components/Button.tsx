import Link from "next/link";
import { type ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
  };

type LinkButtonProps = BaseProps & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  prefetch?: boolean;
};

const variants = {
  primary:
    "bg-accent text-brand-dark font-semibold shadow-md hover:bg-accent-deep hover:shadow-lift active:scale-[0.98] transition-all duration-200",
  secondary:
    "bg-brand text-white font-semibold border border-brand-light/30 hover:bg-brand-light hover:-translate-y-0.5 shadow-md transition-all duration-200",
  ghost:
    "bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm transition-all duration-200",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  className = "",
  variant = "primary",
  prefetch = true,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
