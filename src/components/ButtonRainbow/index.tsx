import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonRainbowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonRainbowProps>`
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #FFFFFF;
  border-radius: 8px;
  user-select: none; 
  -webkit-user-select: none;
  touch-action: manipulation;
  border: 1px solid #FFFFFF;
  text-shadow: 1px 1px 2px #242115, 0 0 1em #0d0d0d, 0 0 0.2em #140c82;
  cursor: pointer;
  display: inline-flex;
  z-index: 0;
  font-weight: 600;
  outline: none;
  padding: 7.5px 15px;
  min-width: ${(props: ButtonRainbowProps) => props.size === 'small' ? '100px' : props.size === 'medium' ?  '150px' : '200px' } ;
  height: ${(props: ButtonRainbowProps) => props.size === 'small' ? '28px' : props.size === 'medium' ? '38px' : '48px' };
  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,
    color 0.75s;

  :before {
  content: "";
  background: linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5, #002bff, #7a00ff,#ff00c8, #ff0000);
  position: absolute;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: button-led 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
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
  left: 0;
  top: 0;
  border-radius: 10px;
}



`

export const ButtonRainbow = ({ label, size, onClick}: ButtonRainbowProps) => {
  return (<ButtonStyled onClick={onClick} size={size} >
            {label}
          </ButtonStyled>)
}



