import React from 'react';

import BuildControl from './BuildControl/BuildControl'

import './BuildControls.css'

const buildControls = (props) => {

  let controlBlock = Object.keys(props.ingredients).map(ingredientKey => {
    return <BuildControl
      key={ingredientKey}
      label={ingredientKey}
      adding={() => props.addIngredient(ingredientKey)}
      removing={() => props.removeIngredient(ingredientKey)}
      disabledButton={props.disabled[ingredientKey]} />
  }

  )

  return (
    <div className='BuildControls'>
      <p>Current price: <strong>{props.price.toFixed(2)} USD</strong></p>
      {controlBlock}
      <button
        onClick={props.purchasing}
        className='OrderButton'
        disabled={!props.purchasable}>Order</button>
    </div>
  )
}



export default buildControls;