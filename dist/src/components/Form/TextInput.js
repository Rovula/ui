"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextInput = ({ value, onChange, placeholder = '', type = 'text', disabled = false, className = '', }) => {
    return (react_1.default.createElement("input", { className: `text-input ${className}`, type: type, value: value, onChange: onChange, placeholder: placeholder, disabled: disabled }));
};
exports.default = TextInput;
