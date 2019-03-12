import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Test from '../test'
import Nav from '../nav'



const App = () => (
  <div>

    <header>
      <Nav></Nav>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/test" component={Test}/>
    </main>

  </div>
)

export default App
