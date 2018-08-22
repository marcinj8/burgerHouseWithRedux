import React, { Component } from 'react';
import instanceAxios from '../../../axios-orders';
import { connect } from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

import './ContactData.css';

class ContactData extends Component {
  state = {
    orderFrom: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP CODE'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,

        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest',
        valid: true,
        validation: {}
      },
    },
    formIsValid: false,
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let key in this.state.orderFrom) {
      formData[key] = this.state.orderFrom[key].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    instanceAxios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch(error => this.setState({ loading: false }))
  }

  inputChangedHandler = (event, key) => {
    const inputs = {
      ...this.state.orderFrom
    };
    const input = {
      ...inputs[key]
    };
    input.value = event.target.value;
    input.touched = true;
    input.valid = this.validationHandler(input.value, input.validation);
    inputs[key] = input

    let formIsValid = true;
    for (let key in inputs) {
      formIsValid = inputs[key].valid && formIsValid;
    }
    this.setState({
      orderFrom: inputs,
      formIsValid: formIsValid
    })
  }

  validationHandler = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.orderFrom) {
      formElementArray.push({
        id: key,
        config: this.state.orderFrom[key]
      });
    }

    let form = (
      <form action="" onSubmit={this.orderHandler}>
        {formElementArray.map(formElement => {
          return <Input
            touched={formElement.config.touched}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            key={formElement.id}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            inputtype={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value} />
        })}

        <Button btnType='Success' disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />;
    };
    return (
      <div className='ContactData'>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData);