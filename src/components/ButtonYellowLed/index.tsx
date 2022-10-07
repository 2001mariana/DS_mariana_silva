import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonYellowLedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'small' | 'medium' | 'large'
  intensity?: 'dark' | 'light'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonYellowLedProps>`
  --green-bg-color: ${(props: ButtonYellowLedProps) => props.intensity === 'light' ? '#fbf51350' : '	#fdd70070'};
  --green-bg-color-after: ${(props: ButtonYellowLedProps) => props.intensity === 'light' ? '#fbf51350' : '	#fdd70080'};

  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--green-bg-color);
  border: 1px solid var(--green-bg-color);
  color: #FFFFFF;
  text-shadow: 1px 1px 2px #fdd700, 0 0 1em #fdc400, 0 0 0.2em #fdaf00;
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
  min-width: ${(props: ButtonYellowLedProps) => props.size === 'small' ? '100px' : props.size === 'medium' ?  '150px' : '200px' } ;
  height: ${(props: ButtonYellowLedProps) => props.size === 'small' ? '28px' : props.size === 'medium' ? '34px' : '42px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  :before {
  content: "";
  background: linear-gradient(45deg,#fef67f,	#fdd900,#FAED59, #fff44b,#fdd700, #fff118, #fdee00,#FFD966);
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
  background: var(--green-bg-color-after);
  left: 0;
  top: 0;
  border-radius: 10px;
}

`

export const ButtonYellowLed = ({ label, size, intensity ,onClick}: ButtonYellowLedProps) => {
  return (<ButtonStyled onClick={onClick} size={size} intensity={intensity} >
            {label}
          </ButtonStyled>)
}



