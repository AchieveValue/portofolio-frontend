import './App.css';
import React, { useEffect } from 'react';
import { SmoothScroll } from './Functions'
import { Switch, Route, useLocation } from "react-router-dom";

// Componenets
import NavBar from './Components/Navbar';
import About from './Components/About';


function App() {
  const location = useLocation();

  useEffect(() => {
    new SmoothScroll(document,100 ,25)
  }, [])

  return (
    <>
      <NavBar  location={location.pathname.slice(1)} dark={true}/>
      <Switch> 
        <Route path='/about'>
          <About/>
        </Route> 
        <Route path='/services'>
          <About/>
        </Route> 
        <Route path='/projects'>
          <About/>
        </Route> 
      </Switch>
    </>
  );
}

export default App;
