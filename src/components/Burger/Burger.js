import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = (props) => {
  let convertIngredients = Object.keys(props.ingredients)
    .map(ingKey =>{
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />
        })
      })
    .reduce((acc, arr) => {
      return acc.concat(arr);
    }, []);
  if(convertIngredients.length === 0) {
    convertIngredients = <p>Start adding ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {convertIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default burger;