"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/Form.tsx
const react_1 = __importStar(require("react"));
const yup = __importStar(require("yup"));
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
const Form = ({ onSubmit, className = "" }) => {
    const [values, setValues] = (0, react_1.useState)({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = (0, react_1.useState)({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(Object.assign(Object.assign({}, values), { [name]: value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield schema.validate(values, { abortEarly: false });
            setErrors({});
            onSubmit(values);
        }
        catch (err) {
            if (err instanceof yup.ValidationError) {
                const validationErrors = {};
                err.inner.forEach((error) => {
                    if (error.path) {
                        validationErrors[error.path] = error.message;
                    }
                });
                setErrors(validationErrors);
            }
        }
    });
    return (react_1.default.createElement("form", { className: `form ${className}`, onSubmit: handleSubmit },
        react_1.default.createElement("div", { className: "form-group" },
            react_1.default.createElement("label", { htmlFor: "name" }, "Name"),
            react_1.default.createElement("input", { id: "name", name: "name", type: "text", value: values.name, onChange: handleChange }),
            errors.name && react_1.default.createElement("span", { className: "error" }, errors.name)),
        react_1.default.createElement("div", { className: "form-group" },
            react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
            react_1.default.createElement("input", { id: "email", name: "email", type: "email", value: values.email, onChange: handleChange }),
            errors.email && react_1.default.createElement("span", { className: "error" }, errors.email)),
        react_1.default.createElement("div", { className: "form-group" },
            react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
            react_1.default.createElement("input", { id: "password", name: "password", type: "password", value: values.password, onChange: handleChange }),
            errors.password && react_1.default.createElement("span", { className: "error" }, errors.password)),
        react_1.default.createElement("button", { type: "submit" }, "Submit")));
};
exports.default = Form;
