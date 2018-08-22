import React from 'react';
import Aux from 'react-aux';

import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey} >
        <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>{props.ingredients[igKey]}
      </li>)
  })

  return (
    <Aux>
      <h3>Your burger</h3>
      <p>Ordered ingredients</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)} USD</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={props.closeModal}> Cancel</Button>
      <Button btnType='Success' clicked={props.continue}>Continue</Button>
    </Aux>
  )
}

export default orderSummary;