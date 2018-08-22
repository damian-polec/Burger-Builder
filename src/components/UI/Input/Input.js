import React from 'react';

import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  switch(props.elementType) {
    case('input'):
      inputElement = <input 
        className={classes.InputElement} 
        {...props.elementConfig}
        onChange={props.change} 
        value={props.value}/>;
      break;
    case('textarea'):
      inputElement = <textarea 
        {...props.elementConfig}
        onChange={props.change} 
        value={props.value}/>;
      break;
    default:
      inputElement = <input 
        {...props.elementConfig}
        onChange={props.change} 
        value={props.value}/>;
  }
  
  return (
  <div className={classes.Input}>
    <label className={classes.Label}>{props.label}</label>
    {inputElement}
  </div>
  )
}

export default input;