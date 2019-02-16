import React, { Component, useContext, useEffect } from 'react'
import { withRouter } from 'react-router'
import { UserContext } from './App'

const GOOGLE_BUTTON_ID = 'google-sign-in-button'
const { GOOGLE_CLIENT_ID } = process.env

const GoogleSignIn = props => {
  const context = useContext(UserContext)

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: GOOGLE_CLIENT_ID
      }).then(() => {
        window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
          'scope': 'profile email',
          'width': 200,
          'height': 50,
          'onsuccess': onSuccess,
        })
      })
    })
  }, [])


  const onSuccess = async (googleUser) => {
    const profile = googleUser.getBasicProfile()
    const payload = {
      name: profile.getName(),
      email: profile.getEmail(),
      photo: profile.getImageUrl()
    }

    const res = await fetch('/auth', {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'include'
    })

    const user  = await res.json()
    context.changeUser(user)
  }

  useEffect(() => {
    if (context.id) {
      props.history.push(props.history.location.state.path)
    }
  })

  return (
    <div id={GOOGLE_BUTTON_ID}  />
  )
}

export default withRouter(GoogleSignIn)
