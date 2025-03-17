"use client";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "overflow-hidden px-3 py-3.5 text-base leading-none whitespace-nowrap rounded-lg border border-solid min-h-[43px]";
  const variantStyles = {
    primary: "bg-blue-950 border-zinc-800 text-neutral-100",
    secondary: "bg-white border-blue-950 text-blue-950",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
