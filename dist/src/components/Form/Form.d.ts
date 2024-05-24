import React from "react";
interface FormValues {
    name: string;
    email: string;
    password: string;
}
interface FormProps {
    onSubmit: (values: FormValues) => void;
    className?: string;
}
declare const Form: React.FC<FormProps>;
export default Form;
