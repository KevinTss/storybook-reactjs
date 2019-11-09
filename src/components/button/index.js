import React from 'react'

export default props => {
  function handleClick(e) {
    e.preventDefault()
    console.log('Clicked')
  }

  return (
    <button className='hello' onClick={handleClick}>
      {props.label}
    </button>
  )
}
