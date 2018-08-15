import React from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ing, i) => {
    return <li key={i}>{ing}: {props.ingredients[ing]}</li>
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingredients}
      </ul>
      <p><strong>Total Price: </strong> {props.price.toFixed(2)}</p>
      <Button clicked={props.clicked}
              btnType='Danger'>Cancel</Button>
      <Button clicked={props.clicked}
              btnType='Success'>Continue</Button>
    </Aux>
  );
};

export default orderSummary;