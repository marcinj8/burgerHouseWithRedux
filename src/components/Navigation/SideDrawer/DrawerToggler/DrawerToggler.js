import React from 'react';

import './DrawerToggler.css';

const drawerToggler = (props) => (
  <div onClick={props.open} className='DrawerToggle'>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggler; 