import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Comps from 'index'

const Routes = (props) => {
  if (props.signedIn) {
    return (
      <div>
        <Switch>
          <Route path="/reviews" component={Comps.Reviews} />
          <Route path="/profile" component={Comps.Profile} />
          <Route path="/signout" component={Comps.Sessions.Destroy} />
          <Route path="/confirm" component={Comps.Registration.ConfirmEmail} />
          <Redirect exact from="/signup" to="/profile" />
        </Switch>
      </div>
    )
  } else if (props.signedIn === false) {
    // If not signed in provide signIn route and redirect
    return (
      <Switch>
        <Route path="/signin" component={Comps.Sessions.New} />
        <Route path="/signup" component={Comps.Registration.NewProvider} />
        <Redirect from="/" to="/signin" />
      </Switch>
    )
  } else {
    return null
  }
}

const styledRoutes = styled(Routes)`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
`

export default styledRoutes
