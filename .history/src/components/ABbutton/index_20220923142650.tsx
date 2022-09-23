import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
    background-color: #EB9B00;
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: #ffffff;
    cursor: pointer;
    font-size: 20px;
    border-radius: 3px;
    transition: background-color 0.5s, border-color 0.5s, color 0.5s;

    &:hover {
        background-color: #B87900;
        border-color: #B87900;
    }
`

export const ABbutton = () => {
    return (<ButtonStyled>Click Me</ButtonStyled>)
}