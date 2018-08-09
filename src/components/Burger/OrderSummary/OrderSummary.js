import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary'

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ing, i) => {
    return <li key={i}>{ing}: {props.ingredients[ing]}</li>
  });
  console.log(ingredients);
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingredients}
      </ul>
    </Aux>
  );
};

export default orderSummary;