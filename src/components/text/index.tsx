import * as React from 'react'
import IText from './textInterface'
import { StyledText, StyledHeading, StyledFootnote } from './style'

export const Footnote = (p: IText) => {
  return (
    <StyledFootnote
      tag={p.tag}
      color={p.color}
      lineHeight={p.lineHeight}
      strongLevel={p.strongLevel}
    >
    {p.children}
    </StyledFootnote>
  )
}

/* Body Text. It's a nice body. */
export const Text = (p: IText) => {
  return (
    <StyledText
      tag={p.tag}
      color={p.color}
      lineHeight={p.lineHeight}
      strongLevel={p.strongLevel}
    >
    {p.children}
    </StyledText>
  )
}

export const Heading = (p: IText) => {
  return (
    <StyledHeading
      tag={p.tag}
      fontSize={p.fontSize}
      color={p.color}
      lineHeight={p.lineHeight}
      strongLevel={p.strongLevel}
    >
    {p.children}
    </StyledHeading>
  )
}
