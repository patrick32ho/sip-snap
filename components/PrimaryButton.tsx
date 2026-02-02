import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-2xl px-5 py-4 text-base font-semibold transition active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-splash-500 text-white shadow-lg shadow-splash-200/60 hover:bg-splash-700",
  secondary: "bg-white text-slate-700 border border-slate-200",
  ghost: "bg-transparent text-slate-500",
};

export function PrimaryButton({
  variant = "primary",
  fullWidth = true,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    />
  );
}
