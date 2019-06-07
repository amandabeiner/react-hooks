import React, {Fragment, useContext, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import PrivateRoute from './PrivateRoute';
import GoogleSignIn from './GoogleSignIn';
import Home from './Home';
import {UserProvider} from './UserContext';

const App = props => {
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #F4F8FB;
      font-family: Lato;
      color: #4C555C;
    }
  `;
  return (
    <Fragment>
      <GlobalStyle />
      <UserProvider>
        <Switch>
          <PrivateRoute path="/home" component={Home} />
          <Route path="/login" component={GoogleSignIn} />
          <Redirect from="/" to="home" />
        </Switch>
      </UserProvider>
    </Fragment>
  );
};

export default App;
