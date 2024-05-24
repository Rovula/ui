"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text = ({ children, size = "medium", color = "black", className = "", }) => {
    return (react_1.default.createElement("span", { className: `text ${size} ${className}`, style: { color } }, children));
};
exports.default = Text;
