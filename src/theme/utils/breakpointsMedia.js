import  theme  from '../index'
import { css } from 'styled-components'

const { breakpoints } = theme

export function breakpointsMedia(cssByBreakpoints) {
    const breakpointsNames = Object.keys(cssByBreakpoints)
    return breakpointsNames.map((breakpointName) => {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointName]}px) {
                ${cssByBreakpoints[breakpointName]}
            }
        `
    })
}