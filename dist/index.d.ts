import { FC, HTMLAttributes, ReactChild } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
export declare const Thing: FC<Props>;
export * from './components/ABbutton';
