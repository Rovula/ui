import React from "react";

interface TextProps {
  children: string;
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = "medium",
  color = "black",
  className = "",
}) => {
  return (
    <span className={`text ${size} ${className}`} style={{ color }}>
      {children}
    </span>
  );
};

export default Text;
