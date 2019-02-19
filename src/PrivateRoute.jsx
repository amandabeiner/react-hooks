import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from './App'

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  // EXAMPLE_CONTEXT_6: Consume context. If no user is present, prompt to sign in.
  const context = useContext(UserContext)
  
  return (
    <Route
      {...rest}
      render={(props) => context.id ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { path } }} />}
    />
  )
}

export default PrivateRoute
