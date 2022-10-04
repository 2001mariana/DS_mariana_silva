import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonGreenProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'solid' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonGreenProps>`
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#65c944' : 'transparent'} ;
  color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#ffffff' : '#65c944'};
  border: 1px solid #65c944;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonGreenProps) => props.size === 'small' ? '120px' : props.size === 'medium' ?  '170px' : '220px' } ;
  height: ${(props: ButtonGreenProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  &:disabled {
    pointer-events: none;
    background-color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#21a53740' : 'transparent'} ;
    border-color: #21a53740;
  }

  &:hover {
    background-color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#1c7e2c' : 'transparent'};
    color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#FFFFFF' : '#1c7e2c' };
    border-color: #1c7e2c;
    box-shadow: 0 0 0 0.75px #1c7e2c;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;
  }

  &:focus {
    background-color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#1c7e2c' : 'transparent'};
    color: ${(props: ButtonGreenProps) => props.variant === 'solid' ? '#FFFFFF' : '#1c7e2c' };
    box-shadow: 0 0 0 3.5px #1c7e2c;
    font-weight: 600;
  }
`

export const ButtonGreen = ({ label, size, variant, onClick}: ButtonGreenProps) => {
  return (<ButtonStyled onClick={onClick} variant={variant} size={size} >
            {label}
          </ButtonStyled>)
}



