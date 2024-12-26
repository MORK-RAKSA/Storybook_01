import React from "react";
import "./button.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "warning";
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "m" | "l" | "xl" | "full";
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  rounded = "sm",
  label
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`storybook-button button--${variant} storybook-button--${size} button--rouned-${rounded}`}

    >
      {label}
    </button>
  );
};
