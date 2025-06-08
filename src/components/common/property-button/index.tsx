import { ButtonHTMLAttributes, forwardRef } from "react";

import { clsx } from "@/lib/clsx";

type PropertyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  size?: "md" | "lg";
};

export const PropertyButton = forwardRef<
  HTMLButtonElement,
  PropertyButtonProps
>(
  (
    {
      children,
      className = "",
      disabled,
      fullWidth = false,
      size = "lg",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "rounded-xl bg-primary  text-white cursor-pointer font-semibold transition focus:ring-2 focus:ring-primary focus:outline-none",
          fullWidth ? "w-full" : "w-48",
          size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-md",
          "hover:bg-primary/90",
          "disabled:bg-gray-300 disabled:text-gray-900 disabled:font-bold disabled:cursor-not-allowed disabled:opacity-70",
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

PropertyButton.displayName = "PropertyButton";
