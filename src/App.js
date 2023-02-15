import React from 'react';
import './app.css'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Home from './Components/Home/Home'
import FAQ from './Components/FAQ/FAQ'
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'

const App = ()=> {
    return(
      
        <Router>
          <NavBar />
       
          <Switch>
            
            <Route path="/about" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route  path="/" component={Home} />
          </Switch>
          
       </Router>
      
    );
}

export default App