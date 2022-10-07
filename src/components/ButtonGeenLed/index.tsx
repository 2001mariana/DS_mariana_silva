import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonGreenLedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'small' | 'medium' | 'large'
  intensity?: 'dark' | 'light'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonGreenLedProps>`
  --green-bg-color: ${(props: ButtonGreenLedProps) => props.intensity === 'light' ? '#B4F22570' : '	#4fa86180'};
  --green-bg-color-after: ${(props: ButtonGreenLedProps) => props.intensity === 'light' ? '#B4F22570' : '	#4fa86180'};

  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--green-bg-color);
  color: #FFFFFF;
  border: 1px solid var(--green-bg-color);
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
  min-width: ${(props: ButtonGreenLedProps) => props.size === 'small' ? '100px' : props.size === 'medium' ?  '150px' : '200px' } ;
  height: ${(props: ButtonGreenLedProps) => props.size === 'small' ? '28px' : props.size === 'medium' ? '34px' : '42px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  :before {
  content: "";
  background: linear-gradient(45deg,#b9ff1c,#28ce00,#B4F225, #82e214,#7db500, #a1e800, #4df225,#b2ff02);
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

export const ButtonGreenLed = ({ label, size, intensity ,onClick}: ButtonGreenLedProps) => {
  return (<ButtonStyled onClick={onClick} size={size} intensity={intensity} >
            {label}
          </ButtonStyled>)
}



