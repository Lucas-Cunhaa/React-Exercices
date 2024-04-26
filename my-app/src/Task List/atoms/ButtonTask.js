import React from 'react';

// Átomos
const Button = (props) => {
  return(
  <button onClick={props.onClickAddTask}>{props.children}</button>
 )
}

export default Button
