import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';
class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} 
                  clicked={this.props.cancelHandler}/>
        <div className={`${classes.Modal} ${(this.props.show) ? classes.ModalShow : classes.ModalHide}`}>
          {this.props.children}
        </div>
      </Aux> 
    )
  }
}

export default Modal;
