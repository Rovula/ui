import React from 'react';
interface TextInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'password' | 'email';
    disabled?: boolean;
    className?: string;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
