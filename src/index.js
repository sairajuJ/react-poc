import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './app/reducers/index';
import setAuthorizationToken from './app/utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './app/actions/authActions';
import App from './app/app';
import Login from './app/components/login/login';
import Signup from './app/components/signup/signup';
import Layout from './app/components/layout/layout';
import NotFound from './app/components/not-found/not-found';
import 'font-awesome/css/font-awesome.css';
import requireAuth from './app/utils/requireAuth';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/app" component={requireAuth(Layout)}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
