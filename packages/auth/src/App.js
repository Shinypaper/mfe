import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Signup from './components/Signup'
import Signin from './components/Signin'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

export default ({ history, onSignIn }) => {
  return <div>
    <h1>Helllo</h1>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <Signin onSignIn={onSignIn}/>
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn}/>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
}