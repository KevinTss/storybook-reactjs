import React, { Component } from 'react'

import './style.scss'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    e.preventDefault()
    console.log('Clicked')
  }

  render() {
    return (
      <button className='btn' onClick={this.handleClick}>
        {this.props.label}
      </button>
    )
  }
}

export default Button
