"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { ArrowRightIcon } from "./Icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "call";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 focus:ring-primary",
      secondary:
        "bg-primary-light text-primary border-2 border-primary hover:bg-primary/10 focus:ring-primary",
      outline:
        "bg-transparent text-secondary border-2 border-border hover:bg-muted hover:border-secondary focus:ring-secondary",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#1EB35A] hover:shadow-lg hover:shadow-[#25D366]/30 focus:ring-[#25D366]",
      call:
        "bg-secondary text-white hover:bg-secondary-hover hover:shadow-lg focus:ring-secondary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoaderIcon size={18} className="animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {children}
            {variant === "primary" && !isLoading && <ArrowRightIcon size={18} />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "call";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 focus:ring-primary",
      secondary:
        "bg-primary-light text-primary border-2 border-primary hover:bg-primary/10 focus:ring-primary",
      outline:
        "bg-transparent text-secondary border-2 border-border hover:bg-muted hover:border-secondary focus:ring-secondary",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#1EB35A] hover:shadow-lg hover:shadow-[#25D366]/30 focus:ring-[#25D366]",
      call:
        "bg-secondary text-white hover:bg-secondary-hover hover:shadow-lg focus:ring-secondary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-base",
    };

    return (
      <a
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
        {variant === "primary" && <ArrowRightIcon size={18} />}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";

import { LoaderIcon } from "./Icons";