import './App.css';
import React, { useEffect } from 'react';
import { SmoothScroll } from './Functions'
import { Switch, Route, useLocation } from "react-router-dom";

// Componenets
import NavBar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer'
import ComingSoon from './Components/ComingSoon'


function App() {
  const location = useLocation();

  useEffect(() => {
    new SmoothScroll(document, 100, 20)
  }, [])

  return (
    <>
      <NavBar  location={location.pathname.slice(1)} dark={true}/>
      <Switch> 
        <Route path='/about'>
          <About/>
        </Route> 
        <Route path='/services'>
          <ComingSoon />
        </Route> 
        <Route path='/projects'>
          <ComingSoon />
        </Route> 
      </Switch>
      <Footer />
    </>
  );
}

export default App;