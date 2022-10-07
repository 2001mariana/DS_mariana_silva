import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonBlueLedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'small' | 'medium' | 'large'
  intensity?: 'dark' | 'light'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonBlueLedProps>`
  --blue-bg-color: ${(props: ButtonBlueLedProps) => props.intensity === 'light' ? '#a9ceea' : '#073a6770'};
  --blue-bg-color-after: ${(props: ButtonBlueLedProps) => props.intensity === 'light' ? '#a9ceea' : '#073a6790'};

  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--blue-bg-color);
  color: #FFFFFF;
  border: 1px solid var(--blue-bg-color);
  border-radius: 6px;
  user-select: none; 
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  display: inline-flex;
  z-index: 0;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonBlueLedProps) => props.size === 'small' ? '100px' : props.size === 'medium' ?  '150px' : '200px' } ;
  height: ${(props: ButtonBlueLedProps) => props.size === 'small' ? '28px' : props.size === 'medium' ? '34px' : '42px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  :before {
  content: "";
  background: linear-gradient(45deg,#a6a4e9,#607FBD,#2986CC, #4560f1,#6f82e8, #7191b5, #6c97be,#d2d1f4);
  position: absolute;
  background-size: 400%;
  z-index: -1;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  animation: button-led 20s infinite;
  border-radius: 8px;
}

@keyframes button-led {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--blue-bg-color-after);
  left: 0;
  top: 0;
  border-radius: 10px;
}

`

export const ButtonBlueLed = ({ label, size, intensity ,onClick}: ButtonBlueLedProps) => {
  return (<ButtonStyled onClick={onClick} size={size} intensity={intensity} >
            {label}
          </ButtonStyled>)
}



