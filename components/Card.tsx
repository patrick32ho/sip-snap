import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
