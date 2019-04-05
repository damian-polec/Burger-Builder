import React, { Component, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import * as actions from './store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders =  React.lazy(() => import('./containers/Orders/Orders'));
const Logout = React.lazy(() => import('./containers/Auth/Logout/Logout'));

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render () {

    return (
      <div>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {this.props.isAuthenticated 
                ? <Route path="/checkout" component={Checkout} />
                : null }
              {this.props.isAuthenticated 
                ? <Route path="/orders" component={Orders} />
                : null }
              <Route path='/auth' component={Auth} />
              {this.props.isAuthenticated
                ? <Route path='/logout' component={Logout} />
                : null
              }
              <Route path="/" exact component={BurgerBuilder} />
              <Redirect to='/' />
            </Switch>
          </Suspense>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
