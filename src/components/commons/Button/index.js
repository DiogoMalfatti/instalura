import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get'

const ButtonGhost = css `
    color: ${((props) => get(props.theme, `colors.${props.variant}.color`))};
    background-color: transparent;
`

const ButtonDefault = css `
    color: white;
    background-color: ${((props) => get(props.theme, `colors.${props.variant}.color`))};
    color: ${((props) => get(props.theme, `colors.${props.variant}.contrastText`))};
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;