import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Courses from './Component/Courses'
import Placements from './Component/Placements'
import Gallery from './Component/Gallery'
import About from './Component/About'
import Contact from './Component/Contact'



function App() {
  return (
    <Router>
      <Route exact path='/' component={Login}/>
      <Route exact path='/signin' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/courses' component={Courses} />
      <Route exact path='/placement' component={Placements} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  )
}

export default App