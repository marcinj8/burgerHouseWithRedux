import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';


const navigationItems = props => (
  <ul className='NavigationItems'>
    <NavigationItem linkTo='/' exact>Burger Builder</NavigationItem>
    <NavigationItem linkTo='/orders'>Orders</NavigationItem>
  </ul>
)

export default navigationItems;