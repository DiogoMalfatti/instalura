import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import { propToStyle } from '../../../theme/utils/propToStyle'

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
    ${TextStyleVariantsMap.smallestException}
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }
    ${breakpointsMedia({
        xs: css`
            ${TextStyleVariantsMap.smallestException}
        `,
        md: css`
            ${TextStyleVariantsMap.paragraph1}
        `,
    })}

    ${propToStyle('margin')}
    ${propToStyle('display')}
`;