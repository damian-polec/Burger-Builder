import React, { Component } from 'react';
import axios from '../../../axios-orders';
import { withRouter } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    orderForm: {
      name:{
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      email:{
        elementType: 'input',
        elementConfig: {
          type:'email',
          placeholder: 'Your E-mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      }, 
      street: {
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      postalCode: {
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'Your Postal Code'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      }, 
    },
    loading: false
  }

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== ''; 
    }

    return isValid;
  }

  orderHandler = (event) => { 
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};
    
    for (let formElemId in this.state.orderForm) {
      formData[formElemId] = this.state.orderForm[formElemId].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    axios.post('/orders.json', order)
         .then(response => {
           this.setState({loading: false})
           console.log(response);
         }).catch(error => {
           this.setState({loading: false})
           console.log(error);
         }); 
    this.props.history.push('/');

  }

  onChangeHandler = (event, elementId) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[elementId]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(this.updatedFormElement.value, updatedFormElement.validation);
    updatedOrderForm[elementId] = updatedFormElement
    this.setState({orderForm: updatedOrderForm});
  }

  render () {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = null;
    if(this.state.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form onSubmit={this.orderHandler}>
          {formElementsArray.map(formElement => {
            return <Input 
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              change={(event) => this.onChangeHandler(event, formElement.id)}/>
          })}
          <Button 
            btnType='Success'>ORDER</Button>
        </form>
      );
    }
    return (
      <div className={classes.ContactData} >
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default withRouter(ContactData);