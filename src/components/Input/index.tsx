import React from 'react'
import styled from "styled-components"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  color?: string
}


const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
`

const LabelText = styled.span`
    color: ${(props: InputProps) => props.color ? props.color : '#D939CD'};
    font-size: .8em;
    height: 16px;
    letter-spacing: .75px;
    font-weight: 600;
`

const InputStyled = styled.input`
    border: none;
    border-bottom: 1px solid ${(props: InputProps) => props.color ? props.color : '#D939CD'};
    border-radius: 8px; 
    height: 30px;
    color:${(props: InputProps) => props.color ? props.color : '#D939CD'};

    &:focus {
    border-bottom: 2px solid ${(props: InputProps) => props.color ? props.color : '#D939CD'};
    outline: none;
    }

    &::placeholder {
    color: #a6a3a3;
  }
`

export const Input = ({ label, color, ...props }: InputProps) => {
  return (
    <div className="Input">
      <Label>
        <LabelText color={color} >{label}</LabelText>
        <InputStyled {...props} />
      </Label>
    </div>
  )
}
