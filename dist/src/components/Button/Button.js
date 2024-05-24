"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ children, onClick, type = "button", disabled = false, className = "", isLoading = false, variant = "primary", }) => {
    return (react_1.default.createElement("button", { className: `btn ${className} ${variant}`, onClick: onClick, type: type, disabled: disabled || isLoading }, isLoading ? "Loading..." : children));
};
exports.default = Button;
