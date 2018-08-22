import React from 'react';

import './BuildControl.css'

const buildControl = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button onClick={props.removing} className='Less' disabled={props.disabledButton}>Less</button>
    <button onClick={props.adding} className='More'>More</button>
  </div>
);

export default buildControl;