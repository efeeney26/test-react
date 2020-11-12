import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'

import { Home, About } from './pages'

const Container = () => (
  <Router>
    <Switch>
      <Route
        component={Home}
        exact
        path='/'
      />
      <Route
        component={About}
        exact
        path='/about'
      />
    </Switch>
  </Router>
)

function App () {
  return (
    <Container />
  )
}

export default App
