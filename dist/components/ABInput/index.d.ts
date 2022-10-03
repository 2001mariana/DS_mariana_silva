/// <reference types="react" />
export interface InputProps {
    label: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void;
}
export declare const ABInput: ({ label, value, onChange, type }: InputProps) => JSX.Element;
