import './App.css';
import React, { useEffect } from 'react';
import { SmoothScroll } from './Functions'
import { Switch, Route, useLocation} from "react-router-dom";

// Componenets
import About from './Components/About';
import Footer from './Components/Footer'
import ComingSoon from './Components/ComingSoon';
import Error404 from './Components/Error404';
import LandingPage from './Components/LandingPage';
import Services from './Components/Services';


function App() {
  const location = useLocation();

  useEffect(() => {
    new SmoothScroll(document, 100, 20)
  }, [])

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path='/about'>
          <About/>
          <Footer />
        </Route>
        <Route path='/services'>
          <Services />
          <Footer />
        </Route>
        <Route path='/projects'>
          <ComingSoon />
          <Footer />
        </Route>
        <Route path='/'>
          <LandingPage />
          <Footer />
        </Route>
        <Route>
          <Error404 />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;