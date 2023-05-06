import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'



function App() {
  return (
    <Router>
      <Route exact path='/' component={Login}/>
      <Route exact path='/signin' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/home' component={Home}/>
    </Router>
  )
}

export default App