import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <Switch>
          <Route path="/" exact components={Home}></Route>
          <Route path="/aboutMe">
            <h1>About Me</h1>
          </Route>
          <Route path="/portfolio">
            <h1>portfolio</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
