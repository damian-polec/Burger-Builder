import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  bacon: 1.2,
  cheese: 1.5,
  meat: 2,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,   
    },
    totalPrice: 0,
    purchasable: true,
    purchasing: false
  }

  updatePurchaseState = (ingredients) => {
    const values = Object.values(ingredients);
    (values.some(value => value > 0)) ? this.setState({purchasable: false}) : this.setState({purchasable: true});
  }

  addIngredient = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIng = {
      ...this.state.ingredients
    }
    updatedIng[type] = newCount;
    this.setState({
      ingredients: updatedIng
    });
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({totalPrice: newPrice});
    this.updatePurchaseState(updatedIng);
  }

  removeIngredient = (type) => {
    if(this.state.ingredients[type] === 0) {
      return;
    }
    const newCount = this.state.ingredients[type] - 1;
    const updatedIng = {
      ...this.state.ingredients
    }
    updatedIng[type] = newCount;
    this.setState({ingredients: updatedIng});
    const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({totalPrice: newPrice});
    this.updatePurchaseState(updatedIng);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    } 
    return (
      <Aux>
        <Modal show={this.state.purchasing}
               cancelHandler={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredients={this.state.ingredients}
                       add={this.addIngredient}
                       remove={this.removeIngredient}
                       disabled={disabledInfo}
                       price={this.state.totalPrice}
                       purchasable={this.state.purchasable}
                       purchasing={this.purchaseHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;