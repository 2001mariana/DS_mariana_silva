/// <reference types="react" />
export interface AbGroupOption {
    id: number;
    title: string;
    body: string;
    footer: string;
}
export interface ABOptionGroupProps {
    options: AbGroupOption[];
    valueDefault?: AbGroupOption | null;
    onChange?: (option: AbGroupOption) => void;
}
export declare const ABOptionGroup: ({ options, onChange, valueDefault }: ABOptionGroupProps) => JSX.Element;
