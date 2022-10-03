/// <reference types="react" />
export interface ABbuttonProps {
    text?: string;
    color?: 'Primary' | 'Secondary';
    onClick?: () => void;
    size?: 'small' | 'large';
}
export declare const ABbutton: ({ color, text, size, onClick }: ABbuttonProps) => JSX.Element;
