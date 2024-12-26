"use client"
import React from "react";
import { useState } from "react";
import "./TextField.css";

export interface TextFieldProps {
  className?: string;
  width?: "small" | "medium" | "large" | "xl" | "full";
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  className = "",
  width = "small",
  label,
  // value = "",
  // onChange = () => {}
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const widths: { [key in NonNullable<TextFieldProps["width"]>]: string } = {
    small: "w-[220px]",
    medium: "w-[260px]",
    large: "w-[320px]",
    xl: "w-[360px]",
    full: "w-full",
  };

  return (
    <div className={`input-container ${widths[width]} ${className}`}>
      <input
        type="text"
        id="input"
        required
        value={inputValue}
        onChange={handleInputChange}
        className="textfield-input"
      />
      {label && <label id="input" className="label">{label}</label>}
      <div className={`underline ${widths[width]}`}></div>
    </div>
  );
};

export default TextField;
