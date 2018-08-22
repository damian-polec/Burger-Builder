import React from 'react';

import classes from './Order.css';

const order = (props) => {
  let ingredients = [];

  for (let ingName in props.ingredients) {
    ingredients.push(
      {
        name: ingName,
        amount: props.ingredients[ingName]
      }
    )
  }

  const ingOutput = ingredients.map(ig => {
    return <span 
      key={ig.name}
      className={classes.Span}>{ig.name}: {ig.amount}</span>
  })
  return (
  <div className={classes.Order}>
    <p>Ingredients: {ingOutput}</p>
    <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
  </div>
)}

export default order;