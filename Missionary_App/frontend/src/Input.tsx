"use client";
import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  backgroundImage?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  backgroundImage,
  className = "",
  ...props
}) => {
  return (
    <div className="flex overflow-hidden relative flex-col flex-1 shrink gap-2 self-stretch px-4 py-3 text-lg leading-none whitespace-nowrap text-blue-950">
      {backgroundImage && (
        <img
          src={backgroundImage}
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
      )}
      <input
        className={`relative z-10 bg-transparent outline-none ${className}`}
        placeholder={label}
        {...props}
      />
    </div>
  );
};
