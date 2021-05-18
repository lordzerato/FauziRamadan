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
          <Route path="/customers">
            <TheHome />
          </Route>
          <Route exact path="/">
            <Redirect to={{ pathname: "/customers" }} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
