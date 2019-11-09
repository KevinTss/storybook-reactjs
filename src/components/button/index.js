import React from 'react'

import './index.css'

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
