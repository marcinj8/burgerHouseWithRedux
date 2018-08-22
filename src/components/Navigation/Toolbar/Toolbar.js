import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

import './Toolbar.css';

const toolbar = props => (
  <header className='Toolbar'>
    <DrawerToggler open={props.openSideDrawer} />
    <div className='Toolbar__logo'>
      <Logo />
    </div>
    <nav className='desktopOnly'>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar;