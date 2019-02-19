import React, { Fragment, useContext, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' 
import { createGlobalStyle } from 'styled-components'
import PrivateRoute from './PrivateRoute'
import GoogleSignIn from './GoogleSignIn'
import Home from './Home'

export const UserContext = React.createContext()
const UserProvider = (props) => {
  const defaultUser = {
    id: null,
    changeUser: (attrs) => { 
      setUser({
        ...user,
        ...attrs
      })
    }
  }

  const [user, setUser] = useState(defaultUser)
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

const App = (props) => {
  const context = useContext(UserContext)
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #F4F8FB;
      font-family: Lato;
      color: #4C555C;
    }
  `
  return (
    <Fragment>
      <GlobalStyle />
      <UserProvider>
        <Switch>
          <Route path='/login'
            render={() => (
              <GoogleSignIn />
            )}
          />
          <PrivateRoute path="/home" component={Home} />
          <Redirect from='/' to='home' />
        </Switch>
      </UserProvider>
    </Fragment>
  )
}

export default App
