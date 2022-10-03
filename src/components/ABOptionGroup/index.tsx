import React, { useState } from "react";
import styled from "styled-components";

const SectionStyled = styled.section<{ selecionado: boolean }>`
    width: 194px;
    height: 88px;
    background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};;
        font-weight: 700;
        font-size: 16px;
    }
    footer {
        color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};;
        font-weight: 400;
        font-size: 12px;
    }
`

export interface AbGroupOption {
    id: number
    title: string
    body: string
    footer: string
}

export interface ABOptionGroupProps {
    options: AbGroupOption[]
    valueDefault?: AbGroupOption | null
    onChange?: (option: AbGroupOption) => void
}

export const ABOptionGroup = ({ options, onChange , valueDefault} : ABOptionGroupProps) => {
    const [selected, setSelected] = useState<AbGroupOption | null>(valueDefault ?? null)
    const onSelect = (option: AbGroupOption): void => {
        setSelected(option);
        onChange &&  onChange(option)
    }

    return (<>
        {options.map(option => 
            <SectionStyled
                onClick={() => onSelect(option)}
                key={option.id}
                selecionado={selected?.id == option.id}
            >
                <header>
                    {option.title}
                </header>
                <div>
                    <strong>{option.body}</strong>
                </div>
                <footer>
                    {option.footer}
                </footer>
            </SectionStyled>
        )}
    </>)
}