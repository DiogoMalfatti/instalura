import React from 'react'
import { css } from 'styled-components'
import { breakpointsMedia } from './breakpointsMedia'

export function propToStyle(propName) {
    return function(props) {
        const propValue = props[propName]

        if(typeof propValue === 'string') {
            return {
                [propName]: propValue
            } 
        }
        if(typeof propValue === 'object') {
           return breakpointsMedia({
                xs: {
                    [propName]: propValue.xs
                },
                md: {
                    [propName]: propValue.md
                },
           })
        }
    }
}