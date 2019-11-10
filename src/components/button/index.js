import React, { Component } from 'react'

import './style.scss'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { buttonStyleClasses: 'btn' }
  }

  handleClick(e) {
    e.preventDefault()
    console.log('Clicked')
  }

  render() {
    return (
      <button
        className={this.state.buttonStyleClasses}
        onClick={this.handleClick}>
        {this.props.label}
      </button>
    )
  }
}

export default Button
