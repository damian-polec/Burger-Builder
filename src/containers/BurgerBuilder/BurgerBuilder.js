import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    totalPrice: 0
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
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredients={this.state.ingredients}
                       add={this.addIngredient}
                       remove={this.removeIngredient}
                       disabled={disabledInfo}
                       price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;