import React from 'react';

import './Input.css';

const input = props => {
  let inputElement = null;
  const inputStyle = ['InputElement'];
  if(props.invalid && props.shouldValidate && props.touched) {
    inputStyle.push('Invalid')
  }
  switch (props.inputtype) {
    case ('input'):
      inputElement = <input
        className={inputStyle.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('textArea'):
      inputElement = <textarea
        className={inputStyle.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = (
        <select
        className={inputStyle.join(' ')}
          onChange={props.changed}
          value={props.value}>
          {props.elementConfig.options.map(option => {
            return (
              <option
                key={option.value}
                value={option.value}>
                {option.displayValue}
              </option>)
          })}
        </select>)
      break;
    default:
      inputElement = <input
        className={inputStyle.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
  }
  return (
    <div className='Input'>
      <label className='Label' >{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;