import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css'

const buildControls = (props) => {
  let ingredientsList = Object.keys(props.ingredients)
                              .map(ing => {
    return <BuildControl key={ing} 
                         label={ing} 
                         add={() => props.add(ing)}
                         remove={() => props.remove(ing)}
                         disabled={props.disabled[ing]}/>
  });
  return (
    <div className={classes.BuildControls}>
      <p>Total Price: <strong>{props.price.toFixed(2)}£</strong></p>
      {ingredientsList}
      <button className={classes.OrderButton} disabled={props.purchasable}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;
