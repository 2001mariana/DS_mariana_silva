import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonPinkLedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'small' | 'medium' | 'large'
  intensity?: 'dark' | 'light'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonPinkLedProps>`
  --pink-light-main: ${(props: ButtonPinkLedProps) => props.intensity === 'light' ? '#FFCDF340' : '#e5005a70'};
  --pink-light-main-after: ${(props: ButtonPinkLedProps) => props.intensity === 'light' ? '#FFCDF340' : '#e5005a90'};

  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--pink-light-main);
  color: #FFFFFF;
  border: 1px solid var(--pink-light-main);
  border-radius: 8px;
  user-select: none; 
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  display: inline-flex;
  z-index: 0;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonPinkLedProps) => props.size === 'small' ? '100px' : props.size === 'medium' ?  '150px' : '200px' } ;
  height: ${(props: ButtonPinkLedProps) => props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  :before {
  content: "";
  background: linear-gradient(45deg,#ff81e1, #ff9ae7,#ffbcef, #ff45d1,#ff9ae6, #ff66e0, #ff81e1,#F865FA, #fa6fe5);
  position: absolute;
  background-size: 400%;
  z-index: -1;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  animation: button-led 30s infinite;
  border-radius: 10px;
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
  background: var(--pink-light-main-after);
  left: 0;
  top: 0;
  border-radius: 10px;
}

`

export const ButtonPinkLed = ({ label, size, intensity ,onClick}: ButtonPinkLedProps) => {
  return (<ButtonStyled onClick={onClick} size={size} intensity={intensity} >
            {label}
          </ButtonStyled>)
}



