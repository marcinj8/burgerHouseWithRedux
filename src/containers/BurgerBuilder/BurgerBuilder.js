import React, { Component } from 'react';
import Aux from 'react-aux';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import instanceAxios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions/index';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    // instanceAxios.get('https://react-my-burger-51222.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     this.setState({ ingredients: response.data })
    //   })
    //   .catch(error => {
    //     this.setState({ error: true })
    //   })
  }

  updatePurchaseState(ingredients) {
    let sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((val, el) => {
        return val + el
      }, 0);

      return sum > 0
  }

    purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  closeModalHandler = () => {
    this.setState({ purchasing: false })
  }

  orderContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    let burger = this.state.error ? <p>Ingredients can not be loaded...</p> : <Spinner />

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            purchasing={this.purchaseHandler}
            ingredients={this.props.ings}
            addIngredient={this.props.onIngredientAdded}
            removeIngredient={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)} />
        </Aux>
      );
      orderSummary = <OrderSummary
        closeModal={this.closeModalHandler}
        continue={this.orderContinueHandler}
        price={this.props.price}
        ingredients={this.props.ings} />
    }
    return (
      <Aux>
        <Modal
          closeModal={this.closeModalHandler}
          show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredient) => dispatch(actionTypes.addIngredient(ingredient)),
    onIngredientRemoved: (ingredient) => dispatch(actionTypes.removeIngredient(ingredient))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, instanceAxios));