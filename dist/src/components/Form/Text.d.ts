import React from "react";
interface TextProps {
    children: string;
    size?: "small" | "medium" | "large";
    color?: string;
    className?: string;
}
declare const Text: React.FC<TextProps>;
export default Text;
