import React from 'react' 
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import Nav from './navT.jsx'
  import './navigate.css'
  import Home from '../pages/home'
  import Projects from '../pages/projects'
  import Contact from '../pages/contact'

  
const  Navigate= () =>{

    return(
        
        <Router>
            <Nav>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/projects'  exact component={Projects}/>
                    <Route path='/contact'  exact component={Contact}/>
                </Switch>
            </Nav>
        </Router>
        
    );

}


export default Navigate