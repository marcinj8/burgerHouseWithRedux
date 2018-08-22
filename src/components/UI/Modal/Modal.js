import React, { Component } from 'react';
import Aux from 'react-aux';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css'

class Modal extends Component {

shouldComponentUpdate (nextProps, nextState) {
  return this.props.show !== nextProps.show || this.props.children !==nextProps.children
}

// componentWillUpdate () {
//   console.log('updated')
// }

  render() {
    return (
      <Aux>
        <Backdrop
          closeModal={this.props.closeModal}
          show={this.props.show} />
        <div
          className='Modal'
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>

    )

  }
}

export default Modal;