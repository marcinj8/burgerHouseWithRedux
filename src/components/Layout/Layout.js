import React, { Component } from 'react';
import Aux from 'react-aux';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState )=> {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  sideDrawerCloseHandler = () => {
    this.setState ({showSideDrawer: false})
  }
  render() {

    return (
      <Aux>
        <Toolbar openSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
        <main className='BurgerBuilder'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;