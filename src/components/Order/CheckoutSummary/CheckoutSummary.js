import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className='CheckoutSummary'>
      <h1>We hope it will taste well!!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        clicked={props.checkoutCancel}
        btnType='Danger'>CANCEL</Button>
      <Button
        clicked={props.checkoutContinue}
        btnType='Success'>CONFIRM</Button>
    </div>
  )
}

export default checkoutSummary;