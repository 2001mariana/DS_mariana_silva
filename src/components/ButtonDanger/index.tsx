import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonDangerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'solid' | 'outlined'
  size?: 'small' | 'medium' | 'large'
}

export default function ButtonDanger({
    className,
    label,
    ...props
  }: ButtonDangerProps) {
  const ButtonDanger = styled.button<ButtonDangerProps>`
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonDangerProps) => props.variant === 'solid' ? '#de5856' : 'transparent'} ;
  color: ${(props: ButtonDangerProps) => props.variant === 'solid' ? '#ffffff' : '#de5856'};
  border: 1px solid #d34644;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonDangerProps) => props.size === 'small' ? '140px' : props.size === 'medium' ?  '180px' : '220px' } ;
  height: ${(props: ButtonDangerProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  &:disabled {
    pointer-events: none;
    background-color: ${(props: ButtonDangerProps) => props.variant === 'solid' ? '#ef535040' : 'transparent'} ;
    border-color: #ef535040;
  }

    &:focus {
          background-color: ${(props: ButtonDangerProps) => props.variant === 'solid' ? '#ce4b49' : 'transparent'};
          box-shadow: 0 0 0 3.5px #ce4b49;
          font-weight: 600;
    }

    &:hover {
          background-color: '#ce4b49';
          border-color: #ce4b49;
        }
  `

  return (
    <ButtonDanger className={'buttonDangerClass'} {...props}>
      {label && <span className={'buttonDangerLabelClass'}>{label}</span>}
    </ButtonDanger>
  )
}
