export default interface IText {
  fontSize?: number
  color?: Color
  lineHeight?: number
  strongLevel?: number
  children: React.ReactNode
  tag?: any // can't pass 'keyof JSX.IntrinsicElements' cause withComponent doesn't like it
}

// Colors are named this way to be agnostic of color association. To play
// nicely with light and dark themes and retain contrast integrity, the colors fade
// while utilizing the color behind them in both light and dark instances.
export type Color = 'default' | 'defaultFade15' | 'defaultFade30' | 'defaultFade50'
