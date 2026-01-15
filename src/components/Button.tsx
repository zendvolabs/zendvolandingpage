import React from "react";
import styles from "./Button.module.css";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
