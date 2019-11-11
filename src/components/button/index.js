import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <button className={this.getStyleClasses()} onClick={this.handleClick}>
        {this.props.label}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary']),
}

export default Button
