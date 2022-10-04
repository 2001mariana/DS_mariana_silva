import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonBlackProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'solid' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonBlackProps>`
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonBlackProps) => props.variant === 'solid' ? 'black' : 'transparent'} ;
  color: ${(props: ButtonBlackProps) => props.variant === 'solid' ? '#FFFFFF' : 'black' };
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonBlackProps) => props.size === 'small' ? '120px' : props.size === 'medium' ?  '180px' : '220px' } ;
  height: ${(props: ButtonBlackProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  &:disabled {
    pointer-events: none;
    background-color:'#0c1e0f40';
    border-color: #0c1e0f40;
  }

  &:focus {
    background-color: ${(props: ButtonBlackProps) => props.variant === 'solid' ? 'black' : 'transparent'};
    box-shadow: 0 0 0 3.5px black;
    font-weight: 600;
  }
`

export const ButtonBlack = ({ label, size, variant, onClick}: ButtonBlackProps) => {
  return (<ButtonStyled onClick={onClick} variant={variant} size={size} >
            {label}
          </ButtonStyled>)
}



