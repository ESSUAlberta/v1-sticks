import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Themes from '../Themes'
import styled, { css } from 'styled-components'

const SolidButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  min-width: 11rem;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;

  background: ${Themes.primary.primaryColor};
  color: white;

  ${props => props.theme && typeof props.theme === "string" && css`
  color: ${props.theme === "light" ? Themes.primary.primaryColor : "white"};
  background: ${Themes[props.theme].primaryColor};
  `}
`

const WireButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  min-width: 11rem;
  background: transparent;
  cursor: pointer;

  color: ${Themes.primary.primaryColor};
  border: 2px solid ${Themes.primary.primaryColor};

  ${props => props.theme && typeof props.theme === "string" && css`
  color: ${Themes[props.theme].primaryColor};
  border: 2px solid ${Themes[props.theme].primaryColor};
  `}
`

const TextButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;

  color: ${Themes.primary.primaryColor};

  ${props => props.theme && typeof props.theme === "string" && css`
  color: ${Themes[props.theme].primaryColor};
  `}
`

class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(Object.keys(Themes))
  }

  render() {
    const styles = {
      wire: WireButton,
      solid: SolidButton,
      text: TextButton
    }
    let StyledButton = this.props.style ? styles[this.props.style] : TextButton
    return (
      <StyledButton theme={this.props.theme ? this.props.theme : undefined} onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button
