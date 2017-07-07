// App will render different views based on the state value of signedIn

import React from 'react'
import { Route } from 'react-router-dom'
import NavContainer from './navbar/NavContainer'

import Routes from '../Routes'
import globalStyles from './styled/global'

class App extends React.Component {

  render() {
    return (
      <div>
        <globalStyles />
        <NavContainer />
        <Routes />
      </div>
    )
  }
}

export default App