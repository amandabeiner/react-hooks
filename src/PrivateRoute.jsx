import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from './App'

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const context = useContext(UserContext)
  
  return (
    <Route
      {...rest}
      render={(props) => context.id ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { path } }} />}
    />
  )
}

export default PrivateRoute
