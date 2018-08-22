import * as actionTypes from './actionTypes';

export const addIngredient = (ing) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ing
  };
};

export const removeIngredient = (ing) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ing
  }
}