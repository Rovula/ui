import React from "react";
interface ButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    isLoading?: boolean;
    variant?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
