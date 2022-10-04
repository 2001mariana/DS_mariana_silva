import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonYellowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'solid' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonYellowProps>`
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#ffc107' : 'transparent'} ;
  color: ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#ffffff' : '#ffc107'};
  border: 1px solid #ffc107;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonYellowProps) => props.size === 'small' ? '120px' : props.size === 'medium' ?  '170px' : '220px' } ;
  height: ${(props: ButtonYellowProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 1.25s, border-color 1.25s, box-shadow 1.25s,
    color 1.25s;

  &:disabled {
    pointer-events: none;
    background-color: ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#ffc72040' : 'transparent'} ;
    border-color: #ffc72040;
  }

  &:hover {
    background-color:  ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#ffc720' : 'transparent'} ;
    color: ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#FFFFFF' : '#efba1a'} ;
    border-color: #ffc720;    
    box-shadow: 0 0 0 0.75px #ffcd39;
    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;
  }

  &:focus {
    background-color: ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#ffcd39' : 'transparent'};
    color: ${(props: ButtonYellowProps) => props.variant === 'solid' ? '#FFFFFF' : '#ffc720'};
    box-shadow: 0 0 0 2.5px #ffcd39;
    font-weight: 600;
  }
`

export const ButtonYellow = ({ label, size, variant, onClick}: ButtonYellowProps) => {
  return (<ButtonStyled onClick={onClick} variant={variant} size={size} >
            {label}
          </ButtonStyled>)
}



