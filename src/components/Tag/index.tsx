import React from "react"
import styled from "styled-components";

export interface ABTagProps {
    texto: string
}

const TagStyled = styled.div`
    padding: 14px 22px;
    color: #FFFFFF;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

export const ABTag = ({ texto }: ABTagProps) => {
    return (
        <TagStyled>
            {texto}
        </TagStyled>
    )
}