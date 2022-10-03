import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px
`

const InputStyled = styled.input`
    font-size: 16px;
    line-height: 24px;
    padding: 8px 24px;
    color: #002F52;
    border: 1px solid #002F52;
    border-radius: 45px;
    width: 100%;
    box-sizing: border-box;
    &:focus{
        outline: none;
    }
`

export interface InputProps {
    label: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void
}

export const ABInput = ({ label, value, onChange, type = 'text' } : InputProps) => {
    return (
        <div>
            <LabelStyled>
                {label}
            </LabelStyled>
            <InputStyled type={type} value={value} onChange={event => onChange(event.target.value)} />
        </div>
    )
}