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
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#ffc0cb' : 'transparent'} ;
  color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#ffffff' : '#ffc0cb'};
  border: 1px solid #ffc0cb;
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
    background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#ff8da140' : 'transparent'} ;
    border-color: #ff8da140;
  }

  &:hover {
    background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#ff748c' : 'transparent'};
    color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#FFFFFF' : '#ff748c' };
    border-color: #ff748c;
    box-shadow: 0 0 0 0.75px #ff748c;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;
  }

  &:focus {
    background-color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#ff748c' : 'transparent'};
    color: ${(props: ButtonPinkProps) => props.variant === 'solid' ? '#FFFFFF' : '#ff748c' };
    box-shadow: 0 0 0 3.5px #ff748c;
    font-weight: 600;
  }
`

export const ButtonPink = ({ label, size, variant, onClick}: ButtonPinkProps) => {
  return (<ButtonStyled onClick={onClick} variant={variant} size={size} >
            {label}
          </ButtonStyled>)
}



