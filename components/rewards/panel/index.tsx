/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledPanel,
  StyledHeader,
  StyledTitle,
  StyledTM,
  StyledBalance,
  StyledBalanceTitle,
  StyledBalanceTokens,
  StyledContent,
  StyledFooter,
  StyledAction,
  StyledActionIcon,
  StyledCopy,
  StyledCopyImage
} from './style'

export interface Props {
  id?: string
  title: string
  balanceTitle: string
  tokens: number
  showTm?: boolean
  connectedWallet?: boolean
  showCopy?: boolean
  children?: React.ReactNode
  actions?: {icon: string, name: string, action: ()=> void}[]
}

const panel = require('./assets/panel')
const uphold = require('./assets/uphold')

/*
  TODO
  - localize
  - add colored uphold logo
 */
export default class Panel extends React.PureComponent<Props, {}> {
  formatTokens (tokens: number) {
    if (isNaN(tokens)) {
      return '00.00'
    }

    return tokens.toFixed(2)
  }

  generateActions (actions: {icon: string, name: string, action: ()=> void}[], id?: string) {
    return actions.map((action, i: number) => {
      return <StyledAction key={`${id}-${i}`} onClick={action.action}>
        <StyledActionIcon src={action.icon} />{action.name}
      </StyledAction>
    })
  }

  render () {
    const {
      id,
      title,
      children,
      balanceTitle,
      tokens,
      showTm,
      actions,
      showCopy,
      connectedWallet
    } = this.props

    return <StyledWrapper>
      <StyledPanel id={id}>
        <StyledHeader bg={panel}>
          <StyledTitle>
            {title}
            <StyledTM>{showTm ? 'TM': <>&nbsp;</>}</StyledTM>
          </StyledTitle>
          <StyledBalance>
            <StyledBalanceTitle>{balanceTitle}</StyledBalanceTitle>
            <StyledBalanceTokens>
              <b>{this.formatTokens(tokens)}</b> tokens
            </StyledBalanceTokens>
          </StyledBalance>
        </StyledHeader>
        <StyledContent>
          {children}
        </StyledContent>
        {
          actions && actions.length
          ? <StyledFooter>{this.generateActions(actions, id)}</StyledFooter>
          : null
        }
      </StyledPanel>
      {
        showCopy
        ? <StyledCopy connectedWallet={connectedWallet}>
            {
              connectedWallet
              ? <><StyledCopyImage>{uphold}</StyledCopyImage> Add, withdraw and manage funds at <b>Uphold</b>.</>
              : <><StyledCopyImage>{uphold}</StyledCopyImage> Brave wallet is managed by <b>Uphold</b>.</>
            }
        </StyledCopy>
        : null
      }

    </StyledWrapper>
  }
}