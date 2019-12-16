import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: 16px;
  cursor: pointer;

  ${({ type }) => {
    if (type === 'primary') {
      return `
        background-color: #4caf50;
        border-color: #4caf50;
        color: white;
      `
    }
  }}
`

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = e => {
    e.preventDefault()
    console.log('Clicked', this)
  }

  render() {
    return (
      <StyledButton type={this.props.type} onClick={this.handleClick}>
        {this.props.label}
      </StyledButton>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary']),
}

Button.defaultProps = {
  type: 'default',
}

export default Button
