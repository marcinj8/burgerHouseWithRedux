import React from 'react';
import Aux from 'react-aux';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css'

const sideDrawer = props => {

  let SideDrawerClasses = ['SideDrawer', 'Close']

  if(props.open){
    SideDrawerClasses = ['SideDrawer', 'Open'];
  }


  return (
    <Aux>
      <Backdrop className='BackdropDesktop' show={props.open} closeModal={props.close} />
      <div className={SideDrawerClasses.join(' ')}>
        <div className='SideDrawer__logo'>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>

  )
}

export default sideDrawer;