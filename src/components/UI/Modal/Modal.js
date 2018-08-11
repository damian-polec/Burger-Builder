import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';
const modal = (props) => {
  
  return (
    <Aux>
      <Backdrop show={props.show} 
                clicked={props.cancelHandler}/>
      <div className={`${classes.Modal} ${(props.show) ? classes.ModalShow : classes.ModalHide}`}>
        {props.children}
      </div>
    </Aux>
  );
}

export default modal;
