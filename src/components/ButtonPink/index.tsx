import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonPinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  intensity?: 'dark' | 'light'
  variant?: 'solid' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonPinkProps>`
  --pink-light-main: ${(props: ButtonPinkProps) => props.intensity === 'light' ? '#ffc0cb' : '#FF0065'};
  --pink-light-main-disabled: ${(props: ButtonPinkProps) => props.intensity === 'light' ? '#ff8da140' : '#FF006540'};
  --pink-light-main-hover: ${(props: ButtonPinkProps) => props.intensity === 'light' ? '#ff748c' : '#cc0050#cc0050'};

  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? 'var(--pink-light-main)' : 'transparent'} ;
  color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#ffffff' : 'var(--pink-light-main)'};
  border: 1px solid var(--pink-light-main);
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonPinkProps) => props.size === 'small' ? '120px' : props.size === 'medium' ?  '170px' : '220px' } ;
  height: ${(props: ButtonPinkProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 1.25s, border-color 1.25s, box-shadow 1.25s,
    color 1.25s;

  &:disabled {
    pointer-events: none;
    background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? 'var(--pink-light-main-disabled' : 'transparent'} ;
    border-color: 'var(--pink-light-main-disabled';
  }

  &:hover {
    background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? 'var(--pink-light-main-hover)' : 'transparent'};
    color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#FFFFFF' : 'var(--pink-light-main-hover)' };
    border-color: var(--pink-light-main-hover);
    box-shadow: 0 0 0 0.75px var(--pink-light-main-hover);
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;
  }

  &:focus {
    background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? 'var(--pink-light-main-hover)' : 'transparent'};
    color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#FFFFFF' : 'var(--pink-light-main-hover)' };
    box-shadow: 0 0 0 3.5px var(--pink-light-main-hover);
    font-weight: 600;
  }
`

export const ButtonPink = ({ label, size, variant, intensity, onClick}: ButtonPinkProps) => {
  return (<ButtonStyled onClick={onClick} variant={variant} intensity={intensity} size={size} >
            {label}
          </ButtonStyled>)
}



