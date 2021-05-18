import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  TheHome,
  NotFound
} from './views'
import { TheNav } from './components'

function App() {
  return (
    <>
        <TheNav />
      <Router>
        <Switch>
          <Route path="/home" component={TheHome}/>
          <Route exact path="/">
            <Redirect to={{ pathname: "/home" }} />
          </Route>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
