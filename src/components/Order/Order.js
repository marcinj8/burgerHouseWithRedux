import React from 'react';

import './Order.css';

const order = (props) => {
  const ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push(
      {
        ingredientName: ingredient,
        amount: props.ingredients[ingredient]
      }
    )
  }
      const showIngredients = ingredients.map( obj => {
        return <span style={{
          border: '1px solid grey', margin: '1px 8px', padding: '5px', bordrSizig: 'border-box', textTransform: 'capitalize', display: 'inline-block'
        }} 
        key={obj.ingredientName}>{obj.ingredientName}:({obj.amount}) </span>
      })

  return (
    <div className='Order'>
      <p>Ingredients: {showIngredients}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order;