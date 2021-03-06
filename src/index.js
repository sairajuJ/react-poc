import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from 'redux/actions/auth';
import HomeContainer from 'components/home/home-container';
import LoginContanier from 'components/login/login-container';
import Signup from 'components/signup/signup';
import LayoutComponent from 'components/layout/layout-component';
import NotFoundComponent from 'components/not-found/not-found-component';
import 'font-awesome/css/font-awesome.css';
import 'assets/styles/main.css';
import requireAuth from 'utils/requireAuth';
import store from 'redux/store';
import withTracker from 'utils/withTracker';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={withTracker(HomeContainer)}></Route>
        <Route path="/login" component={withTracker(LoginContanier)}></Route>
        <Route path="/signup" component={withTracker(Signup)}></Route>
        <Route path="/app" component={withTracker(requireAuth(LayoutComponent))}></Route>
        <Route component={withTracker(NotFoundComponent)}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
