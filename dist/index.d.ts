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
export * from './components/ButtonGreen';
export * from './components/ButtonDanger';
export * from './components/ButtonBlack';
export * from './components/ButtonLed';
export * from './components/ButtonBlue';
export * from './components/ButtonYellow';
export * from './components/ButtonPink';
export * from './components/ButtonPinkLed';
export * from './components/ButtonBlueLed';
export * from './components/ButtonGeenLed';
