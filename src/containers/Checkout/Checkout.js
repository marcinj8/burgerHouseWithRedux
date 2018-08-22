import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutrContinueHandler = () => {
    this.props.history.replace('/checkout/get-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          ingredients={this.props.ingredients} />
        <Route
          to={this.props.match.path + '/contact-data'}
          component={ContactData} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}


export default connect(mapStateToProps)(Checkout);