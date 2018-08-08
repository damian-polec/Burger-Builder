import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const layout = (props) => {
  return (
    <Aux>
      <div>
        Toolbar, Side Drawer, Backdrop
      </div>
      <main>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;