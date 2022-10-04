import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonBlueProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'solid' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonBlueProps>`
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonBlueProps) => props.variant === 'solid' ? '#598ccb' : 'transparent'} ;
  color: ${(props: ButtonBlueProps) => props.variant === 'solid' ? '#ffffff' : '#598ccb'};
  border: 1px solid #598ccb;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonBlueProps) => props.size === 'small' ? '120px' : props.size === 'medium' ?  '170px' : '220px' } ;
  height: ${(props: ButtonBlueProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 1.25s, border-color 1.25s, box-shadow 1.25s,
    color 1.25s;

  &:disabled {
    pointer-events: none;
    background-color: ${(props: ButtonBlueProps) => props.variant === 'solid' ? '#406ba040' : 'transparent'} ;
    border-color: #406ba040;
  }

  &:hover {
    background-color: #406ba0;
    color: #FFFFFF;
    border-color: #406ba0;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;
  }

  &:focus {
    background-color: ${(props: ButtonBlueProps) => props.variant === 'solid' ? '#3b6393' : 'transparent'};
    box-shadow: 0 0 0 3.5px #3b6393;
    font-weight: 600;
  }
`

export const ButtonBlue = ({ label, size, variant, onClick}: ButtonBlueProps) => {
  return (<ButtonStyled onClick={onClick} variant={variant} size={size} >
            {label}
          </ButtonStyled>)
}



