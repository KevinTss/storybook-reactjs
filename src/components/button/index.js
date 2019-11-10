import React from 'react'

import './style.scss'

export default props => {
  function handleClick(e) {
    e.preventDefault()
    console.log('Clicked')
  }

  return (
    <button className='btn' onClick={handleClick}>
      {props.label}
    </button>
  )
}
