import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// Page

import Home from './components/pages/home'
import Project from './components/pages/projects'
import Navigate from './components/sidebar/navigate'
import NavigateMove from './components/navigateMove/navigateMove'
import Card from './components/card/card'




function App() {
  return (
    
  <div>
  <Navigate/>
  <Card/>
  </div>

    );
}

export default App;
