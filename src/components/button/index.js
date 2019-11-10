import React, { Component } from 'react'

import './style.scss'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { buttonStyleClasses: 'btn' }
  }

  handleClick = e => {
    e.preventDefault()
    console.log('Clicked', this)
  }

  componentDidMount() {
    if (this.props.type) {
      const newClass = this.state.buttonStyleClasses + ' ' + this.props.type
      this.setState({ buttonStyleClasses: newClass })
    }
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
