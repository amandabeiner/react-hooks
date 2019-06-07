import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';
import {useUser} from './UserContext';

const PrivateRoute = ({component: Component, path, ...rest}) => {
  const [user, setUser] = useUser();

  return (
    <Route
      {...rest}
      render={props =>
        user.id ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
