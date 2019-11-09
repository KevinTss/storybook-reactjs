import React from 'react';

export default (props) => {

  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked');
  }

  return (
    <button onClick={handleClick}>{props.label}</button>
  )
}