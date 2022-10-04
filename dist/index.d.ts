import { FC, HTMLAttributes, ReactChild } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
export declare const Thing: FC<Props>;
export * from './components/ABbutton';
export * from './components/Card';
export * from './components/Tag';
export * from './components/ABInput';
export * from './components/ABOptionGroup';
export * from './components/ABInputQuant';
export * from './components/ButtonSuccess';
export * from './components/ButtonDanger';
