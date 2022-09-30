import React from "react"
import styled from "styled-components"

export interface ABbuttonProps {
    text?: string
    color?: 'Primary' | 'Secondary'
    onClick?: () => void
    size?: 'small' | 'large'
}

const ButtonStyled = styled.button<ABbuttonProps>`
    background-color: ${(props: ABbuttonProps) => props.color === 'Primary' ? '#EB9B00' : '#FFFFFF'};
    padding: ${(props: ABbuttonProps) => props.size === 'large' ? '16px 32px' : '8px 16px'};
    border: 2px solid #EB9B00;
    color: ${(props: ABbuttonProps) => props.color === 'Primary' ? '#FFFFFF' : '#EB9B00'};
    cursor: pointer;
    font-size: ${(props: ABbuttonProps) => props.size === 'large' ? '20px' : '14px'};
    border-radius: 3px;
    transition: background-color 0.75s, border-color 0.75s, color 0.75s;

    &:hover {
        background-color: ${(props: ABbuttonProps) => props.color === 'Primary' ? '#B87900' : '#FFFFFF'} ;
        border-color: #B87900;
        color: ${(props: ABbuttonProps) => props.color === 'Primary' ? '#FFFFFF' : '#B87900'};
        transition: background-color 0.75s, border-color 0.75s, color 0.75s;
    }
`

export const ABbutton = ({ color = 'Primary', text, size = 'large', onClick}: ABbuttonProps) => {
    return (<ButtonStyled onClick={onClick} color={color} size={size} >{text}</ButtonStyled>)
}