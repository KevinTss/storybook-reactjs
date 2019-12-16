import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: red;
`

import './style.scss'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = e => {
    e.preventDefault()
    console.log('Clicked', this)
  }

  getStyleClasses = () => `btn ${this.props.type}`

  render() {
    return (
      <StyledButton
        className={this.getStyleClasses()}
        onClick={this.handleClick}>
        {this.props.label}
      </StyledButton>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary']),
}

export default Button
