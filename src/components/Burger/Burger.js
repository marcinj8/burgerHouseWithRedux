import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import './Burger.css'

const burger = (props) => {
  let ingredientsArray = Object.keys(props.ingredients).map( ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      return <BurgerIngredient 
      key={ingredientKey + i}
      type={ingredientKey} />
    })
  })
  .reduce((currVal, val) => {
    return currVal.concat(val)
  }, [])

if(ingredientsArray.length === 0) {
  ingredientsArray = <p>Please start adding ingredients!!</p>
}

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top'/>
      {ingredientsArray}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
}

export default burger;