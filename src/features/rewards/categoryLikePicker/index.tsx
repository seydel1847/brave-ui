/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledCategoryActionOptinLogo,
  StyledCategoryActionOptoutLogo,
  StyledCategoryActionOptinButton,
  StyledCategoryActionOptoutButton,
  StyledCategoryActionOptinFilledButton,
  StyledCategoryActionOptoutFilledButton
} from './style'
import {
  HeartLIcon,
  HeartSIcon,
  BlockLIcon,
  BlockSIcon
} from '../../../components/icons'
import { Tooltip } from '..'
import { getLocale } from '../../../helpers'

interface State {
  itemSelected: number
}

export interface Props {
  id?: string
  optAction: number
  onOptIn?: () => void
  onOptOut?: () => void
}

export default class ThumbLikePicker extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      itemSelected: props.optAction
    }
  }

  componentWillReceiveProps (nextProps: Props) {
    if ('optAction' in nextProps) {
      this.setState({ itemSelected: nextProps.optAction })
    }
  }

  onHeartPress = () => {
    this.setState({
      itemSelected: this.state.itemSelected === 1 ? 0 : 1
    })
    const fnProp = this.props.onOptIn
    if (fnProp) {
      fnProp()
    }
  }

  onBlockPress = () => {
    this.setState({
      itemSelected: this.state.itemSelected === 2 ? 0 : 2
    })
    const fnProp = this.props.onOptOut
    if (fnProp) {
      fnProp()
    }
  }

  render () {
    return (
      this.state.itemSelected === 1 ?
      (
        <>
          <StyledCategoryActionOptinLogo>
            <StyledCategoryActionOptinFilledButton onClick={this.onHeartPress}>
              <HeartSIcon />
            </StyledCategoryActionOptinFilledButton>
          </StyledCategoryActionOptinLogo>
          <StyledCategoryActionOptoutLogo>
            <Tooltip
              content={getLocale('optOutTooltip')}
              rightEdge={true}
            >
              <StyledCategoryActionOptoutButton onClick={this.onBlockPress}>
                <BlockLIcon />
              </StyledCategoryActionOptoutButton>
            </Tooltip>
          </StyledCategoryActionOptoutLogo>
        </>
      )
      :
      this.state.itemSelected === 2 ?
      (
        <>
          <StyledCategoryActionOptinLogo>
            <StyledCategoryActionOptinButton onClick={this.onHeartPress}>
              <HeartLIcon />
            </StyledCategoryActionOptinButton>
          </StyledCategoryActionOptinLogo>
          <StyledCategoryActionOptoutLogo>
            <Tooltip
              content={getLocale('optOutTooltip')}
              rightEdge={true}
            >
              <StyledCategoryActionOptoutFilledButton onClick={this.onBlockPress}>
                <BlockSIcon />
              </StyledCategoryActionOptoutFilledButton>
            </Tooltip>
          </StyledCategoryActionOptoutLogo>
        </>
      )
      :
      (
        <>
          <StyledCategoryActionOptinLogo>
            <StyledCategoryActionOptinButton onClick={this.onHeartPress}>
              <HeartLIcon />
            </StyledCategoryActionOptinButton>
          </StyledCategoryActionOptinLogo>
          <StyledCategoryActionOptoutLogo>
            <Tooltip
              content={getLocale('optOutTooltip')}
              rightEdge={true}
            >
              <StyledCategoryActionOptoutButton onClick={this.onBlockPress}>
                <BlockLIcon />
              </StyledCategoryActionOptoutButton>
            </Tooltip>
          </StyledCategoryActionOptoutLogo>
        </>
      )
    )
  }
}
